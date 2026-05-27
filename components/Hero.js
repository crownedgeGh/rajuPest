'use client';

import { FaPhone, FaWhatsapp, FaShieldAlt, FaStar, FaCheckCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const PHONE = '+919153615693';
const WHATSAPP = 'https://wa.me/919153615693?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Bokaro';

const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '6+', label: 'Services' },
    { value: '5★', label: 'Rating' },
    { value: '24/7', label: 'Support' },
];

const bullets = [
    'Free inspection + transparent pricing',
    'Government-approved, safe chemicals',
    'Guaranteed results or free re-treatment',
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Deep overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/88 to-primary-950/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />

            {/* Glow accents */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:py-20">
                <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-14 items-center">

                    {/* ── LEFT: Text content ── */}
                    <div className="text-center lg:text-left">

                        {/* Top badge */}
                       
                        {/* Main heading */}
                        <h1 className="text-[1.85rem] sm:text-[2.6rem] lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.18] mb-4 sm:mb-5">
                            Bokaro Mein{' '}
                            <span className="text-primary-400">Pest Problem?</span>
                            <br className="hidden sm:block" />
                            {' '}Ek Call Mein{' '}
                            <span className="relative inline-block">
                                <span className="text-accent-400">Solution!</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-400/60 rounded-full" />
                            </span>
                        </h1>

                        {/* Description */}
                       

                      

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7 sm:mb-9">
                            <a
                                href={`tel:${PHONE}`}
                                className="relative group inline-flex items-center justify-center gap-2.5 bg-accent-500 hover:bg-accent-600 text-white font-extrabold text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-4 rounded-2xl shadow-2xl shadow-accent-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-accent-500/50"
                            >
                                <span className="absolute inset-0 rounded-2xl bg-accent-400 animate-ping opacity-20 group-hover:opacity-0" />
                                <FaPhone className="flex-shrink-0 text-sm" />
                                Call Now – 91536 15693
                            </a>
                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border-2 border-[#25D366]/50 hover:border-[#25D366]/80 text-white font-semibold text-sm sm:text-base px-6 py-4 sm:px-8 sm:py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-[#25D366] text-lg sm:text-xl flex-shrink-0" />
                                WhatsApp Us
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="inline-flex items-center gap-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            {stats.map(({ value, label }, i) => (
                                <div
                                    key={label}
                                    className={`flex flex-col items-center px-4 py-3 sm:px-6 sm:py-3.5 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
                                >
                                    <span className="text-white font-extrabold text-base sm:text-xl leading-none">{value}</span>
                                    <span className="text-gray-400 text-[9px] sm:text-[11px] mt-0.5 whitespace-nowrap">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Team photo card (desktop only) ── */}
                    <div className="hidden lg:block relative">

                        {/* Main photo */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <img
                                src="/team.png"
                                alt="Raju Pest Control Expert Team – Bokaro"
                                className="w-full h-[540px] object-cover object-top"
                            />
                            {/* Gradient at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                            {/* Caption at bottom of image */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="glass rounded-xl px-4 py-3">
                                    <p className="text-white font-bold text-sm">Our Expert Team, Bokaro</p>
                                    <p className="text-gray-300 text-xs mt-0.5">Certified · Trained · Trusted</p>
                                </div>
                            </div>
                        </div>

                        {/* Top-right badge */}
                        <div className="absolute -top-4 -right-3 z-10 bg-yellow-400 text-yellow-900 font-extrabold text-xs px-3.5 py-2.5 rounded-xl shadow-xl rotate-3">
                            🏆 #1 in Bokaro
                        </div>

                        {/* Bottom-left rating card */}
                        <div className="absolute -bottom-5 -left-5 z-10 glass rounded-2xl px-4 py-3 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
                                    <FaStar className="text-white" />
                                </div>
                                <div>
                                    <div className="flex gap-0.5 mb-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xs" />
                                        ))}
                                    </div>
                                    <p className="text-white text-xs font-bold leading-none">500+ Happy Customers</p>
                                    <p className="text-gray-400 text-[10px]">Bokaro & surrounding areas</p>
                                </div>
                            </div>
                        </div>

                        {/* Shield badge - top left */}
                        <div className="absolute top-6 -left-4 z-10 glass rounded-2xl px-3.5 py-2.5 shadow-xl">
                            <div className="flex items-center gap-2">
                                <FaShieldAlt className="text-primary-400 text-lg" />
                                <div>
                                    <p className="text-white text-xs font-bold leading-none">100% Guaranteed</p>
                                    <p className="text-gray-400 text-[10px]">Pest-free results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
