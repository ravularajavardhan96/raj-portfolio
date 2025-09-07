import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden isolate"
>
  {/* Hero Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
    style={{ backgroundImage: `url(${heroBackground})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-purple-900 to-black opacity-70" />

  {/* Animated Background Shapes */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-24 left-16 w-28 h-28 bg-primary/20 rounded-full animate-float" />
    <div
      className="absolute top-36 right-24 w-20 h-20 bg-accent/25 rounded-full animate-float"
      style={{ animationDelay: "1s" }}
    />
    <div
      className="absolute bottom-36 left-24 w-16 h-16 bg-primary/30 rounded-full animate-float"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute bottom-16 right-16 w-28 h-28 bg-accent/15 rounded-full animate-float"
      style={{ animationDelay: "0.5s" }}
    />
  </div>

  {/* Hero Content */}
  <div className="container-custom text-center relative z-10 px-4">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
      Rajavardhan <span className="text-accent">Reddy Ravula</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium max-w-2xl mx-auto">
      Full-Stack Developer | MERN Enthusiast | Tech Explorer
    </p>

    <p className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      I design and build scalable web applications with a focus on clean code,
      modern UI, and smooth user experience.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button
        className="bg-primary hover:bg-primary/90 px-7 py-3 text-lg font-semibold shadow-md"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        <Download className="mr-2 h-5 w-5" />
        View Resume
      </Button>

      <Button
        className="bg-accent hover:bg-accent/90 px-7 py-3 text-lg font-semibold shadow-md"
        onClick={() => {
          const contactSection = document.querySelector("#contact");
          contactSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact Me
      </Button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <button
    onClick={() => {
      const aboutSection = document.querySelector("#about");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-accent transition-colors animate-bounce z-10"
  >
    <ChevronDown size={36} />
  </button>
</section>

  );
};

export default Hero;
