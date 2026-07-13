import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#070707] z-[9999] flex flex-col items-center justify-center text-white"
        >
          {/* Ambient luxury radial glow */}
          <div className="absolute w-[40vw] h-[40vw] max-w-lg max-h-lg rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Crown icon animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-6 flex justify-center"
            >
              <div className="p-3.5 rounded-full border border-gold-400/30 bg-gold-500/5 relative">
                <Sparkles className="w-8 h-8 text-gold-400 float-animation-slow" />
                <div className="absolute inset-0 rounded-full border border-gold-300/10 animate-ping" />
              </div>
            </motion.div>

            {/* Letter animation */}
            <div className="flex space-x-3 md:space-x-4 mb-4">
              {['A', 'L', 'L', 'U', 'R', 'E'].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-serif text-3xl md:text-5xl font-light tracking-widest text-gold-100 block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-gold-300/85 mb-8 font-light"
            >
              Salon & Spa Sanctuary
            </motion.p>

            {/* Glowing gold line loading bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_8px_rgba(224,180,98,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
