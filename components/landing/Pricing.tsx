"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";

const tiers = [
  {
    name: PRICING_TIERS.starter.name,
    price: PRICING_TIERS.starter.price,
    features: PRICING_TIERS.starter.features,
    highlighted: false,
  },
  {
    name: PRICING_TIERS.growth.name,
    price: PRICING_TIERS.growth.price,
    features: PRICING_TIERS.growth.features,
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: PRICING_TIERS.scale.name,
    price: PRICING_TIERS.scale.price,
    features: PRICING_TIERS.scale.features,
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Start small and scale as you grow. All plans include our 3-way AI system.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${
                tier.highlighted ? "border-primary ring-primary/20 scale-105 shadow-lg ring-1" : ""
              }`}
            >
              {tier.badge && (
                <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-medium">
                  {tier.badge}
                </div>
              )}
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">\${tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#waitlist">Join Waitlist</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-muted-foreground mt-8 text-center text-sm">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
