import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  WHATSAPP_NUMBER,
} from '@/constants';
import Container from '@/components/ui/Container';

const serviceLinks = [
  { label: 'Bed Bug Control', href: '/services/bed-bug-control' },
  { label: 'Mosquito Control', href: '/services/mosquito-control' },
  { label: 'Cockroach Control', href: '/services/cockroach-control' },
  { label: 'Rodent Control', href: '/services/rodent-control' },
  { label: 'Termite Control', href: '/services/termite-control' },
  { label: 'Commercial Pest Control', href: '/services/commercial-pest-control' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img src="/logo.png" alt={COMPANY_NAME} className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional pest control services for homes and businesses. Certified, eco-friendly, and effective.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Call"
              >
                <Phone size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Commercial Enquiry', href: '/commercial-enquiry' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-green-400" />
                {ADDRESS}
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-green-400" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-green-400" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-4 pb-10 md:pb-4 text-center text-xs text-gray-500 space-y-1">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/amarpal-singh-26381b153/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Amar
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
