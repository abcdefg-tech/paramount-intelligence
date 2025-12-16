import networkPattern from "@/assets/network-pattern.jpg";

export function HowWeDoItSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
            How we do it
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left Column - Headline and Image */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Speed. Reliability. Control.
              </h2>
              
              <div className="flex-1 rounded-2xl overflow-hidden border border-border">
                <img 
                  src={networkPattern} 
                  alt="Network connectivity pattern" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>

            {/* Right Column - Sub-headline and Body */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Paramount Intelligence combines deep AI engineering with hands-on execution.
              </h3>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Paramount Intelligence diagnoses operational bottlenecks by deeply understanding your workflows, data, and systems, then engineers AI solutions that integrate directly into how your teams already work.
                </p>
                <p>
                  On the front end, we work closely with operators and teams to define what success looks like. On the back end, we implement agentic workflows, RAG pipelines, and automation that keep data accurate, decisions grounded, and systems continuously improving.
                </p>
                <p>
                  From an engagement perspective, we structure work around clear outcomes: reduced cost, increased capacity, or new revenue enablement. We focus on impact first, then scale what works.
                </p>
                <p>
                  Your systems improve. Your teams move faster. Your business scales.
                </p>
                <p className="text-foreground font-bold">
                  We call this compounding leverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}