import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodingProfiles from "@/components/Profiles";
// import Profiles from "@components/Profiles";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;