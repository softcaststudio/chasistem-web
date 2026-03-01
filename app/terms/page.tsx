import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Chasistem",
  description: "Chasistem terms of service - terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <Link href="/" className="text-primary mb-8 inline-block hover:underline">
        ← Back to Home
      </Link>

      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Chasistem services, you accept and agree to be bound by the terms
          and provisions of this agreement. If you do not agree to abide by these terms, please do
          not use this service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          Chasistem provides an AI-powered customer support platform that helps businesses automate
          and improve their customer service operations. Our service includes customer-facing chat
          widgets, agent assistance tools, and setup automation features.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activities that occur under your account. You agree to notify us immediately of
          any unauthorized use of your account.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the service</li>
          <li>Use the service to transmit malware or harmful content</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>

        <h2>5. Payment Terms</h2>
        <p>
          Subscription fees are billed in advance on a monthly or annual basis. All payments are
          non-refundable except as expressly stated in these terms. We may change our pricing at any
          time with 30 days notice.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          Chasistem and its original content, features, and functionality are owned by us and are
          protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall Chasistem be liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss of profits, data,
          or other intangible losses.
        </p>

        <h2>8. Termination</h2>
        <p>
          We may terminate or suspend your account at any time, with or without cause, with or
          without notice. Upon termination, your right to use the service will immediately cease.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any
          material changes by posting the new terms on this page. Your continued use of the service
          after such modifications constitutes acceptance of the updated terms.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about these terms, please contact us at:
          <br />
          Email: legal@chasistem.com
        </p>
      </div>
    </div>
  );
}
