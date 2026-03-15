"use client";

import { CheckCircle2 } from "lucide-react";

interface WaitlistSuccessProps {
  variant?: "default" | "primary";
}

export function WaitlistSuccess({ variant = "default" }: Readonly<WaitlistSuccessProps>) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 text-green-400">
        <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        <span className="text-lg font-semibold">You&apos;re on the list!</span>
      </div>
      <p className={variant === "primary" ? "text-primary-foreground/80 text-sm" : "text-muted-foreground text-sm"}>
        We&apos;ll notify you when Chasistem is ready for you.
      </p>
    </div>
  );
}
