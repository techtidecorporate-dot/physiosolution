import React from 'react';

const BookVisitPage = () => {
    return (
        <div className="pt-24 pb-24 px-8 bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col min-h-screen">
            <div className="max-w-3xl mx-auto w-full">
                {/* Form Section */}
                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-[#166E41] mb-4 font-headline tracking-tight">Terminanfrage senden</h1>
                        <p className="text-on-surface-variant font-medium">Hinterlassen Sie uns Ihre Daten, und wir melden uns umgehend bei Ihnen.</p>
                    </div>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Vollständiger Name</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" placeholder="Vorname Nachname" type="text"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">E-Mail Adresse</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" placeholder="beispiel@mail.ch" type="email"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Telefonnummer</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" placeholder="+41 00 000 00 00" type="tel"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Wunschdatum / Zeit</label>
                                <input className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" placeholder="z.B. Dienstag Vormittag" type="text"/>
                            </div>
                        </div>
                        <div className="space-y-4 py-4 border-y border-outline-variant/10">
                            <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#166E41]">description</span>
                                Liegt eine ärztliche Verordnung vor?
                            </label>
                            <div className="flex gap-8 px-1">
                                <label className="flex items-center gap-2 cursor-pointer group font-medium">
                                    <input type="radio" name="verordnung" className="w-5 h-5 accent-[#166E41]" value="ja" />
                                    <span>Ja</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group font-medium">
                                    <input type="radio" name="verordnung" className="w-5 h-5 accent-[#166E41]" value="nein" defaultChecked />
                                    <span>Nein</span>
                                </label>
                            </div>
                            <div className="mt-4 px-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">Verordnung hochladen (optional)</label>
                                <input type="file" className="block w-full text-sm text-on-surface-variant file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-[#166E41]/10 file:text-[#166E41] hover:file:bg-[#166E41]/20 transition-all cursor-pointer" />
                            </div>
                        </div>
                        <div className="space-y-2 pt-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Gewünschte Leistung</label>
                            <select className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium">
                                <option>Neurologische Erkrankungen</option>
                                <option>Geriatrie & Pflege</option>
                                <option>Schwindel & Gleichgewicht</option>
                                <option>Atemtherapie</option>
                                <option>Chronische Wunden</option>
                                <option>Sonstiges</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Zusätzliche Informationen</label>
                            <textarea className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" placeholder="Beschreiben Sie kurz Ihr Anliegen oder bestehende Diagnosen..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-[#166E41] hover:bg-[#125a35] text-white py-5 rounded-xl font-black text-lg shadow-xl transition-all active:scale-95" type="submit">
                            Terminanfrage absenden
                        </button>
                    </form>
                    <div className="mt-12 pt-8 border-t border-outline-variant grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-[#166E41]">
                                <span className="material-symbols-outlined text-xl">call</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-on-surface-variant">Telefon</p>
                                <a className="text-[#166E41] font-bold hover:underline" href="tel:0783365540">078 336 55 40</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-[#166E41]">
                                <span className="material-symbols-outlined text-xl">mail</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-on-surface-variant">E-Mail</p>
                                <a className="text-[#166E41] font-bold hover:underline" href="mailto:info@physiosolutions.ch">info@physiosolutions.ch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookVisitPage;
