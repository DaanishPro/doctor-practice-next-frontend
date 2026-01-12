"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [msgData, setMsgData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msgData)
      });
      
      if(res.ok) {
        setStatus("success");
        setMsgData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch(err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtitle: "Call us anytime",
      color: "from-blue-500 to-cyan-500",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@drcurewell.com",
      subtitle: "Send us an email",
      color: "from-cyan-500 to-teal-500",
      href: "mailto:contact@drcurewell.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Health Boulevard",
      subtitle: "Wellness City, NY 10001",
      color: "from-teal-500 to-cyan-500",
      href: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subtitle: "Sat: 10:00 AM - 4:00 PM",
      color: "from-cyan-500 to-blue-500",
      href: "#"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-linear-to-br from-slate-50 via-cyan-50/30 to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Get in <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Reach out to us directly or drop a message. We're here to help you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="bg-white p-6 rounded-2xl border border-slate-200 card-hover group text-center"
              >
                <div className={`inline-flex w-14 h-14 bg-linear-to-br ${info.color} rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-700 font-medium mb-1">{info.content}</p>
                <p className="text-slate-500 text-sm">{info.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-linear-to-br from-slate-50 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We're committed to providing excellent patient care and support. Whether you have a question about our services, need to schedule an appointment, or want to learn more about our practice, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-cyan-600 hover:text-cyan-700 font-medium">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Available during office hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                    <a href="mailto:contact@drcurewell.com" className="text-cyan-600 hover:text-cyan-700 font-medium">
                      contact@drcurewell.com
                    </a>
                    <p className="text-slate-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Clinic Address</h3>
                    <p className="text-slate-700">
                      123 Health Boulevard<br />
                      Wellness City, NY 10001<br />
                      United States
                    </p>
                    <p className="text-slate-500 text-sm mt-1">Free parking available</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-linear-to-br from-cyan-600 to-teal-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-3">
                  <MessageSquare className="shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
                    <p className="text-cyan-50 text-sm">
                      For medical emergencies, please call 911 or visit your nearest emergency room. For urgent non-emergency concerns, call our office directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
                  <p className="text-slate-500 text-sm">Fill out the form below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-700 font-semibold text-sm mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                    value={msgData.name}
                    onChange={(e) => setMsgData({...msgData, name: e.target.value})}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold text-sm mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={msgData.email}
                    onChange={(e) => setMsgData({...msgData, email: e.target.value})}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold text-sm mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    required 
                    value={msgData.subject}
                    onChange={(e) => setMsgData({...msgData, subject: e.target.value})}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400" 
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold text-sm mb-2">
                    Message
                  </label>
                  <textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5} 
                    required 
                    value={msgData.message}
                    onChange={(e) => setMsgData({...msgData, message: e.target.value})}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-slate-700 placeholder-slate-400 resize-none" 
                  />
                </div>

                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 size={20} />
                    <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                    <span className="font-medium">Failed to send message. Please try again.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-linear-to-r from-cyan-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

