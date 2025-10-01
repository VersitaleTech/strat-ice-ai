import { Search, Code, Rocket, TrendingUp } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-ice group-hover:glow-ice-strong transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 px-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Timeline connector for desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};