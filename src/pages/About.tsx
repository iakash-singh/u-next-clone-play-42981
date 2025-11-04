import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Target, Zap, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Student-Centered",
      description: "We put learners first, designing programs that meet their career aspirations and learning needs.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in curriculum design, instruction, and student support.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our teaching methods and technology to provide cutting-edge education.",
    },
    {
      icon: Award,
      title: "Impact",
      description: "We measure success by the career advancement and skill development of our graduates.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">LearnNext</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transforming careers and empowering organizations through world-class online education
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At LearnNext, we bridge the gap between academic knowledge and industry requirements. 
                Our mission is to create a future-ready workforce by partnering with leading universities 
                and corporations to deliver transformative learning experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that education should be accessible, practical, and aligned with real-world 
                business needs. Through our innovative programs, we've helped over 160,000 individuals 
                and trained 700,000+ enterprise employees across 700+ organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.15)]"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Our <span className="text-primary">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">160K+</div>
                <div className="text-muted-foreground">Online Learners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">700K+</div>
                <div className="text-muted-foreground">Enterprise Trained</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">700+</div>
                <div className="text-muted-foreground">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">6M+</div>
                <div className="text-muted-foreground">Learning Hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Leadership <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Our team comprises education experts, industry veterans, and technology innovators 
              committed to transforming learning experiences.
            </p>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                With decades of combined experience in education technology, corporate training, 
                and curriculum design, our leadership team ensures that every program we offer 
                meets the highest standards of quality and relevance.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
