"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, Database, RefreshCw, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "AI Guides You",
    description: "Get personalized recommendations on what to add next. The AI identifies gaps and suggests improvements.",
  },
  {
    icon: Database,
    title: "Manage Context",
    description: "Upload, edit, or remove content. Keep your AI's knowledge accurate and up-to-date.",
  },
  {
    icon: Sparkles,
    title: "AI Upgraded",
    description: "Your support AI gets better instantly. Better answers, fewer handoffs, happier customers.",
  },
];

export function HowItWorks() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 12000; // 12 seconds for full rotation

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newRotation = (elapsed / duration) * 360;
      setRotation(newRotation % 360);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Continuous Improvement Cycle</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Your AI support gets smarter every time you add context. A simple feedback loop that
            keeps improving.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Circular Cycle Animation */}
          <div
            className="relative mx-auto h-[400px] w-full max-w-[400px]"
            role="img"
            aria-label="Continuous improvement cycle animation showing three steps rotating in a circle"
          >
            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Orbiting items - icon centers aligned on circle path */}
            {steps.map((step, index) => {
              const baseAngle = index * 120; // 360 / 3 = 120 degrees apart
              const currentAngle = baseAngle + rotation;
              const radians = (currentAngle * Math.PI) / 180;
              const radius = 160;
              const x = Math.cos(radians - Math.PI / 2) * radius; // Start from top
              const y = Math.sin(radians - Math.PI / 2) * radius;

              return (
                <div
                  key={step.title}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {/* Icon circle - center aligned on path */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-lg ring-2 ring-primary/30">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  {/* Label always below */}
                  <div className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center">
                    <p className="text-sm font-semibold">{step.title}</p>
                  </div>
                </div>
              );
            })}

            {/* SVG circle path */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Dashed circle path */}
              <circle
                cx="200"
                cy="200"
                r="160"
                stroke="currentColor"
                strokeOpacity="0.15"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary"
              />
            </svg>
          </div>

          {/* Loop explanation */}
          <p className="text-primary mt-10 text-center font-medium">
            Repeat this cycle to continuously improve your AI support
          </p>
        </div>
      </div>
    </section>
  );
}
