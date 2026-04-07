import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#166E41] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12 font-manrope text-sm leading-relaxed text-white">
        <div className="flex flex-col items-start md:items-start text-left">
          <span className="flex items-center gap-3 text-2xl font-black text-white mb-4">
            <img src={Logo} alt="PhysioHealth Logo" className="h-12 w-auto object-contain" />
          </span>
          <p className="text-white mb-6">
            Ihre Experten für mobile Physiotherapie im Zürcher Unterland. Wir verbinden medizinische Fachkompetenz mit individuellem Komfort.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Navigation</h5>
          <ul className="space-y-3">
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/">Startseite</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/concept">Konzept</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/services">Leistungen</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/about">Über mich</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Fachbereiche</h5>
          <ul className="space-y-3">
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/services">Geriatrie &amp; Pflege</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/services">Neurologie</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="/services">Atemtherapie</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Kontakt Info</h5>
          <ul className="space-y-4 text-white">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base mt-1">location_on</span>
              <span>Steinfeldstrasse 15a<br/>8153 Rümlang</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-base">call</span>
              <span className="font-bold">078 336 55 40 (Mobil)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-base">phone</span>
              <span className="font-bold">044 861 10 61 (Festnetz)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-base">mail</span>
              <span className="font-bold underline">info@physiosolutions.ch</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-12 border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-green-50/90">© 2026 PhysioHealth GmbH. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-6 text-sm text-white font-medium">
          <a className="hover:underline transition-opacity" href="#">Datenschutzerklärung</a>
          <a className="hover:underline transition-opacity" href="#">Nutzungsbedingungen</a>
          <a className="hover:underline transition-opacity" href="#">Impressum</a>
          <a className="hover:underline transition-opacity font-bold" href="#">Notfallversorgung</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
