'use client';

import { useState, useEffect } from 'react';
import { FaBug, FaPhone, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const PHONE = '+919153615693';
const PHONE_DISPLAY = '7667820595';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-xl py-2 border-b border-gray-100'
                    : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                <FaBug className="text-white text-lg" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-ping" />
                        </div>
                        <div>
                            <p
                                className={`font-bold text-base leading-tight ${scrolled ? 'text-primary-700' : 'text-white'
                                    }`}
                            >
                                Bokaro Pest Control
                            </p>
                            <p
                                className={`text-[11px] font-medium ${scrolled ? 'text-gray-400' : 'text-primary-200'
                                    }`}
                            >
                                Professional Pest Management
                            </p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium relative group transition-colors duration-200 ${scrolled
                                    ? 'text-gray-600 hover:text-primary-600'
                                    : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href={`tel:${PHONE}`}
                            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all duration-300 ${scrolled
                                ? 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                                : 'border-white/60 text-white hover:bg-white/10'
                                }`}
                        >
                            <FaPhone className="text-xs" />
                            {PHONE_DISPLAY}
                        </a>
                        <a
                            href={`tel:${PHONE}`}
                            className="relative bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaPhone className="text-xs" />
                                Call Now
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-white shadow-2xl border-t border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-3 pt-3 border-t border-gray-100">
                                <a
                                    href={`tel:${PHONE}`}
                                    className="flex items-center justify-center gap-3 bg-accent-500 text-white font-bold px-6 py-3.5 rounded-full text-base shadow-lg"
                                >
                                    <FaPhone />
                                    Call Now – {PHONE_DISPLAY}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
