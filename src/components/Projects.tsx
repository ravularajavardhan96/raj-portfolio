import { ExternalLink, Github, MapPin, TrendingUp, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "🌍 Wanderlust",
      subtitle: "Full-Stack Travel Listing Platform",
      description: "A comprehensive travel listing web application that allows users to explore destinations, view them on an interactive map, register/login, add new listings with images, and post reviews. Built as part of the Delta 5.0 MERN Stack Batch from Apna College.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mapbox", "Authentication"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "🗺️ Interactive map integration with Mapbox",
        "🔐 User authentication & authorization",
        "📸 Image upload functionality",
        "⭐ Review and rating system",
        "📱 Responsive design"
      ],
      badges: ["Featured", "Full-Stack", "MERN"]
    },
    {
      title: "🐝 TradeHive",
      subtitle: "Zerodha Clone - Stock Trading Platform",
      description: "A modern stock trading platform clone of Zerodha where users can authenticate, explore stocks, and perform buy/sell operations. Features a user dashboard, secure authentication, and uses React Context API for state management.",
      tech: ["React.js", "Node.js", "Express.js", "JWT", "Context API", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "📈 Buy & Sell functionality with Context API",
        "🔐 Secure JWT authentication",
        "🖥️ User dashboard for portfolio management",
        "🎨 Clean, responsive UI design",
        "⚡ Interactive trading experience"
      ],
      badges: ["Clone Project", "Trading", "React"]
    }
  ];

  const achievements = [
    { icon: <Star className="w-5 h-5" />, text: "Completed Delta 5.0 MERN Stack Batch — Apna College" },
    { icon: <Users className="w-5 h-5" />, text: "Contributed to Hackathons" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Built capstone projects in full-stack journey" }
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            particularly with the MERN stack and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-accent text-accent-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-accent font-medium mb-4">{project.subtitle}</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="btn-primary flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button className="btn-accent flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="card-hover p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">🏅 Certifications & Achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-background/50 rounded-lg">
                <div className="text-accent mr-3">
                  {achievement.icon}
                </div>
                <span className="text-sm text-foreground">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;