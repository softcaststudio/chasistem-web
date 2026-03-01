"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Headphones, Wand2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI #1: Customer-Facing",
    description:
      "24/7 intelligent chat widget that answers FAQs and resolves common issues instantly. Your customers get help, even when you are asleep.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "AI #2: Agent-Facing",
    description:
      "Smart copilot that drafts responses, summarizes context, and prioritizes tickets. Your support team works faster and smarter.",
    highlight: false,
  },
  {
    icon: Wand2,
    title: "AI #3: Builder-Facing",
    description:
      "No-code setup wizard that ingests your docs and configures everything automatically. The AI that sets up your AI support.",
    highlight: true,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Three AIs Working Together</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Chasistem is the only platform with three integrated AI systems, designed to help
            customers, agents, and business owners alike.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                feature.highlight ? "border-primary ring-primary/20 shadow-md ring-1" : ""
              }`}
            >
              {feature.highlight && (
                <div className="bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-medium">
                  Key Differentiator
                </div>
              )}
              <CardHeader>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                    feature.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
