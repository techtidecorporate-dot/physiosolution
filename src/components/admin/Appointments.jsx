import React from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Filter, Search, MoreVertical } from 'lucide-react';

const Appointments = () => {
  const appointments = [
    { id: 1, patient: 'Sarah Johnson', time: '09:00 AM', duration: '45 min', service: 'Physiotherapy', therapist: 'Dr. Miller', status: 'Upcoming' },
    { id: 2, patient: 'Michael Chen', time: '10:15 AM', duration: '60 min', service: 'Manual Therapy', therapist: 'Dr. Schmidt', status: 'Ongoing' },
    { id: 3, patient: 'Emma Wilson', time: '11:30 AM', duration: '30 min', service: 'Consultation', therapist: 'Dr. Miller', status: 'Upcoming' },
    { id: 4, patient: 'James Miller', time: '02:00 PM', duration: '45 min', service: 'Sports Massage', therapist: 'Dr. Koch', status: 'Pending' },
    { id: 5, patient: 'Anna Schmidt', time: '03:15 PM', duration: '60 min', service: 'Rehabilitation', therapist: 'Dr. Schmidt', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Appointments</h2>
          <p className="text-on-surface-variant text-sm">Schedule and manage your therapy sessions</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-xl font-medium hover:bg-surface-container-low transition-all">
            <CalendarIcon size={18} /> View Calendar
          </button>
          <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-sm">
            + New Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Mini View */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface rounded-2xl border border-outline-variant p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-on-surface">October 2023</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-surface-container rounded"><ChevronLeft size={16} /></button>
                <button className="p-1 hover:bg-surface-container rounded"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: 31 }).map((_, i) => (
                <button 
                  key={i} 
                  className={`py-1 text-xs rounded-lg transition-colors ${
                    i + 1 === 12 ? 'bg-primary text-on-primary font-bold shadow-sm shadow-primary/30' : 
                    [10, 15, 20].includes(i+1) ? 'bg-primary-container/20 text-primary font-medium' :
                    'hover:bg-surface-container'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary-container/10 border border-primary-container/20 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-primary mb-2">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Today's Total</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Completed</span>
                <span className="font-bold">4</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Remaining</span>
                <span className="font-bold">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between bg-surface p-4 rounded-2xl border border-outline-variant">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-on-surface">Today, Oct 12</span>
              <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full text-xs font-medium text-on-surface-variant border border-outline-variant">
                <Clock size={14} /> 12:48 PM
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded-xl hover:bg-surface-container transition-all">
                <Search size={18} className="text-on-surface-variant" />
              </button>
              <button className="p-2 border border-outline-variant rounded-xl hover:bg-surface-container transition-all">
                <Filter size={18} className="text-on-surface-variant" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {appointments.map((appt) => (
              <div key={appt.id} className="bg-surface group hover:border-primary/30 border border-outline-variant rounded-2xl p-4 transition-all hover:shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex flex-col items-center justify-center border border-outline-variant group-hover:bg-primary/5 transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">{appt.time.split(' ')[1]}</span>
                    <span className="text-lg font-bold text-primary leading-tight">{appt.time.split(':')[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{appt.patient}</h4>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1">
                      <span className="font-medium text-primary">{appt.service}</span> • {appt.duration} • {appt.therapist}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    appt.status === 'Ongoing' ? 'bg-secondary-fixed text-on-secondary-fixed ring-4 ring-secondary-fixed/10' :
                    appt.status === 'Upcoming' ? 'bg-primary-container/20 text-primary' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {appt.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-surface-container-low text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all">
                      Reschedule
                    </button>
                    <button className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant font-medium hover:bg-surface-container-low hover:border-primary/20 transition-all flex items-center justify-center gap-2">
            + Schedule an appointment for tomorrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
