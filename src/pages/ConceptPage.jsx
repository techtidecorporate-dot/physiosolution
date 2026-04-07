import React from 'react';

const ConceptPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center px-8 max-w-7xl mx-auto mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6">Die Methodik</span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-tight mb-8">
              KONZEPT – Physiotherapie dort, wo Ihr Leben stattfindet.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Präzision in der Bewegung, integriert in Ihre natürliche Umgebung. Wir überschreiten klinische Grenzen, um Ihnen dort zu begegnen, wo Heilung wirklich geschieht.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                alt="Professioneller Physiotherapeut unterstützt eine Patientin in einem hellen, modernen Wohnzimmer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-kg4Gg9e9M6FQ8YqycYSz0krG8ZkKsYQnpkO9afPTbedIYptHcFKU_9CCcTttYIRba0QiOtL3B70x4I-_tV_k3her6TTJCVxNNAT3I6CP7X338X2ZTHP2djECwbvwn2rIGfdPAMJqWbMAkq83u9mzaA7ig3UWjodClrNP8iBVjTLGDzbDg_67lkprZBLluvLNEZ8zxV0XJcYWGiAqG8AiQGyVf5MrMlrCCavR3jBpKKLAGZGj-PIH5X_VX_VlA2JXBjUuxg3ekPl"
              />
            </div>
            {/* Decorative Abstract Circle */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[40px] border-primary-fixed/20 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - Bento Grid Layout */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Main Content Card */}
          <div className="md:col-span-2 md:row-span-2 bg-tertiary-container rounded-[2.5rem] p-12 flex flex-col justify-between text-on-tertiary-container relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-8">home_health</span>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Ihr Zuhause ist mehr als ein Raum.</h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                Es ist Ihr Leben, Ihre Erinnerungen, Ihr vertrautes und bekanntes Umfeld. Das echte Leben spielt sich dort ab, wo Sie leben – in Ihrer Stadt, auf der Straße, im Einkaufszentrum oder bei einem Spaziergang im Park.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Gesundheit betrifft dabei nicht nur den Körper, sondern auch Geist und Seele. Physiotherapie als Domizilbehandlung bedeutet für uns deshalb mehr als nur Übungen im Wohnzimmer oder Treppenhaus.
              </p>
            </div>
            {/* Ambient Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.6,80.1,29.3,71.7,42C63.3,54.7,51.8,65.5,38.3,72.4C24.8,79.3,9.3,82.4,-6.2,81.4C-21.7,80.4,-37.2,75.3,-50.2,66.1C-63.2,56.9,-73.7,43.6,-79.8,28.7C-85.9,13.8,-87.6,-2.7,-84.1,-18C-80.6,-33.3,-71.9,-47.4,-59.5,-56C-47.1,-64.6,-31,-67.7,-16,-72.6C-1,-77.5,15.7,-84.2,31.3,-83.6C46.9,-83,61.4,-75.1,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)"></path>
              </svg>
            </div>
          </div>
          {/* Integration Card */}
          <div className="md:col-span-2 bg-surface-container rounded-[2.5rem] p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Integration in den Alltag</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Um wieder in ein normales, selbstbestimmtes Leben zurückzufinden, integrieren wir alltagsnahe Situationen bewusst in die Therapie. So entstehen Sicherheit, Routine und Vertrauen – im Alltag und im sozialen Umfeld.
            </p>
          </div>
          {/* Recovery Context Card */}
          <div className="md:col-span-1 bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-outline-variant/10 group hover:shadow-xl transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">stairs</span>
            <h4 className="font-bold text-lg mb-2">Praktischer Weg</h4>
            <p className="text-sm text-on-surface-variant">Wiedergewinnung von Sicherheit in den eigenen vier Wänden und darüber hinaus.</p>
          </div>
          {/* Challenge Card */}
          <div className="md:col-span-1 bg-primary text-white rounded-[2.5rem] p-8 flex flex-col justify-between">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Der Fokus</p>
            <p className="text-xl font-bold leading-tight">Über die klassische Rehabilitation hinaus.</p>
          </div>
        </div>
      </section>

      {/* Full Width Imagery & Text Section */}
      <section className="tonal-volume-low py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                alt="Therapeut hilft einem Patienten beim Gehen in einem Park"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-video"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiOOL_09blqSq877mEBNEGf7SY6z5KUzfbWJ-IgEaS0jhzeOTHbrE73KYaNWHiwMfh2ocGaYsidSSNVS09HcYh18cpKOeXHxH-qaYr4iAVgAR8YRrbTKEMyGJSBfdxUxHbrzaT8RAetyMs52jC1U1vc9Vh3bkv7IpAkb3QD6IuhmvuyAjcxGIE3fXgNR_89WTjG_2oViMk1obTEhs4RyU4MZOOnviCm28W_pU9ZkYEsvi8U2hnQ9s3XsUEk7r4YzkW2_KZLaihUtk"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-[200px]">
                <p className="text-xs font-bold text-secondary uppercase tracking-tighter mb-1">Reality Check</p>
                <p className="text-sm text-on-surface-variant font-medium">Der Weg zurück in die Gesellschaft ist oft herausfordernd.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-8 leading-tight">
              Schritt für Schritt und in Ihrem Tempo.
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>
                Gerade nach Unfällen, Stürzen oder schweren Erkrankungen braucht es mehr als klassische Übungen. Es braucht praktische Erfahrungen im Alltag.
              </p>
              <p className="font-semibold text-primary">
                Wir unterstützen Sie dabei, sich wieder sicher zu fühlen, sich zuzutrauen, am Leben teilzunehmen und sich wieder in Ihr soziales Umfeld einzubringen.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </span>
                <span className="text-sm font-bold">Sicherheit</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </span>
                <span className="text-sm font-bold">Routine</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">check_circle</span>
                </span>
                <span className="text-sm font-bold">Vertrauen</span>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary-fixed/5 pointer-events-none"></div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter mb-8">Bereit für Ihren Weg?</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          Lassen Sie uns gemeinsam den Weg zu mehr Bewegung und Selbstständigkeit in Ihrer gewohnten Umgebung beginnen.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a className="bg-vitality-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all" href="/contact">Termin anfragen</a>
          <a className="bg-surface-container-low text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container transition-all" href="/services">Leistungen entdecken</a>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage;
