import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../public/images/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        return isActive
            ? "text-white border-b-2 border-white pb-1"
            : "text-green-50/80 hover:text-white transition-all duration-200";
    };

    const navLinks = [
        { name: 'Startseite', path: '/' },
        { name: 'Konzept', path: '/concept' },
        { name: 'Leistungen', path: '/services' },
        { name: 'Für Angehörige', path: '/for-relatives' },
        { name: 'Über mich', path: '/about' },
        { name: 'Kontakt', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 w-full z-[100] bg-[#166E41] shadow-xl border-b border-white/5 font-manrope">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 lg:py-5 flex justify-between items-center">

                {/* LOGO AREA */}
                <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 lg:gap-3 decoration-none group transition-transform duration-300 hover:scale-[1.02]"
                >
                    <img src={Logo} alt="PhysioSolutions Logo" className="h-8 lg:h-12 w-auto object-contain" />
                    <div className=" leading-none scale-90 lg:scale-100 origin-left">
                        <span className="text-lg lg:text-xl font-black tracking-tighter text-white">PHYSIO</span>
                        <span className="text-lg lg:text-xl font-bold  text-[#50CB61]">SOLUTIONS.CH</span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center space-x-8 font-semibold tracking-tight text-[11px] uppercase tracking-[0.2em]">
                    {navLinks.map((link) => (
                        <Link key={link.path} className={getLinkClass(link.path)} to={link.path}>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA BUTTON - Desktop */}
                <div className="hidden lg:flex items-center">
                    <Link
                        to="/book-visit"
                        className="bg-white text-[#166E41] px-7 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
                    >
                        Termin vereinbaren
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50"
                >
                    <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* MOBILE OVERLAY MENU */}
            <div className={`fixed inset-0 bg-[#166E41]  z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                <nav className="flex flex-col items-center gap-10 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-black tracking-tighter transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/40 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/book-visit"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 bg-white text-[#166E41] px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl"
                    >
                        Termin vereinbaren
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
