import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Experience = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="experience" ref={ref} className={`bg-[hsl(var(--section-bg))] section-slide-left ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative animate-fade-in">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

            <Card className="p-8 card-hover ml-0 sm:ml-20 relative">
              {/* Timeline dot */}
              <div className="absolute -left-12 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background hidden sm:block"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold">QA Engineer Intern</h3>
                    <p className="text-primary font-medium text-lg">Codevita</p>
                    <p className="text-muted-foreground text-sm">Current Position</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Conducting comprehensive manual and automation testing to ensure product quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Designing detailed test cases and test scenarios for various features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Identifying, documenting, and tracking bugs through their lifecycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Collaborating with development teams to ensure timely resolution of issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Utilizing testing tools like Selenium and Postman for automation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
