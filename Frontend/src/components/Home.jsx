import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl font-sans">
                <div className="bg-rose-50/50 rounded-3xl shadow-sm border border-rose-100 min-h-[60vh] p-8 md:p-12">
                    <Outlet />
                </div>
            </main>
            <footer className="py-12 bg-slate-900 text-slate-400">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="text-white font-bold text-xl mb-2">Womb to 18</div>
                            <p className="text-sm max-w-sm">Nurturing health and development from the first heartbeat to adulthood.</p>
                        </div>
                        <div className="text-md-right text-sm">
                            © 2026 Womb to 18 Foundation. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
