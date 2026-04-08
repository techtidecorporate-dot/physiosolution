import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign, ArrowUpRight, ArrowDownRight, BarChart3, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const kpis = [
    { label: 'Revenue Growth', value: 'CHF 12,450', change: '+12.5%', isPositive: true, icon: DollarSign },
    { label: 'New Patients', value: '45', change: '+18.2%', isPositive: true, icon: Users },
    { label: 'Session Frequency', value: '4.2', change: '-2.4%', isPositive: false, icon: Activity },
    { label: 'Avg. Rating', value: '4.9', change: '+0.1', isPositive: true, icon: BarChart3 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Data & Insights</h2>
          <p className="text-on-surface-variant text-sm">Real-time performance metrics and business growth</p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-xl border border-outline-variant">
          <button className="px-4 py-1.5 bg-surface rounded-lg shadow-sm text-sm font-bold text-primary">Monthly</button>
          <button className="px-4 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface">Quarterly</button>
          <button className="px-4 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface">Yearly</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-xl bg-primary-container/10 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <kpi.icon size={20} />
              </div>
              <div className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 ${kpi.isPositive ? 'bg-primary-container/20 text-primary' : 'bg-error-container/20 text-error'}`}>
                {kpi.change} {kpi.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
              </div>
            </div>
            <h3 className="text-on-surface-variant font-medium text-sm mb-1">{kpi.label}</h3>
            <p className="text-2xl font-bold text-on-surface">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Growth Chart Placeholder */}
        <div className="lg:col-span-2 bg-surface p-8 rounded-2xl border border-outline-variant">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" /> Revenue Overview
            </h3>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                <span>Previous</span>
              </div>
            </div>
          </div>
          
          <div className="h-72 flex items-end justify-between gap-4">
            {[45, 62, 55, 80, 95, 88, 70, 110, 105, 130, 145, 120].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-full group">
                <div className="w-full flex justify-center gap-0.5 h-64 items-end">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h / 1.5}%` }}
                    className="w-1/2 bg-primary rounded-t-full relative"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] py-1 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      CHF {h*10}
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(h * 0.7) / 1.5}%` }}
                    className="w-1/2 bg-primary/20 rounded-t-full"
                  />
                </div>
                <span className="text-[10px] text-on-surface-variant font-bold">M{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-8">
          <div className="bg-surface p-8 rounded-2xl border border-outline-variant">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <PieChart size={20} className="text-primary" /> Service Distribution
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Physiotherapy', value: 45, color: 'bg-primary' },
                { label: 'Manual Therapy', value: 25, color: 'bg-primary-container' },
                { label: 'Sports Massage', value: 20, color: 'bg-primary/40' },
                { label: 'Others', value: 10, color: 'bg-surface-container-high' },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-on-surface-variant">{item.label}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-6 text-on-primary shadow-lg shadow-primary/20">
            <h4 className="font-bold mb-2">Performance Achievement</h4>
            <p className="text-xs text-on-primary-container mb-6 italic opacity-90">You have reached 92% of your monthly goal!</p>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-white/10 stroke-current"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-secondary-fixed stroke-current"
                    strokeWidth="3"
                    strokeDasharray="92, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                  92%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
