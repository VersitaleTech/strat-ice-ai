import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const keyPoints = [
    "Expert AI implementation specialists",
    "Proven track record in lead generation automation", 
    "Custom solutions tailored to your industry",
    "Ongoing support and optimization"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="gradient-text">AI Transformation</span> Partners
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We're a specialized AI agency that bridges the gap between cutting-edge artificial 
              intelligence and real business results. Our team of AI engineers and business strategists 
              work exclusively with ambitious companies ready to harness the power of automation, 
              intelligent chatbots, and data-driven workflows to outpace their competition.
            </p>
            
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="service-card p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-ice">
                  <div className="w-12 h-12 bg-primary rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-First Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every solution we build is designed with artificial intelligence at its core, 
                  ensuring your business stays ahead of the curve in an increasingly automated world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};