import { Shield } from 'lucide-react';

interface PrivacyProps {
  darkMode: boolean;
}

export default function Privacy({ darkMode }: PrivacyProps) {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center py-12">
          <Shield className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <h1 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wider mb-2">
            Privacy Policy
          </h1>
          <div className="h-px w-12 bg-gold-400 mx-auto" />
          <p className="text-3xs sm:text-2xs uppercase tracking-widest text-gold-500 font-bold mt-2">
            Effective Date: July 13, 2026
          </p>
        </div>

        <div className={`p-8 sm:p-12 rounded-3xl border space-y-6 font-light leading-relaxed text-xs sm:text-sm ${
          darkMode
            ? 'bg-[#121212] border-gold-400/10 text-gold-100/80'
            : 'bg-white border-gold-500/15 text-[#1a1a1a]/80'
        }`}>
          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            1. SCOPE & INTRODUCTION
          </h3>
          <p>
            At Allure Salon & Spa, we hold your absolute personal trust and physical well-being as sacred. This Policy explains how we collect, store, shield, and process your personal credentials (names, contact coordinates, hair profile files, and therapeutic logs) whenever you access our website or engage our concierge scheduling desk.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            2. CREDENTIAL COLLECTION
          </h3>
          <p>
            We collect standard contact profiles that you actively provide through our inquiry forms (such as names, digital emails, and phone indices) and diagnostic preferences regarding hair, nails, or skincare requirements. We do not store financial payment information on this website; all premium transactions are routed through internationally validated secure cloud gateways.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            3. HOW WE SAFEGUARD YOUR DATA
          </h3>
          <p>
            Allure employs military-grade Secure Sockets Layer (SSL) encryption matrices to transmit electronic data securely. Access to client hair profiles or clinical skin history charts is restricted strictly to your consulting coiffeurs, aesthetic specialists, and authorized salon directors.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            4. THIRD-PARTY DISCLOSURE
          </h3>
          <p>
            We strictly never lease, barter, or distribute your private profiles, email targets, or skincare records to secondary third-party brokers under any circumstances. All coordinates are handled strictly in-house to satisfy booking confirmations.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            5. AMENDMENTS & CONCIERGE SUPPORT
          </h3>
          <p>
            This Privacy Policy may undergo seasonal updates to reflect new regulatory compliance standards. If you have any inquiries regarding your private records or wish to request absolute deletion of your historical booking cards, please message our concierge front desk directly.
          </p>
        </div>
      </div>
    </div>
  );
}
