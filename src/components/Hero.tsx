import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-purple.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-rainbow-text animate-rainbow-pulse">Rajavardhan</span>
            <br />
            <span className="text-foreground">Reddy Ravula</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Full-Stack Developer | MERN Enthusiast | Tech Explorer
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Transforming ideas into interactive realities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="btn-primary group"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Resume
            </Button>
            
            <Button 
              className="btn-accent group"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;