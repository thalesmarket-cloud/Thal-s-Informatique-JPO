
import React from 'react';

const Details: React.FC = () => {
  const targets = [
    { 
      title: "DAF / CFO", 
      label: "Finance", 
      desc: "Optimisez votre pilotage et fiabilisez vos reportings stratégiques.",
      icon: "fa-chart-line" 
    },
    { 
      title: "Directeurs Généraux", 
      label: "Décideurs", 
      desc: "Accédez à une vision consolidée pour des prises de décisions éclairées.",
      icon: "fa-user-tie" 
    },
    { 
      title: "Resp. Comptables", 
      label: "Comptabilité", 
      desc: "Automatisez vos flux financiers et sécurisez votre conformité.",
      icon: "fa-calculator" 
    },
    { 
      title: "IT Managers", 
      label: "Systèmes", 
      desc: "Découvrez une solution agile, scalable et parfaitement intégrée.",
      icon: "fa-server" 
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtile background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section ciblé */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 block">Public Cible</span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#003366]">Pour qui cet événement ?</h2>
          <div className="h-1 w-16 md:h-1.5 md:w-24 bg-blue-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
          <p className="text-slate-500 mt-6 md:mt-8 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
            Cette matinée est spécifiquement conçue pour les acteurs de la transformation financière cherchant à optimiser leur performance avec Sage FRP 1000.
          </p>
        </div>

        {/* Grille des profils cibles - 2 colonnes sur mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {targets.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 hover:bg-white p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-[40px] border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white shadow-sm rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600 border border-slate-100">
                <i className={`fas ${item.icon} text-xl md:text-3xl`}></i>
              </div>
              <h4 className="text-sm md:text-xl font-bold text-[#003366] mb-1 md:mb-2 leading-tight">{item.title}</h4>
              <p className="text-blue-600 text-[9px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4">{item.label}</p>
              <p className="text-slate-500 text-[10px] md:text-sm leading-tight md:leading-relaxed line-clamp-3 md:line-clamp-none">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note de bas de section */}
        <div className="mt-12 md:mt-20 flex justify-center px-2">
          <div className="inline-flex items-center space-x-3 bg-blue-50 px-4 py-3 md:px-8 md:py-4 rounded-xl md:rounded-full border border-blue-100 shadow-sm">
            <i className="fas fa-info-circle text-blue-600 text-base md:text-lg shrink-0"></i>
            <span className="text-blue-900 text-[10px] md:text-sm font-medium">
              Invitation uniquement. <strong>Places strictement limitées.</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
