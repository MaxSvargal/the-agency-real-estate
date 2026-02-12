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
    <section id="accessories" className="w-full bg-white">
      <div className="w-full px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
        <header className="mb-10 text-left sm:mb-12 md:mb-14">
          <h2 className="text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
            Surface Options
          </h2>
        </header>

        <div className="pb-4 md:pb-0">
          {/* Mobile horizontal scroll */}
          <div className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 md:hidden snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            <motion.div
              {...surfaceCardMotionProps}
              className="group w-[78vw] shrink-0 snap-center sm:w-[70vw]"
            >
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Compact Model"
                    src="/hero-side-1.png"
                    fill
                    sizes="(max-width: 768px) 78vw, 70vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium leading-snug text-zinc-900 sm:text-lg">
                      Compact Model
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      120m² living space with optimal energy efficiency
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-zinc-900 sm:text-lg">
                    $285,000
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...surfaceCardMotionProps}
              className="group w-[78vw] shrink-0 snap-center sm:w-[70vw]"
            >
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Standard Model"
                    src="/hero-side-2.png"
                    fill
                    sizes="(max-width: 768px) 78vw, 70vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium leading-snug text-zinc-900 sm:text-lg">
                      Standard Model
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      180m² perfect balance of space and sustainability
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-zinc-900 sm:text-lg">
                    $395,000
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...surfaceCardMotionProps}
              className="group w-[78vw] shrink-0 snap-center sm:w-[70vw]"
            >
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Premium Model"
                    src="/hero-side-4.png"
                    fill
                    sizes="(max-width: 768px) 78vw, 70vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="py-4 sm:py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium leading-snug text-zinc-900 sm:text-lg">
                      Premium Model
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      250m² expansive design with maximum comfort
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-zinc-900 sm:text-lg">
                    $525,000
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tablet / Desktop grid */}
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            <motion.div {...surfaceCardMotionProps} className="group">
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Compact Model"
                    src="/hero-side-1.png"
                    fill
                    sizes="(min-width: 1024px) 20vw, 30vw"
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
                  <span className="text-2xl font-medium text-zinc-900">
                    $285,000
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div {...surfaceCardMotionProps} className="group">
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Standard Model"
                    src="/hero-side-2.png"
                    fill
                    sizes="(min-width: 1024px) 20vw, 30vw"
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
                  <span className="text-2xl font-medium text-zinc-900">
                    $395,000
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div {...surfaceCardMotionProps} className="group">
              <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <div className="relative h-full w-full">
                  <Image
                    alt="Premium Model"
                    src="/hero-side-4.png"
                    fill
                    sizes="(min-width: 1024px) 20vw, 30vw"
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
                  <span className="text-2xl font-medium text-zinc-900">
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

