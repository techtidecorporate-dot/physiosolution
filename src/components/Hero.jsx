import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[600px] flex items-center bg-surface-bright overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 w-full pt-8 pb-20">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Physiotherapeutische Domizilbehandlungen in Bülach und im Zürcher Unterland
            </h1>

            <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed">
              Physiotherapie bei Ihnen zu Hause – praktisch, unkompliziert und freundlich.
            </p>

            <p className="text-base text-on-surface-variant leading-relaxed">
              Unser Versorgungskonzept ist Ihr Zuhause. Wir bieten physiotherapeutische Domizilbehandlungen in Bülach und im Zürcher Unterland an. Die Behandlung erfolgt bei Ihnen zu Hause, im Alterszentrum oder im Pflegeheim.
            </p>

            <p className="text-base text-on-surface-variant leading-relaxed font-bold">
              Sicher und sorgenfrei zur Physiotherapie – ohne öffentliche Verkehrsmittel, ohne Taxi und ohne eigenes Auto.
            </p>

            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              Physiotherapie bedeutet für uns, Menschen dort zu begleiten, wo ihr Leben stattfindet. Nicht isoliert im Therapieraum, sondern im vertrauten Umfeld, im Alltag und im sozialen Leben. Ziel ist es, Sicherheit, Selbstvertrauen und Lebensqualität wiederzuerlangen.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#166E41] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-all duration-300">
                Termin vereinbaren
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">

              {/* Background Shape (contained properly) */}
              <div className="relative">
                  <img
                    alt="Professionelle Physiotherapie Domizilbehandlung"
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                    src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2070"
                  />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;