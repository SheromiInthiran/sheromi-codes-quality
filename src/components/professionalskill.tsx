import { useEffect } from "react";
import week1_1 from "@/assets/week1-1.jpeg";
import week1_2 from "@/assets/week1-2.jpeg";
import week2_1 from "@/assets/week2-1.jpeg";
import week2_2 from "@/assets/week2-2.jpeg";
import week5_1 from "@/assets/week5 (1).jpeg";
import week5_2 from "@/assets/week5 (2).jpeg";
import week5_3 from "@/assets/week5 (3).jpeg";
import week6_1 from "@/assets/week6 (1).jpeg";
import week6_2 from "@/assets/week6 (2).jpeg";
import week6_3 from "@/assets/week6 (3).jpeg";
import week7_1 from "@/assets/week7 (1).jpeg";
import week7_3 from "@/assets/week7 (3).jpeg";
import week8_1 from "@/assets/week8 (1).jpeg";
import week8_2 from "@/assets/week8 (2).jpeg";
import week8_3 from "@/assets/week8 (3).jpeg";
import week9_1 from "@/assets/week9 (1).jpeg";
import week9_3 from "@/assets/week9 (3).jpeg";
import week10_1 from "@/assets/week10 (1).jpeg";
import week10_2 from "@/assets/week10 (2).jpeg";
import week10_3 from "@/assets/week10 (3).jpeg";
import week11_1 from "@/assets/week11 (1).jpeg";
import week11_2 from "@/assets/week11 (2).jpeg";
import week11_3 from "@/assets/week11 (3).jpeg";
import week12_1 from "@/assets/week12 (1).jpeg";
import week12_3 from "@/assets/week12 (3).jpeg";
import week12_4 from "@/assets/week12 (4).jpeg";
import week12_5 from "@/assets/week12 (5).jpeg";
import week12_6 from "@/assets/week12 (6).jpeg";
import week12_7 from "@/assets/week12 (7).jpeg";

export const ProfessionalSkill = () => {
  useEffect(() => {
    // Initialization logic if needed
  }, []);

  const meetingSpeakingSkills = [
    "Meeting and speaking skills help people communicate clearly, share ideas confidently, and interact effectively with others in discussions or presentations.",
  ];

  const renderImageGallery = (images: { src: string; alt: string; caption: string }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <p className="text-white text-center px-4">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="professional-skills" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Professional Skills
        </h2>

        {/* Professional Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Skills</h3>
          {renderImageGallery([
            { src: week5_1, alt: "Professional Skills 1", caption: "Core Professional Skills" },
            { src: week5_2, alt: "Professional Skills 2", caption: "Skills Enhancement" },
            { src: week5_3, alt: "Professional Skills 3", caption: "Advanced Skills Development" },
          ])}
        </div>

        {/* Employability Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Employability Skills</h3>
          {renderImageGallery([
            { src: week6_1, alt: "Employability 1", caption: "Career Development Fundamentals" },
            { src: week6_2, alt: "Employability 2", caption: "Workplace Skills Training" },
            { src: week6_3, alt: "Employability 3", caption: "Professional Growth Workshop" },
          ])}
        </div>

        {/* Values, Beliefs, Attitude & Character */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Values, Beliefs, Attitude & Character
          </h3>
          {renderImageGallery([
            { src: week7_1, alt: "Values 1", caption: "Personal Values Workshop" },
            { src: week7_3, alt: "Values 2", caption: "Professional Ethics" },
            { src: week8_1, alt: "Values 3", caption: "Character Building" },
          ])}
        </div>

        {/* CV Writing */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">CV Writing</h3>
          {renderImageGallery([
            { src: week8_2, alt: "CV Writing 1", caption: "CV Structure and Format" },
            { src: week8_3, alt: "CV Writing 2", caption: "Resume Building Workshop" },
            { src: week9_1, alt: "CV Writing 3", caption: "Professional Portfolio Development" },
          ])}
        </div>

        {/* Interview Manners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Interview Manners (Good and Bad)
          </h3>
          {renderImageGallery([
            { src: week9_3, alt: "Interview 1", caption: "Interview Etiquette Guidelines" },
            { src: week10_1, alt: "Interview 2", caption: "Interview Do's and Don'ts" },
            { src: week10_2, alt: "Interview 3", caption: "Mock Interview Practice" },
          ])}
        </div>

        {/* Meeting and Speaking Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Meeting and Speaking Skills</h3>
          <ul className="grid gap-4 mb-8">
            {meetingSpeakingSkills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          {renderImageGallery([
            { src: week1_1, alt: "Meeting Skills 1", caption: "Professional Meeting Protocol" },
            { src: week1_2, alt: "Meeting Skills 2", caption: "Public Speaking Techniques" },
            { src: week2_1, alt: "Meeting Skills 3", caption: "Presentation Skills" },
          ])}
        </div>

        {/* Email Writing Etiquettes */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Email Writing Etiquettes</h3>
          {renderImageGallery([
            { src: week10_3, alt: "Email 1", caption: "Professional Email Standards" },
            { src: week11_1, alt: "Email 2", caption: "Business Communication" },
            { src: week11_2, alt: "Email 3", caption: "Email Best Practices" },
          ])}
        </div>

        {/* Proposal Writing */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Proposal Writing</h3>
          {renderImageGallery([
            { src: week11_3, alt: "Proposal 1", caption: "Proposal Writing Fundamentals" },
            { src: week12_1, alt: "Proposal 2", caption: "Business Proposal Development" },
            { src: week12_3, alt: "Proposal 3", caption: "Project Proposal Workshop" },
          ])}
        </div>

        {/* Team and Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Team and Leadership</h3>
          {renderImageGallery([
            { src: week12_6, alt: "Leadership 1", caption: "Leadership Fundamentals" },
            { src: week12_7, alt: "Leadership 2", caption: "Team Dynamics" },
            { src: week12_5, alt: "Leadership 3", caption: "Effective Leadership" },
          ])}
        </div>

        {/* Emotional Intelligence */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Emotional Intelligence</h3>
          {renderImageGallery([
            { src: week11_3, alt: "EI 1", caption: "Understanding Emotional Intelligence" },
            { src: week12_1, alt: "EI 2", caption: "Developing EQ" },
            { src: week12_3, alt: "EI 3", caption: "Emotional Intelligence in Practice" },
          ])}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkill;
