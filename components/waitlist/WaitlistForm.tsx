"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistSuccess } from "./WaitlistSuccess";

type FormState = "idle" | "loading" | "success" | "error";

interface WaitlistFormProps {
  onSuccess?: (position: number) => void;
  className?: string;
}

export function WaitlistForm({ onSuccess, className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [position, setPosition] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setState("error");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setPosition(data.position ?? null);
        setState("success");
        onSuccess?.(data.position ?? 0);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return <WaitlistSuccess position={position} />;
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") {
              setState("idle");
              setErrorMessage("");
            }
          }}
          disabled={state === "loading"}
          className="h-12 flex-1 px-4 text-base"
          aria-label="Email address"
          aria-describedby={state === "error" ? "email-error" : undefined}
        />
        <Button
          type="submit"
          disabled={state === "loading"}
          className="h-12 px-8 text-base font-semibold"
        >
          {state === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
      {state === "error" && (
        <p id="email-error" className="mt-2 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
