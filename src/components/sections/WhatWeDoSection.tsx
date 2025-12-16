export function WhatWeDoSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            What we do
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-tight">
            We build and deploy AI systems that do real work across your business.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Say goodbye to fragile prototypes, manual workflows, and AI that never ships.
            </p>
            <p>
              Your next 10x efficiency gain is buried across tickets, documents, dashboards, and internal tools. The problem is your data is fragmented, workflows are inconsistent, and AI initiatives stall at integration, reliability, and adoption.
            </p>
            <p>
              Paramount Intelligence unifies your data, engineers RAG and agentic systems on top of it, and integrates AI directly into the tools your teams already use. The result is automation that stays accurate, deploys safely, and improves over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}