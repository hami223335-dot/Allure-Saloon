import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, ShieldAlert, Sparkles, MessageCircleCode } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'social' | 'whatsapp' | 'booking' | null;
  darkMode: boolean;
}

export default function PremiumModal({ isOpen, onClose, type, darkMode }: PremiumModalProps) {
  if (!isOpen || !type) return null;

  const getModalContent = () => {
    switch (type) {
      case 'contact':
        return {
          icon: <ShieldAlert className="w-12 h-12 text-gold-400 mb-4" />,
          title: 'Demo Website',
          subtitle: 'Contact Form Disabled',
          description: 'This contact form is disabled because this is a demonstration website. Contact the developer to activate this feature.',
          btnText: 'Understand'
        };
      case 'social':
        return {
          icon: <Lock className="w-12 h-12 text-gold-400 mb-4" />,
          title: 'Demo Website',
          subtitle: 'Social Account Disconnected',
          description: 'This social media account is not connected. Contact the developer to connect your real social media accounts.',
          btnText: 'Acknowledge'
        };
      case 'whatsapp':
        return {
          icon: <MessageCircleCode className="w-12 h-12 text-green-500 mb-4" />,
          title: 'Demo Website',
          subtitle: 'WhatsApp Concierge',
          description: 'WhatsApp integration will be activated after purchasing this website. Elevate your client engagement with automatic booking.',
          btnText: 'Unlock Premium Features'
        };
      case 'booking':
        return {
          icon: <Sparkles className="w-12 h-12 text-gold-400 mb-4" />,
          title: 'Allure Sanctuary Booking',
          subtitle: 'VIP Reservation Suite',
          description: 'This premium, automatic booking scheduler will be integrated with your calendar and database (such as Google Calendar & Stripe) in production. Please contact the developer to connect live scheduling.',
          btnText: 'Secure Seat'
        };
      default:
        return {
          icon: <Sparkles className="w-12 h-12 text-gold-400 mb-4" />,
          title: 'Allure Luxury Suite',
          subtitle: 'Premium Feature',
          description: 'Feature is in preview mode. Contact developer to unlock fully.',
          btnText: 'Close'
        };
    }
  };

  const content = getModalContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-md p-8 rounded-2xl overflow-hidden border ${
            darkMode
              ? 'bg-[#121212]/95 border-gold-400/20 text-gold-100'
              : 'bg-[#faf8f2]/95 border-gold-500/20 text-[#1a1a1a]'
          } glow-gold shadow-2xl z-10`}
        >
          {/* Accent light ray */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-1.5 rounded-full hover:bg-gold-500/10 transition-colors ${
              darkMode ? 'text-gold-300' : 'text-gold-700'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center text-center mt-2">
            <motion.div
              initial={{ rotate: -15, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.1, type: 'spring' }}
            >
              {content.icon}
            </motion.div>
            
            <span className="font-serif italic tracking-wider text-sm uppercase text-gold-500 font-medium">
              {content.title}
            </span>
            
            <h3 className={`font-serif text-2xl font-bold tracking-tight mt-1 mb-3 ${
              darkMode ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              {content.subtitle}
            </h3>

            <div className={`h-px w-16 my-2 bg-gradient-to-r from-transparent via-gold-400 to-transparent`} />

            <p className={`text-sm leading-relaxed mt-2 mb-6 font-light ${
              darkMode ? 'text-gold-100/80' : 'text-[#1a1a1a]/80'
            }`}>
              {content.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-lg text-sm tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-lg shadow-gold-500/20 active:shadow-none transition-all duration-300"
            >
              {content.btnText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
