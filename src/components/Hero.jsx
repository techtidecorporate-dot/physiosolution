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

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition">
                Termin vereinbaren
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">

              {/* Background Shape (contained properly) */}
              <div className="relative">
                <div className="absolute inset-0 bg-secondary-container/20 rounded-3xl rotate-3 -z-10"></div>

                <img
                  alt="Therapy session"
                  className="w-full h-auto object-contain rounded-xl shadow-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupnte-Tn2tLg0WXF5y65ZPdPECyC85f3Cp-yS8Xs13FyRAF-6FAbsV_aj6ejwZI4GKOM6G9f0yPbwk_Lu_mIMTtch7WUnO8A_sTWVqyboIjusllE5fBH-YNXYv35d7cQfJl-o29pJcTkF6boQTc2XG4FErRNIGTLUUDU32k1ykJ2uRmrdjaf2qoM1axPCWiQdH394IzXeD7J4m8FPOkMo8KXl4a5HLWYyYtRFW4-V1HNfCtTwl9x2Jhf_Bb1GQj2oj_c_qrwivuyU"
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