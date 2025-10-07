import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { IndustrySolutionsSection } from "@/components/industry-solutions-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <IndustrySolutionsSection />
        <HowWeWorkSection />
        <CaseStudiesSection />
        <ExpertiseSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
