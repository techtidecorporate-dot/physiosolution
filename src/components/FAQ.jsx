import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-surface-container-lowest p-3 lg:p-4 rounded-xl editorial-shadow">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-sm lg:text-base">{question}</h4>
        <span className="material-symbols-outlined text-primary" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
          expand_more
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 text-xs lg:text-sm text-on-surface-variant leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 lg:sticky lg:top-24 self-start pb-8 lg:pb-0">
          <img alt="Professional physiotherapist assisting a patient" className="rounded-xl editorial-shadow mx-auto w-5/6 lg:w-[75%] aspect-[3/4] lg:aspect-auto lg:h-[85vh] object-cover" src="/images/exercise.png" />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-xl lg:text-2xl font-headline font-bold text-primary tracking-tight">FAQ – Häufige Fragen zu Domizilbehandlungen Physiotherapie in Bülach</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Was sind Domizilbehandlungen in der Physiotherapie?" 
              answer="Domizilbehandlungen sind physiotherapeutische Behandlungen bei Ihnen zu Hause, im Pflegeheim oder im Alterszentrum, wenn ein Praxisbesuch nicht möglich oder sinnvoll ist." 
            />
            <FAQItem 
              question="Bieten Sie Physiotherapie mit Hausbesuch in Bülach an?" 
              answer="Ja. Wir bieten Physiotherapie mit Hausbesuch in Bülach und im gesamten Zürcher Unterland an." 
            />
            <FAQItem 
              question="Werden Domizilbehandlungen von der Krankenkasse bezahlt?" 
              answer="Mit ärztlicher Verordnung werden physiotherapeutische Domizilbehandlungen in der Regel über die Grundversicherung abgerechnet (Franchise und Selbstbehalt vorbehalten)." 
            />
            <FAQItem 
              question="Kann ich eine Domizilbehandlung auch ohne ärztliche Verordnung erhalten?" 
              answer="Ja. Domizilbehandlungen sind auch ohne ärztliche Verordnung möglich. In diesem Fall erfolgt die Behandlung auf Selbstzahlerbasis. Die Kosten richten sich nach Behandlungsdauer, therapeutischem Aufwand und Anfahrtsweg. Sie werden vor Beginn transparent informiert." 
            />
            <FAQItem 
              question="Welche physiotherapeutischen Leistungen sind zu Hause möglich?" 
              answer="Zu Hause möglich sind unter anderem manuelle Therapie, manuelle Lymphdrainage, Schwindeltherapie, Atemtherapie, Schmerztherapie, Sturzprophylaxe und Mobilisation." 
            />
            <FAQItem 
              question="Wann ist eine Domizilbehandlung besonders sinnvoll?" 
              answer="Bei eingeschränkter Mobilität, nach Stürzen oder Operationen, bei neurologischen oder onkologischen Erkrankungen sowie bei hohem Pflegebedarf." 
            />
            <FAQItem 
              question="Welche Vorteile hat Physiotherapie zu Hause?" 
              answer={
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Kein Transport in eine Praxis notwendig</li>
                  <li>Therapie im gewohnten Umfeld</li>
                  <li>Alltagstaugliche Übungen (z. B. Aufstehen, Transfers, Treppensteigen)</li>
                  <li>Energie bleibt für die Behandlung erhalten</li>
                  <li>Individuelle und persönliche Betreuung</li>
                </ul>
              } 
            />
            <FAQItem 
              question="In welchen medizinischen Bereichen behandeln Sie im Rahmen von Domizilbehandlungen?" 
              answer="Wir verfügen über Fachwissen in den Bereichen Orthopädie, Traumatologie, Chirurgie (prä- und postoperativ), Rheumatologie, Neurologie, Geriatrie, Palliativtherapie sowie Innere Medizin (z. B. Onkologie, Herz- und Lungenerkrankungen). Die Therapie wird individuell auf Ihre Situation und Ihr Wohnumfeld abgestimmt." 
            />
            <FAQItem 
              question="Wie lange dauert eine Domizilbehandlung?" 
              answer="Die Dauer richtet sich nach dem Krankheitsbild und dem therapeutischen Aufwand. In der Regel dauert eine Behandlung zwischen 25 und 45 Minuten und kann im Verlauf angepasst werden." 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
