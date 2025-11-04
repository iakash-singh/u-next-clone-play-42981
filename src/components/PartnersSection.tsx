import { GraduationCap } from "lucide-react";

export const PartnersSection = () => {
  const partners = [
    { name: "Global University", abbr: "GU" },
    { name: "Tech Institute", abbr: "TI" },
    { name: "Business School", abbr: "BS" },
    { name: "Innovation Academy", abbr: "IA" },
  ];

  return (
    <section id="partners" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Partnering With Universities That Shape
        </h2>
        <p className="text-xl text-center text-primary mb-12">The Future Of Online Learning</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-8 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.2)]"
            >
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">{partner.abbr}</div>
              <div className="text-sm text-muted-foreground text-center">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
