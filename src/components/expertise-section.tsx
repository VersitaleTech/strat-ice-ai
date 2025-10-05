import { Award, Users, Target, Shield, Zap, Globe } from "lucide-react";

const expertise = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "5+ years implementing AI solutions for businesses across industries"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert AI engineers, business consultants, and support specialists"
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by your business outcomes, not just technology metrics"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "HIPAA, GDPR compliant with bank-level encryption and data protection"
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Most solutions deployed in 2-3 weeks with immediate impact"
  },
  {
    icon: Globe,
    title: "Local & Global",
    description: "Based in Aruba, serving businesses locally and internationally"
  }
];

export const ExpertiseSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">VersaTile Tech</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just AI developers—we're your strategic partners in business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="service-card p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ice">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="service-card p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe every business deserves access to cutting-edge AI technology that actually works.
              Our mission is to make enterprise-level AI automation accessible, affordable, and effective for
              growing businesses. We don't just implement technology—we solve real business problems and
              help you achieve measurable growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Businesses Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-6 text-foreground">
              <div>
                <h4 className="font-semibold text-primary mb-2">Custom Solutions, Not Templates</h4>
                <p className="text-sm text-muted-foreground">
                  We build AI systems tailored to your specific business needs, not one-size-fits-all chatbots
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Business Consulting Included</h4>
                <p className="text-sm text-muted-foreground">
                  We analyze your operations and recommend the highest-impact AI implementations first
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Ongoing Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Your AI gets smarter over time with continuous improvements based on real performance data
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Transparent Pricing</h4>
                <p className="text-sm text-muted-foreground">
                  No hidden fees, no surprises—just predictable monthly costs with clear ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
