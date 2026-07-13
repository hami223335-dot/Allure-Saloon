import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

interface FAQProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function FAQ({ darkMode, onOpenModal }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'booking' | 'policies' | 'treatments'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Queries' },
    { id: 'general', label: 'General' },
    { id: 'booking', label: 'Booking Desk' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'policies', label: 'Policies' }
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'all' || faq.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600"
          alt="FAQ background"
          className="absolute inset-0 w-full h-full object-cover filter brightness-45 contrast-115 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Concierge Clarification Chamber
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Frequently Asked Queries
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* FAQ Accordion list & Category Filters */}
      <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* FAQ categories bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16" id="faq-category-buttons">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`py-2 px-5 rounded-full text-3xs uppercase tracking-[0.2em] font-bold border transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 border-gold-400 text-white shadow-md'
                    : darkMode
                    ? 'border-gold-400/10 text-gold-200/70 hover:text-white bg-gold-500/5'
                    : 'border-gold-500/15 text-gold-800/80 hover:text-gold-950 bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4" id="faq-accordion-container">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? darkMode
                        ? 'bg-[#121212] border-gold-400/35 shadow-md'
                        : 'bg-white border-gold-500/35 shadow-md'
                      : darkMode
                      ? 'bg-[#0e0e0e] border-gold-400/10 hover:border-gold-400/20'
                      : 'bg-white border-gold-500/10 hover:border-gold-500/25'
                  }`}
                >
                  {/* Accordion Title Trigger Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                  >
                    <span className={`font-serif text-sm sm:text-base tracking-wide font-light flex items-center gap-3 transition-colors ${
                      isOpen ? 'text-gold-400 font-semibold' : darkMode ? 'text-white group-hover:text-gold-400' : 'text-[#1a1a1a] group-hover:text-gold-600'
                    }`}>
                      <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                      {faq.question}
                    </span>

                    <ChevronDown className={`w-4 h-4 text-gold-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Accordion Expandable Answer text */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`p-6 pt-0 border-t text-xs sm:text-sm font-light leading-relaxed ${
                          darkMode ? 'border-gold-400/5 text-gold-100/75' : 'border-gold-500/5 text-[#1a1a1a]/75'
                        }`}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concierge shortcut */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide">
            STILL HAVE UNRESOLVED QUESTIONS?
          </h2>
          <p className="text-xs font-light text-gold-100/85 max-w-xl mx-auto leading-relaxed">
            Our concierge front desk is live 10 hours daily. We would love to address any specific inquiries regarding our materials, pricing, or custom events.
          </p>
          <button
            onClick={() => onOpenModal('whatsapp')}
            className="inline-block py-3.5 px-7 rounded-lg text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-300 cursor-pointer"
          >
            Chat Live Now
          </button>
        </div>
      </section>
    </div>
  );
}
