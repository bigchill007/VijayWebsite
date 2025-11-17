import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, BookOpen, Users, Lightbulb, BarChart3 } from 'lucide-react';

interface CaseStudyToolkitProps {
  onBack: () => void;
}

export function CaseStudyToolkit({ onBack }: CaseStudyToolkitProps) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-40" />
        
        {/* Connected dots pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <circle
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="3"
                fill="#10b981"
              />
              {i < 15 && (
                <line
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="#10b981"
                  strokeWidth="1"
                />
              )}
            </g>
          ))}
        </svg>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-100/50 rounded-full mb-6">
              <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-emerald-700" style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                Education · Inclusion · Research Tools
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
            Inclusive Toolkit
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
            BhumiI NcLüDe Toolkit Project
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
            Building scalable research tools for K-12 neurodiverse classrooms, transforming 
            data into actionable design insights for inclusive education.
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
              src="https://images.unsplash.com/photo-1619970984080-2666543ed883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjBlZHVjYXRpb24lMjB0b29sa2l0fGVufDF8fHx8MTc2MTgyMzY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Inclusive Education Toolkit"
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
                The BhumiI NcLüDe Toolkit is a comprehensive research framework designed to help 
                educators understand and support neurodiverse students in K-12 classrooms. Through 
                participatory design methods and data visualization, we created scalable tools that 
                bridge research and practice.
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
                UX Designer & Research Lead
              </p>
              <div className="space-y-2">
                {['Toolkit design & development', 'Participatory workshops', 'Data visualization', 'Educator training'].map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
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
              { icon: BookOpen, label: '15 Schools', color: '#10b981' },
              { icon: Users, label: '200+ Students', color: '#06b6d4' },
              { icon: Lightbulb, label: '8 Tools', color: '#f59e0b' },
              { icon: BarChart3, label: '6 Months', color: '#8b5cf6' },
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

      {/* Toolkit Components */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12 text-center"
          >
            Toolkit in Practice
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'https://images.unsplash.com/photo-1758270704113-9fb2ac81788f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjE3NDU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1619970984080-2666543ed883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjBlZHVjYXRpb24lMjB0b29sa2l0fGVufDF8fHx8MTc2MTgyMzY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
                  alt={`Toolkit ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-800 mb-12"
          >
            Impact & Outcomes
          </motion.h3>

          <div className="space-y-6">
            {[
              {
                title: 'Scalable Research Framework',
                description: 'Created replicable tools that educators can adapt for their unique classroom contexts without requiring specialized research training.',
              },
              {
                title: 'Student-Centered Personas',
                description: 'Developed diverse student personas based on real classroom observations, helping educators understand neurodiverse learning needs.',
              },
              {
                title: 'Data-to-Design Pipeline',
                description: 'Built visualization tools that transform classroom observations into actionable design recommendations for inclusive learning environments.',
              },
            ].map((outcome, i) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border-l-4 border-emerald-400"
              >
                <h4 className="text-neutral-800 mb-3" style={{ fontWeight: 500 }}>
                  {outcome.title}
                </h4>
                <p className="text-neutral-600" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  {outcome.description}
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
