import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Check, Scissors, Brush, Heart, Gem } from 'lucide-react';
import { SERVICES } from '../data';
import ParallaxImage from './ParallaxImage';

interface ServicesProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Services({ darkMode, onOpenModal }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'skin' | 'body' | 'bridal'>('all');

  const filters = [
    { id: 'all', label: 'All Rituals' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'skin', label: 'Skin Care' },
    { id: 'body', label: 'Spa & Body' },
    { id: 'bridal', label: 'Bridal Couture' },
  ];

  const filteredServices = SERVICES.filter(
    (service) => activeFilter === 'all' || service.category === activeFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hair':
        return <Scissors className="w-5 h-5 text-gold-400" />;
      case 'skin':
        return <Brush className="w-5 h-5 text-gold-400" />;
      case 'body':
        return <Heart className="w-5 h-5 text-gold-400" />;
      case 'bridal':
        return <Gem className="w-5 h-5 text-gold-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section id="services-page-header" className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <ParallaxImage
          id="services-header-parallax"
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury services"
          containerClassName="absolute inset-0 w-full h-full"
          className="filter brightness-50"
          yOffset={45}
          scaleStart={1.12}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Apothecary of High Beauty
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Treatments & Rituals
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Services Grid & Filters */}
      <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 mb-16" id="services-filter-bar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`py-2.5 px-6 rounded-full text-2xs uppercase tracking-[0.2em] font-semibold border transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 border-gold-400 text-white shadow-lg shadow-gold-500/10'
                    : darkMode
                    ? 'border-gold-400/10 text-gold-200/70 hover:text-white hover:border-gold-400/40 bg-gold-500/5'
                    : 'border-gold-500/15 text-gold-800/80 hover:text-gold-950 hover:border-gold-500 bg-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            id="services-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-3xl border overflow-hidden flex flex-col md:flex-row transition-all duration-500 group glow-gold-hover ${
                    darkMode
                      ? 'bg-[#121212]/95 border-gold-400/10 hover:border-gold-400/35 text-gold-100'
                      : 'bg-white border-gold-500/10 hover:border-gold-500/35 text-[#1a1a1a]'
                  }`}
                >
                  {/* Service Thumbnail Cover */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-black/15 z-10" />
                    <ParallaxImage
                      id={`services-item-parallax-${service.id}`}
                      src={service.image}
                      alt={service.name}
                      containerClassName="w-full h-full"
                      scaleStart={1.1}
                      scaleHover={1.18}
                      yOffset={25}
                    />
                    <div className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-gold-400/20 shadow-md">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>

                  {/* Service Content Details */}
                  <div className="p-8 w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold font-serif">
                          {service.category} RITUAL
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gold-400/80 font-medium">
                          <Clock className="w-3.5 h-3.5" /> {service.duration}
                        </span>
                      </div>

                      <h3 className={`font-serif text-xl font-light tracking-wide mb-3 ${
                        darkMode ? 'text-white' : 'text-[#1a1a1a]'
                      }`}>
                        {service.name}
                      </h3>

                      <p className={`text-xs leading-relaxed font-light mb-5 ${
                        darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'
                      }`}>
                        {service.description}
                      </p>

                      {/* Features Bullet List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 text-[11px] font-light">
                            <span className="p-0.5 rounded-full bg-gold-400/10 text-gold-400 shrink-0">
                              <Check className="w-3 h-3" />
                            </span>
                            <span className="opacity-80">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom strip details */}
                    <div className="flex justify-between items-center pt-4 border-t border-gold-400/5">
                      <div className="flex flex-col">
                        <span className="text-3xs tracking-widest text-gold-500 uppercase font-medium">Investment</span>
                        <span className="font-serif text-lg font-bold text-gold-400 mt-0.5">{service.price}</span>
                      </div>
                      
                      <button
                        onClick={() => onOpenModal('booking')}
                        className="py-2.5 px-5 rounded-lg text-2xs uppercase tracking-widest font-bold text-white bg-gold-500 hover:bg-gold-400 shadow-md shadow-gold-500/10 active:shadow-none transition-all duration-300"
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ block shortcut */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide">
            DO YOU HAVE SPECIAL BEAUTY REQUESTS?
          </h2>
          <p className="text-xs font-light text-gold-100/85 max-w-xl mx-auto leading-relaxed">
            Allure excels in tailoring customized packages, full bridal preparations, private corporate events, or home-suite wellness services. Reach our luxury concierge today.
          </p>
          <button
            onClick={() => onOpenModal('whatsapp')}
            className="inline-block py-3 px-6 rounded-lg text-xs tracking-widest uppercase font-bold text-gold-200 border border-gold-400/30 hover:border-gold-300 hover:bg-gold-500/5 transition-colors duration-300 cursor-pointer"
          >
            Chat With Concierge
          </button>
        </div>
      </section>
    </div>
  );
}
