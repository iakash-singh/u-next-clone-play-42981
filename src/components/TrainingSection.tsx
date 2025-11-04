import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Users, TrendingUp, Zap, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const TrainingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const categories = [
    {
      icon: Briefcase,
      title: "BFSI",
      description: "Banking, Financial Services, and Insurance training programs",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Digital & Tech",
      description: "Cutting-edge technology and digital transformation courses",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Executive leadership and management development",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "Sales excellence and customer relationship mastery",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creative thinking and innovation methodologies",
      color: "text-primary",
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Business strategy and organizational planning",
      color: "text-accent",
    },
  ];

  return (
    <section id="training" className="py-20 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Training <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Job-Ready Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground">Nurturing Next-Gen Skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-105 group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Icon className={`w-10 h-10 ${category.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`} />
                  </div>
                  <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
