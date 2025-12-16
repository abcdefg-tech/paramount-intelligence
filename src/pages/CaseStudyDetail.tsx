import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParamountNavbar } from "@/components/layout/ParamountNavbar";
import { ParamountFooter } from "@/components/layout/ParamountFooter";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ParamountNavbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container mx-auto px-6 lg:px-12">
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link to="/#case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl">
              {caseStudy.title}
            </h1>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* The Problem */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Problem
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Our Action */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Action
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.action}
                </p>
              </div>

              {/* The Result */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Result
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>

              {/* Back Button */}
              <div className="pt-8 border-t border-border">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
                  asChild
                >
                  <Link to="/#case-studies">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ParamountFooter />
    </div>
  );
};

export default CaseStudyDetail;
