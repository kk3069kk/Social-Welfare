import React from 'react';
import { Link } from 'react-router-dom';

const DonationSystem = () => {
    return (
        <div className="max-w-3xl mx-auto py-12">
            <div className="bg-rose-50 border-4 border-rose-100/50 rounded-[4rem] p-12 text-center shadow-2xl shadow-rose-100">
                <div className="w-24 h-24 bg-rose-500 text-white text-5xl flex items-center justify-center rounded-[2rem] mx-auto mb-10 shadow-xl shadow-rose-200 animate-bounce-slow">
                    🏥
                </div>
                <h1 className="text-4xl font-black text-slate-800 mb-6 tracking-tighter uppercase italic leading-tight">Invest in a<br />Child's Future</h1>
                <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
                    Your donations provide essential immunizations, newborn health kits, and pediatric screenings for families in underserved communities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    {[
                        { price: "$25", label: "Vaccine Fund" },
                        { price: "$100", label: "Newborn Kit", active: true },
                        { price: "$250+", label: "Health Hero" }
                    ].map((tier, i) => (
                        <div key={i} className={`p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer shadow-sm hover:translate-y-[-4px] active:scale-95 ${tier.active ? 'bg-rose-600 text-white border-rose-600 shadow-rose-200' : 'bg-rose-100/40 border-rose-200 text-slate-800 hover:border-rose-400 hover:bg-white'}`}>
                            <div className="text-3xl font-black mb-1">{tier.price}</div>
                            <div className="text-[10px] font-black opacity-80 uppercase tracking-widest">{tier.label}</div>
                        </div>
                    ))}
                </div>

                <Link
                    to="/donate-now"
                    className="w-full block bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-3xl font-black text-xl transition-all active:scale-95 shadow-2xl uppercase tracking-widest"
                >
                    Donate to Womb To 18
                </Link>

                <Link
                    to="/transparency"
                    className="mt-6 block text-[10px] font-black text-rose-500 uppercase tracking-widest hover:text-rose-600 transition-all underline underline-offset-4"
                >
                    View Official Transparency Board
                </Link>

                <p className="mt-6 text-[10px] text-slate-400 uppercase font-black tracking-widest flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                    Secure Healthcare Philanthropy
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                </p>
            </div>
        </div>
    );
};

export default DonationSystem;
