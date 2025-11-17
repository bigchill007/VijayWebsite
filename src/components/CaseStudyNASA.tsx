import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, Rocket, Brain, Layers, Globe } from 'lucide-react';

interface CaseStudyNASAProps {
  onBack: () => void;
}

export function CaseStudyNASA({ onBack }: CaseStudyNASAProps) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 opacity-40" />
        
        {/* Star field pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 2 + 1}
              fill="#4f46e5"
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-100/50 rounded-full mb-6">
              <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-indigo-700" style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                NASA Space Apps Challenge · UX/UI Design · AI/ML Visualization
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-neutral-900 mb-6"
            style={{ fontSize: '3.5rem', lineHeight: '1.1' }}
          >
            Exoplanet AI/ML Interface Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 mb-8 max-w-2xl"
            style={{ fontSize: '1.25rem', lineHeight: '1.7' }}
          >
            Creating an intuitive user experience for NASA's exoplanet discovery AI model, making complex astronomical data accessible to researchers and enthusiasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <div>
              <p className="text-neutral-500 text-sm mb-1">Timeline</p>
              <p className="text-neutral-900" style={{ fontWeight: 500 }}>48 Hours (Hackathon)</p>
            </div>
            <div>
              <p className="text-neutral-500 text-sm mb-1">Role</p>
              <p className="text-neutral-900" style={{ fontWeight: 500 }}>UX/UI Designer</p>
            </div>
            <div>
              <p className="text-neutral-500 text-sm mb-1">Team</p>
              <p className="text-neutral-900" style={{ fontWeight: 500 }}>4 Members</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-black">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760809847382-84a86f4aad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNhJTIwc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzM0MzExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="NASA Space Apps Challenge Project"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-neutral-900 mb-6" style={{ fontSize: '2.5rem' }}>
              Project Overview
            </h2>
            <div className="h-1 w-24 bg-indigo-600 mb-8" />
            
            <p className="text-neutral-700 mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              This project was developed during the NASA Space Apps Challenge, a global hackathon focused on solving real-world problems using NASA's open data. Our team designed an interface for an AI/ML model that analyzes exoplanet data and helps researchers identify potentially habitable worlds.
            </p>
            
            <p className="text-neutral-700 mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The challenge was to make complex astronomical data and machine learning predictions accessible and actionable for both professional astronomers and citizen scientists.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-neutral-900 mb-3 text-xl">AI Model Visualization</h3>
              <p className="text-neutral-600">
                Interactive visualizations showing AI predictions, confidence scores, and key parameters for exoplanet detection and habitability analysis.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-neutral-900 mb-3 text-xl">Data Exploration</h3>
              <p className="text-neutral-600">
                Multi-layered interface allowing users to explore NASA's exoplanet datasets with filters, comparisons, and detailed attribute breakdowns.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-neutral-900 mb-3 text-xl">Interactive 3D Views</h3>
              <p className="text-neutral-600">
                3D visualization of star systems and planetary orbits with real-time data integration from NASA's archives.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-neutral-900 mb-3 text-xl">Discovery Dashboard</h3>
              <p className="text-neutral-600">
                Real-time dashboard showing new discoveries, trending exoplanets, and community-contributed observations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Notice */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-yellow-50 border-4 border-yellow-400 p-8 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚧</div>
              <div>
                <h3 className="text-neutral-900 mb-2 text-xl">Case Study In Progress</h3>
                <p className="text-neutral-700">
                  This case study is currently being developed. Check back soon for detailed insights into the design process, user research findings, prototypes, and final outcomes of this NASA Space Apps Challenge project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
