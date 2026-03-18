import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Service } from "@/components/landing/service";
import { Pricing } from "@/components/landing/pricing";
import { About } from "@/components/landing/about";
import { CTA } from "@/components/landing/cta";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <Hero />
        <Service />
        <Pricing />
        <About />
        <CTA />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
