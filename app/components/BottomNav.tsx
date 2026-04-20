"use client";

import { useState } from "react";

interface BottomNavProps {
  currentScene: number;
  totalScenes: number;
  onPrev: () => void;
  onNext: () => void;
  sceneNames: string[];
}

export default function BottomNav({
  currentScene,
  totalScenes,
  onPrev,
  onNext,
  sceneNames,
}: BottomNavProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Scene menu overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(58, 28, 28, 0.3)", backdropFilter: "blur(4px)" }}
          />
          <div
            className="relative z-50 p-8"
            style={{ background: "#FAF5EE", border: "2px solid #3A1C1C", minWidth: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className="font-display text-xl mb-6"
              style={{ color: "#3A1C1C" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {sceneNames.map((name, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      // Scroll to scene
                      const container = document.querySelector(".scene-scroll");
                      container?.scrollTo({
                        left: i * window.innerWidth,
                        behavior: "smooth",
                      });
                    }}
                    className="flex items-center gap-3 w-full text-left py-2 transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: currentScene === i ? "#E85D75" : "#3A1C1C",
                    }}
                  >
                    <span style={{ opacity: 0.4 }}>0{i + 1}</span>
                    <span>{name}</span>
                    {currentScene === i && (
                      <span
                        className="w-1.5 h-1.5 rounded-full ml-auto"
                        style={{ background: "#E85D75" }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="bottom-nav">
        {/* Info / menu button */}
        <button onClick={() => setShowMenu(true)} title="Menu">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <line x1="0" y1="1" x2="14" y2="1" stroke="#FAF5EE" strokeWidth="1.5" />
            <line x1="0" y1="5" x2="14" y2="5" stroke="#FAF5EE" strokeWidth="1.5" />
            <line x1="0" y1="9" x2="14" y2="9" stroke="#FAF5EE" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Scene dots */}
        <div className="flex items-center gap-1.5 mx-2">
          {Array.from({ length: totalScenes }, (_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: currentScene === i ? 16 : 5,
                height: 5,
                background: currentScene === i ? "#FAF5EE" : "rgba(250,245,238,0.3)",
                borderRadius: currentScene === i ? 3 : 999,
              }}
            />
          ))}
        </div>

        {/* Prev */}
        <button onClick={onPrev} title="Previous" style={{ opacity: currentScene === 0 ? 0.3 : 1 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 1L3 6L8 11" stroke="#FAF5EE" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          title="Next"
          style={{ opacity: currentScene === totalScenes - 1 ? 0.3 : 1 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1L9 6L4 11" stroke="#FAF5EE" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
