import { Search, Code, Rocket, TrendingUp, ArrowRight } from "lucide-react";

export const HowWeWorkSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business and identify AI opportunities"
    },
    {
      icon: Code,
      number: "02", 
      title: "Custom Development",
      description: "Our team builds your tailored AI solutions"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Implementation & Training", 
      description: "Seamless integration with full team onboarding"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and performance enhancement"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="gradient-text">AI Journey</span> in 4 Simple Steps
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing optimization, we guide you through every step of your AI transformation
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step text-center group relative">
                <div className="relative mb-6 flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center glow-ice group-hover:glow-ice-strong transition-all duration-300">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-16 z-20">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 px-2 min-h-[3.5rem] flex items-center justify-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};