import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Home } from 'lucide-react';
import { useState } from 'react';

interface RemixButtonProps {
  onRemix: () => void;
  isRemixed?: boolean;
}

export function RemixButton({ onRemix, isRemixed = false }: RemixButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className={isRemixed ? 'fixed left-8 top-24 z-50' : 'fixed right-8 bottom-16 z-50'}
    >
      <div className="relative">
        {/* Tooltip Card - More minimal */}
        <AnimatePresence>
          {showTooltip && !isRemixed && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-8 bottom-4 w-64 bg-white border border-neutral-200 p-5"
            >
              <p className="text-neutral-600" style={{ 
                fontWeight: 300, 
                fontSize: '0.9rem',
                fontFamily: 'Georgia, serif',
                lineHeight: 1.6,
              }}>
                Click to remix this portfolio. Unfold Vijay's story in a new generative way.
              </p>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-neutral-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-neutral-300" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isRemixed ? (
          <>
            {/* Bold Pulsing Ring */}
            <motion.div
              className="absolute inset-0 border-4 border-black"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main Button - Brutalist */}
            <button
              onClick={onRemix}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative w-20 h-20 bg-white border-4 border-black hover:bg-black group transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-8 h-8 text-black group-hover:text-white transition-colors" strokeWidth={3} />
              </motion.div>
              <span className="sr-only">Remix Portfolio</span>
            </button>

            {/* Label */}
            <motion.p
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-black"
              style={{ 
                fontWeight: 900, 
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                letterSpacing: '0.15em',
              }}
            >
              REMIX
            </motion.p>
          </>
        ) : (
          <>
            {/* Return Home Button - Brutalist */}
            <motion.button
              onClick={onRemix}
              className="relative px-6 py-3 bg-white border-4 border-black hover:bg-black hover:text-white transition-colors"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5" strokeWidth={3} />
                <span 
                  style={{ 
                    fontWeight: 900, 
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em',
                  }}
                >
                  HOME
                </span>
              </div>
              
              {/* Brutalist pulse */}
              <motion.div
                className="absolute inset-0 border-4 border-black"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
}
