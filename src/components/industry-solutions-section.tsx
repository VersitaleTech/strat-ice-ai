import { Heart, ShoppingCart, Briefcase, Chrome as Home, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant AI for patient scheduling and support",
    features: [
      "Automated appointment scheduling",
      "Patient inquiry management",
      "Prescription refill reminders",
      "HIPAA-compliant data handling"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "24/7 order support and product recommendations",
    features: [
      "Instant order status updates",
      "Smart product recommendations",
      "Returns and refunds automation",
      "Multilingual customer support"
    ]
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Automated appointment booking and client onboarding",
    features: [
      "Intelligent appointment scheduling",
      "Client intake automation",
      "Follow-up management",
      "Document collection workflows"
    ]
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Lead qualification and property inquiry management",
    features: [
      "24/7 property inquiry responses",
      "Lead qualification scoring",
      "Viewing appointment scheduling",
      "Automated follow-up sequences"
    ]
  }
];

export const IndustrySolutionsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry-Specific <span className="gradient-text">AI Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored AI automation designed for your industry's unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="service-card p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 glow-ice">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero-outline"
                className="w-full"
                onClick={scrollToContact}
              >
                Learn More About {industry.title} Solutions
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your industry? We create custom AI solutions for any business.
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Discuss Your Custom Solution
          </Button>
        </div>
      </div>
    </section>
  );
};
