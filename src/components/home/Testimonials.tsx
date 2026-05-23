import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="What Our Customers Say"
          title="Trusted by Homeowners & Businesses"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-4 hover:border-green-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">"{t.text}"</p>
              <div className="pt-3 border-t border-gray-200">
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.location} · {t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
