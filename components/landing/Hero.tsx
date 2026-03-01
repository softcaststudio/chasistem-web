"use client";

import { WaitlistForm, WaitlistCount } from "@/components/waitlist";
import { APP_TAGLINE, APP_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {APP_TAGLINE}
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            {APP_DESCRIPTION}
          </p>

          {/* Waitlist Form */}
          <div id="waitlist" className="mx-auto max-w-md pt-4">
            <WaitlistForm className="w-full" />
            <WaitlistCount className="text-muted-foreground mt-4 text-sm" />
          </div>

          {/* Trust Indicators */}
          <div className="text-muted-foreground pt-8 text-sm">
            <p>No credit card required • Setup in 5 minutes • Cancel anytime</p>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-gradient-radial from-primary/20 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full via-transparent to-transparent blur-3xl" />
        </div>
      </div>
    </section>
  );
}
