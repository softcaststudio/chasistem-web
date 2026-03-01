import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Chasistem",
  description: "Chasistem privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <Link href="/" className="text-primary mb-8 inline-block hover:underline">
        ← Back to Home
      </Link>

      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you sign up for our
          waitlist, create an account, or contact us for support. This may include your name, email
          address, company name, and any other information you choose to provide.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Send you updates about our product launch and relevant news</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze trends, usage, and activities</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties
          without your consent, except as described in this policy or as required by law.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to collect and track information and to
          improve our services. You can instruct your browser to refuse all cookies or indicate when
          a cookie is being sent.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Contact us at
          privacy@chasistem.com to exercise these rights.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the &quot;Last updated&quot; date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at:
          <br />
          Email: privacy@chasistem.com
        </p>
      </div>
    </div>
  );
}
