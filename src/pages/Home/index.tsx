import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CommercialSection from '@/components/home/CommercialSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import ContactCTA from '@/components/home/ContactCTA';
import { SITE_URL, PHONE_NUMBER, EMAIL, ADDRESS } from '@/constants';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kavach Pest Control',
  description:
    'Professional pest control services in Gwalior for homes and businesses. Certified, eco-friendly treatments for bed bugs, mosquitoes, cockroaches, rodents, termites, and more.',
  url: SITE_URL,
  telephone: PHONE_NUMBER,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gwalior',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
    streetAddress: ADDRESS,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.2026,
    longitude: 78.1438,
  },
  areaServed: {
    '@type': 'City',
    name: 'Gwalior',
  },
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 08:00-20:00',
  image: `${SITE_URL}/logo.png`,
  sameAs: [`https://wa.me/918839353952`],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Pest Control Services in Gwalior"
        description="Kavach Pest Control — certified, eco-friendly pest control for homes and businesses in Gwalior. Same-day service for bed bugs, mosquitoes, termites, cockroaches & more. Call now."
        canonical="/"
        structuredData={localBusinessSchema}
      />
      <HeroSection />
      <ServicesSection />
      <CommercialSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
