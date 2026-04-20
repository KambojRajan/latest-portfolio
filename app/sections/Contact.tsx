"use client";

import { useState } from "react";
import { Cloud, PencilCup, Plant } from "@/app/components/SVGIllustrations";

const socials = [
  { label: "GitHub", href: "https://github.com/KambojRajan", handle: "KambojRajan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/KambojRajan", handle: "KambojRajan" },
  { label: "Email", href: "mailto:brajankamboj@gmail.com", handle: "brajankamboj@gmail.com" },
];

/* ----------------------------------------------------------------
   Interactive Opening Door
   ---------------------------------------------------------------- */
function OpeningDoor({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`door-wrapper ${isOpen ? "door-open" : ""}`}
      onClick={onToggle}
      style={{ width: 160, height: 270 }}
    >
      {/* Door frame (stays fixed) */}
      <svg
        width="160"
        height="270"
        viewBox="0 0 160 270"
        fill="none"
        className="absolute inset-0"
      >
        {/* Outer frame */}
        <rect x="10" y="10" width="140" height="250" rx="4" stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Welcome mat */}
        <rect x="30" y="255" width="100" height="8" rx="2" stroke="#3A1C1C" strokeWidth="1" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="45" y1="259" x2="115" y2="259" stroke="#3A1C1C" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      </svg>

      {/* Inside of door (revealed when open) */}
      <div
        className="door-inside-content absolute flex flex-col items-center justify-center"
        style={{
          top: 12,
          left: 12,
          width: 136,
          height: 246,
          background: "#3A1C1C",
          borderRadius: 3,
        }}
      >
        <span
          className="font-display text-2xl italic text-center leading-tight"
          style={{ color: "#FAF5EE" }}
        >
          Come
          <br />
          on in!
        </span>
        <div
          className="mt-3 w-8 h-[2px]"
          style={{ background: "#E85D75" }}
        />
        <span
          className="mt-3 font-mono text-[0.5rem] tracking-widest uppercase"
          style={{ color: "#C4AAAA" }}
        >
          WELCOME
        </span>
        {/* Warm light glow */}
        <div
          className="absolute inset-0 rounded"
          style={{
            background: "radial-gradient(ellipse at center 40%, rgba(255,184,77,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Door panel (swings open) */}
      <svg
        width="160"
        height="270"
        viewBox="0 0 160 270"
        fill="none"
        className="door-panel absolute inset-0"
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {/* Door body with cream fill so it covers the inside */}
        <rect x="18" y="18" width="124" height="236" rx="3" fill="#FAF5EE" stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Panels on door */}
        <rect x="35" y="35" width="90" height="68" rx="2" stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="35" y="125" width="90" height="95" rx="2" stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Handle */}
        <rect x="112" y="135" width="18" height="10" rx="4" stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="116" y1="138" x2="126" y2="138" stroke="#3A1C1C" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
        </line>
        {/* Peephole */}
        <circle cx="80" cy="115" r="6" stroke="#3A1C1C" strokeWidth="2" />
        <circle cx="80" cy="115" r="2.5" fill="#3A1C1C" stroke="none" />
        {/* Smiley */}
        <text
          x="80"
          y="80"
          textAnchor="middle"
          fill="#C4AAAA"
          fontFamily="var(--font-dm-serif)"
          fontSize="28"
        >
          :)
        </text>
      </svg>

      {/* Hover hint */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.5rem] tracking-wider uppercase transition-opacity duration-300"
        style={{ color: "#C4AAAA", opacity: isOpen ? 0 : 1 }}
      >
        {isOpen ? "" : "CLICK TO OPEN"}
      </div>
    </div>
  );
}

export default function ContactScene() {
  const [doorOpen, setDoorOpen] = useState(false);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      {/* Side bars */}
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />

      {/* Clouds */}
      <Cloud
        className="absolute cloud-float"
        size={90}
        style={{ top: "6%", left: "12%", animationDelay: "0.5s" }}
      />
      <Cloud
        className="absolute cloud-float"
        size={65}
        style={{ top: "10%", right: "20%", animationDelay: "2s" }}
      />

      {/* Main content — centered and big */}
      <div className="flex-1 flex items-center justify-center relative px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl w-full">

          {/* LEFT — Contact info (big & bold) */}
          <div className="flex-1 text-center lg:text-left">
            {/* Header */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <span className="dot-accent" />
              <span className="mono-label">LET&apos;S CONNECT</span>
            </div>

            <h2
              className="font-display leading-[0.92] mb-8"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "#3A1C1C",
              }}
            >
              Let&apos;s build
              <br />
              <em>something.</em>
            </h2>

            {/* Big email — very prominent */}
            <a
              href="mailto:brajankamboj@gmail.com"
              className="inline-block font-display text-2xl md:text-3xl lg:text-4xl italic mb-8 pb-2 transition-all duration-300 hover:tracking-wider"
              style={{
                color: "#3A1C1C",
                borderBottom: "3px solid #E85D75",
              }}
            >
              brajankamboj@gmail.com
            </a>

            {/* Phone — visible this time */}
            <p
              className="font-mono text-base md:text-lg mb-10 tracking-wider"
              style={{ color: "#5C3333" }}
            >
              +91 94994 77417
            </p>

            {/* Social link cards — bigger and bolder */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1.5 px-6 py-4 interactive-item hover-wobble"
                  style={{ border: "2px solid #3A1C1C" }}
                >
                  <span
                    className="font-mono text-[0.65rem] tracking-[0.18em] uppercase font-bold"
                    style={{ color: "#3A1C1C" }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: "#5C3333" }}
                  >
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3"
              style={{ border: "2px solid #3A1C1C" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "#4CAF50",
                  boxShadow: "0 0 8px rgba(76,175,80,0.4)",
                  animation: "dotPulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="font-mono text-[0.7rem] tracking-wider uppercase font-bold"
                style={{ color: "#3A1C1C" }}
              >
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* RIGHT — Opening Door + clipboard */}
          <div className="hidden lg:flex flex-col items-center gap-6 relative">
            {/* Clipboard above door */}
            <div className="relative -mb-2">
              <div className="flex justify-center gap-16 -mb-2 relative z-10">
                <div className="w-3 h-5" style={{ background: "#3A1C1C" }} />
                <div className="w-3 h-5" style={{ background: "#3A1C1C" }} />
              </div>
              <div
                className="px-6 py-5 text-center"
                style={{ border: "2px solid #3A1C1C", minWidth: 180 }}
              >
                <p
                  className="font-mono text-[0.6rem] tracking-wider uppercase leading-relaxed"
                  style={{ color: "#3A1C1C" }}
                >
                  BACKEND ENGINEER
                  <br />
                  NIT KURUKSHETRA
                  <br />
                  GPA 8.71
                </p>
              </div>
            </div>

            {/* Interactive Opening Door */}
            <div className="relative">
              <OpeningDoor isOpen={doorOpen} onToggle={() => setDoorOpen((prev) => !prev)} />
            </div>

            {/* Pencil cup beside door */}
            <div className="absolute -left-16 bottom-8">
              <PencilCup className="hover-wobble" />
            </div>

            {/* Small plant on the other side */}
            <div className="absolute -right-12 bottom-4">
              <Plant />
            </div>
          </div>
        </div>
      </div>

      {/* Resume link — prominent top-right */}
      <a
        href="/RajanKamboj_Resume.pdf"
        target="_blank"
        className="absolute top-6 right-8 font-mono text-[0.68rem] tracking-wider uppercase px-5 py-2.5 interactive-item hover-wobble font-bold"
        style={{ border: "2px solid #3A1C1C", color: "#3A1C1C" }}
      >
        RESUME ↗
      </a>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-mono text-[0.6rem] tracking-widest" style={{ color: "#8B6F6F" }}>
          © 2025 RAJAN KAMBOJ · BUILT WITH NEXT.JS + TYPESCRIPT + TAILWIND
        </p>
      </div>
    </div>
  );
}
