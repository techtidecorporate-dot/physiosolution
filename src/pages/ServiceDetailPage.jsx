import React from 'react';
import { useParams, Link } from 'react-router-dom';

const servicesData = {
    'neurologische-erkrankungen': {
        title: 'Neurologische Erkrankungen',
        description: 'Bei neurologischen Erkrankungen wie Schlaganfall, Parkinson oder Multipler Sklerose unterstützen wir Sie dabei, Beweglichkeit, Koordination und Gleichgewicht zu verbessern. Ziel ist es, verloren gegangene Fähigkeiten Schritt für Schritt wieder aufzubauen und mehr Sicherheit im Alltag zu gewinnen.',
        icon: 'neurology'
    },
    'onkologie-lymphologie': {
        title: 'Onkologie & Lymphologie',
        description: 'Nach oder während einer onkologischen Behandlung begleiten wir Sie mit individuell abgestimmter Therapie. Dazu gehören unter anderem manuelle Lymphdrainage, die Förderung der Beweglichkeit sowie der behutsame Aufbau von Kraft und Belastbarkeit.',
        icon: 'clinical_notes'
    },
    'atemtherapie': {
        title: 'Atemtherapie',
        description: 'Bei Atemwegserkrankungen wie COPD, Asthma oder nach COVID-19 helfen wir, die Atmung zu verbessern und die körperliche Belastbarkeit zu steigern. Durch gezielte Übungen wird die Lungenfunktion unterstützt und der Alltag erleichtert.',
        icon: 'respiratory_rate'
    },
    'geriatrie-pflege': {
        title: 'Geriatrie & Pflege',
        description: 'Im höheren Alter steht der Erhalt der Selbstständigkeit im Mittelpunkt. Wir unterstützen Sie dabei, Mobilität zu erhalten oder wiederzuerlangen, Stürze zu vermeiden und sich sicher im eigenen Zuhause zu bewegen.',
        icon: 'elderly'
    },
    'schwindel-gleichgewicht': {
        title: 'Schwindel & Gleichgewicht',
        description: 'Schwindel und Unsicherheiten beim Gehen können die Lebensqualität stark einschränken. Durch gezielte Therapie verbessern wir Gleichgewicht, Orientierung und Koordination, um wieder mehr Stabilität und Sicherheit zu ermöglichen.',
        icon: 'balance'
    },
    'chronische-wunden': {
        title: 'Chronische Wunden',
        description: 'Bei chronischen Wunden unterstützen wir den Heilungsprozess durch gezielte Bewegungsförderung und die Verbesserung der Durchblutung. Ziel ist es, die Regeneration des Gewebes bestmöglich zu fördern.',
        icon: 'healing'
    },
    'domizilbehandlungen': {
        title: 'Domizilbehandlungen',
        description: 'Die Therapie findet direkt bei Ihnen zu Hause, im Pflegeheim oder in einer Einrichtung statt. Dadurch wird der Zugang zur Physiotherapie einfach, sicher und ohne zusätzlichen Aufwand ermöglicht.',
        icon: 'home'
    },
    'unterstuetzung-fuer-angehoerige': {
        title: 'Unterstützung für Angehörige',
        description: 'Wir beraten und unterstützen Angehörige im Umgang mit alltäglichen Pflegesituationen. Dazu gehören sichere Bewegungsabläufe, ergonomisches Arbeiten und praktische Hilfestellungen zur Entlastung im Alltag.',
        icon: 'volunteer_activism'
    },
    'alltagstraining': {
        title: 'Alltagstraining',
        description: 'Wir trainieren Bewegungen direkt im realen Umfeld – wie Aufstehen, Gehen oder alltägliche Abläufe. Dadurch werden Fortschritte nicht nur erreicht, sondern auch langfristig im Alltag integriert.',
        icon: 'settings_accessibility'
    },
    'individuelle-therapieplanung': {
        title: 'Individuelle Therapieplanung',
        description: 'Jede Behandlung wird individuell auf Ihre Situation, Ihre Ziele und Ihre Lebensumstände abgestimmt – für eine nachhaltige und wirksame Therapie.',
        icon: 'event_note'
    }
};

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white font-manrope">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-[#166E41] mb-6">Service nicht gefunden</h1>
                    <Link to="/services" className="text-black/60 hover:text-[#166E41] font-bold underline decoration-2 underline-offset-8">
                        Zurück zur Übersicht
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-manrope selection:bg-[#166E41]/10 selection:text-[#166E41]">
            <section className="relative py-24 px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#22BB11]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 -z-10"></div>
                
                <div className="mb-16">
                    <Link to="/services" className="inline-flex items-center gap-2 text-black/40 hover:text-[#166E41] transition-colors font-black text-xs uppercase tracking-widest group">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Zurück zu den Leistungen
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    <div className="lg:col-span-8">
                        <div className="flex flex-col gap-10">
                            <div className="inline-block px-4 py-1.5 bg-[#166E41]/10 text-[#166E41] rounded-full text-[10px] font-black tracking-[0.2em] uppercase w-fit">
                                LEISTUNGEN
                            </div>
                            
                            <h1 className="text-5xl lg:text-8xl font-black text-black tracking-tighter leading-none mb-4">
                                {service.title}
                            </h1>
                            
                            <div className="text-black/70 text-xl lg:text-2xl leading-relaxed font-semibold italic border-l-4 border-[#22BB11] pl-8 max-w-3xl mb-12">
                                <p>
                                    Unsere Leistungen orientieren sich nicht nur an Diagnosen, sondern vor allem an den Anforderungen des Alltags. Ziel ist es, Sicherheit, Selbstständigkeit und Beweglichkeit in Ihrem gewohnten Umfeld gezielt zu verbessern.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-12 rounded-[3rem] border border-[#166E41]/5 relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#166E41]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-[#166E41]/5">
                                        <span className="material-symbols-outlined text-[#166E41] text-3xl font-black">{service.icon}</span>
                                    </div>
                                    <p className="text-xl lg:text-2xl text-black/80 leading-relaxed font-bold">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 sticky top-32">
                        <div className="bg-[#166E41] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-6">Haben Sie Fragen?</h3>
                                <p className="text-white/70 text-base font-bold mb-10 leading-relaxed">
                                    Gerne beraten wir Sie persönlich zu unseren Leistungen und vereinbaren einen Termin für eine Domizilbehandlung.
                                </p>
                                <div className="space-y-6">
                                    <a href="tel:0783365540" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#166E41] transition-all">
                                            <span className="material-symbols-outlined text-xl">call</span>
                                        </div>
                                        <span className="text-lg font-black tracking-tighter">078 336 55 40</span>
                                    </a>
                                    <Link to="/contact" className="block w-full bg-white text-[#166E41] py-5 rounded-2xl text-center font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-black/10">
                                        Termin anfragen
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
