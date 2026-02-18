import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategoriesSection } from "@/components/CategoriesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LogoMarquee } from "@/components/LogoMarquee";

const Index = () => {
  useScrollReveal();

  return (
    <>
      {/* Skip to content */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg font-body font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
        <LogoMarquee />
        <CategoriesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
