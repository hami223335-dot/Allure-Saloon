import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles, ChevronDown, Clock, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode, onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasMega: true },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  // Track scrolling for sticky transparency and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Sticky transparency trigger
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    // Scroll to top smoothly upon tab change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gold-400/10 shadow-lg'
            : 'bg-[#faf8f2]/90 backdrop-blur-md border-b border-gold-500/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start focus:outline-none group"
            id="brand-logo-btn"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] transition-all duration-300 group-hover:text-gold-400">
              ALLURE
            </span>
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.45em] text-gold-500 font-medium -mt-1 uppercase">
              Salon & Spa
            </span>
          </button>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" id="desktop-nav">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasMega && setIsMegaMenuOpen(true)}
                onMouseLeave={() => item.hasMega && setIsMegaMenuOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm tracking-widest uppercase font-medium transition-colors duration-300 flex items-center gap-1 focus:outline-none ${
                    activeTab === item.id
                      ? 'text-gold-400 font-semibold'
                      : darkMode
                      ? 'text-gold-100/70 hover:text-white'
                      : 'text-[#1a1a1a]/70 hover:text-gold-600'
                  }`}
                >
                  {item.label}
                  {item.hasMega && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Services Mega Menu Dropdown */}
                {item.hasMega && (
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute left-1/2 -translate-x-[40%] mt-2 w-[650px] p-6 rounded-xl border shadow-2xl z-50 ${
                          darkMode
                            ? 'bg-[#0f0f0f]/95 border-gold-400/20 text-gold-100'
                            : 'bg-[#faf8f2]/95 border-gold-500/20 text-[#1a1a1a]'
                        }`}
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {/* Col 1: Hair Artistry */}
                          <div>
                            <h4 className="font-serif text-gold-400 text-sm tracking-wider uppercase border-b border-gold-400/10 pb-2 mb-3">
                              Hair Artistry
                            </h4>
                            <ul className="space-y-2 text-xs">
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  Couture Haircut & Style
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  French Balayage Painting
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  Royal Gentleman Grooming
                                </button>
                              </li>
                            </ul>
                          </div>

                          {/* Col 2: Aesthetics & Spa */}
                          <div>
                            <h4 className="font-serif text-gold-400 text-sm tracking-wider uppercase border-b border-gold-400/10 pb-2 mb-3">
                              Spa & Wellness
                            </h4>
                            <ul className="space-y-2 text-xs">
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  Sublime Caviar Facial
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  Hot Stone Massage Therapy
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleNavClick('services')}
                                  className="hover:text-gold-400 transition-colors py-1 text-left"
                                >
                                  Gold Dust Manicure/Pedicure
                                </button>
                              </li>
                            </ul>
                          </div>

                          {/* Col 3: VIP Info Card */}
                          <div className={`p-4 rounded-lg border flex flex-col justify-between ${
                            darkMode ? 'bg-gold-500/5 border-gold-400/10' : 'bg-gold-50/50 border-gold-500/10'
                          }`}>
                            <div>
                              <div className="flex items-center gap-1.5 text-gold-400 mb-1.5">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-2xs uppercase tracking-widest font-semibold font-serif">Royal Suites</span>
                              </div>
                              <p className="text-3xs leading-relaxed opacity-80">
                                Indulge in private booking trials with complimentary champagne, customized scent notes, and elite master services.
                              </p>
                            </div>
                            <button
                              onClick={() => onOpenModal('booking')}
                              className="mt-3 w-full py-1.5 px-3 text-3xs text-center font-bold uppercase tracking-wider text-white bg-gold-500 hover:bg-gold-400 rounded transition-colors duration-300"
                            >
                              VIP Consultation
                            </button>
                          </div>
                        </div>

                        {/* Dropdown footer info */}
                        <div className="mt-4 pt-3 border-t border-gold-400/5 flex items-center justify-between text-4xs uppercase tracking-wider text-gold-400/80 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Mon–Sun: 11:00 AM – 9:00 PM
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" /> (051) 2370345
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action buttons on Right */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-all duration-300 focus:outline-none ${
                darkMode
                  ? 'border-gold-400/20 text-gold-300 hover:bg-gold-400/10 hover:border-gold-400/50'
                  : 'border-gold-500/20 text-gold-700 hover:bg-gold-500/5 hover:border-gold-500/50'
              }`}
              title={darkMode ? 'Switch to Light Luxury' : 'Switch to Dark Opulence'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Reserve Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenModal('booking')}
              className="py-3 px-6 rounded-lg text-xs tracking-widest uppercase font-semibold text-white bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-md shadow-gold-500/10 active:shadow-none transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Actions: Burger & Theme Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border focus:outline-none ${
                darkMode ? 'border-gold-400/10 text-gold-300' : 'border-gold-500/10 text-gold-700'
              }`}
              aria-label="Toggle mobile theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none ${
                darkMode ? 'border-gold-400/10 text-gold-300' : 'border-gold-500/10 text-gold-700'
              }`}
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm p-6 shadow-2xl flex flex-col justify-between overflow-y-auto ${
              darkMode ? 'bg-[#0b0b0b] text-gold-100' : 'bg-[#faf8f2] text-[#1a1a1a]'
            }`}
          >
            <div>
              {/* Header inside Mobile Menu */}
              <div className="flex justify-between items-center pb-6 border-b border-gold-400/10">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-xl font-light tracking-[0.25em]">ALLURE</span>
                  <span className="text-[8px] font-sans tracking-[0.45em] text-gold-500 uppercase -mt-0.5">Salon & Spa</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-1.5 rounded-lg border ${
                    darkMode ? 'border-gold-400/10 text-gold-300' : 'border-gold-500/10 text-gold-700'
                  }`}
                  aria-label="Close mobile menu drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-2.5 text-left text-sm tracking-[0.2em] uppercase font-medium border-b border-transparent transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'text-gold-400 border-gold-400/20 font-bold'
                        : darkMode
                        ? 'text-gold-100/70 hover:text-white'
                        : 'text-[#1a1a1a]/70 hover:text-gold-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Details inside mobile menu drawer footer */}
            <div className="pt-6 border-t border-gold-400/10 space-y-4">
              <div className="text-3xs tracking-wider space-y-2 opacity-80 uppercase">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Mon–Sun: 11:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>F-10/2 Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>(051) 2370345</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('booking');
                }}
                className="w-full py-4 text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 rounded-lg shadow-lg shadow-gold-500/10 active:shadow-none transition-all duration-300"
              >
                Reserve Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
