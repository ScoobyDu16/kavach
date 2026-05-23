import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/constants';
import Container from '@/components/ui/Container';

export default function ContactCTA() {
  const waMessage = encodeURIComponent('Hello, I want to book a pest control service.');

  return (
    <section className="py-16 md:py-24 bg-green-700">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Ready to Make Your Home Pest-Free?
          </h2>
          <p className="text-green-100 text-lg mb-10 leading-relaxed">
            Contact us now and get a free quote. Most bookings are confirmed within 30 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-base hover:bg-green-50 active:scale-95 transition-all shadow-lg whitespace-nowrap"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-600 active:scale-95 transition-all whitespace-nowrap"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
