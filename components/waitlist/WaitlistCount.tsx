"use client";

import { useEffect, useState } from "react";
import { WAITLIST_MIN_DISPLAY_COUNT, WAITLIST_MAX_DISPLAY_COUNT } from "@/lib/constants";
import { config } from "@/lib/config";
import type { WaitlistCountResponse } from "@/lib/types/api";

interface WaitlistCountProps {
  className?: string;
}

export function WaitlistCount({ className }: Readonly<WaitlistCountProps>) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch(`${config.apiBaseUrl}/v1/waitlist/count`);
        if (response.ok) {
          const data: WaitlistCountResponse = await response.json();
          // Use `total` field from backend response
          setCount(data.total);
        }
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
      }
    }

    fetchCount();
  }, []);

  // Don't render if count is invalid, null, or below minimum threshold
  if (count === null || Number.isNaN(count) || count < WAITLIST_MIN_DISPLAY_COUNT) {
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
