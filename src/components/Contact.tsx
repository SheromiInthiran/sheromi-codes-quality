import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sheromiinthiran@gmail.com",
      href: "mailto:sheromiinthiran@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 74 0179 986",
      href: "tel:+94740179986",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sheromii",
      href: "https://linkedin.com/in/sheromii",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SheromiInthiran",
      href: "https://github.com/SheromiInthiran",
    },
  ];

  return (
    <section id="contact" ref={ref} className={`bg-[hsl(var(--section-alt-bg))] section-slide-right ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-left space-y-4 animate-fade-in mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm always open to discussing new projects, opportunities, or collaborations
            </p>
          </div>

          {/* Contact Content - Side by Side */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Contact Information - Left Side */}
            <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-left">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group border border-transparent hover:border-primary/20 text-left w-full"
                      >
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-medium text-foreground break-words">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Contact Form - Right Side */}
            <div className="w-full lg:w-1/2 animate-fade-in">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-left">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12 text-left"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12 text-left"
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      required
                      className="resize-none text-left"
                    />
                  </div>
                  <Button type="submit" className="w-full hero-gradient" size="lg">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};