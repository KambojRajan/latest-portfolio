"use client";

import { useEffect, useState } from "react";
import { Cloud } from "@/app/components/SVGIllustrations";

const TYPED_STRINGS = [
  "(a backend-shaped portfolio)",
  "(65,000 ATMs reconciled daily)",
  "(spring boot · java · go)",
  "(built with taste + caffeine)",
];

export default function HeroScene() {
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = TYPED_STRINGS[stringIndex];
    const speed = deleting ? 25 : 55;
    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 2200);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setStringIndex((i) => (i + 1) % TYPED_STRINGS.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [mounted, charIndex, deleting, stringIndex]);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      {/* Maroon side bars */}
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#3A1C1C" }} />

      {/* Clouds — more scattered and varied */}
      <Cloud className="absolute cloud-float" size={150} style={{ top: "7%", left: "10%", animationDelay: "0s" }} />
      <Cloud className="absolute cloud-float" size={90} style={{ top: "5%", right: "22%", animationDelay: "1.2s" }} />
      <Cloud className="absolute cloud-float" size={70} style={{ top: "20%", left: "52%", animationDelay: "2.8s" }} />
      <Cloud className="absolute cloud-float" size={120} style={{ top: "22%", right: "6%", animationDelay: "1.8s" }} />
      <Cloud className="absolute cloud-float" size={80} style={{ bottom: "30%", left: "3%", animationDelay: "3.2s" }} />
      <Cloud className="absolute cloud-float" size={100} style={{ bottom: "25%", right: "12%", animationDelay: "0.6s" }} />
      <Cloud className="absolute cloud-float" size={60} style={{ top: "40%", left: "30%", animationDelay: "4s" }} />

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        {/* Big display name — bold and playful */}
        <h1
          className="font-display text-center leading-[0.88] mb-6"
          style={{
            fontSize: "clamp(5rem, 14vw, 12rem)",
            color: "#3A1C1C",
            letterSpacing: "-0.03em",
          }}
        >
          RK<span style={{ color: "#E85D75" }}>.</span>
        </h1>

        {/* Animated typing subtitle */}
        <div
          className="font-mono text-center"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
            letterSpacing: "0.1em",
            color: "#8B6F6F",
            minHeight: "1.5em",
          }}
        >
          <span>{typedText}</span>
          <span
            className="cursor-blink inline-block ml-0.5"
            style={{ color: "#E85D75", fontWeight: "bold" }}
          >
            |
          </span>
        </div>

        {/* Decorative line */}
        <div
          className="mt-8 w-16 h-[2px]"
          style={{ background: "#3A1C1C", opacity: 0.2 }}
        />

        {/* Small tagline */}
        <p
          className="mt-4 font-mono text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ color: "#C4AAAA" }}
        >
          BACKEND ENGINEER · NIT KURUKSHETRA · GPA 8.71
        </p>
      </div>

      {/* Bottom area */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-[2px]" style={{ background: "#3A1C1C" }} />
        <div className="w-full h-6" style={{ background: "#FAF5EE" }} />
      </div>

      {/* Left name */}
      <div
        className="absolute left-6 top-5 font-mono"
        style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: "#8B6F6F" }}
      >
        rajan-kamboj
      </div>

      {/* Right scroll hint with animated arrow */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2"
        style={{ color: "#C4AAAA" }}
      >
        <span className="font-mono text-[0.6rem] tracking-wider hidden md:inline">SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "wiggle 2s ease-in-out infinite" }}>
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative dots pattern — bottom left */}
      <div className="absolute bottom-10 left-10 hidden md:block" style={{ opacity: 0.08 }}>
        {Array.from({ length: 4 }, (_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {Array.from({ length: 6 }, (_, col) => (
              <div
                key={col}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#3A1C1C" }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Decorative dots — top right */}
      <div className="absolute top-14 right-20 hidden lg:block" style={{ opacity: 0.06 }}>
        {Array.from({ length: 3 }, (_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {Array.from({ length: 4 }, (_, col) => (
              <div
                key={col}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#3A1C1C" }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
