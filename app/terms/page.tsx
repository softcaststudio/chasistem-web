import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileText,
  Bot,
  User,
  Scale,
  CreditCard,
  AlertTriangle,
  Database,
  Gavel,
  LogOut,
  RefreshCw,
  Mail,
} from "lucide-react";
import { type ComponentType } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Chasistem",
  description:
    "Chasistem terms of service — the rules, rights, and responsibilities for using our AI-powered customer support platform.",
  openGraph: {
    title: "Terms of Service | Chasistem",
    description:
      "Chasistem terms of service — the rules, rights, and responsibilities for using our AI-powered customer support platform.",
    url: "/terms",
    type: "website",
    siteName: "Chasistem",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Chasistem",
    description:
      "Chasistem terms of service — the rules, rights, and responsibilities for using our AI-powered customer support platform.",
  },
  alternates: {
    canonical: "/terms",
  },
};

// ---------------------------------------------------------------------------
// Helper components (local to this file — not shared)
// ---------------------------------------------------------------------------

type IconComponent = ComponentType<{ className?: string }>;

function SectionHeading({
  icon: Icon,
  children,
}: Readonly<{
  icon: IconComponent;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-5 h-5 text-primary shrink-0" />
      <h2 className="text-xl font-bold leading-snug">{children}</h2>
    </div>
  );
}

function PlainEnglish({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="not-prose border-l-4 border-primary/60 bg-muted/50 pl-4 py-3 pr-4 rounded-r-md mt-4">
      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
        In plain English
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TOC items
// ---------------------------------------------------------------------------

const TOC_ITEMS = [
  { href: "#acceptance", label: "1. Acceptance of Terms" },
  { href: "#service", label: "2. Description of Service" },
  { href: "#accounts", label: "3. User Accounts" },
  { href: "#acceptable-use", label: "4. Acceptable Use" },
  { href: "#payment", label: "5. Payment & Billing" },
  { href: "#availability", label: "6. Service Availability" },
  { href: "#ip", label: "7. Intellectual Property" },
  { href: "#data-ownership", label: "8. Your Data Ownership" },
  { href: "#data-processing", label: "9. Data Processing & AI" },
  { href: "#liability", label: "10. Limitation of Liability" },
  { href: "#termination", label: "11. Termination" },
  { href: "#changes", label: "12. Changes to Terms" },
  { href: "#governing-law", label: "13. Governing Law" },
  { href: "#contact", label: "14. Contact Us" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      {/* Back link */}
      <Link href="/" className="text-primary mb-8 inline-block hover:underline text-sm">
        ← Back to Home
      </Link>

      {/* Header */}
      <h1 className="mb-3 text-4xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground mb-6 text-sm">Last updated: March 2026</p>

      {/* Trust badge strip */}
      <div className="not-prose flex flex-wrap gap-2 mb-10">
        {[
          "GDPR-Aware",
          "CCPA-Aware",
          "We never sell your data",
          "AI data usage disclosed",
        ].map((badge) => (
          <span
            key={badge}
            className="bg-accent text-primary border border-primary/20 rounded-full px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5"
          >
            <Shield className="w-3 h-3 shrink-0" />
            {badge}
          </span>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 items-start">
        {/* Sticky TOC — hidden on mobile */}
        <aside className="hidden lg:block sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Contents
          </p>
          <nav className="space-y-1">
            {TOC_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="space-y-10 min-w-0">

          {/* 1. Acceptance of Terms */}
          <section id="acceptance">
            <SectionHeading icon={FileText}>Acceptance of Terms</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                By accessing or using Chasistem and any of its services, features, or content, you
                agree to be bound by these Terms of Service (&quot;Terms&quot;) and all applicable
                laws and regulations. If you do not agree with any part of these Terms, you may not
                use our services.
              </p>
              <p>
                These Terms constitute a binding legal agreement between you (or the business you
                represent) and Chasistem. &quot;You&quot; refers to any individual or entity that
                accesses or uses our platform.
              </p>
            </div>
          </section>

          {/* 2. Description of Service */}
          <section id="service">
            <SectionHeading icon={Bot}>Description of Service</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Chasistem is an AI-powered customer support platform designed for small businesses.
                Our platform comprises three core AI components:
              </p>
              <ul>
                <li>
                  <strong>Customer-Facing AI (AI #1)</strong> — A chat widget embedded on your
                  website or app that automatically handles customer questions, resolves FAQs, and
                  routes complex issues to human agents.
                </li>
                <li>
                  <strong>Agent Copilot (AI #2)</strong> — An in-app assistant for your support
                  team that provides a prioritised ticket queue, AI-drafted reply suggestions, and
                  context summaries so agents resolve issues faster.
                </li>
                <li>
                  <strong>Builder AI (AI #3)</strong> — A guided setup and maintenance tool for
                  business owners. It ingests your documentation, detects knowledge gaps, and keeps
                  your AI trained without requiring any technical expertise.
                </li>
              </ul>
              <p>
                <strong>AI disclaimer:</strong> AI-generated responses are assistance tools only.
                They may be inaccurate, incomplete, or inappropriate in certain contexts. You are
                responsible for reviewing AI outputs before use and for ensuring that responses sent
                to your customers are accurate and appropriate.
              </p>
            </div>
            <PlainEnglish>
              Chasistem uses AI to help you run customer support. The AI is a tool — it can make
              mistakes. Always have a human review anything important before it goes to a customer.
            </PlainEnglish>
          </section>

          {/* 3. User Accounts */}
          <section id="accounts">
            <SectionHeading icon={User}>User Accounts</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                To access Chasistem you must create an account. You agree to provide accurate,
                current, and complete information during registration and to keep your account
                information up to date.
              </p>
              <p>
                You are solely responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your account — including actions
                by any team members or agents you grant access to. You must notify us immediately
                of any suspected unauthorised use of your account at{" "}
                <a href="mailto:support@chasistem.com">support@chasistem.com</a>.
              </p>
              <p>
                You may not share your account credentials with third parties outside your
                organisation, resell access, or use automated means to create accounts.
              </p>
            </div>
          </section>

          {/* 4. Acceptable Use */}
          <section id="acceptable-use">
            <SectionHeading icon={Scale}>Acceptable Use</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>You agree not to use Chasistem to:</p>
              <ul>
                <li>Engage in any activity that violates applicable local, national, or international law or regulation.</li>
                <li>Attempt to gain unauthorised access to our systems, infrastructure, or other users&apos; accounts.</li>
                <li>Interfere with, disrupt, or impose an unreasonable load on our services or their underlying infrastructure.</li>
                <li>Upload, transmit, or distribute malware, viruses, or any other harmful software.</li>
                <li>Harvest, scrape, or collect data from our platform without prior written authorisation.</li>
                <li>Deceive your customers by presenting AI-generated responses as verified human expertise without appropriate disclosure.</li>
                <li>Attempt to jailbreak, manipulate, or circumvent the safety controls of any AI model used within the platform.</li>
                <li>Use the platform to generate harassing, discriminatory, defamatory, or otherwise harmful content targeting any individual or group.</li>
                <li>Operate the platform in prohibited industries, including but not limited to: adult content, weapons and firearms (unlicensed), illegal drugs or controlled substances, and unlicensed gambling.</li>
              </ul>
              <p>
                We reserve the right to investigate suspected violations and to suspend or terminate
                accounts found to be in breach of this policy.
              </p>
            </div>
            <PlainEnglish>
              Use the platform lawfully and honestly. Don&apos;t try to break our AI, don&apos;t
              mislead your customers, and don&apos;t use Chasistem for harmful or illegal purposes.
            </PlainEnglish>
          </section>

          {/* 5. Payment & Billing */}
          <section id="payment">
            <SectionHeading icon={CreditCard}>Payment &amp; Billing</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Subscription fees are billed in advance on a monthly or annual basis via Stripe,
                our payment processor. By subscribing you authorise us to charge your payment
                method on a recurring basis.
              </p>
              <p>
                <strong>14-day refund period for new subscriptions.</strong> If you are not
                satisfied within the first 14 days of your initial subscription, contact us at{" "}
                <a href="mailto:support@chasistem.com">support@chasistem.com</a> for a full refund.
                After the 14-day period, subscription fees are non-refundable; however, you retain
                access to the service until the end of your current billing period.
              </p>
              <p>
                We will provide at least 30 days&apos; advance email notice of any price changes to
                the address registered on your account. Continued use of the service after a price
                change takes effect constitutes your acceptance of the new pricing.
              </p>
              <p>
                Taxes may apply depending on your jurisdiction and are your responsibility unless
                we are legally required to collect them on your behalf.
              </p>
            </div>
            <PlainEnglish>
              You get 14 days to try and get a full refund. After that, no refunds — but you keep
              access until the period you paid for ends. We&apos;ll warn you 30 days before any
              price increases.
            </PlainEnglish>
          </section>

          {/* 6. Service Availability */}
          <section id="availability">
            <SectionHeading icon={AlertTriangle}>Service Availability</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We strive to keep Chasistem available and reliable, but we do not offer a formal
                Service Level Agreement (SLA) at this time. The service is provided &quot;as
                is&quot; and &quot;as available.&quot;
              </p>
              <p>
                We will make reasonable efforts to provide advance notice of scheduled maintenance
                windows and to minimise unplanned downtime. Notices will be sent to your registered
                email address and/or posted on our status page.
              </p>
              <p>
                We are not liable for any loss of profits, revenue, data, or goodwill arising from
                downtime, service interruptions, or degraded performance, whether planned or
                unplanned.
              </p>
            </div>
          </section>

          {/* 7. Intellectual Property */}
          <section id="ip">
            <SectionHeading icon={Shield}>Intellectual Property</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                The Chasistem platform — including its software, design, trademarks, logos, and
                all other intellectual property — is owned by Chasistem and protected by
                applicable intellectual property laws. You may not reproduce, distribute, or
                create derivative works from our platform without explicit written permission.
              </p>
              <p>
                You retain full ownership of all content you create or upload to the platform,
                including but not limited to: support reply templates, knowledge base documents,
                workflow configurations, and custom AI personas. By uploading content, you grant
                us a limited, non-exclusive licence to process that content solely to deliver the
                services described in these Terms.
              </p>
            </div>
          </section>

          {/* 8. Your Data Ownership */}
          <section id="data-ownership">
            <SectionHeading icon={Database}>Your Data Ownership</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                <strong>Your data belongs to you.</strong> All customer conversations, support
                tickets, knowledge base documents, and configuration data you create or import into
                Chasistem remain your property at all times.
              </p>
              <p>
                We do not claim ownership over your data and will never use it for purposes beyond
                delivering and improving the services described herein without your explicit
                consent.
              </p>
              <p>
                You can export a complete copy of your data at any time from within the platform.
                Upon termination of your account — for any reason — you have a <strong>30-day
                window</strong> to export all your data before it is permanently and irreversibly
                deleted from our systems.
              </p>
            </div>
            <PlainEnglish>
              Everything your customers say in the chat, every ticket, every document you upload —
              that&apos;s yours. You can take it with you whenever you leave, and we&apos;ll give
              you 30 days after cancellation to download it all.
            </PlainEnglish>
          </section>

          {/* 9. Data Processing & AI */}
          <section id="data-processing">
            <SectionHeading icon={Bot}>Data Processing &amp; AI</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                By using Chasistem, you appoint us as a data processor acting on your behalf in
                relation to any personal data belonging to your end customers that passes through
                the platform.
              </p>
              <p>
                To generate AI responses, conversation data is transmitted to our AI providers —
                currently OpenAI and/or Anthropic — over encrypted connections. These providers
                process the data solely to return a response; they do not retain it for independent
                use.
              </p>
              <p>
                <strong>We do not use your data or your customers&apos; data to train AI
                models.</strong> We have contractual protections in place with our AI providers
                to enforce the same commitment.
              </p>
              <p>
                A Data Processing Agreement (DPA) is available on request for businesses that
                require one for GDPR or other compliance purposes. Please contact us at{" "}
                <a href="mailto:privacy@chasistem.com">privacy@chasistem.com</a>.
              </p>
            </div>
            <PlainEnglish>
              We send chat messages to OpenAI or Anthropic to generate AI replies. We do NOT use
              your data to train any AI models — and neither do they when receiving data via our
              API integration.
            </PlainEnglish>
          </section>

          {/* 10. Limitation of Liability */}
          <section id="liability">
            <SectionHeading icon={Gavel}>Limitation of Liability</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                To the maximum extent permitted by applicable law, Chasistem shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, loss of revenue, loss of data, loss
                of goodwill, or costs of procuring substitute services.
              </p>
              <p>
                Our total aggregate liability to you for any claims arising out of or relating to
                these Terms or your use of the service shall not exceed the total fees you paid to
                us in the <strong>three months immediately preceding the event</strong> giving rise
                to the claim.
              </p>
              <p>
                Nothing in these Terms limits or excludes our liability for: fraud or fraudulent
                misrepresentation; personal injury or death caused by our negligence; or any other
                liability that cannot be excluded or limited by applicable law.
              </p>
            </div>
          </section>

          {/* 11. Termination */}
          <section id="termination">
            <SectionHeading icon={LogOut}>Termination</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                You may cancel your subscription at any time. Upon cancellation, you will retain
                access to the service until the end of your current billing period. No partial
                refunds are issued for unused time within a paid period.
              </p>
              <p>
                We may suspend or terminate your access for material breach of these Terms. Except
                in cases of severe violations (e.g., illegal activity, security threats, or
                abuse of the AI systems), we will provide written notice and a reasonable cure
                period before termination takes effect.
              </p>
              <p>
                Following termination for any reason, your data will be retained for a{" "}
                <strong>30-day export window</strong>. After that period, all your data will be
                permanently deleted from our systems and cannot be recovered.
              </p>
            </div>
            <PlainEnglish>
              You can leave anytime. We won&apos;t delete your data instantly — you get 30 days to
              download everything first. After that, it&apos;s gone for good.
            </PlainEnglish>
          </section>

          {/* 12. Changes to Terms */}
          <section id="changes">
            <SectionHeading icon={RefreshCw}>Changes to Terms</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We may update these Terms from time to time. For material changes — such as changes
                that affect your rights, billing, or data handling — we will provide at least{" "}
                <strong>14 days&apos; advance email notice</strong> to the address registered on
                your account before the changes take effect.
              </p>
              <p>
                Minor clarifications (e.g., correcting typos, improving readability without
                changing the substance) may be made without specific notice, though the
                &quot;Last updated&quot; date will always reflect the most recent revision.
              </p>
              <p>
                Your continued use of the service after the effective date of any changes
                constitutes your acceptance of the revised Terms.
              </p>
            </div>
          </section>

          {/* 13. Governing Law */}
          <section id="governing-law">
            <SectionHeading icon={Scale}>Governing Law</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                These Terms are governed by and construed in accordance with the laws of Thailand,
                without regard to its conflict-of-law provisions. Any disputes arising under or in
                connection with these Terms shall be subject to the exclusive jurisdiction of the
                courts of Thailand.
              </p>
              <p>
                If you are a consumer located in the European Union or United Kingdom, nothing in
                these Terms affects your rights under mandatory local consumer protection
                legislation, which continues to apply in full.
              </p>
            </div>
          </section>

          {/* 14. Contact Us */}
          <section id="contact">
            <SectionHeading icon={Mail}>Contact Us</SectionHeading>
            <p className="text-sm text-muted-foreground mb-4">
              For any questions or concerns about these Terms, please reach out to the appropriate
              team below.
            </p>
            <div className="not-prose rounded-lg border border-border bg-muted/40 p-4 space-y-2 text-sm">
              <div>
                <span className="font-medium">Legal enquiries:</span>{" "}
                <a
                  href="mailto:legal@chasistem.com"
                  className="text-primary hover:underline"
                >
                  legal@chasistem.com
                </a>
              </div>
              <div>
                <span className="font-medium">DPA requests:</span>{" "}
                <a
                  href="mailto:privacy@chasistem.com"
                  className="text-primary hover:underline"
                >
                  privacy@chasistem.com
                </a>
              </div>
              <div>
                <span className="font-medium">General support:</span>{" "}
                <a
                  href="mailto:support@chasistem.com"
                  className="text-primary hover:underline"
                >
                  support@chasistem.com
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
