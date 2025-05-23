
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          {/* Profile image with 3D effect */}
          <div className="relative mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-white">
                <img src="/khudka_photo.jpg" alt="" className='w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-white'/>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Main heading with animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Saiganesh Sristla
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in delay-200">
            Full-Stack Web Developer 
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
            Passionate about creating innovative web applications. 
            Experienced in Javascript, Node.js, React.js, and modern development practices.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <a href='/Resume.pdf' download={"Saiganesh's_Resume.pdf"} >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              
              <Download className="w-5 h-5" />
              Download Resume
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
              </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/saiganesh-sristla" target='_blank' className="p-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-lg hover:bg-slate-700/50 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/saiganesh-sristla-0b6560249" target='_blank' className="p-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-lg hover:bg-slate-700/50 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:saiganesh3108@gmail.com" className="p-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-lg hover:bg-slate-700/50 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
