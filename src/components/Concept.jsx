import React from 'react';

const Concept = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary tracking-tight">CONCEPT – Physiotherapie wo Ihr Leben stattfindet</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Der Weg in eine Klinik kann mühsam sein. Mein Konzept basiert auf der Überzeugung, dass Therapie dort am effektivsten ist, wo Sie sich am wohlsten fühlen: in Ihren eigenen vier Wänden. Durch die Domizilbehandlung entfallen nicht nur belastende Anfahrtswege, wir können auch Übungen direkt an Ihre häusliche Situation anpassen.
            </p>
            <p>
              Als erfahrener Physiotherapeut im Zürcher Unterland biete ich Ihnen Schweizer Präzision und persönliche Betreuung. Wir arbeiten gemeinsam an Ihren Zielen – sei es die Rückkehr zur schmerzfreien Bewegung nach einer Operation oder die Erhaltung Ihrer Selbstständigkeit im Alltag.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Keine Anfahrtswege – Stressfreie Behandlung</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Individueller Fokus auf Ihren Wohnraum</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Flexibilität in der Terminplanung</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img alt="Care concept" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6ReuOf7sYeB7xjAyK2yl3-4T3y5tEgBD0z1FLb_Vx5epY9riaWkIyql2CKMWcNJRYdf3MKTgD1bEzwaqkuF7yOozzbpjlg1kBmgfxBoB6FMdPMugb0-M2xNgz1bhlGupwYIUy9mnl9hH9yDetzFGaKZe_WH1UXqKB4mBROiS2u8ucCoucRAv8W4j6Wcomg-tmoI6zFiRkSZ374KCa8ClV7XTzNYtpy71LTFncHRuXD0znihFWcJHCZDdKyFFMBLzXQP6eFf3ctV_" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Concept;
