"use client";

import { useState } from "react";
import { Rollerblade, PaintPalette, Cloud, CoffeeMug, BookStack, Plant } from "@/app/components/SVGIllustrations";

/* ----------------------------------------------------------------
   Easel with canvas — interactive painting
   ---------------------------------------------------------------- */
function Easel({ className = "" }: { className?: string }) {
  return (
    <svg width="130" height="190" viewBox="0 0 130 190" fill="none" className={className}>
      <g stroke="#3A1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Legs */}
        <line x1="30" y1="60" x2="10" y2="188" />
        <line x1="100" y1="60" x2="120" y2="188" />
        <line x1="65" y1="60" x2="65" y2="175" />
        {/* Canvas support ledge */}
        <line x1="25" y1="130" x2="105" y2="130" />
        {/* Canvas */}
        <rect x="20" y="15" width="90" height="115" rx="1" />
        {/* Painting inside canvas — abstract watercolor feel */}
        <circle cx="50" cy="55" r="18" fill="rgba(232,93,117,0.12)" stroke="none">
          <animate attributeName="r" values="18;20;18" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="70" r="15" fill="rgba(68,136,255,0.1)" stroke="none">
          <animate attributeName="r" values="15;17;15" dur="5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="55" cy="85" r="12" fill="rgba(255,184,77,0.1)" stroke="none">
          <animate attributeName="r" values="12;14;12" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="80" cy="45" r="10" fill="rgba(76,175,80,0.1)" stroke="none">
          <animate attributeName="r" values="10;12;10" dur="4.5s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="40" cy="40" r="8" fill="rgba(170,102,255,0.1)" stroke="none">
          <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        {/* Brush strokes on canvas */}
        <path d="M35 50 C45 48, 55 55, 70 50" strokeWidth="1.2" opacity="0.15" />
        <path d="M40 75 C55 72, 65 80, 85 75" strokeWidth="1.2" opacity="0.15" />
        <path d="M30 95 C50 90, 70 100, 90 92" strokeWidth="1.2" opacity="0.12" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Paint Brushes in a jar
   ---------------------------------------------------------------- */
function BrushJar({ className = "" }: { className?: string }) {
  return (
    <svg width="55" height="90" viewBox="0 0 55 90" fill="none" className={className}>
      <g stroke="#3A1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Jar */}
        <path d="M10 40 L12 80 C12 85, 43 85, 43 80 L45 40 Z" />
        <ellipse cx="27" cy="40" rx="18" ry="4" />
        {/* Water with paint tint */}
        <ellipse cx="27" cy="50" rx="14" ry="3" fill="rgba(68,136,255,0.08)" stroke="none" />
        {/* Brushes */}
        <line x1="18" y1="42" x2="15" y2="12" strokeWidth="2.5" />
        <path d="M15 12 L13 2 L17 2 Z" fill="#E85D75" stroke="none" />
        <line x1="27" y1="42" x2="29" y2="8" strokeWidth="2.5" />
        <path d="M29 8 L27 0 L31 0 Z" fill="#FFB84D" stroke="none" />
        <line x1="35" y1="42" x2="38" y2="14" strokeWidth="2" />
        <path d="M38 14 L36 6 L40 6 Z" fill="#4488FF" stroke="none" />
        {/* Paint drips on jar */}
        <path d="M12 42 C12 46, 10 48, 10 52" strokeWidth="1" stroke="#E85D75" opacity="0.3" />
        <path d="M42 44 C42 48, 44 50, 44 55" strokeWidth="1" stroke="#4488FF" opacity="0.25" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Framed photo on wall
   ---------------------------------------------------------------- */
function FramedPhoto({ className = "", label = "" }: { className?: string; label?: string }) {
  return (
    <svg width="80" height="70" viewBox="0 0 80 70" fill="none" className={className}>
      <g stroke="#3A1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Frame */}
        <rect x="5" y="8" width="70" height="55" rx="2" />
        <rect x="10" y="13" width="60" height="45" rx="1" />
        {/* Mountain landscape inside */}
        <path d="M10 48 L30 25 L45 38 L55 22 L70 48" strokeWidth="1" opacity="0.2" />
        <circle cx="22" cy="22" r="5" strokeWidth="1" opacity="0.15" />
        {/* Wire */}
        <path d="M25 8 L40 2 L55 8" strokeWidth="1" opacity="0.4" />
      </g>
      {label && (
        <text x="40" y="67" textAnchor="middle" fill="#3A1C1C" fontFamily="var(--font-jetbrains)" fontSize="5" opacity="0.4">
          {label}
        </text>
      )}
    </svg>
  );
}

export default function CreativeScene() {
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />

      <Cloud className="absolute cloud-float" size={70} style={{ top: "6%", right: "20%", animationDelay: "1s" }} />
      <Cloud className="absolute cloud-float" size={55} style={{ top: "12%", left: "10%", animationDelay: "2s" }} />

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col px-8 md:px-14 py-8 justify-center overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="max-w-lg">
            <div className="flex items-center mb-3">
              <span className="dot-accent" />
              <span className="mono-label">BEYOND CODE</span>
            </div>
            <h2
              className="font-display leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#3A1C1C" }}
            >
              The human
              <br />
              <em>behind the terminal</em>
            </h2>

            <p className="text-sm leading-relaxed mb-10" style={{ color: "#8B6F6F" }}>
              Engineering is about creating systems. So is art. Creative habits keep the technical mind honest.
            </p>

            {/* Hobby cards — highlight on hover with state */}
            <div className="space-y-6">
              <div
                className="flex items-start gap-6 p-6 transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredHobby("rollerblade")}
                onMouseLeave={() => setHoveredHobby(null)}
                style={{
                  border: hoveredHobby === "rollerblade" ? "2px solid #E85D75" : "1.5px solid #3A1C1C",
                  transform: hoveredHobby === "rollerblade" ? "translateY(-4px)" : "none",
                  boxShadow: hoveredHobby === "rollerblade" ? "0 8px 24px rgba(232,93,117,0.1)" : "none",
                }}
              >
                <Rollerblade className="flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#3A1C1C" }}>Rollerblade</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#8B6F6F" }}>
                    Full presence and physical intuition — the same things as debugging a distributed trace at 2am.
                  </p>
                  <div className="flex gap-2">
                    {["Flow state", "Kinetic focus", "Precision"].map((t) => (
                      <span key={t} className="font-mono text-[0.5rem] tracking-wider uppercase px-2 py-1" style={{ border: "1px solid #C4AAAA", color: "#8B6F6F" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="flex items-start gap-6 p-6 transition-all duration-300 cursor-default"
                onMouseEnter={() => setHoveredHobby("watercolor")}
                onMouseLeave={() => setHoveredHobby(null)}
                style={{
                  border: hoveredHobby === "watercolor" ? "2px solid #FFB84D" : "1.5px solid #3A1C1C",
                  transform: hoveredHobby === "watercolor" ? "translateY(-4px)" : "none",
                  boxShadow: hoveredHobby === "watercolor" ? "0 8px 24px rgba(255,184,77,0.1)" : "none",
                }}
              >
                <PaintPalette className="flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#3A1C1C" }}>Watercolor</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#8B6F6F" }}>
                    The least forgiving medium — you can&apos;t undo a stroke. It trains you to plan ahead and embrace imperfection.
                  </p>
                  <div className="flex gap-2">
                    {["Layering", "Controlled chaos", "Patience"].map((t) => (
                      <span key={t} className="font-mono text-[0.5rem] tracking-wider uppercase px-2 py-1" style={{ border: "1px solid #C4AAAA", color: "#8B6F6F" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="mt-8 pl-5 py-2" style={{ borderLeft: "3px solid #3A1C1C" }}>
              <p className="font-display text-lg italic" style={{ color: "#5C3333" }}>
                &ldquo;Creativity is just systems thinking with fewer constraints.&rdquo;
              </p>
              <footer className="font-mono text-[0.55rem] tracking-widest uppercase mt-2" style={{ color: "#C4AAAA" }}>— RAJAN KAMBOJ</footer>
            </blockquote>
          </div>
        </div>

        {/* RIGHT — Art studio scene with illustrations */}
        <div className="hidden lg:flex flex-col w-[38%] relative overflow-hidden">

          {/* Framed photos on wall */}
          <div className="absolute top-[6%] left-[15%]">
            <FramedPhoto className="hover-wobble interactive-item" label="SUNSET" />
          </div>
          <div className="absolute top-[5%] right-[12%]">
            <FramedPhoto className="hover-wobble interactive-item" label="MOUNTAINS" />
          </div>
          <div className="absolute top-[22%] left-[40%]">
            <FramedPhoto className="hover-wobble interactive-item" label="ABSTRACT" />
          </div>

          {/* Easel with painting — centerpiece */}
          <div className="absolute top-[28%] left-[10%]">
            <Easel className="interactive-item hover-wobble" />
          </div>

          {/* Brush jar on a small table */}
          <div className="absolute top-[52%] right-[15%]">
            <BrushJar className="hover-wobble interactive-item" />
          </div>

          {/* Rollerblade on the floor — animated speed lines when hovered */}
          <div
            className="absolute bottom-[12%] right-[20%] transition-transform duration-500"
            style={{
              transform: hoveredHobby === "rollerblade" ? "translateX(12px)" : "translateX(0)",
            }}
          >
            <Rollerblade className="interactive-item" />
            {/* Speed lines appear when rollerblade card is hovered */}
            {hoveredHobby === "rollerblade" && (
              <>
                <div
                  className="absolute top-3 -left-8 h-[1.5px] bg-[#3A1C1C]"
                  style={{ width: 20, opacity: 0.2, animation: "slideInLeft 0.3s ease" }}
                />
                <div
                  className="absolute top-6 -left-10 h-[1.5px] bg-[#3A1C1C]"
                  style={{ width: 28, opacity: 0.15, animation: "slideInLeft 0.3s ease 0.05s both" }}
                />
                <div
                  className="absolute top-9 -left-6 h-[1.5px] bg-[#3A1C1C]"
                  style={{ width: 16, opacity: 0.1, animation: "slideInLeft 0.3s ease 0.1s both" }}
                />
              </>
            )}
          </div>

          {/* Coffee mug on the floor */}
          <div className="absolute bottom-[8%] left-[15%]">
            <CoffeeMug className="hover-wobble interactive-item" size={50} />
          </div>

          {/* Paint palette leaning against wall */}
          <div
            className="absolute bottom-[18%] left-[50%] transition-transform duration-500"
            style={{
              transform: hoveredHobby === "watercolor" ? "rotate(-5deg) scale(1.08)" : "rotate(-12deg)",
            }}
          >
            <PaintPalette className="interactive-item" />
          </div>

          {/* Small plant in corner */}
          <div className="absolute bottom-[2%] right-[3%]">
            <Plant />
          </div>

          {/* Stack of art books */}
          <div className="absolute bottom-[5%] left-[35%]">
            <BookStack className="hover-wobble" />
          </div>

          {/* "Art corner" floor line */}
          <div
            className="absolute bottom-[10%] left-0 right-0 h-[2px]"
            style={{ background: "#3A1C1C", opacity: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}
