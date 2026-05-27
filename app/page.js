import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import CTABanner from '../components/CTABanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <TrustBar />
            <Services />
            <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
            <ServiceAreas />
            <CTABanner />
            <ContactSection />
            <Footer />
            <FloatingCTA />
        </main>
    );
}
