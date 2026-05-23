import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';
import { residentialServices } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Residential Services"
          title="Solutions for Every Home Pest Problem"
          subtitle="Trusted treatments for the most common household pests — safe for your family and pets."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentialServices.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-bold text-sm hover:bg-green-600 hover:text-white transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
