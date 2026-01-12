import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Stethoscope, HeartPulse, Brain, Microscope, Baby, Bone, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    { 
      icon: Stethoscope, 
      title: "General Consultation", 
      price: "$50", 
      duration: "30-45 min",
      desc: "Complete health checkup and general diagnosis with comprehensive assessment of your overall well-being.",
      features: ["Physical Examination", "Health Assessment", "Medical Advice", "Prescription if needed"]
    },
    { 
      icon: HeartPulse, 
      title: "Cardiology", 
      price: "$120", 
      duration: "60 min",
      desc: "Heart health monitoring, ECG, and consultation with advanced cardiac diagnostics and treatment planning.",
      features: ["ECG Testing", "Heart Rate Monitoring", "Cardiac Consultation", "Treatment Plan"]
    },
    { 
      icon: Brain, 
      title: "Neurology", 
      price: "$150", 
      duration: "60 min",
      desc: "Treatment for headaches, migraines, and nerve disorders with specialized neurological evaluation.",
      features: ["Neurological Exam", "Headache Treatment", "Nerve Disorder Care", "Follow-up Plans"]
    },
    { 
      icon: Baby, 
      title: "Pediatrics", 
      price: "$80", 
      duration: "45 min",
      desc: "Comprehensive care for infants, children, and adolescents with child-friendly approach and expert pediatricians.",
      features: ["Child Health Check", "Vaccination Services", "Growth Monitoring", "Parental Guidance"]
    },
    { 
      icon: Microscope, 
      title: "Lab Diagnostics", 
      price: "Varies", 
      duration: "15-30 min",
      desc: "Blood tests, urine analysis, and pathology reports with state-of-the-art laboratory equipment and quick results.",
      features: ["Blood Tests", "Urine Analysis", "Pathology Reports", "Quick Results"]
    },
    { 
      icon: Bone, 
      title: "Orthopedics", 
      price: "$100", 
      duration: "45 min",
      desc: "Bone health, fractures, and joint pain treatments with expert orthopedic care and rehabilitation guidance.",
      features: ["Bone Health Assessment", "Fracture Treatment", "Joint Pain Relief", "Rehabilitation Plans"]
    },
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
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Comprehensive <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Medical Care</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            High-quality healthcare services at transparent, competitive prices. Your health and wellness are our priority.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-slate-200 card-hover group relative overflow-hidden"
              >
                {/* linear overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    <service.icon className="text-white" size={32} />
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-right shrink-0 ml-4">
                      <div className="text-2xl font-extrabold bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                        <Clock size={12} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="text-cyan-600 shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link 
                    href="/#appointment" 
                    className="inline-flex items-center gap-2 w-full justify-center bg-slate-50 hover:bg-linear-to-r hover:from-cyan-600 hover:to-teal-600 text-slate-700 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  >
                    Book Appointment
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="section-padding bg-linear-to-br from-slate-50 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-slate-600">
                All prices are clearly stated with no hidden fees. We believe in honest, upfront pricing for all our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-cyan-50 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">✓</div>
                <h3 className="font-bold text-slate-900 mb-2">No Hidden Fees</h3>
                <p className="text-slate-600 text-sm">Everything is upfront and transparent</p>
              </div>
              <div className="p-6 bg-teal-50 rounded-2xl">
                <div className="text-3xl font-bold text-teal-600 mb-2">✓</div>
                <h3 className="font-bold text-slate-900 mb-2">Insurance Accepted</h3>
                <p className="text-slate-600 text-sm">Most insurance plans are welcome</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <div className="text-3xl font-bold text-slate-600 mb-2">✓</div>
                <h3 className="font-bold text-slate-900 mb-2">Payment Plans</h3>
                <p className="text-slate-600 text-sm">Flexible payment options available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-cyan-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                Book your appointment today and take the first step towards better health and wellness.
              </p>
              <Link 
                href="/#appointment" 
                className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
