"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

const PIVOT_X = 400;
const PIVOT_Y = 200;
const ARM = 230;
const DEG = Math.PI / 180;

type Props = {
  /** Beam angle in degrees. Positive tips the right pan down. */
  angle: MotionValue<number>;
  /** Hero scroll progress, 0..1. Drives the bid coins dropping in. */
  progress: MotionValue<number>;
};

/**
 * Scales of justice drawn in SVG. The pans hang straight down while the beam
 * tilts, so their offsets are derived from the beam angle.
 */
export function Scales({ angle, progress }: Props) {
  const leftX = useTransform(angle, (a) => ARM * (1 - Math.cos(a * DEG)));
  const leftY = useTransform(angle, (a) => -ARM * Math.sin(a * DEG));
  const rightX = useTransform(angle, (a) => -ARM * (1 - Math.cos(a * DEG)));
  const rightY = useTransform(angle, (a) => ARM * Math.sin(a * DEG));
  const balance = useTransform(progress, [0.62, 0.74, 0.9], [0, 1, 0.6]);

  return (
    <svg viewBox="0 0 800 760" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7ecc9" />
          <stop offset="0.35" stopColor="#e3c877" />
          <stop offset="0.7" stopColor="#b08a2e" />
          <stop offset="1" stopColor="#e3c877" />
        </linearGradient>
        <linearGradient id="metal-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1e3b8" />
          <stop offset="0.5" stopColor="#c9a24a" />
          <stop offset="1" stopColor="#8e6f26" />
        </linearGradient>
        <radialGradient id="bowl" cx="0.5" cy="0" r="1">
          <stop offset="0" stopColor="#f1e3b8" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#b08a2e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#4d3c14" />
        </radialGradient>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e3c877" stopOpacity="0.55" />
          <stop offset="1" stopColor="#e3c877" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo that flares when the scales come to balance */}
      <motion.circle cx={PIVOT_X} cy={PIVOT_Y + 40} r="300" fill="url(#halo)" style={{ opacity: balance }} />

      {/* Pillar */}
      <g>
        <motion.rect
          x="393"
          y="200"
          width="14"
          height="440"
          rx="7"
          fill="url(#metal-v)"
          style={{ originY: 1 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          d="M300 690 Q400 650 500 690 Z M330 662 L470 662 L490 690 L310 690 Z"
          fill="url(#metal)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <rect x="280" y="688" width="240" height="14" rx="7" fill="url(#metal)" />
        <rect x="386" y="610" width="28" height="56" rx="6" fill="url(#metal-v)" />
        {/* Finial */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 160, damping: 12 }}
          style={{ originX: "400px", originY: "160px" }}
        >
          <path d="M400 128 L414 158 L400 172 L386 158 Z" fill="url(#metal)" />
          <circle cx="400" cy="200" r="16" fill="url(#metal)" />
          <circle cx="400" cy="200" r="6" fill="#0a1a3f" opacity="0.5" />
        </motion.g>
      </g>

      {/* Beam, symmetric around the pivot so it rotates about it */}
      <motion.g
        style={{ rotate: angle, transformBox: "view-box", transformOrigin: `${PIVOT_X}px ${PIVOT_Y}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <path
          d={`M${PIVOT_X - ARM} 200 Q400 176 ${PIVOT_X + ARM} 200 Q400 188 ${PIVOT_X - ARM} 200 Z`}
          fill="url(#metal)"
        />
        <rect x={PIVOT_X - ARM} y="196" width={ARM * 2} height="8" rx="4" fill="url(#metal)" />
        <circle cx={PIVOT_X - ARM} cy="200" r="10" fill="url(#metal)" />
        <circle cx={PIVOT_X + ARM} cy="200" r="10" fill="url(#metal)" />
        <circle cx={PIVOT_X - 120} cy="200" r="4" fill="#f1e3b8" />
        <circle cx={PIVOT_X + 120} cy="200" r="4" fill="#f1e3b8" />
      </motion.g>

      {/* Left pan: the client's case file */}
      <g transform={`translate(${PIVOT_X - ARM} ${PIVOT_Y})`}>
        <motion.g style={{ x: leftX, y: leftY }}>
          <Pan label="Law" />
          <motion.g
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <g transform="translate(-34 92) rotate(-6)">
              <rect width="68" height="84" rx="6" fill="#f3efe3" />
              <path d="M48 0 L68 20 L48 20 Z" fill="#d9d2c3" />
              <rect x="10" y="16" width="30" height="5" rx="2.5" fill="#10255a" />
              <rect x="10" y="30" width="48" height="3.5" rx="1.75" fill="#9a9aa6" />
              <rect x="10" y="40" width="44" height="3.5" rx="1.75" fill="#9a9aa6" />
              <rect x="10" y="50" width="48" height="3.5" rx="1.75" fill="#9a9aa6" />
              <rect x="10" y="60" width="30" height="3.5" rx="1.75" fill="#9a9aa6" />
              <circle cx="52" cy="70" r="9" fill="#b08a2e" />
              <circle cx="52" cy="70" r="5" fill="none" stroke="#f1e3b8" strokeWidth="1.5" />
            </g>
          </motion.g>
        </motion.g>
      </g>

      {/* Right pan: attorneys' bids drop in as coins */}
      <g transform={`translate(${PIVOT_X + ARM} ${PIVOT_Y})`}>
        <motion.g style={{ x: rightX, y: rightY }}>
          <Pan label="Bid" />
          <Coin progress={progress} start={0.16} x={-46} y={152} />
          <Coin progress={progress} start={0.24} x={46} y={152} />
          <Coin progress={progress} start={0.32} x={0} y={150} />
          <Coin progress={progress} start={0.4} x={-22} y={118} />
          <Coin progress={progress} start={0.46} x={24} y={118} />
        </motion.g>
      </g>
    </svg>
  );
}

function Pan({ label }: { label: string }) {
  return (
    <g>
      <path d="M0 0 L-88 170 M0 0 L88 170" stroke="#e3c877" strokeOpacity="0.85" strokeWidth="2" />
      <path d="M0 0 L0 170" stroke="#e3c877" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="6" fill="url(#metal)" />
      <path d="M-100 170 Q0 250 100 170 Z" fill="url(#bowl)" />
      <ellipse cx="0" cy="170" rx="100" ry="9" fill="url(#metal)" />
      <ellipse cx="0" cy="170" rx="92" ry="5" fill="#2a1e0a" opacity="0.55" />
      <text
        y="204"
        textAnchor="middle"
        fontSize="24"
        fontWeight="600"
        fill="#0a1a3f"
        fillOpacity="0.85"
        style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
      >
        {label}
      </text>
    </g>
  );
}

function Coin({ progress, start, x, y }: { progress: MotionValue<number>; start: number; x: number; y: number }) {
  const cy = useTransform(progress, [start, start + 0.07], [y - 340, y], { clamp: true });
  const opacity = useTransform(progress, [start - 0.01, start + 0.02], [0, 1]);
  const spin = useTransform(progress, [start, start + 0.07], [1, 0.25]);
  const scaleX = useTransform(spin, (s) => Math.max(0.35, Math.abs(Math.cos(s * Math.PI * 3))));
  return (
    <motion.g style={{ x, y: cy, opacity }}>
      <motion.g style={{ scaleX }}>
        <circle r="20" fill="url(#metal)" stroke="#8e6f26" strokeWidth="2" />
        <circle r="14" fill="none" stroke="#f7ecc9" strokeOpacity="0.7" strokeWidth="1.5" />
        <text
          y="6"
          textAnchor="middle"
          fontSize="17"
          fontWeight="700"
          fill="#5a3f12"
          fontFamily="ui-sans-serif, system-ui"
        >
          $
        </text>
      </motion.g>
    </motion.g>
  );
}
