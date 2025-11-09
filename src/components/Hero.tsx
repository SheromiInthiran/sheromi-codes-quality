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
      className="min-h-screen flex items-center pt-16 floating-blobs relative"
    >
      {/* Static Blobs Background - No Movement */}
      <div className="floating-blobs absolute inset-0 pointer-events-none" />
      
      {/* Top Waves */}
      <div className="top-waves-container">
        <div className="top-waves"></div>
      </div>

      {/* Bottom Waves */}
      <div className="bottom-waves-container">
        <div className="bottom-waves"></div>
      </div>

      {/* Static Emojis - No Floating */}
      <div className="absolute top-1/4 left-10 text-2xl static-emoji"></div>
      <div className="absolute top-1/3 right-20 text-xl static-emoji opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 text-lg static-emoji opacity-40"></div>
      <div className="absolute top-1/2 right-10 text-xl static-emoji opacity-50"></div>

      <div className="section-container relative z-10">
        {/* Flex layout side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          {/* Profile Image - now circular and on the side */}
          <div className="animate-fade-in lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30"></div>
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
              performance, and reliability in every line Of code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start items-center">
              <Button asChild size="lg" className="hero-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact" className="flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
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