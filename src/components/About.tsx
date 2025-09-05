import { GraduationCap, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating innovative solutions and bringing ideas to life through code. 
            My journey in technology is driven by curiosity and a commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="card-hover p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</h4>
                <p className="text-sm text-muted-foreground">(Data Science)</p>
                <p className="text-sm text-accent font-medium">Guru Nanak Institutions Technical Campus</p>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="card-hover p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <Heart className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Hobbies</h3>
            <div className="space-y-3 text-foreground">
              <p className="flex items-center justify-center">
                🎧 Listening to audiobooks
              </p>
              <p className="flex items-center justify-center">
                🏏 Watching cricket
              </p>
              <p className="flex items-center justify-center">
                🧩 Solving problems
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="card-hover p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Values</h3>
            <div className="space-y-3 text-foreground">
              <p className="flex items-center justify-center">
                🚀 Self-motivated
              </p>
              <p className="flex items-center justify-center">
                📚 Fast learner
              </p>
              <p className="flex items-center justify-center">
                🔄 Adaptable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;