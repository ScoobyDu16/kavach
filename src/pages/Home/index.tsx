import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CommercialSection from '@/components/home/CommercialSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
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
