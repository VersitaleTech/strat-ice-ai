import { Calendar, Cog, MessageSquare, Phone } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Appointment & Booking Automation",
      description: "Let clients book appointments without back-and-forth messages or phone calls.",
      includes: [
        "Appointment Setup Bot (Website/WhatsApp)",
        "Google Calendar/CRM Sync", 
        "Confirmation & Reminder Automations",
        "Voice + Chat Integration"
      ],
      perfectFor: "Clinics, salons, consultants, trainers"
    },
    {
      icon: Cog,
      title: "Custom AI Workflows", 
      description: "Need something specific? We'll tailor a system just for your business.",
      includes: [
        "Bespoke Integrations (CRM, ERP, etc.)",
        "Hybrid Voice + Chat Flows",
        "Advanced Logic & Routing", 
        "Human-in-the-Loop Escalations"
      ],
      perfectFor: "Enterprises, fast-scaling startups, and niche use cases"
    },
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
      perfectFor: "Service-based businesses, e-commerce, healthcare, education"
    },
    {
      icon: Phone,
      title: "AI Sales Assistant",
      description: "Engage, qualify, and follow up with leads — automatically.",
      includes: [
        "AI Voice Agent for Outbound/Inbound Calls",
        "WhatsApp Follow-Ups",
        "Lead Qualification Scripts",
        "Calendar Integration for Bookings"
      ],
      perfectFor: "Real estate, financial services, recruitment, agency work"
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300"
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
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Includes:</h4>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-medium text-primary">Perfect for: </span>
                <span className="text-sm text-muted-foreground">{service.perfectFor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};