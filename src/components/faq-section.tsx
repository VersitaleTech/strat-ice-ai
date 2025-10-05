import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How quickly can AI be implemented in our business?",
    answer: "Most of our AI solutions can be implemented within 2-3 weeks. The timeline depends on the complexity of your requirements and existing systems. We start with a discovery phase to understand your needs, then design, develop, and deploy your custom AI solution. Many clients see initial results within the first week of implementation."
  },
  {
    question: "What's the ROI timeline for AI automation?",
    answer: "Most clients see positive ROI within 3-6 months. The exact timeline depends on your specific use case, but typically you'll notice immediate time savings in customer support, lead qualification, and routine tasks. Our clients report an average of 80% reduction in response times and 3x increase in capacity, which translates to significant cost savings and revenue growth."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We provide comprehensive ongoing support and maintenance for all our AI solutions. This includes 24/7 monitoring, regular updates, performance optimization, and dedicated support channels. We also offer training sessions to ensure your team can make the most of your AI systems. Our goal is to be your long-term AI partner, not just a one-time vendor."
  },
  {
    question: "How does AI integration work with existing systems?",
    answer: "Our AI solutions are designed to integrate seamlessly with your existing tools and workflows. We support integration with popular CRMs, communication platforms, scheduling systems, and custom applications. During the discovery phase, we'll map out all your systems and create a integration plan that ensures smooth data flow and minimal disruption to your operations."
  },
  {
    question: "What makes your AI solutions different from competitors?",
    answer: "Unlike generic AI chatbots, we build custom solutions tailored to your specific business needs and industry requirements. We focus on measurable business outcomes, not just technology. Our team combines deep AI expertise with business consulting to ensure your solution actually solves your problems and generates ROI. Plus, we provide local support and understand the unique challenges of businesses in Aruba and the Caribbean region."
  },
  {
    question: "Is my data secure with AI automation?",
    answer: "Absolutely. Data security is our top priority. We implement industry-standard encryption, secure data storage, and compliance with relevant regulations (including GDPR and HIPAA where applicable). Your data is never shared with third parties, and we can deploy solutions on-premise or in private cloud environments for maximum security. We're happy to discuss our security measures in detail during consultation."
  },
  {
    question: "Can I start with a small project before committing fully?",
    answer: "Yes! We recommend starting with a pilot project to prove the value of AI for your business. Many clients begin with one specific use case (like customer inquiry automation or appointment scheduling) and expand from there. This approach allows you to see tangible results quickly while minimizing risk and investment."
  },
  {
    question: "What ongoing costs should I expect?",
    answer: "Our pricing is transparent and predictable. After the initial implementation, you'll have a monthly subscription that covers hosting, maintenance, support, and continuous improvements. Costs typically range from $500-$3000/month depending on your solution's complexity and usage volume. The investment is usually offset by the time and cost savings within the first few months."
  }
];

export const FAQSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI solutions
          </p>
        </div>

        <div className="service-card p-8 rounded-2xl mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free consultation and we'll answer all your questions
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact} className="glow-ice-strong">
            Let's Talk About Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};
