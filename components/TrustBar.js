import { FaStar, FaUsers, FaTools, FaClock } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const stats = [
    {
        icon: FaTools,
        value: '6+',
        label: 'Pest Services',
        desc: 'Complete solutions',
        color: 'bg-primary-50 text-primary-600 border-primary-100',
        iconBg: 'bg-primary-100',
    },
    {
        icon: FaUsers,
        value: '500+',
        label: 'Happy Customers',
        desc: 'Trusted in Bokaro',
        color: 'bg-orange-50 text-orange-600 border-orange-100',
        iconBg: 'bg-orange-100',
    },
    {
        icon: FaStar,
        value: '5★',
        label: 'Customer Rating',
        desc: '100% satisfaction',
        color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
        iconBg: 'bg-yellow-100',
    },
    {
        icon: FaClock,
        value: '24/7',
        label: 'Support Available',
        desc: 'We are always here',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        iconBg: 'bg-blue-100',
    },
];

export default function TrustBar() {
    return (
        <section className="relative z-20 -mt-6 sm:-mt-12 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                    {stats.map(({ icon: Icon, value, label, desc, color, iconBg }) => (
                        <div
                            key={label}
                            className={`bg-white rounded-xl sm:rounded-2xl shadow-xl border ${color.split(' ')[2] || 'border-gray-100'} p-3 sm:p-5 flex items-center gap-2 sm:gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            <div className={`${iconBg} p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0`}>
                                <Icon className={`text-lg sm:text-2xl ${color.split(' ')[1]}`} />
                            </div>
                            <div className="min-w-0">
                                <p className={`text-base sm:text-2xl font-extrabold ${color.split(' ')[1]} leading-tight`}>
                                    {value}
                                </p>
                                <p className="text-gray-700 font-semibold text-[11px] sm:text-sm leading-tight">{label}</p>
                                <p className="text-gray-400 text-[10px] sm:text-xs hidden sm:block">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
