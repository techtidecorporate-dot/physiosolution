import React from 'react';
import { Link } from 'react-router-dom';
const ConceptImage = '/images/Concept home.webp'

const Concept = () => {
  return (
    <section className="py-32 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-headline font-black text-[#166E41] tracking-tighter leading-tight">KONZEPT – Physiotherapie dort, wo Ihr Leben stattfindet</h2>

          <div className="space-y-6 text-[#3f4941] text-lg leading-relaxed">
            <p className="font-bold text-xl text-[#166E41]">
              Spezialisierte mobile Physiotherapie in Bülach und im Zürcher Unterland – individuell, fachkompetent und in Ihrem vertrauten Umfeld.
            </p>

            <p className="font-bold">
              Wir behandeln nicht nur Bewegungen – wir begleiten Menschen dort, wo Vertrauen entsteht und Bewegung wieder Teil des Lebens wird.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/concept"
              className="inline-flex items-center gap-3 bg-[#166E41] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#166E41]/10"
            >
              Konzept entdecken
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <img alt="Care concept" className="w-full h-full object-cover rounded-3xl" src={ConceptImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Concept;
