import {
  Navbar,
  Hero,
  Problem,
  Features,
  HowItWorks,
  Pricing,
  Faq,
  Cta,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
