import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/constants';

export default function StickyMobileCTA() {
  const waMessage = encodeURIComponent('Hello, I want to enquire about pest control services.');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-gray-200 bg-white shadow-lg">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white font-semibold text-sm"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white font-semibold text-sm"
      >
        <Phone size={18} />
        Call Now
      </a>
    </div>
  );
}
