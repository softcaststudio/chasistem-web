"use client";

import { Upload, Bot, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Upload,
    title: "Upload Your Docs",
    description:
      "Simply upload your existing documentation, FAQs, or knowledge base. Our AI reads and understands everything.",
  },
  {
    step: 2,
    icon: Bot,
    title: "AI Configures Itself",
    description:
      "The Builder-Facing AI automatically sets up your chat widget, trains responses, and optimizes for your business.",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Go Live Instantly",
    description:
      "Copy one line of code to your site. Your AI support is now live and ready to help customers 24/7.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Setup in 3 Simple Steps</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            No technical knowledge required. From zero to AI-powered support in under 5 minutes.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connection Line */}
            <div className="bg-primary/20 absolute top-12 left-1/2 hidden h-0.5 w-2/3 -translate-x-1/2 md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="relative text-center">
                  {/* Step Number */}
                  <div className="bg-primary/10 relative mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full">
                    <div className="border-primary/30 absolute inset-0 rounded-full border-2" />
                    <item.icon className="text-primary h-10 w-10" />
                    <div className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
