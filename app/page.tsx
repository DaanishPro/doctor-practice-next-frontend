import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Appointment from "@/components/Appointment";
import { Activity, Heart, ShieldCheck, Users, Award, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Overpowering */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-linear-to-br from-slate-50 via-cyan-50/30 to-teal-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-cyan-200 px-4 py-2 rounded-full shadow-sm">
                <Award className="text-cyan-600" size={18} />
                <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">Leading Medical Excellence</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                  Your Health, Our
                  <span className="block bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                    Top Priority
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                  Experience world-class healthcare with Dr. CureWell. We combine advanced medical technology with compassionate care to ensure the well-being of you and your family.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, text: "Quick Appointments" },
                  { icon: ShieldCheck, text: "Certified Experts" },
                  { icon: Heart, text: "Compassionate Care" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-200">
                    <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <span className="font-semibold text-slate-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="#appointment" 
                  className="bg-linear-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Book Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[600px] animate-fade-in">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-teal-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2070" 
                  alt="Professional Doctor" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm font-medium">4.9/5 from 2,500+ patients</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-slate-900">15+</p>
                      <p className="text-slate-600 text-sm">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-cyan-600 to-teal-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Patients", val: "10k+", desc: "Trusted by thousands" },
              { icon: ShieldCheck, label: "Years Experience", val: "15+", desc: "Expert care" },
              { icon: Heart, label: "Successful Treatments", val: "500+", desc: "Positive outcomes" },
              { icon: Activity, label: "Medical Specialties", val: "12+", desc: "Comprehensive care" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="inline-flex w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl items-center justify-center mb-2">
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white">{stat.val}</h3>
                <p className="text-lg font-semibold text-white/90">{stat.label}</p>
                <p className="text-sm text-white/70">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality healthcare with state-of-the-art facilities and compassionate service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Certified Expertise",
                desc: "Board-certified physicians with years of experience in their respective specialties.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Activity,
                title: "Advanced Technology",
                desc: "Cutting-edge medical equipment and diagnostic tools for accurate assessments.",
                color: "from-cyan-500 to-teal-500"
              },
              {
                icon: Heart,
                title: "Patient-Centered Care",
                desc: "Personalized treatment plans tailored to each patient's unique needs and circumstances.",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-200 card-hover group"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-linear-to-br from-slate-50 to-cyan-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Book Your Visit
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Ready to Schedule Your Appointment?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you immediately to confirm your appointment.
            </p>
          </div>
          <Appointment />
        </div>
      </section>

      <Footer />
    </main>
  );
}
