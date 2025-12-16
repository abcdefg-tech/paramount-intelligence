import { ParamountNavbar } from "@/components/layout/ParamountNavbar";
import { ParamountHero } from "@/components/sections/ParamountHero";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { HowWeDoItSection } from "@/components/sections/HowWeDoItSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { BestOfAISection } from "@/components/sections/BestOfAISection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InvestedSection } from "@/components/sections/InvestedSection";
import { ParamountFooter } from "@/components/layout/ParamountFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParamountNavbar />
      <main>
        <ParamountHero />
        <WhatWeDoSection />
        <HowWeDoItSection />
        <EcosystemSection />
        <BestOfAISection />
        <ServicesSection />
        <section id="case-studies">
          <CaseStudiesSection />
        </section>
        <InvestedSection />
      </main>
      <ParamountFooter />
    </div>
  );
};

export default Index;
