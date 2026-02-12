 "use client"

import { useEffect, useRef, useState } from "react";
import { LiquidGlassSearchBar } from "./LiquidGlassSearchBar";
import { HeaderMenu } from "./HeaderMenu";

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
      <HeaderMenu />
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
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight tracking-tight">
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

