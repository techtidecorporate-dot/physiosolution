import React from 'react';

const Services = () => {
    return (
        <section className="bg-[#166E41] py-32 relative overflow-hidden font-manrope">
            {/* Soft decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#166E41]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22BB11]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-24 text-center">
                    <span className="text-[#50CB61] font-black text-[10px] lg:text-xs tracking-[0.4em] uppercase mb-8 flex items-center justify-center gap-4">
                        <span className="w-8 lg:w-12 h-[1px] bg-white/20"></span>
                        Fachbereiche
                        <span className="w-8 lg:w-12 h-[1px] bg-white/20"></span>
                    </span>
                    <h2 className="text-3xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] lg:leading-none mb-6 px-4">
                        Spezialisierte <br className="hidden md:block" />
                        <span className="text-[#22BB11]">Behandlungsfelder</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Service Card Component Wrapper */}
                    {[
                        { title: 'Neurologische Erkrankungen', icon: 'neurology', text: 'Verbesserung von Gangbild, Gleichgewicht und Selbstständigkeit bei Schlaganfall, Parkinson oder MS.' },
                        { title: 'Schwindel & Gleichgewicht', icon: 'balance', text: 'Alltagsnahe Therapie bei Lagerungsschwindel, Gangunsicherheit und vestibulären Störungen.' },
                        { title: 'Onkologie & Lymphologie', icon: 'clinical_notes', text: 'Unterstützung bei Fatigue und Lymphödemen durch manuelle Lymphdrainage und Belastungsaufbau.' },
                        { title: 'Geriatrie & Pflege', icon: 'elderly', text: 'Mobilitätserhalt und Sturzprophylaxe bei Altersgebrechlichkeit oder hohem Pflegebedarf.' },
                        { title: 'Atemtherapie', icon: 'respiratory_rate', text: 'Verbesserte Atemmechanik und Belastbarkeit bei COPD, Asthma oder Post-COVID-Symptomen.' },
                        { title: 'Chronische Wunden', icon: 'healing', text: 'Begleitende Physiotherapie zur Förderung der Durchblutung und Mobilität bei Wundheilungsstörungen.' }
                    ].map((service, index) => (
                        <div key={index} className="group relative bg-[#f8faf9] p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#22BB11]/30 hover:bg-white hover:shadow-2xl hover:shadow-[#166E41]/10 transition-all duration-500 overflow-hidden">

                            {/* Accent Circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#22BB11]/5 rounded-full group-hover:scale-150 transition-all duration-700"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white shadow-xl shadow-[#166E41]/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#166E41] group-hover:rotate-6 transition-all duration-500">
                                    <span className="material-symbols-outlined text-[#166E41] group-hover:text-white text-4xl transition-colors">
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-black mb-4 leading-tight group-hover:text-[#166E41] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-black/60 text-base leading-relaxed font-medium">
                                    {service.text}
                                </p>
                            </div>

                            {/* Bottom Highlight */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#22BB11] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;
