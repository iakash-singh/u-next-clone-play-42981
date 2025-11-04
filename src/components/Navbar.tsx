import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5" 
        : "bg-background/95 backdrop-blur-sm border-b border-border/50"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform cursor-pointer">
            EduVerse
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#programs" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Programs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#partners" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Partners</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#training" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Training</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button variant="gradient">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a href="/#programs" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
              Programs
            </a>
            <a href="/#partners" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
              Partners
            </a>
            <a href="/#training" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
              Training
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
              Contact
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2">
              About
            </a>
            <Button variant="gradient" className="w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
