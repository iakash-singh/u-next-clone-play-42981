import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            EduVerse
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#programs" className="text-muted-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <a href="/#partners" className="text-muted-foreground hover:text-primary transition-colors">
              Partners
            </a>
            <a href="/#training" className="text-muted-foreground hover:text-primary transition-colors">
              Training
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="/#programs" className="text-muted-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <a href="/#partners" className="text-muted-foreground hover:text-primary transition-colors">
              Partners
            </a>
            <a href="/#training" className="text-muted-foreground hover:text-primary transition-colors">
              Training
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
