import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, Users, Target, Sparkles, Heart } from 'lucide-react';

interface CaseStudyCulturalProbeProps {
  onBack: () => void;
}

export function CaseStudyCulturalProbe({ onBack }: CaseStudyCulturalProbeProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Sticky Back Button */}
      <motion.button
        onClick={onBack}
        className="fixed top-24 left-6 z-50 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all border border-neutral-200 group"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flex items-center gap-2 text-neutral-700" style={{ fontWeight: 400 }}>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </span>
      </motion.button>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 opacity-40" />
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-pink-200/20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-purple-200/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-pink-100/50 rounded-full mb-6">
              <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-pink-600">
                  <path d="M8 2 L12 6 L10 8 L14 12 L12 14 L8 10 L6 12 L2 8 Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-pink-700" style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                Research · Design · Wellness
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-800 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Cultural Probe
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-neutral-600 mb-12"
            style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 300,
            }}
          >
            Designing Interactive Wellness Spaces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-600 max-w-2xl"
            style={{ 
              fontWeight: 300,
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            Researching community, mindfulness, and somaesthetic experiences through 
            collaborative workshops and sensory engagement tools.
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="container mx-auto max-w-5xl"
        >
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1634746306952-ced0059a090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjE4MjM2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cultural Probe Workshop Materials"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-neutral-800 mb-4">Project Context</h3>
              <p className="text-neutral-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                This research project explores how people experience wellness in community spaces 
                through tactile, sensory, and reflective design probes. Using origami, sensory cards, 
                and collaborative workshop materials, we investigated somaesthetic experiences and 
                mindfulness practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-neutral-800 mb-4">My Role</h3>
              <p className="text-neutral-600 mb-4" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                UX Researcher & Workshop Facilitator
              </p>
              <div className="space-y-2">
                {['Cultural probe design', 'Workshop facilitation', 'Qualitative analysis', 'Design synthesis'].map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                    <span className="text-neutral-600" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: '24 Participants', color: '#ec4899' },
              { icon: Target, label: '6 Workshops', color: '#8b5cf6' },
              { icon: Sparkles, label: '120+ Insights', color: '#06b6d4' },
              { icon: Heart, label: '8 Week Study', color: '#f59e0b' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <p className="text-neutral-800" style={{ fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Images */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12 text-center"
          >
            Research Process
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'https://images.unsplash.com/photo-1589123078295-d06ba77a48e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3Nob3AlMjBjYXJkc3xlbnwxfHx8fDE3NjE4MjM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1634746306952-ced0059a090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjE4MjM2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Process ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12"
          >
            Key Findings
          </motion.h3>

          <div className="space-y-6">
            {[
              {
                title: 'Tactile Engagement Enhances Mindfulness',
                description: 'Participants reported deeper connection to mindfulness practices when using physical, tactile materials like origami and sensory cards.',
              },
              {
                title: 'Community Creates Accountability',
                description: 'Group workshops fostered sustained wellness practices through peer support and shared experiences.',
              },
              {
                title: 'Personal Expression Matters',
                description: 'Open-ended design probes allowed participants to express wellness in culturally relevant and personally meaningful ways.',
              },
            ].map((finding, i) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border-l-4 border-pink-400"
              >
                <h4 className="text-neutral-800 mb-3" style={{ fontWeight: 500 }}>
                  {finding.title}
                </h4>
                <p className="text-neutral-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  {finding.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
