import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[400px] lg:min-h-[550px] flex items-center overflow-hidden">
            {/* Background Image with Precise Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Professionelle Physiotherapie Bülach"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920"
                />
                <div className="absolute inset-0 bg-white/60 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10 pt-20 pb-20">
                <div className="flex flex-col justify-center space-y-8 max-w-3xl">

                    <div className="space-y-2">
                        <span className="text-[#166E41] font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#166E41]"></span>
                            Zürcher Unterland
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-[#166E41] tracking-tighter leading-[0.9]">
                            Physiotherapie <br />
                            <span className="text-black">Zu Hause</span>
                        </h1>
                    </div>

                    <p className="text-2xl md:text-3xl text-black/80 font-bold leading-tight">
                        Praktisch. Unkompliziert. Menschlich.
                    </p>

                    <div className="flex flex-wrap items-center gap-8 pt-6">
                        <a href="/contact" className="bg-[#166E41] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-[#166E41]/20 hover:scale-105 transition-all">
                            Termin vereinbaren
                        </a>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-[#166E41] uppercase tracking-widest">Gleich anrufen</span>
                            <a href="tel:0783365540" className="text-2xl font-black text-black">078 336 55 40</a>
                        </div>
                    </div>

                    {/* <p className="text-lg text-black/60 max-w-lg leading-relaxed pt-4"> */}
                    {/* Wiedererlangung von Sicherheit und Lebensqualität direkt in Ihrem gewohnten Umfeld in Bülach und Umgebung. */}
                    {/* </p> */}

                </div>
            </div>
        </section>
    );
};

export default Hero;