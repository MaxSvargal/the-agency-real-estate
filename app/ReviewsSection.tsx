"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: "1",
    quote:
      "The entire process was quick and easy. Professional staff and clear communication every step of the way.",
    author: "Sarah M.",
    rating: 5,
    avatarId: 1,
  },
  {
    id: "2",
    quote:
      "Quick seamless process. Prompt response when I had a question. Closing was online and went great. Funds were available the next day.",
    author: "James T.",
    rating: 5,
    avatarId: 2,
  },
  {
    id: "3",
    quote:
      "I felt like I was shopping for a home on Amazon. It was great! It was ours and we didn't have to compete with anyone.",
    author: "Amanda M.",
    rating: 5,
    avatarId: 3,
  },
  {
    id: "4",
    quote:
      "The Agency really was a pretty easy way to sell this property. I think I got a fair value against the work I did NOT have to do.",
    author: "David K.",
    rating: 5,
    avatarId: 4,
  },
  {
    id: "5",
    quote:
      "We went from not being in the market to buy one week to being under contract on a home we loved the next!",
    author: "Kate R.",
    rating: 5,
    avatarId: 5,
  },
  {
    id: "6",
    quote:
      "We've heard of the term picture-perfect, that's how I'd describe the experience. Organized system and accessible documents.",
    author: "Joe G.",
    rating: 5,
    avatarId: 6,
  },
];

const SCROLL_DURATION = 180; // seconds for one full loop
const CARD_COUNT = REVIEWS.length * 2; // duplicated for infinite loop

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: stars }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 text-amber-400 sm:h-4 sm:w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getTranslateX(el: HTMLElement): number {
  const style = getComputedStyle(el);
  const matrix = style.transform;
  if (matrix === "none") return 0;
  const match = matrix.match(/matrix\((.+)\)/);
  if (!match) return 0;
  const values = match[1].split(",").map((s) => parseFloat(s.trim()));
  return values.length >= 6 ? values[4] : 0;
}

export function ReviewsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [manualScrollOffset, setManualScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBoundsRef = useRef({ min: 0, max: 0 });

  // Infinite loop: duplicate reviews so when first set scrolls out, second set continues seamlessly
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];
  const trackWidth = `calc(${CARD_COUNT} * (var(--reviews-card-w) + var(--reviews-gap)))`;

  // When hover starts, capture current animation position and track width for scroll bounds
  useEffect(() => {
    if (!isPaused || !trackRef.current || !containerRef.current) return;
    const track = trackRef.current;
    const container = containerRef.current;

    const animationOffsetPx = getTranslateX(track); // negative as content moves left
    const singleSetWidthPx = track.offsetWidth / 2;
    const viewportWidth = container.clientWidth;

    // Total scrollable distance for one full set of cards
    const maxScrollForSet = Math.max(singleSetWidthPx - viewportWidth, 0);

    scrollBoundsRef.current = {
      // Allow moving back to the very start of the track
      min: animationOffsetPx,
      // And forward until the last card of the first set is fully visible
      max: animationOffsetPx + maxScrollForSet,
    };
  }, [isPaused]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!isPaused) return;
      e.preventDefault();
      const { min, max } = scrollBoundsRef.current;
      setManualScrollOffset((prev) => {
        const next = prev + e.deltaY;
        return Math.max(min, Math.min(max, next));
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isPaused]);

  return (
    <section
      id="reviews"
      className="w-full overflow-hidden bg-zinc-100 py-10 sm:py-14 md:py-14 [--reviews-card-w:min(85vw,260px)] [--reviews-gap:12px] sm:[--reviews-card-w:280px] sm:[--reviews-gap:16px] md:[--reviews-card-w:300px] md:[--reviews-gap:20px] lg:[--reviews-card-w:320px] lg:[--reviews-gap:24px]"
    >
      <div className="mb-6 px-4 sm:mb-8 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl md:text-3xl lg:text-4xl">
          Customer reviews
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="flex overflow-hidden py-1 sm:py-2">
          <div
            className="flex shrink-0 transition-transform duration-0"
            style={{ transform: `translateX(${-manualScrollOffset}px)` }}
          >
            <div
              ref={trackRef}
              className="flex shrink-0"
              style={{
                width: trackWidth,
                animation: `reviews-scroll ${SCROLL_DURATION}s linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
            {duplicatedReviews.map((review, index) => (
              <motion.article
                key={`${review.id}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="flex shrink-0 pl-4 first:pl-4 last:pr-4 sm:pl-6 sm:first:pl-6 sm:last:pr-6 md:first:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] md:last:pr-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
                style={{
                  width: "var(--reviews-card-w)",
                  marginRight: "var(--reviews-gap)",
                }}
              >
                <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:max-h-[280px] md:py-4 md:px-5">
                  <StarRating stars={review.rating} />
                  <blockquote className="mt-3 flex-1 min-h-0 text-[13px] leading-relaxed text-zinc-700 sm:mt-4 sm:text-sm md:mt-3 md:line-clamp-6 md:text-base">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-3 flex shrink-0 items-center gap-3 sm:mt-4 md:mt-3">
                    <img
                      src={`https://i.pravatar.cc/96?img=${review.avatarId}`}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-zinc-100 sm:h-10 sm:w-10"
                    />
                    <span className="text-xs font-medium text-zinc-900 sm:text-sm">
                      {review.author}
                    </span>
                  </footer>
                </div>
              </motion.article>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
