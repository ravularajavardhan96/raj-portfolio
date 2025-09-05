import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-purple.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-purple-900 to-black opacity-70" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-16 w-28 h-28 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-36 right-24 w-20 h-20 bg-accent/25 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-36 left-24 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block gradient-rainbow-text animate-rainbow-pulse transform transition-transform hover:scale-105">
              Rajavardhan
            </span>
            <span className="block text-foreground">Reddy Ravula</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Full-Stack Developer | MERN Enthusiast | Tech Explorer
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Transforming ideas into interactive realities with scalable and modern web solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="btn-primary group px-6 py-3 text-lg font-medium"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Resume
            </Button>

            <Button
              className="btn-accent group px-6 py-3 text-lg font-medium"
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
