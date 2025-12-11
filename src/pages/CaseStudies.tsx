import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, CheckCircle } from "lucide-react";
const caseStudies = [{
  title: "AI-Powered Supply Chain Optimization",
  industry: "Logistics",
  techStack: ["Python", "TensorFlow", "AWS", "Apache Kafka"],
  problem: "A global logistics company was losing $50M annually due to inefficient route planning and inventory management.",
  solution: "Implemented ML-based demand forecasting, real-time route optimization, and predictive maintenance systems.",
  outcomes: [{
    metric: "40%",
    label: "Cost Reduction"
  }, {
    metric: "60%",
    label: "Faster Delivery"
  }, {
    metric: "$30M",
    label: "Annual Savings"
  }],
  color: "from-blue-500/20 to-cyan-500/20"
}, {
  title: "Intelligent Document Processing",
  industry: "Finance",
  techStack: ["Python", "GPT-4", "Azure", "OCR"],
  problem: "A major bank processed 100,000+ documents monthly manually, leading to errors and delays.",
  solution: "Built an AI-powered document extraction system with NLP for classification and data extraction.",
  outcomes: [{
    metric: "95%",
    label: "Accuracy"
  }, {
    metric: "80%",
    label: "Time Saved"
  }, {
    metric: "10K hrs",
    label: "Monthly Savings"
  }],
  color: "from-green-500/20 to-emerald-500/20"
}, {
  title: "Predictive Healthcare Analytics",
  industry: "Healthcare",
  techStack: ["Python", "PyTorch", "HIPAA Cloud", "FHIR"],
  problem: "Hospital network struggled with patient readmission rates and resource allocation.",
  solution: "Developed predictive models for patient risk scoring and resource optimization algorithms.",
  outcomes: [{
    metric: "35%",
    label: "Fewer Readmissions"
  }, {
    metric: "25%",
    label: "Resource Efficiency"
  }, {
    metric: "92%",
    label: "Prediction Accuracy"
  }],
  color: "from-rose-500/20 to-pink-500/20"
}, {
  title: "Manufacturing Quality Control AI",
  industry: "Manufacturing",
  techStack: ["Python", "OpenCV", "Edge AI", "IoT"],
  problem: "Automotive parts manufacturer had 3% defect rate causing millions in warranty claims.",
  solution: "Deployed computer vision system for real-time defect detection on production line.",
  outcomes: [{
    metric: "0.1%",
    label: "New Defect Rate"
  }, {
    metric: "$15M",
    label: "Claims Reduced"
  }, {
    metric: "99.9%",
    label: "Detection Rate"
  }],
  color: "from-orange-500/20 to-amber-500/20"
}, {
  title: "Customer Service Automation",
  industry: "Retail",
  techStack: ["Python", "GPT-4", "LangChain", "AWS"],
  problem: "E-commerce giant handling 500K+ support tickets monthly with 48-hour response time.",
  solution: "Implemented AI chatbot with multi-language support and intelligent ticket routing.",
  outcomes: [{
    metric: "70%",
    label: "Auto-Resolved"
  }, {
    metric: "2 min",
    label: "Response Time"
  }, {
    metric: "45%",
    label: "Cost Reduction"
  }],
  color: "from-purple-500/20 to-violet-500/20"
}, {
  title: "Fraud Detection System",
  industry: "Fintech",
  techStack: ["Python", "XGBoost", "Kafka", "Redis"],
  problem: "Payment processor losing $20M yearly to fraudulent transactions.",
  solution: "Built real-time fraud detection system with ensemble ML models and behavioral analysis.",
  outcomes: [{
    metric: "98%",
    label: "Fraud Detection"
  }, {
    metric: "<50ms",
    label: "Latency"
  }, {
    metric: "$18M",
    label: "Fraud Prevented"
  }],
  color: "from-red-500/20 to-rose-500/20"
}];
const CaseStudies = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-semibold text-sm uppercase tracking-wider text-primary-foreground">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary-foreground">
              Real Results, Real Impact
            </h1>
            <p className="text-lg text-primary-foreground">
              Explore how we've helped organizations across industries achieve transformational results with AI and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {caseStudies.map((study, index) => <div key={study.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {study.industry}
                      </span>
                      {study.techStack.map(tech => <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-xs text-primary-foreground">
                          {tech}
                        </span>)}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{study.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" /> Problem
                        </h4>
                        <p className="text-muted-foreground text-sm">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" /> Action
                        </h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" /> Result
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {study.outcomes.map(o => `${o.metric} ${o.label}`).join(' • ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Be Our Next Success Story?</h2>
          <p className="mb-8 max-w-xl mx-auto text-primary-foreground">
            Let's discuss how AI can transform your business operations.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default CaseStudies;