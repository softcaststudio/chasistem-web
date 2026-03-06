"use client";

import { WaitlistForm } from "@/components/waitlist";

export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-lg opacity-90">
            Join the waitlist and be among the first to experience AI-powered support that sets
            itself up.
          </p>
          <div className="mx-auto max-w-md rounded-lg bg-background/10 p-4 backdrop-blur-sm">
            <WaitlistForm className="w-full" />
          </div>
          <p className="text-sm opacity-75">
            No credit card required - Setup in 5 minutes - Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
