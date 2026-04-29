import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#f8faf8] text-[#191c1b] font-manrope selection:bg-[#166E41]/20 selection:text-[#166E41]">

      {/* Hero Section: Profil */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#50CB61]/20 text-[#166E41] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8">
            Persönliches Profil
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#166E41] tracking-tighter leading-none mb-8 md:mb-10">
            Peter <br />Ulshöfer
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#3f4941] font-light leading-relaxed max-w-2xl mb-10 md:mb-12">
            Physiotherapeut mit 25 Jahren Berufserfahrung – spezialisiert auf mobile Physiotherapie, Domizilbehandlungen und komplexe Versorgungssituationen in Bülach und im Zürcher Unterland
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-[#f2f4f2] px-6 py-4 rounded-xl">
              <span className="material-symbols-outlined text-[#166E41]">verified_user</span>
              <span className="text-sm font-bold text-[#191c1b]">25 Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-3 bg-[#f2f4f2] px-6 py-4 rounded-xl">
              <span className="material-symbols-outlined text-[#166E41]">home_health</span>
              <span className="text-sm font-bold text-[#191c1b]">Domizilbehandlung</span>
            </div>
          </div>
        </div>

      </section>

      {/* Philosophy Bento Grid */}
      <section className="bg-[#eceeec] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Philosophy Text */}
            <div className="md:col-span-2 bg-[#ffffff] p-8 md:p-12 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#166E41] tracking-tight mb-6 md:mb-8">Mein Ansatz & meine Philosophie</h2>
                <p className="text-xl md:text-2xl font-bold text-[#22BB11] mb-6 italic">"Ruhig. Strukturiert. Alltagsnah."</p>
                <p className="text-base md:text-lg text-[#3f4941] leading-relaxed mb-6">
                  Meine Arbeit als Physiotherapeut ist geprägt von Ruhe, Klarheit und einem präzisen Blick für das, was Menschen im Alltag wirklich weiterhilft. Im Mittelpunkt steht für mich nicht nur die Behandlung einzelner Beschwerden, sondern immer auch die Frage, wie sich Sicherheit, Beweglichkeit und Selbstständigkeit im vertrauten Umfeld nachhaltig verbessern lassen.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-[#bfc9be]/20 pt-8">
                <div className="w-12 h-12 rounded-full bg-[#166E41]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#166E41]">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6f7a70] uppercase tracking-widest">Einsatzgebiet</p>
                  <p className="text-[#191c1b] font-semibold">Bülach & Zürcher Unterland</p>
                </div>
              </div>
            </div>
            {/* Side Stats/Info */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="bg-[#166E41] p-8 md:p-10 rounded-[2rem] text-white flex-1">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4">clinical_notes</span>
                <h3 className="text-lg md:text-xl font-bold mb-4">Berufserfahrung & Werdegang</h3>
                <div className="space-y-4 text-xs md:text-sm">
                  <div className="flex gap-3">
                    <span className="font-bold opacity-60">2002</span>
                    <p>Abschluss Ausbildung Stuttgart</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold opacity-60">2009</span>
                    <p>Leitender Physiotherapeut (bis 2016)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold opacity-60">2016</span>
                    <p>Stationen in Bülach (Neuhof / Glasi)</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#50CB61] p-8 md:p-10 rounded-[2rem] text-[#166E41] flex-1">
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-4">home_health</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">Selbstständigkeit</h3>
                <p className="text-xs md:text-sm font-bold mb-1">Seit 2026</p>
                <p className="text-xs md:text-sm leading-relaxed opacity-90">Spezialisierung auf mobile Physiotherapie und Domizilbehandlungen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-[#166E41] tracking-tight mb-4 md:mb-6">Fachliche Schwerpunkte</h2>
            <p className="text-[#3f4941] text-base md:text-lg">Spezialisierte Physiotherapie mit breiter klinischer Erfahrung – direkt in Ihrem Zuhause.</p>
          </div>
          <div className="h-px bg-[#bfc9be]/30 flex-1 hidden md:block mx-12 mb-6"></div>
          <div className="text-right hidden sm:block">
            <span className="text-6xl md:text-8xl font-thin text-[#e1e3e1]">05</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Expertise 1 */}
          <div className="bg-[#f2f4f2] p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="material-symbols-outlined text-[#166E41] mb-6 text-3xl">neurology</span>
            <h4 className="font-bold text-[#191c1b] leading-tight">Neurologie & Rehabilitation</h4>
          </div>
          {/* Expertise 2 */}
          <div className="bg-[#f2f4f2] p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="material-symbols-outlined text-[#166E41] mb-6 text-3xl">elderly</span>
            <h4 className="font-bold text-[#191c1b] leading-tight">Geriatrie & Sturzprophylaxe</h4>
          </div>
          {/* Expertise 3 */}
          <div className="bg-[#f2f4f2] p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="material-symbols-outlined text-[#166E41] mb-6 text-3xl">air</span>
            <h4 className="font-bold text-[#191c1b] leading-tight">Atemtherapie</h4>
          </div>
          {/* Expertise 4 */}
          <div className="bg-[#f2f4f2] p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="material-symbols-outlined text-[#166E41] mb-6 text-3xl">water_drop</span>
            <h4 className="font-bold text-[#191c1b] leading-tight">Onkologie & Lymphologie</h4>
          </div>
          {/* Expertise 5 */}
          <div className="bg-[#f2f4f2] p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="material-symbols-outlined text-[#166E41] mb-6 text-3xl">healing</span>
            <h4 className="font-bold text-[#191c1b] leading-tight">Chronische Wunden</h4>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="bg-[#f2f4f2] py-16 md:py-24 px-6 md:px-8" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-[#166E41] tracking-tight mb-4 md:mb-6">Berufserfahrung & Werdegang</h2>
              <p className="text-[#3f4941] text-base md:text-lg">Langjährige klinische Erfahrung, Führungskompetenz und therapeutische Kontinuität.</p>
            </div>
            <div className="h-px bg-[#bfc9be]/30 flex-1 hidden md:block mx-12 mb-6"></div>
          </div>
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#166E41]/10 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12 md:space-y-0">
              {/* 2002 */}
              <div className="relative md:flex items-center justify-between md:odd:flex-row-reverse group">
                <div className="md:w-[45%] flex flex-col md:group-odd:items-start md:group-even:items-end">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#bfc9be]/10 hover:shadow-md transition-shadow">
                    <span className="text-[#166E41] font-black text-2xl mb-2 block">2002</span>
                    <h4 className="text-xl font-bold text-[#191c1b] mb-2">Abschluss Physiotherapeut</h4>
                    <p className="text-[#3f4941]">Beginn der beruflichen Laufbahn in der Physiotherapie Radius in Stuttgart-Vaihingen.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#166E41] rounded-full -translate-x-1/2 z-10 top-8 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="md:w-[45%]"></div>
              </div>
              {/* 2009-2016 */}
              <div className="relative md:flex items-center justify-between md:odd:flex-row-reverse group md:mt-12">
                <div className="md:w-[45%] flex flex-col md:group-odd:items-start md:group-even:items-end">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#bfc9be]/10 hover:shadow-md transition-shadow">
                    <span className="text-[#166E41] font-black text-2xl mb-2 block">2009–2016</span>
                    <h4 className="text-xl font-bold text-[#191c1b] mb-2">Führungskompetenz</h4>
                    <p className="text-[#3f4941]">Leitender Physiotherapeut mit Personalverantwortung in der Praxis Radius in Stuttgart-Ost / Gablenberg.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#166E41] rounded-full -translate-x-1/2 z-10 top-8 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="md:w-[45%]"></div>
              </div>
              {/* Switzerland */}
              <div className="relative md:flex items-center justify-between md:odd:flex-row-reverse group md:mt-12">
                <div className="md:w-[45%] flex flex-col md:group-odd:items-start md:group-even:items-end">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#bfc9be]/10 hover:shadow-md transition-shadow">
                    <span className="text-[#166E41] font-black text-2xl mb-2 block">Schweiz</span>
                    <h4 className="text-xl font-bold text-[#191c1b] mb-2">Stationen in Bülach</h4>
                    <p className="text-[#3f4941]">Tätigkeit in der Physiotherapie Neuhof und anschliessend in der Praxis Glasi in Bülach.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#166E41] rounded-full -translate-x-1/2 z-10 top-8 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="md:w-[45%]"></div>
              </div>
              {/* 2026 */}
              <div className="relative md:flex items-center justify-between md:odd:flex-row-reverse group md:mt-12">
                <div className="md:w-[45%] flex flex-col md:group-odd:items-start md:group-even:items-end">
                  <div className="bg-[#22BB11] p-8 rounded-3xl shadow-lg text-white">
                    <span className="font-black text-2xl mb-2 block">Seit 2026</span>
                    <h4 className="text-xl font-bold mb-2">Selbstständiger Spezialist</h4>
                    <p className="opacity-90">Schwerpunkt auf spezialisierter mobiler Physiotherapie und Domizilbehandlungen in Bülach und Umgebung.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#22BB11] rounded-full -translate-x-1/2 z-10 top-8 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
        <div className="bg-[#166E41] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#22BB11] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#22BB11] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter">Bereit, Ihre Therapie zu Hause zu beginnen?</h2>
            <p className="text-emerald-50/80 text-base md:text-lg mb-8 md:mb-12">Professionelle mobile Physiotherapie in Bülach und im Zürcher Unterland – persönlich, verlässlich und fachkompetent.</p>
            <a className="inline-flex items-center gap-4 bg-[#22BB11] px-8 md:px-10 py-4 md:py-5 rounded-2xl text-white font-bold text-base md:text-lg hover:scale-105 transition-transform" href="/book-visit">
              Besuch vereinbaren
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
