import {
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaWhatsapp,
    FaEnvelope,
    FaCheckCircle,
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const PHONE = '+917667820595';
const PHONE_DISPLAY = '7667820595';
const WHATSAPP = 'https://wa.me/917667820595?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Bokaro';
const ADDRESS = 'Laxmi Market, Bokaro Sector, Bokaro, Jharkhand';

const contactInfo = [
    {
        icon: FaPhone,
        title: 'Call Us Directly',
        value: PHONE_DISPLAY,
        sub: 'Tap to call – Available 8AM–8PM',
        href: `tel:${PHONE}`,
        color: 'bg-orange-500',
        hover: 'hover:bg-orange-600',
    },
    {
        icon: FaWhatsapp,
        title: 'WhatsApp',
        value: 'Send a Message',
        sub: 'Quick response guaranteed',
        href: WHATSAPP,
        color: 'bg-[#25D366]',
        hover: 'hover:bg-[#1da851]',
        external: true,
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Our Location',
        value: 'Laxmi Market, Bokaro',
        sub: 'Sector, Bokaro, Jharkhand',
        href: 'https://maps.google.com/?q=Laxmi+Market+Bokaro+Jharkhand',
        color: 'bg-primary-600',
        hover: 'hover:bg-primary-700',
        external: true,
    },
    {
        icon: FaClock,
        title: 'Working Hours',
        value: 'Mon – Sun',
        sub: '8:00 AM to 8:00 PM',
        href: `tel:${PHONE}`,
        color: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="section-tag">
                        <MdSupportAgent className="text-primary-600 text-base" />
                        Get In Touch
                    </span>
                    <h2 className="section-title text-dark-900">
                        Contact <span className="gradient-text">Us Today</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Ready to get rid of pests? Reach out via call, WhatsApp, or visit us. We're here to help!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: Contact cards */}
                    <div className="space-y-4">
                        {contactInfo.map(({ icon: Icon, title, value, sub, href, color, hover, external }) => (
                            <a
                                key={title}
                                href={href}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className={`${color} ${hover} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors shadow-md group-hover:scale-105 transition-transform duration-300`}>
                                    <Icon className="text-white text-2xl" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">
                                        {title}
                                    </p>
                                    <p className="text-gray-900 font-bold text-base">{value}</p>
                                    <p className="text-gray-500 text-sm">{sub}</p>
                                </div>
                                <div className="text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all">
                                    →
                                </div>
                            </a>
                        ))}

                        {/* Assurance list */}
                        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mt-6">
                            <p className="text-primary-800 font-bold mb-4">Why call us right now?</p>
                            {[
                                'Free site inspection – no obligation',
                                'Same-day service available in Bokaro',
                                'Transparent pricing – no hidden charges',
                                '100% satisfaction or free re-treatment',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 mb-2.5">
                                    <FaCheckCircle className="text-primary-600 flex-shrink-0 text-sm" />
                                    <span className="text-primary-900 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Big CTA + Info card */}
                    <div className="space-y-6">
                        {/* Main call card */}
                        <div className="relative bg-gradient-to-br from-dark-900 to-primary-900 rounded-3xl p-8 overflow-hidden text-center shadow-2xl">
                            <div className="absolute inset-0 hero-pattern opacity-10" />
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <FaPhone className="text-white text-3xl" />
                                </div>
                                <p className="text-gray-300 text-sm font-medium uppercase tracking-widest mb-2">
                                    Call Now for Instant Service
                                </p>
                                <a
                                    href={`tel:${PHONE}`}
                                    className="text-white text-2xl sm:text-4xl font-extrabold hover:text-primary-300 transition-colors block mb-2"
                                >
                                    {PHONE_DISPLAY}
                                </a>
                                <p className="text-gray-400 text-sm mb-8">
                                    Mon–Sun · 8:00 AM to 8:00 PM
                                </p>

                                <a
                                    href={`tel:${PHONE}`}
                                    className="relative inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl group w-full justify-center"
                                >
                                    <span className="absolute inset-0 rounded-full bg-accent-400 opacity-20 animate-ping group-hover:opacity-0" />
                                    <FaPhone />
                                    Tap to Call Now
                                </a>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <a
                                        href={WHATSAPP}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 w-full justify-center"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Address card */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-xl flex-shrink-0">
                                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-base mb-1">Our Office Address</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Raju Pest Control Services</strong><br />
                                        Laxmi Market, Bokaro Sector<br />
                                        Bokaro, Jharkhand
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Laxmi+Market+Bokaro+Jharkhand"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm mt-3 hover:text-primary-700"
                                    >
                                        <FaMapMarkerAlt className="text-xs" />
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
