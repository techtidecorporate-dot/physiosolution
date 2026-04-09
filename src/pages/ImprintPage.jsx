import React from 'react';

const ImprintPage = () => {
  return (
    <div className="bg-white min-h-screen font-manrope">
      {/* Header Section */}
      <section className="bg-[#F8FAF9] pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#166E41]/10 text-[#166E41] text-xs font-black tracking-[0.2em] uppercase mb-8">
            Rechtliche Hinweise
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#166E41] tracking-tighter leading-none mb-6">
            Impressum
          </h1>
          <p className="text-xl text-black/60 font-medium">
            Anbieter und Websitebetreiber von Physio Solution.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#166E41]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          
          {/* Anbieter / Websitebetreiber */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Anbieter / Websitebetreiber</h2>
            <div className="md:col-span-2 text-lg text-black/80 font-medium leading-relaxed">
              <p className="font-black text-xl text-black mb-2 uppercase tracking-tight">PhysioHealth GmbH</p>
              <p>Peter Ulshöfer</p>
              <p>Steinfeldstrasse 15A</p>
              <p>8153 Rümlang, Schweiz</p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Kontakt */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Kontakt</h2>
            <div className="md:col-span-2 space-y-4 text-lg text-black/80 font-medium leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#166E41] font-variation-light">phone</span>
                Telefon: 078 336 55 40 / 044 861 10 61
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#166E41] font-variation-light">mail</span>
                E-Mail: <a href="mailto:info@physiosolutions.ch" className="text-[#166E41] underline underline-offset-4 decoration-[#166E41]/20 hover:decoration-[#166E41] transition-all">info@physiosolutions.ch</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#166E41] font-variation-light">language</span>
                Webauftritt: <a href="https://www.physiosolutions.ch" className="text-[#166E41] underline underline-offset-4 decoration-[#166E41]/20 hover:decoration-[#166E41] transition-all">https://www.physiosolutions.ch</a>
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Handelsregister / UID */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Handelsregister / UID</h2>
            <div className="md:col-span-2 text-lg text-black/80 font-medium leading-relaxed italic opacity-60">
              <p>Handelsregister-Nummer: [bitte gemäss Handelsregisterauszug ergänzen]</p>
              <p>UID: [bitte amtlich ergänzen]</p>
              <p>MWST: [nur angeben, falls MWST-registriert]</p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Verantwortlich für den Inhalt */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Redaktionell Verantwortlich</h2>
            <div className="md:col-span-2 text-lg text-black/80 font-medium leading-relaxed">
              <p>Verantwortlich für den Inhalt:</p>
              <p className="font-bold text-black mt-2">Peter Ulshöfer</p>
              <p>Steinfeldstrasse 15A, 8153 Rümlang, Schweiz</p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Haftungsausschluss */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Haftungsausschluss</h2>
            <div className="md:col-span-2 space-y-12 text-black/70 leading-relaxed font-normal">
              <div>
                <h3 className="text-black font-black text-xl mb-4 tracking-tight">Eigene Inhalte</h3>
                <p>
                  Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Dennoch übernimmt PhysioHealth GmbH keine Gewähr für Richtigkeit, Vollständigkeit, Aktualität und ständige Verfügbarkeit der bereitgestellten Inhalte. Soweit gesetzlich zulässig, ist jede Haftung für direkte oder indirekte Schäden, Folgeschäden, entgangenen Gewinn, Datenverluste, Systemausfälle oder Ansprüche Dritter ausgeschlossen, die aus dem Zugriff auf diese Website, deren Nutzung oder Nichtnutzung sowie aus technischen Störungen, Unterbrüchen, Übertragungsfehlern, Schadsoftware oder Eingriffen Dritter entstehen. Vorbehalten bleibt die zwingende gesetzliche Haftung, insbesondere für Vorsatz und grobe Fahrlässigkeit.
                </p>
              </div>
              <div>
                <h3 className="text-black font-black text-xl mb-4 tracking-tight">Externe Links</h3>
                <p>
                  Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte hat PhysioHealth GmbH keinen Einfluss. Für die Inhalte externer Seiten sind ausschliesslich deren Betreiber verantwortlich. Jegliche Haftung für externe Websites und deren Inhalte wird, soweit gesetzlich zulässig, ausgeschlossen.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Urheberrecht */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Urheberrecht</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Die Inhalte dieser Website (Texte, Bilder, Fotos, Videos, Dateien, grafische Darstellungen) sind urheberrechtlich geschützt. Durch das Herunterladen, Speichern oder Kopieren werden keine Rechte übertragen. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung ausserhalb der gesetzlichen Schranken bedarf der vorgängigen schriftlichen Zustimmung von PhysioHealth GmbH. In der Schweiz entsteht der urheberrechtliche Schutz grundsätzlich automatisch mit der Schöpfung; auch Fotografien ohne individuellen Charakter sind geschützt.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Bildrechte */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Bildrechte / Visualisierungen</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Die auf dieser Website verwendeten Inhalte stammen aus rechtmässig nutzbaren Quellen. Sofern Inhalte durch externe Dienstleister erstellt wurden, erfolgte dies auf deren fachliche Verantwortung. PhysioHealth GmbH behält sich bei Beanstandungen durch Dritte die unverzügliche Entfernung der betroffenen Inhalte sowie sämtliche Rückgriffsrechte gegenüber dem verantwortlichen Dienstleister vor.
              </p>
              <p className="mt-4 text-black font-bold">Hinweis an beauftragte Design- und Medienpartner:</p>
              <p className="italic">[DESIGNFIRMA: Name, Anschrift]</p>
            </div>
          </div>

          <div className="pt-20 text-xs font-black uppercase tracking-widest text-black/30 border-t border-black/5">
            Stand: 07.04.2026
          </div>

        </div>
      </section>
    </div>
  );
};

export default ImprintPage;
