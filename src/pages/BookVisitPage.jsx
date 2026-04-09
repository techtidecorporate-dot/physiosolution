import React, { useState } from 'react';
import { db } from '../firebase';
import { ref, push, set } from 'firebase/database';

const BookVisitPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        verordnung: 'nein',
        service: 'Neurologische Erkrankungen',
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const appointmentsRef = ref(db, 'appointments');
            const newAppointmentRef = push(appointmentsRef);
            await set(newAppointmentRef, {
                ...formData,
                timestamp: Date.now(),
                status: 'Confirmed' // Defaulting to confirmed as in the original mock
            });
            setSuccess(true);
            setFormData({
                name: '', email: '', phone: '', date: '', 
                verordnung: 'nein', service: 'Neurologische Erkrankungen', notes: ''
            });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error("Error saving appointment:", error);
            alert("Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.");
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-24 pb-24 px-8 bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col min-h-screen">
            <div className="max-w-3xl mx-auto w-full">
                {/* Form Section */}
                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-[#166E41] mb-4 font-headline tracking-tight">Terminanfrage senden</h1>
                        <p className="text-on-surface-variant font-medium">Hinterlassen Sie uns Ihre Daten, und wir melden uns umgehend bei Ihnen.</p>
                    </div>

                    {success ? (
                        <div className="bg-primary/10 border border-primary text-primary p-8 rounded-2xl text-center font-bold">
                            <h3 className="text-2xl mb-2">Erfolgreich gesendet!</h3>
                            <p>Wir haben Ihre Terminanfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Vollständiger Name</label>
                                    <input 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" 
                                        placeholder="Vorname Nachname" 
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">E-Mail Adresse</label>
                                    <input 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" 
                                        placeholder="beispiel@mail.ch" 
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Telefonnummer</label>
                                    <input 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" 
                                        placeholder="+41 00 000 00 00" 
                                        type="tel"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">Wunschdatum / Zeit</label>
                                    <input 
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" 
                                        placeholder="z.B. Dienstag Vormittag" 
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 py-4 border-y border-outline-variant/10">
                                <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#166E41]">description</span>
                                    Liegt eine ärztliche Verordnung vor?
                                </label>
                                <div className="flex gap-8 px-1">
                                    <label className="flex items-center gap-2 cursor-pointer group font-medium">
                                        <input 
                                            type="radio" 
                                            name="verordnung" 
                                            value="ja"
                                            checked={formData.verordnung === 'ja'}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-[#166E41]" 
                                        />
                                        <span>Ja</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group font-medium">
                                        <input 
                                            type="radio" 
                                            name="verordnung" 
                                            value="nein" 
                                            checked={formData.verordnung === 'nein'}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-[#166E41]" 
                                        />
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
                                <select 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium"
                                >
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
                                <textarea 
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-medium" 
                                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder bestehende Diagnosen..." 
                                    rows="4"
                                ></textarea>
                            </div>
                            <button 
                                disabled={loading}
                                className="w-full bg-[#166E41] hover:bg-[#125a35] text-white py-5 rounded-xl font-black text-lg shadow-xl transition-all active:scale-95 disabled:opacity-50" 
                                type="submit"
                            >
                                {loading ? 'Wird gesendet...' : 'Terminanfrage absenden'}
                            </button>
                        </form>
                    )}
                    
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
