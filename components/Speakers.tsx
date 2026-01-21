
import React from 'react';

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: "Chupa FLOSY",
      role: "Expert Avant-Vente",
      company: "Sage France",
      imageUrl: "https://i.ibb.co/MkgmG56k/1560775947214.jpg"
    },
    {
      name: "Yassine REDA",
      role: "Directeur Commercial",
      company: "Thalès Informatique",
      imageUrl: "https://i.ibb.co/4gPn0Jjv/Whats-App-Image-2026-01-18-at-21-05-55.jpg"
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
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-stretch gap-3 md:gap-12 max-w-5xl mx-auto">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
              <div className="relative overflow-hidden h-44 md:h-80">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 md:p-10 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-0.5 md:mb-1 leading-tight">{speaker.name}</h3>
                <p className="text-blue-600 text-[10px] md:text-lg font-semibold mb-2 md:mb-2 leading-tight">{speaker.role}</p>
                <div className="inline-block px-2 py-0.5 md:px-4 md:py-1 bg-slate-50 rounded-full self-center border border-slate-100">
                  <p className="text-slate-400 text-[8px] md:text-xs font-bold uppercase tracking-widest">{speaker.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
