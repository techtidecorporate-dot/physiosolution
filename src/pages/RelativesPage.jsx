import React from 'react';

const RelativesPage = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* Hero Section */}
            <section className="relative px-8 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="z-10">
                        <span className="label-md uppercase tracking-widest text-primary font-bold text-xs mb-4 block">Unterstützung &amp; Begleitung</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-background leading-tight mb-8">
                            Präzise Versorgung für das <span className="text-primary">gesamte Umfeld.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                            Pflege bedeutet Nähe, Verantwortung und oft auch Belastung. Wenn Sie Ihren Partner, Ihre Eltern, Ihr Kind oder eine nahestehende Person pflegen, sind auch Sie Teil der Therapie.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105">
                                Beratung anfragen
                            </button>
                            <button className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container transition-colors">
                                Unser Modell
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract Circular Pattern Decoration */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-fixed opacity-10 blur-3xl -z-10"></div>
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-on-surface/10 aspect-[4/5] relative">
                            <img className="w-full h-full object-cover" alt="Ein professioneller Physiotherapeut im Gespräch mit einem pflegenden Angehörigen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEapzTqAM8D6MRy4vWGgyfJQ1TjIyba5DulRrH4GH7IZ0Fx_CBt4BoxX2FEbs5CafHoBHvlDlZLjHrx3BDAAU03qsJMgWdJRpzIdYgfa0uN6r97rdDGGaIOkPq-tN9qNX4SXmLVPQPFdNc_hezQmu4hC-ROb5awgdr5d_ti-j-ZLkFOeobrEIUjaSIb5hQHJ8xoYw9kOKjVKim8Ca6zP-9iCT_NE2pFSDGkZLsvhirU5MxzlJUsUU6PSYG60iPfgo1L7sW34jkYCXx" />
                        </div>
                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-2xl max-w-xs">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="material-symbols-outlined text-primary bg-primary-fixed/30 p-2 rounded-lg">volunteer_activism</span>
                                <span className="font-bold text-on-surface">Ganzheitliche Entlastung</span>
                            </div>
                            <p className="text-sm text-on-surface-variant">Unterstützung für diejenigen, die zu Hause die wichtigste Pflege leisten.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Bento Grid Section */}
            <section className="bg-surface-container-low py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 max-w-2xl">
                        <h2 className="text-4xl font-bold tracking-tight text-on-background mb-6">Praxisnahe Tipps für die anspruchsvollste Rolle des Lebens.</h2>
                        <div className="space-y-4">
                            <p className="text-on-surface-variant text-lg">
                                Wir unterstützen Angehörige mit praxisnahen Tipps zur Entlastung, Beratung zu Transfers, Handling und Selbstschutz.
                            </p>
                            <p className="text-on-surface-variant text-lg pt-4 border-t border-[#166E41]/10">
                                Bei Bedarf behandeln wir auch Angehörige im Rahmen von Domizilbehandlungen.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Guidance Card */}
                        <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:scale-[1.01] transition-transform flex flex-col justify-between group">
                            <div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">transfer_within_a_station</span>
                                <h3 className="text-3xl font-bold mb-4">Handling &amp; Transfers</h3>
                                <p className="text-on-surface-variant text-lg mb-8 max-w-md">Erlernen Sie ergonomische Techniken, um Ihre Lieben sicher zu bewegen. Präzision in der Bewegung schützt sowohl den Patienten als auch Ihre eigene Gesundheit.</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-4 py-2 bg-primary-fixed/20 text-on-primary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">Ergonomie</span>
                                <span className="px-4 py-2 bg-primary-fixed/20 text-on-primary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">Sicherheit</span>
                            </div>
                        </div>
                        {/* Self Protection Card */}
                        <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container p-10 rounded-[2rem] flex flex-col items-center text-center justify-center">
                            <span className="material-symbols-outlined text-6xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                            <h3 className="text-2xl font-bold mb-4">Selbstschutz</h3>
                            <p className="text-on-tertiary-container/80">Vermeidung von Burnout und körperlicher Belastung durch spezialisierte Bewegungsstrategien für Pflegende.</p>
                        </div>
                        {/* Home Visits Card */}
                        <div className="md:col-span-4 bg-secondary-container text-on-secondary-container p-10 rounded-[2rem] shadow-sm flex flex-col justify-between">
                            <h3 className="text-2xl font-bold mb-4">Hausbesuche</h3>
                            <p className="text-on-secondary-container/90 mb-8">Wir behandeln Angehörige zu Hause, wenn eigene Beschwerden durch die Pflege entstanden sind oder ein Praxisbesuch nicht möglich ist.</p>
                            <span className="material-symbols-outlined text-5xl opacity-50">home_health</span>
                        </div>
                        {/* Quote/Mission Card */}
                        <div className="md:col-span-8 bg-white p-10 rounded-[2rem] shadow-sm border border-outline-variant/15 flex items-center">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <img className="w-32 h-32 rounded-full object-cover shadow-lg" alt="Nahaufnahme einer Pflegekraft" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1GxlVmEzFYkAICKDdynwOWezyadW_NXzFWTbxtTTrxwMNo_n2ILb1BqXpCcmn14zA5FQxIx3Ft6s4CiCa6jPAI4jljm1L7gzGf8ePAXNwSe8KCcey2TRIe6fQDOF0N87UtzTdD-f3SvMCzqODKT32y6ttBIGSttl6V8NMslDoT-VnE8QgHm7k_h8c9-lV3yqljruEOuEuNc67sYjAWapSO-Ln2gpEt9y3lE7oDT42s22RjoD9UkNkCgr96L4ImNFrZGtNOZFUIAWq" />
                                <blockquote className="text-2xl font-medium italic text-on-surface leading-snug">
                                    &quot;Unsere Mission ist es sicherzustellen, dass die pflegende Person niemals der vergessene Patient im Raum ist.&quot;
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Therapy Integration Section */}
            <section className="py-32 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-secondary opacity-5 blur-[80px]"></div>
                        <img className="rounded-[2.5rem] shadow-2xl relative z-10" alt="Physiotherapeut demonstriert Übung" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBle8g0TtOjoazCfItWqcWhzKPBXHzBlPIp8qUZ-TKNbjjkiKEF15Smi_vAf8p_l9QJ4T34dYAj0tzSUMHrNETa5wYzk4KrdBIBq8E1yYjpENhK1hoLQNBXVkqz7QMriey38CYTFwIOl1kjU396_6YFrP3TuxgdBkQ0989RyfZwWOV0qlwG52OP3SoLluZlmXYuh87vLDGkSrWO2Pfl_3hcaKsEt3zixEz-Kakaxbwr6YHGZCNITyVuoagl1UsfIyH4iWKHKG8qXDfS" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Integriertes Unterstützungssystem</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Empathische Begleitung</h4>
                                    <p className="text-on-surface-variant">Bewältigung der emotionalen und physischen Komplexität der Langzeitpflege unter professioneller medizinischer Aufsicht.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">physical_therapy</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Körperliche Entlastung</h4>
                                    <p className="text-on-surface-variant">Gezielte Physiotherapie für Angehörige, die durch Heben und tägliche Pflegeaufgaben Rücken-, Nacken- oder Gelenkprobleme entwickelt haben.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">emergency_home</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Kontinuität zu Hause</h4>
                                    <p className="text-on-surface-variant">Wenn ein Praxisbesuch keine Option ist, bringen wir Schweizer Präzisions-Physiotherapie direkt zu Ihnen nach Hause.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-8 pb-32">
                <div className="max-w-5xl mx-auto bg-primary text-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10"></div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Weil Ihre Gesundheit deren Gesundheit ermöglicht.</h2>
                    <p className="text-on-primary-container text-lg mb-12 max-w-2xl mx-auto relative z-10">Warten Sie nicht, bis die Belastung zu einer chronischen Verletzung wird. Vereinbaren Sie noch heute eine professionelle Einschätzung für Ihren Pflegealltag.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-on-primary-container transition-colors">Hausbesuch buchen</button>
                        <button className="bg-primary-container text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/80 transition-colors">Kontakt aufnehmen</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelativesPage;
