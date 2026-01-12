"use client";
import { useEffect, useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Search, Filter, MoreVertical, CheckCircle2, XCircle, Clock as ClockIcon } from "lucide-react";

interface Appointment {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  status?: string;
  notes?: string;
}

interface UserAppointmentsProps {
  compact?: boolean;
}

export default function UserAppointments({ compact = false }: UserAppointmentsProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/appointments`)
      .then(res => res.json())
      .then(data => {
        setAppointments(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        console.log("Using sample appointments data");
        setAppointments([
          {
            name: "John Doe",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            date: "2024-12-24T10:00:00",
            service: "Cardiology",
            status: "pending"
          },
          {
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "+1 (555) 234-5678",
            date: "2024-12-25T14:30:00",
            service: "General Consultation",
            status: "confirmed"
          },
          {
            name: "Robert Johnson",
            email: "robert@example.com",
            phone: "+1 (555) 345-6789",
            date: "2024-12-26T09:00:00",
            service: "Pediatrics",
            status: "pending"
          }
        ]);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusBadge = (status: string = "pending") => {
    const statusConfig = {
      pending: { 
        icon: ClockIcon, 
        bg: "bg-yellow-50", 
        text: "text-yellow-700", 
        border: "border-yellow-200",
        label: "Pending"
      },
      confirmed: { 
        icon: CheckCircle2, 
        bg: "bg-green-50", 
        text: "text-green-700", 
        border: "border-green-200",
        label: "Confirmed"
      },
      cancelled: { 
        icon: XCircle, 
        bg: "bg-red-50", 
        text: "text-red-700", 
        border: "border-red-200",
        label: "Cancelled"
      },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1.5 ${config.bg} ${config.text} ${config.border} border px-3 py-1.5 rounded-lg text-xs font-semibold`}>
        <Icon size={14} />
        <span>{config.label}</span>
      </span>
    );
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const displayedAppointments = compact ? filteredAppointments.slice(0, 5) : filteredAppointments;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 bg-linear-to-r from-slate-50 to-cyan-50/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="text-cyan-600" size={24} />
              {compact ? "Recent Appointments" : "All Appointments"}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {compact ? "Latest 5 appointments" : `Total: ${filteredAppointments.length} appointments`}
            </p>
          </div>
          
          {!compact && (
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-sm w-full sm:w-64"
                />
              </div>
              
              {/* Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-sm appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 mt-4">Loading appointments...</p>
          </div>
        ) : displayedAppointments.length === 0 ? (
          <div className="p-12 text-center">
            <Calendar className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-medium">No appointments found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                {!compact && <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedAppointments.map((appointment, index) => (
                <tr key={appointment._id || index} className="hover:bg-cyan-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shrink-0">
                        <User className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{appointment.name}</p>
                        <p className="text-sm text-slate-500">{appointment.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-700 font-medium">{appointment.service}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-sm">{formatDate(appointment.date)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <Phone size={14} className="text-slate-400" />
                        <span>{appointment.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(appointment.status)}
                  </td>
                  {!compact && (
                    <td className="px-6 py-4">
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {compact && filteredAppointments.length > 5 && (
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
          <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
            View All Appointments →
          </button>
        </div>
      )}
    </div>
  );
}
