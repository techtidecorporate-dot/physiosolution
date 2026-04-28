import React from 'react';

const ServicesPage = () => {
    return (
        <div className="bg-white text-black font-manrope antialiased overflow-hidden">

            {/* Elite Hero - Massive Impact and Gradients */}
            <section className="relative py-24 px-8 max-w-7xl mx-auto">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#22BB11]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative z-10">
                        <span className="text-[#166E41] font-black text-xs tracking-[0.5em] uppercase mb-10 flex items-center gap-6">
                            Fachbereiche
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-black leading-[0.9] mb-12">
                            LEISTUNGEN.
                        </h1>
                        <p className="text-black/70 text-xl lg:text-2xl leading-relaxed max-w-xl mb-14 font-medium italic border-l-4 border-[#22BB11] pl-8">
                            Unsere Leistungen orientieren sich nicht nur an Diagnosen, sondern vor allem an den Anforderungen des Alltags. Ziel ist es, Sicherheit, Selbstständigkeit und Beweglichkeit in Ihrem gewohnten Umfeld gezielt zu verbessern.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#166E41]/5 flex items-center justify-center text-[#166E41]">
                                    <span className="material-symbols-outlined font-black">verified_user</span>
                                </div>
                                <span className="text-sm font-black uppercase tracking-widest text-black/40">Zugelassen bei allen Kassen</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#166E41]/5 flex items-center justify-center text-[#166E41]">
                                    <span className="material-symbols-outlined font-black">home_pin</span>
                                </div>
                                <span className="text-sm font-black uppercase tracking-widest text-black/40">Domizil-Spezialist</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-10 bg-[#166E41]/5 rounded-[4rem] blur-3xl -z-10 animate-pulse"></div>
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-[#166E41]/20 border-[12px] border-white">
                            <img alt="Physio Solution Mobil" className="w-full aspect-[4/5] object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategy / Methodology Section */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                                <div className="absolute inset-0 bg-[#22BB11]/20 blur-[100px] -z-10"></div>
                                <div className="space-y-8 pt-12">
                                    <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-black/5 transform hover:-translate-y-2 transition-all">
                                        <h4 className="text-4xl font-black text-[#166E41] mb-2">01</h4>
                                        <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-4">Analyse</p>
                                        <p className="text-sm font-bold text-black/60 leading-relaxed">Präzise Befunderhebung direkt bei Ihnen vor Ort.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-black/5 transform hover:-translate-y-2 transition-all">
                                        <h4 className="text-4xl font-black text-[#166E41] mb-2">02</h4>
                                        <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-4">Planung</p>
                                        <p className="text-sm font-bold text-black/60 leading-relaxed">Individuelle Ziele für Ihre Alltagsfähigkeit.</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-black/5 transform hover:-translate-y-2 transition-all">
                                        <h4 className="text-4xl font-black text-[#166E41] mb-2">03</h4>
                                        <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-4">Therapie</p>
                                        <p className="text-sm font-bold text-black/60 leading-relaxed">Evidenzbasierte Behandlung im gewohnten Umfeld.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-black/5 transform hover:-translate-y-2 transition-all">
                                        <h4 className="text-4xl font-black text-[#166E41] mb-2">04</h4>
                                        <p className="font-black text-xs uppercase tracking-widest text-black/40 mb-4">Erfolg</p>
                                        <p className="text-sm font-bold text-black/60 leading-relaxed">Nachhaltige Verbesserung Ihrer Lebensqualität.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-[#166E41] font-black text-xs tracking-[0.3em] uppercase block mb-8">Methodik</span>
                            <h2 className="text-5xl lg:text-6xl font-black text-black tracking-tighter leading-[0.95] mb-10">Unser strukturierter <br />Weg zum Ziel.</h2>
                            <p className="text-black/60 text-lg leading-relaxed font-semibold mb-10">
                                Wir begleiten Sie mit einem klaren, wissenschaftlich fundierten Prozess. Von der ersten Analyse bis zur langfristigen Sicherung Ihrer Ergebnisse steht Ihre Individualität im Fokus.
                            </p>
                            <div className="flex items-center gap-6 p-6 border-2 border-[#166E41]/10 rounded-[2.5rem]">
                                <div className="w-16 h-16 rounded-2xl bg-[#166E41] flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-white text-3xl font-black">medical_services</span>
                                </div>
                                <p className="text-sm font-black italic max-w-[200px] leading-tight">
                                    Wir bieten Behandlungen in Bülach & im Zürcher Unterland an.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="bg-[#166E41] py-32 px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full -translate-y-1/3 translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center mb-32">
                    <span className="text-white/60 font-black text-xs tracking-[0.5em] uppercase block mb-12">Spezialisierungen</span>
                    <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                        Medizinische <br />
                        <span className="text-[#50CB61]">Schwerpunkte.</span>
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Neurologische Erkrankungen', icon: 'neurology', text: 'Bei neurologischen Erkrankungen wie Schlaganfall, Parkinson oder Multipler Sklerose unterstützen wir Sie dabei, Beweglichkeit, Koordination und Gleichgewicht zu verbessern.' },
                            { title: 'Onkologie & Lymphologie', icon: 'clinical_notes', text: 'Nach oder während einer onkologischen Behandlung begleiten wir Sie mit individuell abgestimmter Therapie: Manuelle Lymphdrainage und behutsamer Aufbau von Kraft.' },
                            { title: 'Atemtherapie', icon: 'respiratory_rate', text: 'Bei Atemwegserkrankungen wie COPD, Asthma oder nach COVID-19 helfen wir, die Atmung zu verbessern und die körperliche Belastbarkeit zu steigern.' },
                            { title: 'Geriatrie & Pflege', icon: 'elderly', text: 'Im höheren Alter steht der Erhalt der Selbstständigkeit im Mittelpunkt. Wir unterstützen Sie dabei, Mobilität zu erhalten, Stürze zu vermeiden und sich sicher zu bewegen.' },
                            { title: 'Schwindel & Gleichgewicht', icon: 'balance', text: 'Durch gezielte Therapie verbessern wir Gleichgewicht, Orientierung und Koordination, um wieder mehr Stabilität und Sicherheit im Alltag zu ermöglichen.' },
                            { title: 'Chronische Wunden', icon: 'healing', text: 'Bei chronischen Wunden unterstützen wir den Heilungsprozess durch gezielte Bewegungsförderung und die Verbesserung der Durchblutung.' }
                        ].map((s, i) => (
                            <div key={i} className="group bg-white p-10 rounded-[3rem] hover:shadow-2xl hover:shadow-black/40 transition-all duration-700 relative flex flex-col h-full transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#166E41] transition-all duration-500 shadow-inner">
                                    <span className="material-symbols-outlined text-[#166E41] group-hover:text-white text-3xl transition-colors">
                                        {s.icon}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black mb-6 leading-tight tracking-tight">{s.title}</h3>
                                <p className="text-black/60 text-base leading-relaxed font-bold">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Weitere Leistungen Section */}
            <section className="py-32 px-8 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                        <div className="max-w-2xl">
                            <span className="text-[#166E41] font-black text-xs tracking-[0.4em] uppercase block mb-8">Ergänzende Angebote</span>
                            <h2 className="text-5xl lg:text-7xl font-black text-black tracking-tighter leading-[0.95]">
                                Weitere <br /><span className="text-[#166E41]">Leistungen.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: 'Domizilbehandlungen', icon: 'home', text: 'Die Therapie findet direkt bei Ihnen zu Hause, im Pflegeheim oder in einer Einrichtung statt. Einfach, sicher und ohne zusätzlichen Aufwand.' },
                            { title: 'Unterstützung für Angehörige', icon: 'volunteer_activism', text: 'Wir beraten und unterstützen Angehörige im Umgang mit alltäglichen Pflegesituationen – für sichere Bewegungsabläufe und ergonomisches Arbeiten.' },
                            { title: 'Alltagstraining', icon: 'settings_accessibility', text: 'Wir trainieren Bewegungen direkt im realen Umfeld – wie Aufstehen, Gehen oder alltägliche Abläufe, für eine langfristige Integration in den Alltag.' },
                            { title: 'Individuelle Therapieplanung', icon: 'event_note', text: 'Jede Behandlung wird individuell auf Ihre Situation, Ihre Ziele und Ihre Lebensumstände abgestimmt – für eine nachhaltige und wirksame Therapie.' }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-8 p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:border-[#166E41]/10 hover:bg-white hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#166E41]">
                                    <span className="material-symbols-outlined text-3xl font-black">{s.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-black mb-4 tracking-tight">{s.title}</h3>
                                    <p className="text-black/60 text-lg leading-relaxed font-semibold">{s.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-48 px-8 bg-[#f8faf9] text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-5xl lg:text-8xl font-black text-black tracking-tighter leading-none mb-16">
                        Bereit für den <br /><span className="text-[#166E41]">ersten Schritt?</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        <a href="/book-visit" className="bg-[#166E41] text-white px-14 py-7 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 transition-all">
                            Termin vereinbaren
                        </a>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-full border-2 border-[#166E41] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#166E41] font-black">call</span>
                            </div>
                            <a href="tel:0783365540" className="text-3xl font-black text-black tracking-tighter">078 336 55 40</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
