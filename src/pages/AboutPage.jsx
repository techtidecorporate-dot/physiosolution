import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section: Editorial Profile */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-8">
            Persönliches Profil
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#166E41] tracking-tighter leading-[0.9] mb-10">
            Peter <br />Ulshöfer
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
            Physiotherapeut mit 25 Jahren Berufserfahrung, spezialisiert auf Domizilbehandlungen im Zürcher Unterland und der Region Bülach.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <button className="flex items-center gap-3 bg-[#166E41] text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-white">workspace_premium</span>
              <span className="text-lg font-bold">25 Jahre Erfahrung</span>
            </button>
            <div className="flex items-center gap-3 bg-surface-container-low px-8 py-5 rounded-2xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-[#166E41]">home_health</span>
              <span className="text-lg font-bold text-black">Domizilbehandlung</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              alt="Peter Ulshöfer" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOUsOoxUAiS8fxi4jRoawpNJ72qeSqdaNRPVPA_Pc_dOTgr8DQh5BaYq8hRaa8eJaNBrYEUP6DeIKuyR9S60S5Anbz3_k9D_xLe73g2B1RMyPjvT0CG_hj5ZVbzxv9usFinP7294X8lOScWAt7gUDzHLAaiQtcwUehcUGpREMr5br6GiKLX-ypZWD-AktTd5gFRu_tC4ITwK7AkjoJl34Lk1vvv167Fb0mi1N91Ab7gJyzlmN2FVtf5mPzzd0ooGWsiqVwcW5qe36-" 
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-tertiary-container/10 blur-3xl -z-10"></div>
          <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Biography Bento Grid */}
      <section className="bg-surface-container py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio Text */}
            <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-[#166E41] tracking-tight mb-8">Mein Ansatz &amp; Philosophie</h2>
                <div className="space-y-6 text-xl text-black leading-[1.6]">
                  <p>
                    Meine Arbeit zeichnet sich durch ein ruhiges, strukturiertes und alltagsnahes Vorgehen aus – besonders im Umgang mit komplexen Erkrankungen und sensiblen Lebenssituationen.
                  </p>
                  <p>
                    Seit vielen Jahren begleite ich Menschen im Zürcher Unterland durch physiotherapeutische Hausbesuche und stelle sicher, dass die Versorgung in der vertrauten Umgebung erfolgt.
                  </p>
                  <p className="font-medium italic border-l-4 border-[#166E41] pl-6 py-2">
                    &bdquo;Präzision in der Bewegung ist nicht nur ein Slogan; sie ist das Fundament meiner klinischen Praxis, geschärft in über einem Vierteljahrhundert engagierter Berufstätigkeit.&ldquo;
                  </p>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-outline-variant/20 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest">Haupt-Einsatzgebiet</p>
                  <p className="text-on-surface font-semibold">Bülach &amp; Zürcher Unterland</p>
                </div>
              </div>
            </div>
            {/* Side Stats/Info */}
            <div className="flex flex-col gap-8">
              <div className="bg-primary-container p-10 rounded-[2rem] text-on-primary-container flex-1">
                <span className="material-symbols-outlined text-4xl mb-4">clinical_notes</span>
                <h3 className="text-xl font-bold mb-4">Präzision Zuerst</h3>
                <p className="text-sm opacity-90 leading-relaxed">Strukturierte Methodik, die auf die spezifischen anatomischen und physiologischen Bedürfnisse jedes Patienten zugeschnitten ist.</p>
              </div>
              <div className="bg-secondary-container p-10 rounded-[2rem] text-on-secondary-container flex-1">
                <span className="material-symbols-outlined text-4xl mb-4">psychology</span>
                <h3 className="text-xl font-bold mb-4">Sensible Betreuung</h3>
                <p className="text-sm opacity-90 leading-relaxed">Bewältigung komplexer Lebenssituationen mit Professionalität und Empathie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus (Editorial Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="mb-24 text-center">
          <span className="text-[#166E41] font-label text-sm tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-4">
            <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span></span>
            Fachliche Expertise
            <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span></span>
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#166E41] tracking-tighter">Spezialgebiete</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Focus Items */}
          {[
            { icon: 'neurology', title: 'Neurologie' },
            { icon: 'settings_accessibility', title: 'Schwindeltherapie' },
            { icon: 'air', title: 'Atemtherapie' },
            { icon: 'elderly', title: 'Geriatrie' },
            { icon: 'water_drop', title: 'Lymphologie' },
            { icon: 'medical_services', title: 'Onkologie' },
            { icon: 'healing', title: 'Chronische Wunden' },
            { icon: 'front_loader', title: 'Hoher Pflegebedarf' },
          ].map((item, idx) => (
            <div key={idx} className="group bg-surface-container-low hover:bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <span className="material-symbols-outlined text-primary mb-6 text-3xl">{item.icon}</span>
              <h4 className="font-bold text-on-surface">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="bg-tertiary-container rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          {/* Abstract Pattern Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Bereit, Ihre Genesung zu Hause zu beginnen?</h2>
            <p className="text-on-tertiary-container text-lg mb-12">Erleben Sie professionelle, strukturierte Physiotherapie in Ihrer eigenen Umgebung. Kontaktieren Sie mich noch heute für eine Beratung im Raum Bülach.</p>
            <a className="inline-flex items-center gap-4 bg-primary px-10 py-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-transform" href="/contact">
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
