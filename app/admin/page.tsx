"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardStats from "@/components/admin/DashboardStats";
import UserAppointments from "@/components/admin/UserAppointment";
import ContactMessages from "@/components/admin/ContactMessages";
import { 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X,
  Shield,
  User,
  ChevronRight,
  Lock
} from "lucide-react";

type ActiveView = "dashboard" | "appointments" | "messages";

export default function AdminPage() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminName, setAdminName] = useState("Admin User");
  const router = useRouter();

  // SECURITY GUARD: Check authentication on direct URL access
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (!token || role !== "admin") {
      // Redirect to login with error query for direct URL request hits
      router.push("/login?error=admin_only");
    } else {
      // Allow viewing only if token exists and role is admin
      setIsAuthorized(true);
      
      // Fetch admin name from API
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin/admin-name?token=${token}`;
      console.log("Fetching admin name from:", apiUrl);
      
      fetch(apiUrl)
        .then(res => {
          console.log("Response status:", res.status);
          if (!res.ok) {
            return res.json().then(errData => {
              console.error("API Error:", errData);
              throw new Error(errData.msg || `HTTP error! status: ${res.status}`);
            });
          }
          return res.json();
        })
        .then(data => {
          console.log("API Response:", data);
          if (data && data.name) {
            setAdminName(data.name);
          } else {
            console.error("Admin name not found in response:", data);
          }
        })
        .catch(err => {
          console.error("Error fetching admin name:", err);
        });
    }
  }, [router]);

  const handleLogout = () => {
    // 1. Clear all authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");

    // 2. Redirect to Home page and force a hard refresh to update the Navbar
    window.location.href = "/"; 
  };

  const menuItems = [
    { id: "dashboard" as ActiveView, label: "Dashboard", icon: LayoutDashboard },
    { id: "appointments" as ActiveView, label: "Appointments", icon: Calendar },
    { id: "messages" as ActiveView, label: "Messages", icon: MessageSquare },
  ];

  // Prevent UI rendering until authorization is verified
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Lock className="text-cyan-500 animate-bounce mx-auto mb-4" size={48} />
          <p className="text-white font-medium">Verifying Secure Access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-cyan-50/30 flex animate-fade-in">
      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-72 bg-linear-to-b from-slate-900 to-slate-800 text-white
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
        shadow-2xl
      `}>
        {/* Logo/Brand */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <p className="text-slate-400 text-xs">{adminName}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3.5 rounded-xl
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-linear-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30' 
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }
                  group
                `}
              >
                <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
                <span className="font-medium flex-1 text-left">{item.label}</span>
                {isActive && <ChevronRight size={18} className="text-white" />}
              </button>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-slate-700/50 space-y-3">
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-700/30 rounded-xl">
            <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
              <User className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">{adminName}</p>
              <p className="text-slate-400 text-xs">Administrator</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-red-500/20 rounded-xl transition-all duration-200 group"
          >
            <LogOut size={20} className="text-slate-400 group-hover:text-red-400" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 capitalize">
                    {activeView === "dashboard" ? "Dashboard Overview" : activeView + " Management"}
                  </h1>
                  <p className="text-slate-500 text-sm mt-0.5">
                    {activeView === "dashboard" && "Monitor your clinic's performance and statistics"}
                    {activeView === "appointments" && "View and manage patient appointments"}
                    {activeView === "messages" && "Review and respond to patient inquiries"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">{adminName}</p>
                    <p className="text-xs text-slate-500">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto text-slate-900">
          <div className="max-w-7xl mx-auto">
            {activeView === "dashboard" && (
              <div className="space-y-8 animate-fade-in">
                <DashboardStats />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <UserAppointments compact={true} />
                  </div>
                  <div>
                    <ContactMessages compact={true} />
                  </div>
                </div>
              </div>
            )}

            {activeView === "appointments" && (
              <div className="animate-fade-in">
                <UserAppointments compact={false} />
              </div>
            )}

            {activeView === "messages" && (
              <div className="animate-fade-in">
                <ContactMessages compact={false} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}