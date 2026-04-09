import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen font-manrope">
      {/* Header Section */}
      <section className="bg-[#F8FAF9] pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#166E41]/10 text-[#166E41] text-xs font-black tracking-[0.2em] uppercase mb-8">
            Datenschutzhinweise
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#166E41] tracking-tighter leading-none mb-6">
            Datenschutz-erklärung
          </h1>
          <p className="text-xl text-black/60 font-medium">
            Wie wir Ihre Daten bei Physio Solution schützen (Schweiz – revDSG).
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#166E41]/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-20 relative z-10">
          
          {/* Punkt 1 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">01. Datenschutz auf einen Blick</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Diese Datenschutzerklärung informiert darüber, wie PhysioHealth GmbH Personendaten bearbeitet, wenn du unsere Website nutzt, Kontakt aufnimmst, Termine vereinbarst oder – falls aktiviert – im Onlineshop bestellst. Personendaten sind Informationen, die sich auf eine bestimmte oder bestimmbare Person beziehen. Diese Datenschutzerklärung richtet sich in erster Linie nach dem schweizerischen Datenschutzrecht. Das revDSG verpflichtet Verantwortliche, betroffene Personen angemessen über die Beschaffung von Personendaten zu informieren.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 2 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">02. Verantwortliche Stelle</h2>
            <div className="md:col-span-2 text-lg text-black/80 font-medium leading-relaxed">
              <p className="font-black text-xl text-black mb-2 uppercase tracking-tight">PhysioHealth GmbH</p>
              <p>Peter Ulshöfer</p>
              <p>Steinfeldstrasse 15A</p>
              <p>8153 Rümlang, Schweiz</p>
              <p className="mt-4">Telefon: +41 78 336 55 40 / +41 44 861 10 61</p>
              <p>E-Mail: <a href="mailto:info@physiosolutions.ch" className="text-[#166E41] underline underline-offset-4 decoration-[#166E41]/20 hover:decoration-[#166E41] transition-all">info@physiosolutions.ch</a></p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 3 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">03. Welche Daten bearbeiten wir?</h2>
            <div className="md:col-span-2 space-y-12 text-black/70 leading-relaxed font-normal">
              <div>
                <h3 className="text-black font-black text-xl mb-4 tracking-tight">3.1 Technische Daten (Server-Logfiles)</h3>
                <p>
                  IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp, Betriebssystem, Referrer-URL und Statuscodes. Zweck: Betrieb der Website, Stabilität, IT-Sicherheit, Fehleranalyse und Missbrauchsprävention. Speicherdauer: in der Regel 30 Tage.
                </p>
              </div>
              <div>
                <h3 className="text-black font-black text-xl mb-4 tracking-tight">3.2 Kontaktaufnahme</h3>
                <p>
                  Name, Kontaktdaten und Inhalt der Anfrage. Zweck: Bearbeitung deiner Anfrage, Rückfragen, Terminabsprachen und Dokumentation. Speicherdauer: so lange wie für den jeweiligen Zweck erforderlich.
                </p>
              </div>
              <div>
                <h3 className="text-black font-black text-xl mb-4 tracking-tight">3.3 Terminvereinbarung / Behandlung</h3>
                <p>
                  Name, Kontaktdaten, Termin- und Kommunikationsdaten sowie abrechnungsrelevante Angaben. Zweck: Terminorganisation, Leistungserbringung, Abrechnung, Qualitätssicherung und Kommunikation. Gesundheitsdaten werden mit erhöhter Vertraulichkeit bearbeitet.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 4 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">04. Cookies / Consent</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Wir können Cookies und ähnliche Technologien einsetzen, um die Website technisch bereitzustellen, Einstellungen zu speichern, Reichweite und Performance zu messen oder externe Inhalte einzubinden. Eine einmal erteilte Einwilligung kann jederzeit über die Cookie-Einstellungen angepasst werden.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 5 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">05. Google-Dienste</h2>
            <div className="md:col-span-2 space-y-8 text-black/70 leading-relaxed font-normal">
              <div>
                <h4 className="text-black font-black mb-2">Google Analytics & Maps</h4>
                <p>Zur Reichweitenmessung und Kartendarstellung. Dabei kann eine Übermittlung ins Ausland, insbesondere in die USA, nicht ausgeschlossen werden.</p>
              </div>
              <div>
                <h4 className="text-black font-black mb-2">Google Fonts</h4>
                <p>Dein Browser lädt Schriftarten von Servern von Google zur einheitlichen Darstellung.</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 6 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">06. Empfänger von Daten</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Wir können Personendaten an Kategorien wie Hosting- und IT-Dienstleister, Website-Wartung, Zahlungsdienstleister und Behörden weitergeben, soweit dies gesetzlich erforderlich ist.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 7 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">07. Datensicherheit</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Die Website nutzt TLS-/SSL-Verschlüsselung. Trotz aller Sicherheitsmassnahmen kann ein absoluter Schutz bei der Datenübertragung im Internet nicht gewährleistet werden. Eine Haftung ist, soweit gesetzlich zulässig, ausgeschlossen.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-black/5"></div>

          {/* Punkt 8 */}
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#166E41]/40 pt-1">08. Ihre Rechte</h2>
            <div className="md:col-span-2 text-lg text-black/70 leading-relaxed font-normal">
              <p>
                Du kannst Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung geltend machen. Kontakt: <a href="mailto:info@physiosolutions.ch" className="text-[#166E41] underline underline-offset-4 decoration-[#166E41]/20 hover:decoration-[#166E41] transition-all">info@physiosolutions.ch</a>.
              </p>
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

export default PrivacyPolicyPage;
