import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-black text-white border-t-8 border-white overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Social Icons - Brutalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Mail, href: 'mailto:vijay@example.com', label: 'EMAIL' },
              { icon: Github, href: 'https://github.com', label: 'GITHUB' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LINKEDIN' },
              { icon: Twitter, href: 'https://twitter.com', label: 'TWITTER' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'EMAIL' ? '_blank' : undefined}
                rel={social.label !== 'EMAIL' ? 'noopener noreferrer' : undefined}
                className="w-16 h-16 border-4 border-white bg-black hover:bg-white hover:text-black transition-colors flex items-center justify-center group"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <social.icon className="w-7 h-7" strokeWidth={3} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-white mx-auto"
          />

          {/* Copyright - Brutalist */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-6 border-t-4 border-white"
          >
            <p className="text-white" style={{ 
              fontWeight: 900, 
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              fontFamily: 'monospace',
            }}>
              © 2025 VIJAY - ALL RIGHTS RESERVED
            </p>
          </motion.div>

          {/* Bottom geometric element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-8 flex justify-center"
          >
            <div className="w-12 h-12 border-4 border-white relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
