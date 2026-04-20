"use client";

import { useState } from "react";
import {
  Monitor, ServerRack, Plant, DeskLamp, CoffeeMug,
  Keyboard, Clock, Radio, Workbench, BookStack,
  StickyNote, PencilCup,
} from "@/app/components/SVGIllustrations";

const projects = [
  {
    id: "nksm",
    name: "NKSM",
    tagline: "Student Marketplace",
    description:
      "Full-stack P2P marketplace for student exchange. Real-time messaging via Pusher WebSockets, full-text search, TanStack Query — 100+ active users.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Pusher", "WebSockets"],
    github: "https://github.com/KambojRajan/nksm",
  },
  {
    id: "ship",
    name: "Ship",
    tagline: "Git-Style VCS in Go",
    description:
      "Git-inspired version control from scratch. Content-addressable store, BoltDB, staging, tree objects, full OpenTelemetry → Jaeger tracing.",
    stack: ["Go", "Cobra", "BoltDB", "OpenTelemetry", "Jaeger"],
    github: "https://github.com/KambojRajan/ship",
  },
];

export default function ProjectsScene() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeProject);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      {/* Side bars */}
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />

      {/* Top label */}
      <div className="absolute top-6 left-8 flex items-center z-20">
        <span className="dot-accent" />
        <span className="mono-label">EACH MONITOR IS A PROJECT. HOVER TO EXPLORE.</span>
      </div>

      {/* Project detail popup */}
      {active && (
        <div
          className="absolute top-14 right-8 z-30 max-w-sm"
          style={{
            background: "#3A1C1C",
            color: "#FAF5EE",
            padding: "24px 28px",
            boxShadow: "0 12px 40px rgba(58,28,28,0.25)",
            animation: "bounceIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full transition-all hover:bg-white/10"
            style={{ color: "#FAF5EE" }}
          >
            <span className="text-sm">✕</span>
          </button>
          <h3 className="font-display text-2xl mb-1">{active.name}</h3>
          <p
            className="font-mono text-[0.62rem] tracking-wider uppercase mb-4"
            style={{ color: "#C4AAAA" }}
          >
            {active.tagline}
          </p>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#E8D9C5" }}>
            {active.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {active.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[0.55rem] tracking-wider uppercase px-2.5 py-1"
                style={{ border: "1px solid rgba(250,245,238,0.2)", color: "#C4AAAA" }}
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={active.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-wider uppercase transition-opacity hover:opacity-70"
            style={{ color: "#E85D75" }}
          >
            → VIEW ON GITHUB
          </a>
          <div
            className="absolute -bottom-2 right-16 w-4 h-4"
            style={{ background: "#3A1C1C", transform: "rotate(45deg)" }}
          />
        </div>
      )}

      {/* Main scene area */}
      <div className="flex-1 flex flex-col justify-end relative">
        {/* --- TOP SHELF --- */}
        <div className="absolute left-[12%] md:left-[18%] top-[22%] flex flex-col items-center gap-1">
          <div className="flex items-end gap-5">
            <CoffeeMug className="hover-wobble interactive-item" size={55} />
            <div className="tooltip-parent">
              <div className="tooltip">Click to view NKSM</div>
              <div
                className="interactive-item cursor-pointer"
                onClick={() => setActiveProject(activeProject === "nksm" ? null : "nksm")}
              >
                <Monitor label="NKSM" />
              </div>
            </div>
            <BookStack className="hover-wobble" />
            <DeskLamp />
          </div>
          {/* Shelf */}
          <div className="w-[360px] md:w-[440px] h-[2px]" style={{ background: "#3A1C1C" }} />
          {/* Shelf brackets */}
          <div className="flex justify-between w-[360px] md:w-[440px] -mt-[1px]">
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginLeft: "25%" }} />
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginRight: "25%" }} />
          </div>
        </div>

        {/* --- SECOND SHELF --- */}
        <div className="absolute left-[12%] md:left-[18%] top-[48%] flex flex-col items-center gap-1">
          <div className="flex items-end gap-6">
            <PencilCup className="hover-wobble" />
            <div className="tooltip-parent">
              <div className="tooltip">Click to view Ship</div>
              <div
                className="interactive-item cursor-pointer"
                onClick={() => setActiveProject(activeProject === "ship" ? null : "ship")}
              >
                <Monitor label="SHIP" />
              </div>
            </div>
            <CoffeeMug className="hover-wobble interactive-item" size={50} />
          </div>
          <div className="w-[340px] md:w-[400px] h-[2px]" style={{ background: "#3A1C1C" }} />
          <div className="flex justify-between w-[340px] md:w-[400px] -mt-[1px]">
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginLeft: "25%" }} />
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginRight: "25%" }} />
          </div>
        </div>

        {/* --- SERVER RACK (right side) --- */}
        <div className="absolute right-[6%] md:right-[12%] top-[14%]">
          <div className="speech-bubble mb-3 max-w-[220px]" style={{ animation: "bounceIn 0.6s ease 0.5s both" }}>
            65,000 ATMs RECONCILED DAILY. NOT A TYPO.
          </div>
          <ServerRack className="interactive-item hover-wobble" />
        </div>

        {/* --- STICKY NOTE on the wall --- */}
        <div className="absolute right-[8%] md:right-[15%] top-[56%]">
          <StickyNote text="SHIP IT" color="rgba(232,93,117,0.12)" className="hover-wobble interactive-item" />
        </div>

        {/* --- PLANT (far left) --- */}
        <div className="absolute left-[3%] md:left-[6%] bottom-[12%]">
          <Plant />
        </div>

        {/* --- DESK ITEMS --- */}
        <div className="absolute left-[30%] bottom-[12%] flex items-end gap-6">
          <Radio className="hover-wobble" />
          <Clock />
          <Keyboard />
        </div>

        {/* --- ANOTHER STICKY NOTE --- */}
        <div className="absolute left-[55%] top-[38%] hidden lg:block">
          <StickyNote text="PUSH TO PROD" color="rgba(255,184,77,0.12)" className="hover-wobble interactive-item" />
        </div>

        {/* Desk / Counter */}
        <div className="w-full" style={{ height: 80 }}>
          <Workbench />
        </div>
      </div>
    </div>
  );
}
