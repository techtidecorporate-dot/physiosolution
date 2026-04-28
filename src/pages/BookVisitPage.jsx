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
    const [fileData, setFileData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    // Helper to convert file to Base64 string
    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const appointmentsRef = ref(db, 'appointments');
            const newAppointmentRef = push(appointmentsRef);

            await set(newAppointmentRef, {
                ...formData,
                prescriptionFile: fileData, // Saved as Base64 string in JSON
                timestamp: Date.now(),
                status: 'Confirmed'
            });

            setSuccess(true);
            setFormData({
                name: '', email: '', phone: '', date: '',
                verordnung: 'nein', service: 'Neurologische Erkrankungen', notes: ''
            });
            setFileData(null);
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error("Error saving appointment:", error);
            alert("Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.");
        }
        setLoading(false);
    };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            try {
                const base64 = await fileToBase64(selectedFile);
                setFileData(base64);
            } catch (err) {
                console.error("Error converting file:", err);
            }
        }
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
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1 block mb-2">Wunschdatum auswählen</label>

                                    <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                                        <div className="flex items-center justify-between mb-4 px-2">
                                            <span className="font-bold text-lg text-on-surface">
                                                {new Intl.DateTimeFormat('de-CH', { month: 'long', year: 'numeric' }).format(currentCalendarDate)}
                                            </span>
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentCalendarDate(new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() - 1, 1))}
                                                    className="p-2 hover:bg-surface-container rounded-xl transition-colors border border-outline-variant/20"
                                                >
                                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentCalendarDate(new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 1))}
                                                    className="p-2 hover:bg-surface-container rounded-xl transition-colors border border-outline-variant/20"
                                                >
                                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => (
                                                <span key={d} className="text-[10px] font-black uppercase text-on-surface-variant/40 py-2">{d}</span>
                                            ))}
                                            {Array.from({ length: (new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1).getDay() + 6) % 7 }).map((_, i) => (
                                                <div key={`empty-${i}`} className="p-2"></div>
                                            ))}
                                            {Array.from({ length: new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0).getDate() }).map((_, i) => {
                                                const day = i + 1;
                                                const d = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), day);
                                                const isSelected = selectedDay && d.toDateString() === selectedDay.toDateString();
                                                const isToday = d.toDateString() === new Date().toDateString();
                                                const isPast = d < new Date(new Date().setHours(0, 0, 0, 0));

                                                return (
                                                    <button
                                                        key={day}
                                                        type="button"
                                                        disabled={isPast}
                                                        onClick={() => {
                                                            setSelectedDay(d);
                                                            setSelectedTime('');
                                                            setFormData({ ...formData, date: d.toLocaleDateString('de-CH') });
                                                        }}
                                                        className={`p-2.5 text-sm rounded-xl transition-all relative group ${isSelected ? 'bg-[#166E41] text-white font-bold shadow-lg shadow-[#166E41]/30 rotate-3' :
                                                                isPast ? 'text-on-surface-variant/20 cursor-not-allowed' :
                                                                    'hover:bg-[#166E41]/10 text-on-surface font-medium border border-transparent hover:border-[#166E41]/20'
                                                            }`}
                                                    >
                                                        {day}
                                                        {isToday && !isSelected && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#166E41] rounded-full" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Time Slot Selection */}
                                    {selectedDay && (
                                        <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1 block mb-3">Verfügbare Zeitfenster</label>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                                {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map(slot => (
                                                    <button
                                                        key={slot}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedTime(slot);
                                                            setFormData({ ...formData, date: `${selectedDay.toLocaleDateString('de-CH')} um ${slot} Uhr` });
                                                        }}
                                                        className={`py-3 px-2 text-xs font-bold rounded-xl transition-all border ${selectedTime === slot
                                                                ? 'bg-[#166E41] text-white border-[#166E41] shadow-md -translate-y-1'
                                                                : 'bg-surface border-outline-variant/30 text-on-surface-variant hover:border-[#166E41] hover:text-[#166E41] hover:bg-[#166E41]/5'
                                                            }`}
                                                    >
                                                        {slot}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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
                                {formData.verordnung === 'ja' && (
                                    <div className="mt-4 px-1 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">Verordnung hochladen</label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            required
                                            className="block w-full text-sm text-on-surface-variant file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-[#166E41]/10 file:text-[#166E41] hover:file:bg-[#166E41]/20 transition-all cursor-pointer"
                                        />
                                        <p className="mt-2 text-[10px] text-on-surface-variant/60 font-medium">Bitte laden Sie Ihre ärztliche Verordnung als PDF oder Bild hoch.</p>
                                    </div>
                                )}
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
