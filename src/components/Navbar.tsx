import { Button } from "@/components/ui/button";
import { Menu, GraduationCap } from "lucide-react";
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
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                EduVerse
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Transform Your Future
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="/#programs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Programs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Partners</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#training" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Training</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button variant="gradient" size="lg" className="shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 flex flex-col gap-4 animate-fade-in border-t border-border pt-4">
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
