import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote, MessageSquarePlus, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  darkMode: boolean;
  onOpenModal: (type: 'contact' | 'social' | 'whatsapp' | 'booking') => void;
}

export default function Testimonials({ darkMode, onOpenModal }: TestimonialsProps) {
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    onOpenModal('contact');
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1600"
          alt="Client Reviews banner"
          className="absolute inset-0 w-full h-full object-cover filter brightness-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
          <span className="font-serif italic text-gold-400 tracking-[0.3em] text-xs sm:text-sm uppercase block">
            The Echoes of Perfection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-widest text-white uppercase">
            Client Confessions
          </h1>
          <div className="h-px w-16 bg-gold-400 mx-auto my-4" />
        </div>
      </section>

      {/* Main content grid */}
      <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0c]' : 'bg-[#faf8f2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Reviews Column Left 2/3 */}
            <div className="lg:col-span-2 space-y-8" id="testimonials-listings">
              {TESTIMONIALS.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 sm:p-10 rounded-2xl border relative overflow-hidden ${
                    darkMode
                      ? 'bg-[#121212] border-gold-400/10 hover:border-gold-400/35 text-gold-100'
                      : 'bg-white border-gold-500/10 hover:border-gold-500/35 text-[#1a1a1a]'
                  } transition-all duration-300 glow-gold-hover shadow-lg`}
                >
                  <Quote className="absolute top-4 right-6 w-16 h-16 text-gold-500/5 select-none" />

                  {/* Rating block */}
                  <div className="flex items-center space-x-1.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  <p className={`font-serif text-base sm:text-lg font-light italic leading-relaxed mb-6 ${
                    darkMode ? 'text-gold-100' : 'text-[#1a1a1a]'
                  }`}>
                    "{review.text}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-5 border-t border-gold-400/5 gap-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover border border-gold-400/30"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className={`font-serif text-sm font-semibold ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                          {review.name}
                        </h4>
                        <p className={`text-[10px] tracking-widest uppercase ${darkMode ? 'text-gold-100/50' : 'text-[#1a1a1a]/50'}`}>
                          {review.role || 'Elite Guest'} &bull; {review.location}
                        </p>
                      </div>
                    </div>

                    <span className="inline-block py-1 px-3 text-4xs uppercase tracking-[0.25em] font-bold text-gold-500 border border-gold-500/20 rounded-full bg-gold-400/5 text-center">
                      Treatment: {review.treatment}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Leave a Review submission column Right 1/3 */}
            <div className="space-y-6">
              <div className={`p-8 rounded-2xl border ${
                darkMode ? 'bg-[#141414] border-gold-400/10' : 'bg-white border-gold-500/15'
              } shadow-xl relative`}>
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  <MessageSquarePlus className="w-5 h-5 text-gold-500" />
                  <span className="font-serif italic text-xs uppercase tracking-wider font-semibold">Couture Feedback</span>
                </div>
                
                <h3 className={`font-serif text-xl font-light mb-3 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  SHARE YOUR EXPERIENCES
                </h3>
                
                <p className={`text-3xs leading-relaxed font-light mb-6 ${darkMode ? 'text-gold-100/60' : 'text-[#1a1a1a]/70'}`}>
                  We invite your honest evaluation of our coiffeurs, aesthetic solutions, or sensory wellness alignments. Your words shape our standard of perfection.
                </p>

                {/* Form mock */}
                <form onSubmit={handleSubmitReview} className="space-y-4 font-light text-xs" id="review-feedback-form">
                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReviewName}
                      onChange={(e) => setNewReviewName(e.target.value)}
                      placeholder="e.g. Victoria H."
                      className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                          : 'bg-gold-50/20 border-gold-500/20 text-[#1a1a1a] placeholder-gold-500/20 focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Star Rating</label>
                    <div className="flex items-center space-x-1.5" id="review-rating-stars">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setNewReviewRating(starValue)}
                          className="p-1 focus:outline-none focus:scale-110 active:scale-95 transition-transform"
                          aria-label={`Rate ${starValue} stars`}
                        >
                          <Star className={`w-5.5 h-5.5 ${
                            starValue <= newReviewRating ? 'fill-gold-400 text-gold-400' : 'text-gold-400/25'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-3xs uppercase tracking-widest text-gold-500 block font-medium">Your Experience</label>
                    <textarea
                      required
                      rows={4}
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      placeholder="Describe your sensory treatment at Allure..."
                      className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${
                        darkMode
                          ? 'bg-[#101010] border-gold-400/20 text-white placeholder-gold-400/20 focus:border-gold-400'
                          : 'bg-gold-50/20 border-gold-500/20 text-[#1a1a1a] placeholder-gold-500/20 focus:border-gold-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-4 rounded-lg text-2xs tracking-widest uppercase font-bold text-white bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 shadow-md shadow-gold-500/10 active:shadow-none transition-all duration-300 cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              {/* Verified Trust badge card */}
              <div className={`p-6 rounded-2xl border text-center ${
                darkMode ? 'bg-[#121212] border-gold-400/5' : 'bg-[#f4f2ea] border-gold-500/5'
              }`}>
                <Heart className="w-6 h-6 text-gold-400 mx-auto mb-2 float-animation-slow" />
                <span className="font-serif italic text-4xs uppercase tracking-wider text-gold-500 block mb-1">Authentic Voices</span>
                <p className={`text-4xs leading-relaxed font-light ${darkMode ? 'text-gold-100/50' : 'text-[#1a1a1a]/60'}`}>
                  Every review on our website is curated from direct client surveys following their salon or wellness checkout.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
