import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-learning.jpg";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import heroUniversity from "@/assets/hero-university.jpg";
import patternLeft from "@/assets/pattern-left.png";
import patternRight from "@/assets/pattern-right.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  highlight: string;
  description: string;
  image: string;
  stats: Array<{ value: string; label: string; color: string }>;
}

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Transform Your Future with",
      highlight: "World-Class Online Learning",
      description: "Partner with leading universities and industry experts to build the skills that matter.",
      image: heroImage,
      stats: [
        { value: "160,000+", label: "Online Learners", color: "text-primary" },
        { value: "700,000+", label: "Enterprise Learners", color: "text-accent" },
        { value: "700+", label: "Organizations", color: "text-primary" },
        { value: "6M+", label: "Hours of Content", color: "text-accent" },
      ],
    },
    {
      title: "Partnering With Universities That",
      highlight: "Shape The Future",
      description: "Collaborate with top-tier institutions to deliver industry-recognized certifications and degrees.",
      image: heroUniversity,
      stats: [
        { value: "50+", label: "University Partners", color: "text-primary" },
        { value: "95%", label: "Completion Rate", color: "text-accent" },
        { value: "10K+", label: "Courses Available", color: "text-primary" },
        { value: "150+", label: "Countries", color: "text-accent" },
      ],
    },
    {
      title: "Training Job-Ready Talent &",
      highlight: "Nurturing Next-Gen Skills",
      description: "Build a future-ready workforce with cutting-edge technical and leadership training programs.",
      image: heroCollaboration,
      stats: [
        { value: "85%", label: "Placement Rate", color: "text-primary" },
        { value: "500+", label: "Corporate Partners", color: "text-accent" },
        { value: "40%", label: "Salary Increase", color: "text-primary" },
        { value: "24/7", label: "Learning Support", color: "text-accent" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images with Transition */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
        ))}
      </div>

      {/* Decorative Patterns */}
      <img
        src={patternLeft}
        alt=""
        className="absolute left-0 top-1/4 w-64 h-64 opacity-20 animate-pulse"
      />
      <img
        src={patternRight}
        alt=""
        className="absolute right-0 bottom-1/4 w-64 h-64 opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-card hover:border-primary transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-card hover:border-primary transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 absolute pointer-events-none"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                {slide.title}{" "}
                <span className="text-primary">{slide.highlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  Explore Programs <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform"
                >
                  For Enterprises
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {slide.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.15)] hover:scale-105"
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-primary"
                : "w-3 h-3 bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
