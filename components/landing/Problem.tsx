"use client";

import { DollarSign, Cog, FileQuestion } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Cost Barrier",
    description:
      "Enterprise tools cost $99+ per agent seat—too expensive for growing teams with limited budgets.",
  },
  {
    icon: Cog,
    title: "Technical Complexity",
    description:
      "Setup requires developers or technical knowledge you don't have time for. You just want it to work.",
  },
  {
    icon: FileQuestion,
    title: "Knowledge Base Struggle",
    description:
      "You don't know what to put in your knowledge base or how to train the AI effectively.",
  },
];

export function Problem() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            AI Support Tools Weren&apos;t Built for Small Teams
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Existing solutions are designed for enterprises with dedicated IT teams and unlimited
            budgets.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-muted/30 border-border/50 rounded-lg border p-6 text-center"
            >
              <div className="bg-destructive/10 text-destructive mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-primary mt-10 text-center text-lg font-medium">
          That&apos;s why we built Chasistem—AI support designed for small teams, with guidance every
          step of the way.
        </p>
      </div>
    </section>
  );
}
