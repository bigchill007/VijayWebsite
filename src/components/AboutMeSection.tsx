import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  User, 
  Waves, 
  MapPin, 
  Search, 
  Volume2, 
  Package, 
  Briefcase, 
  Lightbulb,
  ChevronDown,
  ChevronUp,
  FileText,
  X,
  TrendingUp,
  Award,
  Globe,
  Layers,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutMeSectionProps {
  onRiverJourneyClick?: () => void;
}

interface Facet {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  projects: string[];
}

const facets: Facet[] = [
  {
    id: 'urban',
    icon: <MapPin className="w-6 h-6" />,
    title: 'Urban Designer',
    description: 'Creating inclusive, accessible public spaces',
    color: '#000000',
    projects: ['Transit wayfinding systems', 'Community space planning', 'Universal design strategies'],
  },
  {
    id: 'researcher',
    icon: <Search className="w-6 h-6" />,
    title: 'UX Researcher',
    description: 'Evidence-based insights for human-centered design',
    color: '#262626',
    projects: ['Ethnographic studies', 'Journey mapping', 'Usability testing'],
  },
  {
    id: 'sound',
    icon: <Volume2 className="w-6 h-6" />,
    title: 'Sound Explorer',
    description: 'Sonic mapping and acoustic experience design',
    color: '#404040',
    projects: ['Soundscape analysis', 'Audio wayfinding', 'Somaesthetic research'],
  },
  {
    id: 'toolkit',
    icon: <Package className="w-6 h-6" />,
    title: 'Inclusive Toolkit Maker',
    description: 'Building scalable research tools for diverse learners',
    color: '#525252',
    projects: ['Educational frameworks', 'K-12 design tools', 'Neurodiverse methodologies'],
  },
  {
    id: 'coach',
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Career Coach',
    description: 'Mentoring emerging designers and researchers',
    color: '#737373',
    projects: ['Portfolio development', 'Career strategy', 'Community building'],
  },
  {
    id: 'prototyper',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Product Prototyper',
    description: 'Rapid prototyping and interactive design',
    color: '#a3a3a3',
    projects: ['Design systems', 'Interactive mockups', 'User testing'],
  },
];

const coreValues = [
  'Empathy',
  'System Thinking',
  'Human-Centered',
  'Data-Informed',
  'Inclusive Methods',
  'Urban Futures',
];

const tools = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Notion', icon: '📝' },
  { name: 'AI Design', icon: '🤖' },
  { name: 'Procreate', icon: '✏️' },
  { name: 'Sound Analysis', icon: '🎵' },
  { name: 'GIS Mapping', icon: '🗺️' },
];

const stats = [
  { icon: TrendingUp, label: 'Years in Design', value: '8+' },
  { icon: Award, label: 'Projects Led', value: '25+' },
  { icon: Globe, label: 'Markets Explored', value: '5' },
  { icon: Layers, label: 'Disciplines Bridged', value: '6' },
];

export function AboutMeSection({ onRiverJourneyClick }: AboutMeSectionProps) {
  const [expandedFacet, setExpandedFacet] = useState<string | null>(null);
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden border-t-8 border-b-8 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Dynamic Animation */}
        <div className="mb-20 flex items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{
              y: [0, -10, 0],
            }}
            style={{
              transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            {/* Origami Crane Icon */}
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-neutral-400">
              <motion.path
                d="M 24 8 L 32 16 L 24 24 M 24 24 L 16 16 L 24 8 M 24 24 L 24 40 M 16 32 L 24 40 L 32 32"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              <motion.path
                d="M 8 20 L 24 24 L 40 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
          </motion.div>

          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-800"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-px bg-neutral-800 mx-auto mt-2"
            />
          </div>
        </div>

        {/* Personal Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjE3NzQ1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Vijay Portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 60%, rgba(99, 102, 241, 0.3) 100%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-neutral-800 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  I'm Vijay
                </h3>
                <p className="text-neutral-700 mb-6" style={{ fontWeight: 300, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  A curious, evidence-based multidisciplinary designer blending empathy, research, and innovation. 
                  I thrive bridging creativity, systems, and inclusion for impact across communities, classrooms, 
                  and urban spaces.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center"
                      >
                        <Icon className="w-5 h-5 mx-auto mb-2 text-indigo-500" />
                        <div className="text-neutral-800" style={{ fontWeight: 500, fontSize: '1.25rem' }}>
                          {stat.value}
                        </div>
                        <div className="text-neutral-600" style={{ fontWeight: 300, fontSize: '0.75rem' }}>
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Resume Button */}
                <motion.button
                  onClick={() => setShowResume(true)}
                  className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors flex items-center gap-2 mx-auto md:mx-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontWeight: 400 }}
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Facet Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facets.map((facet, index) => (
            <motion.div
              key={facet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 border border-neutral-200 cursor-pointer overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px ${facet.color}20`,
                }}
                onClick={() => setExpandedFacet(expandedFacet === facet.id ? null : facet.id)}
              >
                {/* Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0"
                  style={{
                    border: `2px solid ${facet.color}`,
                  }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${facet.color}15` }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{ color: facet.color }}>
                    {facet.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h4 className="text-neutral-800 mb-2" style={{ fontWeight: 500 }}>
                  {facet.title}
                </h4>
                <p className="text-neutral-600 mb-3" style={{ fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {facet.description}
                </p>

                {/* Expand indicator */}
                <div className="flex items-center gap-2 text-neutral-400" style={{ fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 300 }}>
                    {expandedFacet === facet.id ? 'Hide details' : 'View details'}
                  </span>
                  {expandedFacet === facet.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedFacet === facet.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-neutral-200"
                    >
                      <p className="text-neutral-500 mb-3" style={{ fontWeight: 300, fontSize: '0.85rem' }}>
                        Key areas:
                      </p>
                      <ul className="space-y-2">
                        {facet.projects.map((project, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: facet.color }}
                            />
                            <span className="text-neutral-600" style={{ fontWeight: 300, fontSize: '0.85rem' }}>
                              {project}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-neutral-700 text-center mb-6" style={{ fontWeight: 400, fontSize: '1.1rem' }}>
            Core Values & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreValues.map((value, i) => (
              <motion.button
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                }}
                className="px-5 py-2 bg-neutral-100 text-neutral-700 rounded-full transition-all"
                style={{ fontWeight: 300, fontSize: '0.9rem' }}
              >
                {value}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tools Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-neutral-700 text-center mb-6" style={{ fontWeight: 400, fontSize: '1.1rem' }}>
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <span style={{ fontSize: '1.5rem' }}>{tool.icon}</span>
                </div>
                <span className="text-neutral-600" style={{ fontWeight: 300, fontSize: '0.8rem' }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* River Journey Button */}
        {onRiverJourneyClick && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={onRiverJourneyClick}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 400 }}
            >
              {/* Animated wave background */}
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <Waves className="w-5 h-5" />
                Explore My River Journey
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <h3 className="text-neutral-800" style={{ fontWeight: 500 }}>
                  Resume
                </h3>
                <button
                  onClick={() => setShowResume(false)}
                  className="w-10 h-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>

              {/* Resume Content */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://docs.google.com/document/d/1fc_CJV47e2QGjvhoVqhPIQucUqNcX0irj4tAMcAb1Rk/preview"
                  className="w-full h-full border-0"
                  title="Vijay's Resume"
                  allow="autoplay"
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-neutral-200 flex justify-between items-center">
                <a
                  href="https://docs.google.com/document/d/1fc_CJV47e2QGjvhoVqhPIQucUqNcX0irj4tAMcAb1Rk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  style={{ fontWeight: 400, fontSize: '0.9rem' }}
                >
                  Open in Google Docs →
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="px-6 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  Return to Portfolio
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
