import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, WHATSAPP_NUMBER, CITY } from '@/constants';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  const waMessage = encodeURIComponent('Hello, I want to book a pest control service.');

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden min-h-[580px] flex items-center">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200">
              <ShieldCheck size={16} />
              Certified &amp; Eco-Friendly Pest Control
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Protect Your Home{' '}
              <br className="hidden sm:block" />
              from{' '}
              <span className="text-green-600">Pests</span> Today
            </h1>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-lg">
              Professional pest control services in {CITY}. Same-day service,
              certified professionals, and 30-day warranty on every treatment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-green-700 active:scale-95 transition-all shadow-lg shadow-green-200 whitespace-nowrap"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 border-2 border-gray-800 text-gray-900 bg-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-gray-50 active:scale-95 transition-all whitespace-nowrap"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-gray-100">
              {[
                { label: '5,000+', sub: 'Happy Customers' },
                { label: '10+ Yrs', sub: 'Experience' },
                { label: '30-Day', sub: 'Warranty' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-green-700 leading-none">{stat.label}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px] bg-green-100 rounded-full flex items-center justify-center shadow-inner">
              <img src="/logo.png" alt="Kavach Pest Control" className="w-56 h-56 object-contain drop-shadow-lg select-none" />
              {/* Floating pest icons */}
              {[
                { emoji: '🦟', top: '8%',  left: '6%'  },
                { emoji: '🐜', top: '6%',  right: '10%' },
                { emoji: '🐀', bottom: '10%', left: '4%' },
                { emoji: '🐛', bottom: '8%', right: '6%' },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className="absolute text-3xl"
                  style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                >
                  {item.emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-100 rounded-full opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-emerald-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
    </section>
  );
}
