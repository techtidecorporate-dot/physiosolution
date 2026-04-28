import React from 'react';
import { LayoutDashboard, Calendar, Mail, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../../public/images/logo.png';

const sidebarLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'contacts', label: 'Contacts', icon: Mail },
];

const AdminSidebar = ({ isSidebarOpen, activeTab, setActiveTab }) => {
  return (
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-surface border-r border-outline-variant transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50`}
    >
      <div className="px-6 py-8 flex items-center justify-center">
        {isSidebarOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <img src={Logo} alt="Physio Solution Logo" className="h-16 w-auto object-contain mb-4 drop-shadow-md" />

          </motion.div>
        ) : (
          <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
        )}
      </div>

      <nav className="flex-grow px-3 mt-4">
        {sidebarLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-1 transition-all group ${activeTab === link.id
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


    </aside>
  );
};

export default AdminSidebar;
