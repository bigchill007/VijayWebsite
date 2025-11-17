import { motion } from 'motion/react';
import { useState } from 'react';

interface RoleCircle {
  id: string;
  name: string;
  cx: number;
  cy: number;
  r: number;
  fill: 'white' | 'grey' | 'teal';
}

interface OverlapSkill {
  label: string;
  x: number;
  y: number;
  width: number;
  fill: 'teal' | 'grey' | 'black';
}

interface CoreValue {
  label: string;
  x: number;
  y: number;
}

// Six role circles in Venn arrangement
const roleCircles: RoleCircle[] = [
  { id: 'social', name: 'SOCIAL IMPACT DESIGNER', cx: 350, cy: 200, r: 120, fill: 'white' },
  { id: 'architect', name: 'ARCHITECT', cx: 550, cy: 200, r: 120, fill: 'grey' },
  { id: 'researcher', name: 'DESIGN RESEARCHER', cx: 650, cy: 350, r: 120, fill: 'teal' },
  { id: 'ux', name: 'USER EXPERIENCE DESIGNER', cx: 550, cy: 500, r: 120, fill: 'white' },
  { id: 'instructional', name: 'INSTRUCTIONAL DESIGNER', cx: 350, cy: 500, r: 120, fill: 'grey' },
  { id: 'educator', name: 'EDUCATOR', cx: 250, cy: 350, r: 120, fill: 'teal' },
];

// Overlap skills positioned at intersections - single line text
const overlapSkills: OverlapSkill[] = [
  { label: 'PRODUCTS, EXPERIENCES', x: 600, y: 270, width: 220, fill: 'teal' },
  { label: 'DATA-DRIVEN APPROACHES', x: 450, y: 165, width: 240, fill: 'black' },
  { label: 'VALUE-BASED DESIGN', x: 300, y: 270, width: 210, fill: 'grey' },
  { label: 'INSTRUCTIONAL INNOVATION', x: 300, y: 430, width: 240, fill: 'teal' },
  { label: 'SYSTEMS, TECHNOLOGIES', x: 450, y: 535, width: 220, fill: 'black' },
  { label: 'HUMAN-CENTERED DESIGN', x: 600, y: 430, width: 230, fill: 'grey' },
];

// Four corner value blocks
const coreValues: CoreValue[] = [
  { label: 'EMPATHY', x: 80, y: 80 },
  { label: 'CREATIVITY', x: 760, y: 80 },
  { label: 'IMPACT', x: 80, y: 580 },
  { label: 'COLLABORATION', x: 760, y: 580 },
];

export function BrutalistVennSection() {
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getFillColor = (fill: 'white' | 'grey' | 'teal', isHovered: boolean) => {
    if (isHovered) {
      if (fill === 'teal') return 'rgba(110, 146, 173, 0.6)';
      if (fill === 'grey') return 'rgba(212, 212, 216, 0.6)';
      return 'rgba(250, 250, 250, 0.6)';
    }
    if (fill === 'teal') return 'rgba(94, 129, 157, 0.5)';
    if (fill === 'grey') return 'rgba(229, 229, 229, 0.5)';
    return 'rgba(255, 255, 255, 0.5)';
  };

  const getSkillFillColor = (fill: 'teal' | 'grey' | 'black', isHovered: boolean) => {
    if (isHovered) {
      if (fill === 'black') return '#262626';
      if (fill === 'grey') return '#a1a1aa';
      return '#6e92ad';
    }
    if (fill === 'black') return '#000000';
    if (fill === 'grey') return '#737373';
    return '#5E819D';
  };

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden border-t-4 border-b-4 border-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block border-4 border-black bg-black p-8 mb-6">
            <h2 className="text-white text-6xl tracking-tight" style={{ fontFamily: 'monospace', fontWeight: 900 }}>
              MULTIDISCIPLINARY STRENGTH
            </h2>
          </div>
          <div className="h-1 w-64 bg-black mx-auto mb-8" />
          <p className="text-black max-w-3xl mx-auto" style={{ fontWeight: 700, letterSpacing: '0.05em', fontSize: '16px' }}>
            A VENN DIAGRAM OF INTERCONNECTED ROLES AND TRANSFERABLE SKILLS
          </p>
        </motion.div>

        {/* Venn Diagram Container */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '900/700' }}>
          <svg
            viewBox="0 0 900 700"
            className="w-full h-auto"
          >
            {/* CORE VALUE BLOCKS - Four corners */}
            <g className="core-values">
              {coreValues.map((value, index) => (
                <motion.g
                  key={value.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {/* Outer square block */}
                  <rect
                    x={value.x}
                    y={value.y}
                    width="120"
                    height="80"
                    fill="#5E819D"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  {/* Inner border */}
                  <rect
                    x={value.x + 8}
                    y={value.y + 8}
                    width="104"
                    height="64"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  {/* Value text */}
                  <text
                    x={value.x + 60}
                    y={value.y + 48}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    style={{
                      fontSize: '14px',
                      fontWeight: 900,
                      letterSpacing: '0.1em',
                      fontFamily: 'monospace',
                    }}
                  >
                    {value.label}
                  </text>
                </motion.g>
              ))}
            </g>

            {/* ACCENT LINES - Blue cutting lines for drama */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <line x1="0" y1="350" x2="200" y2="350" stroke="#5E819D" strokeWidth="2" />
              <line x1="700" y1="350" x2="900" y2="350" stroke="#5E819D" strokeWidth="2" />
              <line x1="450" y1="0" x2="450" y2="100" stroke="#000" strokeWidth="2" />
              <line x1="450" y1="600" x2="450" y2="700" stroke="#000" strokeWidth="2" />
            </motion.g>

            {/* ROLE CIRCLES - Perfect geometric circles */}
            <g className="role-circles">
              {roleCircles.map((circle, index) => (
                <motion.g
                  key={circle.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.5, ease: 'backOut' }}
                >
                  {/* Main circle */}
                  <motion.circle
                    cx={circle.cx}
                    cy={circle.cy}
                    r={circle.r}
                    fill={getFillColor(circle.fill, hoveredCircle === circle.id)}
                    stroke="#000"
                    strokeWidth={hoveredCircle === circle.id ? 3 : 2}
                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={() => setHoveredCircle(circle.id)}
                    onMouseLeave={() => setHoveredCircle(null)}
                  />

                  {/* Circle label - single line, centered */}
                  <text
                    x={circle.cx}
                    y={circle.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#000"
                    style={{
                      fontSize: hoveredCircle === circle.id ? '13px' : '12px',
                      fontWeight: 900,
                      pointerEvents: 'none',
                      letterSpacing: '0.05em',
                      fontFamily: 'monospace',
                      transition: 'font-size 0.2s',
                    }}
                  >
                    {circle.name}
                  </text>
                </motion.g>
              ))}
            </g>

            {/* CENTRAL CIRCLE - "DESIGN (ME)" */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.6, ease: 'backOut' }}
            >
              {/* Outer circle - thick black outline */}
              <circle
                cx="450"
                cy="350"
                r="90"
                fill="rgba(255, 255, 255, 0.7)"
                stroke="#000"
                strokeWidth="3"
              />
              {/* Inner blue accent circle */}
              <circle
                cx="450"
                cy="350"
                r="75"
                fill="none"
                stroke="#5E819D"
                strokeWidth="3"
              />
              {/* Innermost detail circle */}
              <circle
                cx="450"
                cy="350"
                r="60"
                fill="none"
                stroke="#000"
                strokeWidth="1"
                opacity="0.2"
              />

              {/* Central text */}
              <text
                x="450"
                y="345"
                textAnchor="middle"
                fill="#000"
                style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  fontFamily: 'monospace',
                }}
              >
                DESIGN
              </text>
              <text
                x="450"
                y="365"
                textAnchor="middle"
                fill="#5E819D"
                style={{
                  fontSize: '20px',
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                  fontFamily: 'monospace',
                }}
              >
                (ME)
              </text>
            </motion.g>

            {/* OVERLAP SKILLS - Framed rectangles/pills */}
            <g className="overlap-skills">
              {overlapSkills.map((skill, index) => {
                const isHovered = hoveredSkill === skill.label;
                const height = 32;
                
                return (
                  <motion.g
                    key={skill.label}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 + index * 0.08, duration: 0.4 }}
                  >
                    {/* Shadow rectangle */}
                    <rect
                      x={skill.x - skill.width / 2 + 3}
                      y={skill.y - height / 2 + 3}
                      width={skill.width}
                      height={height}
                      fill="#000"
                      opacity="0.15"
                    />
                    
                    {/* Main rectangle */}
                    <motion.rect
                      x={skill.x - skill.width / 2}
                      y={skill.y - height / 2}
                      width={skill.width}
                      height={height}
                      fill={getSkillFillColor(skill.fill, isHovered)}
                      stroke="#000"
                      strokeWidth="2"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredSkill(skill.label)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Skill text - single line, bold */}
                    <text
                      x={skill.x}
                      y={skill.y + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#fff"
                      style={{
                        fontSize: '11px',
                        fontWeight: 900,
                        pointerEvents: 'none',
                        letterSpacing: '0.08em',
                        fontFamily: 'monospace',
                      }}
                    >
                      {skill.label}
                    </text>
                  </motion.g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Bottom instruction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-3 border-black bg-white p-6" style={{ borderWidth: '3px' }}>
            <p className="text-black text-sm" style={{ fontWeight: 900, letterSpacing: '0.15em', fontFamily: 'monospace' }}>
              HOVER TO EXPLORE ROLES & TRANSFERABLE SKILLS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
