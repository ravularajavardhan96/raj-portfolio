import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/rajavardhanreddy" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/rajavardhanreddy" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:rajavardhan@email.com" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              Rajavardhan Reddy Ravula
            </div>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer passionate about creating innovative web solutions with the MERN stack.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Rajavardhan Reddy Ravula. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-300 group"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;