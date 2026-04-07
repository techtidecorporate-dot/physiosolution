import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#166E41] pt-24 pb-12 text-white font-manrope overflow-hidden">

      {/* Premium Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Superior Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand Presentation */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-3 decoration-none hover:opacity-80 transition-opacity">
                <img src={Logo} alt="Physio Solution Logo" className="h-16 w-auto object-contain" />
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-tighter text-white uppercase">Physio</span>
                  <span className="text-[15px] font-bold tracking-[0.2em] text-[#50CB61] uppercase">Solution</span>
                </div>
              </Link>
              <p className="text-white/70 text-lg leading-relaxed max-w-sm font-medium">
                Spezialisierte mobile Physiotherapie in Bülach und im gesamten Zürcher Unterland – professionell, individuell und in Ihrem gewohnten Umfeld.
              </p>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-10">Schnellzugriff</h5>
            <ul className="flex flex-col gap-5 text-base font-bold">
              <li><Link to="/" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">Startseite</Link></li>
              <li><Link to="/concept" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">Konzept</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">Leistungen</Link></li>
              <li><Link to="/for-relatives" className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">Für Angehörige</Link></li>
            </ul>
          </div>

          {/* Specialties List */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-10">Leistungen</h5>
            <ul className="flex flex-col gap-5 text-sm font-semibold">
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Neurologische Erkrankungen</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Schwindel &amp; Gleichgewicht</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Onkologie &amp; Lymphologie</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Geriatrie &amp; Pflege</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Atemtherapie</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors block leading-tight">Chronische Wunden</Link></li>
            </ul>
          </div>

          {/* Elite Contact Block */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-10">Kontakt</h5>
            <div className="space-y-3">
              <Link to="/about" className="text-base font-black hover:text-white/80 transition-colors block mb-6">Über mich</Link>

              <div className="flex flex-col gap-3">
                <a href="tel:0783365540" className="flex items-center gap-3 group p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-xl">smartphone</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Mobil</span>
                    <span className="text-base font-black tracking-tight">078 336 55 40</span>
                  </div>
                </a>

                <a href="tel:0448611061" className="flex items-center gap-3 group p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-xl">phone</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Festnetz</span>
                    <span className="text-base font-black tracking-tight">044 861 10 61</span>
                  </div>
                </a>

                <a href="mailto:info@physiosolutions.ch" className="flex items-center gap-3 group p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white text-xl">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">E-Mail</span>
                    <span className="text-xs font-bold underline underline-offset-4 decoration-white/20 group-hover:decoration-white transition-all overflow-hidden text-ellipsis whitespace-nowrap">info@physiosolutions.ch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sophisticated Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              © 2026 Physio Solution. Alle Rechte vorbehalten
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
            <Link to="/about" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>

      </div>

      {/* Luxury Background Watermark */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] rotate-12 pointer-events-none select-none">
        <img src={Logo} alt="" className="w-[800px] h-auto" />
      </div>
    </footer>
  );
};

export default Footer;
