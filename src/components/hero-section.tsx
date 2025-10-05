import { Button } from "@/components/ui/button";
import { AnimatedParticles } from "@/components/ui/animated-particles";
import { Play } from "lucide-react";
import heroBackground from "@/assets/hero-ai-background.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      <AnimatedParticles />

      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">
              Trusted by 50+ Businesses in Aruba & Beyond
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Increase Customer Support Efficiency by{" "}
            <span className="gradient-text">80%</span> with Custom AI Solutions
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We help forward-thinking businesses in Aruba and beyond automate customer service,
            generate qualified leads, and scale operations with intelligent AI workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto animate-glow-pulse glow-ice-strong"
              onClick={scrollToContact}
            >
              Get Your Free AI Readiness Assessment
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToServices}
            >
              Explore Our Solutions
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Ready in 2-3 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">100% Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
