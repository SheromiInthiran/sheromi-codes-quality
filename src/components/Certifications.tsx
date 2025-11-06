import { Award, Trophy, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  {
    title: "DevQuest Contest Participant",
    organization: "SLIIT",
    description: "Recognized participation demonstrating innovation, collaboration, and competitive coding skills.",
    icon: Trophy,
    color: "text-amber-600",
    bgColor: "bg-amber-600/10",
  },
  {
    title: "Startup Essentials Program",
    organization: "Uki Technology School",
    description: "Focused on entrepreneurship, startup growth strategies, and innovation in the tech industry.",
    icon: Award,
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
  },
  {
    title: "Microsoft Security Essentials",
    organization: "Microsoft",
    description: "Comprehensive training on cybersecurity concepts, modern security solutions, and AI-based protection.",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
];

export const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="certifications" ref={ref} className={`bg-[hsl(var(--section-bg))] section-slide-left ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional growth through workshops, training programs, and competitive events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-hover animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className={`p-4 ${cert.bgColor} rounded-xl w-fit`}>
                      <Icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold leading-tight">{cert.title}</h3>
                      <p className="text-primary font-medium">{cert.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
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
