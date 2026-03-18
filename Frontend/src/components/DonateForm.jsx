import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const DonateForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        amount: '',
        isPublic: true
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [donorInfo, setDonorInfo] = useState(null);

    const generateCertificate = (data) => {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();

        // Background
        doc.setFillColor(255, 251, 252); // rose-50
        doc.rect(0, 0, width, height, 'F');

        // Border
        doc.setDrawColor(244, 63, 94); // rose-500
        doc.setLineWidth(5);
        doc.rect(10, 10, width - 20, height - 20);

        // Header
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(40);
        doc.setTextColor(244, 63, 94);
        doc.text('WOMB TO 18', width / 2, 40, { align: 'center' });

        doc.setFontSize(20);
        doc.setTextColor(51, 65, 85); // slate-700
        doc.text('CERTIFICATE OF APPRECIATION', width / 2, 60, { align: 'center' });

        // Content
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(16);
        doc.text('This certificate is proudly presented to', width / 2, 85, { align: 'center' });

        doc.setFont('helvetica', 'bolditalic');
        doc.setFontSize(30);
        doc.setTextColor(15, 23, 42); // slate-900
        doc.text(data.name.toUpperCase(), width / 2, 105, { align: 'center' });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(71, 85, 105); // slate-600
        doc.text(`For your generous donation of $${data.amount} towards Child Healthcare and Development.`, width / 2, 125, { align: 'center' });
        doc.text('Your contribution is nurturing health and hope for the next generation.', width / 2, 135, { align: 'center' });

        // IDs
        doc.setFontSize(10);
        doc.setFont('courier', 'bold');
        doc.text(`DONOR ID: ${data.donorId}`, 30, height - 30);
        doc.text(`DATE: ${new Date().toLocaleDateString()}`, width - 70, height - 30);

        // Footer Logo/Signature placeholder
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text('Womb To 18 Foundation', width / 2, height - 40, { align: 'center' });

        doc.save(`W18_Certificate_${data.donorId}.pdf`);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/donater', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setDonorInfo(data.donator);
                setMessage({ type: 'success', text: 'Thank you for your generous contribution! Your certificate is ready.' });
                // We keep the message visible so they can download the certificate
            } else {
                setMessage({ type: 'error', text: data.error ? `Server Error: ${data.error}` : (data.message || 'Something went wrong.') });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Server error. Please check your connection.' });
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-12">
            <div className="bg-rose-50/50 border-2 border-rose-100 rounded-[3rem] p-10 shadow-xl">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-rose-500 text-white text-3xl flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-lg shadow-rose-200">
                        💝
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tighter uppercase italic">Donation Details</h1>
                    <p className="text-slate-500 font-medium text-sm mt-2">Every contribution saves a child's future.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-white border-2 border-rose-100 rounded-2xl p-4 text-slate-800 font-medium focus:border-rose-500 outline-none transition-all placeholder:text-slate-300"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-white border-2 border-rose-100 rounded-2xl p-4 text-slate-800 font-medium focus:border-rose-500 outline-none transition-all placeholder:text-slate-300"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNo"
                                required
                                placeholder="+1 234 567 890"
                                className="w-full bg-white border-2 border-rose-100 rounded-2xl p-4 text-slate-800 font-medium focus:border-rose-500 outline-none transition-all placeholder:text-slate-300"
                                value={formData.phoneNo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Donation Amount ($)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500 font-black text-xl">$</span>
                            <input
                                type="number"
                                name="amount"
                                required
                                min="1"
                                placeholder="100"
                                className="w-full bg-white border-2 border-rose-100 rounded-2xl p-4 pl-10 text-slate-800 font-black text-2xl focus:border-rose-500 outline-none transition-all placeholder:text-slate-200"
                                value={formData.amount}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="bg-white/50 p-6 rounded-3xl border border-rose-100 flex items-start gap-4 cursor-pointer hover:bg-white transition-all group" onClick={() => setFormData({ ...formData, isPublic: !formData.isPublic })}>
                        <div className={`w-6 h-6 rounded-lg border-2 mt-1 flex items-center justify-center transition-all ${formData.isPublic ? 'bg-rose-500 border-rose-500' : 'bg-white border-rose-200 group-hover:border-rose-300'}`}>
                            {formData.isPublic && <span className="text-white text-xs font-bold">✓</span>}
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-sm font-black text-slate-800 uppercase tracking-tighter">Public Recognition</h4>
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                Display my name on the official donor wall. If unchecked, your donation will appear as "<span className="text-rose-500 font-bold">Anonymous</span>" with a system ID.
                            </p>
                        </div>
                    </div>

                    {message.text && (
                        <div className="space-y-4">
                            <div className={`p-4 rounded-2xl text-sm font-bold text-center ${message.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-100 text-rose-600 border border-rose-200'}`}>
                                {message.text}
                            </div>

                            {message.type === 'success' && donorInfo && (
                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        onClick={() => generateCertificate(donorInfo)}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-emerald-100"
                                    >
                                        📥 Download Official Certificate
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate('/donation')}
                                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
                                    >
                                        Back to Dashboard
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {!donorInfo && (
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 text-white py-5 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-xl shadow-rose-200 uppercase tracking-widest mt-4"
                        >
                            {loading ? 'Processing...' : 'Complete Donation'}
                        </button>
                    )}
                </form>

                <p className="mt-8 text-[9px] text-slate-400 uppercase font-black tracking-widest text-center">
                    🔒 SSL Secure Payment | Official NGO Receipt will be sent via Email
                </p>
            </div>
        </div>
    );
};

export default DonateForm;
