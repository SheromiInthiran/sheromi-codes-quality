import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Update with your actual CV path
    link.download = 'Sheromi_Inthirabala_CV.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 animated-bg relative"
    >
      {/* Background image layers (place images in `public/` and reference with '/filename') */}
      <div
        className="absolute -left-24 top-8 w-72 h-72 bg-center bg-cover opacity-60 blur-2xl motion-reduce:opacity-100 motion-reduce:blur-none pointer-events-none"
        style={{ backgroundImage: "url('/bg-left.png')" }}
        aria-hidden
      />

      <div
        className="absolute -right-28 bottom-8 w-96 h-96 bg-center bg-cover opacity-50 blur-3xl motion-reduce:opacity-100 motion-reduce:blur-none pointer-events-none"
        style={{ backgroundImage: "url('/bg-right.png')" }}
        aria-hidden
      />

      <div className="section-container relative z-10">
        {/* Flex layout side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          {/* Profile Image - now circular and on the side */}
          <div className="animate-fade-in lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Sheromi Inthirabala"
                className="relative rounded-full shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-background"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 animate-fade-in max-w-3xl lg:w-1/2">
            <div className="space-y-3">
              <p className="text-primary font-medium text-lg">Hi, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
                Sheromi Inthirabala
              </h1>
              <p className="text-xl lg:text-3xl text-muted-foreground font-light">
                QA Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A passionate Computer Science undergraduate specializing in
              Software Engineering and Quality Assurance. Ensuring quality,
              performance, and reliability in every line of code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start items-center">
              <Button asChild size="lg" className="hero-gradient">
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download CV <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
