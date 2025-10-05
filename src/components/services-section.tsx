import { Calendar, Cog, MessageSquare, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: MessageSquare,
      title: "Customer Support Automation",
      description: "Reduce response times and resolve inquiries 24/7 — without hiring extra staff.",
      includes: [
        "AI ChatBot (Website + WhatsApp)",
        "WhatsApp Response Automation",
        "Multilingual FAQs + Live Handoff",
        "Custom NLP Training for Common Questions",
        "Inbound Voice Agent with IVR & Smart Routing"
      ],
      perfectFor: "Service-based businesses, e-commerce, healthcare, education",
      pricing: "Starting from $799/month",
      timeline: "Ready in 2-3 weeks",
      faqs: [
        {
          question: "How does the AI handle complex questions?",
          answer: "Our AI is trained on your specific business data and can handle 80-90% of common inquiries. For complex cases, it seamlessly hands off to your team with full context."
        },
        {
          question: "Can it work in multiple languages?",
          answer: "Yes! We support 50+ languages including English, Spanish, Dutch, and Papiamento, perfect for the Caribbean market."
        }
      ]
    },
    {
      icon: Phone,
      title: "AI Sales Assistant",
      description: "Engage, qualify, and follow up with leads — automatically.",
      includes: [
        "AI Voice Agent for Outbound/Inbound Calls",
        "WhatsApp Follow-Ups",
        "Lead Qualification Scripts",
        "CRM Integration & Data Sync",
        "Automated Appointment Scheduling"
      ],
      perfectFor: "Real estate, financial services, recruitment, agency work",
      pricing: "Starting from $999/month",
      timeline: "Ready in 2-3 weeks",
      faqs: [
        {
          question: "How natural does the AI voice sound?",
          answer: "Our AI uses state-of-the-art voice technology that sounds remarkably human. Most prospects can't tell they're speaking with an AI assistant."
        },
        {
          question: "What's the lead qualification process?",
          answer: "We customize qualification criteria based on your business. The AI asks strategic questions, scores leads, and only forwards qualified prospects to your team."
        }
      ]
    },
    {
      icon: Calendar,
      title: "Appointment & Booking Automation",
      description: "Let clients book appointments without back-and-forth messages or phone calls.",
      includes: [
        "Appointment Setup Bot (Website/WhatsApp)",
        "Google Calendar/CRM Sync",
        "Confirmation & Reminder Automations",
        "Voice + Chat Integration",
        "No-show Reduction System"
      ],
      perfectFor: "Clinics, salons, consultants, trainers",
      pricing: "Starting from $599/month",
      timeline: "Ready in 2 weeks",
      faqs: [
        {
          question: "Does it sync with my existing calendar?",
          answer: "Yes! We integrate with Google Calendar, Outlook, and most major scheduling platforms. Your availability is always up-to-date."
        },
        {
          question: "How do reminders work?",
          answer: "Automated reminders are sent via SMS, email, or WhatsApp at intervals you choose. This typically reduces no-shows by 60-70%."
        }
      ]
    },
    {
      icon: Cog,
      title: "Custom AI Workflows",
      description: "Need something specific? We'll tailor a system just for your business.",
      includes: [
        "Bespoke Integrations (CRM, ERP, etc.)",
        "Hybrid Voice + Chat Flows",
        "Advanced Logic & Routing",
        "Human-in-the-Loop Escalations",
        "Custom Analytics Dashboard"
      ],
      perfectFor: "Enterprises, fast-scaling startups, and niche use cases",
      pricing: "Custom pricing (starting from $1,499/month)",
      timeline: "Ready in 3-4 weeks",
      faqs: [
        {
          question: "What types of integrations are possible?",
          answer: "We can integrate with virtually any system that has an API including CRMs, ERPs, payment processors, and custom databases."
        },
        {
          question: "Can you handle industry-specific requirements?",
          answer: "Absolutely! We've built custom solutions for healthcare (HIPAA-compliant), finance, legal, and more. We ensure compliance with all relevant regulations."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Solutions That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our specialized AI solutions designed to transform different aspects of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center glow-ice group-hover:glow-ice-strong transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pricing</p>
                  <p className="text-lg font-bold text-primary">{service.pricing}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-sm font-semibold text-foreground">{service.timeline}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pt-4 border-t border-border">
                <span className="text-sm font-medium text-primary">Perfect for: </span>
                <span className="text-sm text-muted-foreground">{service.perfectFor}</span>
              </div>

              <div className="mb-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faqs">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      Common Questions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {service.faqs.map((faq, idx) => (
                          <div key={idx}>
                            <h5 className="text-sm font-semibold text-foreground mb-2">
                              {faq.question}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
                <Button
                  variant="hero-outline"
                  className="flex-1"
                  onClick={scrollToCaseStudies}
                >
                  See Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Which Solution Fits Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which solution is right for you? Schedule a free consultation and we'll help you choose the perfect AI solution for your specific needs.
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact} className="glow-ice-strong">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
