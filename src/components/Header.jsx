import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../public/images/logo.png'

const Header = () => {
  const location = useLocation();
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white border-b-2 border-white pb-1"
      : "text-green-50/80 hover:text-white transition-colors";
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#166E41] shadow-lg">
      <div className="flex justify-between items-center px-8 py-4 max-w-full">
        <Link to="/" className="flex items-center gap-3 decoration-none">
          <img src={Logo} alt="Physio Solution Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white">PHYSIO</span>
            <span className="text-sm font-bold tracking-[0.2em] text-[#50CB61]">SOLUTION</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8 font-manrope font-semibold tracking-tight text-sm uppercase">
          <Link className={getLinkClass('/')} to="/">Startseite</Link>
          <Link className={getLinkClass('/concept')} to="/concept">Konzept</Link>
          <Link className={getLinkClass('/services')} to="/services">Leistungen</Link>
          <Link className={getLinkClass('/for-relatives')} to="/for-relatives">Für Angehörige</Link>
          <Link className={getLinkClass('/about')} to="/about">Über mich</Link>
          <Link className={getLinkClass('/contact')} to="/contact">Kontakt</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link to="/book-visit" className="bg-white text-[#166E41] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-200">
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
