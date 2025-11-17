import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, MapPin, Mic, Lightbulb, Users, Sparkles } from 'lucide-react';
import transitSketch from 'figma:asset/9298434c85f2c54111515cdaea3611e1c1e4afe3.png';
import topographicMap from 'figma:asset/6cff58430b798873f413cfa696c9b1d71321f12d.png';
import includeKit from 'figma:asset/d70b94a6cb3de61ce8a5801298040727224f3e61.png';

interface MoodCard {
  id: number;
  type: 'image' | 'icon' | 'figma-image';
  image?: string;
  figmaImage?: string;
  icon?: React.ReactNode;
  label?: string;
}

const moodCards: MoodCard[] = [
  {
    id: 1,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1740324974144-046b3538e89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlJTIwcGFwZXIlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDYwMTM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    type: 'icon',
    icon: <MapPin className="w-12 h-12" />,
    label: 'URBAN',
  },
  {
    id: 3,
    type: 'figma-image',
    figmaImage: transitSketch,
  },
  {
    id: 4,
    type: 'icon',
    icon: <Mic className="w-12 h-12" />,
    label: 'SOUND',
  },
  {
    id: 5,
    type: 'figma-image',
    figmaImage: topographicMap,
  },
  {
    id: 6,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1656164113343-25e62181588b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MDYwMTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    type: 'icon',
    icon: <Lightbulb className="w-12 h-12" />,
    label: 'RESEARCH',
  },
  {
    id: 8,
    type: 'figma-image',
    figmaImage: includeKit,
  },
  {
    id: 9,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1603347194464-a60f10085507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBzaGFwZXMlMjBwYXN0ZWx8ZW58MXx8fHwxNzYwNjAxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 10,
    type: 'icon',
    icon: <Palette className="w-12 h-12" />,
    label: 'DESIGN',
  },
  {
    id: 11,
    type: 'icon',
    icon: <Users className="w-12 h-12" />,
    label: 'COMMUNITY',
  },
  {
    id: 12,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzYwNjAxMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function MoodboardSection() {
  return (
    <section id="moodboard" className="py-16 px-6 bg-white relative overflow-hidden border-t-8 border-b-8 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(to right, #000 2px, transparent 2px)',
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="inline-block border-8 border-black bg-white p-8 mb-6">
            <h2 className="text-black text-5xl">
              VISUAL MOODBOARD
            </h2>
          </div>
          <div className="h-1 w-40 bg-black mx-auto" />
        </motion.div>

        {/* Moodboard Grid - Brutalist Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moodCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.4,
                ease: 'easeOut'
              }}
              className={`
                aspect-square border-4 border-black bg-white overflow-hidden
                hover:border-8 transition-all duration-200
                ${card.id === 1 || card.id === 8 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              {card.type === 'image' && card.image && (
                <ImageWithFallback
                  src={card.image}
                  alt={`Mood ${card.id}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              )}
              
              {card.type === 'figma-image' && card.figmaImage && (
                <img
                  src={card.figmaImage}
                  alt={`Mood ${card.id}`}
                  className="w-full h-full object-cover"
                />
              )}
              
              {card.type === 'icon' && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white hover:bg-black text-black hover:text-white transition-colors group">
                  {card.icon}
                  {card.label && (
                    <span 
                      className="mt-4" 
                      style={{ 
                        fontWeight: 900, 
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        fontFamily: 'monospace',
                      }}
                    >
                      {card.label}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-block border-4 border-black bg-white p-6">
            <p className="text-black text-sm" style={{ fontWeight: 900, letterSpacing: '0.1em', fontFamily: 'monospace' }}>
              A COLLECTION OF INFLUENCES, INSPIRATIONS, AND EXPLORATIONS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
