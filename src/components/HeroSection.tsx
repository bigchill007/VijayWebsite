import { motion } from 'framer-motion';
import { 
  Home,
  Compass,
  Sparkles,
  Heart,
  Search,
  Target,
  HandHeart,
  BookOpen,
  Users,
  GraduationCap,
  MapPin,
  Lightbulb,
  Waves,
  Utensils,
  Swords
} from 'lucide-react';

// Organized in contour layers - BRUTALIST MONOCHROME
// Adjusted to avoid overlapping with WHO IS VIJAY and each other
// Inner ring - closest to center
const innerRing = [
  { text: 'architect', icon: Home, color: '#000000', angle: 65 },
  { text: 'urban designer', icon: Compass, color: '#171717', angle: 120 },
  { text: 'UX explorer', icon: Target, color: '#262626', angle: 235 },
  { text: 'social worker', icon: HandHeart, color: '#404040', angle: 310 },
];

// Middle ring - better spacing
const middleRing = [
  { text: 'product researcher', icon: Search, color: '#525252', angle: 15 },
  { text: 'place-maker', icon: Sparkles, color: '#171717', angle: 75 },
  { text: 'educator', icon: GraduationCap, color: '#262626', angle: 135 },
  { text: 'mentor', icon: BookOpen, color: '#000000', angle: 195 },
  { text: 'mindful artist', icon: Heart, color: '#404040', angle: 255 },
  { text: 'founder / collaborator', icon: Users, color: '#525252', angle: 315 },
];

// Outer ring - furthest from center, avoiding top-left corner
const outerRing = [
  { text: 'lover of maps', icon: MapPin, color: '#737373', angle: 25 },
  { text: 'resilient optimist', icon: Lightbulb, color: '#171717', angle: 85 },
  { text: 'foodie', icon: Utensils, color: '#262626', angle: 145 },
  { text: 'martial artist', icon: Swords, color: '#000000', angle: 205 },
  { text: 'creative collaborator', icon: Sparkles, color: '#404040', angle: 265 },
  { text: 'design thinker', icon: Lightbulb, color: '#525252', angle: 340 },
];

interface TagProps {
  text: string;
  icon: any;
  color: string;
  delay: number;
  angle: number;
  radius: number;
  ringIndex: number;
}

function CreativeTag({ text, icon: Icon, color, delay, angle, radius, ringIndex }: TagProps) {
  // Convert polar coordinates to cartesian
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 45 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        type: 'spring',
        stiffness: 80,
        damping: 12,
      }}
      whileHover={{ 
        scale: 1.1,
        z: 50,
        transition: { duration: 0.2 }
      }}
      className="absolute cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="flex items-center gap-2 border-2 border-black bg-white px-2 py-1">
        {/* Icon */}
        <motion.div
          className="flex items-center justify-center flex-shrink-0"
          whileHover={{
            rotate: [0, -8, 8, 0],
            transition: { duration: 0.4 }
          }}
        >
          <Icon className="w-4 h-4" style={{ color: '#000', strokeWidth: 2 }} />
        </motion.div>
        
        {/* Text */}
        <span 
          className="text-black whitespace-nowrap uppercase"
          style={{ 
            fontWeight: 700,
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
          }}
        >
          {text}
        </span>
      </div>
      
      {/* Bold line on hover - connects to center */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
        }}
      >
        <svg width="2" height="2" className="overflow-visible">
          <motion.line
            x1="0"
            y1="0"
            x2={-(x - 50) * 8}
            y2={-(y - 45) * 8}
            stroke="#000"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileHover={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-white">
      {/* Bold Grid Overlay - Brutalist */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="container mx-auto h-full max-w-7xl">
          <div className="grid grid-cols-12 h-full gap-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r-2 border-black" />
            ))}
          </div>
        </div>
      </div>

      {/* Brutalist Background Graphics - Geometric & Bold */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bold geometric lines - Monochrome */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          {/* Top wavy lines - Brutalist black */}
          <motion.path
            d="M -100 150 Q 200 100, 500 150 T 1100 150 T 1700 150"
            stroke="#000000"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M -100 150 Q 200 100, 500 150 T 1100 150 T 1700 150",
                "M -100 150 Q 200 200, 500 150 T 1100 150 T 1700 150",
                "M -100 150 Q 200 100, 500 150 T 1100 150 T 1700 150",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M -100 200 Q 250 150, 550 200 T 1150 200 T 1750 200"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M -100 200 Q 250 150, 550 200 T 1150 200 T 1750 200",
                "M -100 200 Q 250 250, 550 200 T 1150 200 T 1750 200",
                "M -100 200 Q 250 150, 550 200 T 1150 200 T 1750 200",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Middle organic contours */}
          <motion.path
            d="M -100 400 Q 300 350, 600 400 T 1200 400 T 1800 400"
            stroke="#171717"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M -100 400 Q 300 350, 600 400 T 1200 400 T 1800 400",
                "M -100 400 Q 300 450, 600 400 T 1200 400 T 1800 400",
                "M -100 400 Q 300 350, 600 400 T 1200 400 T 1800 400",
              ]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          
          {/* Bottom wavy lines */}
          <motion.path
            d="M -100 700 Q 200 650, 500 700 T 1100 700 T 1700 700"
            stroke="#000000"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M -100 700 Q 200 650, 500 700 T 1100 700 T 1700 700",
                "M -100 700 Q 200 750, 500 700 T 1100 700 T 1700 700",
                "M -100 700 Q 200 650, 500 700 T 1100 700 T 1700 700",
              ]
            }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.path
            d="M -100 750 Q 250 700, 550 750 T 1150 750 T 1750 750"
            stroke="#262626"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M -100 750 Q 250 700, 550 750 T 1150 750 T 1750 750",
                "M -100 750 Q 250 800, 550 750 T 1150 750 T 1750 750",
                "M -100 750 Q 250 700, 550 750 T 1150 750 T 1750 750",
              ]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          
          {/* Curved organic shapes */}
          <motion.path
            d="M 100 300 C 200 250, 400 350, 500 300 S 700 250, 800 300"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 100 300 C 200 250, 400 350, 500 300 S 700 250, 800 300",
                "M 100 300 C 200 350, 400 250, 500 300 S 700 350, 800 300",
                "M 100 300 C 200 250, 400 350, 500 300 S 700 250, 800 300",
              ]
            }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Additional abstract diagonal patterns */}
          <motion.path
            d="M 1200 200 Q 1400 150, 1600 200 T 2000 200"
            stroke="#404040"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 1200 200 Q 1400 150, 1600 200 T 2000 200",
                "M 1200 200 Q 1400 250, 1600 200 T 2000 200",
                "M 1200 200 Q 1400 150, 1600 200 T 2000 200",
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          
          {/* Crossing curves for more interest */}
          <motion.path
            d="M 50 500 Q 300 450, 550 500 Q 800 550, 1050 500"
            stroke="#171717"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 50 500 Q 300 450, 550 500 Q 800 550, 1050 500",
                "M 50 500 Q 300 550, 550 500 Q 800 450, 1050 500",
                "M 50 500 Q 300 450, 550 500 Q 800 550, 1050 500",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          />
          
          {/* ADDITIONAL WAVES - Doubling the patterns */}
          <motion.path
            d="M -100 250 Q 300 200, 600 250 T 1200 250"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M -100 250 Q 300 200, 600 250 T 1200 250",
                "M -100 250 Q 300 300, 600 250 T 1200 250",
                "M -100 250 Q 300 200, 600 250 T 1200 250",
              ]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          
          <motion.path
            d="M 200 100 C 400 50, 600 150, 800 100 S 1200 50, 1400 100"
            stroke="#262626"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 200 100 C 400 50, 600 150, 800 100 S 1200 50, 1400 100",
                "M 200 100 C 400 150, 600 50, 800 100 S 1200 150, 1400 100",
                "M 200 100 C 400 50, 600 150, 800 100 S 1200 50, 1400 100",
              ]
            }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          
          <motion.path
            d="M -50 600 Q 200 550, 450 600 T 950 600 T 1450 600"
            stroke="#404040"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M -50 600 Q 200 550, 450 600 T 950 600 T 1450 600",
                "M -50 600 Q 200 650, 450 600 T 950 600 T 1450 600",
                "M -50 600 Q 200 550, 450 600 T 950 600 T 1450 600",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          
          <motion.path
            d="M 100 450 Q 350 400, 600 450 Q 850 500, 1100 450"
            stroke="#171717"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 100 450 Q 350 400, 600 450 Q 850 500, 1100 450",
                "M 100 450 Q 350 500, 600 450 Q 850 400, 1100 450",
                "M 100 450 Q 350 400, 600 450 Q 850 500, 1100 450",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
          
          <motion.path
            d="M 800 350 C 900 300, 1100 400, 1200 350 S 1400 300, 1500 350"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 800 350 C 900 300, 1100 400, 1200 350 S 1400 300, 1500 350",
                "M 800 350 C 900 400, 1100 300, 1200 350 S 1400 400, 1500 350",
                "M 800 350 C 900 300, 1100 400, 1200 350 S 1400 300, 1500 350",
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
        </svg>
        
        {/* Brutalist geometric shapes - Hard edges */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 opacity-[0.03]"
          style={{ 
            background: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 10px)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 opacity-[0.04]"
          style={{ 
            background: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 15px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 border-4 border-black w-64 h-64 opacity-[0.05]"
          animate={{
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content Container - 12 Column Grid */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative" style={{ minHeight: '80vh' }}>
          
          {/* Central Name - Vibrant with Graphics & Textures */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-20">
            {/* SVG Definitions for gradients and patterns */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                {/* Gradient for V */}
                <linearGradient id="gradientV" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                {/* Gradient for i */}
                <linearGradient id="gradientI" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                {/* Gradient for j */}
                <radialGradient id="gradientJ">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </radialGradient>
                {/* Gradient for a */}
                <linearGradient id="gradientA" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                {/* Gradient for y */}
                <linearGradient id="gradientY" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                {/* Dot pattern */}
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" opacity="0.3" />
                </pattern>
              </defs>
            </svg>

            <div className="flex items-center justify-center gap-3 md:gap-6 relative">
              {/* V - Lo-fi organic crackle texture (subtle white) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <span 
                  className="block relative"
                  style={{
                    fontSize: 'clamp(5rem, 16vw, 14rem)',
                    fontWeight: 900,
                    backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(245, 245, 245, 0.5) 100%), url('https://images.unsplash.com/photo-1507692862470-aba06fe195c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGV4dHVyZSUyMHBhdHRlcm58ZW58MXx8fHwxNzYwNjA0MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                    backgroundSize: '150% 150%',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'lighten',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 0.85,
                    filter: 'invert(0.85) contrast(0.9) brightness(1.15)',
                  }}
                >
                  V
                </span>
                {/* Sharp corner decoration */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-4 border-black" />
              </motion.div>

              {/* i - Brutalist bold */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <span 
                  className="block"
                  style={{
                    fontSize: 'clamp(5rem, 16vw, 14rem)',
                    fontWeight: 900,
                    color: '#000000',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 0.85,
                    textShadow: '4px 4px 0px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  i
                </span>
                <div className="absolute top-2 -right-1 w-2 h-2 bg-black" />
              </motion.div>

              {/* j - Lo-fi marble swirl texture (subtle white) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <span 
                  className="block"
                  style={{
                    fontSize: 'clamp(5rem, 16vw, 14rem)',
                    fontWeight: 900,
                    backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(245, 245, 245, 0.5) 100%), url('https://images.unsplash.com/photo-1603739592262-e66a6708e141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzd2lybCUyMHRleHR1cmV8ZW58MXx8fHwxNzYwNjA0MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                    backgroundSize: '180% 180%',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'lighten',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 0.85,
                    filter: 'invert(0.85) contrast(0.9) brightness(1.15)',
                  }}
                >
                  j
                </span>
                <div className="absolute -bottom-1 left-0 w-6 h-1 bg-black" />
              </motion.div>

              {/* a - Lo-fi grunge abstract texture (subtle white) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <span 
                  className="block"
                  style={{
                    fontSize: 'clamp(5rem, 16vw, 14rem)',
                    fontWeight: 900,
                    backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.4) 0%, rgba(245, 245, 245, 0.5) 100%), url('https://images.unsplash.com/photo-1756658542356-1a52b68acb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRleHR1cmUlMjBncnVuZ2V8ZW58MXx8fHwxNzYwNjA0MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                    backgroundSize: '160% 160%',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'lighten',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 0.85,
                    filter: 'invert(0.85) contrast(0.9) brightness(1.15)',
                  }}
                >
                  a
                </span>
                <div className="absolute top-1/4 -right-3 w-3 h-3 bg-black rotate-45" />
              </motion.div>

              {/* y - Brutalist */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <span 
                  className="block"
                  style={{
                    fontSize: 'clamp(5rem, 16vw, 14rem)',
                    fontWeight: 900,
                    color: '#000000',
                    fontFamily: 'system-ui, sans-serif',
                    lineHeight: 0.85,
                    textShadow: '4px 4px 0px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  y
                </span>
                <div className="absolute -bottom-2 left-1/2 w-1 h-6 bg-black" />
              </motion.div>
            </div>

            {/* Brutalist shadow/outline */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                boxShadow: '12px 12px 0px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          {/* WHO IS VIJAY? Corner Element - Brutalist with Pop Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: 1,
            }}
            transition={{ 
              delay: 1.5, 
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
            className="absolute top-4 left-4 md:top-8 md:left-8 z-30"
          >
            <a href="#about" className="group">
              <motion.div 
                className="border-4 px-4 py-3 transition-all duration-300"
                animate={{
                  borderColor: ['#000000', '#171717', '#404040', '#737373', '#404040', '#171717', '#000000'],
                  backgroundColor: ['#ffffff', '#f5f5f5', '#e5e5e5', '#f5f5f5', '#ffffff'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#000000',
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  className="uppercase"
                  style={{
                    fontWeight: 900,
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em',
                    lineHeight: 1.2,
                  }}
                  animate={{
                    color: ['#000000', '#171717', '#404040', '#171717', '#000000'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    color: '#ffffff',
                  }}
                >
                  Who is
                  <br />
                  Vijay?
                </motion.h3>
              </motion.div>
            </a>
          </motion.div>

          {/* INNER CONTOUR RING - Closest elevation */}
          {innerRing.map((tag, index) => (
            <CreativeTag
              key={tag.text}
              {...tag}
              delay={0.8 + index * 0.08}
              radius={24}
              ringIndex={0}
            />
          ))}

          {/* MIDDLE CONTOUR RING - Mid elevation */}
          {middleRing.map((tag, index) => (
            <CreativeTag
              key={tag.text}
              {...tag}
              delay={1.0 + index * 0.06}
              radius={34}
              ringIndex={1}
            />
          ))}

          {/* OUTER CONTOUR RING - Outer elevation */}
          {outerRing.map((tag, index) => (
            <CreativeTag
              key={tag.text}
              {...tag}
              delay={1.3 + index * 0.05}
              radius={44}
              ringIndex={2}
            />
          ))}

          {/* Brutalist Contour Lines - Bold & Black */}
          <svg className="absolute inset-0 pointer-events-none opacity-[0.2]">
            {/* Inner contour */}
            <motion.ellipse
              cx="50%"
              cy="45%"
              rx="24%"
              ry="22%"
              fill="none"
              stroke="#000000"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeDashoffset: [0, -20, 0],
              }}
              transition={{ 
                pathLength: { duration: 2, ease: 'easeOut' },
                strokeDashoffset: { duration: 8, repeat: Infinity, ease: 'linear' }
              }}
            />
            {/* Middle contour */}
            <motion.ellipse
              cx="50%"
              cy="45%"
              rx="34%"
              ry="31%"
              fill="none"
              stroke="#171717"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeDashoffset: [0, 20, 0],
              }}
              transition={{ 
                pathLength: { duration: 2.5, delay: 0.2, ease: 'easeOut' },
                strokeDashoffset: { duration: 10, repeat: Infinity, ease: 'linear' }
              }}
            />
            {/* Outer contour */}
            <motion.ellipse
              cx="50%"
              cy="45%"
              rx="44%"
              ry="40%"
              fill="none"
              stroke="#404040"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeDashoffset: [0, -20, 0],
              }}
              transition={{ 
                pathLength: { duration: 3, delay: 0.4, ease: 'easeOut' },
                strokeDashoffset: { duration: 12, repeat: Infinity, ease: 'linear' }
              }}
            />
            
            {/* Extra decorative circles for depth */}
            <motion.circle
              cx="50%"
              cy="45%"
              r="14%"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
