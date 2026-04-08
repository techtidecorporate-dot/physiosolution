import React from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  ShieldCheck, 
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
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-outline text-on-surface font-medium hover:bg-surface-container transition-all">
            Download Report
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-medium hover:opacity-90 transition-all shadow-md shadow-primary/20">
            + New Patient
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Growth Overview</h3>
              <p className="text-on-surface-variant text-sm">Monthly patient enrollment</p>
            </div>
            <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-sm focus:outline-none ring-primary/20 focus:ring-2">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[45, 60, 40, 75, 90, 85, 110, 95, 120, 100, 140, 130].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h / 1.5}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className={`w-full rounded-t-lg transition-all duration-300 relative group cursor-pointer ${
                  i === 10 ? 'bg-primary' : 'bg-primary-container/30 hover:bg-primary/60'
                }`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-on-surface-variant font-medium px-1">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Side Card: Quick Stats */}
        <div className="bg-primary rounded-2xl p-8 text-on-primary shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="relative z-10">
            <ShieldCheck size={40} className="mb-6 text-secondary-fixed" />
            <h3 className="text-2xl font-bold mb-2">Secure Panel</h3>
            <p className="text-on-primary-container text-sm mb-8 opacity-90">
              Your administrator panel is encrypted and secure. All patient data is protected under Swiss data privacy laws.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></div>
                <span className="text-sm">2-Step Auth Active</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></div>
                <span className="text-sm">Server Status: Online</span>
              </div>
            </div>

            <button className="w-full mt-10 py-3 bg-white/10 backdrop-blur-md rounded-xl font-medium border border-white/20 hover:bg-white/20 transition-all">
              Security Logs
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-container/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-10 bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
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
              {recentAppointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">
                        {appt.patient.charAt(0)}
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
