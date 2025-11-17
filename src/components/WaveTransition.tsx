import { motion } from 'framer-motion';

interface WaveTransitionProps {
  isActive: boolean;
}

export function WaveTransition({ isActive }: WaveTransitionProps) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Wave Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(79, 159, 207, 0.3) 20%, rgba(95, 179, 217, 0.5) 50%, rgba(122, 196, 229, 0.3) 80%, transparent 100%)',
        }}
      />

      {/* Ripple Effects - Multiple Layers */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute rounded-full border-2"
          style={{
            borderColor: i % 2 === 0 ? 'rgba(79, 159, 207, 0.3)' : 'rgba(122, 196, 229, 0.25)',
            left: '50%',
            top: '50%',
            width: 50,
            height: 50,
          }}
          initial={{
            scale: 0,
            opacity: 0,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [0, 15 + i * 2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Floating Particles - Water Droplets */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            background: ['rgba(79, 159, 207, 0.4)', 'rgba(95, 179, 217, 0.5)', 'rgba(122, 196, 229, 0.3)'][i % 3],
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            y: (Math.random() - 0.5) * 400,
            x: (Math.random() - 0.5) * 400,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 1.8,
            delay: i * 0.03,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Flowing Lines - River Streams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${i % 2 === 0 ? '79, 159, 207' : '122, 196, 229'}, 0.5), transparent)`,
            width: `${Math.random() * 300 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${10 + i * 18}%`,
          }}
          initial={{
            x: '-100%',
            opacity: 0,
          }}
          animate={{
            x: '200%',
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
