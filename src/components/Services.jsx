import React from 'react';

const Services = () => {
  return (
    <section className="bg-[#166E41] py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 border-4 border-primary-fixed/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-primary-fixed/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center md:text-left">
          <span className="text-primary-fixed font-label text-sm tracking-[0.2em] uppercase mb-4 block">Meine Dienstleistungen</span>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-white tracking-tight">Leistungen &amp; Spezialgebiete</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">neurology</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Neurological conditions</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Gezielte Rehabilitation bei Erkrankungen des Nervensystems wie Schlaganfall, Parkinson oder MS direkt in Ihrem gewohnten Umfeld.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">balance</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Dizziness and vestibular disorders</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Spezialisierte Therapie bei Schwindelsymptomen und Gleichgewichtsstörungen zur Erhöhung Ihrer Sicherheit im Alltag.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">health_and_safety</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Oncological conditions</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Begleitende physiotherapeutische Unterstützung während und nach Krebstherapien zur Erhaltung der Lebensqualität.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">elderly</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Geriatric conditions</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Individuelle Mobilitätsförderung und Sturzprophylaxe für ein selbstbestimmtes Leben im Alter in den eigenen vier Wänden.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">respiratory_rate</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Respiratory therapy</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Atemphysiotherapie zur Linderung von Atembeschwerden und Verbesserung der Lungenfunktion bei chronischen Erkrankungen.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">healing</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Chronic wounds</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Unterstützende Massnahmen zur Durchblutungsförderung und Beweglichkeit bei der Heilung langwieriger Wunden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
