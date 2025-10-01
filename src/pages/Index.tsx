import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { ContactSection } from "@/components/contact-section";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowWeWorkSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;