import { motion } from 'motion/react';
import { Sparkles, Facebook, Instagram, Twitter, Linkedin, Youtube, GraduationCap } from 'lucide-react';
import { TEAM } from '../data';

interface TeamProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Team({ darkMode, onOpenModal }: TeamProps) {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury team"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-110 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Masters of Coiffure & Skincare
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Our Elite Artisans
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Team Introduction */}
      <section className={`py-16 text-center transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">
            Curated Talent Pool
          </span>
          <h2 className={`font-serif text-3xl font-light tracking-wide ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            WORLD-CLASS STYLISTS & THERAPISTS
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed font-light ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
            At Allure, we believe that world-class design comes from absolute specialty. Our hand-picked team consists of legendary coiffeurs, award-winning skin aesthetic specialists, and certified marma massage gurus. Together, they synthesize visual balance, cell biology, and genuine hospitality to establish Islamabad’s ultimate beauty court.
          </p>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className={`pb-24 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2 glow-gold-hover ${
                  darkMode
                    ? 'bg-[#121212] border-gold-400/10 hover:border-gold-400/30 text-gold-100'
                    : 'bg-white border-gold-500/10 hover:border-gold-500/30 text-[#1a1a1a]'
                }`}
              >
                <div>
                  {/* Master Photo Cover with subtle zoom and black shade */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Position Label float overlay */}
                    <span className="absolute bottom-4 left-4 z-20 px-3.5 py-1 text-4xs uppercase tracking-widest font-semibold text-white bg-gold-600 border border-gold-400/30 rounded">
                      {member.experience}
                    </span>
                  </div>

                  {/* Artisan Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className={`font-serif text-xl font-light tracking-wide ${
                        darkMode ? 'text-white' : 'text-[#1a1a1a]'
                      }`}>
                        {member.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold font-serif mt-1">
                        {member.role}
                      </p>
                    </div>

                    <div className={`h-px w-full ${darkMode ? 'bg-gold-400/5' : 'bg-gold-500/5'}`} />

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-2xs font-light text-gold-400">
                        <GraduationCap className="w-4 h-4 text-gold-500" />
                        <span className="font-semibold uppercase tracking-wider">Specialty</span>
                      </div>
                      <p className={`text-2xs font-light leading-relaxed ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/80'}`}>
                        {member.specialization}
                      </p>
                    </div>

                    <p className={`text-3xs leading-relaxed font-light ${darkMode ? 'text-gold-100/50' : 'text-[#1a1a1a]/60'}`}>
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Artisan Social Media Handle links inside card footer */}
                <div className={`px-6 pb-6 pt-4 border-t flex items-center justify-center space-x-3.5 ${
                  darkMode ? 'border-gold-400/5' : 'border-gold-500/5'
                }`}>
                  {member.socials.facebook && (
                    <button
                      onClick={() => onOpenModal('social')}
                      className="text-gold-400/70 hover:text-[#1877F2] transition-colors p-1"
                      aria-label="Artisan Facebook Profile"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                  )}
                  {member.socials.instagram && (
                    <button
                      onClick={() => onOpenModal('social')}
                      className="text-gold-400/70 hover:text-[#E4405F] transition-colors p-1"
                      aria-label="Artisan Instagram Profile"
                    >
                      <Instagram className="w-4 h-4" />
                    </button>
                  )}
                  {member.socials.twitter && (
                    <button
                      onClick={() => onOpenModal('social')}
                      className="text-gold-400/70 hover:text-black transition-colors p-1"
                      aria-label="Artisan Twitter Profile"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                  )}
                  {member.socials.linkedin && (
                    <button
                      onClick={() => onOpenModal('social')}
                      className="text-gold-400/70 hover:text-[#0077B5] transition-colors p-1"
                      aria-label="Artisan LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  )}
                  {member.socials.youtube && (
                    <button
                      onClick={() => onOpenModal('social')}
                      className="text-gold-400/70 hover:text-[#FF0000] transition-colors p-1"
                      aria-label="Artisan YouTube Channel"
                    >
                      <Youtube className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide">
            RESERVE PRIVATE SESSIONS
          </h2>
          <p className="text-xs font-light text-gold-100/85 max-w-xl mx-auto leading-relaxed">
            Experience individual consultation trials with Elena Rostova or Dr. Sophie Dubois. Enjoy customized wellness profiling tailored exactly to your agenda.
          </p>
          <button
            onClick={() => onOpenModal('booking')}
            className="inline-block py-3.5 px-7 rounded-lg text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-300 cursor-pointer"
          >
            Schedule Session
          </button>
        </div>
      </section>
    </div>
  );
}
