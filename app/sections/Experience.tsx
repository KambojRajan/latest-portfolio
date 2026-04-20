"use client";

import { useState } from "react";
import { Terminal, Cloud } from "@/app/components/SVGIllustrations";

const metrics = [
  { num: "65,000+", label: "SBI ATMs", detail: "Daily reconciliation" },
  { num: "50%", label: "Manual work cut", detail: "Event-driven alerting" },
  { num: "5 GB+", label: "S3 transfers", detail: "Multipart + retry" },
  { num: "55%", label: "Test coverage", detail: "JUnit / MockMvc" },
];

const timeline = [
  {
    title: "Cash Reconciliation Engine",
    desc: "Spring Batch parallel jobs processing daily for 65,000+ SBI ATMs while maintaining consistency.",
  },
  {
    title: "Manual Recon Module",
    desc: "100% exception coverage across Discard, Match, Unmatch, and voucher workflows.",
  },
  {
    title: "Event-Driven Notifications",
    desc: "Real-time alerting across 10,000+ remote ATM nodes, replacing slow polling.",
  },
  {
    title: "S3 Multipart Architecture",
    desc: "Retry logic + checksum verification for secure 5 GB+ file transfers.",
  },
  {
    title: "Test Data Framework",
    desc: "Builder pattern + Hibernate, cutting SQL fixture dependency by 90%.",
  },
];

const tech = [
  "Spring Boot", "Spring Batch", "Java", "JUnit",
  "AWS S3", "Hibernate", "Oracle", "MySQL",
];

export default function ExperienceScene() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <div className="scene" style={{ background: "#FAF5EE" }}>
      {/* Side bars */}
      <div className="absolute top-0 left-0 w-2 h-full" style={{ background: "#3A1C1C" }} />
      <div className="absolute top-0 right-0 w-2 h-full" style={{ background: "#3A1C1C" }} />

      <div className="flex-1 flex overflow-hidden">
        {/* Left panel: Experience wall */}
        <div className="flex-1 flex flex-col px-8 md:px-14 py-8 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <span className="dot-accent" />
              <span className="mono-label">EXPERIENCE</span>
            </div>
            <h2
              className="font-display leading-[0.95] mb-2"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#3A1C1C" }}
            >
              Where the work
              <br />
              <em>runs at scale</em>
            </h2>
          </div>

          {/* Company badge */}
          <div
            className="inline-flex items-center gap-3 mb-6 px-4 py-2.5 self-start"
            style={{ border: "2px solid #3A1C1C" }}
          >
            <span className="font-display text-lg" style={{ color: "#3A1C1C" }}>
              Osfin.ai
            </span>
            <span className="font-mono text-[0.6rem]" style={{ color: "#8B6F6F" }}>
              DEC 2024 — PRESENT
            </span>
          </div>

          {/* Metrics as cards */}
          <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 transition-transform hover:-translate-y-1"
                style={{ border: "1.5px solid #3A1C1C" }}
              >
                <div
                  className="font-display text-2xl mb-0.5"
                  style={{ color: "#3A1C1C" }}
                >
                  {m.num}
                </div>
                <div className="font-mono text-[0.6rem] tracking-wider uppercase" style={{ color: "#8B6F6F" }}>
                  {m.label}
                </div>
                <div className="font-mono text-[0.55rem] mt-1" style={{ color: "#C4AAAA" }}>
                  {m.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline entries */}
          <div className="space-y-0 max-w-lg">
            {timeline.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setExpandedItem(expandedItem === i ? null : i)}
                  className="w-full text-left py-3 flex items-start gap-3 group transition-opacity hover:opacity-70"
                >
                  {/* Dot */}
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: expandedItem === i ? "#E85D75" : "#3A1C1C" }}
                  />
                  <div>
                    <h4 className="font-mono text-[0.72rem] tracking-wider uppercase" style={{ color: "#3A1C1C" }}>
                      {item.title}
                    </h4>
                    {expandedItem === i && (
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "#8B6F6F" }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                  {/* Expand indicator */}
                  <span
                    className="ml-auto font-mono text-[0.6rem] mt-1 flex-shrink-0 transition-transform"
                    style={{
                      color: "#C4AAAA",
                      transform: expandedItem === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                {/* Divider line */}
                {i < timeline.length - 1 && (
                  <div className="ml-1 w-px h-4" style={{ background: "#C4AAAA", marginLeft: "3px" }} />
                )}
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.55rem] tracking-wider uppercase px-3 py-1.5"
                style={{ border: "1px solid #3A1C1C", color: "#5C3333" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: Terminal illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center w-[40%] relative">
          <Cloud className="absolute top-[10%] right-[15%] cloud-float" size={80} />
          <Terminal />
          <p
            className="font-mono text-[0.55rem] mt-6 text-center max-w-[200px]"
            style={{ color: "#C4AAAA", letterSpacing: "0.08em" }}
          >
            &quot;THE REAL RECONCILIATION ENGINE WAS THE BUGS WE FIXED ALONG THE WAY.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
