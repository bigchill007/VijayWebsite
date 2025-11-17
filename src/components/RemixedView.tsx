import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRef, useState } from 'react';

interface RemixedViewProps {
  onBack: () => void;
}

// Journey Milestones - More abstract approach
const journeyPoints = [
  {
    id: 1,
    year: '2012',
    title: 'Source',
    description: 'Where the journey begins',
    position: 15,
  },
  {
    id: 2,
    year: '2014',
    title: 'First Current',
    description: 'Learning to flow',
    position: 28,
  },
  {
    id: 3,
    year: '2016',
    title: 'Confluence',
    description: 'Streams merge',
    position: 42,
  },
  {
    id: 4,
    year: '2018',
    title: 'Deep Waters',
    description: 'Diving deeper',
    position: 56,
  },
  {
    id: 5,
    year: '2020',
    title: 'Rapids',
    description: 'Navigating change',
    position: 68,
  },
  {
    id: 6,
    year: '2022',
    title: 'Delta',
    description: 'Expanding horizons',
    position: 82,
  },
  {
    id: 7,
    year: '2024',
    title: 'Horizon',
    description: 'The journey continues',
    position: 95,
  },
];

export function RemixedView({ onBack }: RemixedViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring animation for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Multiple parallax layers
  const layer1Y = useTransform(smoothProgress, [0, 1], [0, -300]);
  const layer2Y = useTransform(smoothProgress, [0, 1], [0, -150]);
  const layer3Y = useTransform(smoothProgress, [0, 1], [0, -50]);
  const waveOffset = useTransform(smoothProgress, [0, 1], [0, 400]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Deep Blue Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-900" />

      {/* Water Texture Overlay */}
      <div 
        className="fixed inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1707525641393-2d5f2d55c8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRleHR1cmUlMjBibHVlfGVufDF8fHx8MTc2MTc1MTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Topographic Map Overlay */}
      <motion.div 
        className="fixed inset-0 opacity-20 mix-blend-soft-light pointer-events-none"
        style={{
          y: layer3Y,
          backgroundImage: `url('https://images.unsplash.com/photo-1730314737142-2f6bb293f893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3BvZ3JhcGhpYyUyMG1hcCUyMGNvbnRvdXJ8ZW58MXx8fHwxNzYxODE2OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated Wave Layers */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-60">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
          </linearGradient>
          
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>

        {/* Multiple animated wave paths */}
        <motion.path
          d="M -100 200 Q 150 150, 400 200 T 900 200 T 1500 200"
          stroke="url(#waveGrad1)"
          strokeWidth="3"
          fill="none"
          filter="url(#blur1)"
          animate={{
            d: [
              "M -100 200 Q 150 150, 400 200 T 900 200 T 1500 200",
              "M -100 200 Q 150 250, 400 200 T 900 200 T 1500 200",
              "M -100 200 Q 150 150, 400 200 T 900 200 T 1500 200",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M -100 350 Q 200 300, 500 350 T 1100 350 T 1700 350"
          stroke="url(#waveGrad2)"
          strokeWidth="4"
          fill="none"
          filter="url(#blur1)"
          animate={{
            d: [
              "M -100 350 Q 200 300, 500 350 T 1100 350 T 1700 350",
              "M -100 350 Q 200 400, 500 350 T 1100 350 T 1700 350",
              "M -100 350 Q 200 300, 500 350 T 1100 350 T 1700 350",
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M -100 500 Q 250 450, 600 500 T 1300 500 T 2000 500"
          stroke="url(#waveGrad3)"
          strokeWidth="5"
          fill="none"
          filter="url(#blur2)"
          animate={{
            d: [
              "M -100 500 Q 250 450, 600 500 T 1300 500 T 2000 500",
              "M -100 500 Q 250 550, 600 500 T 1300 500 T 2000 500",
              "M -100 500 Q 250 450, 600 500 T 1300 500 T 2000 500",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M -100 700 Q 300 650, 700 700 T 1500 700 T 2300 700"
          stroke="url(#waveGrad1)"
          strokeWidth="3"
          fill="none"
          filter="url(#blur1)"
          animate={{
            d: [
              "M -100 700 Q 300 650, 700 700 T 1500 700 T 2300 700",
              "M -100 700 Q 300 750, 700 700 T 1500 700 T 2300 700",
              "M -100 700 Q 300 650, 700 700 T 1500 700 T 2300 700",
            ]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Floating Contour Lines (Map Style) */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer1Y }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`contour-${i}`}
            className="absolute left-0 right-0 border-t border-cyan-400/20"
            style={{
              top: `${10 + i * 8}%`,
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Depth Indicators (Map Coordinates Style) */}
      <motion.div 
        className="fixed top-0 left-0 p-8 pointer-events-none"
        style={{ y: layer2Y }}
      >
        {['N', 'E', 'S', 'W'].map((dir, i) => (
          <motion.div
            key={dir}
            className="text-cyan-300/40 mb-4"
            style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          >
            {dir} {String(Math.floor(Math.random() * 90)).padStart(2, '0')}° {String(Math.floor(Math.random() * 60)).padStart(2, '0')}'
          </motion.div>
        ))}
      </motion.div>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Compass Icon */}
            <motion.div
              className="inline-flex items-center justify-center mb-12"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-cyan-300">
                <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <line x1="40" y1="10" x2="40" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="70" x2="40" y2="60" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2" />
                <motion.polygon
                  points="40,25 35,40 40,38 45,40"
                  fill="currentColor"
                  animate={{ 
                    rotate: [0, 10, -10, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity
                  }}
                  style={{ transformOrigin: '40px 40px' }}
                />
              </svg>
            </motion.div>

            <motion.h1
              className="text-cyan-50 mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 200,
                letterSpacing: '0.05em',
              }}
            >
              River of Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-200/80 max-w-2xl mx-auto mb-16"
              style={{ 
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              Navigate through the currents of time, where each wave carries a story
              and every depth reveals new understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                className="text-cyan-300/60"
                style={{ 
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ↓ Scroll to explore the depths ↓
              </motion.div>
              
              {/* Animated Ripple */}
              <motion.div className="relative">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-20 h-20 border border-cyan-400/30 rounded-full"
                    style={{
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Journey Section - Abstract Fluid Flow */}
      <section className="relative py-32 px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl relative">
          
          {/* Central Flowing River Visualization */}
          <motion.div 
            className="absolute left-1/2 top-0 w-1 h-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, #06b6d4, #0ea5e9, #3b82f6, transparent)',
              transform: 'translateX(-50%)',
              opacity: 0.3,
              filter: 'blur(2px)',
            }}
          />

          {/* Abstract Wave Forms */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={`bubble-${i}`}
                cx={`${30 + Math.random() * 40}%`}
                cy={`${i * 5}%`}
                r={Math.random() * 3 + 1}
                fill="#06b6d4"
                opacity={0.2}
                animate={{
                  x: [0, Math.random() * 100 - 50, 0],
                  y: [0, Math.random() * 50, 0],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>

          {/* Journey Points */}
          <div className="relative space-y-32">
            {journeyPoints.map((point, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={point.id}
                  className="relative"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-20%' }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} items-center gap-12`}>
                    {/* Content Card */}
                    <motion.div
                      className="relative group cursor-pointer"
                      style={{
                        width: 'clamp(280px, 40vw, 400px)',
                      }}
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setActivePoint(point.id)}
                      onMouseLeave={() => setActivePoint(null)}
                    >
                      {/* Card Background with Water Effect */}
                      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 border border-cyan-400/20">
                        {/* Animated Water Ripple on Hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-30"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 70%)',
                          }}
                          animate={{
                            scale: activePoint === point.id ? [1, 2] : 1,
                            opacity: activePoint === point.id ? [0, 0.3, 0] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: activePoint === point.id ? Infinity : 0,
                          }}
                        />
                        
                        {/* Year Badge */}
                        <motion.div
                          className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/40"
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.85rem',
                          }}
                        >
                          <span className="text-cyan-200">{point.year}</span>
                        </motion.div>

                        {/* Title */}
                        <h3 
                          className="text-cyan-50 mb-3"
                          style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                            fontWeight: 300,
                          }}
                        >
                          {point.title}
                        </h3>

                        {/* Description */}
                        <p 
                          className="text-cyan-200/70"
                          style={{
                            fontWeight: 300,
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                          }}
                        >
                          {point.description}
                        </p>

                        {/* Depth Line Decoration */}
                        <div className="mt-6 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="h-px bg-cyan-400/30"
                              style={{ width: `${(i + 1) * 15}px` }}
                              animate={{
                                opacity: [0.2, 0.6, 0.2],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Connection Line to River */}
                      <svg 
                        className="absolute top-1/2 w-12 h-1"
                        style={{
                          left: isLeft ? '100%' : 'auto',
                          right: isLeft ? 'auto' : '100%',
                        }}
                      >
                        <motion.line
                          x1="0"
                          y1="0"
                          x2="48"
                          y2="0"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          opacity="0.3"
                          animate={{
                            strokeDashoffset: [0, -8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Center Marker */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: activePoint === point.id ? 1.5 : 1,
                      }}
                    >
                      <div className="relative">
                        {/* Outer Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-cyan-400/30"
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '-10px',
                          }}
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                        
                        {/* Marker Dot */}
                        <div className="w-5 h-5 rounded-full bg-cyan-400 border-2 border-cyan-200/50 shadow-lg shadow-cyan-400/50" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Wave Decoration */}
                  <svg className="absolute -bottom-16 left-0 right-0 w-full h-8 opacity-20 pointer-events-none">
                    <motion.path
                      d={`M 0 15 Q ${isLeft ? '150' : '300'} 5, 400 15 T 800 15`}
                      stroke="#06b6d4"
                      strokeWidth="1"
                      fill="none"
                      animate={{
                        d: [
                          `M 0 15 Q ${isLeft ? '150' : '300'} 5, 400 15 T 800 15`,
                          `M 0 15 Q ${isLeft ? '150' : '300'} 25, 400 15 T 800 15`,
                          `M 0 15 Q ${isLeft ? '150' : '300'} 5, 400 15 T 800 15`,
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Ocean Waves Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 
              className="text-cyan-100 mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 200,
              }}
            >
              Every Wave Tells a Story
            </h2>
            
            <p 
              className="text-cyan-200/70 max-w-2xl mx-auto"
              style={{
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Like water shapes the land, experiences shape who we become. 
              The journey flows onward, always moving, always discovering.
            </p>
          </motion.div>

          {/* Aerial Water View */}
          <motion.div
            className="mt-16 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative h-96 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626098119735-f3bc80709314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsfGVufDF8fHx8MTc2MTgxNjk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Aerial view of ocean waves"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with wave effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              {/* Animated scan lines */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`scan-${i}`}
                  className="absolute left-0 right-0 h-px bg-cyan-400/20"
                  style={{
                    top: `${i * 12.5}%`,
                  }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scaleX: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Return Home Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.button
            onClick={onBack}
            className="group relative px-12 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '1.1rem',
              fontWeight: 400,
            }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" className="transform group-hover:-translate-x-1 transition-transform">
                <path d="M15 10 L5 10 M8 6 L4 10 L8 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Return to Shore
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-cyan-300/60"
            style={{
              fontWeight: 300,
              fontSize: '0.85rem',
              fontStyle: 'italic',
            }}
          >
            Navigate back to the portfolio
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
