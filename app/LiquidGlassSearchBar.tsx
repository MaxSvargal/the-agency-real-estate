"use client";

import styles from "./LiquidGlassSearchBar.module.css";

export function LiquidGlassSearchBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-4">
      <div
        className="pointer-events-auto max-w-2xl w-full"
        aria-label="Property search input"
      >
        <div className={styles.content}>
          <form
            className="flex flex-col gap-2 text-xs sm:text-sm text-white"
            action="#"
            method="GET"
          >
            <div className="flex w-full items-center gap-2 pb-0.5">
              <div className={styles.inputWrapper}>
                <div className={styles.inputEffect} />
                <div className={styles.inputTint} />
                <div className={styles.inputShine} />
                <div className={`${styles.inputInner} flex items-center`}>
                  <input
                    type="text"
                    placeholder="Enter a location, address, listing ID, or ask a question to agent."
                    className="h-12 w-full rounded-full border-0 bg-transparent px-5 text-[0.85rem] sm:text-[0.95rem] font-medium text-white outline-none placeholder:text-slate-300"
                  />
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

