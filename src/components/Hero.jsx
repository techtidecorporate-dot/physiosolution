import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden font-manrope bg-gradient-to-br from-white via-[#f7fdf9] to-[#ecf7ef]">
            {/* Decorative Element */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#ddeadf]/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10 pt-12 pb-12">
                <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6">

                    {/* Main Title Block */}
                    <h1 className="text-3xl sm:text-3xl lg:text-[34px] font-bold leading-tight tracking-tight">
                        <span className="text-[#22BB11]">Physiotherapeutische</span>{' '}
                        <span className="text-[#444]">Domizilbehandlungen in</span><br />
                        <span className="text-[#444]">Bülach und im Zürcher Unterland</span>
                    </h1>

                    {/* Paragraphs with precise styling */}
                    <div className="space-y-4 text-[13px] sm:text-[14px] lg:text-[15px] font-bold leading-snug">
                        <p className="italic text-black">
                            Physiotherapie bei Ihnen zu Hause – praktisch, unkompliziert und freundlich.
                        </p>

                        <p className="text-black">
                            Unser Versorgungskonzept ist Ihr Zuhause. Wir bieten physiotherapeutische Domizilbehandlungen in Bülach und im Zürcher Unterland an. Die Behandlung erfolgt bei Ihnen zu Hause, im Alterszentrum oder im Pflegeheim.
                        </p>

                        <p className="text-black">
                            Sicher und sorgenfrei zur Physiotherapie – ohne öffentliche Verkehrsmittel, ohne Taxi und ohne eigenes Auto. Unsere Aufmerksamkeit gilt Ihrer Gesundheit im gewohnten Umfeld und der Wiederherstellung Ihrer Alltagsfähigkeit – für ein gutes Gefühl bei Ihnen als Patient:in und für Ihre Angehörigen.
                        </p>

                        <p className="text-black">
                            Physiotherapie bedeutet für uns, Menschen dort zu begleiten, wo ihr Leben stattfindet. Nicht isoliert im Therapieraum, sondern im vertrauten Umfeld, im Alltag und im sozialen Leben. Ziel ist es, Sicherheit, Selbstvertrauen und Lebensqualität wiederzuerlangen.
                        </p>
                    </div>

                    {/* Button & Phone Block */}
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                        <a
                            href="/book-visit"
                            className="bg-gradient-to-r from-[#50CB61] to-[#22BB11] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Termin vereinbaren
                        </a>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-[#22BB11] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#22BB11] text-2xl font-bold">call</span>
                            </div>
                            <a
                                href="tel:0783365540"
                                className="text-lg lg:text-xl font-black text-black tracking-tighter"
                            >
                                078 336 55 40
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;