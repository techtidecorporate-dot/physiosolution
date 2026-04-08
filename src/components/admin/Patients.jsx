import React from 'react';
import { Search, Plus, Filter, MoreHorizontal, User } from 'lucide-react';

const Patients = () => {
  const patients = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+41 79 123 45 67', lastVisit: '2023-10-10', status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'm.chen@example.com', phone: '+41 78 987 65 43', lastVisit: '2023-10-08', status: 'Active' },
    { id: 3, name: 'Emma Wilson', email: 'emma.w@example.com', phone: '+41 76 543 21 09', lastVisit: '2023-09-25', status: 'Inactive' },
    { id: 4, name: 'James Miller', email: 'james.m@example.com', phone: '+41 79 000 11 22', lastVisit: '2023-10-12', status: 'Active' },
    { id: 5, name: 'Anna Schmidt', email: 'anna.s@example.com', phone: '+41 77 111 22 33', lastVisit: '2023-10-05', status: 'Active' },
    { id: 6, name: 'Robert Koch', email: 'r.koch@example.com', phone: '+41 78 444 55 66', lastVisit: '2023-09-30', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Patient Management</h2>
          <p className="text-on-surface-variant text-sm">Manage and monitor all patient records</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-sm">
          <Plus size={18} /> Add Patient
        </button>
      </div>

      <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row gap-4 justify-between bg-surface-container-lowest">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search patients by name, email..." 
              className="w-full pl-10 pr-4 py-2 bg-surface text-sm border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-xl text-sm font-medium hover:bg-surface-container-low transition-all">
              <Filter size={16} /> Filter
            </button>
            <select className="px-3 py-2 border border-outline-variant rounded-xl text-sm font-medium bg-surface focus:outline-none">
              <option>Sort by: Newest</option>
              <option>Sort by: Name (A-Z)</option>
              <option>Sort by: Last Visit</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant">
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{patient.name}</p>
                        <p className="text-xs text-on-surface-variant">ID: #PAT-{1000 + patient.id}</p>
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
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      patient.status === 'Active' ? 'bg-primary-container/20 text-primary' :
                      patient.status === 'Pending' ? 'bg-secondary-fixed/20 text-secondary' :
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
        
        <div className="p-4 border-t border-outline-variant flex items-center justify-between bg-surface-container-lowest">
          <p className="text-xs text-on-surface-variant">Showing 6 of 1,284 patients</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-outline-variant rounded-lg text-xs font-medium disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded-lg text-xs font-medium">1</button>
            <button className="px-3 py-1 border border-outline-variant rounded-lg text-xs font-medium hover:bg-surface-container">2</button>
            <button className="px-3 py-1 border border-outline-variant rounded-lg text-xs font-medium hover:bg-surface-container">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
