import { Award, Star, Trophy } from "lucide-react";

export const AwardsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Best EdTech Platform 2024",
      org: "Global Education Awards",
    },
    {
      icon: Award,
      title: "Innovation in Learning",
      org: "Tech Excellence Awards",
    },
    {
      icon: Star,
      title: "Top 10 Training Provider",
      org: "Industry Recognition",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empowering Futures, <span className="text-primary">Earning Accolades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="flex flex-col items-center text-center p-8 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)] group"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.org}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
