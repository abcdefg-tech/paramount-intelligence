import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, Shield, Scale, ArrowRight, Award, Rocket, Heart, Lock } from "lucide-react";
const values = [{
  icon: Lightbulb,
  title: "Innovation",
  description: "We constantly push the boundaries of what's possible with AI technology."
}, {
  icon: Shield,
  title: "Integrity",
  description: "We build trust through transparency, honesty, and ethical AI practices."
}, {
  icon: Heart,
  title: "Customer Trust",
  description: "Our clients' success is our success. We're committed to delivering real value."
}, {
  icon: Lock,
  title: "Security & Compliance",
  description: "Enterprise-grade security and compliance are built into everything we do."
}, {
  icon: Scale,
  title: "Scalability",
  description: "Our solutions grow with your business, from startup to enterprise."
}, {
  icon: Eye,
  title: "Transparency",
  description: "Clear communication and explainable AI for complete visibility."
}];
const About = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="font-semibold text-sm uppercase tracking-wider text-white">
              About Paramount Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary-foreground">Pioneering the Future of AI & Automation</h1>
            <p className="text-lg text-primary-foreground">
              Since 2014, we've been at the forefront of artificial intelligence and intelligent automation, helping businesses worldwide transform their operations and unlock unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize artificial intelligence and make intelligent automation accessible to businesses of all sizes. We believe every organization deserves the power of AI to solve complex problems, drive efficiency, and create competitive advantages.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global leader in AI-driven business transformation, creating a future where intelligent systems and human creativity work together to solve the world's most challenging problems and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Goals */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">How We Achieve Excellence</h2>
            <p className="max-w-2xl mx-auto text-primary-foreground">
              Our strategic approach ensures lasting success for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Rocket,
            title: "Scalable AI Adoption",
            desc: "Phased implementation for sustainable growth"
          }, {
            icon: Award,
            title: "Enterprise Automation",
            desc: "End-to-end process optimization"
          }, {
            icon: Target,
            title: "Data-Driven Decisions",
            desc: "Analytics that drive real results"
          }, {
            icon: Lightbulb,
            title: "Continuous Innovation",
            desc: "R&D investment for cutting-edge solutions"
          }].map(item => <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wider text-primary-foreground">Our Values</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-primary-foreground">Business Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(value => <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Work Together?</h2>
          <p className="mb-8 max-w-xl mx-auto text-primary-foreground">
            Join hundreds of leading organizations transforming their business with AI.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default About;