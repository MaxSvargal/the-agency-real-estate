"use client"

import { useEffect, useRef, useState } from "react";
import { LiquidGlassSearchBar } from "./LiquidGlassSearchBar";

export function StackedHeaderVideo() {
  const topVideoRef = useRef<HTMLVideoElement | null>(null);
  const bottomVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isTopTransparent, setIsTopTransparent] = useState(false);
  const [isBottomTransparent, setIsBottomTransparent] = useState(true);
  const pauseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const topVid = topVideoRef.current;
    const bottomVid = bottomVideoRef.current;

    if (!topVid || !bottomVid) return;

    const pauseOnLastFrameDuration = 0.25; // seconds to pause on the last frame

    const handleTopEnded = () => {
      if (!topVid.duration) return;

      // Ensure we are visually on the last frame
      topVid.currentTime = topVid.duration;

      // Keep the top video visible and the bottom hidden during the pause
      setIsTopTransparent(false);
      setIsBottomTransparent(true);

      if (pauseTimeoutRef.current !== null) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = window.setTimeout(() => {
        // After the pause, start the bottom video and begin the fade
        if (bottomVid.paused) {
          bottomVid.currentTime = 0;
          bottomVid
            .play()
            .catch(() => {
              // Ignore autoplay errors; user interaction may be required
            });
        }

        // Cross-fade: hide top, reveal bottom
        setIsTopTransparent(true);
        setIsBottomTransparent(false);
      }, pauseOnLastFrameDuration * 1000);
    };

    const handleBottomEnded = () => {
      if (!bottomVid.duration) return;

      // Ensure we are visually on the last frame of the bottom video
      bottomVid.currentTime = bottomVid.duration;

      // Keep the bottom video visible and the top hidden during the pause
      setIsBottomTransparent(false);
      setIsTopTransparent(true);

      if (pauseTimeoutRef.current !== null) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = window.setTimeout(() => {
        // After the pause, start the top video and begin the fade back
        if (topVid.paused) {
          topVid.currentTime = 0;
          topVid
            .play()
            .catch(() => {
              // Ignore autoplay errors; user interaction may be required
            });
        }

        // Cross-fade: hide bottom, reveal top
        setIsBottomTransparent(true);
        setIsTopTransparent(false);
      }, pauseOnLastFrameDuration * 1000);
    };

    topVid.addEventListener("ended", handleTopEnded);
    bottomVid.addEventListener("ended", handleBottomEnded);

    // Ensure videos are muted so autoplay is allowed
    topVid.muted = true;
    bottomVid.muted = true;

    // Start the sequence with the top video visible and bottom hidden
    setIsTopTransparent(false);
    setIsBottomTransparent(true);

    topVid
      .play()
      .catch(() => {
        // Ignore autoplay errors; user interaction may be required
      });

    return () => {
      topVid.removeEventListener("ended", handleTopEnded);
      bottomVid.removeEventListener("ended", handleBottomEnded);
      if (pauseTimeoutRef.current !== null) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute top-6 left-1/2 z-20 flex -translate-x-1/2 items-center ml-8 opacity-50">
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32"
        >
          <path
            d="M50.168 41.895V64.06h1.977V41.895a4.454 4.454 0 0 0-4.45-4.449 4.428 4.428 0 0 0-3.16 1.318l-1.076 1.12-12.517 13.275H14.56l-.566-.034h-.059a5.408 5.408 0 0 0-5.403 5.4v10.057a4.454 4.454 0 0 0 4.45 4.45 4.43 4.43 0 0 0 3.162-1.322l2.454-2.578 13.197-13.997h10.884V53.16h-9.023l11.231-11.912 1.058-1.101a2.454 2.454 0 0 1 1.747-.723 2.476 2.476 0 0 1 2.473 2.474l.003-.002Z"
            fill="#fff"
          />
        </svg>
      </div>
      <video
        ref={bottomVideoRef}
        className={`absolute inset-0 block h-full w-full origin-center scale-120 sm:scale-100 lg:scale-120 object-contain sm:object-cover transition-opacity duration-3000 ease-in-out ${
          isBottomTransparent ? "opacity-0" : "opacity-100"
        }`}
        preload="auto"
        playsInline
        muted
      >
        <source src="/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={topVideoRef}
        className={`absolute inset-0 block h-full w-full origin-center scale-120 sm:scale-100 lg:scale-120 object-contain sm:object-cover transition-opacity duration-3000 ease-in-out ${
          isTopTransparent ? "opacity-0" : "opacity-100"
        }`}
        preload="auto"
        playsInline
        muted
      >
        <source src="/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-2 text-5xl sm:text-6xl lg:text-8xl font-extralight tracking-tight ">
          Make the easy move.
        </h1>
        <p className="mx-auto leading-16 text-xl sm:text-xl lg:text-2xl text-white/80">
          Your window to the world's finest real estate
        </p>
      </div>
      <LiquidGlassSearchBar />
    </section>
  );
}

