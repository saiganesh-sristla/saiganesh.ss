
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating animation elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500/10 rounded-full blur-sm animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Additional technical highlights */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-indigo-400 mb-2">10+</div>
              <div className="text-slate-300">Projects</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-indigo-400 mb-2">5+</div>
              <div className="text-slate-300">Deployed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
