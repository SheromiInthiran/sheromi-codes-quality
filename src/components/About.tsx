import { GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="bg-[hsl(var(--section-alt-bg))]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 card-hover animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Computer Science undergraduate at the Sri Lanka Institute of Information 
                Technology (SLIIT), I am passionate about leveraging technology to solve real-world 
                challenges. My interests focus on Software Engineering and Quality Assurance, where 
                I enjoy ensuring that systems are reliable, efficient, and user-friendly.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through hands-on experience and continuous learning, I have developed strong skills 
                in manual and automation testing, test case design, and various programming languages. 
                I thrive in collaborative environments and am always eager to learn new technologies 
                and methodologies to enhance my expertise.
              </p>

              <div className="flex items-start gap-4 p-6 bg-muted rounded-lg mt-8">
                <div className="p-3 bg-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg font-medium">Bachelor's Degree in Computer Science</p>
                  <p className="text-muted-foreground">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Undergraduate</p>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
