import { 
  Server, 
  Globe, 
  GitBranch, 
  Terminal,
  BookOpen // for DSA icon
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: <Server className="w-6 h-6" />,
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "primary",
      featured: true,
      certificate: "https://drive.google.com/file/d/1RAJsrGKe4kg-2GH005hKMTao09bRUNFz/view?usp=drive_link" // 🔗 Replace with your actual link
    },
    {
      title: "Java + DSA & Problem Solving",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
      color: "primary",
      links: [
        { name: "LeetCode", url: "https://leetcode.com/u/rajavardhan96/" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/ravularajatz4m/" }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "accent"
    },
    {
      title: "Development & Version Control Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git & GitHub", "VS Code", "Terminal"],
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-card p-6 rounded-xl flex flex-col justify-between ${
                category.featured ? "lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Title + Icon */}
              <div className={`flex items-center mb-4 ${
                category.color === "primary" ? "text-primary" : "text-accent"
              }`}>
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              
              {/* Skills List */}
              <div className="flex flex-col items-center gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`w-full p-3 rounded-lg bg-background/50 text-center font-medium transition-all duration-300 hover:scale-105 ${
                      category.color === "primary" 
                        ? "hover:bg-primary/10 hover:text-primary" 
                        : "hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Profile Links */}
              {category.links && (
                <div className="mt-4 flex flex-col items-center space-y-2">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      🔗 {link.name} Profile
                    </a>
                  ))}
                </div>
              )}
              
              {/* Featured Badge with Certificate Link */}
              {category.featured && (
  <div className="mt-6 flex flex-col items-center gap-3">
    {/* Badge */}
    <div className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-semibold shadow-md">
      ⭐ Primary Specialization
    </div>

    {/* Certificate Link */}
    {category.certificate && (
      <a
        href={category.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg transition-all hover:bg-primary hover:text-white hover:shadow-lg"
      >
        📜 View Certificate
      </a>
    )}
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
