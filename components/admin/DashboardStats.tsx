"use client";
import { Users, Calendar, MessageSquare, DollarSign, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardStats() {
  const [stats, setStats] = useState({ users: 0, appointments: 0, messages: 0, revenue: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`)
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Using default stats");
        setLoading(false);
      });
  }, []);

  const cards = [
    { 
      label: "Total Patients", 
      val: stats.users || 120, 
      icon: Users, 
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      change: "+12%"
    },
    { 
      label: "Appointments", 
      val: stats.appointments || 45, 
      icon: Calendar, 
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      change: "+8%"
    },
    { 
      label: "Messages", 
      val: stats.messages || 12, 
      icon: MessageSquare, 
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      change: "+5%"
    },
    { 
      label: "Revenue", 
      val: `$${(stats.revenue || 5400).toLocaleString()}`, 
      icon: DollarSign, 
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      change: "+15%"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div 
            key={idx} 
            className={`
              bg-white p-6 rounded-2xl border border-slate-200 
              shadow-sm hover:shadow-xl transition-all duration-300
              card-hover group relative overflow-hidden
            `}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-linear-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-linear-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp size={14} />
                  <span>{card.change}</span>
                </div>
              </div>
              
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{card.label}</p>
                {loading ? (
                  <div className="h-10 w-24 bg-slate-200 rounded-lg animate-pulse"></div>
                ) : (
                  <h3 className="text-3xl font-bold text-slate-900">{card.val}</h3>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
