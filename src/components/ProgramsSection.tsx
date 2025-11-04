import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const bankingPrograms = [
    {
      title: "Talent Fulfillment Solutions",
      description: "Build a stream of first day, first-hour productive talent for banking operations.",
    },
    {
      title: "New Employee Onboarding",
      description: "Transition employees into new roles and drive early contributions.",
    },
    {
      title: "Domain Specific Training",
      description: "Upskill workforces with targeted domain expertise in banking and finance.",
    },
    {
      title: "Functional Training",
      description: "Achieve operational excellence through targeted functional training programs.",
    },
    {
      title: "Leadership Programs",
      description: "Develop strategic leaders who can drive innovation and navigate change.",
    },
  ];

  const techPrograms = [
    {
      title: "GenAI & XAI",
      description: "Transform into a productivity powerhouse and fast-track enterprise innovation with AI.",
    },
    {
      title: "Data Science",
      description: "Make business-effective decisions with a data-smart workforce.",
    },
    {
      title: "Cybersecurity",
      description: "Fortify your digital infrastructure and optimize cyber vigilance.",
    },
    {
      title: "Digital Transformation",
      description: "Fuel your digital transformation ambitions by cultivating cutting-edge competencies.",
    },
    {
      title: "AI/ML",
      description: "Race ahead of competition by leveraging the full potential of artificial intelligence.",
    },
    {
      title: "Full Stack Development",
      description: "Build and deploy scalable systems on both frontend and backend models.",
    },
    {
      title: "Cloud Computing",
      description: "Establish global authority for your enterprise with frontier-less cloud operations.",
    },
    {
      title: "DevOps",
      description: "Deliver business value faster, safer, and smarter with DevOps methodologies.",
    },
  ];

  const leadershipPrograms = [
    {
      title: "ESG",
      description: "Become a future-aware enterprise and amplify your brand reputation and financial performance.",
    },
    {
      title: "DEI",
      description: "Nurture cultural sensibility and fuel enterprise strength through diversity.",
    },
    {
      title: "Leadership Development Programs",
      description: "For resilient enterprises that demand exceptional leaders.",
    },
    {
      title: "Architectural Leadership",
      description: "Arrive as an architecture leader with high-level structural design approach.",
    },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Programs That Drive <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Businesses</span>
          </h2>
        </div>

        <Tabs defaultValue="banking" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
          </TabsList>

          <TabsContent value="banking" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 text-center">
                First-day-first-hour productive workforce: comprehensive solutions for hiring & training job-ready BFSI talent.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {bankingPrograms.map((program, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg bg-card/50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-primary" />
                        <span className="text-left">{program.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{program.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-8">
                <Button size="lg" variant="gradient">
                  Explore Now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technology" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 text-center">
                Gain competitive edge with a workforce skilled in futuristic technologies.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {techPrograms.map((program, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg bg-card/50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-accent" />
                        <span className="text-left">{program.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{program.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-8">
                <Button size="lg" variant="gradient">
                  Explore Now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leadership" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 text-center">
                Navigate complex challenges and transform into a purpose-led design leader.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {leadershipPrograms.map((program, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg bg-card/50 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-primary" />
                        <span className="text-left">{program.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{program.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-8">
                <Button size="lg" variant="gradient">
                  Explore Now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
