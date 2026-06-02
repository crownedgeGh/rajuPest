import { FaBug, FaPhone, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const PHONE = '+919153615693';
const PHONE_DISPLAY = '7667820595';
const WHATSAPP = 'https://wa.me/919153615693';

const services = [
    'Termite Control',
    'Cockroach Control',
    'Rodent Control',
    'Bed Bug Treatment',
    'Mosquito & Fly Control',
    'Sanitization Services',
];

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
];

const areas = [
    'Bokaro Steel City',
    'Chas',
    'City Centre',
    'Laxmi Market',
    'Sector 4, 6, 12',
    'Phusro',
    'Gomia',
    'Tenughat',
];

export default function Footer() {
    return (
        <footer className="bg-dark-900 text-gray-400">
            {/* Top marquee strip */}
            <div className="bg-primary-700 py-3 overflow-hidden">
                <div className="marquee-inner gap-12 text-white text-sm font-semibold">
                    {[...Array(6)].flatMap(() => [
                        '🏠 Termite Control',
                        '🪳 Cockroach Control',
                        '🐀 Rodent Control',
                        '🛏️ Bed Bug Treatment',
                        '🦟 Mosquito Control',
                        '🧹 Sanitization Services',
                    ]).map((item, i) => (
                        <span key={i} className="mx-8 flex-shrink-0">{item}</span>
                    ))}
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

                    {/* Column 1: Brand */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-11 h-11 rounded-xl flex items-center justify-center">
                                <FaBug className="text-white text-lg" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-base leading-tight">Raju Pest Control</p>
                                <p className="text-primary-400 text-xs">Services, Bokaro</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            Bokaro's most trusted pest control service. We protect your home and business
                            with safe, effective, and affordable pest management solutions.
                        </p>

                        {/* Address */}
                        <div className="flex items-start gap-3 mb-4">
                            <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-white text-sm font-semibold">Raju Pest Control Services</p>
                                <p className="text-gray-400 text-sm">Laxmi Market, Bokaro Sector</p>
                                <p className="text-gray-400 text-sm">Bokaro, Jharkhand</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <FaPhone className="text-primary-500 flex-shrink-0" />
                            <a href={`tel:${PHONE}`} className="text-white text-sm font-semibold hover:text-primary-400 transition-colors">
                                {PHONE_DISPLAY}
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaClock className="text-primary-500 flex-shrink-0" />
                            <p className="text-gray-400 text-sm">Mon–Sun: 8:00 AM – 8:00 PM</p>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary-500 rounded-full inline-block" />
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#services"
                                        className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary-500 rounded-full inline-block" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Service Areas + CTA */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary-500 rounded-full inline-block" />
                            Service Areas
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {areas.map((area) => (
                                <span
                                    key={area}
                                    className="bg-white/5 border border-white/10 text-gray-400 text-xs px-2.5 py-1 rounded-lg"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>

                        {/* Emergency call */}
                        <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-5 text-center">
                            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">
                                Pest Emergency?
                            </p>
                            <p className="text-white font-bold text-xl mb-3">{PHONE_DISPLAY}</p>
                            <a
                                href={`tel:${PHONE}`}
                                className="block bg-white text-accent-600 font-bold text-sm py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                📞 Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Raju Pest Control Services, Bokaro. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>Made with</span>
                        <FaHeart className="text-red-500 text-xs animate-pulse" />
                        <span>in Bokaro, Jharkhand</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#1da851] w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a
                            href={`tel:${PHONE}`}
                            className="bg-accent-600 hover:bg-accent-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Call us"
                        >
                            <FaPhone className="text-white text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
