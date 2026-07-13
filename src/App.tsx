import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircleCode } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import LoadingScreen from './components/LoadingScreen';
import PremiumModal from './components/PremiumModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Premium Custom Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'contact' | 'social' | 'whatsapp' | 'booking' | null>(null);

  // Simulate brand intro load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync scroll for "Back to top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (type: 'contact' | 'social' | 'whatsapp' | 'booking') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync global class for tailwind styling variations
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0c0c0c';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#faf8f2';
    }
  }, [darkMode]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'about':
        return <About setActiveTab={setActiveTab} darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'services':
        return <Services darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'team':
        return <Team darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'gallery':
        return <Gallery darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'testimonials':
        return <Testimonials darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'faq':
        return <FAQ darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'blog':
        return <Blog darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'contact':
        return <Contact darkMode={darkMode} onOpenModal={handleOpenModal} />;
      case 'privacy':
        return <Privacy darkMode={darkMode} />;
      case 'terms':
        return <Terms darkMode={darkMode} />;
      default:
        return <Home setActiveTab={setActiveTab} darkMode={darkMode} onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-500 font-sans ${
        darkMode ? 'bg-[#0c0c0c] text-gold-100' : 'bg-[#faf8f2] text-[#1a1a1a]'
      }`}
    >
      {/* 1. Luxurious Entry Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* 2. Premium Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenModal={handleOpenModal}
      />

      {/* 3. Main Route Container with cinematic transition effects */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Elegant Brand Footer */}
      <Footer setActiveTab={setActiveTab} darkMode={darkMode} onOpenModal={handleOpenModal} />

      {/* 5. Custom Luxury Popups Modal Handler */}
      <PremiumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        darkMode={darkMode}
      />

      {/* 6. Premium Floating Accessories */}
      {/* Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full border shadow-2xl transition-all duration-300 focus:outline-none cursor-pointer hover:-translate-y-1 ${
              darkMode
                ? 'bg-[#121212]/95 border-gold-400/20 text-gold-400 hover:border-gold-400'
                : 'bg-white/95 border-gold-500/20 text-gold-600 hover:border-gold-500'
            } glow-gold`}
            title="Scroll back to crown"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={() => handleOpenModal('whatsapp')}
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-green-500 text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        title="Chat live with Allure Concierge"
        aria-label="WhatsApp live chat"
      >
        <MessageCircleCode className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping pointer-events-none" />
      </button>
    </div>
  );
}
