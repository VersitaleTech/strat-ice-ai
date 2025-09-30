import { Button } from "@/components/ui/button";
import { AnimatedParticles } from "@/components/ui/animated-particles";
import heroBackground from "@/assets/hero-ai-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Particles */}
      <AnimatedParticles />
      
      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="gradient-text">Intelligent AI Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We build custom AI workflows, chatbots, and automation systems that generate leads, 
            streamline operations, and accelerate growth for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto animate-glow-pulse"
            >
              Get Your Free AI Strategy Session
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};