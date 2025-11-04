import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Users, TrendingUp, Zap, Target } from "lucide-react";

export const TrainingSection = () => {
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
    <section id="training" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Training <span className="text-primary">Job-Ready Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground">Nurturing Next-Gen Skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.15)] group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Icon className={`w-10 h-10 ${category.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl mt-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
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
