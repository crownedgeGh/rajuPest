import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const PHONE = '+917667820595';

const areas = [
    'Bokaro Steel City',
    'Sector 1 – 12',
    'City Centre',
    'Chas',
    'Laxmi Market',
    'Bokaro Town',
    'Jagannathpur',
    'Phusro',
    'Chandankiyari',
    'Gomia',
    'Tenughat',
    'Bermo',
    'Nawadih',
    'Petarwar',
    'Kasmar',
    'Charki Dadri',
];

export default function ServiceAreas() {
    return (
        <section className="py-12 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Map placeholder / image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=80"
                                alt="Bokaro service area map"
                                className="w-full h-80 object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

                            {/* Overlay content */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass rounded-2xl px-5 py-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-red-500 w-3 h-3 rounded-full animate-ping" />
                                        <span className="text-white font-bold text-sm">Live Coverage – Bokaro District</span>
                                    </div>
                                    <p className="text-gray-300 text-xs">
                                        We cover all of Bokaro district and surrounding areas. Call us to confirm coverage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-5 -right-5 bg-primary-600 text-white rounded-2xl px-5 py-3 shadow-xl">
                            <p className="font-bold text-lg">15+</p>
                            <p className="text-primary-200 text-xs">Areas Covered</p>
                        </div>
                    </div>

                    {/* RIGHT: Areas grid */}
                    <div className="order-1 lg:order-2">
                        <span className="section-tag">
                            <FaMapMarkerAlt className="text-primary-600" />
                            Service Areas
                        </span>
                        <h2 className="section-title text-dark-900 mb-4">
                            We Serve All of{' '}
                            <span className="gradient-text">Bokaro</span>
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Raju Pest Control Services proudly serves the entire Bokaro district. Whether
                            you're in Steel City, Chas, or the surrounding towns — we bring professional
                            pest management to your doorstep.
                        </p>

                        {/* Areas grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {areas.map((area) => (
                                <div
                                    key={area}
                                    className="flex items-center gap-2.5 bg-gray-50 hover:bg-primary-50 border border-gray-100 hover:border-primary-200 rounded-xl px-4 py-3 transition-all duration-200 group"
                                >
                                    <FaMapMarkerAlt className="text-primary-500 text-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-700 text-sm font-medium group-hover:text-primary-700 transition-colors">
                                        {area}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={`tel:${PHONE}`}
                                className="btn-accent"
                            >
                                <FaPhone />
                                Check My Area
                            </a>
                            <p className="text-gray-400 text-sm flex items-center">
                                or just call – we'll confirm coverage instantly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
