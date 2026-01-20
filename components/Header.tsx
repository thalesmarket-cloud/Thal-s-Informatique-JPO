
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#003366]' : 'text-white'}`}>
                THALÈS <span className="font-light">INFORMATIQUE</span>
              </span>
              <div className={`h-1 w-12 bg-blue-500 rounded-full mt-0.5`}></div>
            </div>
            <div className={`h-8 w-px bg-slate-300 mx-4 hidden sm:block`}></div>
            <span className={`font-semibold text-lg hidden sm:block transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
              Sage Maroc
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>L'événement</a>
            <a href="#speakers" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>Intervenants</a>
            <a href="#location" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>Accès</a>
            <a 
              href="#register" 
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all transform active:scale-95 ${
                isScrolled 
                ? 'bg-[#003366] text-white hover:bg-blue-700 shadow-lg' 
                : 'bg-white text-[#003366] hover:bg-blue-50'
              }`}
            >
              Réserver ma place
            </a>
          </nav>

          <div className="md:hidden">
            <button className={`${isScrolled ? 'text-[#003366]' : 'text-white'} p-2`}>
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
