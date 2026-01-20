
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-8 md:mb-0">
            <img 
              src="https://i.ibb.co/7qJYP8w/1.png" 
              alt="Thalès Informatique | Sage" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; 2026 Thalès Informatique. Tous droits réservés.
          </p>
          <p className="text-slate-400 text-xs italic">
            Participation sur invitation uniquement. Événement professionnel B2B.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
