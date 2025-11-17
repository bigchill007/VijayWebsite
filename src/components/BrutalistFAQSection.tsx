import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkAction?: () => void;
}

interface BrutalistFAQSectionProps {
  onNavigate: (page: string) => void;
}

export function BrutalistFAQSection({ onNavigate }: BrutalistFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "IN AN ERA OF AI, WHY SHOULD PPL HIRE YOU?",
      answer: "Even in projects packed with AI - like the NASA Space Apps Challenge - it was my approach to user insight and value-driven design that shaped our outcomes. I leveraged AI as a tool, but still asked better questions, spotted gaps, and connected user journeys no dataset could predict.",
      linkText: "Read more → NASA Space Apps Case Study",
      linkAction: () => onNavigate('nasa-space-apps'),
    },
    {
      question: "WHAT ARE YOUR TOP SKILLS?",
      answer: "Evidence-Based Analysis, Integrated System Design, Accessibility-Focused Planning, and Stakeholder Collaboration. My real strength is making complex design choices tangible for everyone.",
      linkText: "Read more → Skills & Process",
      linkAction: () => {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      },
    },
    {
      question: "WHY DID YOU MOVE FROM ARCHITECTURE TO SERVICE/UX DESIGN?",
      answer: "As spaces shape experience, I wanted to shape all experiences. I saw unmet needs in digital, community, and service systems - and went where users actually lived.",
      linkText: "Read more → About Me",
      linkAction: () => {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      },
    },
    {
      question: "WHY DO YOU VALUE DESIGN RESEARCH SO MUCH?",
      answer: "Research lets me learn from people - their needs, dreams, and struggles - so every solution starts real, not theoretical.",
      linkText: "Read more → Research Projects",
      linkAction: () => {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      },
    },
    {
      question: "WHAT IS YOUR MULTIDISCIPLINARY STRENGTH?",
      answer: "Combining architecture, research, UX, instruction, and social impact - I build bridges where fields meet.",
      linkText: "Read more → Portfolio Overview",
      linkAction: () => {
        onNavigate('home');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
      },
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-neutral-100 relative overflow-hidden border-t-8 border-b-8 border-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header - Brutalist */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-l-8 border-black pl-8 bg-white"
        >
          <h2 className="text-black py-6 text-6xl">
            FAQ
          </h2>
          <div className="h-1 w-32 bg-black mb-6" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white border-4 border-black p-6 text-left hover:bg-neutral-50 transition-colors group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-black text-sm md:text-base" style={{ fontWeight: 900, letterSpacing: '0.02em' }}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-black" strokeWidth={3} />
                  </motion.div>
                </div>
              </button>

              {/* Answer Panel */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white border-4 border-t-0 border-black p-6 md:p-8">
                      <p className="text-neutral-700 mb-6" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                        {item.answer}
                      </p>
                      
                      {item.linkText && item.linkAction && (
                        <motion.button
                          onClick={item.linkAction}
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 bg-[#5E819D] text-white px-6 py-3 border-4 border-black hover:bg-black transition-colors"
                        >
                          <span style={{ fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                            {item.linkText}
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                          </svg>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-2 bg-black mt-12 origin-left"
        />
      </div>
    </section>
  );
}
