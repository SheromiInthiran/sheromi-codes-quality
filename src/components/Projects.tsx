import { ExternalLink, TestTube, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "RentTent",
    role: "QA Engineer",
    description:
      "Worked on comprehensive manual and automation testing for the RentTent platform, a rental management system. Utilized Selenium tools for automation testing to ensure reliability and performance.",
    technologies: ["Selenium", "Manual Testing", "Test Case Design", "Bug Tracking"],
    icon: TestTube,
    githubUrl: "https://github.com/Bijon2002/RentTent-admins.git",
  },
  {
    title: "OOP CodeSquad 2024",
    role: "Developer",
    description:
      "A collection of Java projects demonstrating Object-Oriented Programming (OOP) principles. This repository contains exercises and applications built during the CodeSquad 2024 program.",
    technologies: ["Java", "IntelliJ IDEA", "Eclipse"],
    icon: Github,
    githubUrl: "https://github.com/AbiMabi1011/OOP_CodeSquad_2024.git",
  },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`bg-[hsl(var(--section-alt-bg))] section-reveal ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
              Real-world projects where I've applied my QA expertise
            </p>
          </div>

          {/* Projects List */}
          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-8 card-hover animate-fade-in overflow-hidden text-left"
                >
                  <div className="grid lg:grid-cols-[auto,1fr] gap-6">
                    {/* Project Icon */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="p-6 bg-primary/10 rounded-2xl">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      {/* Title & Role */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl lg:text-3xl font-bold">
                            {project.title}
                          </h3>
                          <Badge variant="secondary" className="text-sm">
                            {project.role}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed text-left">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-sm text-left">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Button */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              View Code on GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
