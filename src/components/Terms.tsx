import { Scale } from 'lucide-react';

interface TermsProps {
  darkMode: boolean;
}

export default function Terms({ darkMode }: TermsProps) {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center py-12">
          <Scale className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <h1 className="font-serif text-3xl sm:text-4xl font-light uppercase tracking-wider mb-2">
            Terms & Conditions
          </h1>
          <div className="h-px w-12 bg-gold-400 mx-auto" />
          <p className="text-3xs sm:text-2xs uppercase tracking-widest text-gold-500 font-bold mt-2">
            Last Updated: July 13, 2026
          </p>
        </div>

        <div className={`p-8 sm:p-12 rounded-3xl border space-y-6 font-light leading-relaxed text-xs sm:text-sm ${
          darkMode
            ? 'bg-[#121212] border-gold-400/10 text-gold-100/80'
            : 'bg-white border-gold-500/15 text-[#1a1a1a]/80'
        }`}>
          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            1. ACCEPTANCE OF COUTURE CONDITIONS
          </h3>
          <p>
            By accessing the digital services of Allure Salon & Spa, or booking appointments through our concierge desks, you actively declare absolute alignment with these Terms and Conditions. These terms safeguard the high quality, sanitation, and professional availability of our master coiffeurs and aesthetic specialists.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            2. CANCELLATION & CONCIERGE RESCHEDULING
          </h3>
          <p>
            Because we prepare customized clinical products, sanitize individual workstations, and allocate dedicated blocks for each guest, we request 24 hours notice for standard adjustments, and 48 hours notice for multi-ritual or bridal packages. Cancellations made outside these blocks may incur standard boutique booking fees.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            3. SPECIALIST RE-ALLOCATION
          </h3>
          <p>
            While Allure makes every reasonable effort to preserve your selected stylist, director, or aesthetic therapist, we reserve the right to smoothly transfer bookings to an equally certified artisan in the rare event of emergency leave or scheduling conflicts, ensuring zero compromise to your luxurious experience.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            4. PHYSIOLOGICAL HEALTH DECLARATIONS
          </h3>
          <p>
            Guests are required to declare any existing physical health conditions, allergies, skin sensitivities, or pregnancy status immediately during initial skincare profiling, helping our master aesthetic experts avoid contraindicated chemical peels or marma alignments.
          </p>

          <h3 className={`font-serif text-lg font-semibold border-b pb-2 ${darkMode ? 'text-white border-gold-400/10' : 'text-[#1a1a1a] border-gold-500/10'}`}>
            5. GOVERNING LEGAL MATRICES
          </h3>
          <p>
            These Terms & Conditions are governed under the territorial legal codes of Islamabad, Pakistan. Any disputes arising from salon operations, appointments, or services shall be addressed directly through mutual conciliatory panels.
          </p>
        </div>
      </div>
    </div>
  );
}
