import { ExternalLink, Github, MapPin, TrendingUp, Star, Users, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ScreenshotCarousel = ({ screenshots }: { screenshots: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="relative mb-6 group">
      <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={screenshots[currentIndex].url}
          alt={screenshots[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      
      {screenshots.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
        {screenshots[currentIndex].title}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "🌍 Wanderlust",
      subtitle: "Full-Stack Travel Listing Platform",
      description:
        "A comprehensive travel listing web application that allows users to explore destinations, view them on an interactive map, register/login, add new listings with images, and post reviews. Built as part of the Delta 5.0 MERN Stack Batch from Apna College.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mapbox", "Authentication"],
      liveUrl: "https://wanderlust-dqbl.onrender.com/listings",
      githubUrl: "https://github.com/ravularajavardhan96/Wanderlust",
      features: [
        "🗺️ Interactive map integration with Mapbox",
        "🔐 User authentication & authorization",
        "📸 Image upload functionality",
        "⭐ Review and rating system",
        "📱 Responsive design",
      ],
      badges: ["Featured", "Full-Stack", "MERN"],
      screenshots: [
        { title: "Home Page", url: "/screenshots/wanderlust/homepage.png" },
        { title: "Interactive Map", url: "/screenshots/wanderlust/map.png" },
        { title: "Listing Details", url: "/screenshots/wanderlust/listings.png" },
      ],
    },
    {
      title: "🐝 TradeHive",
      subtitle: "Zerodha Clone - Stock Trading Platform",
      description:
        "A modern stock trading platform clone of Zerodha where users can authenticate, explore stocks, and perform buy/sell operations. Features a user dashboard, secure authentication, and uses React Context API for state management.",
      tech: ["React.js", "Node.js", "Express.js", "JWT", "Context API", "Bootstrap"],
      liveUrl: "https://frontend-zerodha.netlify.app/",
      githubUrl: "https://github.com/ravularajavardhan96/TradeHive",
      features: [
        "📈 Buy & Sell functionality with Context API",
        "🔐 Secure JWT authentication",
        "🖥️ User dashboard for portfolio management",
        "🎨 Clean, responsive UI design",
        "⚡ Interactive trading experience",
      ],
      badges: ["Clone Project", "Trading", "React"],
      screenshots: [
        { title: "Home Page", url: "/screenshots/tradehive/Homepage.png" },
        { title: "Buy and Sell window", url: "/screenshots/tradehive/buy&sell.png" },
        { title: "Support page", url: "/screenshots/tradehive/support.png" },
        { title: "User Dashboard", url: "/screenshots/tradehive/dashboard.png" },
      ],
    },
  ];

  const achievements = [
    { icon: <Star className="w-5 h-5" />, text: "Completed Delta 5.0 MERN Stack Batch — Apna College" },
    { icon: <Users className="w-5 h-5" />, text: "Contributed to Hackathons" },
  ];

  const certifications = [
    {
      title: "Delta Full Stack Web Development",
      issuer: "Apna College",
      link: "https://drive.google.com/file/d/1RAJsrGKe4kg-2GH005hKMTao09bRUNFz/view",
    },
    {
      title: "Web Development Internship",
      issuer: "Pinnacle Labs",
      link: "https://drive.google.com/file/d/1IC_5LBX7Vgv-OnhJvf9Jj_i2jEVxRpAQ/view",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            particularly with the MERN stack and modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
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

              <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="text-accent font-medium mb-4">{project.subtitle}</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <ScreenshotCarousel screenshots={project.screenshots} />

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

              {/* Live & Code Buttons */}
             <div className="flex flex-col sm:flex-row gap-4">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button className="btn-primary w-full transition-transform duration-200 hover:scale-105">
      <ExternalLink className="w-4 h-4 mr-2" />
      Live Demo
    </Button>
  </a>

  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button className="btn-accent w-full transition-transform duration-200 hover:scale-105">
      <Github className="w-4 h-4 mr-2" />
      View Code
    </Button>
  </a>
</div>
            </div>
          ))}
        </div>

        {/* Achievements & Certifications Section */}
        <div className="card-hover p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">🏅 Certifications & Achievements</span>
          </h3>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-background/50 rounded-lg">
                <div className="text-accent mr-3">{achievement.icon}</div>
                <span className="text-sm text-foreground">{achievement.text}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-5 rounded-lg bg-background/50 hover:shadow-lg transition">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-blue-600 hover:underline"
                >
                  View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
