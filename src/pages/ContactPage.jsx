import React from 'react';

const ContactPage = () => {
    return (
        <div className="pt-24 pb-24 bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-8 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold">Kontakt</span>
                    <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-primary tracking-tight max-w-4xl">
                        Präzision in Bewegung.
                    </h1>
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mt-4">
                        Physiotherapie home visits in Bülach and the Zürcher Unterland. Wir bringen erstklassige therapeutische Betreuung direkt zu Ihnen nach Hause.
                    </p>
                </div>
            </section>
            
            {/* Main Content Section: Two Columns */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Form */}
                    <div className="bg-surface-container p-8 md:p-12 rounded-xl">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-2">Kontaktieren Sie uns</h2>
                        <p className="text-on-surface-variant mb-8 font-medium">Wir freuen uns auf Ihre Nachricht und melden uns zeitnah bei Ihnen.</p>
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Name</label>
                                    <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary bg-surface-container-lowest transition-all outline-none" placeholder="Ihr voller Name" type="text"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">E-Mail</label>
                                    <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary bg-surface-container-lowest transition-all outline-none" placeholder="ihre@email.de" type="email"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Telefon</label>
                                <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary bg-surface-container-lowest transition-all outline-none" placeholder="+41 00 000 00 00" type="tel"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Nachricht</label>
                                <textarea className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary bg-surface-container-lowest transition-all outline-none" placeholder="Wie können wir Ihnen helfen?" rows="4"></textarea>
                            </div>
                            <button className="mt-4 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2" type="submit">
                                Termin vereinbaren
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                    {/* Right Column: Contact Information */}
                    <div className="flex flex-col gap-12 lg:pl-12">
                        <div>
                            <h2 className="text-3xl font-headline font-bold text-primary mb-8">Peter Ulshöfer</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-on-surface">Einsatzgebiet</h4>
                                        <p className="text-on-surface-variant leading-relaxed">Hausbesuche in Bülach,<br/>Zürcher Unterland &amp; Umgebung</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-on-surface">Telefon</h4>
                                        <p className="text-on-surface-variant leading-relaxed">+41 (0) 44 123 45 67</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-on-surface">E-Mail</h4>
                                        <p className="text-on-surface-variant leading-relaxed">peter@physiosolution.ch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Small Bento Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary-container p-6 rounded-xl flex flex-col gap-2">
                                <span className="text-3xl font-black text-on-secondary-container">15+</span>
                                <span className="font-label text-xs uppercase tracking-widest text-on-secondary-container opacity-80">Jahre Erfahrung</span>
                            </div>
                            <div className="bg-surface-container-high p-6 rounded-xl flex flex-col gap-2">
                                <span className="text-3xl font-black text-primary">100%</span>
                                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Mobile Therapie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Service Area Section (Visual Map Representation) */}
            <section className="max-w-7xl mx-auto px-8">
                <div className="relative overflow-hidden rounded-[2rem] bg-tertiary-container h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Abstract Map Graphic */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <img className="w-full h-full object-cover grayscale" alt="Abstract aerial minimalist map of Swiss topography with elegant lines and soft shadows representing geographical contours" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnmlQGCBMS0Dxqdb1reus_iv-SjZ-1GOov1L065kSL7ZNFJjo9A5o48s1NFr7BVxCsuvILxPG6Ov_oO_4fGXHZUKPG9xYONOm2Gjc57KOszYIUvJ5o6B4QMk0SI0CM0tiJDegTaBocKoUI2pP7-o6Qm0yb3G-UJkDyfV49rIjoJsFeP_nnVdweWh5H7nOWWN4nRly0cUXTQ5SOQKkB2Y6ypaVlFJQQ1f-1mi6dXRJri54HprHl7Ed6TNSyCFekoR2QbzXaKFfEO15y"/>
                    </div>
                    {/* Radial pattern overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-tertiary-container via-transparent to-transparent opacity-80"></div>
                    <div className="relative z-10 text-center px-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-full mb-6 shadow-2xl">
                            <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-4">Einsatzgebiet Zürcher Unterland</h3>
                        <p className="text-on-tertiary-container text-lg md:text-xl max-w-xl mx-auto">
                            Wir sind mobil für Sie unterwegs in Bülach und den angrenzenden Gemeinden. Genießen Sie professionelle Physiotherapie in Ihrer gewohnten Umgebung.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20">Bülach</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20">Eglisau</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20">Rafz</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20">Glattfelden</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
