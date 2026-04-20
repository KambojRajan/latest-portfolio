"use client";

import React from "react";

/* =================================================================
   Reusable SVG line-art illustrations — warm maroon style
   with built-in CSS animations for blinking, floating, steam, etc.
   ================================================================= */

const S = "#3A1C1C";
const W = 2;

/* ----------------------------------------------------------------
   Cloud — with gentle inner shimmer
   ---------------------------------------------------------------- */
export function Cloud({
  className = "",
  size = 120,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 120 54"
      className={className}
      style={style}
      fill="none"
    >
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 42 C10 42, 12 28, 30 28 C30 16, 46 10, 56 18 C62 8, 82 8, 86 20 C96 16, 110 22, 108 36 C110 42, 108 42, 108 42 Z" />
        <line x1="10" y1="42" x2="108" y2="42" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Server Rack — with animated blinking LEDs
   ---------------------------------------------------------------- */
export function ServerRack({ className = "" }: { className?: string }) {
  return (
    <svg width="110" height="180" viewBox="0 0 110 180" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="90" height="155" rx="3" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="16" y={20 + i * 35} width="78" height="28" rx="2" />
            {/* Animated LEDs */}
            <circle cx="26" cy={34 + i * 35} r="3.5" fill="#4CAF50" stroke="none">
              <animate attributeName="opacity" values="1;0.3;1" dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="37" cy={34 + i * 35} r="3.5" fill={i === 3 ? "#E85D75" : "#4CAF50"} stroke="none">
              <animate attributeName="opacity" values="1;0.4;1" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="48" cy={34 + i * 35} r="3.5" fill="#FFB84D" stroke="none">
              <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            {/* Vents */}
            {[60, 66, 72, 78, 84].map((x) => (
              <line key={x} x1={x} y1={26 + i * 35} x2={x} y2={42 + i * 35} strokeWidth="1" opacity="0.35" />
            ))}
          </g>
        ))}
        {/* Feet */}
        <line x1="20" y1="165" x2="20" y2="175" />
        <line x1="90" y1="165" x2="90" y2="175" />
        {/* Cable out the back */}
        <path d="M55 165 C55 172, 60 175, 65 178" strokeWidth="1.5" opacity="0.4" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Monitor — with animated typing cursor and code lines
   ---------------------------------------------------------------- */
export function Monitor({
  className = "",
  label = "",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg width="140" height="130" viewBox="0 0 140 130" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="124" height="82" rx="5" />
        <rect x="14" y="14" width="112" height="70" rx="2" />
        {/* Code lines — staggered with subtle animation */}
        <line x1="22" y1="28" x2="62" y2="28" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="x2" values="22;62;62" dur="1s" fill="freeze" />
        </line>
        <line x1="22" y1="36" x2="85" y2="36" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="44" x2="74" y2="44" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="52" x2="58" y2="52" strokeWidth="1.5" opacity="0.35" />
        <line x1="22" y1="60" x2="70" y2="60" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="68" x2="50" y2="68" strokeWidth="1.5" opacity="0.3" />
        {/* Blinking cursor */}
        <rect x="54" y="66" width="7" height="10" fill={S} stroke="none">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite" />
        </rect>
        {/* Stand */}
        <line x1="70" y1="90" x2="70" y2="106" />
        <path d="M48 106 C48 106, 70 102, 92 106" />
        {/* Power LED */}
        <circle cx="70" cy="94" r="2" fill="#4CAF50" stroke="none">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      {label && (
        <text
          x="70"
          y="123"
          textAnchor="middle"
          fill={S}
          fontFamily="var(--font-jetbrains)"
          fontSize="9"
          letterSpacing="0.12em"
          fontWeight="600"
        >
          {label.toUpperCase()}
        </text>
      )}
    </svg>
  );
}

/* ----------------------------------------------------------------
   Coffee Mug — with animated steam
   ---------------------------------------------------------------- */
export function CoffeeMug({
  className = "",
  size = 70,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size + 10} viewBox="0 0 70 80" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        {/* Steam lines — animated! */}
        <path d="M25 20 C25 14, 29 14, 29 20" opacity="0.4">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-10" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M35 16 C35 8, 39 8, 39 16" opacity="0.3">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-12" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </path>
        <path d="M45 18 C45 12, 49 12, 49 18" opacity="0.3">
          <animate attributeName="opacity" values="0;0.4;0" dur="2.8s" repeatCount="indefinite" begin="1s" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-10" dur="2.8s" repeatCount="indefinite" begin="1s" />
        </path>
        {/* Mug body */}
        <path d="M12 28 L12 60 C12 65, 16 68, 24 68 L44 68 C52 68, 56 65, 56 60 L56 28 Z" />
        {/* Handle */}
        <path d="M56 34 C66 34, 68 42, 68 46 C68 50, 66 56, 56 56" />
        {/* Coffee surface */}
        <path d="M16 36 C24 40, 42 32, 52 36" strokeWidth="1.5" />
        {/* Decorative band */}
        <line x1="12" y1="48" x2="56" y2="48" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Terminal Window — with animated typing
   ---------------------------------------------------------------- */
export function Terminal({ className = "" }: { className?: string }) {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="212" height="152" rx="8" />
        <line x1="4" y1="28" x2="216" y2="28" />
        {/* Traffic lights */}
        <circle cx="20" cy="16" r="5" fill="#E85D75" stroke="none" />
        <circle cx="34" cy="16" r="5" fill="#FFB84D" stroke="none" />
        <circle cx="48" cy="16" r="5" fill="#4CAF50" stroke="none" />
        {/* Title in bar */}
        <text x="110" y="19" textAnchor="middle" fill={S} fontFamily="var(--font-jetbrains)" fontSize="7" opacity="0.4">
          rajan@osfin ~ bash
        </text>
        {/* Terminal text with typing feel */}
        <text x="16" y="48" fill={S} fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          $ init(&quot;Rajan Kamboj&quot;)
        </text>
        <text x="16" y="64" fill="#4CAF50" fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          [OK] Backend engineer loaded
        </text>
        <text x="16" y="80" fill="#4CAF50" fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          [OK] 65,000 ATMs connected
        </text>
        <text x="16" y="96" fill="#4CAF50" fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          [OK] Spring Boot initialized
        </text>
        <text x="16" y="112" fill="#FFB84D" fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          [..] Event-driven system ready
        </text>
        <text x="16" y="128" fill={S} fontFamily="var(--font-jetbrains)" fontSize="9.5" opacity="0.7">
          $ status: <tspan fill="#4CAF50">operational</tspan>
        </text>
        {/* Blinking cursor */}
        <rect x="16" y="136" width="8" height="12" fill={S} stroke="none">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Plant / Fern — with gentle sway
   ---------------------------------------------------------------- */
export function Plant({ className = "" }: { className?: string }) {
  return (
    <svg width="90" height="155" viewBox="0 0 90 155" fill="none" className={`sway ${className}`}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 110 L25 142 C25 148, 65 148, 65 142 L62 110 Z" />
        <line x1="24" y1="110" x2="66" y2="110" />
        {/* Dirt */}
        <path d="M30 110 C35 106, 55 106, 60 110" fill={S} stroke="none" opacity="0.15" />
        <path d="M45 110 L45 65" />
        {/* Leaves */}
        <path d="M45 95 C34 84, 16 86, 12 72" />
        <path d="M14 74 C14 74, 20 82, 12 86" fill={S} stroke="none" opacity="0.75" />
        <path d="M45 82 C56 72, 72 74, 76 62" />
        <path d="M74 64 C74 64, 68 72, 76 76" fill={S} stroke="none" opacity="0.75" />
        <path d="M45 72 C34 60, 18 62, 16 48" />
        <path d="M18 50 C18 50, 24 58, 16 64" fill={S} stroke="none" opacity="0.75" />
        <path d="M45 62 C56 48, 68 44, 74 34" />
        <path d="M72 36 C72 36, 66 44, 74 50" fill={S} stroke="none" opacity="0.75" />
        <path d="M45 55 C40 40, 30 32, 24 26" />
        <path d="M26 28 C26 28, 32 38, 24 42" fill={S} stroke="none" opacity="0.75" />
        {/* Extra top leaf */}
        <path d="M45 65 C48 52, 54 46, 58 38" />
        <path d="M56 40 C56 40, 52 46, 58 50" fill={S} stroke="none" opacity="0.6" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Desk Lamp — with animated light rays
   ---------------------------------------------------------------- */
export function DeskLamp({ className = "" }: { className?: string }) {
  return (
    <svg width="85" height="110" viewBox="0 0 85 110" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="42" cy="100" rx="22" ry="5" />
        <line x1="42" y1="95" x2="42" y2="55" />
        <line x1="42" y1="55" x2="64" y2="22" />
        <path d="M48 20 C48 12, 80 12, 80 20" />
        <line x1="48" y1="20" x2="52" y2="34" />
        <line x1="80" y1="20" x2="76" y2="34" />
        <line x1="52" y1="34" x2="76" y2="34" />
        {/* Animated light rays */}
        <line x1="58" y1="36" x2="54" y2="50" opacity="0.2" strokeWidth="1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="64" y1="36" x2="64" y2="52" opacity="0.2" strokeWidth="1">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </line>
        <line x1="70" y1="36" x2="74" y2="50" opacity="0.2" strokeWidth="1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" begin="1s" />
        </line>
        {/* Light cone (subtle fill) */}
        <path d="M52 34 L44 60 L84 60 L76 34" fill="rgba(255,184,77,0.04)" stroke="none" />
        <circle cx="42" cy="55" r="3" fill={S} />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Keyboard
   ---------------------------------------------------------------- */
export function Keyboard({ className = "" }: { className?: string }) {
  return (
    <svg width="170" height="55" viewBox="0 0 170 55" fill="none" className={className}>
      <g stroke={S} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="162" height="46" rx="5" />
        {[0, 1, 2].map((row) =>
          Array.from({ length: 12 - row }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              x={12 + col * 12.5 + row * 6}
              y={10 + row * 13}
              width="9.5"
              height="9.5"
              rx="1.5"
            />
          ))
        )}
        <rect x="44" y="36" width="55" height="9" rx="2" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Rollerblade — more detailed
   ---------------------------------------------------------------- */
export function Rollerblade({ className = "" }: { className?: string }) {
  return (
    <svg width="130" height="90" viewBox="0 0 130 90" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16 L22 48 L90 48 L100 38 L100 28 L84 16 Z" />
        <path d="M22 16 C32 10, 62 8, 84 16" />
        <line x1="44" y1="16" x2="44" y2="38" strokeWidth="1" opacity="0.3" />
        <rect x="28" y="52" width="68" height="9" rx="2.5" />
        {/* Wheels with spinning animation hint */}
        {[38, 60, 82].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="72" r="9" />
            <circle cx={cx} cy="72" r="4.5" />
            <circle cx={cx} cy="72" r="1.5" fill={S} stroke="none" />
            {/* Spokes */}
            <line x1={cx} y1="63" x2={cx} y2="65" strokeWidth="0.8" opacity="0.3" />
            <line x1={cx} y1="79" x2={cx} y2="81" strokeWidth="0.8" opacity="0.3" />
            <line x1={cx - 9} y1="72" x2={cx - 7} y2="72" strokeWidth="0.8" opacity="0.3" />
            <line x1={cx + 7} y1="72" x2={cx + 9} y2="72" strokeWidth="0.8" opacity="0.3" />
          </g>
        ))}
        <path d="M96 52 L102 52 L102 62 L98 66" />
        <line x1="38" y1="22" x2="60" y2="20" strokeWidth="1" />
        <line x1="38" y1="28" x2="60" y2="26" strokeWidth="1" />
        <line x1="38" y1="34" x2="60" y2="32" strokeWidth="1" />
        {/* Speed lines */}
        <line x1="6" y1="48" x2="18" y2="48" strokeWidth="1" opacity="0.2" />
        <line x1="2" y1="54" x2="22" y2="54" strokeWidth="1" opacity="0.15" />
        <line x1="8" y1="60" x2="20" y2="60" strokeWidth="1" opacity="0.1" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Paint Palette — with colored paint blobs
   ---------------------------------------------------------------- */
export function PaintPalette({ className = "" }: { className?: string }) {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 44 C16 16, 92 10, 98 38 C100 55, 82 72, 55 75 C28 77, 16 66, 16 44 Z" />
        <ellipse cx="38" cy="55" rx="9" ry="7" />
        {/* Animated paint blobs — gentle pulse */}
        <circle cx="48" cy="26" r="6" fill="#E85D75" stroke="none" opacity="0.7">
          <animate attributeName="r" values="6;6.5;6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="23" r="5.5" fill="#FFB84D" stroke="none" opacity="0.7">
          <animate attributeName="r" values="5.5;6;5.5" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="80" cy="30" r="5" fill="#4488FF" stroke="none" opacity="0.6" />
        <circle cx="86" cy="46" r="4.5" fill="#4CAF50" stroke="none" opacity="0.6" />
        <circle cx="74" cy="58" r="4" fill="#AA66FF" stroke="none" opacity="0.5" />
        {/* Paint drip */}
        <path d="M48 32 C48 36, 46 38, 46 42" strokeWidth="1.5" stroke="#E85D75" opacity="0.3" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Door — with handle shine animation
   ---------------------------------------------------------------- */
export function Door({ className = "" }: { className?: string }) {
  return (
    <svg width="160" height="270" viewBox="0 0 160 270" fill="none" className={className}>
      <g stroke={S} strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="140" height="250" rx="4" />
        <rect x="20" y="20" width="120" height="232" rx="3" />
        {/* Handle with shine */}
        <rect x="112" y="135" width="18" height="10" rx="4" />
        <line x1="116" y1="138" x2="126" y2="138" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
        </line>
        <rect x="35" y="35" width="90" height="68" rx="2" />
        <rect x="35" y="125" width="90" height="95" rx="2" />
        {/* Peephole */}
        <circle cx="80" cy="115" r="6" />
        <circle cx="80" cy="115" r="2.5" fill={S} stroke="none" />
        {/* Welcome mat hint at bottom */}
        <rect x="30" y="255" width="100" height="8" rx="2" strokeWidth="1" opacity="0.3" />
        <line x1="45" y1="259" x2="115" y2="259" strokeWidth="0.8" opacity="0.2" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Clock — with animated time
   ---------------------------------------------------------------- */
export function Clock({ className = "" }: { className?: string }) {
  return (
    <svg width="65" height="55" viewBox="0 0 65 55" fill="none" className={className}>
      <g stroke={S} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="57" height="36" rx="4" />
        <line x1="33" y1="8" x2="33" y2="44" />
        <text x="18" y="32" fill={S} fontFamily="var(--font-jetbrains)" fontSize="15" textAnchor="middle">
          11
        </text>
        <text x="48" y="32" fill={S} fontFamily="var(--font-jetbrains)" fontSize="15" textAnchor="middle">
          <tspan>
            00
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </tspan>
        </text>
        {/* Colon blink between digits */}
        <circle cx="33" cy="24" r="1.5" fill={S} stroke="none">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="33" cy="32" r="1.5" fill={S} stroke="none">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <line x1="12" y1="44" x2="10" y2="52" />
        <line x1="53" y1="44" x2="55" y2="52" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Radio — with animated signal waves
   ---------------------------------------------------------------- */
export function Radio({ className = "" }: { className?: string }) {
  return (
    <svg width="68" height="58" viewBox="0 0 68 58" fill="none" className={className}>
      <g stroke={S} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="60" height="40" rx="5" />
        <line x1="22" y1="14" x2="40" y2="2" />
        <circle cx="40" cy="2" r="2.5" fill={S} stroke="none" />
        {/* Signal waves from antenna */}
        <path d="M44 4 C48 2, 50 6, 48 8" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M50 2 C55 -1, 58 6, 54 10" strokeWidth="1" opacity="0.2">
          <animate attributeName="opacity" values="0;0.3;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </path>
        <circle cx="24" cy="36" r="12" />
        <circle cx="24" cy="36" r="7" />
        <circle cx="24" cy="36" r="2.5" fill={S} stroke="none" />
        <circle cx="50" cy="26" r="5" />
        <line x1="50" y1="21" x2="50" y2="23" strokeWidth="1" />
        <circle cx="50" cy="40" r="5" />
        <line x1="50" y1="35" x2="50" y2="37" strokeWidth="1" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Workbench / Desk with striped front panel
   ---------------------------------------------------------------- */
export function Workbench({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <g stroke={S} strokeWidth={W} strokeLinecap="round">
        <rect x="0" y="0" width="1200" height="10" fill={S} stroke="none" />
        <rect x="0" y="10" width="1200" height="90" fill="#FAF5EE" />
        <line x1="0" y1="10" x2="1200" y2="10" />
        <line x1="0" y1="100" x2="1200" y2="100" />
        {Array.from({ length: 30 }, (_, i) => (
          <line
            key={i}
            x1={20 + i * 40}
            y1="10"
            x2={20 + i * 40}
            y2="100"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Book Stack — new detail object
   ---------------------------------------------------------------- */
export function BookStack({ className = "" }: { className?: string }) {
  return (
    <svg width="50" height="60" viewBox="0 0 50 60" fill="none" className={className}>
      <g stroke={S} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Bottom book */}
        <rect x="5" y="42" width="40" height="10" rx="1" />
        <line x1="8" y1="42" x2="8" y2="52" strokeWidth="1" opacity="0.3" />
        {/* Middle book */}
        <rect x="8" y="30" width="36" height="10" rx="1" />
        <line x1="11" y1="30" x2="11" y2="40" strokeWidth="1" opacity="0.3" />
        {/* Top book — slightly tilted */}
        <rect x="3" y="18" width="38" height="10" rx="1" transform="rotate(-5, 22, 23)" />
        {/* Coffee ring stain */}
        <circle cx="36" cy="8" r="8" strokeWidth="0.8" opacity="0.12" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Sticky Note — new detail object
   ---------------------------------------------------------------- */
export function StickyNote({
  className = "",
  text = "TODO",
  color = "rgba(255,184,77,0.15)",
}: {
  className?: string;
  text?: string;
  color?: string;
}) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className={className}>
      <rect x="5" y="5" width="55" height="55" fill={color} stroke={S} strokeWidth="1" />
      {/* Curled corner */}
      <path d="M60 40 L60 60 L40 60" fill="#FAF5EE" stroke={S} strokeWidth="1" />
      <path d="M60 40 C55 48, 48 55, 40 60" stroke={S} strokeWidth="1" fill="none" />
      {/* Pin */}
      <circle cx="32" cy="5" r="3" fill="#E85D75" stroke="none" />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        fill={S}
        fontFamily="var(--font-jetbrains)"
        fontSize="7"
        opacity="0.6"
      >
        {text}
      </text>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Pencil Cup — new detail object
   ---------------------------------------------------------------- */
export function PencilCup({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="65" viewBox="0 0 40 65" fill="none" className={className}>
      <g stroke={S} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Cup */}
        <path d="M6 25 L8 58 C8 62, 32 62, 32 58 L34 25 Z" />
        {/* Pencils sticking out */}
        <line x1="14" y1="26" x2="12" y2="8" strokeWidth="2" />
        <polygon points="12,8 10,2 14,2" fill={S} stroke="none" />
        <line x1="22" y1="26" x2="24" y2="6" strokeWidth="2" />
        <polygon points="24,6 22,0 26,0" fill="#E85D75" stroke="none" />
        <line x1="28" y1="26" x2="30" y2="12" strokeWidth="2" />
        <polygon points="30,12 28,6 32,6" fill="#FFB84D" stroke="none" />
        {/* Ruler */}
        <line x1="18" y1="26" x2="16" y2="10" strokeWidth="1.5" opacity="0.5" />
      </g>
    </svg>
  );
}
