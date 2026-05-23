import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/constants';
import Container from '@/components/ui/Container';

/* ─── shared active-link style helpers ─── */
const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `relative text-sm font-semibold transition-colors pb-0.5 border-b-2 ${
    isActive
      ? 'text-green-700 border-green-600'
      : 'text-gray-600 border-transparent hover:text-green-700 hover:border-green-300'
  }`;

const drawerLink = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
    isActive
      ? 'bg-green-50 text-green-700 font-semibold'
      : 'text-gray-700 hover:bg-gray-50'
  }`;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const close = () => setDrawerOpen(false);

  const waMessage = encodeURIComponent('Hello, I want to enquire about pest control services.');

  return (
    <>
      {/* ─────────────── Top bar ─────────────── */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 hover:opacity-85 transition-opacity" onClick={close}>
              <img src="/logo.png" alt={COMPANY_NAME} className="h-16 w-auto object-contain" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={desktopLink}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/commercial-enquiry"
                className={({ isActive }) =>
                  `text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                    isActive
                      ? 'bg-green-600 text-white border-green-600'
                      : 'text-green-700 border-green-600 hover:bg-green-50'
                  }`
                }
              >
                Commercial Enquiry
              </NavLink>
            </nav>

            {/* Desktop Call CTA */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hidden md:inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-colors"
            >
              <Phone size={15} />
              Call Now
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      {/* ─────────────── Mobile drawer ─────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Scrim / backdrop */}
            <motion.div
              key="scrim"
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.aside
              key="drawer"
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Link to="/" className="flex items-center" onClick={close}>
                  <img src="/logo.png" alt={COMPANY_NAME} className="h-9 w-auto object-contain" />
                </Link>
                <button
                  onClick={close}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    className={drawerLink}
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/commercial-enquiry"
                  className={drawerLink}
                  onClick={close}
                >
                  Commercial Enquiry
                </NavLink>
              </nav>

              {/* Drawer bottom CTAs */}
              <div className="px-4 py-5 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-700 transition-colors"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-gray-800 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
