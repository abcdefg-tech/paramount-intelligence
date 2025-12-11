import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTASection() {
  return <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl gradient-primary flex items-center justify-center animate-float">
            <Rocket className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-lg mb-10 text-primary-foreground">
            Let's discuss how AI and intelligent automation can transform your operations,
            reduce costs, and drive unprecedented growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/case-studies" className="text-primary-foreground border-primary-foreground">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}