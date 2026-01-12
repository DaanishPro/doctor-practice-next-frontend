"use client";
import { useEffect, useState } from "react";
import { MessageSquare, Mail, User, Clock, Search, Reply, Trash2, Phone, MapPin, CheckCircle2 } from "lucide-react";

interface Message {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
  read?: boolean;
}

interface ContactMessagesProps {
  compact?: boolean;
}

export default function ContactMessages({ compact = false }: ContactMessagesProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/messages`)
      .then(res => res.json())
      .then(data => {
        setMessages(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        console.log("Using sample messages data");
        setMessages([
          {
            name: "Jane Smith",
            email: "jane@example.com",
            subject: "Inquiry about full body checkup",
            message: "I would like to inquire about the charges for a full body checkup and the available time slots.",
            createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            read: false
          },
          {
            name: "Michael Brown",
            email: "michael@example.com",
            subject: "Appointment rescheduling",
            message: "Hello, I need to reschedule my appointment for next week. Could you please help me with this?",
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
            read: false
          },
          {
            name: "Sarah Johnson",
            email: "sarah@example.com",
            subject: "Medical records request",
            message: "I need a copy of my medical records from the last visit. How can I obtain these?",
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            read: true
          }
        ]);
        setLoading(false);
      });
  }, []);

  const formatTimeAgo = (dateString?: string) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(msg => !msg.read).length;
  const displayedMessages = compact ? filteredMessages.slice(0, 3) : filteredMessages;

  const handleReply = (email: string) => {
    window.location.href = `mailto:${email}?subject=Re: Your Inquiry`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 bg-linear-to-r from-slate-50 to-cyan-50/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                {compact ? "Recent Messages" : "Contact Messages"}
                {unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {compact ? "Latest messages" : `Total: ${filteredMessages.length} messages`}
              </p>
            </div>
          </div>
          
          {!compact && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-sm w-full sm:w-64"
              />
            </div>
          )}
        </div>
      </div>

      {/* Messages List */}
      <div className="divide-y divide-slate-100">
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 mt-4">Loading messages...</p>
          </div>
        ) : displayedMessages.length === 0 ? (
          <div className="p-12 text-center">
            <MessageSquare className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-medium">No messages found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search</p>
          </div>
        ) : (
          displayedMessages.map((message, index) => (
            <div
              key={message._id || index}
              className={`
                p-6 hover:bg-cyan-50/50 transition-colors cursor-pointer
                ${!message.read ? 'bg-blue-50/50' : ''}
              `}
              onClick={() => !compact && setSelectedMessage(message)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`
                      w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-lg 
                      flex items-center justify-center shrink-0
                    `}>
                      <User className="text-white" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900">{message.name}</h4>
                        {!message.read && (
                          <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Mail size={14} />
                        <span className="truncate">{message.email}</span>
                      </div>
                      <p className="font-semibold text-slate-700 mb-2">{message.subject}</p>
                      <p className="text-slate-600 text-sm line-clamp-2">{message.message}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-500 ml-13">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{formatTimeAgo(message.createdAt)}</span>
                    </div>
                  </div>
                </div>
                
                {!compact && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReply(message.email);
                      }}
                      className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                      title="Reply"
                    >
                      <Reply size={18} />
                    </button>
                  </div>
                )}
              </div>
              
              {compact && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReply(message.email);
                    }}
                    className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    <Reply size={16} />
                    <span>Reply</span>
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {compact && filteredMessages.length > 3 && (
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
          <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
            View All Messages →
          </button>
        </div>
      )}
    </div>
  );
}
