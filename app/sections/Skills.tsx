"use client";

import { useState } from "react";
import {
  ServerRack, CoffeeMug, BookStack, StickyNote,
  DeskLamp, PencilCup, Plant, Keyboard, Monitor,
} from "@/app/components/SVGIllustrations";

const cats = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["Java", "Go", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frameworks",
    icon: "⚙",
    skills: [
      "Spring Boot", "Spring Batch", "Hibernate", "QueryDSL",
      "JUnit", "MockMvc", "Gin", "Next.js", "React",
    ],
  },
  {
    title: "Databases",
    icon: "◉",
    skills: [
      "Oracle", "MySQL", "PostgreSQL", "MongoDB",
      "Redis", "Supabase", "Drizzle", "Prisma",
    ],
  },
  {
    title: "Infra",
    icon: "△",
    skills: [
      "AWS S3", "Kubernetes", "WebSockets",
      "Event-Driven", "OpenTelemetry", "Jaeger",
    ],
  },
];

const certs = [
  { title: "Amazon ML Summer School", from: "Amazon" },
  { title: "ML Specialization", from: "Stanford / Coursera" },
];

function PegItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative px-4 py-2 transition-all duration-200 hover-wobble"
      style={{
        border: active ? "2px solid #3A1C1C" : "1.5px solid #C4AAAA",
        background: active ? "#3A1C1C" : "transparent",
        color: active ? "#FAF5EE" : "#5C3333",
      }}
    >
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{ background: active ? "#E85D75" : "#C4AAAA" }}
      />
      <span className="font-mono text-[0.6rem] tracking-wider uppercase">{label}</span>
    </button>
  );
}

export default function SkillsScene() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />

      <div className="flex-1 flex overflow-hidden">
        {/* LEFT — Skills content */}
        <div className="flex-1 flex flex-col px-8 md:px-14 py-8 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <span className="dot-accent" />
              <span className="mono-label">THE TOOLKIT</span>
            </div>
            <h2
              className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#3A1C1C" }}
            >
              Tools of <em>the trade</em>
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-6 mb-8">
            {cats.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className="flex items-center gap-2 py-2 transition-all duration-200 group"
                style={{ borderBottom: activeCategory === i ? "2px solid #3A1C1C" : "2px solid transparent" }}
              >
                <span className="font-mono text-sm" style={{ color: activeCategory === i ? "#3A1C1C" : "#C4AAAA" }}>
                  {cat.icon}
                </span>
                <span
                  className="font-mono text-[0.68rem] tracking-wider uppercase transition-colors"
                  style={{ color: activeCategory === i ? "#3A1C1C" : "#8B6F6F" }}
                >
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Skills pegboard */}
          <div className="max-w-2xl">
            <div className="relative p-8 pegboard-bg">
              <div className="flex flex-wrap gap-4">
                {cats[activeCategory].skills.map((skill) => (
                  <PegItem key={skill} label={skill} active={false} onClick={() => {}} />
                ))}
              </div>
            </div>
            <div className="mt-4 font-mono text-[0.6rem]" style={{ color: "#C4AAAA", letterSpacing: "0.1em" }}>
              {cats[activeCategory].skills.length} TOOLS LOADED IN {cats[activeCategory].title.toUpperCase()}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-10">
            <div className="flex items-center mb-4">
              <span className="dot-accent" />
              <span className="mono-label">CERTIFICATIONS</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {certs.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 px-5 py-3 hover-wobble"
                  style={{ border: "1.5px solid #3A1C1C" }}
                >
                  <div className="w-8 h-8 flex items-center justify-center font-mono text-xs" style={{ border: "1.5px solid #3A1C1C", color: "#3A1C1C" }}>★</div>
                  <div>
                    <div className="font-mono text-[0.65rem] tracking-wider uppercase" style={{ color: "#3A1C1C" }}>{cert.title}</div>
                    <div className="font-mono text-[0.55rem]" style={{ color: "#C4AAAA" }}>{cert.from}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="mt-10 max-w-lg">
            <div className="flex items-center mb-4">
              <span className="dot-accent" />
              <span className="mono-label">ABOUT</span>
            </div>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#5C3333" }}>
              <p>
                Backend engineer in my final year at <strong>NIT Kurukshetra</strong> (GPA 8.71).
                Building financial infrastructure at <strong>Osfin.ai</strong> that reconciles 65,000 ATMs daily without blinking.
              </p>
              <p>
                I think in distributed systems — resilient, observable, event-driven.
                When the terminal closes, you&apos;ll find me on rollerskates or leaving watercolor stains on paper.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Illustrated desk / workspace scene */}
        <div className="hidden lg:flex flex-col w-[38%] relative overflow-hidden">
          {/* Wall decorations */}

          {/* Sticky notes on the wall */}
          <div className="absolute top-[8%] right-[15%]">
            <StickyNote text="JAVA" color="rgba(232,93,117,0.12)" className="hover-wobble interactive-item" />
          </div>
          <div className="absolute top-[6%] right-[50%]">
            <StickyNote text="GO" color="rgba(255,184,77,0.12)" className="hover-wobble interactive-item" />
          </div>
          <div className="absolute top-[18%] right-[32%]">
            <StickyNote text="SPRING" color="rgba(68,136,255,0.1)" className="hover-wobble interactive-item" />
          </div>

          {/* Pinned certificate frame */}
          <div className="absolute top-[30%] left-[12%]">
            <svg width="110" height="85" viewBox="0 0 110 85" fill="none" className="hover-wobble interactive-item">
              <rect x="5" y="5" width="100" height="75" stroke="#3A1C1C" strokeWidth="2" rx="2" />
              <rect x="10" y="10" width="90" height="65" stroke="#3A1C1C" strokeWidth="1" rx="1" opacity="0.3" />
              <text x="55" y="35" textAnchor="middle" fill="#3A1C1C" fontFamily="var(--font-dm-serif)" fontSize="8" opacity="0.7">Amazon ML</text>
              <text x="55" y="48" textAnchor="middle" fill="#3A1C1C" fontFamily="var(--font-dm-serif)" fontSize="8" opacity="0.7">Summer School</text>
              <text x="55" y="64" textAnchor="middle" fill="#E85D75" fontFamily="var(--font-jetbrains)" fontSize="6">★ CERTIFIED ★</text>
              {/* Pin */}
              <circle cx="55" cy="5" r="4" fill="#E85D75" stroke="none" />
            </svg>
          </div>

          {/* Monitor with blinking code */}
          <div className="absolute top-[32%] right-[10%]">
            <Monitor className="hover-wobble interactive-item" />
          </div>

          {/* Desk lamp */}
          <div className="absolute top-[50%] left-[8%]">
            <DeskLamp className="interactive-item" />
          </div>

          {/* Shelf with stuff */}
          <div className="absolute bottom-[28%] left-[10%] right-[10%] flex flex-col items-center gap-1">
            <div className="flex items-end gap-5 justify-center">
              <BookStack className="hover-wobble" />
              <CoffeeMug className="hover-wobble interactive-item" size={50} />
              <PencilCup className="hover-wobble" />
              <BookStack className="hover-wobble" />
            </div>
            {/* Shelf */}
            <div className="w-full h-[2px]" style={{ background: "#3A1C1C" }} />
            <div className="flex justify-between w-full -mt-[1px]">
              <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginLeft: "20%" }} />
              <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginRight: "20%" }} />
            </div>
          </div>

          {/* Keyboard on desk area */}
          <div className="absolute bottom-[14%] left-[20%]">
            <Keyboard className="hover-wobble" />
          </div>

          {/* Small plant in the corner */}
          <div className="absolute bottom-[2%] right-[5%]">
            <Plant />
          </div>

          {/* GPA badge floating */}
          <div className="absolute bottom-[6%] left-[8%]">
            <div
              className="px-4 py-3 text-center hover-wobble interactive-item"
              style={{ border: "2px solid #3A1C1C" }}
            >
              <div className="font-display text-3xl" style={{ color: "#3A1C1C" }}>8.71</div>
              <div className="font-mono text-[0.5rem] tracking-wider uppercase" style={{ color: "#8B6F6F" }}>GPA · NITK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
