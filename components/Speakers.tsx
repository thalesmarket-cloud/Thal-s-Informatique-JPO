
import React from 'react';

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: "Chupa FLOSY",
      initials: "CF",
      role: "Expert Avant-Vente",
      company: "Sage France",
      gradient: "from-[#003366] to-[#005bb5]",
      icon: "fa-certificate"
    },
    {
      name: "Yassine REDA",
      initials: "YR",
      role: "Directeur Commercial",
      company: "Thalès Informatique",
      gradient: "from-[#2563eb] to-[#1e40af]",
      icon: "fa-user-tie"
    }
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm">Expertise</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#003366] mt-2">Nos Intervenants</h2>
          <div className="h-1 w-12 md:h-1.5 md:w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grille de 2 colonnes sur mobile, centré sur desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-stretch gap-4 md:gap-12 max-w-4xl mx-auto">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col w-full md:w-80">
              
              {/* Avatar stylisé à la place de l'image */}
              <div className="relative h-40 md:h-64 flex items-center justify-center bg-slate-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                  </defs>
                </div>

                {/* Cercle avec initiales */}
                <div className={`relative w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${speaker.gradient} flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-2xl md:text-5xl font-black tracking-tighter">{speaker.initials}</span>
                  
                  {/* Petit badge icône flottant */}
                  <div className="absolute -bottom-1 -right-1 md:bottom-1 md:right-1 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 border-2 border-slate-50 transform group-hover:rotate-12 transition-transform">
                    <i className={`fas ${speaker.icon} text-xs md:text-lg`}></i>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-8 text-center flex-grow flex flex-col justify-center border-t border-slate-50">
                <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-0.5 md:mb-1 leading-tight">{speaker.name}</h3>
                <p className="text-blue-600 text-[10px] md:text-base font-semibold mb-2 md:mb-3 leading-tight">{speaker.role}</p>
                <div className="inline-block px-2 py-0.5 md:px-4 md:py-1 bg-slate-50 rounded-full self-center border border-slate-100">
                  <p className="text-slate-400 text-[8px] md:text-xs font-bold uppercase tracking-widest">{speaker.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-400 text-[10px] md:text-sm font-medium">
              <i className="fas fa-info-circle mr-2"></i>
              Échangez en direct avec nos experts lors de la session Q&A.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
