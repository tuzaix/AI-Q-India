'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';

interface RadarChartProps {
  scores: {
    label: string;
    value: number; // 0 to 100
  }[];
}

export default function RadarChart({ scores }: RadarChartProps) {
  const gradientId = useId();
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  const totalScores = scores?.length || 5;
  const angleStep = (Math.PI * 2) / totalScores;

  const getCoordinates = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  if (!scores || scores.length === 0) return null;

  const points = scores.map((s, i) => {
    const coords = getCoordinates(i, s.value);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Hexagons */}
        {[20, 40, 60, 80, 100].map((level) => {
          const hexPoints = scores.map((_, i) => {
            const coords = getCoordinates(i, level);
            return `${coords.x},${coords.y}`;
          }).join(' ');
          return (
            <polygon
              key={level}
              points={hexPoints}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {scores.map((_, i) => {
          const coords = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={coords.x}
              y2={coords.y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          points={points}
          fill={`url(#${gradientId})`}
          stroke="#4f46e5"
          strokeWidth="2"
          style={{ transformOrigin: 'center' }}
        />

        {/* Labels */}
        {scores.map((s, i) => {
          const coords = getCoordinates(i, 115);
          return (
            <text
              key={i}
              x={coords.x}
              y={coords.y}
              fill="rgba(255, 255, 255, 0.6)"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {s.label}
            </text>
          );
        })}

        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
