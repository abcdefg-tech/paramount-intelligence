import { Link } from "react-router-dom";
import { Brain, Cog, LineChart, Eye, MessageSquare, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Model Development",
    description: "Custom machine learning models tailored to your unique business challenges and data.",
  },
  {
    icon: Cog,
    title: "Automation & RPA",
    description: "Streamline operations with intelligent robotic process automation solutions.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with predictive analytics.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image and video analysis for quality control and surveillance.",
  },
  {
    icon: MessageSquare,
    title: "NLP Solutions",
    description: "Natural language processing for chatbots, sentiment analysis, and more.",
  },
  {
    icon: Bot,
    title: "Robotics Automation",
    description: "Integrate AI with physical systems for smart manufacturing and logistics.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            AI-Powered Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end AI and automation solutions that drive measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:box-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:gradient-primary transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
