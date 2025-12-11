import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function AboutPreview() {
  return <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
            <span className="font-semibold text-sm uppercase tracking-wider text-primary-foreground">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10 text-primary-foreground">Pioneering the Future of AI-Driven Enterprise</h2>
            <p className="mb-8 text-primary-foreground text-xl">At Paramount Intelligence, we're on a mission to make AI effortless, accessible, and truly transformative for businesses of all sizes. We build intelligent automation solutions that streamline operations, eliminate repetitive work, and empower teams to focus on what matters most. Your biggest bottlenecks aren’t your people — they’re buried inside emails, spreadsheets, approvals, CRMs, and support queues. Manual processes slow execution and cap your growth. We design AI agents and automations that run your workflows quietly in the background — zero friction, zero extra headcount, and measurable ROI from day one.
With us, you're not just adopting AI; you're unlocking the future of productivity.</p>

            <div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>;
}