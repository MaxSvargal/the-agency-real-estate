 "use client";

import { FormEvent, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LiquidGlassContainer } from "./LiquidGlassContainer";
import { AgentTooltip } from "./AgentTooltip";

export function LiquidGlassSearchBar() {
  const [query, setQuery] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query.trim()) {
      setShowTooltip(false);
      return;
    }

    setShowTooltip(true);
  };

  const handleContactClick = () => {
    const target =
      document.getElementById("contact") ||
      document.getElementById("contact-section");

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOverlayClick = () => {
    inputRef.current?.blur();
    setShowTooltip(false);
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-4 pb-12">
      <div
        className="pointer-events-auto w-full max-w-2xl"
        aria-label="Property search input"
      >
        {showTooltip && (
          <div
            className="fixed inset-0 z-0 cursor-pointer"
            onClick={handleOverlayClick}
          />
        )}

        <div className="relative z-10 w-full">
          <form
            className="flex flex-col gap-3 text-xs text-white sm:text-sm"
            action="#"
            method="GET"
            onSubmit={handleSubmit}
          >
            <AnimatePresence>
              {showTooltip && (
                <AgentTooltip
                  key="agent-tooltip"
                  query={query}
                  onContactClick={handleContactClick}
                />
              )}
            </AnimatePresence>

            <div className="flex w-full items-center gap-2 pb-0.5">
              <LiquidGlassContainer innerClassName="flex items-center rounded-full px-4">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter a location, address, listing ID, or ask a question to AI."
                  className="h-12 w-full rounded-full border-0 bg-transparent pl-1 pr-10 text-[0.85rem] font-medium text-white outline-none placeholder:text-slate-300 sm:text-[0.95rem]"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-slate-200 hover:text-white focus:outline-none"
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
              </LiquidGlassContainer>
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

