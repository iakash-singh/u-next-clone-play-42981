import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Users, Briefcase, TrendingUp, Award } from "lucide-react";

export const CareerPathsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const careerPaths = [
    {
      icon: Users,
      title: "Pre-Joiners",
      description: "Seamlessly onboard final-year students to your workforce",
      color: "text-primary",
    },
    {
      icon: Briefcase,
      title: "Freshers",
      description: "Train young talent to become first-day first-hour productive",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Mid-Level Professionals",
      description: "Develop technical, functional, & domain-specific competencies",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "C-Suite",
      description: "Strengthen your leadership and nurture visionaries",
      color: "text-accent",
    },
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock Capabilities <span className="text-primary">Across Career Paths</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {careerPaths.map((path, index) => {
            const Icon = path.icon;
            const isExpanded = expandedCard === index;

            return (
              <Card
                key={index}
                className={`bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer ${
                  isExpanded ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 ${path.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      {path.title}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-primary" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </h3>
                    
                    {isExpanded && (
                      <div className="space-y-4 animate-in fade-in-50 duration-300">
                        <p className="text-muted-foreground">{path.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enquire Now
                        </Button>
                      </div>
                    )}
                    
                    {!isExpanded && (
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
