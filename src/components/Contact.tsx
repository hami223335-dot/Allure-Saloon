import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, MessageCircleCode, Share2, Map, Compass, ExternalLink, Lock, Unlock } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Contact({ darkMode, onOpenModal }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('haircut');
  const [message, setMessage] = useState('');
  const [isMapUnlocked, setIsMapUnlocked] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenModal('contact');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600"
          alt="Contact us luxury salon"
          className="absolute inset-0 w-full h-full object-cover filter brightness-45 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            Reach The Sanctuary Gates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Concierge Portal
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Main Form & details section */}
      <section className={`py-20 transition-colors duration-500 overflow-hidden ${
        darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Form block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 sm:p-12 rounded-3xl border shadow-xl relative ${
                darkMode ? 'bg-[#121212] border-gold-400/10' : 'bg-white border-gold-500/15'
              }`}
            >
              <div className="flex items-center gap-2 text-gold-400 mb-2">
                <Mail className="w-5 h-5 text-gold-500" />
                <span className="font-serif italic text-xs uppercase tracking-wider font-semibold">Couture Desk</span>
              </div>
              
              <h2 className={`font-serif text-2xl sm:text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                SEND AN INQUIRY
              </h2>

              <p className={`text-3xs sm:text-2xs leading-relaxed font-light mb-8 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
                For custom wedding arrangements, elite model reservations, or feedback, send us an editorial brief. Our boutique team will respond within 24 hours.
              </p>

              {/* Form trigger */}
              <form onSubmit={handleSubmit} className="space-y-5 font-light text-xs" id="contact-concierge-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Elena Rostova"
                      className={`w-full p-3.5 rounded-lg outline-none border transition-all duration-300 ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                          : 'bg-gold-50/20 border-gold-500/25 text-[#1a1a1a] placeholder-gold-500/25 focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Elite Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="concierge@luxury.com"
                      className={`w-full p-3.5 rounded-lg outline-none border transition-all duration-300 ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                          : 'bg-gold-50/20 border-gold-500/25 text-[#1a1a1a] placeholder-gold-500/25 focus:border-gold-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Phone Coordinates</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(051) 2370345"
                      className={`w-full p-3.5 rounded-lg outline-none border transition-all duration-300 ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                          : 'bg-gold-50/20 border-gold-500/25 text-[#1a1a1a] placeholder-gold-500/25 focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Desired Treatment</label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className={`w-full p-3.5 rounded-lg outline-none border transition-all duration-300 appearance-none font-light cursor-pointer ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white focus:border-gold-400'
                          : 'bg-white border-gold-500/25 text-[#1a1a1a] focus:border-gold-500'
                      }`}
                    >
                      <option value="haircut">Couture Haircut</option>
                      <option value="color">Balayage highlights</option>
                      <option value="grooming">Royal Gentleman Grooming</option>
                      <option value="facial">Sublime Caviar Facial</option>
                      <option value="massage">Hot Stone Massage</option>
                      <option value="bridal">Imperial Bridal Package</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Brief Description</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe any particular coiffure designs or physiological stressors..."
                    className={`w-full p-3.5 rounded-lg outline-none border transition-all duration-300 ${
                      darkMode
                        ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                        : 'bg-gold-50/20 border-gold-500/25 text-[#1a1a1a] placeholder-gold-500/25 focus:border-gold-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-4 px-6 rounded-lg text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-xl shadow-gold-500/10 active:shadow-none transition-all duration-300 cursor-pointer"
                >
                  Transmit Message
                </button>
              </form>
            </motion.div>

            {/* Right Column: Contact Details, Business hours, map and Floating WhatsApp button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Contact Specs */}
              <div className={`p-8 rounded-3xl border shadow-md space-y-6 ${
                darkMode ? 'bg-[#121212] border-gold-400/10' : 'bg-[#faf8f2] border-gold-500/10'
              }`}>
                <h3 className={`font-serif text-xl font-light uppercase tracking-wide ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  FLAGSHIP HEADQUARTERS
                </h3>

                <div className="space-y-5 text-xs font-light">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-gold-500 text-3xs">Salon Location</p>
                      <p className={`mt-1 leading-relaxed ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/80'}`}>
                        Plot No. 1-0 Office #2 Tariq Market F-10/2, Islamabad, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-gold-500 text-3xs">Desk Phone</p>
                      <p className={`mt-1 leading-relaxed ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/80'}`}>
                        (051) 2370345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-gold-500 text-3xs">Aesthetic Mail</p>
                      <p className={`mt-1 leading-relaxed ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/80'}`}>
                        concierge@alluresalon.pk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold uppercase tracking-wider text-gold-500 text-3xs">Aesthetic Hours</p>
                      <p className={`mt-1 leading-relaxed ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/80'}`}>
                        Monday – Sunday : 11:00 AM – 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fully Clickable and Interactive Google Maps Integration */}
              <div className={`p-5 rounded-3xl border flex flex-col space-y-4 shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-[#121212] border-gold-400/10' : 'bg-white border-gold-500/15'
              }`}>
                {/* Header of the Map Card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Map className="w-4.5 h-4.5 text-gold-500" />
                    <span className={`font-serif tracking-widest text-[10px] uppercase font-bold ${
                      darkMode ? 'text-white' : 'text-[#1a1a1a]'
                    }`}>
                      Live Flagship Locator
                    </span>
                  </div>
                  
                  {/* Interactive toggle control */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMapUnlocked(!isMapUnlocked);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold transition-all duration-300 focus:outline-none cursor-pointer border ${
                      isMapUnlocked
                        ? 'bg-gold-500/10 border-gold-400/30 text-gold-400'
                        : darkMode
                        ? 'bg-[#1a1a1a] border-gold-400/5 text-gold-200/50 hover:text-white hover:border-gold-400/20'
                        : 'bg-gold-50/50 border-gold-500/10 text-gold-800/60 hover:text-gold-950 hover:border-gold-500/25'
                    }`}
                    title={isMapUnlocked ? "Lock map to click to open" : "Unlock map to pan and zoom"}
                  >
                    {isMapUnlocked ? (
                      <>
                        <Unlock className="w-3 h-3 text-gold-500" /> Live Interactive
                      </>
                    ) : (
                      <>
                        <Lock className="w-3 h-3 text-gold-500/40" /> Locked (Click to open)
                      </>
                    )}
                  </button>
                </div>

                {/* Map Frame Container */}
                <div className="relative rounded-2xl overflow-hidden border border-gold-400/10 shadow-inner h-60 group">
                  <iframe
                    title="Allure Flagship Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467812975855!2d73.00762111520603!3d33.6967664807044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe39cf3a5dfd%3A0x897931c89ef12fd9!2sF-10%20Markaz%20Islamabad!5e0!3m2!1sen!2spk!4v1626159230581!5m2!1sen!2spk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: darkMode ? 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)' : '' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Clickable Overlay when map is locked */}
                  {!isMapUnlocked && (
                    <div
                      onClick={() => {
                        window.open(
                          'https://www.google.com/maps/search/?api=1&query=Allure+Salon+%26+Spa+Plot+No.+1-0+Office+%232+Tariq+Market+F-10%2F2+Islamabad+Pakistan',
                          '_blank',
                          'noopener,noreferrer'
                        );
                      }}
                      className="absolute inset-0 bg-black/10 hover:bg-black/40 cursor-pointer flex flex-col items-center justify-center transition-all duration-300 group-hover:backdrop-blur-[1px]"
                    >
                      {/* Floating prompt badge */}
                      <div className="bg-black/80 text-white border border-gold-400/30 px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                        <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>Tap / Click to Open Maps</span>
                        <ExternalLink className="w-3 h-3 text-gold-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Call-to-Action Map Buttons */}
                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  {/* Get Directions Button */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Allure+Salon+%26+Spa+Plot+No.+1-0+Office+%232+Tariq+Market+F-10%2F2+Islamabad+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-3xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-md shadow-gold-500/5 active:scale-95 text-center cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    Get Directions
                  </a>

                  {/* Open in Google Maps Button */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Allure+Salon+%26+Spa+Plot+No.+1-0+Office+%232+Tariq+Market+F-10%2F2+Islamabad+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-3xs uppercase tracking-widest font-bold border transition-all duration-300 active:scale-95 text-center cursor-pointer ${
                      darkMode
                        ? 'border-gold-400/20 text-gold-400 bg-gold-500/5 hover:border-gold-400 hover:bg-gold-500/10'
                        : 'border-gold-500/20 text-gold-700 bg-white hover:border-gold-500 hover:bg-gold-500/5'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Google Maps
                  </a>
                </div>
              </div>

              {/* Floating WhatsApp Action Trigger Block */}
              <div
                onClick={() => onOpenModal('whatsapp')}
                className={`p-6 rounded-2xl border flex items-center justify-between cursor-pointer group hover:-translate-y-1 transition-all duration-300 ${
                  darkMode ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50/40 border-green-500/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500 rounded-full text-white relative">
                    <MessageCircleCode className="w-6 h-6" />
                    <span className="absolute inset-0 rounded-full border border-green-500/30 animate-ping" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-green-500">Concierge WhatsApp</h4>
                    <p className={`text-4xs font-light mt-0.5 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
                      Instantly schedule, adjust or cancel appointments over WhatsApp text.
                    </p>
                  </div>
                </div>
                <Share2 className="w-5 h-5 text-green-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
