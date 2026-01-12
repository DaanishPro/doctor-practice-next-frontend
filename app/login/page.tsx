"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock, User, LogIn, UserPlus, Shield, AlertCircle, ShieldAlert } from "lucide-react";

function LoginContent() {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Logic to show "Enter Admin Credentials" message for direct URL hits
  useEffect(() => {
    const errorType = searchParams.get("error");
    if (errorType === "admin_only") {
      setError("Unauthorized access. Please enter Admin credentials to continue.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const endpoint = isLogin ? "/auth/login" : "/auth/register";
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        // 1. Store credentials
        localStorage.setItem("token", result.token);
        localStorage.setItem("userRole", result.user.role);
        localStorage.setItem("userName", result.user.name);

        // 2. Determine target path
        const targetPath = result.user.role === 'admin' ? '/admin' : '/';
        
        // 3. HARD REDIRECT: This ensures the Navbar.tsx reloads and detects the new token
        window.location.href = targetPath;

      } else {
        setError(result.msg || "Authentication failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-linear-to-br from-slate-50 via-cyan-50/30 to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Patient Portal
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            {isLogin ? (
              <>Welcome <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Back</span></>
            ) : (
              <>Create Your <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Account</span></>
            )}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {isLogin 
              ? "Sign in to access your medical records, appointments, and health information."
              : "Join our patient portal to manage your appointments and health records securely."}
          </p>
        </div>
      </section>

      <section className="section-padding -mt-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex w-16 h-16 bg-linear-to-br from-cyan-500 to-teal-600 rounded-2xl items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                {isLogin ? <LogIn className="text-white" size={32} /> : <UserPlus className="text-white" size={32} />}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {isLogin ? "Sign In to Your Account" : "Create New Account"}
              </h2>
            </div>

            {/* Error Message Box */}
            {error && (
              <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 animate-fade-in border ${error.includes("Admin") ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                {error.includes("Admin") ? <ShieldAlert className="shrink-0" size={20} /> : <AlertCircle className="shrink-0" size={20} />}
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <User size={16} className="text-cyan-600" />
                    Full Name
                  </label>
                  <input type="text" placeholder="John Doe" required value={data.name} onChange={(e) => setData({...data, name: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
                </div>
              )}

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                  <Mail size={16} className="text-cyan-600" />
                  Email Address
                </label>
                <input type="email" placeholder="john@example.com" required value={data.email} onChange={(e) => setData({...data, email: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                  <Lock size={16} className="text-cyan-600" />
                  Password
                </label>
                <input type="password" placeholder="Enter your password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value})} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-linear-to-r from-cyan-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <button onClick={() => {setIsLogin(!isLogin); setError("");}} className="text-cyan-600 hover:text-cyan-700 font-semibold">
                {isLogin ? "Create New Account" : "Sign In Instead"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}