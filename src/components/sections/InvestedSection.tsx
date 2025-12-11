import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InvestedSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight text-center">
            We're invested in your efficiency.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            <p>
              Paramount Intelligence's primary model involves a variable success
              fee tied directly to the efficiency milestones you've set (cost
              savings, throughput increase, error reduction). Fee ranges depend
              on the scale and complexity of your operations.
            </p>
            <p>
              If a pure success fee is not feasible, we work with you to
              establish other value-based incentives. Our goal is full
              alignment, ensuring we're maximally incentivized to generate
              operational alpha for your business.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 text-lg h-14"
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
