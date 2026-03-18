import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "The Golden Hour: Newborn Care Basics",
            excerpt: "Understanding the importance of skin-to-skin contact and immediate newborn health assessments.",
            date: "Feb 14, 2026",
            category: "Neonatal"
        },
        {
            title: "Nutrition for Growing Adolescents",
            excerpt: "Essential nutrients and dietary habits to support physical growth and brain development during the teenage years.",
            date: "Feb 10, 2026",
            category: "Adolescence"
        },
        {
            title: "The Importance of Regular Vaccination",
            excerpt: "A comprehensive guide to why sticking to the 0-18 immunization schedule is vital for community health.",
            date: "Feb 05, 2026",
            category: "Public Health"
        }
    ];

    return (
        <div className="max-w-5xl mx-auto font-sans">
            <header className="text-center mb-16">
                <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tighter uppercase italic">Child Health Insights</h1>
                <p className="text-slate-500 text-lg font-medium">Leading research and guidance for parents from infancy to age 18.</p>
            </header>

            <div className="space-y-8">
                {posts.map((post, idx) => (
                    <article key={idx} className="group flex flex-col md:flex-row gap-8 items-start p-6 rounded-[2.5rem] border border-rose-100 hover:bg-rose-100/30 hover:shadow-xl transition-all cursor-pointer bg-rose-50/20">
                        <div className="w-full md:w-1/3 aspect-square bg-rose-100/50 rounded-3xl flex items-center justify-center text-5xl group-hover:bg-rose-500 group-hover:text-white transition-colors shadow-inner">
                            🩹
                        </div>
                        <div className="flex-grow py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-rose-100 text-rose-600 font-bold text-[10px] px-2 py-1 rounded-full uppercase tracking-widest">{post.category}</span>
                                <span className="text-slate-400 text-sm font-bold tracking-tighter uppercase">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-rose-600 transition-colors leading-tight">{post.title}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4 text-sm font-medium">{post.excerpt}</p>
                            <span className="text-rose-600 font-black text-xs uppercase tracking-widest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Full Article <span>→</span>
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
