import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Hi, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold gradient-text">
                Sheromi Inthirabala
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                QA Engineer & Software Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A passionate Computer Science undergraduate specializing in Software Engineering 
              and Quality Assurance. Ensuring quality, performance, and reliability in every line of code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="hero-gradient">
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Sheromi Inthirabala"
                className="relative rounded-2xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
