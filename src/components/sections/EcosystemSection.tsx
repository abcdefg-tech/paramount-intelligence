import { Search, Network, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Strategic Advising",
    description:
      "Paramount Intelligence launches each engagement with an Automation Audit to identify high-impact opportunities. This audit creates a Strategic Automation Blueprint (SAB), detailing the how, why, and when for deploying AI agents.",
  },
  {
    icon: Network,
    title: "Agent Deployment + Integration",
    description:
      "Paramount Intelligence ingests your process data, runs AI analysis to design the optimal solution, and then builds, integrates, and deploys custom AI agents into your workflow. These agents can handle: data processing, customer support triage, internal ticketing, report generation, and more.",
  },
  {
    icon: TrendingUp,
    title: "Managed Operations",
    description:
      "Paramount Intelligence doesn't just build and leave. We provide ongoing monitoring, optimization, and management of your AI workforce. We ensure 99.9% uptime, handle exception cases, and continuously tune agents for peak performance.",
  },
];

export function EcosystemSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Comprehensive solution
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 leading-tight">
            Intelligent Automation Ecosystem.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <pillar.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
