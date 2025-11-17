import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, Users, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';

interface CaseStudyTransitProps {
  onBack: () => void;
}

export function CaseStudyTransit({ onBack }: CaseStudyTransitProps) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 opacity-40" />
        
        {/* Map-like grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${i * 10}%`}
              x2="100%"
              y2={`${i * 10}%`}
              stroke="#0ea5e9"
              strokeWidth="1"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${i * 10}%`}
              y1="0"
              x2={`${i * 10}%`}
              y2="100%"
              stroke="#0ea5e9"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100/50 rounded-full mb-6">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-blue-700" style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                User Research · Accessibility · Transit
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
            Inclusive Transit User Research
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
            Cincinnati Metro Study
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
            Universal design surveying for cognitive & physical access, creating inclusive 
            public transit experiences for all Cincinnati residents.
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
              src="https://images.unsplash.com/photo-1756723701257-46513cd36fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmFuc3BvcnRhdGlvbiUyMHVyYmFufGVufDF8fHx8MTc2MTgyMzY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cincinnati Metro Bus System"
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
                This comprehensive user research study examines accessibility barriers in Cincinnati's 
                public transit system. Through ethnographic research, journey mapping, and inclusive 
                design methods, we identified critical touchpoints for cognitive and physical accessibility.
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
                Lead UX Researcher
              </p>
              <div className="space-y-2">
                {['Field research & ethnography', 'Journey mapping', 'Accessibility audits', 'Stakeholder interviews'].map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-neutral-600" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
                      {role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: '48 Riders', color: '#0ea5e9' },
              { icon: MapPin, label: '12 Routes', color: '#06b6d4' },
              { icon: CheckCircle2, label: '150+ Findings', color: '#10b981' },
              { icon: TrendingUp, label: '3 Months', color: '#8b5cf6' },
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

      {/* Research Images */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12 text-center"
          >
            Research in Action
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'https://images.unsplash.com/photo-1553202023-3cd0b3c4bdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2l0JTIwbWFwJTIwbWV0cm98ZW58MXx8fHwxNzYxODIzNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1756723701257-46513cd36fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmFuc3BvcnRhdGlvbiUyMHVyYmFufGVufDF8fHx8MTc2MTgyMzY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
                  alt={`Research ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12"
          >
            Critical Insights
          </motion.h3>

          <div className="space-y-6">
            {[
              {
                title: 'Wayfinding Requires Multi-Modal Signage',
                description: 'Visual, tactile, and audio cues are essential for inclusive navigation. Single-mode signage creates barriers for riders with diverse abilities.',
              },
              {
                title: 'Cognitive Load at Transfer Points',
                description: 'Complex transfer stations with multiple routes create overwhelming decision points. Simplified visual hierarchies reduce anxiety.',
              },
              {
                title: 'Real-Time Information Accessibility',
                description: 'Digital displays and announcements must be synchronized and accessible. Riders with hearing or vision impairments often miss critical updates.',
              },
            ].map((finding, i) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border-l-4 border-blue-400"
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
