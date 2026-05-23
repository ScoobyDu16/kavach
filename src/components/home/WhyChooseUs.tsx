import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Zap, BadgeIndianRupee, RotateCcw } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Professionals',
    description: 'All technicians are licensed and trained under government-approved pest control standards.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Chemicals',
    description: 'Central Insecticides Board approved, low-toxicity, water-based formulations.',
  },
  {
    icon: Zap,
    title: 'Same-Day Service',
    description: 'Book by morning, get treatment the same day — subject to slot availability.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Pricing',
    description: 'Transparent pricing, no hidden charges. AMC plans for year-round savings.',
  },
  {
    icon: RotateCcw,
    title: 'Warranty Support',
    description: '30-day warranty on most treatments. If pests return, so do we — free.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Pest Control You Can Trust"
          subtitle="We combine expertise, safety, and speed to give you the best pest control experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-7 rounded-2xl bg-green-50 border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-13 h-13 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 p-3">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
