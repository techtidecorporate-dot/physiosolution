import React from 'react';
import { Menu, X } from 'lucide-react';
import NotificationBell from './NotificationBell';

const AdminHeader = ({ isSidebarOpen, setSidebarOpen, activeTab, statsData, setActiveTab }) => {
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
          <div className="h-10 w-10 rounded-full border-2 border-primary-fixed overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin+Vitality&background=00551a&color=fff" alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
