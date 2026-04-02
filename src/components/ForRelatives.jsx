import React from 'react';

const ForRelatives = () => {
    return (
        <section id="relatives" className="bg-transparent py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 stitch-section p-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-cyan-200 font-semibold text-xs uppercase tracking-widest mb-2">Für Angehörige</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">Care in jedem Schritt</h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Gemeinsam sorgen wir dafür, dass Ihre Familie Sicherheit und Entlastung erfährt – professionell, respektvoll, dauerhaft.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img src="/images/professional_care.png" alt="Pflegende Angehörige" className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: 'family_restroom', title: 'Entlastung', description: 'Übernahme der Therapie, damit Angehörige Ressourcen schonen können.' },
                            { icon: 'school', title: 'Schulung', description: 'Austausch von Übungen und Alltagshilfen für Patienten und Betreuer.' },
                            { icon: 'schedule', title: 'Flexible Termine', description: 'Therapiezeiten, die sich an Ihrem Rhythmus orientieren.' },
                            { icon: 'support_agent', title: 'Begleitung', description: 'Auf Wunsch dauerhafte Unterstützung über den Heilungsprozess hinaus.' }
                        ].map((item, index) => (
                            <div key={index} className="p-4 rounded-2xl border border-cyan-200/20 bg-[#0c1b35]/50 shadow-lg flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#50CB61] via-[#22BB11] to-[#166E41] text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{item.title}</h3>
                                    <p className="text-cyan-100 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 border border-cyan-200/30 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Ganzheitliche Betreuung</h3>
                        <p className="text-cyan-100">Wir begleiten Sie und Ihre Lieben im Team mit klarer Kommunikation und Vertrauen.</p>
                    </div>
                    <button className="gradient-btn text-base px-8 py-3 rounded-full font-semibold hover:brightness-110 transition duration-200">Jetzt anfragen</button>
                </div>
            </div>
        </section>
    );
};

export default ForRelatives;
