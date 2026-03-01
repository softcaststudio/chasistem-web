"use client";

import { useEffect, useState } from "react";
import { WAITLIST_MIN_DISPLAY_COUNT, WAITLIST_MAX_DISPLAY_COUNT } from "@/lib/constants";

interface WaitlistCountProps {
  className?: string;
}

export function WaitlistCount({ className }: WaitlistCountProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/waitlist/count");
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
      }
    }

    fetchCount();
  }, []);

  // Don't render if count is null or below minimum threshold
  if (count === null || count < WAITLIST_MIN_DISPLAY_COUNT) {
    return null;
  }

  // Cap display at max count
  const displayCount = Math.min(count, WAITLIST_MAX_DISPLAY_COUNT);
  const displayText =
    displayCount >= WAITLIST_MAX_DISPLAY_COUNT
      ? `${WAITLIST_MAX_DISPLAY_COUNT}+`
      : displayCount.toString();

  return (
    <p className={className}>
      Join <span className="font-semibold">{displayText}</span> others on the waitlist
    </p>
  );
}
