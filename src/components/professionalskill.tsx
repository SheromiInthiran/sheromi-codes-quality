import { useState } from "react";

// Import images based on your file structure
import week1 from "@/assets/Introduction to Professional Skills 1.jpeg";
import week2 from "@/assets/Crafting An Effective CV 2.jpeg";
import week3 from "@/assets/Mock Interview Session 3.jpeg";
import week4 from "@/assets/Interview Skills 4.jpeg";
import week5 from "@/assets/Writing Professional Emails 5.jpeg";
import week6 from "@/assets/Professional Phone Conversations 6.jpeg";
import week7 from "@/assets/Professional Dining Etiquette 7.jpeg";
import week8 from "@/assets/Emotional Intelligence 8.jpeg";
import week9 from "@/assets/Portfolio Management 9.jpeg";
import week10 from "@/assets/Writing & Identifying Abstracts 10.jpeg";
import week11 from "@/assets/Meeting Terminology & Conduct 11.jpeg";
import week12 from "@/assets/Community Food Festival Experience 12.jpeg";

export const ProfessionalSkill = () => {
  // Week-based data structure
  const weeklyData = [
    {
      week: 1,
      title: "Introduction to Professional Skills",
      description: "Professional skills are the abilities and behaviors that help you perform well and succeed in a work environment. These include communication, teamwork, problem-solving, and time management skills that are essential for career success.",
      image: week1,
      alt: "Professional Skills Introduction",
    },
    {
      week: 2,
      title: "Professional CV & Resume Writing",
      description: "CV writing is the process of creating a document that highlights your education, skills, and experience to apply for a job. A well-crafted CV effectively showcases your qualifications and makes a strong first impression on potential employers.",
      image: week2,
      alt: "CV Writing Workshop",
    },
    {
      week: 3,
      title: "Mock Interview Session",
      description: "Mock interviews provide practical experience in answering common interview questions and receiving constructive feedback. This helps build confidence and improve communication skills for real job interviews.",
      image: week3,
      alt: "Mock Interview Practice",
    },
    {
      week: 4,
      title: "Job Interview Techniques",
      description: "Learn advanced interview skills and techniques including behavioral questions, STAR method, and effective communication strategies to succeed in various interview scenarios and make a lasting impression.",
      image: week4,
      alt: "Interview Techniques",
    },
    {
      week: 5,
      title: "Professional Email Writing",
      description: "Email writing etiquette means following proper rules while writing emails, such as using polite language, clear subjects, and a professional tone to communicate effectively in business environments.",
      image: week5,
      alt: "Email Writing Basics",
    },
    {
      week: 6,
      title: "Professional Phone Conversations",
      description: "Develop professional phone communication skills for business contexts, including proper greetings, active listening, clear articulation, and handling difficult conversations professionally.",
      image: week6,
      alt: "Phone Etiquette",
    },
    {
      week: 7,
      title: "Professional Dining Etiquette",
      description: "Learn professional dining etiquette and business meal conduct including table manners, conversation topics, ordering etiquette, and networking skills in formal dining settings.",
      image: week7,
      alt: "Dining Etiquette",
    },
    {
      week: 8,
      title: "Emotional Intelligence",
      description: "Emotional intelligence is the ability to understand and manage your own emotions and relate well to others. Develop self-awareness, empathy, and social skills for better workplace relationships.",
      image: week8,
      alt: "EI Fundamentals",
    },
    {
      week: 9,
      title: "Portfolio Management",
      description: "Learn professional portfolio development and management skills to effectively showcase your work, achievements, and capabilities to potential employers or clients.",
      image: week9,
      alt: "Portfolio Basics",
    },
    {
      week: 10,
      title: "Writing & Identifying Abstracts",
      description: "Master the skills of writing and identifying effective abstracts for research papers, proposals, and professional documents. Learn to summarize key information concisely and accurately.",
      image: week10,
      alt: "Abstract Writing",
    },
    {
      week: 11,
      title: "Meeting Terminology & Conduct",
      description: "Understand meeting terminology, protocols, and professional conduct. Learn how to participate effectively, contribute meaningfully, and follow proper meeting etiquette in business settings.",
      image: week11,
      alt: "Meeting Conduct",
    },
    {
      week: 12,
      title: "Community Food Festival Experience",
      description: "Apply professional skills in a real-world community event. Develop teamwork, leadership, event management, and community engagement skills through hands-on experience organizing a food festival.",
      image: week12,
      alt: "Food Festival",
    }
  ];

  const renderWeekSection = (weekData: typeof weeklyData[0]) => (
    <div className="mb-12 p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Week Image - Smaller size */}
        <div className="flex-shrink-0">
          <img
            src={weekData.image}
            alt={weekData.alt}
            className="w-48 h-32 object-cover rounded-lg shadow-sm"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Week {weekData.week}
            </span>
            <h3 className="text-xl font-semibold text-foreground">{weekData.title}</h3>
          </div>
          
          <p className="text-foreground leading-relaxed text-sm">{weekData.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="professional-skills" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Professional Skills Development - 12 Week Program
        </h2>

        <div className="space-y-6">
          {weeklyData.map((week) => (
            <div key={week.week}>
              {renderWeekSection(week)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkill;