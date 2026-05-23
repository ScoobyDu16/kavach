import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Phone, MessageCircle, Clock, CheckCircle, XCircle, Plus, Minus, ArrowLeft } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';
import { PHONE_NUMBER } from '@/constants';
import { openWhatsApp } from '@/utils/whatsapp';

export default function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? '');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-5xl mb-4">🐛</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
        <p className="text-gray-500 mb-6">We couldn't find that service.</p>
        <Link to="/services" className="text-green-600 font-semibold hover:underline">
          ← Browse All Services
        </Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    openWhatsApp(`Hello, I want to enquire about ${service.name}.`);
  };

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-1 text-green-200 hover:text-white text-sm mb-6">
            <ArrowLeft size={15} />
            Back to Services
          </Link>
          <div className="text-6xl mb-4">
            {getEmoji(service.slug)}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{service.name}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{service.shortDescription}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* About */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
          <div className="flex items-center gap-2 mt-4 text-gray-500">
            <Clock size={16} className="text-green-600" />
            <span className="text-sm">Estimated Duration: <strong>{service.duration}</strong></span>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {Object.entries(service.pricing).map(([label, price], i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <span className="text-gray-700 font-medium">{label}</span>
                <span className="font-bold text-green-700 text-lg">
                  ₹{(price as number).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">* Prices may vary based on infestation severity and location.</p>
        </section>

        {/* Dos & Don'ts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dos &amp; Don'ts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                Dos
              </h3>
              <ul className="space-y-2">
                {service.dosAndDonts.dos.map((d) => (
                  <li key={d} className="text-sm text-green-700 flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <XCircle size={18} className="text-red-500" />
                Don'ts
              </h3>
              <ul className="space-y-2">
                {service.dosAndDonts.donts.map((d) => (
                  <li key={d} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✗</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommendations</h2>
          <ul className="space-y-3">
            {service.recommendations.map((r) => (
              <li key={r} className="flex items-start gap-3 text-gray-600 bg-gray-50 rounded-xl px-5 py-3">
                <span className="text-green-500 font-bold mt-0.5">→</span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <Minus size={18} className="shrink-0 text-green-600" />
                  ) : (
                    <Plus size={18} className="shrink-0 text-gray-400" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-green-700 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Book {service.name}?</h2>
          <p className="text-green-100 mb-6">Get a confirmed slot within 30 minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </section>
      </div>

      {/* Sticky mobile CTA already in layout */}
    </div>
  );
}

function getEmoji(slug: string): string {
  const map: Record<string, string> = {
    'bed-bug-control': '🛏️',
    'mosquito-control': '🦟',
    'cockroach-control': '🐜',
    'rodent-control': '🐀',
    'termite-control': '🐛',
    'lizard-control': '🦎',
    'commercial-pest-control': '🏢',
  };
  return map[slug] ?? '🐛';
}
