"use client";

import { useState, useEffect } from "react";
import {
  ServerRack, Plant, DeskLamp, CoffeeMug,
  Keyboard, Clock, Radio, Workbench, BookStack,
  StickyNote, PencilCup,
} from "@/app/components/SVGIllustrations";

/* ------------------------------------------------------------------
   Project data
   ------------------------------------------------------------------ */
const projects = [
  {
    id: "nksm",
    name: "NKSM",
    tagline: "Student Marketplace",
    description:
      "Full-stack P2P marketplace for student exchange. Real-time messaging via Pusher WebSockets, full-text search, TanStack Query — 100+ active users.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Pusher", "WebSockets"],
    github: "https://github.com/KambojRajan/nksm",
    meta: "v1.2.0 · prod",
  },
  {
    id: "ship",
    name: "Ship",
    tagline: "Git-Style VCS in Go",
    description:
      "Git-inspired version control from scratch. Content-addressable store, BoltDB, staging, tree objects, full OpenTelemetry → Jaeger tracing.",
    stack: ["Go", "Cobra", "BoltDB", "OpenTelemetry", "Jaeger"],
    github: "https://github.com/KambojRajan/ship",
    meta: "v0.4.1 · beta",
  },
];

type Project = typeof projects[number];

/* ------------------------------------------------------------------
   Small Monitor (idle state — sits on the shelf)
   Shows a tiny window title-bar with traffic lights + project name.
   ------------------------------------------------------------------ */
function ShelfMonitor({
  project,
  onClick,
  isActive,
}: {
  project: Project;
  onClick: () => void;
  isActive: boolean;
}) {
  const S = "#3A1C1C";
  return (
    <button
      onClick={onClick}
      className="group relative interactive-item"
      style={{
        transition: "opacity 0.4s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        opacity: isActive ? 0 : 1,
        pointerEvents: isActive ? "none" : "auto",
      }}
      aria-label={`Open ${project.name} details`}
    >
      <svg width="160" height="145" viewBox="0 0 160 145" fill="none">
        <g stroke={S} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer bezel */}
          <rect x="8" y="8" width="144" height="96" rx="5" />
          {/* Inner screen */}
          <rect x="14" y="14" width="132" height="84" rx="2" fill="#FAF5EE" />
          {/* Title bar */}
          <line x1="14" y1="26" x2="146" y2="26" strokeWidth="1" opacity="0.5" />
          {/* Traffic lights */}
          <circle cx="22" cy="20" r="2.3" fill="#E85D75" stroke="none" />
          <circle cx="30" cy="20" r="2.3" fill="#FFB84D" stroke="none" />
          <circle cx="38" cy="20" r="2.3" fill="#4CAF50" stroke="none" />
          {/* Project name inside title bar */}
          <text
            x="80"
            y="23"
            textAnchor="middle"
            fill={S}
            fontFamily="var(--font-jetbrains)"
            fontSize="7.5"
            letterSpacing="0.18em"
            fontWeight="700"
          >
            {project.name.toUpperCase()}.APP
          </text>
          {/* Screen content — code-ish */}
          <line x1="22" y1="38" x2="72" y2="38" strokeWidth="1.5" opacity="0.45" />
          <line x1="22" y1="46" x2="98" y2="46" strokeWidth="1.5" opacity="0.4" />
          <line x1="30" y1="54" x2="84" y2="54" strokeWidth="1.5" opacity="0.35" />
          <line x1="30" y1="62" x2="62" y2="62" strokeWidth="1.5" opacity="0.3" />
          <line x1="22" y1="70" x2="78" y2="70" strokeWidth="1.5" opacity="0.35" />
          {/* Blinking cursor */}
          <rect x="62" y="76" width="7" height="8" fill={S} stroke="none">
            <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" />
          </rect>
          {/* Stand */}
          <line x1="80" y1="104" x2="80" y2="118" />
          <path d="M58 118 C58 118, 80 114, 102 118" />
          {/* Power LED */}
          <circle cx="80" cy="108" r="2" fill="#4CAF50" stroke="none">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
        {/* Big label under monitor */}
        <text
          x="80"
          y="135"
          textAnchor="middle"
          fill={S}
          fontFamily="var(--font-display)"
          fontSize="14"
          letterSpacing="0.02em"
          fontWeight="700"
        >
          {project.name}
        </text>
      </svg>
      {/* Hint ribbon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          top: "-28px",
          background: "#3A1C1C",
          color: "#FAF5EE",
          padding: "4px 10px",
          fontFamily: "var(--font-jetbrains)",
          fontSize: "0.55rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          transition: "opacity 0.25s",
        }}
      >
        click → open
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------
   Expanded Monitor — shown when a project is clicked.
   The monitor is rendered big, centered, and its screen contains the
   full project details styled like an IDE / browser window.
   ------------------------------------------------------------------ */
function ExpandedMonitor({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const S = "#3A1C1C";
  const CREAM = "#FAF5EE";

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 z-40 flex items-center justify-center"
      style={{
        background: "rgba(58,28,28,0.35)",
        backdropFilter: "blur(2px)",
        animation: "fadeIn 0.25s ease forwards",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "monitorPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
          width: "min(820px, 88vw)",
        }}
      >
        {/* Monitor SVG frame with foreignObject containing the details */}
        <svg
          viewBox="0 0 820 560"
          width="100%"
          style={{ display: "block", filter: "drop-shadow(0 24px 48px rgba(58,28,28,0.35))" }}
          fill="none"
        >
          <g stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer bezel */}
            <rect x="12" y="12" width="796" height="500" rx="14" fill={CREAM} />
            {/* Inner screen */}
            <rect x="28" y="28" width="764" height="468" rx="6" fill={CREAM} />
            {/* Title bar divider */}
            <line x1="28" y1="66" x2="792" y2="66" strokeWidth="1.5" opacity="0.4" />
          </g>
          {/* Traffic lights */}
          <circle cx="50" cy="47" r="6" fill="#E85D75" />
          <circle cx="70" cy="47" r="6" fill="#FFB84D" />
          <circle cx="90" cy="47" r="6" fill="#4CAF50" />
          {/* Window title */}
          <text
            x="410"
            y="52"
            textAnchor="middle"
            fill={S}
            fontFamily="var(--font-jetbrains)"
            fontSize="12"
            letterSpacing="0.14em"
            fontWeight="700"
            opacity="0.7"
          >
            {project.name.toUpperCase()}.APP &nbsp;—&nbsp; {project.meta.toUpperCase()}
          </text>
          {/* Close button (X) on the title bar */}
          <g
            style={{ cursor: "pointer" }}
            onClick={onClose as unknown as React.MouseEventHandler<SVGGElement>}
          >
            <circle cx="770" cy="47" r="12" fill="transparent" stroke={S} strokeWidth="1.5" opacity="0.4" />
            <line x1="764" y1="41" x2="776" y2="53" stroke={S} strokeWidth="1.8" strokeLinecap="round" />
            <line x1="776" y1="41" x2="764" y2="53" stroke={S} strokeWidth="1.8" strokeLinecap="round" />
          </g>
          {/* Power LED */}
          <circle cx="410" cy="524" r="3" fill="#4CAF50">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          {/* Stand */}
          <g stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <line x1="410" y1="512" x2="410" y2="536" />
            <path d="M340 536 C340 536, 410 530, 480 536" />
          </g>

          {/* The actual "screen content" — rendered as HTML via foreignObject */}
          <foreignObject x="52" y="86" width="716" height="396">
            <div
              // @ts-expect-error xmlns is required inside foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                width: "100%",
                height: "100%",
                color: S,
                fontFamily: "var(--font-jetbrains)",
                animation: "fadeInUp 0.45s ease 0.15s both",
              }}
            >
              <div style={{ padding: "4px 10px 10px 10px", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Path / breadcrumb */}
                <div
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8B6F6F",
                    marginBottom: "14px",
                  }}
                >
                  ~/projects/{project.id} &nbsp;<span style={{ color: "#E85D75" }}>●</span>&nbsp; {project.tagline}
                </div>

                {/* Big display name */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                    lineHeight: 1.02,
                    margin: 0,
                    marginBottom: "6px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.name}
                </h3>
                <div
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#5C3333",
                    marginBottom: "22px",
                  }}
                >
                  {project.tagline}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(58,28,28,0.15)", marginBottom: 20 }} />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: "#3A1C1C",
                    margin: 0,
                    marginBottom: 22,
                    maxWidth: 620,
                  }}
                >
                  {project.description}
                </p>

                {/* Stack label */}
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8B6F6F",
                    marginBottom: 8,
                  }}
                >
                  {"// stack"}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "5px 10px",
                        border: "1px solid rgba(58,28,28,0.25)",
                        color: "#3A1C1C",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer — actions */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.7rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#FAF5EE",
                      background: "#3A1C1C",
                      padding: "10px 16px",
                      textDecoration: "none",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#E85D75";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#3A1C1C";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    → View on GitHub
                  </a>
                  <button
                    onClick={onClose}
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8B6F6F",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "10px 4px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#3A1C1C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "#8B6F6F";
                    }}
                  >
                    esc · close
                  </button>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Main scene
   ------------------------------------------------------------------ */
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
        <span className="mono-label">EACH MONITOR IS A PROJECT. CLICK TO BOOT IT UP.</span>
      </div>

      {/* Main scene area — slightly dims when a project is expanded */}
      <div
        className="flex-1 flex flex-col justify-end relative"
        style={{
          transition: "filter 0.4s ease, opacity 0.4s ease",
          filter: active ? "blur(3px)" : "none",
          opacity: active ? 0.45 : 1,
        }}
      >
        {/* --- TOP SHELF (NKSM) --- */}
        <div className="absolute left-[12%] md:left-[18%] top-[20%] flex flex-col items-center gap-1">
          <div className="flex items-end gap-5">
            <CoffeeMug className="hover-wobble interactive-item" size={55} />
            <ShelfMonitor
              project={projects[0]}
              onClick={() => setActiveProject("nksm")}
              isActive={activeProject === "nksm"}
            />
            <BookStack className="hover-wobble" />
            <DeskLamp />
          </div>
          {/* Shelf */}
          <div className="w-[380px] md:w-[460px] h-[2px]" style={{ background: "#3A1C1C" }} />
          <div className="flex justify-between w-[380px] md:w-[460px] -mt-[1px]">
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginLeft: "25%" }} />
            <div className="w-[2px] h-3" style={{ background: "#3A1C1C", marginRight: "25%" }} />
          </div>
        </div>

        {/* --- SECOND SHELF (SHIP) --- */}
        <div className="absolute left-[12%] md:left-[18%] top-[48%] flex flex-col items-center gap-1">
          <div className="flex items-end gap-6">
            <PencilCup className="hover-wobble" />
            <ShelfMonitor
              project={projects[1]}
              onClick={() => setActiveProject("ship")}
              isActive={activeProject === "ship"}
            />
            <CoffeeMug className="hover-wobble interactive-item" size={50} />
          </div>
          <div className="w-[360px] md:w-[420px] h-[2px]" style={{ background: "#3A1C1C" }} />
          <div className="flex justify-between w-[360px] md:w-[420px] -mt-[1px]">
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

      {/* Expanded monitor overlay */}
      {active && (
        <ExpandedMonitor project={active} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
