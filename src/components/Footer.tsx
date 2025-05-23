
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Saiganesh Sristla
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Building the future, one line of code at a time. Let's create something amazing together.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Saiganesh Sristla</span>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Saiganesh Sristla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
