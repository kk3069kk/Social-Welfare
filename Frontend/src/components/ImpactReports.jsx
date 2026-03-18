import React from 'react';

const ImpactReports = () => {
    const stats = [
        { label: "Healthy Births", value: "50,000+", color: "rose" },
        { label: "Fully Immunized", value: "98%", color: "emerald" },
        { label: "School Partners", value: "1,200", color: "blue" },
        { label: "Active Families", value: "250K", color: "amber" }
    ];

    return (
        <div className="max-w-5xl mx-auto">
            <header className="mb-16 text-center">
                <h1 className="text-4xl font-black text-slate-800 tracking-tighter italic uppercase">Our Global Impact</h1>
                <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    Since our inception, we have monitored and supported the growth journals of thousands of children from birth to their 18th birthday.
                </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-rose-50/40 border border-rose-100 p-8 rounded-[3rem] text-center shadow-lg hover:shadow-2xl transition-all group">
                        <div className={`text-4xl font-black text-${stat.color}-500 mb-2 truncate group-hover:scale-110 transition-transform`}>{stat.value}</div>
                        <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="bg-rose-100/30 rounded-[4rem] p-12 overflow-hidden relative border border-rose-200/50 shadow-inner">
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-black text-slate-800 mb-6 leading-tight uppercase italic tracking-tighter">Transparency &<br />Measurable Care</h2>
                        <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                            Our 2025 Child Health Progress Report details how targeted nutritional programs and digital immunization trackers have reduced early childhood illness by 40%.
                        </p>
                        <button className="bg-rose-600 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 active:scale-95">
                            Read Impact Study
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-rose-500 rounded-full flex items-center justify-center text-white text-8xl shadow-2xl shadow-rose-200 relative overflow-hidden ring-8 ring-white/20 ring-offset-8 ring-offset-rose-50">
                            🌍
                            <div className="absolute inset-0 bg-white/20 blur-2xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactReports;
