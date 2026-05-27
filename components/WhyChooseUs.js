import {
    FaUserCheck,
    FaLeaf,
    FaHandHoldingUsd,
    FaBolt,
    FaPhone,
    FaCheckCircle,
    FaShieldAlt,
    FaMedal,
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const PHONE = '+919153615693';

const benefits = [
    {
        icon: FaUserCheck,
        title: 'Experienced & Certified Team',
        desc: 'Our technicians are trained, licensed, and equipped with the latest pest control techniques and safety gear.',
        color: 'text-primary-600',
        bg: 'bg-primary-50',
    },
    {
        icon: FaLeaf,
        title: 'Safe & Eco-Friendly Chemicals',
        desc: 'We use only government-approved, biodegradable chemicals — safe for children, elderly, and pets.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: FaHandHoldingUsd,
        title: 'Affordable & Transparent Pricing',
        desc: 'No hidden charges. Get competitive quotes upfront. Best value pest control services in Bokaro.',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
    },
    {
        icon: FaBolt,
        title: 'Quick & Reliable Service',
        desc: 'Same-day or next-day service available. We respect your time and deliver fast, effective solutions.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: FaShieldAlt,
        title: '100% Satisfaction Guarantee',
        desc: 'Not satisfied? We come back at no extra charge. Your peace of mind is our top priority.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: FaMedal,
        title: 'Bokaro\'s Most Trusted',
        desc: '500+ happy customers in Bokaro trust us for long-lasting, effective pest management solutions.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
    },
];

const highlights = [
    'Licensed & registered pest control company',
    'Government-approved chemicals only',
    'Serving all areas of Bokaro',
    'Same-day service available',
    'Free re-treatment if pests return',
    'Serving homes, offices & industries',
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-12 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="section-tag">
                        <FaMedal className="text-primary-600" />
                        Why Choose Us
                    </span>
                    <h2 className="section-title text-dark-900">
                        Why Bokaro Trusts{' '}
                        <span className="gradient-text">Raju Pest Control</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        We're not just another pest control company. We're your neighbours, committed to
                        keeping Bokaro pest-free with integrity and expertise.
                    </p>
                </div>

                {/* Grid: Image + Benefits */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-20">

                    {/* LEFT: Image collage */}
                    <div className="relative">
                        {/* Main image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/team.png"
                                alt="Raju Pest Control expert team Bokaro"
                                className="w-full h-96 object-cover object-top"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-bold text-lg">Professional Service</p>
                                <p className="text-gray-300 text-sm">Advanced equipment & techniques</p>
                            </div>
                        </div>

                        {/* Floating card: top right - hidden on mobile */}
                        <div className="hidden sm:block absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-100 p-2.5 rounded-xl">
                                    <FaMedal className="text-yellow-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-sm">Bokaro's Best</p>
                                    <p className="text-gray-400 text-xs">★★★★★ Rated Service</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating card: bottom left - hidden on mobile */}
                        <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary-100 p-2.5 rounded-xl">
                                    <FaCheckCircle className="text-primary-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-bold text-sm">500+ Served</p>
                                    <p className="text-gray-400 text-xs">Happy customers in Bokaro</p>
                                </div>
                            </div>
                        </div>

                        {/* Second image */}
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden xl:block">
                            <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="/cockroach.png"
                                    alt="Cockroach treatment"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Highlights list */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Here's what sets us apart
                        </h3>
                        <div className="space-y-4 mb-8">
                            {highlights.map((h) => (
                                <div key={h} className="flex items-start gap-3">
                                    <div className="bg-primary-100 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                                        <FaCheckCircle className="text-primary-600 text-sm" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{h}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href={`tel:${PHONE}`}
                            className="btn-accent text-base"
                        >
                            <FaPhone />
                            Book Free Inspection
                        </a>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map(({ icon: Icon, title, desc, color, bg }) => (
                        <div
                            key={title}
                            className="group border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                        >
                            <div className={`${bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`text-2xl ${color}`} />
                            </div>
                            <h4 className="text-gray-900 font-bold text-base mb-2">{title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
