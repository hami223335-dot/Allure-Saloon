import { motion } from 'motion/react';
import { Sparkles, Award, Eye, Compass, Hourglass, Landmark, Gem } from 'lucide-react';
import ParallaxImage from './ParallaxImage';

interface AboutProps {
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function About({ setActiveTab, darkMode, onOpenModal }: AboutProps) {
  const milestones = [
    {
      year: '2014',
      title: 'The Seed of Elegance',
      subtitle: 'First boutique location established in London. Pioneered custom molecular hair care.',
    },
    {
      year: '2017',
      title: 'Pristine Expansion',
      subtitle: 'Launched the luxury Islamabad Flagship Salon in F-10. Named "Boutique of the Year".',
    },
    {
      year: '2021',
      title: 'Celestial Skin Laboratories',
      subtitle: 'Integrated clinical-level aesthetic facial therapies using pure 24K gold skin cell matrices.',
    },
    {
      year: '2026',
      title: 'The Royal Bridal Suite',
      subtitle: 'Unveiled the Royal Bridal Suites, providing bespoke couture private dressings and lounges.',
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section id="about-page-header" className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <ParallaxImage
          id="about-header-parallax"
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600"
          alt="About Allure"
          containerClassName="absolute inset-0 w-full h-full"
          className="filter brightness-50 contrast-125"
          yOffset={45}
          scaleStart={1.12}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            Crafting Sublime Elegance Since 2014
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            The Allure Story
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Story & Experience Segment */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <div className="relative" id="about-visual-column">
              <div className="absolute inset-0 border border-gold-400/20 translate-x-4 translate-y-4 rounded-3xl -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[450px]">
                <ParallaxImage
                  id="about-story-parallax"
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                  alt="Luxury treatment"
                  containerClassName="w-full h-full"
                  scaleStart={1.1}
                  yOffset={35}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 glass-card-dark rounded-xl border border-gold-400/20">
                  <div className="flex items-center gap-2 text-gold-400 mb-1.5">
                    <Award className="w-5 h-5" />
                    <span className="font-serif italic text-xs tracking-wider">Aveda & Sassoon Elite Standards</span>
                  </div>
                  <p className="text-3xs font-light tracking-wide text-gold-100/90 leading-relaxed">
                    Our therapists and coiffeurs hold official grand certifications, practicing deep organic chemistry on hair styling.
                  </p>
                </div>
              </div>
            </div>

            {/* Text details Column */}
            <div className="space-y-6">
              <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">
                Legacy of Sophistication
              </span>
              <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wide ${
                darkMode ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                Pioneers of Boutique Wellness & Couture Hair
              </h2>
              <p className={`text-sm leading-relaxed font-light ${
                darkMode ? 'text-gold-100/75' : 'text-[#1a1a1a]/85'
              }`}>
                Allure Salon & Spa was founded on a simple, powerful premise: that beauty treatments should never be clinical, transactional, or cookie-cutter. Inspired by world-class fashion lines across Europe and East Asia, we envisioned a lavish, sanctuary-like environment where ancient therapeutic elements blend beautifully with cutting-edge styling.
              </p>
              <p className={`text-sm leading-relaxed font-light ${
                darkMode ? 'text-gold-100/75' : 'text-[#1a1a1a]/85'
              }`}>
                Every service at Allure begins with an exhaustive sensory profile of your hair, face-shape, and physical stress points. We custom paint hair highlights, match skin caviar masques precisely to cellular moisture demands, and diffuse custom botanicals into our high-ceiling massage chambers. Here, you are wrapped in royal luxury.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-gold-400/10">
                <div className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-sm font-semibold">Flagship Sanctuary</h4>
                    <p className={`text-3xs mt-1 leading-relaxed ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/60'}`}>
                      An expansive 8,000 sq.ft custom-designed palace in F-10/2 Islamabad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Gem className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-sm font-semibold">Luxury Materials</h4>
                    <p className={`text-3xs mt-1 leading-relaxed ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/60'}`}>
                      Only premium hypoallergenic imports, completely toxic-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#f4f2ea]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission card */}
            <div className={`p-8 sm:p-12 rounded-3xl border ${
              darkMode ? 'bg-[#141414] border-gold-400/10' : 'bg-white border-gold-500/10'
            } space-y-4 shadow-xl glow-gold-hover transition-all duration-300`}>
              <div className="inline-flex p-4 rounded-full bg-gold-400/5">
                <Compass className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-wide uppercase text-gold-400">Our Sacred Mission</h3>
              <p className={`text-sm leading-relaxed font-light ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/75'}`}>
                To provide an unmatched aesthetic and wellness sanctuary where highly trained artistic masters craft bespoke hair coiffures, custom dermatology treatments, and restorative healing rituals. We aim to inspire absolute client self-love, confidence, and peace through unparalleled luxury standards and deep genuine hospitality.
              </p>
            </div>

            {/* Vision card */}
            <div className={`p-8 sm:p-12 rounded-3xl border ${
              darkMode ? 'bg-[#141414] border-gold-400/10' : 'bg-white border-gold-500/10'
            } space-y-4 shadow-xl glow-gold-hover transition-all duration-300`}>
              <div className="inline-flex p-4 rounded-full bg-gold-400/5">
                <Eye className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-wide uppercase text-gold-400">Our Sublime Vision</h3>
              <p className={`text-sm leading-relaxed font-light ${darkMode ? 'text-gold-100/70' : 'text-[#1a1a1a]/75'}`}>
                To continuously redefine the gold standard of high-fashion salons and medical spa operations globally. We seek to cultivate a sustainable, world-class sanctuary where hair sculpting, chemical skin science, and holistic muscle alignment unite seamlessly, empowering our artists to lead future trends and elevate lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones (Scroll Animation imitation) */}
      <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-3">
            <span className="font-serif italic text-sm text-gold-500 uppercase tracking-widest block">The Journey</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-light tracking-wide uppercase ${
              darkMode ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              THE ALLURE EVOLUTION
            </h2>
            <div className="h-px w-12 bg-gold-400 mx-auto mt-2" />
          </div>

          <div className="relative border-l border-gold-400/30 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative space-y-2 group"
              >
                {/* Year Badge */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 rounded-full bg-black border-2 border-gold-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                </div>

                <span className="font-serif text-2xl font-bold text-gold-400 block tracking-wider">
                  {milestone.year}
                </span>

                <h4 className={`font-serif text-lg font-light tracking-wide ${
                  darkMode ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {milestone.title}
                </h4>

                <p className={`text-xs leading-relaxed font-light max-w-xl ${
                  darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'
                }`}>
                  {milestone.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gold-400/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto float-animation" />
          <h2 className="font-serif text-2xl sm:text-4xl font-light tracking-wide">
            WOULD YOU LIKE TO EXPERIENCE TRANQUILITY?
          </h2>
          <p className="text-xs sm:text-sm font-light text-gold-100/85 max-w-xl mx-auto leading-relaxed">
            Book an appointment today with our elite directors or master therapists, and enjoy our signature lavender welcoming rituals.
          </p>
          <button
            onClick={() => onOpenModal('booking')}
            className="inline-block py-4 px-8 rounded-lg text-xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-300 cursor-pointer"
          >
            Reserve VIP Suite
          </button>
        </div>
      </section>
    </div>
  );
}
