import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cog, LineChart, Eye, MessageSquare, Bot, Cpu, Database, ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
const services = [{
  icon: Brain,
  title: "AI Model Development",
  description: "Custom machine learning models designed for your specific business needs.",
  features: ["Deep learning & neural networks", "Predictive modeling", "Custom algorithm development", "Model training & optimization", "Continuous learning systems"]
}, {
  icon: Cog,
  title: "Automation & RPA",
  description: "Streamline operations with intelligent robotic process automation.",
  features: ["End-to-end process automation", "Workflow optimization", "Legacy system integration", "Bot development & management", "Intelligent document processing"]
}, {
  icon: LineChart,
  title: "Machine Learning Integration",
  description: "Seamlessly integrate ML capabilities into existing systems.",
  features: ["API development & integration", "Real-time predictions", "Batch processing systems", "Edge ML deployment", "MLOps & model management"]
}, {
  icon: Database,
  title: "Data Analytics & Prediction",
  description: "Transform raw data into actionable business intelligence.",
  features: ["Predictive analytics", "Business intelligence dashboards", "Data pipeline development", "Real-time analytics", "Data visualization"]
}, {
  icon: Eye,
  title: "Computer Vision Systems",
  description: "Advanced image and video analysis for any industry.",
  features: ["Object detection & recognition", "Quality control automation", "Facial recognition systems", "Video analytics", "OCR & document scanning"]
}, {
  icon: MessageSquare,
  title: "NLP Solutions",
  description: "Natural language processing for intelligent text analysis.",
  features: ["Chatbots & virtual assistants", "Sentiment analysis", "Text classification", "Language translation", "Voice recognition"]
}, {
  icon: Cpu,
  title: "Custom Enterprise AI Tools",
  description: "Bespoke AI solutions tailored to enterprise requirements.",
  features: ["Custom AI platforms", "Enterprise integration", "Scalable architecture", "Security & compliance", "24/7 support & maintenance"]
}, {
  icon: Bot,
  title: "Robotics Automation",
  description: "Integrate AI with physical systems for smart operations.",
  features: ["Industrial automation", "Warehouse robotics", "Autonomous systems", "IoT integration", "Smart manufacturing"]
}];
const reviews = [{
  quote: "Paramount's AI models increased our prediction accuracy by 94%.",
  author: "Tech Director, Fortune 500 Retail"
}, {
  quote: "Their RPA solution saved us 10,000+ hours annually.",
  author: "COO, Global Logistics Firm"
}, {
  quote: "Best-in-class computer vision for our quality control.",
  author: "VP Engineering, Manufacturing"
}];
const Services = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-semibold text-sm uppercase tracking-wider text-primary-foreground">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary-foreground">
              AI-Powered Solutions for Every Challenge
            </h1>
            <p className="text-lg text-primary-foreground">
              From custom AI development to enterprise automation, we deliver end-to-end solutions that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map(service => <div key={service.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 transition-all">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>)}
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">
                        Contact Us <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wider text-primary-foreground">Client Feedback</span>
            <h2 className="text-3xl font-bold mt-2 text-primary-foreground">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => <div key={index} className="p-6 rounded-2xl bg-card border border-border relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">"{review.quote}"</p>
                <p className="text-sm text-foreground font-medium">{review.author}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Build the Future Together</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to transform your business with AI? Our experts are here to help.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Services;