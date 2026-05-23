import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';
import { generalFaqs } from '@/data/faqs';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {generalFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">
                  {faq.question}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                  {open === i
                    ? <Minus size={14} className="text-green-600" />
                    : <Plus size={14} className="text-gray-500" />
                  }
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
