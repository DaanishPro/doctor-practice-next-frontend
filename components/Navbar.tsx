"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Calendar, LogIn, LogOut, User as UserIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push("/login");
    
    // Refresh the page to clear any user-specific data from state
    window.location.reload();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-100" 
        : "bg-white/80 backdrop-blur-md shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">DC</span>
            </div>
            <div>
              <span className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Dr. CureWell
              </span>
              <p className="text-xs text-slate-500 font-medium">Healthcare Excellence</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-5 py-2.5 text-slate-700 hover:text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors">Home</Link>
            <Link href="/about" className="px-5 py-2.5 text-slate-700 hover:text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors">About Us</Link>
            <Link href="/services" className="px-5 py-2.5 text-slate-700 hover:text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors">Services</Link>
            <Link href="/contact" className="px-5 py-2.5 text-slate-700 hover:text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors">Contact Us</Link>
            
            {/* LOGOUT / LOGIN TOGGLE */}
            {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="px-5 py-2.5 text-red-600 font-bold flex items-center gap-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={18} /> Logout
                </button>
            ) : (
                <Link 
                  href="/login" 
                  className="px-5 py-2.5 text-slate-700 hover:text-cyan-600 font-medium rounded-lg hover:bg-cyan-50 transition-colors"
                >
                  Login
                </Link>
            )}
            
            <Link 
              href="/#appointment" 
              className="ml-4 bg-linear-to-r from-cyan-600 to-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar size={18} />
              Get Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 hover:bg-cyan-50 rounded-xl">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 hover:bg-cyan-50 rounded-xl">About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 hover:bg-cyan-50 rounded-xl">Contact Us</Link>
          
          {isLoggedIn ? (
              <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-red-600 font-bold flex items-center gap-2">
                <LogOut size={18} /> Logout
              </button>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-700 hover:bg-cyan-50 rounded-xl">Login</Link>
          )}

          <Link href="/#appointment" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-linear-to-r from-cyan-600 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg">
            Get Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}