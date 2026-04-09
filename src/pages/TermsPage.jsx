import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen font-manrope">
      {/* Header Section */}
      <section className="bg-[#F8FAF9] pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#166E41]/10 text-[#166E41] text-xs font-black tracking-[0.2em] uppercase mb-8">
            Rechtliche Rahmenbedingungen
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#166E41] tracking-tighter leading-none mb-6">
            AGB
          </h1>
          <p className="text-xl text-black/60 font-medium">
            Allgemeine Geschäftsbedingungen für Physiotherapie und Onlineshop.
          </p>
        </div>
      </section>

      {/* Navigation for Sections */}
      <div className="sticky top-20 bg-white/80 backdrop-blur-md border-b border-black/5 z-40 py-4 px-8 hidden md:block">
        <div className="max-w-4xl mx-auto flex gap-12 text-sm font-black uppercase tracking-widest text-black/40">
          <a href="#physio" className="hover:text-[#166E41] transition-colors">01. Physiotherapie</a>
          <a href="#shop" className="hover:text-[#166E41] transition-colors">02. Onlineshop</a>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 px-8 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#166E41]/3 blur-[150px] rounded-full translate-x-1/2"></div>
        
        <div id="physio" className="max-w-4xl mx-auto space-y-20 relative z-10">
          <div className="space-y-6">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#166E41] mb-12 flex items-center gap-4">
              <span className="w-8 h-px bg-[#166E41]"></span>
              Abschnitt 01: Physiotherapie
            </h2>
          </div>

          <div className="space-y-16">
            {/* Geltungsbereich */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Anbieter / Geltungsbereich</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  Diese AGB gelten für die Nutzung der Website sowie für physiotherapeutische Leistungen von PhysioHealth GmbH, Rümlang, Schweiz (Behandlungen in der Praxis und Domizilbehandlungen).
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-black/5"></div>

            {/* Preise / Tarife */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Preise / Tarife / Abrechnung</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  Die Abrechnung erfolgt gemäss den jeweils anwendbaren tarifarischen, gesetzlichen, vertraglichen oder individuell vereinbarten Grundlagen. Selbstzahlerleistungen werden gemäss Preisliste verrechnet.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-black/5"></div>

            {/* Terminabsagen */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Terminabsagen / Nichterscheinen</h3>
              <div className="md:col-span-2 space-y-6 text-lg text-black/70 leading-relaxed">
                <p>
                  Vereinbarte Termine sind verbindlich. Eine kostenfreie Absage ist bis spätestens 24 Stunden vor dem Termin möglich. Andernfalls wird ein Ausfallhonorar in Rechnung gestellt:
                </p>
                <div className="bg-[#166E41]/5 p-8 rounded-3xl border border-[#166E41]/10">
                  <p className="font-black text-black text-sm uppercase tracking-widest mb-4">Ausfallhonorar:</p>
                  <ul className="space-y-3 font-medium text-black/80">
                    <li className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                      <span>Domizilbehandlung</span>
                      <span className="font-black text-[#166E41]">CHF 105.00</span>
                    </li>
                    <li className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                      <span>Termin am festen Standort</span>
                      <span className="font-black text-[#166E41]">CHF 55.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-black/5"></div>

            {/* Haftung */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Haftung</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  PhysioHealth GmbH haftet ausschliesslich im Rahmen der zwingenden gesetzlichen Bestimmungen. Für den Eintritt eines bestimmten Behandlungserfolgs wird keine Gewähr übernommen.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-24 pb-12">
            <div id="shop" className="w-full h-px bg-[#166E41]/20"></div>
          </div>

          {/* Onlineshop Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#166E41] mb-12 flex items-center gap-4">
              <span className="w-8 h-px bg-[#166E41]"></span>
              Abschnitt 02: Onlineshop
            </h2>
          </div>

          <div className="space-y-16">
            {/* Angebot */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Vertragsabschluss</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  Darstellungen im Onlineshop sind unverbindlich. Der Vertrag kommt erst durch Bestätigung oder Versand zustande. Alle Preise verstehen sich in CHF inkl. MWST (falls pflichtig).
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-black/5"></div>

            {/* Rückgabe */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Rückgabe / Umtausch</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  Nach schweizerischem Recht besteht kein allgemeines Widerrufsrecht für Onlinekäufe. Rückgaben bei kulanter Zulassung: 14 Tage, originalverpackt, Hygieneartikel ausgeschlossen. Rücksendekosten trägt die Kundschaft.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-black/5"></div>

            {/* Gewährleistung */}
            <div className="grid md:grid-cols-3 gap-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">Gewährleistung</h3>
              <div className="md:col-span-2 text-lg text-black/70 leading-relaxed">
                <p>
                  Die Ware ist unmittelbar nach Erhalt zu prüfen. Mängelrügen haben unverzüglich zu erfolgen. Gewährleistung beschränkt sich nach Wahl auf Nachbesserung, Ersatz oder Rückerstattung.
                </p>
              </div>
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

export default TermsPage;
