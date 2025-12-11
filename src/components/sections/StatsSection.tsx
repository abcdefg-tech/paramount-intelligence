import { Award, Users, Briefcase, Target } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "10+", label: "Years in Operation" },
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Target, value: "1,200+", label: "AI Deployments" },
  { icon: Award, value: "50+", label: "Industry Awards" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
