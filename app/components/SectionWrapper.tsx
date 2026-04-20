"use client";

import { CSSProperties } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

// Simplified — scenes handle their own layout now
export default function SectionWrapper({ id, className = "", style, children }: SectionWrapperProps) {
  return (
    <section id={id} style={style} className={className}>
      {children}
    </section>
  );
}
