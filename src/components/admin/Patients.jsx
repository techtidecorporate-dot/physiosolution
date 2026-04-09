import React, { useState, useEffect } from 'react';
import { Search, Plus, Filter, MoreHorizontal, User } from 'lucide-react';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contactsRef = ref(db, 'contacts');
    const unsubscribe = onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const patientList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).sort((a, b) => b.timestamp - a.timestamp);
        setPatients(patientList);
      } else {
        setPatients([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Leads & Contacts</h2>
          <p className="text-on-surface-variant text-sm">Manage entries from the contact form</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-sm">
          <Plus size={18} /> Add Entry
        </button>
      </div>

      <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between bg-surface-container-lowest">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email..." 
              className="w-full pl-10 pr-4 py-2 bg-surface text-sm border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-xl text-sm font-medium hover:bg-surface-container-low transition-all">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant">
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-on-surface-variant">Loading entries...</td>
                </tr>
              ) : patients.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-on-surface-variant">No entries found.</td>
                </tr>
              ) : patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{patient.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-on-surface">{patient.email}</span>
                      <span className="text-xs text-on-surface-variant">{patient.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface">
                    {new Date(patient.timestamp).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      patient.status === 'unread' ? 'bg-primary-container/20 text-primary' :
                      'bg-surface-variant text-on-surface-variant'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;

