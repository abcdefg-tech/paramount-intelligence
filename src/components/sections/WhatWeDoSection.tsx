export function WhatWeDoSection() {
  return <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            What we do
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-tight max-w-4xl">
            We architect intelligent workflows, and help you automate the right
            processes.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
            <p>
              Say goodbye to manual tasks, human error, and operational
              bottlenecks. Your next 10x efficiency gain is buried somewhere in
              a spreadsheet, a repetitive software task, or a legacy system. The
              problem is your processes are fragmented, data is siloed, and
              scaling operations is slow and costly.
            </p>
            <p>We design and deploy production-grade AI agents powered by LLMs, RAG pipelines, vector search, and automated workflows across Airtable, Slack, Zapier, n8n, and cloud platforms like AWS and GCP. Our systems work silently in the background — answering queries, routing tasks, generating insights, and executing processes with zero extra headcount. The result is simple: faster operations, reduced costs, and measurable ROI across your entire enterprise.</p>
          </div>
        </div>
      </div>
    </section>;
}