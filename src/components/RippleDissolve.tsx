import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RippleDissolveProps {
  isActive: boolean;
  targetSelector?: string;
}

export function RippleDissolve({ isActive }: RippleDissolveProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (isActive) {
      // Generate ripple points across the hero section
      const newRipples = [];
      for (let i = 0; i < 20; i++) {
        newRipples.push({
          x: Math.random() * 100,
          y: Math.random() * 60, // Focus on upper portion (hero area)
          delay: Math.random() * 0.5,
        });
      }
      setRipples(newRipples);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Ripple effects centered on hero elements */}
      {ripples.map((ripple, i) => (
        <motion.div
          key={`dissolve-ripple-${i}`}
          className="absolute"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
          }}
        >
          {/* Multiple concentric ripples */}
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={`ring-${j}`}
              className="absolute rounded-full border"
              style={{
                borderColor: `rgba(79, 159, 207, ${0.3 - j * 0.1})`,
                borderWidth: 2 - j * 0.5,
              }}
              initial={{
                width: 20,
                height: 20,
                x: '-50%',
                y: '-50%',
                opacity: 0,
              }}
              animate={{
                width: 200 + j * 50,
                height: 200 + j * 50,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.2,
                delay: ripple.delay + j * 0.1,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Water droplet particles dissolving elements */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`droplet-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.8, 0],
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 1,
            delay: Math.random() * 0.6,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
