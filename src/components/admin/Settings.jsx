import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Database, Shield, Palette, Eye, Mail } from 'lucide-react';

const Settings = () => {
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

  const settingsLinks = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'display', label: 'Display', icon: Palette },
    { id: 'data', label: 'Data & Privacy', icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-headline font-bold text-on-surface">Settings</h2>
        <p className="text-on-surface-variant text-sm">Manage your account preferences and system configuration</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 space-y-1">
          {settingsLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => setActiveSettingsTab(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeSettingsTab === link.id 
                  ? 'bg-primary text-on-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow space-y-8 max-w-3xl">
          {/* Profile Section */}
          <div className="bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm space-y-8">
            <div className="flex items-center gap-6 pb-8 border-b border-outline-variant">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-primary-container/20 flex items-center justify-center text-primary text-3xl font-bold border-2 border-primary/20">
                  AV
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-lg border-2 border-surface">
                  <Palette size={14} />
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">Admin User</h3>
                <p className="text-sm text-on-surface-variant mb-4">administrator@vitality-swiss.ch</p>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-primary text-on-primary text-xs font-bold rounded-lg">Upload Photo</button>
                  <button className="px-4 py-1.5 border border-outline-variant text-xs font-bold rounded-lg hover:bg-surface-container">Remove</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Admin Vitality" 
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input 
                    type="email" 
                    defaultValue="admin@vitality-swiss.ch" 
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Phone Number</label>
                <input 
                  type="text" 
                  defaultValue="+41 79 000 00 00" 
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Language</label>
                <select className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm appearance-none">
                  <option>German (Schweiz)</option>
                  <option>English (UK)</option>
                  <option>French (Suisse)</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant flex justify-end gap-3">
              <button className="px-6 py-2.5 border border-outline-variant text-sm font-bold rounded-xl hover:bg-surface-container">Cancel</button>
              <button className="px-6 py-2.5 bg-primary text-on-primary text-sm font-bold rounded-xl shadow-lg shadow-primary/20">Save Changes</button>
            </div>
          </div>

          {/* Security Alert Section */}
          <div className="bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-error-container/20 text-error">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Two-Factor Authentication</h4>
                  <p className="text-xs text-on-surface-variant">Add an extra layer of security to your account</p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none ring-4 ring-primary/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
