
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#003366] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">Nous vous accueillons à la Marina</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-4 rounded-2xl">
                  <i className="fas fa-map-marked-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Lieu d'exception</h4>
                  <p className="text-blue-200 mt-2 leading-relaxed">
                    Tour Crystal 1, Niveau 9<br />
                    Boulevard Sidi Mohammed Ben Abdellah<br />
                    Marina Casablanca, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-4 rounded-2xl">
                  <i className="fas fa-parking text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Accès & Parking</h4>
                  <p className="text-blue-200 mt-2">
                    Parking souterrain disponible sur place. Accès facile via la rocade côtière.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-white font-bold hover:text-blue-300 transition-colors"
              >
                <span>Ouvrir dans Google Maps</span>
                <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-96 lg:h-auto relative min-h-[400px]">
             {/* Mock Map with dynamic overlay */}
            <div className="absolute inset-0 bg-slate-300 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map view" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-600 rounded-full animate-ping opacity-25"></div>
                        <div className="relative bg-blue-600 text-white p-5 rounded-full shadow-2xl">
                            <i className="fas fa-map-marker-alt text-3xl"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
