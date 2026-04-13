import React from 'react';
import { Menu, X } from 'lucide-react';
import NotificationBell from './NotificationBell';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({ isSidebarOpen, setSidebarOpen, activeTab, statsData, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"
        >
          {!isSidebarOpen ? <Menu size={20} /> : <X size={20} />}
        </button>
        <h1 className="text-2xl font-headline font-bold text-primary capitalize">{activeTab}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <NotificationBell statsData={statsData} setActiveTab={setActiveTab} />
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 px-3 hover:bg-error/10 text-error rounded-xl transition-all font-bold text-xs"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Abmelden
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-primary-fixed overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Peter+Ulshoefer&background=166E41&color=fff" alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
