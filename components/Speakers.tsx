
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
      imageUrl: "https://i.ibb.co/Wp3SXps8/Sans-titre.jpg"
    }
  ];

  return (
    <section id="speakers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Expertise</span>
          <h2 className="text-4xl font-extrabold text-[#003366] mt-2">Nos Intervenants</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100">
              <div className="relative overflow-hidden h-72">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-linkedin-in text-xl"></i></a>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wide">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
