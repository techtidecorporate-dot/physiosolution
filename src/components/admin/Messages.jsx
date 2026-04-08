import React, { useState } from 'react';
import { Search, Send, MoreHorizontal, Phone, Video, Info, Check, CheckCheck, Plus } from 'lucide-react';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(1);

  const contacts = [
    { id: 1, name: 'Sarah Johnson', lastMessage: "I'd like to reschedule our session to tomorrow.", time: '10:45 AM', unread: 2, online: true },
    { id: 2, name: 'Michael Chen', lastMessage: 'The exercises are helping a lot, thank you!', time: 'Yesterday', unread: 0, online: true },
    { id: 3, name: 'Emma Wilson', lastMessage: 'Can you send me the invoice for September?', time: 'Oct 10', unread: 0, online: false },
    { id: 4, name: 'James Miller', lastMessage: 'I will be 5 minutes late for my appointment.', time: 'Oct 08', unread: 0, online: false },
    { id: 5, name: 'Anna Schmidt', lastMessage: 'Thank you for the consultation!', time: 'Oct 05', unread: 0, online: true },
  ];

  const messages = [
    { id: 1, text: "Hi Dr. Miller, I'm feeling some pain in my lower back after the last session.", sender: 'patient', time: '10:30 AM' },
    { id: 2, text: "Hello Sarah. I'm sorry to hear that. Where exactly is the pain located?", sender: 'me', time: '10:35 AM' },
    { id: 3, text: "It's more on the left side, especially when I try to bend forward.", sender: 'patient', time: '10:40 AM' },
    { id: 4, text: "Understood. Please avoid any heavy lifting today. I'd like to reschedule our session to tomorrow to check it.", sender: 'patient', time: '10:45 AM' },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
      {/* Contact List */}
      <div className="w-80 border-r border-outline-variant flex flex-col bg-surface-container-lowest">
        <div className="p-4 border-b border-outline-variant">
          <h3 className="text-xl font-bold text-on-surface mb-4">Messages</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-9 pr-4 py-2 bg-surface text-xs border border-outline-variant rounded-xl focus:outline-none"
            />
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {contacts.map((contact) => (
            <button 
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`w-full p-4 flex items-center gap-3 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors text-left ${
                activeChat === contact.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary font-bold">
                  {contact.name.charAt(0)}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-fixed rounded-full border-2 border-surface"></div>
                )}
              </div>
              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-bold text-sm text-on-surface">{contact.name}</span>
                  <span className="text-[10px] text-on-surface-variant whitespace-nowrap">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-on-surface-variant truncate opacity-80">{contact.lastMessage}</p>
                  {contact.unread > 0 && (
                    <span className="bg-primary text-on-primary text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-grow flex flex-col bg-surface">
        {/* Chat Header */}
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary font-bold">
              {contacts.find(c => c.id === activeChat)?.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-on-surface">{contacts.find(c => c.id === activeChat)?.name}</h4>
              <p className="text-[10px] text-secondary-fixed font-bold uppercase tracking-tight">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"><Phone size={20} /></button>
            <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"><Video size={20} /></button>
            <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"><Info size={20} /></button>
            <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"><MoreHorizontal size={20} /></button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-surface-container-lowest/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl text-sm ${
                msg.sender === 'me' 
                  ? 'bg-primary text-on-primary rounded-tr-none' 
                  : 'bg-surface border border-outline-variant text-on-surface rounded-tl-none'
              }`}>
                <p>{msg.text}</p>
                <div className={`flex items-center gap-1.5 mt-2 justify-end text-[10px] ${msg.sender === 'me' ? 'text-on-primary-container opacity-80' : 'text-on-surface-variant'}`}>
                  {msg.time}
                  {msg.sender === 'me' && <CheckCheck size={12} />}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center py-4">
            <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded-full">Today</span>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-outline-variant bg-surface">
          <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant">
            <button className="p-2 hover:bg-surface rounded-xl text-on-surface-variant transition-colors">
              <Plus size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Type your message here..." 
              className="flex-grow bg-transparent border-none outline-none px-2 text-sm text-on-surface"
            />
            <button className="bg-primary text-on-primary p-2.5 rounded-xl hover:opacity-90 transition-all shadow-md">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
