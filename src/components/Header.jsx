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
    <header className="sticky top-0 w-full z-50 bg-[#50CB61] backdrop-blur-xl opacity-90 shadow-lg shadow-green-900/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-full">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tighter text-white">
          <img src={Logo} alt="Physio Solution Logo" className="h-12 w-auto object-contain" />

        </Link>
        <nav className="hidden lg:flex items-center space-x-8 font-manrope font-semibold tracking-tight text-sm uppercase">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/concept')} to="/concept">Concept</Link>
          <Link className={getLinkClass('/services')} to="/services">Services</Link>
          <Link className={getLinkClass('/for-relatives')} to="/for-relatives">For Relatives</Link>
          <Link className={getLinkClass('/about')} to="/about">About Me</Link>
          <Link className={getLinkClass('/contact')} to="/contact">Contact</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link to="/book-visit" className="bg-white text-[#50CB61] px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all scale-95 duration-200 ease-in-out active:opacity-80 inline-block text-center whitespace-nowrap">
            Book Visit
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
