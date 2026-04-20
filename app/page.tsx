"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import HeroScene from "@/app/sections/Hero";
import ProjectsScene from "@/app/sections/Projects";
import ExperienceScene from "@/app/sections/Experience";
import SkillsScene from "@/app/sections/Skills";
import CreativeScene from "@/app/sections/Creative";
import ContactScene from "@/app/sections/Contact";
import BottomNav from "@/app/components/BottomNav";

const SCENE_NAMES = [
  "Welcome",
  "Projects",
  "Experience",
  "Skills & About",
  "Beyond Code",
  "Contact",
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [visitedScenes, setVisitedScenes] = useState<Set<number>>(new Set([0]));

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const sceneWidth = window.innerWidth;
    const scene = Math.round(scrollLeft / sceneWidth);
    if (scene !== currentScene) {
      setCurrentScene(scene);
      setVisitedScenes((prev) => new Set(prev).add(scene));
    }
  }, [currentScene]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToScene = useCallback((idx: number) => {
    scrollRef.current?.scrollTo({
      left: idx * window.innerWidth,
      behavior: "smooth",
    });
  }, []);

  const handlePrev = useCallback(() => {
    if (currentScene > 0) scrollToScene(currentScene - 1);
  }, [currentScene, scrollToScene]);

  const handleNext = useCallback(() => {
    if (currentScene < SCENE_NAMES.length - 1) scrollToScene(currentScene + 1);
  }, [currentScene, scrollToScene]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  return (
    <main>
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{
          width: `${((currentScene + 1) / SCENE_NAMES.length) * 100}%`,
        }}
      />

      {/* Scene number indicator — top right */}
      <div
        className="fixed top-4 right-12 z-50 font-mono text-[0.6rem] tracking-wider"
        style={{ color: "#C4AAAA" }}
      >
        <span style={{ color: "#3A1C1C", fontWeight: 600 }}>
          0{currentScene + 1}
        </span>
        {" / "}0{SCENE_NAMES.length}
      </div>

      {/* Horizontal scroll container */}
      <div ref={scrollRef} className="scene-scroll">
        <HeroScene />
        <ProjectsScene />
        <ExperienceScene />
        <SkillsScene />
        <CreativeScene />
        <ContactScene />
      </div>

      {/* Bottom navigation */}
      <BottomNav
        currentScene={currentScene}
        totalScenes={SCENE_NAMES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        sceneNames={SCENE_NAMES}
      />
    </main>
  );
}
