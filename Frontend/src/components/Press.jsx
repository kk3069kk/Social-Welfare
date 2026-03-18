import React from 'react';

const Press = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-end border-b-2 border-slate-100 pb-8 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Media Center</h1>
                    <p className="text-rose-600 font-bold mt-1">Updates on Maternal & Child Health advocacy.</p>
                </div>
                <button className="text-slate-400 font-black text-xs hover:text-rose-500 transition-colors tracking-tighter">DOWNLOAD PRESS KIT (2026)</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                        Latest Coverage
                    </h2>
                    <div className="space-y-6">
                        {[
                            { title: "Womb To 18 Launches New Immunization Tracker", date: "Feb 01, 2026", source: "Health Daily" },
                            { title: "National Award for Pediatric Excellence 2026", date: "Jan 12, 2026", source: "NGO Times" },
                            { title: "Bridging the Healthcare Gap in Rural Areas", date: "Dec 28, 2025", source: "Global Relief News" }
                        ].map((release, i) => (
                            <div key={i} className="group p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-sm cursor-pointer transition-all">
                                <h4 className="font-bold text-slate-800 group-hover:text-rose-600 transition-colors leading-snug">{release.title}</h4>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{release.source}</span>
                                    <span className="text-slate-300 text-[10px]">{release.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 border-4 border-slate-800 rounded-[3rem] p-10 text-white shadow-2xl">
                    <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                        We are available for interviews and expert commentary on pediatric healthcare policies and maternal wellness.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="text-2xl bg-slate-800 p-3 rounded-xl group-hover:bg-rose-500 transition-colors">📄</span>
                            <div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Global PR</div>
                                <div className="text-sm font-bold">press@wombto18.org</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="text-2xl bg-slate-800 p-3 rounded-xl group-hover:bg-rose-500 transition-colors">📞</span>
                            <div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Child Health Desk</div>
                                <div className="text-sm font-bold">+91 000-000-0000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Press;
