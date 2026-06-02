import { FaPhone, FaSearch, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import { GiSpray } from 'react-icons/gi';

const PHONE = '+917667820595';

const steps = [
    {
        step: '01',
        icon: FaPhone,
        title: 'Call or WhatsApp Us',
        desc: 'Call us on 7667820595 or send a WhatsApp message. Tell us your pest problem and location in Bokaro. We\'ll respond within minutes.',
        highlight: 'Instant Response',
        color: 'from-orange-400 to-accent-600',
        ring: 'ring-orange-200',
        bg: 'bg-orange-50',
        iconColor: 'text-orange-600',
    },
    {
        step: '02',
        icon: MdSchedule,
        title: 'Book Your Inspection',
        desc: 'Choose a convenient time slot. Our expert technician will visit your property, thoroughly inspect the pest situation, and give you a free, transparent quote.',
        highlight: 'Free Inspection',
        color: 'from-blue-400 to-blue-600',
        ring: 'ring-blue-200',
        bg: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        step: '03',
        icon: GiSpray,
        title: 'Professional Treatment',
        desc: 'Our certified technician carries out the treatment using government-approved, eco-friendly chemicals. Quick, effective, and with minimum disruption to your routine.',
        highlight: 'Expert Treatment',
        color: 'from-primary-500 to-primary-700',
        ring: 'ring-primary-200',
        bg: 'bg-primary-50',
        iconColor: 'text-primary-600',
    },
    {
        step: '04',
        icon: FaCheckCircle,
        title: 'Pest-Free Guarantee',
        desc: 'We follow up after treatment to ensure the pests are completely gone. If they return within the warranty period, we come back at zero extra cost.',
        highlight: 'Guaranteed Results',
        color: 'from-green-400 to-primary-600',
        ring: 'ring-green-200',
        bg: 'bg-green-50',
        iconColor: 'text-green-600',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">
                        <FaSearch className="text-primary-600" />
                        Our Process
                    </span>
                    <h2 className="section-title text-dark-900">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Getting rid of pests has never been easier. Our simple 4-step process
                        ensures a hassle-free, effective pest control experience.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {steps.map(({ step, icon: Icon, title, desc, highlight, color, ring, bg, iconColor }, index) => (
                        <div key={step} className="relative">
                            {/* Connector line (desktop only, not last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 z-0 -translate-y-1/2 pl-3 pr-3" style={{ left: 'calc(100% - 12px)', width: 'calc(100% - 24px)' }}>
                                    <div className="w-full h-full bg-gradient-to-r from-gray-200 to-transparent" />
                                </div>
                            )}

                            <div className="relative bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10">
                                {/* Step number */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className={`text-5xl font-black bg-gradient-to-br ${color} bg-clip-text text-transparent opacity-20 leading-none`}>
                                        {step}
                                    </span>
                                    <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                        {highlight}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className={`${bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                                    <Icon className={`text-2xl ${iconColor}`} />
                                </div>

                                <h3 className="text-gray-900 font-bold text-base mb-3">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

                                {/* Arrow for non-last items on desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                                        <div className="bg-white rounded-full p-1.5 shadow-md border border-gray-100">
                                            <FaArrowRight className="text-gray-400 text-sm" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom banner */}
                <div className="relative bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 rounded-3xl p-8 md:p-12 overflow-hidden">
                    <div className="absolute inset-0 hero-pattern opacity-10" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                Ready to be pest-free?
                            </h3>
                            <p className="text-gray-300">
                                Call now for a free inspection and same-day service in Bokaro.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
                            >
                                <FaPhone />
                                7667820595
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
