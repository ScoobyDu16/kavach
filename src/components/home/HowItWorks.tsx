import { motion } from 'framer-motion';
import { Search, Syringe, ShieldCheck, Activity } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Inspect',
    description: 'Thorough inspection to identify pest type, infestation level, and entry points.',
  },
  {
    icon: Syringe,
    step: '02',
    title: 'Treat',
    description: 'Targeted treatment — spray, gel bait, or fumigation — for complete elimination.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Prevent',
    description: 'Seal entry points and aftercare advice to stop re-infestation.',
  },
  {
    icon: Activity,
    step: '04',
    title: 'Monitor',
    description: 'AMC clients get scheduled follow-up visits and free re-treatments if needed.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="Simple. Effective. Guaranteed."
          subtitle="Our 4-step process ensures complete pest elimination and long-term protection."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                {step}
              </span>
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-4 border border-green-100">
                <Icon size={24} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
