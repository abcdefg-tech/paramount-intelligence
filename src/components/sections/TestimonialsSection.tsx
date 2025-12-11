import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Paramount Intelligence transformed our supply chain with AI-driven predictions. We've reduced costs by 40% and improved delivery times significantly.",
    author: "Sarah Chen",
    role: "COO",
    company: "GlobalTech Industries",
  },
  {
    quote: "Their RPA solutions automated 80% of our repetitive tasks, freeing our team to focus on strategic initiatives. Exceptional results!",
    author: "Michael Rodriguez",
    role: "VP of Operations",
    company: "FinanceFirst Corp",
  },
  {
    quote: "The custom ML models they developed have given us a competitive edge we never thought possible. True experts in their field.",
    author: "Emily Watson",
    role: "Director of Innovation",
    company: "HealthPlus Systems",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped organizations across industries achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">
            Certified and compliant with global security standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["ISO 27001", "SOC 2", "GDPR", "HIPAA", "AWS Partner"].map((badge) => (
              <div
                key={badge}
                className="px-6 py-3 rounded-lg bg-card border border-border text-muted-foreground font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
