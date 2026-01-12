import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, GraduationCap, Heart, Users, CheckCircle2, Star, Calendar, ShieldCheck } from "lucide-react";

export default function About() {
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
            About Dr. CureWell
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            A Journey of <span className="bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Dedication</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Expertise, compassion, and unwavering commitment to excellence in healthcare.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500 to-teal-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070" 
                  alt="Modern Clinic Interior" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-white">15+</p>
                      <p className="text-cyan-200 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">10k+</p>
                      <p className="text-cyan-200 text-sm">Patients Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Background</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Dr. CureWell is a board-certified specialist with over 15 years of experience in internal medicine and specialized diagnostics. Graduating from top-tier Medical University with honors, Dr. CureWell has served in leading hospitals across the country before establishing this private clinic.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our commitment to continuous learning and staying abreast of the latest medical advancements ensures that our patients receive the most current and effective treatments available.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Clinic Vision</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Our clinic is designed to be a sanctuary for healing. We believe in treating the person, not just the disease. Equipped with the latest diagnostic machinery and a team of dedicated nurses, we ensure that your visit is comfortable and your diagnosis is accurate.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We strive to create an environment where patients feel heard, respected, and cared for throughout their healthcare journey.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications & Achievements */}
          <div className="bg-linear-to-br from-slate-50 to-cyan-50/30 rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Qualifications</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "MBBS, MD - General Medicine",
                    "Fellowship in Cardiology",
                    "Member of the National Medical Association",
                    "Advanced Training in Preventive Medicine"
                  ].map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-cyan-600 shrink-0 mt-1" size={20} />
                      <span className="text-slate-700 text-lg">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Achievements</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Awarded 'Best Doctor of the Year 2024'",
                    "Published 50+ Research Papers",
                    "Speaker at International Medical Conferences",
                    "Recognized for Excellence in Patient Care"
                  ].map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Star className="text-cyan-600 shrink-0 mt-1 fill-cyan-600" size={20} />
                      <span className="text-slate-700 text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  desc: "We treat every patient with empathy, respect, and genuine care, understanding that each person's health journey is unique.",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: ShieldCheck,
                  title: "Excellence",
                  desc: "We strive for the highest standards in medical practice, continuously improving our skills and services.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: Users,
                  title: "Integrity",
                  desc: "Honest communication, ethical practices, and transparency in all our patient interactions and treatments.",
                  color: "from-teal-500 to-cyan-500"
                }
              ].map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-3xl border border-slate-200 card-hover text-center"
                >
                  <div className={`inline-flex w-16 h-16 bg-linear-to-br ${value.color} rounded-2xl items-center justify-center mb-6`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-cyan-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
            <div className="relative">
              <Calendar className="mx-auto mb-4" size={48} />
              <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Health Journey?</h2>
              <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                Schedule an appointment today and experience the difference of personalized, expert medical care.
              </p>
              <a 
                href="/#appointment" 
                className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
