import React from 'react';

const Services = () => {
  return (
    <section className="bg-[#166E41] py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 border-4 border-primary-fixed/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-primary-fixed/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center">
          <span className="text-white font-label text-sm tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-4">
            <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span></span>
            Meine Fachbereiche
            <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span><span className="w-1.5 h-1.5 rounded-full bg-white/40"></span></span>
          </span>
          <h2 className="text-5xl lg:text-7xl font-headline font-black text-white tracking-tighter">Spezialisierte <br className="hidden md:block"/>Behandlungsfelder</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">neurology</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Neurologische Erkrankungen</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Behandlung unter anderem bei Schlaganfall, Parkinson, Multipler Sklerose, neurologischen Ausfällen nach Unfällen oder Operationen sowie Geburtsgebrechen. Ziel ist die Verbesserung von Gangbild, Gleichgewicht, Koordination, Kraft und Selbstständigkeit im Alltag.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">balance</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Schwindel &amp; Gleichgewicht</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Behandlung bei Lagerungsschwindel, vestibulären Funktionsstörungen, Gangunsicherheit, Schwindel nach Stürzen oder Infekten sowie Unsicherheit beim Drehen oder Gehen. Die Schwindeltherapie erfolgt alltagsnah – dort, wo Schwindel tatsächlich auftritt.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">clinical_notes</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Onkologie &amp; Lymphologie</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Behandlung bei Fatigue, Kraft- und Konditionsverlust, Lymphödemen, Bewegungseinschränkungen und Schmerzen nach Tumortherapien. Einsatz von manueller Lymphdrainage, Mobilisation und dosiertem Belastungsaufbau.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">elderly</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Geriatrie &amp; Pflege</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Behandlung bei Mobilitätsverlust im Alter, Sturzgefährdung, Bettlägerigkeit, Zuständen nach Krankenhausaufenthalten sowie Multimorbidität. Ergänzend Sturzprophylaxe, Kontrakturprophylaxe sowie unterstützende Maßnahmen zur Dekubitus- und Pneumonieprophylaxe.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">respiratory_rate</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Atemtherapie</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Behandlung bei COPD, Asthma bronchiale, Lungenfibrose, Post-/Long-COVID sowie eingeschränkter Atemmechanik bei Immobilität. Ziel ist eine verbesserte Atemökonomie, mehr Belastbarkeit und Sicherheit im Alltag.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#22BB11] p-10 rounded-xl hover:scale-[1.02] transition-all duration-300 group">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">healing</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Chronische Wunden</h3>
            <p className="text-on-tertiary-container mb-8 leading-relaxed">
              Unterstützung bei venösen und arteriellen Wunden, diabetischen Wunden, Wundheilungsstörungen, Bewegungseinschränkungen sowie Schonhaltungen und Folgeschmerzen. Fokus auf Mobilität, Durchblutung und Alltagssicherheit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
