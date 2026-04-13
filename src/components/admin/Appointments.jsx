import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Search, MoreVertical, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { ref, onValue, remove } from 'firebase/database';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm('Möchten Sie diesen Termin wirklich löschen?')) {
      try {
        const apptRef = ref(db, `appointments/${id}`);
        await remove(apptRef);
        setMenuOpen(null);
      } catch (err) {
        console.error("Error deleting appointment:", err);
        alert("Fehler beim Löschen des Termins.");
      }
    }
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const blanks = Array.from({ length: firstDay });
  const days = Array.from({ length: daysInMonth });

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const appointmentsRef = ref(db, 'appointments');
    const unsubscribe = onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const apptList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).sort((a, b) => b.timestamp - a.timestamp);
        setAppointments(apptList);
      } else {
        setAppointments([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Appointments</h2>
          <p className="text-on-surface-variant text-sm">Schedule and manage your therapy sessions</p>
        </div>
        <div className="flex gap-3">
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Mini View */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface rounded-2xl border border-outline-variant p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-on-surface">{monthNames[month]} {year}</span>
              <div className="flex gap-1">
                <button onClick={handlePrevMonth} className="p-1 hover:bg-surface-container rounded"><ChevronLeft size={16} /></button>
                <button onClick={handleNextMonth} className="p-1 hover:bg-surface-container rounded"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {blanks.map((_, i) => (
                <div key={`blank-${i}`} className="py-1"></div>
              ))}
              {days.map((_, i) => {
                const dayDate = new Date(year, month, i + 1);
                const isSelected = selectedDate && dayDate.toDateString() === selectedDate.toDateString();
                const isToday = dayDate.toDateString() === new Date().toDateString();
                
                return (
                  <button 
                    key={i} 
                    onClick={() => setSelectedDate(isSelected ? null : dayDate)}
                    className={`py-1 text-xs rounded-lg transition-colors ${
                      isSelected ? 'bg-primary text-on-primary font-bold shadow-sm shadow-primary/30' : 
                      isToday ? 'bg-primary-container/20 text-primary font-bold' :
                      'hover:bg-surface-container text-on-surface'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-primary-container/10 border border-primary-container/20 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-primary mb-2">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Today's Total</span>
                <span className="font-bold">{appointments.length}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Total Requests</span>
                <span className="font-bold">{appointments.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between bg-surface p-4 rounded-2xl border border-outline-variant">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-on-surface">Appointment List</span>
              <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full text-xs font-medium text-on-surface-variant border border-outline-variant">
                <Clock size={14} /> Live tracking
              </div>
            </div>
            <div className="flex bg-surface-container-low rounded-xl px-3 py-2 border border-outline-variant w-64 items-center">
              <Search size={18} className="text-on-surface-variant mr-2" />
              <input
                type="text"
                placeholder="Search patients or dates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full text-on-surface"
              />
            </div>
          </div>

          <div className="space-y-3">
            {loading ? (
              <div className="p-8 text-center text-on-surface-variant">Loading appointments...</div>
            ) : appointments.length === 0 ? (
              <div className="p-8 text-center text-on-surface-variant bg-surface rounded-2xl border border-dashed border-outline-variant">No appointments found in database.</div>
            ) : appointments.filter(appt => {
              const matchesSearch = appt.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                    appt.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    appt.date?.toLowerCase().includes(searchTerm.toLowerCase());
              
              if (selectedDate) {
                const apptDate = new Date(appt.timestamp).toDateString();
                return matchesSearch && apptDate === selectedDate.toDateString();
              }
              return matchesSearch;
            }).map((appt) => (
              <div 
                key={appt.id} 
                onClick={() => setSelectedAppointment(appt)}
                className="bg-surface group hover:border-primary/30 border border-outline-variant rounded-2xl p-4 transition-all hover:shadow-md flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center border border-outline-variant group-hover:bg-primary/5 transition-colors">
                    <span className="text-lg font-bold text-primary leading-tight">{appt.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{appt.name}</h4>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1">
                      <span className="font-medium text-primary">{appt.service}</span> • {appt.date} • {appt.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${appt.status === 'Confirmed' ? 'bg-primary-container/20 text-primary' :
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                    {appt.status || 'Pending'}
                  </span>
                  <div className="flex items-center gap-2 relative">
                    {appt.prescriptionFile && (
                      <div className="flex items-center gap-2">
                        <FileText size={18} className="text-primary opacity-50" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#166E41]">Dokument</span>
                      </div>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(menuOpen === appt.id ? null : appt.id);
                      }}
                      className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"
                    >
                      <MoreVertical size={18} />
                    </button>

                    <AnimatePresence>
                      {menuOpen === appt.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setMenuOpen(null);
                            }} 
                          />
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute right-0 top-full mt-2 w-40 bg-surface rounded-xl shadow-xl border border-outline-variant z-20 py-2 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button 
                              onClick={() => {
                                setMenuOpen(null);
                                setSelectedAppointment(appt);
                              }}
                              className="w-full text-left px-4 py-2.5 text-xs font-bold text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2"
                            >
                              <Search size={14} /> Details anzeigen
                            </button>
                            <div className="h-[1px] bg-outline-variant/30 my-1" />
                            <button 
                              onClick={() => handleDelete(appt.id)}
                              className="w-full text-left px-4 py-2.5 text-xs font-bold text-error hover:bg-error/10 transition-colors flex items-center gap-2"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span> Löschen
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Detail Modal */}
      <AnimatePresence>
        {selectedAppointment && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAppointment(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-surface rounded-[32px] shadow-2xl overflow-hidden border border-outline-variant"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[24px] bg-[#166E41]/10 flex items-center justify-center border border-[#166E41]/20">
                      <span className="text-2xl font-black text-[#166E41]">{selectedAppointment.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-on-surface mb-1">{selectedAppointment.name}</h3>
                      <p className="text-[#166E41] font-bold text-sm tracking-wide uppercase">{selectedAppointment.service}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedAppointment(null)}
                    className="p-3 hover:bg-surface-container rounded-2xl transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-surface-container rounded-xl text-on-surface-variant">
                        <CalendarIcon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Wunschdatum</p>
                        <p className="font-bold text-on-surface">{selectedAppointment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-surface-container rounded-xl text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Telefon</p>
                        <p className="font-bold text-on-surface">{selectedAppointment.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-surface-container rounded-xl text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">E-Mail</p>
                        <p className="font-bold text-on-surface">{selectedAppointment.email || 'Nicht angegeben'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Zusätzliche Notizen</p>
                      <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant italic text-sm leading-relaxed text-on-surface">
                        {selectedAppointment.notes || 'Keine Notizen vorhanden.'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prescription Section */}
                {selectedAppointment.prescriptionFile && (
                  <div className="mt-8 p-6 bg-[#166E41]/5 rounded-[24px] border border-[#166E41]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-[#166E41]">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#166E41] uppercase tracking-widest">Ärztliche Verordnung</p>
                          <p className="text-sm font-bold text-on-surface">Dokument vorhanden</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => {
                            const win = window.open();
                            win.document.write(`<iframe src="${selectedAppointment.prescriptionFile}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
                          }}
                          className="px-6 py-3 bg-white hover:bg-surface-container-high text-[#166E41] rounded-xl font-black text-xs uppercase tracking-widest border border-[#166E41]/20 transition-all shadow-sm"
                        >
                          Vorschau
                        </button>
                        <a 
                          href={selectedAppointment.prescriptionFile} 
                          download={`prescription-${selectedAppointment.name.replace(/\s+/g, '-').toLowerCase()}`}
                          className="px-6 py-3 bg-[#166E41] hover:bg-[#125a35] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#166E41]/20 flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-[18px]">download</span>
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Appointments;

