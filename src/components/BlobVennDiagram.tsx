import { motion } from 'framer-motion';
import { useState } from 'react';

interface Field {
  id: string;
  name: string;
  color: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

interface SharedSkill {
  label: string;
  x: number;
  y: number;
}

const fields: Field[] = [
  { 
    id: 'design', 
    name: 'DESIGN', 
    color: '#000000',
    cx: 200, 
    cy: 200, 
    rx: 150, 
    ry: 145 
  },
  { 
    id: 'research', 
    name: 'RESEARCH', 
    color: '#262626',
    cx: 380, 
    cy: 200, 
    rx: 150, 
    ry: 145 
  },
  { 
    id: 'urban', 
    name: 'URBAN PLANNING', 
    color: '#404040',
    cx: 230, 
    cy: 340, 
    rx: 135, 
    ry: 130 
  },
  { 
    id: 'sound', 
    name: 'SOUND & AUDIO', 
    color: '#525252',
    cx: 380, 
    cy: 330, 
    rx: 115, 
    ry: 110 
  },
];

const intersectionLabels = [
  { label: 'UX RESEARCH', x: 290, y: 180, fields: ['design', 'research'] },
  { label: 'SPATIAL DESIGN', x: 215, y: 280, fields: ['design', 'urban'] },
  { label: 'SONIC MAPPING', x: 340, y: 290, fields: ['research', 'sound', 'urban'] },
  { label: 'UNIVERSAL ACCESS', x: 290, y: 330, fields: ['urban', 'design'] },
];

const sharedSkills: SharedSkill[] = [
  { label: 'EMPATHY', x: 40, y: 120 },
  { label: 'SYSTEMS THINKING', x: 520, y: 100 },
  { label: 'DATA ANALYSIS', x: 560, y: 260 },
  { label: 'COMMUNITY', x: 480, y: 420 },
  { label: 'PROTOTYPING', x: 180, y: 460 },
  { label: 'STORYTELLING', x: 30, y: 300 },
  { label: 'INCLUSIVE', x: 90, y: 50 },
  { label: 'HUMAN-CENTERED', x: 450, y: 50 },
];

export function BlobVennDiagram() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto relative py-12">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-auto"
      >
        {/* Main circles with hard edges */}
        {fields.map((field, index) => (
          <g key={field.id}>
            {/* Main circle */}
            <motion.ellipse
              cx={field.cx}
              cy={field.cy}
              rx={field.rx}
              ry={field.ry}
              fill="none"
              stroke={field.color}
              strokeWidth={hoveredField === field.id ? 6 : 4}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              style={{
                transformOrigin: `${field.cx}px ${field.cy}px`,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredField(field.id)}
              onMouseLeave={() => setHoveredField(null)}
            />

            {/* Static inner circle */}
            <motion.ellipse
              cx={field.cx}
              cy={field.cy}
              rx={field.rx * 0.7}
              ry={field.ry * 0.7}
              fill="none"
              stroke={field.color}
              strokeWidth="2"
              strokeOpacity={hoveredField === field.id ? 1 : 0.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: hoveredField === field.id ? 1 : 0.5 }}
              transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.3,
              }}
              style={{ transformOrigin: `${field.cx}px ${field.cy}px` }}
            />

            {/* Cross marks in center */}
            <g opacity={hoveredField === null || hoveredField === field.id ? 1 : 0.3}>
              <line
                x1={field.cx - 10}
                y1={field.cy}
                x2={field.cx + 10}
                y2={field.cy}
                stroke={field.color}
                strokeWidth="2"
              />
              <line
                x1={field.cx}
                y1={field.cy - 10}
                x2={field.cx}
                y2={field.cy + 10}
                stroke={field.color}
                strokeWidth="2"
              />
            </g>

            {/* Field label */}
            <motion.text
              x={field.cx}
              y={field.cy + 35}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={field.color}
              style={{
                fontSize: '13px',
                fontWeight: 900,
                pointerEvents: 'none',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredField === null || hoveredField === field.id ? 1 : 0.4 
              }}
              transition={{ duration: 0.2 }}
            >
              {field.name}
            </motion.text>
          </g>
        ))}

        {/* Intersection labels - Brutalist boxes */}
        {intersectionLabels.map((intersection, index) => (
          <motion.g
            key={intersection.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
          >
            {/* Background rectangle for intersection */}
            <motion.rect
              x={intersection.x - 42}
              y={intersection.y - 15}
              width="84"
              height="30"
              fill="white"
              stroke="#000"
              strokeWidth="2"
              whileHover={{ strokeWidth: 4, fill: '#000' }}
              style={{ cursor: 'pointer' }}
            />
            {/* Intersection text */}
            <motion.text
              x={intersection.x}
              y={intersection.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#000"
              whileHover={{ fill: '#fff' }}
              style={{
                fontSize: '9px',
                fontWeight: 900,
                pointerEvents: 'none',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              {intersection.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Shared skills in outer layer - Brutalist tags */}
        {sharedSkills.map((skill, index) => (
          <motion.g
            key={skill.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1 + index * 0.06,
              duration: 0.3,
            }}
          >
            {/* Connecting line to diagram center - straight, not curved */}
            <motion.line
              x1={skill.x}
              y1={skill.y}
              x2={290}
              y2={260}
              stroke="#000"
              strokeWidth="1"
              opacity={hoveredSkill === skill.label ? 0.4 : 0.15}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + index * 0.06, duration: 0.4 }}
            />
            
            {/* Skill box - hard edges */}
            <motion.rect
              x={skill.x - 45}
              y={skill.y - 12}
              width="90"
              height="24"
              fill="white"
              stroke={hoveredSkill === skill.label ? '#000' : '#a3a3a3'}
              strokeWidth={hoveredSkill === skill.label ? 3 : 1.5}
              whileHover={{
                fill: '#000',
                strokeWidth: 3,
              }}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredSkill(skill.label)}
              onMouseLeave={() => setHoveredSkill(null)}
            />

            {/* Skill text */}
            <motion.text
              x={skill.x}
              y={skill.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={hoveredSkill === skill.label ? '#000' : '#525252'}
              whileHover={{ fill: '#fff' }}
              style={{
                fontSize: '8px',
                fontWeight: 900,
                pointerEvents: 'none',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              {skill.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Center square with X */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          <rect
            x="285"
            y="255"
            width="10"
            height="10"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <line x1="287" y1="257" x2="293" y2="263" stroke="#000" strokeWidth="2" />
          <line x1="293" y1="257" x2="287" y2="263" stroke="#000" strokeWidth="2" />
        </motion.g>
      </svg>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.4 }}
        className="mt-8 text-center border-4 border-black p-4 bg-white"
      >
        <p className="text-black text-xs" style={{ fontWeight: 900, letterSpacing: '0.05em', fontFamily: 'monospace' }}>
          HOVER OVER DISCIPLINES TO EXPLORE THE INTERCONNECTED NATURE OF MULTIDISCIPLINARY DESIGN
        </p>
      </motion.div>
    </div>
  );
}
