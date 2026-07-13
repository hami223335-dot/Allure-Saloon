import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Gem, Star, ArrowLeft, Instagram } from 'lucide-react';
import { HERO_SLIDES, SERVICES, TESTIMONIALS } from '../data';
import ParallaxImage from './ParallaxImage';

// Helper component for animated statistics counter
function AnimatedCounter({ value, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

interface HomeProps {
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Home({ setActiveTab, darkMode, onOpenModal }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Slider (Full Screen) */}
      <section ref={heroRef} id="hero-slider" className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Background image with luxury shadow scrim overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />
            <motion.img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              style={{ y: heroY }}
              className="w-full h-[120%] object-cover object-center filter brightness-90 absolute top-0"
              referrerPolicy="no-referrer"
            />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl text-center space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300/35 bg-gold-400/5 text-gold-300 backdrop-blur-sm text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {HERO_SLIDES[currentSlide].badge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-widest text-white leading-tight"
                >
                  {HERO_SLIDES[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-xs sm:text-sm md:text-base font-light tracking-[0.2em] text-gold-100 max-w-2xl mx-auto"
                >
                  {HERO_SLIDES[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <button
                    onClick={() => onOpenModal('booking')}
                    className="w-full sm:w-auto py-4 px-8 rounded-lg text-xs tracking-[0.2em] uppercase font-bold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-xl shadow-gold-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {HERO_SLIDES[currentSlide].ctaText}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto py-4 px-8 rounded-lg text-xs tracking-[0.2em] uppercase font-bold text-gold-200 border border-gold-400/30 hover:border-gold-300 hover:bg-gold-500/5 transition-all duration-300 cursor-pointer"
                  >
                    View Treatments
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Manual Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 hover:bg-white/5 transition-all duration-300 focus:outline-none"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 hover:bg-white/5 transition-all duration-300 focus:outline-none"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Slider Indicator Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Welcome Headline */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 text-gold-500">
            <span className="h-px w-8 bg-gold-400" />
            <span className="font-serif italic text-sm tracking-[0.2em] font-medium uppercase">Exquisite Sanctuary</span>
            <span className="h-px w-8 bg-gold-400" />
          </div>
          
          <h2 className={`font-serif text-3xl sm:text-5xl font-light tracking-wide leading-tight ${
            darkMode ? 'text-white' : 'text-[#1a1a1a]'
          }`}>
            We Elevate Beauty Into An <span className="gold-text-gradient italic font-normal">Experiential Art Form</span>
          </h2>

          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent my-6" />

          <p className={`text-sm sm:text-base font-light max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/85'
          }`}>
            Step into Allure, a curated luxury environment nestled in the heart of Islamabad. We align avant-garde styling precision with deep cellular skin biology and ancient therapeutic spa rituals. Here, our clients do not just receive beauty treatments—they experience absolute rejuvenation of mind, hair, and spirit.
          </p>

          <button
            onClick={() => {
              setActiveTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 mt-4 text-xs tracking-widest uppercase font-semibold text-gold-500 hover:text-gold-300 transition-colors group"
          >
            The Allure Experience <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 3. Featured Services Grid */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#f4f2ea]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block mb-1">Our Masterpieces</span>
              <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wider uppercase ${
                darkMode ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                Featured Rituals
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-6 rounded-lg text-xs tracking-widest uppercase font-semibold border border-gold-500/20 text-gold-500 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
            >
              Explore All Treatments
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#141414]/80 border-gold-400/10 hover:border-gold-400/30 text-gold-100'
                    : 'bg-white border-gold-500/10 hover:border-gold-500/30 text-[#1a1a1a]'
                } hover:-translate-y-2 glow-gold-hover`}
              >
                <div>
                  {/* Service Image with hover zoom */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <ParallaxImage
                      id={`home-service-parallax-${service.id}`}
                      src={service.image}
                      alt={service.name}
                      containerClassName="w-full h-full"
                      scaleStart={1.1}
                      scaleHover={1.18}
                      yOffset={25}
                    />
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-2xs uppercase tracking-wider font-semibold text-white bg-black/70 backdrop-blur-sm border border-gold-400/30 rounded">
                      {service.duration}
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold font-serif block mb-1">
                      {service.category} RITUAL
                    </span>
                    <h3 className={`font-serif text-lg font-light tracking-wide mb-3 ${
                      darkMode ? 'text-white' : 'text-[#1a1a1a]'
                    }`}>
                      {service.name}
                    </h3>
                    <p className={`text-xs leading-relaxed font-light mb-4 ${
                      darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer block of service card */}
                <div className={`px-6 pb-6 pt-4 border-t flex items-center justify-between ${
                  darkMode ? 'border-gold-400/5' : 'border-gold-500/5'
                }`}>
                  <span className="font-serif text-sm font-semibold text-gold-400">
                    {service.price}
                  </span>
                  <button
                    onClick={() => onOpenModal('booking')}
                    className="text-xs uppercase font-bold tracking-widest text-gold-500 hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    Reserve <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Bento-like Features) */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">Signature Standards</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wide ${
              darkMode ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              THE ALLURE LUXURY PHILOSOPHY
            </h2>
            <div className="h-px w-12 bg-gold-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-gold-400" />,
                title: 'Master Artisans',
                desc: 'Our directors and stylists hold premium international certificates from Paris, London, and Milan, styling for red-carpets worldwide.'
              },
              {
                icon: <Gem className="w-8 h-8 text-gold-400" />,
                title: 'Couture Chemistry',
                desc: 'We strictly employ world-class hypoallergenic brands such as Kerastase, Olaplex, and customized white truffle organic oils.'
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
                title: 'Sterilized Peace',
                desc: 'Your safety is sacred. We practice operating-room level ultraviolet sanitization for every comb, shear, and treatment tool.'
              },
              {
                icon: <Heart className="w-8 h-8 text-gold-400" />,
                title: 'Royal Hospitality',
                desc: 'Sip on complimentary gourmet espresso, tea, or water, wrapped in silk satin robes inside private high-ceiling lounge suites.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`p-8 rounded-2xl border text-center space-y-4 ${
                  darkMode ? 'bg-gold-500/5 border-gold-400/10' : 'bg-white border-gold-500/10'
                } glow-gold-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="inline-flex p-4 rounded-full bg-gold-400/5 mb-2 relative">
                  {feature.icon}
                </div>
                <h3 className={`font-serif text-lg font-light tracking-wide ${
                  darkMode ? 'text-gold-200' : 'text-[#1a1a1a]'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs leading-relaxed font-light ${
                  darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'
                }`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Statistics (Animated Counters) */}
      <section className="relative py-20 overflow-hidden bg-black text-white">
        {/* Scrim cover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-black/90 to-[#0f0f0f]" />
        
        {/* Animated dynamic particles */}
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-gold-300/30 float-animation-slow" />
        <div className="absolute bottom-10 right-20 w-3.5 h-3.5 rounded-full bg-gold-500/20 float-animation-fast" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { value: 12, suffix: '+', label: 'Years of Excellence' },
              { value: 45, suffix: 'K+', label: 'Elite Clients Served' },
              { value: 15, suffix: '+', label: 'Luxury Hair & Spa Awards' },
              { value: 8, suffix: '', label: 'Master Salon Artisans' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-gold-400 tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-100/70 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Testimonials (Auto Slider) */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#f4f2ea]'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 space-y-2">
            <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">Client Confessions</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wide ${
              darkMode ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              VOICES OF TRANQUILITY
            </h2>
            <div className="h-px w-12 bg-gold-400 mx-auto mt-2" />
          </div>

          <div className={`relative p-8 sm:p-14 rounded-3xl border ${
            darkMode ? 'bg-[#141414]/90 border-gold-400/10' : 'bg-white border-gold-500/10'
          } shadow-xl relative`}>
            {/* Elegant massive quote mark */}
            <span className="absolute top-4 left-6 sm:left-10 font-serif text-8xl sm:text-9xl text-gold-500/10 select-none font-bold">
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                {/* Star rating */}
                <div className="flex items-center space-x-1 justify-center sm:justify-start">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className={`font-serif text-lg sm:text-2xl font-light leading-relaxed italic text-center sm:text-left ${
                  darkMode ? 'text-gold-100' : 'text-[#1a1a1a]'
                }`}>
                  {TESTIMONIALS[activeTestimonial].text}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gold-400/10 gap-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={TESTIMONIALS[activeTestimonial].image}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover border border-gold-400/35"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className={`font-serif text-base font-semibold ${
                        darkMode ? 'text-white' : 'text-[#1a1a1a]'
                      }`}>
                        {TESTIMONIALS[activeTestimonial].name}
                      </h4>
                      <p className={`text-[10px] uppercase tracking-widest ${
                        darkMode ? 'text-gold-100/50' : 'text-[#1a1a1a]/50'
                      }`}>
                        {TESTIMONIALS[activeTestimonial].role} &bull; {TESTIMONIALS[activeTestimonial].location}
                      </p>
                    </div>
                  </div>

                  <span className="text-2xs uppercase tracking-widest text-gold-500 font-bold border border-gold-500/20 px-3.5 py-1.5 rounded-full bg-gold-400/5">
                    {TESTIMONIALS[activeTestimonial].treatment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial slider navigation */}
            <div className="absolute right-4 bottom-4 flex items-center space-x-2">
              <button
                onClick={handlePrevTestimonial}
                className="p-2.5 rounded-full border border-gold-400/20 text-gold-400 hover:text-white hover:bg-gold-500 transition-colors focus:outline-none"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-2.5 rounded-full border border-gold-400/20 text-gold-400 hover:text-white hover:bg-gold-500 transition-colors focus:outline-none"
                aria-label="Next review"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instagram Preview & Newsletter Grid */}
      <section className={`py-24 transition-colors duration-500 overflow-hidden ${
        darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <Instagram className="w-8 h-8 text-gold-400 mx-auto float-animation" />
            <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">Social Editorial</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wide ${
              darkMode ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              THE ALLURE LIFESTYLE
            </h2>
          </div>

          {/* Instagram Post Mock Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500',
                likes: '1.2k',
                comments: '24'
              },
              {
                url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500',
                likes: '894',
                comments: '12'
              },
              {
                url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=500',
                likes: '2.4k',
                comments: '88'
              },
              {
                url: 'https://images.unsplash.com/photo-1591555200813-b5e3762e0d9b?auto=format&fit=crop&q=80&w=500',
                likes: '1.8k',
                comments: '42'
              }
            ].map((post, index) => (
              <div
                key={index}
                onClick={() => onOpenModal('social')}
                className="group relative aspect-square overflow-hidden rounded-xl border border-gold-400/10 cursor-pointer glow-gold-hover shadow-md"
              >
                <ParallaxImage
                  id={`home-instagram-parallax-${index}`}
                  src={post.url}
                  alt={`Allure editorial preview ${index + 1}`}
                  containerClassName="w-full h-full"
                  scaleStart={1.12}
                  scaleHover={1.22}
                  yOffset={18}
                />
                
                {/* Hover overlay with likes and comment count */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white z-10 text-sm font-semibold tracking-wider">
                  <span className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                    <Heart className="w-5.5 h-5.5 fill-current text-gold-400" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
                    <Star className="w-5.5 h-5.5 fill-current text-gold-400" /> {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
