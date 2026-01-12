import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Dr. CureWell
                </h3>
                <p className="text-xs text-slate-400 font-medium">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Providing world-class healthcare with a focus on patient comfort, advanced medical technology, and compassionate care. Your health and well-being are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Patient Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    123 Health Boulevard<br />
                    Wellness City, NY 10001<br />
                    United States
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">contact@drcurewell.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Stay Connected</h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for health tips, clinic updates, and wellness advice.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
                <button className="px-6 py-3 bg-linear-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
              <Link 
                href="/#appointment" 
                className="block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl font-semibold border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Dr. CureWell. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>for your health</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
