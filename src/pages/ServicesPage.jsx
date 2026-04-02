import React from 'react';

const ServicesPage = () => {
    return (
        <div className="pt-24 bg-background text-on-background font-body antialiased">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-6xl font-extrabold tracking-tighter text-primary mb-6">
                            Exzellenz in der <br/>Physiotherapie.
                        </h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg mb-8">
                            Präzision, Empathie und wissenschaftliche Fundierung. Wir begleiten Sie durch spezialisierte Behandlungsfelder mit dem Ziel nachhaltiger Vitalität.
                        </p>
                        <div className="flex gap-4">
                            <span className="inline-flex items-center gap-2 text-sm font-label tracking-widest text-primary font-bold">
                                <span className="material-symbols-outlined text-xl">verified</span>
                                SCHWEIZER QUALITÄT
                            </span>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <img alt="Clinic Interior" className="relative rounded-xl w-full aspect-[4/3] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Qmam0lqkmoCqGYDFX8YR6RVsUQwgsJRZBrayz9d8xSTBhwqT4XnDOI9GMncPl382tZ5LIbOgxoksrRdDc4XBSFCzMsMD5PoWaXDRF0vWLWEXUmAgobZuO1F347_54ufuQgARujuZJ2mz4NwSMhsXnAC_mcD7PAFAQkMWGJilvEu5LF92l7v52tSEyiyYyMiy1ab9svs9iC32jrm2WsBAXp4oDruK9L92F0Izw1b2t6RN0D103218X7VPr9zBbWOsALPAP3IkLVVq"/>
                    </div>
                </div>
            </section>
            
            {/* Services Section (The Core Requirement) */}
            <section className="bg-tertiary-container py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16">
                        <span className="text-on-tertiary-container font-label text-xs tracking-widest font-bold block mb-4 uppercase">Spezialisierte Fachbereiche</span>
                        <h2 className="text-4xl font-extrabold text-on-tertiary tracking-tight mb-4">Umfassendes <br/>Leistungsspektrum</h2>
                        <div className="h-1 w-24 bg-secondary-container rounded-full"></div>
                    </header>
                    {/* 3x2 Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">neurology</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Neurological conditions</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Behandlung von Erkrankungen des zentralen und peripheren Nervensystems. Fokus auf motorische Kontrolle und funktionelle Unabhängigkeit bei Schlaganfall oder MS.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">balance</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Dizziness and vestibular disorders</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Spezialisierte Rehabilitation bei Schwindelbeschwerden und Gleichgewichtsstörungen. Systematische Diagnostik und gezieltes Vestibularistraining für Ihre Sicherheit.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">immunology</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Oncological conditions and lymphology</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Unterstützende Therapie während und nach onkologischen Behandlungen. Manuelle Lymphdrainage und Kompressionstherapie zur Ödemreduktion und Vitalitätssteigerung.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">elderly</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Geriatric conditions and high care needs</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Erhalt der Mobilität und Sturzprävention im Alter. Ganzheitliche Betreuung für Patientinnen mit komplexem Pflegebedarf und Multimorbidität.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">air</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Respiratory therapy</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Optimierung der Atemfunktion bei chronischen Lungenerkrankungen (COPD, Asthma). Sekretmanagement und Atemmechanik-Training für mehr Lebensqualität.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group shadow-lg">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined">healing</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-secondary-fixed mb-4">Chronic wounds – supportive physiotherapy</h3>
                                <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
                                    Begleitende physiotherapeutische Massnahmen zur Wundheilungsförderung. Durchblutungsförderung und Druckentlastung als essentielle Pfeiler der Wundtherapie.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-on-secondary-fixed-variant/10">
                                <span className="text-xs font-label font-bold text-on-secondary-fixed tracking-widest">DETAILS ANSEHEN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Informational Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <img alt="Technology" className="rounded-xl shadow-xl object-cover aspect-video grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Rc2ECMP0gQtTZfl1HiMXBRegX-LPN1IOc-TU6V7pkGy1J9wpuDpsntb7kgMrmH3HV7nf-hKpdZ5n0EzsvSuF1dCCDEVhrTm2I741Qv7SuGBxsIee-JN62dLtBZ4i9zA6NO0JEck0yar_iiGR1yR6JCXyFCvf9O1SheW-MixNasfyfG3hR1SAtEgRhUygerBpRNcCqCbYHfmF6CKRWkUq1D4mN_bNmZFcyQ3Z4l9nLSb4Easkq1IZoW-e7l4-Sy0dNxHVDaQOTgL8"/>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">Präzision in der Analyse.</h2>
                    <p className="text-on-surface-variant mb-6 leading-relaxed">
                        Unsere Behandlungen basieren auf einer tiefgehenden klinischen Befunderhebung. Wir nutzen modernste Erkenntnisse der Bewegungswissenschaft, um individuelle Therapiepläne zu erstellen, die genau dort ansetzen, wo Ihr Körper Unterstützung benötigt.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <span className="text-on-surface font-medium">Evidenzbasierte Behandlungsprotokolle</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <span className="text-on-surface font-medium">Interdisziplinäre Zusammenarbeit mit Fachärzten</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <span className="text-on-surface font-medium">Kontinuierliche Weiterbildung nach Schweizer Standards</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
