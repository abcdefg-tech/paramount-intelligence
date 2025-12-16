import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Proven Impact: Our Case Studies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've transformed complex challenges into automated solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
            >
              {/* Background Image */}
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {study.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
