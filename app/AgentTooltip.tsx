import { motion } from "framer-motion";
import { LiquidGlassContainer } from "./LiquidGlassContainer";

type AgentTooltipProps = {
  query: string;
  onContactClick: () => void;
};

export function AgentTooltip({ query, onContactClick }: AgentTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.96 }}
      transition={{
        duration: 0.28,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <LiquidGlassContainer
        outerClassName="mb-0.5 bg-zinc-900/70 border border-white/10"
        innerClassName="rounded-2xl p-4 text-left"
      >
        <div className="space-y-3">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-200/70">
            Agent assistant
          </div>
          <p className="text-xs text-slate-50 sm:text-sm">
            Based on your search for{" "}
            <span className="font-semibold">{query}</span>, here are a few ways
            we can help you move faster.
          </p>

          <div className="grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              onClick={onContactClick}
              className="group flex h-full flex-col rounded-xl bg-white/5 p-3 text-left transition hover:bg-white/10"
            >
              <p className="text-[0.7rem] font-semibold text-slate-100">
                Tailored listings preview
              </p>
              <p className="mt-1 text-[0.7rem] text-slate-200/80">
                See curated homes that match your budget, timing, and lifestyle.
              </p>
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-200/80 group-hover:text-slate-50">
                View with an agent →
              </span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="group flex h-full flex-col rounded-xl bg-white/5 p-3 text-left transition hover:bg-white/10"
            >
              <p className="text-[0.7rem] font-semibold text-slate-100">
                Neighborhood insight
              </p>
              <p className="mt-1 text-[0.7rem] text-slate-200/80">
                Compare areas by schools, amenities, and local market trends.
              </p>
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-200/80 group-hover:text-slate-50">
                Explore with an agent →
              </span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="group flex h-full flex-col rounded-xl bg-white/5 p-3 text-left transition hover:bg-white/10"
            >
              <p className="text-[0.7rem] font-semibold text-slate-100">
                Off‑market opportunities
              </p>
              <p className="mt-1 text-[0.7rem] text-slate-200/80">
                Explore private listings you won&apos;t find on public portals.
              </p>
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-200/80 group-hover:text-slate-50">
                Get briefed by an agent →
              </span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <p className="text-[0.7rem] text-slate-200/80">
              Prefer to talk it through?
            </p>
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-50 backdrop-blur transition hover:bg-white/20"
            >
              Talk to an agent
            </button>
          </div>
        </div>
      </LiquidGlassContainer>
    </motion.div>
  );
}

