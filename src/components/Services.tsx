import { TestTube2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  return (
    <section id="services" className="bg-[hsl(var(--section-bg))]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 lg:p-12 card-hover animate-fade-in">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-6 bg-primary/10 rounded-2xl">
                <TestTube2 className="h-16 w-16 text-primary" />
              </div>
              
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-3xl font-bold">QA Testing Services</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive software testing including manual and automation testing to ensure 
                  quality, reliability, and performance. I specialize in creating detailed test cases, 
                  identifying bugs, and ensuring your applications meet the highest standards.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Manual Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Thorough manual testing to catch edge cases and ensure user experience quality
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Automation Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Efficient automated testing using Selenium and Postman for faster feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
