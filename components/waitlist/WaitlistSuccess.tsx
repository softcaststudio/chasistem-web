"use client";

import { CheckCircle2 } from "lucide-react";

interface WaitlistSuccessProps {
  position?: number | null;
}

export function WaitlistSuccess({ position }: WaitlistSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle2 className="h-6 w-6" />
        <span className="text-lg font-semibold">You&apos;re on the list!</span>
      </div>
      {position && (
        <p className="text-muted-foreground">
          You&apos;re position <span className="text-foreground font-semibold">#{position}</span> on
          the waitlist.
        </p>
      )}
      <p className="text-muted-foreground text-sm">
        We&apos;ll notify you when Chasistem is ready for you.
      </p>
    </div>
  );
}
