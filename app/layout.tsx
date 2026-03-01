import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chasistem - AI Customer Support That Sets Itself Up",
  description:
    "The only 3-way AI support platform for small businesses. No technical setup required. Customer-facing chat, agent copilot, and builder-facing AI working together.",
  keywords: [
    "AI customer support",
    "helpdesk automation",
    "chatbot",
    "support automation",
    "small business",
    "customer service AI",
  ],
  authors: [{ name: "Chasistem" }],
  openGraph: {
    title: "Chasistem - AI Customer Support That Sets Itself Up",
    description:
      "The only 3-way AI support platform for small businesses. No technical setup required.",
    type: "website",
    locale: "en_US",
    siteName: "Chasistem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chasistem - AI Customer Support That Sets Itself Up",
    description:
      "The only 3-way AI support platform for small businesses. No technical setup required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
