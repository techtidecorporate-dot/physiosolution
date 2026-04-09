import React, { useState, useEffect } from 'react';
import { Search, Mail, Phone, Clock, Eye, Trash2, CheckCircle, MailOpen, Filter, ChevronDown } from 'lucide-react';
import { db } from '../../firebase';
import { ref, onValue, update, remove } from 'firebase/database';

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const contactsRef = ref(db, 'contacts');
    const unsubscribe = onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const contactList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).sort((a, b) => b.timestamp - a.timestamp);
        setContacts(contactList);
      } else {
        setContacts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (contactId) => {
    const contactRef = ref(db, `contacts/${contactId}`);
    await update(contactRef, { status: 'read' });
  };

  const deleteContact = async (contactId) => {
    if (window.confirm('Möchten Sie diese Nachricht wirklich löschen?')) {
      const contactRef = ref(db, `contacts/${contactId}`);
      await remove(contactRef);
      if (selectedContact?.id === contactId) setSelectedContact(null);
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch = c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || c.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const unreadCount = contacts.filter(c => c.status === 'unread').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-headline font-bold text-on-surface">Contact Submissions</h2>
          <p className="text-on-surface-variant text-sm">
            Messages received from the contact form • 
            <span className="text-primary font-bold ml-1">{unreadCount} unread</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 bg-surface border border-outline-variant rounded-xl px-3 py-2">
            <Filter size={16} className="text-on-surface-variant" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-sm font-medium outline-none cursor-pointer"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-16rem)]">
        {/* Contact List */}
        <div className="lg:col-span-2 bg-surface rounded-2xl border border-outline-variant shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-outline-variant">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full pl-9 pr-4 py-2 bg-surface-container-lowest text-sm border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-on-surface-variant text-sm">Loading messages...</div>
            ) : filteredContacts.length === 0 ? (
              <div className="p-8 text-center text-on-surface-variant text-sm">No messages found.</div>
            ) : filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => {
                  setSelectedContact(contact);
                  if (contact.status === 'unread') markAsRead(contact.id);
                }}
                className={`w-full p-4 flex items-start gap-3 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors text-left ${
                  selectedContact?.id === contact.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                } ${contact.status === 'unread' ? 'bg-surface-container-lowest' : ''}`}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    contact.status === 'unread'
                      ? 'bg-primary text-on-primary'
                      : 'bg-primary-container/20 text-primary'
                  }`}>
                    {contact.name?.charAt(0).toUpperCase()}
                  </div>
                  {contact.status === 'unread' && (
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-error rounded-full border-2 border-surface"></div>
                  )}
                </div>
                <div className="flex-grow overflow-hidden min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className={`text-sm truncate ${contact.status === 'unread' ? 'font-bold text-on-surface' : 'font-medium text-on-surface'}`}>
                      {contact.name}
                    </span>
                    <span className="text-[10px] text-on-surface-variant whitespace-nowrap ml-2">
                      {new Date(contact.timestamp).toLocaleDateString('de-CH', { day: '2-digit', month: 'short' })}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant truncate opacity-80">{contact.message}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail View */}
        <div className="lg:col-span-3 bg-surface rounded-2xl border border-outline-variant shadow-sm flex flex-col overflow-hidden">
          {selectedContact ? (
            <>
              {/* Detail Header */}
              <div className="p-6 border-b border-outline-variant flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl">
                    {selectedContact.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-lg">{selectedContact.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-0.5">
                      <span className="flex items-center gap-1"><Mail size={12} /> {selectedContact.email}</span>
                      <span className="flex items-center gap-1"><Phone size={12} /> {selectedContact.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    selectedContact.status === 'unread'
                      ? 'bg-primary-container/20 text-primary'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {selectedContact.status}
                  </span>
                  <button
                    onClick={() => deleteContact(selectedContact.id)}
                    className="p-2 hover:bg-error-container text-on-surface-variant hover:text-error rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex-grow p-6 overflow-y-auto">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
                  <Clock size={14} />
                  <span>
                    Received on {new Date(selectedContact.timestamp).toLocaleDateString('de-CH', {
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                    })} at {new Date(selectedContact.timestamp).toLocaleTimeString('de-CH', {
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-6">
                  <p className="text-on-surface leading-relaxed whitespace-pre-wrap">{selectedContact.message}</p>
                </div>

                {/* Quick Info Cards */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail size={16} className="text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">E-Mail</span>
                    </div>
                    <a href={`mailto:${selectedContact.email}`} className="text-sm font-medium text-primary hover:underline break-all">
                      {selectedContact.email}
                    </a>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone size={16} className="text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Telefon</span>
                    </div>
                    <a href={`tel:${selectedContact.phone}`} className="text-sm font-medium text-primary hover:underline">
                      {selectedContact.phone}
                    </a>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Datum</span>
                    </div>
                    <span className="text-sm font-medium text-on-surface">
                      {new Date(selectedContact.timestamp).toLocaleDateString('de-CH')}
                    </span>
                  </div>
                </div>

                {/* Reply Button */}
                <div className="mt-6">
                  <a
                    href={`mailto:${selectedContact.email}?subject=Re: Ihre Anfrage bei Physio Solution&body=Guten Tag ${selectedContact.name},%0D%0A%0D%0AVielen Dank für Ihre Nachricht.%0D%0A%0D%0A`}
                    className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20"
                  >
                    <Mail size={18} /> Reply via E-Mail
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-on-surface-variant p-8">
              <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-4">
                <MailOpen size={36} className="text-on-surface-variant/40" />
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-1">Select a message</h3>
              <p className="text-sm text-center max-w-xs">Choose a contact submission from the list to view the full details and reply.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSubmissions;
