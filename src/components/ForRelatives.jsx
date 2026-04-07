import React from 'react';

const ForRelatives = () => {
    return (
        <section id="relatives" className="bg-white py-32 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#166E41] font-label text-sm tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-4">
                        <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span></span>
                        Für Angehörige
                        <span className="flex gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]/20"></span></span>
                    </span>
                    <h2 className="text-5xl lg:text-7xl font-headline font-black text-[#166E41] tracking-tighter leading-tight mb-8">
                        Unterstützung &amp; <br/>Begleitung
                    </h2>
                    <p className="text-black text-xl leading-relaxed">
                        Pflege bedeutet Nähe, Verantwortung und oft auch Belastung. Wenn Sie jemanden pflegen, sind auch Sie Teil der Therapie.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video lg:aspect-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=2070" 
                            alt="Pflegende Angehörige Beratung" 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: 'handshake', title: 'Unterstützung', description: 'Wir unterstützen Angehörige mit praxisnahen Tipps zur Entlastung.' },
                            { icon: 'clinical_notes', title: 'Beratung', description: 'Beratung zu Transfers, Handling und Selbstschutz für eine rückengerechte Pflege.' },
                            { icon: 'medical_services', title: 'Eigene Behandlung', description: 'Bei Bedarf behandeln wir auch Angehörige im Rahmen von Domizilbehandlungen.' },
                            { icon: 'home_health', title: 'Alltagshilfe', description: 'Praktische Hilfe dort, wenn eigene Beschwerden durch die Pflege entstanden sind.' }
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-3xl border border-[#166E41]/10 bg-surface-container-low flex gap-6 items-start transition-all hover:shadow-lg">
                                <div className="w-12 h-12 rounded-2xl bg-[#166E41]/10 text-[#166E41] flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                                    <p className="text-[#333] text-base leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#166E41] rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl font-black mb-4">Ganzheitliche Betreuung</h3>
                        <p className="text-white/90 text-lg max-w-xl">Wir begleiten Sie und Ihre Lieben im Team mit klarer Kommunikation und Vertrauen.</p>
                    </div>
                    <a href="/contact" className="relative z-10 bg-white text-[#166E41] px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all">
                        Jetzt anfragen
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ForRelatives;
