import React from 'react';
import Logo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#50CB61] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12 font-manrope text-sm leading-relaxed text-white">
        <div>
          <span className="flex items-center gap-3 text-2xl font-black text-white mb-4">
            <img src={Logo} alt="Physio Solution Logo" className="h-12 w-auto object-contain" />
          </span>
          <p className="text-green-50/90 mb-6">
            Ihre Experten für mobile Physiotherapie im Zürcher Unterland. Wir verbinden medizinische Fachkompetenz mit individuellem Komfort.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Navigation</h5>
          <ul className="space-y-3">
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Startseite</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Concept</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Leistungen</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Über mich</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Fachbereiche</h5>
          <ul className="space-y-3">
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Geriatrische Pflege</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Neuro-Rehabilitation</a></li>
            <li><a className="text-green-50/90 hover:text-white transition-opacity" href="#">Atemtherapie</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Kontakt Info</h5>
          <ul className="space-y-3 text-green-50/90">
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">location_on</span> Bülach &amp; Umgebung</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">call</span> +41 44 123 45 67</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">mail</span> info@physiosolution.ch</li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-12 border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-green-50/90">© 2024 Physio Solution. Precision in Motion.</p>
        <div className="flex gap-6 text-sm text-green-50/90">
          <a className="hover:text-white transition-opacity" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-opacity" href="#">Terms of Service</a>
          <a className="hover:text-white transition-opacity" href="#">Imprint</a>
          <a className="hover:text-white transition-opacity font-bold underline" href="#">Emergency Care</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
