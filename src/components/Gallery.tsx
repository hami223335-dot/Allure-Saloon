import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, HelpCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { GALLERY } from '../data';

interface GalleryProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Gallery({ darkMode, onOpenModal }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'makeup' | 'nails' | 'spa' | 'before-after'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Before & After Interactive Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'hair', label: 'Hair Coiffure' },
    { id: 'makeup', label: 'Glamour Makeup' },
    { id: 'nails', label: 'Luxury Nails' },
    { id: 'spa', label: 'Wellness Spa' },
    { id: 'before-after', label: 'Before & After' }
  ];

  const filteredItems = GALLERY.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  // Before-After Slider Drag Handler
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const openLightbox = (id: string) => {
    const idx = GALLERY.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
    }
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury gallery portfolio"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-125 scale-105 animate-pulse"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Exhibition of Haute Esthétique
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Luxury Portfolio
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Gallery Filter controls */}
      <section className={`py-16 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Row */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12" id="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`py-2 px-5 rounded-full text-3xs uppercase tracking-[0.2em] font-bold border transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 border-gold-400 text-white shadow-md'
                    : darkMode
                    ? 'border-gold-400/10 text-gold-200/70 hover:text-white bg-gold-500/5'
                    : 'border-gold-500/15 text-gold-800/80 hover:text-gold-950 bg-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Interactive Before & After Showcase Widget (Sticky Highlight when filtering before-after or all) */}
          {(activeFilter === 'all' || activeFilter === 'before-after') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto mb-16 space-y-6"
            >
              <div className="text-center">
                <span className="font-serif italic text-2xs text-gold-500 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Interactive comparison
                </span>
                <h3 className={`font-serif text-xl font-light uppercase tracking-wide ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  Balayage Transformation
                </h3>
                <p className={`text-3xs font-light mt-1 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/60'}`}>
                  Drag the gold slider handle to compare unstyled hair with Elena’s French Balayage.
                </p>
              </div>

              {/* Slider Sandbox */}
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-96 w-full rounded-2xl overflow-hidden select-none border border-gold-400/20 shadow-2xl cursor-ew-resize"
              >
                {/* BEFORE Image (Left Side) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800"
                    alt="Before styling"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 border border-red-500/30 text-[10px] text-white tracking-widest uppercase rounded">
                    Unstyled Before
                  </div>
                </div>

                {/* AFTER Image (Right Side, clipped based on slide state) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                    alt="After Balayage styling"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 border border-gold-400/30 text-[10px] text-gold-400 tracking-widest uppercase rounded">
                    Couture After
                  </div>
                </div>

                {/* SLIDER LINE & GOLD CONE DRAG HANDLE */}
                <div
                  className="absolute top-0 bottom-0 w-[1.5px] bg-gold-400 shadow-[0_0_8px_rgba(224,180,98,0.8)] pointer-events-none z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-gold-400 flex items-center justify-center shadow-lg pointer-events-none">
                    <span className="font-serif text-[10px] font-bold text-gold-400 tracking-tight">&lt;&gt;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Layout of normal portfolio images */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            id="gallery-portfolio-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(item.id)}
                  className={`group relative aspect-square overflow-hidden rounded-2xl border cursor-pointer glow-gold-hover shadow-md ${
                    darkMode ? 'border-gold-400/10' : 'border-gold-500/10'
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover overlay details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-gold-400 font-bold font-serif mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base font-light tracking-wide flex items-center gap-2">
                      {item.title} <Eye className="w-4 h-4 text-gold-400 shrink-0" />
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Full-screen Overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          >
            {/* Background close click */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Close Lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:text-gold-400 hover:border-gold-400 transition-all z-20 cursor-pointer"
              aria-label="Close Lightbox portfolio"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Navigation left */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full border border-white/10 text-white hover:text-gold-400 hover:border-gold-400 transition-all z-20 cursor-pointer"
              aria-label="Previous portfolio image"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Active Fullscreen Image Card */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl border border-gold-400/20 z-10 flex flex-col justify-end"
            >
              <img
                src={GALLERY[lightboxIndex].image}
                alt={GALLERY[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-black/90 text-center border-t border-gold-400/10">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                  {GALLERY[lightboxIndex].category} collection
                </span>
                <p className="font-serif text-lg font-light text-white mt-0.5">
                  {GALLERY[lightboxIndex].title}
                </p>
              </div>
            </motion.div>

            {/* Slider Navigation right */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full border border-white/10 text-white hover:text-gold-400 hover:border-gold-400 transition-all z-20 cursor-pointer"
              aria-label="Next portfolio image"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
