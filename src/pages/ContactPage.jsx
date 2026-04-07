import React from 'react';

const ContactPage = () => {
    return (
        <div className="pt-24 pb-24 bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-8 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="font-label text-sm uppercase tracking-widest text-[#166E41] font-bold flex items-center gap-4">
                        <span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]"></span></span>
                        Kontakt aufnehmen
                        <span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]"></span><span className="w-1.5 h-1.5 rounded-full bg-[#166E41]"></span></span>
                    </span>
                    <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-primary tracking-tight max-w-4xl">
                        Präzision in Bewegung.
                    </h1>
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mt-4">
                        Physiotherapeutische Hausbesuche in Bülach und im Zürcher Unterland. Wir bringen erstklassige therapeutische Betreuung direkt zu Ihnen nach Hause.
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
                                    <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none" placeholder="Vorname Nachname" type="text"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">E-Mail</label>
                                    <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none" placeholder="beispiel@mail.ch" type="email"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Mobilnummer</label>
                                <input className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none" placeholder="07x xxx xx xx" type="tel"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Nachricht</label>
                                <textarea className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none" placeholder="Wie können wir Ihnen helfen?" rows="4"></textarea>
                            </div>
                            <button className="mt-4 bg-[#166E41] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2" type="submit">
                                Nachricht senden
                                <span className="material-symbols-outlined">send</span>
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
                                        <h4 className="font-bold text-lg text-on-surface">Administration &amp; Post</h4>
                                        <p className="text-on-surface-variant leading-relaxed font-semibold">Keine Praxis vor Ort – nur Büro / Administration</p>
                                        <p className="text-on-surface-variant leading-relaxed">Steinfeldstrasse 15a<br/>8153 Rümlang</p>
                                        <p className="text-on-surface-variant leading-relaxed mt-2 text-sm italic">Hausbesuche in Bülach,<br/>Zürcher Unterland &amp; Umgebung</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-on-surface">Rufen Sie uns an</h4>
                                        <p className="text-on-surface-variant leading-relaxed font-bold">Mobil: 078 336 55 40</p>
                                        <p className="text-on-surface-variant leading-relaxed">Festnetz: 044 861 10 61</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-on-surface">E-Mail</h4>
                                        <p className="text-on-surface-variant leading-relaxed">info@physiosolutions.ch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Small Bento Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary-container p-6 rounded-xl flex flex-col gap-2">
                                <span className="text-3xl font-black text-on-secondary-container">25</span>
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
            

        </div>
    );
};

export default ContactPage;
