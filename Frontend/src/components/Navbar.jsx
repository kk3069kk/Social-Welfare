import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Press', path: '/press' },
        { name: 'Impact', path: '/impact' },
        { name: 'Donate', path: '/donation' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-rose-50/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="bg-rose-500 p-2 rounded-lg text-white font-bold text-xl">W18</div>
                        <span className="font-bold text-slate-900 text-lg hidden lg:block">WombTo18</span>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-1 lg:space-x-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${location.pathname === link.path
                                            ? 'bg-rose-50 text-rose-700 font-bold'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/donation" className="hidden sm:block text-sm font-semibold text-rose-600 hover:text-rose-500">
                            Support Health
                        </Link>
                        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-transform active:scale-95">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
