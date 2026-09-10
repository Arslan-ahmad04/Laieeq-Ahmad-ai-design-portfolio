"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { AnimationPreset } from "@/types/design";

const motionPresets = {
  none: { y: 0, duration: 0 },
  subtle: { y: 12, duration: 0.4 },
  smooth: { y: 22, duration: 0.65 },
  creative: { y: 34, duration: 0.8 },
  luxury: { y: 18, duration: 1 },
  technical: { y: 18, duration: 0.45 },
} satisfies Record<AnimationPreset, { y: number; duration: number }>;

export function AnimatedSection({ id, className = "", children, enabled, preset }: { id: string; className?: string; children: ReactNode; enabled: boolean; preset: AnimationPreset }) {
  const reduceMotion = useReducedMotion();
  const setting = motionPresets[enabled ? preset : "none"];
  const shouldAnimate = enabled && preset !== "none" && !reduceMotion;
  return (
    <motion.section
      id={id}
      className={`content-section ${className}`}
      initial={shouldAnimate ? { opacity: 0, y: setting.y } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: setting.duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
