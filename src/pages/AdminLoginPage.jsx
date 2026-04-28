import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (email !== 'peter@ulshoefer.net') {
            setError('Zugriff verweigert. Nur autorisierte Admins können sich anmelden.');
            setLoading(false);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (err) {
            console.error("Login Error:", err);
            setError('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Daten.');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-6 font-manrope">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10 border border-outline-variant"
            >
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-[#166E41]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-[#166E41] text-3xl">admin_panel_settings</span>
                    </div>
                    <h1 className="text-3xl font-black text-on-surface mb-2 tracking-tight">Admin Login</h1>
                    <p className="text-on-surface-variant text-sm font-medium">Melden Sie sich an, um das Dashboard zu verwalten.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">E-Mail Adresse</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="admin@physiosolution.ch"
                            className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-bold text-on-surface"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant px-1">Passwort</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full px-5 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-[#166E41]/20 transition-all font-bold text-on-surface"
                        />
                    </div>

                    {error && (
                        <div className="p-4 bg-error-container/20 border border-error/20 rounded-xl text-error text-xs font-bold animate-in fade-in slide-in-from-top-2">
                            {error}
                        </div>
                    )}

                    <button 
                        disabled={loading}
                        type="submit"
                        className="w-full bg-[#166E41] hover:bg-[#125a35] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#166E41]/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {loading ? 'Anmeldung...' : (
                            <>
                                Login <span className="material-symbols-outlined text-xl">login</span>
                            </>
                        )}
                    </button>
                    
                    <a href="/" className="block text-center text-xs font-bold text-on-surface-variant hover:text-primary transition-colors mt-6">
                        Zurück zur Website
                    </a>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLoginPage;
