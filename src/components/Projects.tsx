
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Eventhub",
      description: "Full-stack event management system built with React.js, Node.js, MongoDB, and Express.js. Features event creation, attendee management, and real-time updates.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      status: "Deployed",
      type: "Web Application",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/EventHub-frontend",
      deployed_link:"https://event-hub-frontend-seven.vercel.app/"
    },
    {
      title: "Co-curriculam course management",
      description: " Designed and developed a MERN stack web app with role-based access control for admins and students. Developed a fully responsive UI with dynamic dashboards.",
      tech: ["React.js", "MongoDB", "Node.js", "Express.js"],
      status: "Deployed",
      type: "Web Application",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/frontend-course-management",
      deployed_link:"https://frontend-course-management.vercel.app/"
    },
    {
      title: "NewsFact",
      description: "Developed NewsFact, an AI-driven fake news detection platform using React.js, Tailwind CSS, Node.js, and MongoDB. Implemented state management using Zustand",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      status: "Completed",
      type: "AI & ML",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/NewsFact",
      deployed_link:"https://news-fact.vercel.app/"
    },
    {
      title: "MediScript",
      description: "Connect with doctors, get consultations, and receive digital prescriptions — all in one platform. Find and consult with qualified doctors specializing in various medical fields.",
      tech: ["Typescript", "MongoDB", "React.js", "Node.js"],
      status: "Deployed",
      type: "Web Application",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/prescription-frontend",
      deployed_link:"https://prescription-frontend.vercel.app/"
    },
    {
      title: "Campus Search System",
      description: "Full-stack college website with custom crawler for automated content extraction from 500+ web pages using Elasticsearch and React.js.",
      tech: ["React.js", "Elasticsearch", "Node.js", "Tailwind"],
      status: "Completed",
      type: "Search Engine",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/college-search-engine",
      deployed_link:"https://college-search-engine.vercel.app/"
    },
    {
      title: "CertiChain",
      description: "Blockchain-based certificate verification system using Solidity, Web3, and decentralized storage for secure document management.",
      tech: ["Solidity", "Web3.js", "React.js", "IPFS"],
      status: "Completed",
      type: "Blockchain",
      year: "2025",
      github_link:"https://github.com/saiganesh-sristla/CertiChain",
      deployed_link:"https://certi-chain-two.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            A showcase of my latest work in web development, machine learning, and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                  {project.type}
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Deployed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
                
                <div className="flex gap-3">
                  <a href={project.github_link} target='_blank'>
                  <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Github className="w-4 h-4" />
                  </button>
                  </a>
                  <a href={project.deployed_link} target='_blank'>
                  <button className="p-2 bg-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
