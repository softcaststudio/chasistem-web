import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Building,
  Database,
  UserCheck,
  Bot,
  Share2,
  Globe,
  Lock,
  Cookie,
  Bell,
  RefreshCw,
  Mail,
} from "lucide-react";
import { type ComponentType } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Chasistem",
  description:
    "Chasistem privacy policy — how we collect, use, protect, and respect your data and your customers' data.",
  openGraph: {
    title: "Privacy Policy | Chasistem",
    description:
      "Chasistem privacy policy — how we collect, use, protect, and respect your data and your customers' data.",
    url: "/privacy",
    type: "website",
    siteName: "Chasistem",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Chasistem",
    description:
      "Chasistem privacy policy — how we collect, use, protect, and respect your data and your customers' data.",
  },
  alternates: {
    canonical: "/privacy",
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
  { href: "#who-we-are", label: "1. Who We Are & Our Role" },
  { href: "#data-summary", label: "2. Data at a Glance" },
  { href: "#what-we-collect", label: "3. What Data We Collect" },
  { href: "#how-we-use", label: "4. How We Use Your Data" },
  { href: "#ai-processing", label: "5. AI Data Processing" },
  { href: "#sub-processors", label: "6. Sub-Processors" },
  { href: "#data-retention", label: "7. Data Retention" },
  { href: "#international-transfers", label: "8. International Transfers" },
  { href: "#security", label: "9. Security Measures" },
  { href: "#your-rights", label: "10. Your Rights" },
  { href: "#cookies", label: "11. Cookies" },
  { href: "#breach-notification", label: "12. Breach Notification" },
  { href: "#changes", label: "13. Changes to This Policy" },
  { href: "#contact", label: "14. Contact Us" },
];

// ---------------------------------------------------------------------------
// Sub-processor data
// ---------------------------------------------------------------------------

const SUB_PROCESSORS = [
  {
    name: "OpenAI",
    role: "AI language model provider",
    dataProcessed: "Conversation content (in transit for inference)",
    location: "United States",
    policyUrl: "https://openai.com/policies/api-data-usage-policies",
    policyLabel: "openai.com/policies/api-data-usage-policies",
  },
  {
    name: "Anthropic",
    role: "AI language model provider",
    dataProcessed: "Conversation content (in transit for inference)",
    location: "United States",
    policyUrl: "https://anthropic.com/privacy",
    policyLabel: "anthropic.com/privacy",
  },
  {
    name: "Supabase",
    role: "Database & authentication",
    dataProcessed: "Account data, conversation data, knowledge base",
    location: "United States (AWS)",
    policyUrl: "https://supabase.com/privacy",
    policyLabel: "supabase.com/privacy",
  },
  {
    name: "Stripe",
    role: "Payment processing",
    dataProcessed: "Billing and payment information",
    location: "United States",
    policyUrl: "https://stripe.com/privacy",
    policyLabel: "stripe.com/privacy",
  },
  {
    name: "Resend",
    role: "Transactional email delivery",
    dataProcessed: "Account email addresses, email content",
    location: "United States",
    policyUrl: "https://resend.com/legal/privacy-policy",
    policyLabel: "resend.com/legal/privacy-policy",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      {/* Back link */}
      <Link href="/" className="text-primary mb-8 inline-block hover:underline text-sm">
        ← Back to Home
      </Link>

      {/* Header */}
      <h1 className="mb-3 text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6 text-sm">Last updated: March 2026</p>

      {/* Trust badge strip */}
      <div className="not-prose flex flex-wrap gap-2 mb-10">
        {[
          "GDPR-Aware",
          "CCPA-Aware",
          "We never sell your data",
          "AI data disclosed",
          "You own your data",
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

          {/* 1. Who We Are & Our Role */}
          <section id="who-we-are">
            <SectionHeading icon={Building}>Who We Are &amp; Our Role</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Chasistem operates an AI-powered customer support platform. Under data protection
                law, our role depends on whose data is involved:
              </p>
              <ul>
                <li>
                  <strong>Data Controller</strong> — for account holders (you and your team
                  members). We determine the purpose and means of processing your account,
                  billing, and usage data.
                </li>
                <li>
                  <strong>Data Processor</strong> — acting on your behalf for your end customers&apos;
                  data. When your customers interact with your Chasistem-powered chat widget, we
                  process their personal data strictly to deliver the services you&apos;ve
                  configured. You remain the controller of that data.
                </li>
              </ul>
              <p>
                This distinction matters because it means you are responsible for your own privacy
                notices to your customers, and Chasistem is here to support that — not to claim
                ownership of their data.
              </p>
            </div>
            <PlainEnglish>
              When your customers chat with your widget, their data belongs to you — not us.
              We&apos;re just processing it on your behalf to power the AI features.
            </PlainEnglish>
          </section>

          {/* 2. Data at a Glance */}
          <section id="data-summary">
            <SectionHeading icon={Database}>Data at a Glance</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                A quick overview of what we collect, why, how long we keep it, and who can access
                it.
              </p>
            </div>
            {/* not-prose table */}
            <div className="not-prose overflow-x-auto mt-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="p-3 border border-border text-left font-semibold">What we collect</th>
                    <th className="p-3 border border-border text-left font-semibold">Why</th>
                    <th className="p-3 border border-border text-left font-semibold">How long</th>
                    <th className="p-3 border border-border text-left font-semibold">Who can access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border text-muted-foreground">Account info (name, email, company)</td>
                    <td className="p-3 border border-border text-muted-foreground">Account management</td>
                    <td className="p-3 border border-border text-muted-foreground">Duration of account + 30 days</td>
                    <td className="p-3 border border-border text-muted-foreground">Chasistem team, Supabase</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border text-muted-foreground">Customer conversation &amp; chat data</td>
                    <td className="p-3 border border-border text-muted-foreground">AI-powered support</td>
                    <td className="p-3 border border-border text-muted-foreground">12 months (configurable)</td>
                    <td className="p-3 border border-border text-muted-foreground">You, your agents, OpenAI/Anthropic (in transit only)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border text-muted-foreground">Billing info</td>
                    <td className="p-3 border border-border text-muted-foreground">Payment processing</td>
                    <td className="p-3 border border-border text-muted-foreground">As required by law (~7 years)</td>
                    <td className="p-3 border border-border text-muted-foreground">Stripe</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border text-muted-foreground">Knowledge base documents</td>
                    <td className="p-3 border border-border text-muted-foreground">AI training for your widget</td>
                    <td className="p-3 border border-border text-muted-foreground">Duration of account + 30 days</td>
                    <td className="p-3 border border-border text-muted-foreground">You, Chasistem team, AI providers (processing only)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border text-muted-foreground">Usage analytics</td>
                    <td className="p-3 border border-border text-muted-foreground">Product improvement</td>
                    <td className="p-3 border border-border text-muted-foreground">24 months aggregated</td>
                    <td className="p-3 border border-border text-muted-foreground">Chasistem team (aggregated only)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. What Data We Collect */}
          <section id="what-we-collect">
            <SectionHeading icon={Database}>What Data We Collect</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>We collect data across five categories:</p>
              <ul>
                <li>
                  <strong>Account data</strong> — Name, email address, company name, and any other
                  information you provide when creating or maintaining your account.
                </li>
                <li>
                  <strong>Conversation data</strong> — Messages exchanged between your customers
                  and the AI chat widget or your human agents, including metadata such as
                  timestamps and session identifiers.
                </li>
                <li>
                  <strong>Knowledge base data</strong> — Documents, FAQs, product descriptions,
                  and other content you upload to train or configure your AI widget.
                </li>
                <li>
                  <strong>Usage data</strong> — Aggregated, anonymised metrics about how the
                  platform is used (e.g., number of conversations handled, feature adoption
                  rates). This is not linked to individual end customers.
                </li>
                <li>
                  <strong>Technical data</strong> — IP addresses, browser type, operating system,
                  referring URLs, and session cookies collected automatically when you use the
                  platform.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. How We Use Your Data */}
          <section id="how-we-use">
            <SectionHeading icon={UserCheck}>How We Use Your Data</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>We use the data we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain the Chasistem platform and its features.</li>
                <li>Generate AI-powered responses to your customers&apos; queries.</li>
                <li>Authenticate users and secure accounts.</li>
                <li>Process payments and manage billing.</li>
                <li>Send transactional emails (e.g., invoices, account alerts, security notices).</li>
                <li>Analyse aggregated usage patterns to improve the product.</li>
                <li>Respond to your support requests and feedback.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p>
                <strong>We do not use your data or your customers&apos; data to train AI models
                or build advertising profiles.</strong>
              </p>
            </div>
            <PlainEnglish>
              We use your data to run the service and improve it. We don&apos;t sell it. We
              don&apos;t train AI on it. We don&apos;t use it for ads.
            </PlainEnglish>
          </section>

          {/* 5. AI Data Processing */}
          <section id="ai-processing">
            <SectionHeading icon={Bot}>AI Data Processing</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                When a customer sends a message to your Chasistem-powered widget, the content of
                that message is transmitted over an encrypted connection to one of our AI
                providers to generate a response. Here is how each provider handles that data:
              </p>
              <ul>
                <li>
                  <strong>OpenAI</strong> — Used for chat responses, agent reply drafts, and
                  knowledge base embeddings. &quot;OpenAI does not use API-submitted data to train
                  its models by default.&quot; (
                  <a
                    href="https://openai.com/policies/api-data-usage-policies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenAI API usage policy
                  </a>
                  )
                </li>
                <li>
                  <strong>Anthropic</strong> — Used for deeper analysis and reasoning tasks.
                  &quot;Anthropic does not train on API data by default.&quot; (
                  <a
                    href="https://anthropic.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anthropic Privacy Policy
                  </a>
                  )
                </li>
              </ul>
              <p>
                <strong>We do not use your data to train AI models.</strong> We apply this
                standard consistently and have contractual commitments from our AI providers
                that reflect the same principle.
              </p>
              <p>
                If you have specific requirements around data residency or need to restrict which AI
                provider processes your data, please contact us at{" "}
                <a href="mailto:privacy@chasistem.com">privacy@chasistem.com</a>.
              </p>
            </div>
            <PlainEnglish>
              When a customer sends a message, we send it to OpenAI or Anthropic to generate an
              AI reply. Neither we nor they use that message to train AI models.
            </PlainEnglish>
          </section>

          {/* 6. Sub-Processors */}
          <section id="sub-processors">
            <SectionHeading icon={Share2}>Sub-Processors</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We use a small number of trusted third-party services (&quot;sub-processors&quot;)
                to deliver the Chasistem platform. Each sub-processor is bound by data processing
                agreements that prohibit them from using your data for any purpose beyond what is
                necessary to provide their service.
              </p>
            </div>
            {/* not-prose card grid */}
            <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
              {SUB_PROCESSORS.map((sp) => (
                <div
                  key={sp.name}
                  className="rounded-lg border border-border p-4 text-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-semibold">{sp.name}</span>
                    <a
                      href={sp.policyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-xs shrink-0"
                    >
                      Privacy policy ↗
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-2">{sp.role}</p>
                  <div className="space-y-0.5 text-xs text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Data processed:</span>{" "}
                      {sp.dataProcessed}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Location:</span>{" "}
                      {sp.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <PlainEnglish>
              These are the companies that touch your data to run our service. We&apos;ve listed
              exactly who they are and what they do with it.
            </PlainEnglish>
          </section>

          {/* 7. Data Retention */}
          <section id="data-retention">
            <SectionHeading icon={Database}>Data Retention</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>We retain data for the following periods:</p>
              <ul>
                <li>
                  <strong>Account information</strong> — Retained for the duration of your active
                  account plus 30 days after termination to facilitate data export.
                </li>
                <li>
                  <strong>Customer conversation and chat data</strong> — Retained for 12 months by
                  default. You can configure a shorter retention period from within the platform.
                </li>
                <li>
                  <strong>Billing information</strong> — Retained for as long as required by
                  applicable tax and financial regulations (typically approximately 7 years).
                </li>
                <li>
                  <strong>Knowledge base documents</strong> — Retained for the duration of your
                  active account plus 30 days after termination.
                </li>
                <li>
                  <strong>Usage analytics</strong> — Retained in aggregated, non-identifiable form
                  for 24 months.
                </li>
              </ul>
              <p>
                You may request early deletion of specific data categories by contacting us at{" "}
                <a href="mailto:privacy@chasistem.com">privacy@chasistem.com</a>. We will respond
                within 30 days and action your request where no legal obligation requires us to
                retain the data.
              </p>
            </div>
          </section>

          {/* 8. International Data Transfers */}
          <section id="international-transfers">
            <SectionHeading icon={Globe}>International Data Transfers</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Our primary infrastructure is hosted in the United States via Supabase on AWS.
                If you are located in the European Economic Area (EEA), the United Kingdom, or
                Switzerland, your data is transferred to and processed in the United States.
              </p>
              <p>
                For EEA and UK users, these transfers are made under appropriate safeguards,
                including Standard Contractual Clauses (SCCs) as approved by the European
                Commission. Each of our sub-processors maintains their own GDPR-compliant
                international transfer mechanisms.
              </p>
              <p>
                If you have specific data residency requirements, please contact us at{" "}
                <a href="mailto:privacy@chasistem.com">privacy@chasistem.com</a> to discuss
                available options.
              </p>
            </div>
          </section>

          {/* 9. Security Measures */}
          <section id="security">
            <SectionHeading icon={Lock}>Security Measures</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We implement technical and organisational security measures appropriate to the risk
                of processing, including:
              </p>
              <ul>
                <li>TLS 1.2+ encryption for all data in transit between your browser, our servers, and AI providers.</li>
                <li>Encryption at rest for data stored in Supabase (AWS infrastructure).</li>
                <li>Access controls enforced on a strict need-to-know basis for Chasistem team members.</li>
                <li>Supabase Auth with multi-factor authentication (MFA) support for your account.</li>
                <li>Regular dependency and security patch management.</li>
              </ul>
              <p>
                No system is 100% secure. In the event of a security incident, we follow the
                breach notification procedure outlined in section 12. To report a suspected
                vulnerability, please contact us responsibly at{" "}
                <a href="mailto:security@chasistem.com">security@chasistem.com</a>.
              </p>
            </div>
          </section>

          {/* 10. Your Rights */}
          <section id="your-rights">
            <SectionHeading icon={UserCheck}>Your Rights</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Depending on your location and applicable law, you have the following rights
                regarding your personal data:
              </p>
              <ul>
                <li>
                  <strong>Access</strong> — Request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong>Correction</strong> — Request correction of inaccurate or incomplete
                  data.
                </li>
                <li>
                  <strong>Deletion</strong> — Request deletion of your personal data (subject to
                  legal retention requirements).
                </li>
                <li>
                  <strong>Portability</strong> — Receive your data in a structured,
                  machine-readable format.
                </li>
                <li>
                  <strong>Objection</strong> — Object to processing based on our legitimate
                  interests.
                </li>
                <li>
                  <strong>Opt-out of marketing</strong> — Unsubscribe from marketing communications
                  at any time via the unsubscribe link in any marketing email.
                </li>
              </ul>
              <p>
                <strong>California residents (CCPA/CPRA):</strong> In addition to the rights above,
                you have the right to know what personal information is sold or disclosed, the right
                to opt out of the sale of personal information (we do not sell personal
                information), and the right to non-discrimination for exercising these rights.
              </p>
              <p>
                To exercise any of your rights, contact us at{" "}
                <a href="mailto:privacy@chasistem.com">privacy@chasistem.com</a>. We will respond
                within 30 days. We may need to verify your identity before fulfilling your request.
              </p>
            </div>
            <PlainEnglish>
              You can ask us what data we have on you, fix it, delete it, or take it elsewhere.
              We&apos;ll respond within 30 days. We never sell your data.
            </PlainEnglish>
          </section>

          {/* 11. Cookies */}
          <section id="cookies">
            <SectionHeading icon={Cookie}>Cookies</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We use cookies and similar technologies for the following purposes:
              </p>
              <ul>
                <li>
                  <strong>Authentication</strong> — To keep you logged in and identify your
                  session securely.
                </li>
                <li>
                  <strong>Security</strong> — To detect and prevent fraudulent or abusive
                  activity.
                </li>
                <li>
                  <strong>Basic analytics</strong> — To understand how the platform is used in
                  aggregate so we can improve it.
                </li>
              </ul>
              <p>
                We do not use advertising cookies or tracking pixels. We do not share cookie data
                with ad networks or social media platforms.
              </p>
              <p>
                You can control or delete cookies through your browser settings. Note that
                disabling authentication cookies will prevent you from logging in to the platform.
              </p>
            </div>
          </section>

          {/* 12. Data Breach Notification */}
          <section id="breach-notification">
            <SectionHeading icon={Bell}>Data Breach Notification</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                In the event of a personal data breach that is likely to result in a risk to your
                rights and freedoms, we will notify you by email within <strong>72 hours</strong>{" "}
                of becoming aware of the breach — consistent with our GDPR-aligned approach.
              </p>
              <p>The notification will include, to the extent known at the time:</p>
              <ul>
                <li>The nature of the personal data breach.</li>
                <li>The categories and approximate number of data subjects and records affected.</li>
                <li>The likely consequences of the breach.</li>
                <li>The measures we have taken or propose to take to address the breach.</li>
              </ul>
              <p>
                As the data controller for your customers&apos; data, you are responsible for
                making any required downstream notifications to your own end users in accordance
                with applicable law.
              </p>
            </div>
            <PlainEnglish>
              If we get hacked or there&apos;s a data leak, we&apos;ll email you within 72 hours
              and tell you exactly what happened, what data was involved, and what we&apos;re doing
              about it.
            </PlainEnglish>
          </section>

          {/* 13. Changes to This Policy */}
          <section id="changes">
            <SectionHeading icon={RefreshCw}>Changes to This Policy</SectionHeading>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, or legal requirements. For material changes — those that
                meaningfully affect how we collect, use, or share your data — we will provide at
                least <strong>14 days&apos; advance email notice</strong> to the address registered
                on your account before the changes take effect.
              </p>
              <p>
                The &quot;Last updated&quot; date at the top of this page always reflects the most
                recent revision. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          {/* 14. Contact Us */}
          <section id="contact">
            <SectionHeading icon={Mail}>Contact Us</SectionHeading>
            <p className="text-sm text-muted-foreground mb-4">
              We aim to respond to all privacy-related requests within 30 days. Please reach out
              to the appropriate team below.
            </p>
            <div className="not-prose rounded-lg border border-border bg-muted/40 p-4 space-y-2 text-sm">
              <div>
                <span className="font-medium">Privacy enquiries &amp; data requests:</span>{" "}
                <a
                  href="mailto:privacy@chasistem.com"
                  className="text-primary hover:underline"
                >
                  privacy@chasistem.com
                </a>
              </div>
              <div>
                <span className="font-medium">Security vulnerabilities:</span>{" "}
                <a
                  href="mailto:security@chasistem.com"
                  className="text-primary hover:underline"
                >
                  security@chasistem.com
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
