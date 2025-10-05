import { Clock, Users, TrendingUp, Star } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      value: "80%",
      label: "Faster Response Times",
      description: "Average improvement across clients"
    },
    {
      icon: Users,
      value: "3x",
      label: "More Support Capacity",
      description: "Handle triple the inquiries"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Client Satisfaction",
      description: "Average rating from our clients"
    },
    {
      icon: Star,
      value: "24/7",
      label: "Always Available",
      description: "Round-the-clock AI support"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="service-card p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-ice">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            *Results based on average client outcomes over 6-month period
          </p>
        </div>
      </div>
    </section>
  );
};
