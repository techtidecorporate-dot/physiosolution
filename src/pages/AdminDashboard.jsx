import React, { useState, useEffect } from 'react';
import { Users, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

// Layout components
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';

// Page components
import DashboardHome from '../components/admin/DashboardHome';
import Appointments from '../components/admin/Appointments';
import ContactSubmissions from '../components/admin/ContactSubmissions';

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const [statsData, setStatsData] = useState({
    appointmentsCount: 0,
    unreadAppointmentsCount: 0,
    contactsCount: 0,
    unreadContactsCount: 0,
    recentAppointments: [],
    notifications: []
  });

  useEffect(() => {
    const apptsRef = ref(db, 'appointments');
    const contactsRef = ref(db, 'contacts');

    const unsubAppts = onValue(apptsRef, (snap) => {
      const data = snap.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({
          id,
          patient: val.name,
          service: val.service,
          date: val.date,
          time: new Date(val.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          timestamp: val.timestamp,
          status: val.status || 'Confirmed',
        })).sort((a, b) => b.timestamp - a.timestamp);

        const unreadAppts = list.filter(a => a.status !== 'Read').length;

        setStatsData(prev => ({
          ...prev,
          appointmentsCount: list.length,
          unreadAppointmentsCount: unreadAppts,
          recentAppointments: list.slice(0, 5)
        }));
      }
    });

    const unsubContacts = onValue(contactsRef, (snap) => {
      const data = snap.val();
      if (data) {
        const contactList = Object.entries(data).map(([id, val]) => ({
          id,
          name: val.name,
          message: val.message,
          timestamp: val.timestamp,
          status: val.status,
        })).sort((a, b) => b.timestamp - a.timestamp);

        const unreadCount = contactList.filter(c => c.status === 'unread').length;

        setStatsData(prev => ({
          ...prev,
          contactsCount: contactList.length,
          unreadContactsCount: unreadCount,
          notifications: contactList.slice(0, 10)
        }));
      }
    });

    return () => {
      unsubAppts();
      unsubContacts();
    };
  }, []);

  const stats = [
    { label: 'Appointments', value: statsData.appointmentsCount, change: '+5%', icon: Calendar, color: 'text-tertiary-container' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome stats={stats} recentAppointments={statsData.recentAppointments} setActiveTab={setActiveTab} />;
      case 'appointments':
        return <Appointments />;
      case 'contacts':
        return <ContactSubmissions />;
      default:
        return <DashboardHome stats={stats} recentAppointments={statsData.recentAppointments} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex font-body">
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <AdminHeader
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          statsData={statsData}
          setActiveTab={setActiveTab}
        />

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
