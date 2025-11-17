import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  number: string;
}

const projects: Project[] = [
  {
    id: 'nasa-space-apps',
    title: 'NASA SPACE APPS',
    subtitle: 'EXOPLANET AI/ML INTERFACE',
    description: 'DESIGNING UX/UI FOR EXOPLANET DISCOVERY AI MODEL VISUALIZATION.',
    image: 'https://images.unsplash.com/photo-1723067553070-e51e0a7fb469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG9wbGFuZXQlMjBzcGFjZSUyMGFzdHJvbm9teXxlbnwxfHx8fDE3NjMzNDI4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    number: '01',
  },
  {
    id: 'cultural-probe',
    title: 'CULTURAL PROBE',
    subtitle: 'DESIGNING INTERACTIVE WELLNESS SPACES',
    description: 'RESEARCHING COMMUNITY, MINDFULNESS, AND SOMAESTHETIC EXPERIENCES.',
    image: 'https://images.unsplash.com/photo-1634746306952-ced0059a090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjE4MjM2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 L18 9 L15 12 L21 18 L18 21 L12 15 L9 18 L3 12 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    number: '02',
  },
  {
    id: 'transit',
    title: 'INCLUSIVE TRANSIT',
    subtitle: 'CINCINNATI METRO STUDY',
    description: 'UNIVERSAL DESIGN SURVEYING FOR COGNITIVE & PHYSICAL ACCESS.',
    image: 'https://images.unsplash.com/photo-1756723701257-46513cd36fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmFuc3BvcnRhdGlvbiUyMHVyYmFufGVufDF8fHx8MTc2MTgyMzY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L12 12 M12 12 L19 12 M12 12 L5 12 M12 12 L12 22 M7 7 L17 7 M7 17 L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    number: '03',
  },
  {
    id: 'toolkit',
    title: 'INCLUSIVE TOOLKIT',
    subtitle: 'BHUMI INCLUDE TOOLKIT',
    description: 'BUILDING SCALABLE RESEARCH TOOLS FOR K-12 NEURODIVERSE CLASSROOMS.',
    image: 'https://images.unsplash.com/photo-1619970984080-2666543ed883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjBlZHVjYXRpb24lMjB0b29sa2l0fGVufDF8fHx8MTc2MTgyMzY3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M3 8 L21 8 M8 4 L8 20 M12 12 L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="15" r="1.5" fill="currentColor"/>
      </svg>
    ),
    number: '04',
  },
];

interface FeaturedProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function FeaturedProjects({ onProjectClick }: FeaturedProjectsProps) {
  return (
    <section id="work" className="py-20 px-6 bg-white relative overflow-hidden border-t-8 border-b-8 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - Brutalist */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-l-8 border-black pl-8"
        >
          <h2 className="text-black mb-4 text-6xl">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-32 bg-black" />
        </motion.div>

        {/* Projects Grid - Brutalist Layout */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer"
            >
              <div className={`grid md:grid-cols-2 gap-0 border-4 border-black bg-white ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image Container */}
                <div className={`relative overflow-hidden aspect-video bg-neutral-100 border-r-4 md:border-r-0 ${index % 2 === 1 ? 'md:col-start-2 md:border-l-4' : 'md:border-r-4'} border-black`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Project Number Overlay */}
                  <div className="absolute top-0 left-0 bg-black text-white px-5 py-3 border-b-4 border-r-4 border-white">
                    <span className="text-3xl" style={{ fontWeight: 900, fontFamily: 'monospace' }}>
                      {project.number}
                    </span>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-0 right-0 bg-white text-black p-3 border-t-4 border-l-4 border-black">
                    {project.icon}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <h3 className="text-black mb-2 text-2xl">
                      {project.title}
                    </h3>
                    
                    <div className="h-0.5 w-12 bg-black mb-3" />
                    
                    <p className="text-black mb-3 text-sm">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-neutral-600 mb-5 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Brutalist Button */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-5 py-2.5 hover:bg-white hover:text-black transition-colors"
                    >
                      <span style={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                        VIEW PROJECT
                      </span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
