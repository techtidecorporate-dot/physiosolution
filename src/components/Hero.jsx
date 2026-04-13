import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden font-manrope bg-gradient-to-br from-white via-[#f7fdf9] to-[#ecf7ef]">
            {/* Decorative Element */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#ddeadf]/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10 pt-20 pb-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">

                    {/* Main Title Block */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                        <span className="text-[#22BB11]">Physiotherapeutische</span><br />
                        <span className="text-[#444]">Domizilbehandlungen in</span><br />
                        <span className="text-[#444]">Bülach und im Zürcher Unterland</span>
                    </h1>

                    {/* Paragraphs with precise styling */}
                    <div className="space-y-6 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl">
                        <p className="italic text-[#166E41] font-bold">
                            Physiotherapie bei Ihnen zu Hause – praktisch, unkompliziert und freundlich.
                        </p>

                        <p className="text-gray-600">
                            Unser Versorgungskonzept ist Ihr Zuhause. Wir bieten physiotherapeutische Domizilbehandlungen in Bülach und im Zürcher Unterland an. Die Behandlung erfolgt bei Ihnen zu Hause, im Alterszentrum oder im Pflegeheim.
                        </p>

                        <p className="text-gray-600">
                            Sicher und sorgenfrei zur Physiotherapie – ohne öffentliche Verkehrsmittel, ohne Taxi und ohne eigenes Auto. Unsere Aufmerksamkeit gilt Ihrer Gesundheit im gewohnten Umfeld und der Wiederherstellung Ihrer Alltagsfähigkeit – für ein gutes Gefühl bei Ihnen als Patient:in und für Ihre Angehörigen.
                        </p>

                        <p className="text-gray-600">
                            Physiotherapie bedeutet für uns, Menschen dort zu begleiten, wo ihr Leben stattfindet. Nicht isoliert im Therapieraum, sondern im vertrauten Umfeld, im Alltag und im sozialen Leben. Ziel ist es, Sicherheit, Selbstvertrauen und Lebensqualität wiederzuerlangen.
                        </p>
                    </div>

                    {/* Button & Phone Block */}
                    <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
                        <a
                            href="/book-visit"
                            className="bg-gradient-to-r from-[#50CB61] to-[#22BB11] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 transform"
                        >
                            Termin vereinbaren
                        </a>

                        <div className="flex items-center gap-4 group">
                            <div className="w-14 h-14 rounded-2xl border-2 border-[#22BB11] flex items-center justify-center group-hover:bg-[#22BB11] group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl font-bold">call</span>
                            </div>
                            <div className="flex flex-col items-start translate-y-0.5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Rufen Sie uns an</span>
                                <a
                                    href="tel:0783365540"
                                    className="text-xl lg:text-2xl font-black text-[#1a1c1a] tracking-tighter"
                                >
                                    078 336 55 40
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;