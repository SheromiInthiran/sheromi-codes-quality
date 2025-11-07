import { Code, Database, TestTube, Wrench, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";


const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "PHP"],
  },
  {
    icon: Sparkles,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Laravel"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "WorkBench"],
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    skills: ["Test Case Design", "Manual Testing", "Automation (Selenium, Postman)"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jira", "Figma", "Canva", "Android"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Problem-solving",
      "Teamwork",
      "Adaptability",
      "Attention to Detail",
      "Continuous Learning",
    ],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="skills" ref={ref} className={`bg-[hsl(var(--section-alt-bg))] section-slide-right ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set built through education, hands-on experience, and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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
