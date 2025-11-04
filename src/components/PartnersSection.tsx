import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const partners = [
    { name: "Global University", abbr: "GU" },
    { name: "Tech Institute", abbr: "TI" },
    { name: "Business School", abbr: "BS" },
    { name: "Innovation Academy", abbr: "IA" },
  ];

  return (
    <section id="partners" className="py-20 bg-card/30 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Partnering With Universities That Shape
        </h2>
        <p className={`text-xl text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-12 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          The Future Of Online Learning
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex flex-col items-center justify-center p-8 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-110 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <GraduationCap className="w-12 h-12 text-primary mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-2xl font-bold text-foreground mb-2">{partner.abbr}</div>
              <div className="text-sm text-muted-foreground text-center">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
