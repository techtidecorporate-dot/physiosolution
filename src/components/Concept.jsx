import React from 'react';

const Concept = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary tracking-tight">KONZEPT – Physiotherapie dort, wo Ihr Leben stattfindet</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p className="font-bold">
              Ihr Zuhause ist mehr als ein Raum.<br/>
              Es ist Ihr Leben, Ihre Erinnerungen, Ihr vertrautes und bekanntes Umfeld.
            </p>
            <p>
              Das echte Leben spielt sich dort ab, wo Sie leben – in Ihrer Stadt, auf der Straße, im Einkaufszentrum, auf dem Weg zur Apotheke oder bei einem Spaziergang im Park. Gesundheit betrifft dabei nicht nur den Körper, sondern auch Geist und Seele.
            </p>
            <p>
              Physiotherapie als Domizilbehandlung bedeutet für uns deshalb nicht nur Übungen im Wohnzimmer oder im Treppenhaus. Um wieder in ein normales, selbstbestimmtes Leben zurückzufinden, integrieren wir alltagsnahe Situationen bewusst in die Therapie. So entstehen Sicherheit, Routine und Vertrauen – im Alltag und im sozialen Umfeld.
            </p>
            <p>
              Gerade nach Unfällen, Stürzen oder schweren Erkrankungen ist der Weg zurück in die Gesellschaft oft herausfordernd. Es braucht mehr als klassische Übungen und Rehabilitation. Es braucht praktische Erfahrungen im Alltag.
            </p>
            <p>
              So unterstützen wir Sie dabei, sich wieder sicher zu fühlen, sich zuzutrauen, am Leben teilzunehmen und sich wieder in Ihr soziales Umfeld einzubringen – Schritt für Schritt und in Ihrem Tempo.
            </p>
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
