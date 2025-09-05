import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Palette,
  Terminal,
  FileCode
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: <Server className="w-6 h-6" />,
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "primary",
      featured: true
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "accent"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "Python", "RESTful APIs"],
      color: "primary"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Terminal"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in the MERN stack and love working with modern technologies to build scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-card p-6 rounded-xl ${
                category.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex items-center mb-4 ${
                category.color === "primary" ? "text-primary" : "text-accent"
              }`}>
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className={`grid ${
                category.featured ? "grid-cols-2 gap-4" : "grid-cols-1 gap-2"
              }`}>
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`p-3 rounded-lg bg-background/50 text-center font-medium transition-all duration-300 hover:scale-105 ${
                      category.color === "primary" 
                        ? "hover:bg-primary/10 hover:text-primary" 
                        : "hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              
              {category.featured && (
                <div className="mt-4 p-3 bg-gradient-primary rounded-lg text-primary-foreground text-center font-semibold">
                  ⭐ Primary Specialization
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-card rounded-full border border-card-border">
            <Terminal className="w-5 h-5 mr-2 text-accent" />
            <span className="text-muted-foreground">Always learning new technologies and frameworks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;