import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-transparent py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 stitch-section p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="relative rounded-3xl overflow-hidden glass-card border border-white/20">
                        <img
                            src="/images/therapist.png"
                            alt="Peter Ulshöfer – Physiotherapist"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#50CB61] via-[#22BB11] to-[#166E41] rounded-3xl p-5 text-white shadow-2xl">
                            <p className="text-3xl font-bold">25</p>
                            <p className="text-sm mt-1">Years Experience</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-cyan-200 font-semibold text-xs uppercase tracking-widest">Personal Profile</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Peter Ulshöfer</h2>
                        <p className="text-cyan-100 font-medium text-lg">Physiotherapist with 25 years of experience</p>

                        <p className="text-cyan-100 leading-relaxed">Specialized in mobile physiotherapy, home visits, and complex care situations in Bülach and the Zürcher Unterland.</p>
                        
                        <div className="pt-4 space-y-4">
                          <div>
                            <h3 className="text-cyan-100 font-bold text-sm uppercase tracking-widest mb-2">Philosophy</h3>
                            <p className="text-cyan-100 leading-relaxed font-semibold">Calm. Structured. Practical.</p>
                            <p className="text-cyan-100 leading-relaxed text-sm">My work focuses on improving safety, mobility, and independence in real-life environments — not just treating symptoms, but supporting meaningful recovery.</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {[
                                { label: 'Neurological rehabilitation', icon: 'neurology' },
                                { label: 'Geriatrics', icon: 'elderly' },
                                { label: 'Respiratory therapy', icon: 'respiratory_rate' },
                                { label: 'Oncology & lymphology', icon: 'clinical_notes' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-[#0d1735]/70 rounded-xl p-3 shadow-lg border border-cyan-300/20">
                                    <span className="material-symbols-outlined text-cyan-100">{item.icon}</span>
                                    <span className="text-cyan-100 font-semibold text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="gradient-btn px-8 py-3 rounded-full font-semibold shadow-xl hover:brightness-110 transition duration-200">Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
