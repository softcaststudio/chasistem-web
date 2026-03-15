"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Headphones, Wand2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI #1: 24/7 Customer Chatbot",
    description:
      "Intelligent chatbot powered by LLM that answers customer questions anytime. Context-aware conversations that understand your business, with seamless handoff to human agents when needed.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "AI #2: Agent Copilot",
    description:
      "Smart assistant that drafts responses for your team to review. Prioritizes tickets by urgency, summarizes customer context, and suggests relevant knowledge base articles—so your agents work faster.",
    highlight: false,
  },
  {
    icon: Wand2,
    title: "AI #3: Guided Setup AI",
    description:
      "Upload your existing docs and our AI extracts knowledge automatically. Identifies gaps in your content and guides you to fill them. Step-by-step setup wizard with ongoing recommendations to improve over time.",
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
