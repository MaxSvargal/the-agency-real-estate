"use client";

import styles from "./LiquidGlassSearchBar.module.css";

export function LiquidGlassSearchBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-4">
      <div
        className={`pointer-events-auto max-w-4xl w-full ${styles.wrapper}`}
        aria-label="Property search"
      >
        <div className={styles.effect} />
        <div className={styles.tint} />
        <div className={styles.shine} />

        <div className={styles.content}>
          <form
            className="flex flex-col gap-2 text-xs sm:text-sm text-slate-900"
            action="#"
            method="GET"
          >


            <div className="flex w-full flex-wrap items-center gap-2 text-[0.75rem]">
              <div
                className="inline-flex items-center rounded-full bg-slate-900/10 px-0.5 py-0.5 backdrop-blur-sm"
                aria-label="Listing type"
              >
                <button
                  type="button"
                  className="rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-colors"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="rounded-full px-3 py-1 text-[0.7rem] font-medium text-slate-800 hover:bg-slate-900/10 transition-colors"
                >
                  Rent
                </button>
              </div>

              {/* <div className="flex flex-1 flex-wrap items-center gap-1.5 sm:ml-2">
                {["Location", "Price", "Beds", "Baths", "More"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-medium text-slate-800 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:bg-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(15,23,42,0.12)] hover:-translate-y-px"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="ml-auto rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-4 py-2 text-[0.75rem] font-semibold text-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.5)] transition hover:-translate-y-px hover:brightness-110 hover:shadow-[0_10px_22px_rgba(15,23,42,0.75)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(15,23,42,0.65)] sm:px-5"
              >
                Search
              </button> */}
            </div>

            <div className="flex w-full items-center gap-2 pb-0.5">
              <input
                type="text"
                placeholder="Search by address, city, or ZIP"
                className="h-10 flex-1 rounded-full border-0 bg-white/95 px-4 text-[0.8rem] sm:text-sm font-medium text-slate-900 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] outline-none placeholder:text-slate-500"
              />
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
              lighting-color="white"
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

