import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ConstructionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner before
    const dismissed = localStorage.getItem('construction-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      localStorage.setItem('construction-banner-dismissed', 'true');
    }, 300);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
          >
            <div className="px-4 py-3 flex items-center gap-3">
              {/* Small construction emoji */}
              <span style={{ fontSize: '1rem' }}>🚧</span>

              {/* Content */}
              <div className="flex-1">
                <p 
                  className="text-black"
                  style={{ 
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Under Construction
                </p>
              </div>

              {/* Close button */}
              <motion.button
                onClick={handleDismiss}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0 w-5 h-5 hover:bg-neutral-100 rounded-full flex items-center justify-center transition-colors"
                aria-label="Dismiss construction notice"
              >
                <X className="w-3 h-3 text-neutral-600" strokeWidth={2} />
              </motion.button>
            </div>

            {/* Small accent line */}
            <div className="h-0.5 bg-black" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
