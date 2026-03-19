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
  title: "Chasistem - AI Support You Can Actually Improve",
  description:
    "Upload your docs. Our AI shows you exactly how to make it better. Clear guidance on what's missing, what to fix, and how to get great results.",
  keywords: [
    "AI customer support",
    "helpdesk automation",
    "chatbot",
    "support automation",
    "small business",
    "customer service AI",
    "guided setup",
    "knowledge base",
  ],
  metadataBase: new URL("https://chasistem.com"),
  authors: [{ name: "Chasistem" }],
  openGraph: {
    title: "Chasistem - AI Support You Can Actually Improve",
    description:
      "Upload your docs. Our AI shows you exactly how to make it better. Clear guidance on what's missing and how to get great results.",
    type: "website",
    locale: "en_US",
    siteName: "Chasistem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chasistem - AI Support You Can Actually Improve",
    description:
      "Upload your docs. Our AI shows you exactly how to make it better. Clear guidance on what's missing and how to get great results.",
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
