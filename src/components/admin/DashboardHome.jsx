import React from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  MoreVertical 
} from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardHome = ({ stats, recentAppointments }) => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-on-surface-variant font-medium mb-1">Welcome back, Admin</p>
          <h2 className="text-3xl font-headline font-extrabold text-on-surface">Overview Performance</h2>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-surface-container-low ${stat.color} transition-colors group-hover:bg-primary group-hover:text-on-primary`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-sm font-bold flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-primary' : 'text-error'}`}>
                {stat.change} <ArrowUpRight size={14} className={stat.change.startsWith('-') ? 'rotate-90' : ''} />
              </span>
            </div>
            <h3 className="text-on-surface-variant font-medium text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex items-center justify-between">
          <h3 className="text-xl font-bold text-on-surface">Recent Appointments</h3>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant">
                <th className="px-6 py-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-bold text-on-surface-variant uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {recentAppointments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-on-surface-variant">No appointments yet.</td>
                </tr>
              ) : recentAppointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                        {appt.patient?.charAt(0)}
                      </div>
                      <span className="font-medium text-on-surface">{appt.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant text-sm">{appt.service}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-on-surface text-sm font-medium">{appt.date}</span>
                      <span className="text-on-surface-variant text-xs flex items-center gap-1 italic">
                        <Clock size={12} /> {appt.time}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      appt.status === 'Confirmed' ? 'bg-primary-container/20 text-primary' :
                      appt.status === 'Pending' ? 'bg-secondary-fixed/20 text-secondary' :
                      'bg-error-container/20 text-error'
                    }`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant">
                      <MoreVertical size={16} />
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

export default DashboardHome;
