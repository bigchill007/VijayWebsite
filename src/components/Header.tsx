import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black"
    >
      <nav className="container mx-auto px-8 py-4">
        <ul className="flex items-center gap-0 justify-end">
          <li>
            <a
              href="#home"
              className="px-6 py-3 border-r-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
              style={{ 
                fontWeight: 900,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontFamily: 'monospace',
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-6 py-3 border-r-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
              style={{ 
                fontWeight: 900,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontFamily: 'monospace',
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="px-6 py-3 bg-white hover:bg-black hover:text-white transition-colors"
              style={{ 
                fontWeight: 900,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontFamily: 'monospace',
              }}
            >
              WORK
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
