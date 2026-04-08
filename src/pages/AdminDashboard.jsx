import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  BarChart3, 
  Settings as SettingsIcon, 
  LogOut, 
  Bell, 
  Search,
  LayoutDashboard,
  MessageSquare,
  Menu,
  X,
  TrendingUp,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import sub-pages
import DashboardHome from '../components/admin/DashboardHome';
import Patients from '../components/admin/Patients';
import Appointments from '../components/admin/Appointments';
import Analytics from '../components/admin/Analytics';
import Messages from '../components/admin/Messages';
import Settings from '../components/admin/Settings';

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Patients', value: '1,284', change: '+12%', icon: Users, color: 'text-primary' },
    { label: 'Appointments', value: '156', change: '+5%', icon: Calendar, color: 'text-tertiary-container' },
    { label: 'Total Revenue', value: 'CHF 45,200', change: '+18%', icon: TrendingUp, color: 'text-primary-container' },
    { label: 'Active Sessions', value: '12', change: '-2%', icon: Activity, color: 'text-secondary' },
  ];

  const recentAppointments = [
    { id: 1, patient: 'Sarah Johnson', service: 'Physiotherapy', date: 'Oct 12, 2023', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Michael Chen', service: 'Manual Therapy', date: 'Oct 12, 2023', time: '11:30 AM', status: 'Pending' },
    { id: 3, patient: 'Emma Wilson', service: 'Sports Massage', date: 'Oct 13, 2023', time: '02:00 PM', status: 'Confirmed' },
    { id: 4, patient: 'James Miller', service: 'Rehabilitation', date: 'Oct 13, 2023', time: '04:15 PM', status: 'Cancelled' },
  ];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome stats={stats} recentAppointments={recentAppointments} />;
      case 'patients':
        return <Patients />;
      case 'appointments':
        return <Appointments />;
      case 'analytics':
        return <Analytics />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardHome stats={stats} recentAppointments={recentAppointments} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex font-body">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-surface border-r border-outline-variant transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-secondary-fixed font-bold text-xl">V</span>
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-headline font-bold text-primary text-xl tracking-tight overflow-hidden whitespace-nowrap"
            >
              Vitality Swiss
            </motion.span>
          )}
        </div>

        <nav className="flex-grow px-3 mt-4">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-1 transition-all group ${
                activeTab === link.id 
                  ? 'bg-primary text-on-primary' 
                  : 'hover:bg-surface-container-low text-on-surface-variant'
              }`}
            >
              <link.icon size={22} className={activeTab === link.id ? 'text-secondary-fixed' : ''} />
              {isSidebarOpen && (
                <span className="font-medium">{link.label}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-error hover:bg-error-container transition-all">
            <LogOut size={22} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Header */}
        <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"
            >
              {isSidebarOpen ? <Menu size={20} /> : <X size={20} />}
            </button>
            <h1 className="text-2xl font-headline font-bold text-primary capitalize">{activeTab}</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant w-64">
              <Search size={18} className="text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-transparent border-none outline-none px-3 text-sm w-full"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
              </button>
              <div className="h-10 w-10 rounded-full border-2 border-primary-fixed overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin+Vitality&background=00551a&color=fff" alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Dashboard Content */}
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

