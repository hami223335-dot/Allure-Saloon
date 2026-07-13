import { FormEvent } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

// Custom icons or simple SVG paths for TikTok and X
const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.06-1.45-.01 1.88 0 3.75-.01 5.63 0 2.01-.4 4.09-1.58 5.72-1.36 1.88-3.69 2.94-6.02 2.93-2.12-.01-4.22-.92-5.56-2.55-1.54-1.88-2.01-4.63-1.24-6.98.75-2.29 2.82-4.01 5.22-4.3v4.08c-1.13.18-2.23.95-2.58 2.06-.44 1.34-.05 2.96.96 3.89.95.89 2.41.97 3.44.2 1.01-.76 1.44-2.11 1.42-3.37.01-4.47 0-8.94.01-13.41z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface FooterProps {
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp') => void;
}

export default function Footer({ setActiveTab, darkMode, onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenModal('contact');
  };

  return (
    <footer
      id="main-footer"
      className={`relative pt-20 pb-8 border-t transition-colors duration-500 overflow-hidden ${
        darkMode
          ? 'bg-[#060606] border-gold-400/10 text-gold-100'
          : 'bg-[#faf8f2] border-gold-500/10 text-[#1a1a1a]'
      }`}
    >
      {/* Visual luxury accent particle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gold-400/10">
          {/* Brand Info & Social Icons */}
          <div className="space-y-6">
            <div className="flex flex-col items-start cursor-pointer" onClick={() => handleNavClick('home')}>
              <span className="font-serif text-3xl font-light tracking-[0.25em]">ALLURE</span>
              <span className="text-[10px] font-sans tracking-[0.45em] text-gold-500 uppercase -mt-1 font-medium">Salon & Spa</span>
            </div>
            
            <p className={`text-xs leading-relaxed font-light ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
              Islamabad’s premier boutique wellness and hair-coiffure sanctuary. Combining world-class styling techniques, organic chemistry formulas, and elite hospitality to deliver transformational beauty rituals.
            </p>

            {/* Social Media Links with Brand Colors */}
            <div className="flex items-center space-x-3.5">
              {/* Facebook */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] glow-gold-hover"
                title="Connect on Facebook"
                aria-label="Visit Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </button>

              {/* Instagram */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] glow-gold-hover"
                title="Connect on Instagram"
                aria-label="Visit Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </button>

              {/* TikTok */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-black hover:border-black glow-gold-hover"
                title="Connect on TikTok"
                aria-label="Visit TikTok page"
              >
                <TikTokIcon />
              </button>

              {/* YouTube */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] glow-gold-hover"
                title="Connect on YouTube"
                aria-label="Visit YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </button>

              {/* X */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-[#000000] hover:border-[#000000] glow-gold-hover"
                title="Connect on X"
                aria-label="Visit X platform"
              >
                <XIcon />
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => onOpenModal('social')}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gold-400/15 text-gold-400 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] glow-gold-hover"
                title="Connect on LinkedIn"
                aria-label="Visit LinkedIn page"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-gold-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-500" /> Navigation
            </h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  The Allure Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  Premium Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('team')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  Master Artisans
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  Exquisite Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-gold-400 hover:pl-2 transition-all duration-300 py-1">
                  Beauty & Care Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours & Contact Details */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-gold-400 font-semibold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-500" /> Hours & Location
            </h4>
            
            <div className="space-y-4 text-xs font-light">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Monday – Sunday</p>
                  <p className={`mt-0.5 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>11:00 AM – 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Allure Flagship Salon</p>
                  <p className={`mt-0.5 leading-relaxed ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
                    Plot No. 1-0 Office #2 Tariq Market F-10/2, Islamabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Concierge Phone</p>
                  <p className={`mt-0.5 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>(051) 2370345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-gold-400 font-semibold flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-gold-500" /> Newsletter
            </h4>
            
            <p className={`text-xs leading-relaxed font-light ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
              Subscribe to unlock seasonal couture collections, luxury treatment invites, and editorial wellness articles.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="relative mt-2" id="footer-newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter elite email..."
                className={`w-full py-3.5 pl-4 pr-12 rounded-lg text-xs tracking-wider outline-none border transition-all duration-300 font-light ${
                  darkMode
                    ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/30 focus:border-gold-400'
                    : 'bg-white border-gold-500/20 text-[#1a1a1a] placeholder-gold-500/30 focus:border-gold-500'
                }`}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gold-500/10 text-gold-400 transition-all duration-300 cursor-pointer"
                aria-label="Send newsletter subscription"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Sub-bar: Privacy, Terms, and Copyright */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs tracking-widest uppercase font-light opacity-80">
          <p className="text-center sm:text-left">
            &copy; {currentYear} ALLURE SALON & SPA. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleNavClick('privacy')}
              className="hover:text-gold-400 transition-colors py-1 cursor-pointer"
            >
              Privacy Policy
            </button>
            <div className="w-1 h-1 bg-gold-400 rounded-full" />
            <button
              onClick={() => handleNavClick('terms')}
              className="hover:text-gold-400 transition-colors py-1 cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
