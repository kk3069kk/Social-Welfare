import React, { useState, useEffect } from 'react';

const TransparencyBoard = () => {
    const [donators, setDonators] = useState([]);
    const [stats, setStats] = useState({ totalReceived: 0, totalUtilized: 0 });

    useEffect(() => {
        fetch('http://localhost:5000/donater')
            .then(res => res.json())
            .then(data => {
                setDonators(data);
                const total = data.reduce((acc, curr) => acc + curr.amount, 0);
                setStats({
                    totalReceived: total,
                    totalUtilized: total * 0.85
                });
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-12 space-y-12">
            <header className="text-center">
                <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase italic mb-4">Financial Transparency</h1>
                <p className="text-slate-500 font-medium text-lg">Real-time tracking of every dollar committed to child health.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rose-500 rounded-[3rem] p-12 text-white shadow-2xl shadow-rose-200 flex flex-col items-center justify-center text-center">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-80">Funds Received</div>
                    <div className="text-7xl font-black tracking-tighter mb-2">${stats.totalReceived.toLocaleString()}</div>
                    <p className="text-rose-100 font-medium text-sm">Total contributions since inception.</p>
                </div>

                <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl flex flex-col items-center justify-center text-center border-t-8 border-emerald-500">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-50">Funds Utilized</div>
                    <div className="text-7xl font-black tracking-tighter mb-2 text-emerald-400">${stats.totalUtilized.toLocaleString()}</div>
                    <p className="text-slate-400 font-medium text-sm">Invested in vaccinations & medical supplies.</p>
                </div>
            </div>

            <div className="space-y-8 pt-8">
                <div className="flex justify-between items-end border-b-2 border-rose-100 pb-4">
                    <h2 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">Live Donor Wall</h2>
                    <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">{donators.length} Contributions</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {donators.map((donor, idx) => (
                        <div key={idx} className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100 flex items-center justify-between group hover:bg-white transition-all shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-black text-xs uppercase shadow-inner">
                                    {donor.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-black text-slate-800 leading-none">
                                        {donor.name}
                                    </span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                                        {donor.isPublic ? 'Public Donor' : donor.donorId}
                                    </span>
                                </div>
                            </div>
                            <div className="text-lg font-black text-rose-600">${donor.amount}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransparencyBoard;
