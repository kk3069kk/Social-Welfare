import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-12">
                <span className="text-rose-600 font-black tracking-[0.2em] uppercase text-xs bg-rose-100 px-3 py-1 rounded-full">Our Core Vision</span>
                <h1 className="text-5xl font-black text-slate-800 mt-4 tracking-tighter uppercase italic leading-none">Nurturing Every<br />Stage of Life</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                    <p className="text-lg">
                        Womb to 18 is dedicated to bridging the gap in pediatric and maternal healthcare. We believe that a healthy adulthood begins with a healthy womb.
                    </p>
                    <p>
                        Our foundation provides free health resources, immunization tracking, and expert-led webinars for parents and guardians across the country.
                    </p>
                </div>
                <div className="bg-rose-100/40 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-inner border border-rose-200/50">
                    <span className="text-6xl mb-4">👶</span>
                    <p className="italic font-black text-rose-500 uppercase tracking-tighter leading-tight">
                        "Every child's health is a<br />promise to the future."
                    </p>
                </div>
            </div>

            <section className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border-t-8 border-rose-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                <h2 className="text-3xl font-black mb-8 text-center uppercase italic tracking-tighter">Comprehensive Care Lifecycle</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    {[
                        { name: "Prenatal Support", desc: "Healthy starts from the womb.", icon: "🥚" },
                        { name: "Pediatric Wellness", desc: "Growth and nutrition guidance.", icon: "🍼" },
                        { name: "Adolescent Care", desc: "Physical and mental health.", icon: "🛹" }
                    ].map((v, i) => (
                        <div key={i} className="group">
                            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500">{v.icon}</div>
                            <div className="font-black text-lg mb-2 text-rose-400 uppercase tracking-widest">{v.name}</div>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
