
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in modern web technologies. I love creating innovative solutions that bridge the gap between 
              cutting-edge technology and real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With experience in Javascript, React.js, Node.js, and various frameworks, I enjoy building 
              scalable applications that deliver exceptional user experiences and solve complex challenges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold">Education</h3>
                </div>
                <p className="text-slate-300 text-sm">MCC, University of Mumbai</p>
                <p className="text-slate-400 text-xs">BSc in Information Technology</p>
                <p className="text-slate-400 text-xs">CGPA: 8.5 (2022-2025)</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold">Location</h3>
                </div>
                <p className="text-slate-300 text-sm">Thane, India</p>
                <p className="text-slate-400 text-xs">Available for remote work</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Projects Completed</span>
                  <span className="text-blue-400 font-bold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Technologies Mastered</span>
                  <span className="text-indigo-400 font-bold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Years of Experience</span>
                  <span className="text-blue-400 font-bold">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Current Focus</span>
                  <span className="text-indigo-400 font-bold">AI & Web Dev</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements for 3D effect */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
