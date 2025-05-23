import React from "react";
import { Calendar, MapPin, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Techfusion - Web Application Developer",
      company: "Team Leadership & Development",
      period: "February 2025 - Present",
      location: "Mumbai, India",
      type: "Leadership",
      description:
        "Led a team of 4 to develop web applications, integrating authentication using Gemini API and implementing NLP techniques for enhanced user interactions.",
      achievements: [
        "Managed cross-functional team development",
        "Integrated cutting-edge AI APIs",
        "Improved user experience with NLP",
      ],
    },
    {
      title: "Machine Learning Component Integration",
      company: "Academic Project",
      period: "2024",
      location: "Mumbai, India",
      type: "Development",
      description:
        "Integrated NLP techniques to assess and classify news credibility, enhancing accuracy and user experience significantly.",
      achievements: [
        "Enhanced ML model accuracy by 20%",
        "Implemented real-time credibility assessment",
        "Optimized database operations",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "MCC, University of Mumbai",
      period: "2022 - 2025",
      cgpa: "8.5",
      location: "Mumbai, India",
      highlights: [
        "Focused on Full-Stack Development",
        "Programming fundamentals",
        "Active in coding competitions",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "VPM Junior College",
      period: "2020 - 2022",
      percentage: "75%",
      location: "Mumbai, India",
      highlights: [
        "Strong foundation in Mathematics",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="relative group">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-blue-400" />
              Professional Experience
            </h3>

            {/* Blur & Locked Layer */}
            <div className="space-y-8 filter blur-sm pointer-events-none">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === "Leadership"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-center gap-2 text-slate-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center text-white">
              <Trophy className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-lg font-semibold">Professional Experience</p>
              <p className="text-sm text-slate-400">Currently a Fresher</p>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-1.5 bg-indigo-500/20 rounded-lg">
                <Trophy className="w-5 h-5 text-indigo-400" />
              </div>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((highlight, hlIndex) => (
                      <div
                        key={hlIndex}
                        className="flex items-center gap-2 text-slate-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Connecting line for timeline effect */}
                  {index < education.length - 1 && (
                    <div className="absolute -bottom-4 left-6 w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-blue-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
