import { FaPhone, FaArrowRight, FaBug, FaBed } from 'react-icons/fa';
import {
    GiSpottedBug,
    GiScarabBeetle,
    GiRat,
    GiSpray,
} from 'react-icons/gi';
import { MdCleaningServices, MdBugReport } from 'react-icons/md';

const PHONE = '+917667820595';

const services = [
    {
        icon: GiSpottedBug,
        title: 'Termite Control',
        tagline: 'Drilling & Injection Treatment',
        description:
            'Complete termite treatment for your home and office. Advanced drilling & injection methods to eliminate termites from roots, walls, and wooden structures permanently.',
        gradient: 'from-amber-500 to-orange-600',
        bg: 'bg-amber-50',
        tag: 'Most Popular',
        image: '/termite.png',
    },
    {
        icon: GiScarabBeetle,
        title: 'Cockroach Control',
        tagline: 'Gel Bait & Spray Treatment',
        description:
            'Gel bait treatment applied in all crevices, corners, and drawers. Completely odour-free, safe for kids & pets. Kills cockroaches and their eggs effectively.',
        gradient: 'from-green-500 to-primary-700',
        bg: 'bg-green-50',
        tag: 'Odour Free',
        image: '/cockroach.png',
    },
    {
        icon: GiRat,
        title: 'Rodent Control',
        tagline: 'Bait & Glue Trap Treatment',
        description:
            'Professional rat and mouse control using safe bait traps placed at strategic locations. Effective elimination from homes, shops, restaurants, and warehouses.',
        gradient: 'from-gray-600 to-slate-800',
        bg: 'bg-slate-50',
        tag: 'Fast Acting',
        image: '/rodent.png',
    },
    {
        icon: FaBed,
        title: 'Bed Bug Treatment',
        tagline: 'Two-Stage Spray Treatment',
        description:
            'Advanced heat & chemical treatment targeting bed bugs and their eggs in mattresses, bed frames, and furniture. Follow-up service ensures complete eradication.',
        gradient: 'from-red-500 to-rose-700',
        bg: 'bg-red-50',
        tag: '2-Stage Process',
        image: '/bedbug.png',
    },
    {
        icon: FaBug,
        title: 'Mosquito & Fly Control',
        tagline: 'Fogging & Spray Treatment',
        description:
            'High-pressure fogging and residual spray targeting mosquitoes, flies, and their breeding grounds. Protects your family from dengue, malaria, and other diseases.',
        gradient: 'from-blue-500 to-cyan-600',
        bg: 'bg-blue-50',
        tag: 'Long Lasting',
        image: '/mosquito.png',
    },
    {
        icon: GiSpray,
        title: 'Sanitization Services',
        tagline: 'Deep Cleaning & Disinfection',
        description:
            'Professional disinfection using WHO-approved chemicals for homes, offices, restaurants, and commercial spaces. Complete elimination of bacteria, viruses, and fungi.',
        gradient: 'from-purple-500 to-violet-700',
        bg: 'bg-purple-50',
        tag: 'WHO Approved',
        image: '/sanitization.png',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-12 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <span className="section-tag">
                        <FaBug className="text-primary-600" />
                        Our Services
                    </span>
                    <h2 className="section-title text-dark-900">
                        Complete Pest Control <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        We offer 6 specialised pest control services using advanced techniques and
                        government-approved chemicals — safe for your family, deadly for pests.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ icon: Icon, title, tagline, description, gradient, bg, tag, image }) => (
                        <div
                            key={title}
                            className={`service-card group relative ${bg} border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                                {/* Icon on image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="svc-icon bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                                        <Icon className="text-white text-4xl drop-shadow-lg" />
                                    </div>
                                </div>

                                {/* Tag */}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                                        {tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                    {tagline}
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

                                <a
                                    href={`tel:${PHONE}`}
                                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                                >
                                    <FaPhone className="text-xs" />
                                    Get Quote
                                    <FaArrowRight className="text-xs" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 mb-4">Not sure which service you need?</p>
                    <a
                        href={`tel:${PHONE}`}
                        className="btn-accent text-base shadow-xl"
                    >
                        <FaPhone />
                        Call Our Experts – 7667820595
                    </a>
                </div>
            </div>
        </section>
    );
}
