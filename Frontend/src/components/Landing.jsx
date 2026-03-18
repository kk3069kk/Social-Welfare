import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="relative overflow-hidden pt-12">
            <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl"></div>

            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6">
                    Nurturing Health from <span className="text-rose-500">Womb to 18</span> <br className="hidden md:block" /> Every Step of the Journey
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                    Comprehensive healthcare support for children. From maternal wellness and newborn care to adolescent development and mental health.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                    <Link to="/services" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-200 transition-all hover:-translate-y-1">
                        Child Health Services
                    </Link>
                    <Link to="/about" className="bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:-translate-y-1">
                        Why Womb To 18?
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-rose-100 pt-16">
                {[
                    { title: "Neonatal Care", desc: "Expert guidance and support for the critical first 28 days of your baby's life.", icon: "🍼" },
                    { title: "Growth Tracking", desc: "Monitor physical and cognitive milestones from infancy through adolescence.", icon: "📏" },
                    { title: "Immunization", desc: "Digital reminders and health records to ensure your child never misses a vital vaccine.", icon: "💉" }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-rose-100/30 p-8 rounded-3xl hover:bg-rose-100/60 hover:shadow-md transition-all border border-rose-100">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">{feature.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl relative aspect-video bg-rose-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200" alt="Pediatrician with child" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent flex items-end p-12">
                    <div className="text-white">
                        <h2 className="text-3xl font-bold mb-2">Dedicated Pediatric Support</h2>
                        <p className="text-white/80">Available 24/7 for your child's health needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
