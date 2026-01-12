"use client";
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Stethoscope, Send } from "lucide-react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", date: "", service: "", notes: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="appointment" className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-cyan-600 to-teal-600 px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Calendar className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Book an Appointment</h3>
            <p className="text-cyan-50 text-sm">Schedule your consultation with our expert medical team</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <User size={16} className="text-cyan-600" />
              Full Name
            </label>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe" 
              required 
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <Mail size={16} className="text-cyan-600" />
              Email Address
            </label>
            <input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="john@example.com" 
              required 
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <Phone size={16} className="text-cyan-600" />
              Phone Number
            </label>
            <input 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+1 (555) 123-4567" 
              required 
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <Clock size={16} className="text-cyan-600" />
              Preferred Date & Time
            </label>
            <input 
              name="date" 
              type="datetime-local" 
              value={formData.date} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700" 
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <Stethoscope size={16} className="text-cyan-600" />
            Service Type
          </label>
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700"
          >
            <option value="">Select a service</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Lab Diagnostics">Lab Diagnostics</option>
          </select>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="text-slate-700 font-semibold text-sm">Additional Notes (Optional)</label>
          <textarea 
            name="notes" 
            value={formData.notes} 
            onChange={handleChange} 
            placeholder="Describe your symptoms or any special requirements..." 
            rows={4} 
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400 resize-none" 
          />
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Appointment booked successfully! We'll contact you shortly.</span>
          </div>
        )}
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-linear-to-r from-cyan-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Booking...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Confirm Appointment</span>
            </>
          )}
        </button>

        <p className="text-center text-slate-500 text-sm">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
}
