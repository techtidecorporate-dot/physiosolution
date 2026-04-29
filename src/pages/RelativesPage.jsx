import React from 'react';
const FamilyImage = '/images/Family.webp'
const PhysioImage = '/images/physio Integrating.jpg'

const RelativesPage = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* Hero Section */}
            <section className="relative px-8 py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="z-10">
                        <span className="label-md uppercase tracking-widest text-primary font-bold text-xs mb-4 block">Unterstützung &amp; Begleitung</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-background leading-tight mb-8">
                            Präzise Unterstützung für das <span className="text-primary">gesamte Umfeld.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl font-bold">
                            Für mehr Sicherheit, Entlastung und Orientierung im Alltag pflegender Angehöriger
                        </p>
                        <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                            Pflege bedeutet Nähe, Verantwortung und oft auch eine hohe körperliche und emotionale Belastung. Wer einen nahestehenden Menschen zu Hause begleitet und pflegt, trägt im Alltag oft weit mehr, als von außen sichtbar ist. Deshalb begleiten wir pflegende Angehörige nicht nur beratend, sondern mit praktischer, alltagsnaher und physiotherapeutisch fundierter Unterstützung direkt im häuslichen Umfeld.
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
                            <img className="w-full h-full object-cover" alt="Ein professioneller Physiotherapeut im Gespräch mit einem pflegenden Angehörigen" src={FamilyImage} />
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
                        <h2 className="text-4xl font-bold tracking-tight text-on-background mb-6">Ganzheitliche Entlastung</h2>
                        <div className="space-y-4">
                            <p className="text-on-surface-variant text-lg font-bold">
                                Unterstützung für Menschen, die zu Hause die wichtigste Pflege leisten
                            </p>
                            <p className="text-on-surface-variant text-lg">
                                Pflegende Angehörige übernehmen täglich Aufgaben, die Kraft, Aufmerksamkeit, Geduld und oft auch Improvisation verlangen. Gerade deshalb braucht es Unterstützung, die nicht theoretisch bleibt, sondern im Alltag wirklich trägt. Wir begleiten Angehörige mit praxisnahen Empfehlungen, klarer Anleitung und konkreten Lösungen für zu Hause. So entsteht mehr Sicherheit im Umgang, mehr Struktur im Alltag und mehr Vertrauen in die eigene Unterstützung.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Guidance Card */}
                        <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:scale-[1.01] transition-transform flex flex-col justify-between group">
                            <div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">transfer_within_a_station</span>
                                <h3 className="text-3xl font-bold mb-4">Handling & Transfers</h3>
                                <p className="text-on-surface-variant text-lg mb-8 max-w-md">Wir zeigen Ihnen ergonomische und alltagsgerechte Techniken, mit denen Sie Ihre Angehörigen sicherer unterstützen können. Das schützt nicht nur die betreute Person, sondern auch Ihren Rücken, Ihre Gelenke und Ihre eigene körperliche Stabilität.</p>
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
                            <p className="text-on-tertiary-container/80">Wir vermitteln Ihnen Bewegungsstrategien, die Ihre eigene Belastung reduzieren und helfen können, Überforderung im Alltag vorzubeugen.</p>
                        </div>
                        {/* Home Visits Card */}
                        <div className="md:col-span-4 bg-secondary-container text-on-secondary-container p-10 rounded-[2rem] shadow-sm flex flex-col justify-between">
                            <h3 className="text-2xl font-bold mb-4">Hausbesuche</h3>
                            <p className="text-on-secondary-container/90 mb-8">Wir begleiten Angehörige direkt zu Hause, wenn Beschwerden durch die Pflege entstanden sind oder ein Praxisbesuch nicht möglich oder nicht sinnvoll ist.</p>
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
                        <img className="rounded-[2.5rem] shadow-2xl relative z-10" alt="Physiotherapeut demonstriert Übung" src={PhysioImage} />
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
                                    <p className="text-on-surface-variant">Wir begleiten Angehörige mit Respekt, Klarheit und einer Sprache, die verständlich bleibt. So entsteht eine Form der Unterstützung, die nicht zusätzlich belastet, sondern Orientierung und Vertrauen schafft.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">physical_therapy</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Körperliche Entlastung</h4>
                                    <p className="text-on-surface-variant">Wir unterstützen bei Rücken-, Nacken- oder Gelenkbeschwerden, wenn der Pflegealltag bereits Spuren hinterlassen hat. Ziel ist es, Belastungen zu reduzieren, Beweglichkeit zu verbessern und die eigene körperliche Stabilität wieder zu stärken.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">emergency_home</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Kontinuität zu Hause</h4>
                                    <p className="text-on-surface-variant">Unsere mobile Physiotherapie bringt Fachkompetenz direkt in Ihr Zuhause und schafft eine kontinuierliche Begleitung dort, wo Pflege, Bewegung und Unterstützung tatsächlich stattfinden.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Weil Ihre Gesundheit Unterstützung ermöglicht</h2>
                    <p className="text-on-primary-container text-lg mb-12 max-w-2xl mx-auto relative z-10 italic">Entlastung beginnt nicht erst, wenn Beschwerden chronisch werden</p>
                    <p className="text-on-primary-container text-lg mb-12 max-w-2xl mx-auto relative z-10">Pflegende Angehörige werden im Alltag oft selbstverständlich mitgetragen, obwohl sie selbst an Belastungsgrenzen kommen. Unser Anspruch ist es, das frühzeitig zu erkennen und Sie nicht erst dann zu unterstützen, wenn aus Anstrengung bereits dauerhafte Beschwerden geworden sind. Wir helfen dabei, Pflege sicherer, schonender und tragfähiger zu gestalten — für die betreute Person und für Sie selbst.</p>
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
