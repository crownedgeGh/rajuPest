'use client';

import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const reviews = [
    {
        name: 'Ramesh Kumar',
        location: 'Sector 4, Bokaro',
        service: 'Termite Control',
        rating: 5,
        avatar: 'RK',
        avatarBg: 'bg-blue-500',
        review:
            'Excellent service! Raju pest control team came on time and treated our entire house for termites. Very professional approach, used proper equipment and safe chemicals. No termite problem since then. Highly recommended for anyone in Bokaro!',
        date: '2 weeks ago',
    },
    {
        name: 'Priya Sharma',
        location: 'City Centre, Bokaro',
        service: 'Cockroach Control',
        rating: 5,
        avatar: 'PS',
        avatarBg: 'bg-pink-500',
        review:
            'I was struggling with cockroach infestation in my kitchen for months. After one treatment by Raju pest control, the problem is completely solved. The gel treatment is odour-free and very effective. Will definitely call them again if needed.',
        date: '1 month ago',
    },
    {
        name: 'Suresh Mahto',
        location: 'Laxmi Market, Bokaro',
        service: 'Sanitization Services',
        rating: 5,
        avatar: 'SM',
        avatarBg: 'bg-green-600',
        review:
            'Got the full sanitization done for my shop after Diwali. Very thorough job, affordable pricing, and the team was very polite and professional. Quick service within 2 hours. My shop smells fresh and clean. Very happy with the service!',
        date: '3 weeks ago',
    },
    {
        name: 'Anita Devi',
        location: 'Sector 12, Bokaro',
        service: 'Bed Bug Treatment',
        rating: 5,
        avatar: 'AD',
        avatarBg: 'bg-purple-500',
        review:
            'Bed bugs were causing sleepless nights for my family. Called Raju pest control and they came the very next day. Two treatments as promised and now we sleep peacefully. The technician explained everything clearly. 5 stars!',
        date: '1 month ago',
    },
    {
        name: 'Vivek Singh',
        location: 'Chas, Bokaro',
        service: 'Rodent Control',
        rating: 5,
        avatar: 'VS',
        avatarBg: 'bg-orange-500',
        review:
            'Rats were damaging our store room. Raju pest control placed bait and traps at proper locations. Within a week, rat problem was completely solved. Good price, honest service. I referred them to my neighbour too!',
        date: '6 weeks ago',
    },
    {
        name: 'Meena Gupta',
        location: 'Sector 6, Bokaro',
        service: 'Mosquito Control',
        rating: 5,
        avatar: 'MG',
        avatarBg: 'bg-teal-500',
        review:
            'Mosquito problem was severe in our area. After the fogging treatment by these experts, huge relief! The effect lasted for months. Reasonably priced and very prompt service. Would recommend to everyone in Bokaro.',
        date: '2 months ago',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const itemsPerPage = 3;
    const total = reviews.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    const visible = [
        reviews[current % total],
        reviews[(current + 1) % total],
        reviews[(current + 2) % total],
    ];

    return (
        <section id="testimonials" className="py-12 sm:py-24 bg-gradient-to-b from-dark-900 to-primary-900 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 hero-pattern opacity-10" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        <FaStar className="text-yellow-400" />
                        Customer Reviews
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                        What Our Customers{' '}
                        <span className="text-primary-400">Say About Us</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
                        Real reviews from real customers across Bokaro. We let our work speak for itself.
                    </p>

                    {/* Star summary */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-xl" />
                            ))}
                        </div>
                        <span className="text-white font-bold text-xl">5.0</span>
                        <span className="text-gray-400">/ 5.0 from 500+ customers</span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {visible.map((review, i) => (
                        <div
                            key={`${review.name}-${i}`}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Quote icon */}
                            <FaQuoteLeft className="text-primary-400/40 text-4xl mb-4" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, j) => (
                                    <FaStar key={j} className="text-yellow-400 text-sm" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                                "{review.review}"
                            </p>

                            {/* Service tag */}
                            <div className="mb-4">
                                <span className="bg-primary-500/20 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full">
                                    ✓ {review.service}
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <div
                                    className={`${review.avatarBg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                                >
                                    {review.avatar}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-white font-semibold text-sm">{review.name}</p>
                                        <MdVerified className="text-primary-400 text-sm" />
                                    </div>
                                    <p className="text-gray-400 text-xs">
                                        {review.location} · {review.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-x-0.5"
                        aria-label="Previous reviews"
                    >
                        <FaChevronLeft />
                    </button>

                    <div className="flex gap-2">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary-400 scale-125' : 'bg-white/30'
                                    }`}
                                aria-label={`Go to review ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all hover:translate-x-0.5"
                        aria-label="Next reviews"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
