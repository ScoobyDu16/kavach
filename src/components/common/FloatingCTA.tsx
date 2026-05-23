import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/constants';

const waMessage = encodeURIComponent(
  'Hello, I want to enquire about pest control services.'
);

const actions = [
  {
    key: 'whatsapp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`,
    label: 'WhatsApp',
    icon: MessageCircle,
    className: 'bg-green-500 hover:bg-green-600 shadow-green-200',
    external: true,
  },
  {
    key: 'call',
    href: `tel:${PHONE_NUMBER}`,
    label: 'Call Now',
    icon: Phone,
    className: 'bg-gray-900 hover:bg-gray-800 shadow-gray-300',
    external: false,
  },
] as const;

/**
 * Returns true only on devices that have a real hoverable pointer (mouse/trackpad).
 * On touch-only devices this is false — hover events must not control open state there.
 */
const isHoverDevice = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  /* ── Hover handlers (desktop only) ── */
  const handleMouseEnter = () => {
    if (isHoverDevice()) setOpen(true);
  };
  const handleMouseLeave = () => {
    if (isHoverDevice()) setOpen(false);
  };

  /* ── Click handler (mobile toggle, desktop ignored because hover already controls it) ── */
  const handleFabClick = () => {
    if (!isHoverDevice()) setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Backdrop — tap-outside to close on mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* FAB wrapper */}
      <div
        className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Sub-action buttons ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="actions"
              className="flex flex-col items-end gap-2.5"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {actions.map(({ key, href, label, icon: Icon, className, external }, i) => (
                <motion.a
                  key={key}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  variants={{
                    hidden: { opacity: 0, y: 14, scale: 0.82 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: (actions.length - 1 - i) * 0.08,
                        type: 'spring',
                        stiffness: 340,
                        damping: 24,
                      },
                    },
                  }}
                  className={`
                    flex items-center gap-2.5 text-white
                    pl-4 pr-5 py-3 rounded-full
                    shadow-lg text-sm font-semibold
                    whitespace-nowrap transition-colors duration-150
                    ${className}
                  `}
                >
                  <Icon size={17} strokeWidth={2.3} />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main FAB ── */}
        <motion.button
          onClick={handleFabClick}
          aria-label={open ? 'Close contact options' : 'Contact us'}
          whileTap={{ scale: 0.88 }}
          className={`
            w-14 h-14 rounded-full flex items-center justify-center
            shadow-xl shadow-green-300/60
            transition-colors duration-200
            focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300
            ${open ? 'bg-gray-800' : 'bg-green-600 hover:bg-green-700'}
          `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <X size={22} className="text-white" strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <MessageCircle size={24} className="text-white" strokeWidth={2} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
