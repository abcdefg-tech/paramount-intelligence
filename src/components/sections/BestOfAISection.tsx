export function BestOfAISection() {
  return <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(214 100% 14%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">Autonomous AI. Real business impact.</h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              In a world where AI is transforming daily life, Paramount
              Intelligence is at the forefront of building and deploying the
              most reliable autonomous agents. Because we align long-term
              incentives with your operational success, we build solutions for
              resilience and ROI, not just technical novelty.
            </p>
            <p className="text-foreground font-medium">
              The best part? All of this complexity is managed behind the
              scenes. You just get results.
            </p>
          </div>
        </div>
      </div>
    </section>;
}