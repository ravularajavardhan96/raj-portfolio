import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-8 h-8 text-orange-500" />,
      url: "https://leetcode.com/u/rajavardhan96/",
      description: "Solved 140+ problems"
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="w-8 h-8 text-green-600" />,
      url: "https://www.geeksforgeeks.org/user/ravularajatz4m/",
      description: "Solved 60+ problems"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-8 h-8 text-black" />,
      url: "https://github.com/ravularajavardhan96",
      description: "All projects and contributions"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-8 h-8 text-blue-600" />,
      url: "https://www.linkedin.com/in/rajavardhan-reddy-ravula-b122372b0",
      description: "Professional profile"
    }
  ];

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Coding Profiles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my coding journey across platforms, including problem-solving and project contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover p-6 rounded-xl bg-background-secondary flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 text-primary-foreground text-4xl">
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
