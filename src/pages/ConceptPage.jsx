import React from 'react';
import ConceptHeroImage from '../../public/images/Concept Hero.webp'
import ConceptImage from '../../public/images/Concept Image.webp'

const ConceptPage = () => {
  return (
    <div className="bg-background text-on-background font-body antialiased">
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative flex items-center px-8 max-w-7xl mx-auto mb-24 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            <div className="md:col-span-7 z-10">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-primary rounded-full text-[10px] font-extrabold tracking-[0.2em] uppercase mb-8 border border-secondary/20">Das Konzept</span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-10">
                KONZEPT – Physiotherapie dort, wo Ihr Leben stattfindet
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl line-height-relaxed mb-8 opacity-90">
                Spezialisierte mobile Physiotherapie in Bülach und im Zürcher Unterland – individuell, fachkompetent und in Ihrem vertrauten Umfeld.
              </p>
              <p className="text-lg font-semibold text-primary max-w-xl italic border-l-4 border-secondary pl-6 py-2">
                Wir behandeln nicht nur Bewegungen, sondern begleiten Menschen dort, wo Vertrauen wächst und Bewegung wieder Teil des Lebens wird.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Professional physiotherapist assisting a patient"
                  class="w-full h-full object-cover"
                  src={ConceptHeroImage}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[40px] border-secondary/5 rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Core Philosophy Bento Grid */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
            {/* Main Content Card */}
            <div className="md:col-span-2 md:row-span-2 bg-[#166E41] rounded-3xl p-14 flex flex-col justify-between text-white relative overflow-hidden group premium-shadow-hover">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/20">
                  <span className="material-symbols-outlined text-3xl">home_health</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-snug">Ihr Zuhause ist Teil der Therapie</h2>
                <div className="space-y-6  line-height-relaxed text-lg text-white">
                  <p>Ihr Zuhause ist mehr als ein Ort. Es ist der Raum, in dem Sie sich orientieren, bewegen, erinnern und sicher fühlen. Genau deshalb ist die Domizilphysiotherapie für viele Menschen nicht nur eine praktische Lösung, sondern eine besonders wirksam Form der Behandlung.</p>
                  <p>In der vertrauten Umgebung werden Bewegungsabläufe nicht abstrakt trainiert, sondern in ihrem natürlichen Zusammenhang. Wege, Übergänge, Hindernisse, Routinen und alltägliche Anforderungen können direkt in die Therapie einbezogen werden. Das schafft Nähe zur Lebensrealität und ermöglicht Fortschritte, die im Alltag tatsächlich spürbar werden.</p>
                </div>
              </div>
              {/* Ambient Pattern */}
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-light/10 blur-3xl rounded-full"></div>
            </div>
            {/* Integration Card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-12 flex flex-col justify-center card-border premium-shadow-hover">
              <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">Alltagsnah. Individuell. Wirksam.</h3>
              <p className="text-on-surface-variant line-height-relaxed text-lg">
                Unser Ansatz geht über klassische Übungsbehandlung hinaus. Wir integrieren alltagsnahe Situationen bewusst in die Therapie, damit Beweglichkeit, Gleichgewicht, Koordination und Sicherheit nicht nur verbessert, sondern im täglichen Leben auch verlässlich nutzbar werden.
              </p>
            </div>
            {/* Recovery Context Card */}
            <div className="md:col-span-1 bg-white rounded-3xl p-10 card-border premium-shadow-hover border-b-4 border-b-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">shield_with_heart</span>
              <h4 className="font-bold text-xl mb-3 text-primary">Therapie beginnt dort, wo Sicherheit entsteht</h4>
              <p className="text-on-surface-variant line-height-relaxed">Physiotherapie entfaltet ihre stärkste Wirkung oft nicht dort, wo der Alltag ausgespart wird, sondern genau dort, wo er stattfindet.</p>
            </div>
            {/* Challenge Card */}
            <div className="md:col-span-1 bg-[#166E41] rounded-3xl p-10 flex flex-col justify-between premium-shadow-hover text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-80">Der Fokus</p>
              <p className="text-2xl font-bold leading-tight">Vom Spitalaufenthalt zurück in den Alltag.</p>
            </div>
          </div>
        </section>

        {/* Redesigned Section: Mehr als Rehabilitation */}
        <section className="py-32 px-8 bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#166E41]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22BB11]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
            {/* Left: Image with Premium Decoration */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-[#166E41]/5 rounded-[3.5rem] rotate-3 transition-transform group-hover:rotate-1"></div>
              <div className="absolute -inset-6 border border-[#166E41]/10 rounded-[3.5rem] -rotate-2 transition-transform group-hover:rotate-0"></div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  alt="Professionelle physiotherapeutische Begleitung"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={ConceptImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#166E41]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Highlight Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-[#166E41]/5 max-w-[240px] animate-float">
                <span className="material-symbols-outlined text-[#22BB11] text-4xl mb-4">clinical_notes</span>
                <p className="text-sm font-bold text-[#166E41] leading-relaxed">Individuell angepasste Behandlungspläne für Ihren Erfolg.</p>
              </div>
            </div>

            {/* Right: Content & Cards */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-[#166E41]/10 text-[#166E41] rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
                  Ganzheitlicher Ansatz
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-[#166E41] tracking-tighter leading-[1.1]">
                  Mehr als <br />Rehabilitation.
                </h2>
                <div className="space-y-8 text-[#3f4941] text-lg leading-relaxed">
                  <p>
                    Nach einem Unfall, einem Sturz, einer Operation oder bei neurologischen, geriatrischen oder chronischen Erkrankungen ist der Weg zurück oft anspruchsvoll. Häufig fehlt nicht nur Kraft oder Stabilität, sondern auch das Vertrauen in den eigenen Körper und in die eigene Bewegung.
                  </p>
                  <p className="font-bold text-[#166E41] text-xl border-l-4 border-[#22BB11] pl-6 italic">
                    Genau hier setzt unser Konzept an. Wir schaffen einen therapeutischen Rahmen, in dem Fortschritt nicht überfordert, sondern begleitet wird. Mit Ruhe, Struktur und Erfahrung.
                  </p>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: 'directions_walk', title: 'Sicher aufstehen', desc: 'Stabilität bei jedem ersten Schritt.' },
                  { icon: 'shield', title: 'Stabil gehen', desc: 'Vertrauen in die eigene Balance.' },
                  { icon: 'groups', title: 'Teilhabe', desc: 'Wieder aktiv am Alltag teilnehmen.' },
                  { icon: 'sentiment_satisfied', title: 'Wohlbefinden', desc: 'Lebensqualität im eigenen Zuhause.' }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-[#f8faf8] rounded-[2rem] border border-[#166E41]/5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#166E41]/5 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#22BB11] mb-4 shadow-sm group-hover:bg-[#166E41] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <h4 className="font-black text-[#166E41] mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-[#3f4941] font-medium opacity-70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus Section */}
        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="py-6">
              <h3 className="text-3xl font-bold text-primary mb-12 tracking-tight">Unser Fokus</h3>
              <ul className="space-y-10">
                <li className="flex gap-6 group">
                  <span className="text-secondary font-extrabold text-3xl opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                  <div>
                    <h5 className="font-bold text-xl mb-2 text-primary">Sicherheit</h5>
                    <p className="text-on-surface-variant text-lg leading-relaxed">Mehr Stabilität, mehr Orientierung und mehr Vertrauen in alltägliche Bewegungen.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <span className="text-secondary font-extrabold text-3xl opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                  <div>
                    <h5 className="font-bold text-xl mb-2 text-primary">Routine</h5>
                    <p className="text-on-surface-variant text-lg leading-relaxed">Wiederkehrende Abläufe sollen einfacher, klarer und sicherer werden.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <span className="text-secondary font-extrabold text-3xl opacity-30 group-hover:opacity-100 transition-opacity">03</span>
                  <div>
                    <h5 className="font-bold text-xl mb-2 text-primary">Vertrauen</h5>
                    <p className="text-on-surface-variant text-lg leading-relaxed">In den eigenen Körper, in die eigene Bewegung und in den Weg zurück in den Alltag.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-14 rounded-3xl card-border premium-shadow">
              <h3 className="text-2xl font-bold text-primary mb-8 tracking-tight">Für wen dieses Konzept besonders wertvoll ist</h3>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed italic">
                Unsere Domizilphysiotherapie eignet sich besonders für Menschen, die im eigenen Zuhause gezielt und professionell begleitet werden möchten, etwa nach Krankheit, Unfall, Spitalaufenthalt oder bei langfristigen Einschränkungen. Sie ist ideal, wenn Mobilität, Sicherheit, Belastbarkeit und Selbstständigkeit direkt im Alltag gefördert werden sollen.
              </p>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
                Gerade bei neurologischen Erkrankungen, geriatrischen Einschränkungen, Schwindel, chronischen Beschwerden oder nach belastenden medizinischen Behandlungen kann mobile Physiotherapie zu Hause eine besonders sinnvolle und alltagsnahe Form der Unterstützung sein.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-40 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tight mb-10 leading-[1.1]">Bewegung wieder ins Leben bringen</h2>
          <p className="text-xl text-on-surface-variant mb-14 max-w-3xl mx-auto line-height-relaxed opacity-90">
            Viele Menschen wünschen sich nicht einfach nur eine Behandlung. Sie wünschen sich, wieder sicher aufzustehen, wieder selbstverständlicher zu gehen, wieder am Alltag teilzunehmen und sich im eigenen Umfeld nicht fremd oder eingeschränkt zu fühlen.
          </p>
          <p className="text-xl text-on-surface-variant mb-14 max-w-3xl mx-auto line-height-relaxed opacity-90 font-bold">
            Deshalb ist unser Ziel mehr als die Verbesserung einzelner Funktionen. Wir möchten dazu beitragen, dass Bewegung wieder Teil Ihres Lebens wird. Nicht als theoretische Fähigkeit, sondern als gelebte Selbstständigkeit im Alltag. Im eigenen Zuhause. Im sozialen Umfeld. Im wirklichen Leben.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-1 transition-all duration-300" href="/contact">Termin anfragen</a>
            <a className="bg-white text-primary border-2 border-primary/10 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-surface-container-low transition-all duration-300" href="/services">Leistungen entdecken</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConceptPage;
