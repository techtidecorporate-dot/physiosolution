import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-transparent py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 stitch-section p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="relative rounded-3xl overflow-hidden glass-card border border-white/20">
                        <img
                            src="/images/therapist.png"
                            alt="Peter Ulshöfer – Physiotherapeut"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#50CB61] via-[#22BB11] to-[#166E41] rounded-3xl p-5 text-white shadow-2xl">
                            <p className="text-3xl font-bold">15+</p>
                            <p className="text-sm mt-1">Jahre Erfahrung</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-cyan-200 font-semibold text-xs uppercase tracking-widest">Über mich</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Peter Ulshöfer</h2>
                        <p className="text-cyan-100 font-medium text-lg">Dipl. Physiotherapeut HF</p>

                        <p className="text-cyan-100 leading-relaxed">Mit über 15 Jahren Erfahrung in der ambulanten und stationären Rehabilitation bringe ich klinische Präzision und persönliche Fürsorge direkt zu Ihnen nach Hause. Mein Fokus liegt auf ganzheitlicher, patientenzentrierter Therapie.</p>
                        <p className="text-cyan-100 leading-relaxed">Als Spezialist für Domizilbehandlungen im Zürcher Unterland kenne ich die besonderen Bedürfnisse meiner Patientinnen und Patienten und passe jede Therapie individuell an deren Lebensumstände an.</p>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {[
                                { label: 'SRK anerkannt', icon: 'verified' },
                                { label: 'Kassenzugelassen', icon: 'health_and_safety' },
                                { label: 'EMR zertifiziert', icon: 'workspace_premium' },
                                { label: 'CH-weit im Einsatz', icon: 'location_on' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-[#0d1735]/70 rounded-xl p-3 shadow-lg border border-cyan-300/20">
                                    <span className="material-symbols-outlined text-cyan-100">{item.icon}</span>
                                    <span className="text-cyan-100 font-semibold text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="gradient-btn px-8 py-3 rounded-full font-semibold shadow-xl hover:brightness-110 transition duration-200">Kontakt aufnehmen</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
