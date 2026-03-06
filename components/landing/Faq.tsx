"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI setup work?",
    answer:
      "Simply upload your existing documentation, FAQs, or knowledge base. Our Builder-Facing AI reads and understands everything, then automatically configures your chat widget, trains responses, and optimizes for your specific business needs. No coding or technical knowledge required.",
  },
  {
    question: "Do I need technical knowledge to use Chasistem?",
    answer:
      "Not at all! That is the whole point of our Builder-Facing AI. If you can upload a document and copy-paste a single line of code, you can set up Chasistem. The AI handles all the technical complexity behind the scenes.",
  },
  {
    question: "What channels does Chasistem support?",
    answer:
      "Chasistem works on your website, and we are adding more channels soon including email, Slack, and social media. The same AI knowledge base powers all channels, so your customers get consistent answers everywhere.",
  },
  {
    question: "How accurate are the AI responses?",
    answer:
      "Our AI is trained specifically on YOUR documentation, so it only answers based on what it knows from your business. When it is not confident about an answer, it gracefully hands off to a human agent. You maintain full control over what the AI says.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes! All plans include a 14-day free trial with full access to all features. No credit card required to start. Join our waitlist to get early access.",
  },
  {
    question: "What happens if the AI cannot answer a question?",
    answer:
      "When the AI encounters a question it cannot confidently answer, it automatically routes the conversation to a human agent. Your Agent-Facing AI provides context summaries and suggested responses to help your team respond quickly.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Everything you need to know about Chasistem.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
