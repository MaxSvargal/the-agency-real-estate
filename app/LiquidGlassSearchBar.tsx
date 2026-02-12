"use client";

import styles from "./LiquidGlassSearchBar.module.css";

export function LiquidGlassSearchBar() {
  return (
    <div className="pb-12 pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-4">
      <div className="pointer-events-auto max-w-2xl w-full" aria-label="Property search input">
        <div className="relative z-10 w-full">
          <form
            className="flex flex-col gap-2 text-xs sm:text-sm text-white"
            action="#"
            method="GET"
          >
            <div className="flex w-full items-center gap-2 pb-0.5">
              <div
                className="relative w-full overflow-hidden rounded-full shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]"
              >
                <div className={styles.inputEffect} />
                <div className={styles.inputTint} />
                <div className={styles.inputShine} />
                <div className="relative z-10 flex items-center rounded-full px-4">
                  <input
                    type="text"
                    placeholder="Enter a location, address, listing ID, or ask a question to agent."
                    className="h-12 w-full rounded-full border-0 bg-transparent pr-10 pl-1 text-[0.85rem] sm:text-[0.95rem] font-medium text-white outline-none placeholder:text-slate-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-0 bg-transparent p-0 text-slate-200 hover:text-white focus:outline-none cursor-pointer"
                    aria-label="Search"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M21 21L16.65 16.65"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* SVG filter definition for liquid glass distortion */}
        <svg className="hidden">
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves="1"
              seed="5"
              result="turbulence"
            />
            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
              <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
              <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting
              in="softMap"
              surfaceScale="5"
              specularConstant="1"
              specularExponent="100"
              lightingColor="white"
              result="specLight"
            >
              <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite
              in="specLight"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="litImage"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale="120"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </div>
    </div>
  );
}

