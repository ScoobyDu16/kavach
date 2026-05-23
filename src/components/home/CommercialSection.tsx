import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, Hotel, Package, FlaskConical, GraduationCap } from 'lucide-react';
import Container from '@/components/ui/Container';

const industries = [
  { icon: Building2, label: 'Offices & IT Parks' },
  { icon: UtensilsCrossed, label: 'Restaurants & Food Courts' },
  { icon: Hotel, label: 'Hotels & Hospitality' },
  { icon: Package, label: 'Warehouses & Storage' },
  { icon: FlaskConical, label: 'Hospitals & Clinics' },
  { icon: GraduationCap, label: 'Schools & Colleges' },
];

export default function CommercialSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Commercial Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Protecting Businesses Across Every Industry
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Annual Maintenance Contracts (AMC) with compliance documentation — valid for FSSAI, municipal, and hospitality audits. Scheduled treatments around your business hours.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                'Pest control certificates for FSSAI audits',
                'Night & weekend service slots available',
                'Customised treatment plans per industry',
                'Priority response for AMC clients',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/commercial-enquiry"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-100"
            >
              Request Commercial Quote
            </Link>
          </motion.div>

          {/* Right: Industry grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
