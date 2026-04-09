import React, { useState, useRef, useEffect } from 'react';
import { Bell, CalendarPlus, MessageSquare, Clock, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { ref, update } from 'firebase/database';

const getTimeAgo = (timestamp) => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

const NotificationBell = ({ statsData, setActiveTab }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [marking, setMarking] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allNotifications = [
    ...statsData.recentAppointments.map(a => ({
      id: a.id,
      type: 'appointment',
      title: `New appointment from ${a.patient}`,
      subtitle: `${a.service} • ${a.date}`,
      time: a.timestamp,
      isUnread: a.status !== 'Read',
      icon: CalendarPlus
    })),
    ...statsData.notifications.map(c => ({
      id: c.id,
      type: 'contact',
      title: `New message from ${c.name}`,
      subtitle: c.message?.substring(0, 60) + (c.message?.length > 60 ? '...' : ''),
      time: c.timestamp,
      isUnread: c.status === 'unread',
      icon: MessageSquare
    }))
  ].sort((a, b) => b.time - a.time).slice(0, 8);

  const totalNotifications = (statsData.unreadAppointmentsCount || 0) + statsData.unreadContactsCount;

  const markAllAsRead = async () => {
    setMarking(true);
    try {
      const updates = {};

      // Mark all unread contacts as read
      statsData.notifications.forEach(c => {
        if (c.status === 'unread') {
          updates[`contacts/${c.id}/status`] = 'read';
        }
      });

      // Mark all appointments as Read (not just recent 5)
      statsData.recentAppointments.forEach(a => {
        if (a.status !== 'Read') {
          updates[`appointments/${a.id}/status`] = 'Read';
        }
      });

      if (Object.keys(updates).length > 0) {
        await update(ref(db), updates);
      }
    } catch (error) {
      console.error('Error marking as read:', error);
    }
    setMarking(false);
  };

  return (
    <div className="relative" ref={notifRef}>
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors"
      >
        <Bell size={20} />
        {totalNotifications > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-surface">
            {totalNotifications > 99 ? '99+' : totalNotifications}
          </span>
        )}
      </button>

      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-12 w-96 bg-surface rounded-2xl border border-outline-variant shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-outline-variant flex items-center justify-between">
              <div>
                <h3 className="font-bold text-on-surface">Notifications</h3>
                <p className="text-xs text-on-surface-variant">{totalNotifications} new activities</p>
              </div>
              <div className="flex items-center gap-2">
                {totalNotifications > 0 && (
                  <button
                    onClick={markAllAsRead}
                    disabled={marking}
                    className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                  >
                    <CheckCheck size={14} />
                    {marking ? 'Marking...' : 'Mark all read'}
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto">
              {allNotifications.length === 0 ? (
                <div className="p-8 text-center text-on-surface-variant text-sm">No notifications yet.</div>
              ) : allNotifications.map((notif) => (
                <button
                  key={`${notif.type}-${notif.id}`}
                  onClick={() => {
                    setActiveTab(notif.type === 'appointment' ? 'appointments' : 'contacts');
                    setShowNotifications(false);
                  }}
                  className={`w-full px-5 py-3.5 flex items-start gap-3 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors text-left ${
                    notif.isUnread ? 'bg-primary/[0.03]' : ''
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    notif.type === 'appointment'
                      ? 'bg-primary-container/20 text-primary'
                      : 'bg-error/10 text-error'
                  }`}>
                    <notif.icon size={16} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className={`text-sm truncate ${notif.isUnread ? 'font-bold text-on-surface' : 'font-medium text-on-surface'}`}>
                      {notif.title}
                    </p>
                    <p className="text-xs text-on-surface-variant truncate mt-0.5">{notif.subtitle}</p>
                  </div>
                  <span className="text-[10px] text-on-surface-variant whitespace-nowrap flex-shrink-0 mt-0.5 flex items-center gap-1">
                    <Clock size={10} />
                    {getTimeAgo(notif.time)}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-outline-variant bg-surface-container-lowest">
              <button
                onClick={() => {
                  setActiveTab('contacts');
                  setShowNotifications(false);
                }}
                className="w-full text-center text-sm font-bold text-primary hover:underline"
              >
                View all activity
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBell;
