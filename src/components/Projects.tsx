import { ExternalLink, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "RentTent",
    role: "QA Engineer",
    description: "Worked on comprehensive manual and automation testing for the RentTent platform, a rental management system. Utilized Selenium tools for automation testing to ensure reliability and performance.",
    technologies: ["Selenium", "Manual Testing", "Test Case Design", "Bug Tracking"],
    icon: TestTube,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-[hsl(var(--section-alt-bg))]">
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world projects where I've applied my QA expertise
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-8 card-hover animate-fade-in overflow-hidden"
                >
                  <div className="grid lg:grid-cols-[auto,1fr] gap-6">
                    <div className="flex justify-center lg:justify-start">
                      <div className="p-6 bg-primary/10 rounded-2xl">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl lg:text-3xl font-bold">{project.title}</h3>
                          <Badge variant="secondary" className="text-sm">
                            {project.role}
                          </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
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
