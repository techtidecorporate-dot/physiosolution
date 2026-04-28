import React, { useState } from 'react';
import { db } from '../firebase';
import { ref, push, set } from 'firebase/database';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const contactsRef = ref(db, 'contacts');
            const newContactRef = push(contactsRef);
            await set(newContactRef, {
                ...formData,
                timestamp: Date.now(),
                status: 'unread'
            });
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error("Error saving contact:", error);
            alert("Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.");
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

                        {success ? (
                            <div className="bg-primary/10 border border-primary text-primary p-6 rounded-xl text-center font-bold">
                                Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                            </div>
                        ) : (
                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none"
                                            placeholder="Vorname Nachname"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">E-Mail</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none"
                                            placeholder="beispiel@mail.ch"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Mobilnummer</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none"
                                        placeholder="07x xxx xx xx"
                                        type="tel"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Nachricht</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-[#166E41] bg-surface-container-lowest transition-all outline-none"
                                        placeholder="Wie können wir Ihnen helfen?"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    disabled={loading}
                                    className="mt-4 bg-[#166E41] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50"
                                    type="submit"
                                >
                                    {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        )}
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
                                        <p className="text-on-surface-variant leading-relaxed">Steinfeldstrasse 15a<br />8153 Rümlang</p>
                                        <p className="text-on-surface-variant leading-relaxed mt-2 text-sm italic">Hausbesuche in Bülach,<br />Zürcher Unterland &amp; Umgebung</p>
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

