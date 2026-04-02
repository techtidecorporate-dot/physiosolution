import React from 'react';

const BookVisitPage = () => {
    return (
        <div className="pt-24 pb-24 px-8 bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col min-h-screen">
            <div className="max-w-3xl mx-auto w-full">
                {/* Form Section */}
                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">Terminanfrage senden</h1>
                        <p className="text-on-surface-variant">Hinterlassen Sie uns Ihre Daten, und wir melden uns umgehend bei Ihnen.</p>
                    </div>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Vollständiger Name</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Vorname Nachname" type="text"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">E-Mail Adresse</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="beispiel@mail.ch" type="email"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Telefonnummer</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="+41 00 000 00 00" type="tel"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Wunschdatum / Zeit</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="z.B. Dienstag Vormittag" type="text"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Gewünschte Leistung</label>
                            <select className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all">
                                <option>Neurologie</option>
                                <option>Geriatrie</option>
                                <option>Schwindeltherapie</option>
                                <option>Orthopädie</option>
                                <option>Manuelle Lymphdrainage</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Zusätzliche Informationen</label>
                            <textarea className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Beschreiben Sie kurz Ihr Anliegen oder bestehende Diagnosen..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-br from-[#00551a] to-[#007025] text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-transform active:scale-95" type="submit">
                            Terminanfrage absenden
                        </button>
                    </form>
                    <div className="mt-12 pt-8 border-t border-outline-variant grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-xl">call</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-on-surface-variant">Telefon</p>
                                <a className="text-primary font-bold hover:underline" href="tel:+41000000000">+41 00 000 00 00</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-xl">mail</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-on-surface-variant">E-Mail</p>
                                <a className="text-primary font-bold hover:underline" href="mailto:info@physiosolution.ch">info@physiosolution.ch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookVisitPage;
