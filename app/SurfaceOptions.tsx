"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const surfaceCardMotionProps = {
  // Keep cards always visible, just nudge them up/down with scroll
  initial: { y: 24 },
  whileInView: { y: -6 },
  viewport: { amount: 0.25, once: false },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function SurfaceOptions() {
  return (
    <section id="accessories" className="bg-white w-full">
      <div className="m-auto">
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
          Surface Options
        </h2>
      </div>

      <div className="pb-24">
        {/* Mobile horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          <motion.div
            {...surfaceCardMotionProps}
            className="group flex-shrink-0 w-[75vw] snap-center"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Compact Model"
                  src="/hero-side-1.png"
                  fill
                  sizes="75vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Compact Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    120m² living space with optimal energy efficiency
                  </p>
                </div>
                <span className="text-lg font-medium text-zinc-900">
                  $285,000
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...surfaceCardMotionProps}
            className="group flex-shrink-0 w-[75vw] snap-center"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Standard Model"
                  src="/hero-side-2.png"
                  fill
                  sizes="75vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Standard Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    180m² perfect balance of space and sustainability
                  </p>
                </div>
                <span className="text-lg font-medium text-zinc-900">
                  $395,000
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...surfaceCardMotionProps}
            className="group flex-shrink-0 w-[75vw] snap-center"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Premium Model"
                  src="/hero-side-4.png"
                  fill
                  sizes="75vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Premium Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    250m² expansive design with maximum comfort
                  </p>
                </div>
                <span className="text-lg font-medium text-zinc-900">
                  $525,000
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          <motion.div {...surfaceCardMotionProps} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Compact Model"
                  src="/hero-side-1.png"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Compact Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    120m² living space with optimal energy efficiency
                  </p>
                </div>
                <span className="font-medium text-zinc-900 text-2xl">
                  $285,000
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...surfaceCardMotionProps} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Standard Model"
                  src="/hero-side-2.png"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Standard Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    180m² perfect balance of space and sustainability
                  </p>
                </div>
                <span className="font-medium text-zinc-900 text-2xl">
                  $395,000
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...surfaceCardMotionProps} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <div className="relative h-full w-full">
                <Image
                  alt="Premium Model"
                  src="/hero-side-4.png"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-zinc-900">
                    Premium Model
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    250m² expansive design with maximum comfort
                  </p>
                </div>
                <span className="font-medium text-zinc-900 text-2xl">
                  $525,000
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}

