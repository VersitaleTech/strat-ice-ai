import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FallingStars } from "@/components/ui/falling-stars";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    revenue: "",
    challenge: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <FallingStars />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Business with <span className="gradient-text">AI?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get a free consultation and discover how AI can transform your operations,
            generate more leads, and drive unprecedented growth.
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">
              Limited consultations available this month
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="service-card p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Get Your Free AI Strategy Session</h3>
              <p className="text-primary font-semibold">(Worth $500)</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industry *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange("industry", value)} required>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                  Monthly Revenue Range
                </label>
                <Select onValueChange={(value) => handleSelectChange("revenue", value)}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k+">$500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                  Biggest Challenge *
                </label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-input border-border focus:border-primary transition-colors resize-none"
                  placeholder="Describe your current challenges and how you think AI could help your business..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6 h-auto glow-ice-strong"
              >
                Claim My Free Session
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="service-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-ice">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:info@versatiletech.ai" className="text-primary hover:underline">
                    info@versatiletech.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="service-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-ice">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+2975931234" className="text-primary hover:underline">
                    +297 593 1234
                  </a>
                </div>
              </div>
            </div>

            <div className="service-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-ice">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Serving businesses in Aruba and globally</p>
                </div>
              </div>
            </div>

            <div className="service-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-ice">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Book a Call</h4>
                  <p className="text-muted-foreground">Schedule directly with our team</p>
                </div>
              </div>
              <Button variant="hero-outline" className="w-full">
                Book Strategy Call
              </Button>
            </div>

            <div className="text-center pt-4 bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-sm font-semibold text-foreground">
                Typically respond within 2-4 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
