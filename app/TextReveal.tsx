"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

type WordProps = {
  children: ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
  targetOpacity: number;
};

function Word({ children, range, progress, targetOpacity }: WordProps) {
  // Local progress for this word only, clamped so it doesn't "ghost" before/after its window
  const localProgress = useTransform(progress, range, [0, 1], { clamp: true });

  // Fade each word in up to its own target opacity
  const opacity = useTransform(localProgress, [0, 1], [0, targetOpacity], {
    clamp: true,
  });

  // Stronger blur at the start for a clearer word-by-word reveal
  const blurAmount = useTransform(localProgress, [0, 1], [24, 0], {
    clamp: true,
  });
  const blurFilter = useTransform(blurAmount, (v) => `blur(${v}px)`);

  return (
    <span className="relative inline-block mr-2">
      <motion.span
        style={{
          opacity,
          filter: blurFilter,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function TextReveal({ text, className }: TextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Slower, smoother: spread animation over a longer scroll window
    offset: ["start 0.95", "start 0.15"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className={[
        "flex flex-wrap text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-black max-w-4xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {words.map((word, i) => {
        // Spread each word evenly across the full scroll progress for a slower per-word reveal
        const start = i / words.length;
        const end = start + 1 / words.length;

        // Keep all words visible at the end but with a slight opacity gradient across the line
        const normalizedIndex = words.length > 1 ? i / (words.length - 1) : 1;
        const targetOpacity = 0.6 + normalizedIndex * 0.3; // 0.6 → 0.9 from first to last word

        return (
          <Word
            key={`${word}-${i}`}
            range={[start, end]}
            progress={scrollYProgress}
            targetOpacity={targetOpacity}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

