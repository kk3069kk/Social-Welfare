import React from 'react';

const Services = () => {
    const services = [
        { name: "Neonatal & Newborn", icon: "👶", desc: "Screening, breastfeeding support, and infection prevention for the first critical months." },
        { name: "Immunization Records", icon: "📋", desc: "Digital tracking and reminders for the WHO-recommended vaccination schedule from birth to 18." },
        { name: "Developmental Tracking", icon: "🧠", desc: "Periodic check-ups for motor skills, cognitive development, and nutritional balance." },
        { name: "School-Age Wellness", icon: "🎒", desc: "Health promotion, eyesight checks, and mental health resources for students." }
    ];

    return (
        <div className="py-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Our Pediatric Services</h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                    We provide evidence-based, WHO-aligned health services designed specifically for children from their earliest moments to the verge of adulthood.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((svc, idx) => (
                    <div key={idx} className="group bg-rose-100/20 p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all hover:bg-rose-100/40">
                        <div className="text-4xl mb-6 bg-rose-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-rose-100 transition-colors">
                            {svc.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{svc.name}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{svc.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
