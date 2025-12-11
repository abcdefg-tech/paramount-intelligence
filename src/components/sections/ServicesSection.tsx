import { Cog, BookOpen, TrendingUp, BarChart3, Zap, Cloud } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Automation & RPA",
    description: "Streamline operations with intelligent robotic process automation.",
  },
  {
    icon: BookOpen,
    title: "RAG & Knowledge Retrieval Systems",
    description: "Deliver accurate insights from fragmented datasets.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics & Modeling",
    description: "Forecast trends and outcomes with advanced statistical and machine learning algorithms.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights and dashboards.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "End-to-end automation of complex business processes with intelligent orchestration.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment & MLOps Infrastructure",
    description: "Deploy scalable AI solutions on AWS and GCP.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 leading-tight">
            Not a service. An operational evolution.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 hover:border-foreground/20 bg-card/30 hover:bg-card/50 transition-all duration-300"
              >
                <service.icon
                  className="w-8 h-8 text-foreground/70 mb-4 group-hover:text-foreground transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
