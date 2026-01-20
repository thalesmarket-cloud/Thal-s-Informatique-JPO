
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Darkened Overlay for Text Readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Casablanca Marina" 
          className="w-full h-full object-cover"
        />
        {/* L'overlay sage-gradient défini dans l'index.html assure le contraste */}
        <div className="absolute inset-0 sage-gradient mix-blend-multiply"></div>
        {/* Second overlay subtil pour renforcer le bas de l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in shadow-xl">
            <i className="far fa-calendar-alt text-blue-300"></i>
            <span className="text-sm font-bold uppercase tracking-wider">4 Février 2026 | 09:30 – 12:30</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Journée Porte Ouverte <br/>
            <span className="text-blue-400">Thalès Informatique</span>
          </h1>
          
          <div className="mb-10 bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 inline-block">
            <span className="block text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Thématique de l'événement :</span>
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed">
              Le DAF acteur du pilotage de la performance
            </p>
            <p className="text-lg text-blue-100 font-light mt-3 italic border-l-4 border-blue-500 pl-4">
              Du closing au pilotage financier en temps réel avec Sage FRP 1000.
            </p>
          </div>
          
          {/* Nouveau layout : Bouton et Icônes sur la même ligne */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 animate-fade-in">
            <a 
              href="#reservation" 
              className="px-10 py-5 bg-white text-[#003366] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 text-center whitespace-nowrap min-w-[240px]"
            >
              Réserver ma place
            </a>

            <div className="flex flex-wrap items-center gap-8 md:gap-10">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/40 transition-all duration-300">
                  <i className="fas fa-map-marker-alt text-2xl text-blue-300"></i>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-lg leading-tight">Marina Casablanca</p>
                  <p className="text-blue-200 font-medium">Tour Crystal 1, Niveau 9</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/40 transition-all duration-300">
                  <i className="fas fa-users text-2xl text-blue-300"></i>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-lg leading-tight">Capacité Limitée</p>
                  <p className="text-blue-200 font-medium">Exclusivement B2B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;
