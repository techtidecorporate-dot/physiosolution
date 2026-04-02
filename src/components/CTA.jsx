import React from 'react';

const CTA = () => {
    return (
        <section id="contact" className="bg-transparent py-20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 stitch-section p-10 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Bereit für den nächsten Schritt?</h2>
                <p className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto">Kontaktieren Sie uns jetzt und erhalten Sie personalisierte Physiotherapie direkt bei Ihnen zuhause – flexibel & zuverlässig.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="gradient-btn text-base font-bold px-10 py-4 rounded-full shadow-2xl w-full sm:w-auto">Termin vereinbaren</button>
                    <div className="flex items-center gap-3 text-cyan-200 font-semibold text-base">
                        <span className="material-symbols-outlined">call</span>
                        +41 44 123 45 67
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
