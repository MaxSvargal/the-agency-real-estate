"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassSearchBar } from "./LiquidGlassSearchBar";

export function StackedHeaderVideo() {
  const topVideoRef = useRef<HTMLVideoElement | null>(null);
  const bottomVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isTopTransparent, setIsTopTransparent] = useState(false);
  const [isBottomTransparent, setIsBottomTransparent] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
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
      .then(() => {
        // Once playback starts, we can safely hide the placeholder image
        setIsVideoReady(true);
      })
      .catch(() => {
        // Ignore autoplay errors; user interaction may be required
        // The placeholder will be hidden as soon as the user presses play
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
    <section className="relative flex h-screen min-h-dvh w-full items-center justify-center overflow-hidden bg-black">
      <video
        ref={bottomVideoRef}
        className={`absolute inset-0 block h-full w-full origin-center scale-120 sm:scale-100 lg:scale-120 object-cover translate-y-[-18vh] sm:translate-y-0 transition duration-3000 ease-in-out ${
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
        className={`absolute inset-0 block h-full w-full origin-center scale-120 sm:scale-100 lg:scale-120 object-cover translate-y-[-18vh] sm:translate-y-0 transition duration-3000 ease-in-out ${
          isTopTransparent ? "opacity-0" : "opacity-100"
        }`}
        preload="auto"
        playsInline
        muted
        onLoadedData={() => setIsVideoReady(true)}
        onPlay={() => setIsVideoReady(true)}
      >
        <source src="/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Image
        src="/mono-1.jpg"
        alt="Loading hero background"
        fill
        sizes="100vw"
        className={`absolute inset-0 block h-full w-full origin-center scale-120 sm:scale-100 lg:scale-115 object-cover translate-y-[-18vh] sm:translate-y-0 transition duration-3000 ease-in-out ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex w-full justify-center px-6 sm:px-8 md:px-12 lg:px-20 -translate-y-10 sm:translate-y-0 transition-transform duration-500">
        <div className="max-w-5xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight tracking-tight leading-tight">
            Make the easy move.
          </h1>
          <p className="mt-3 text-lg sm:mt-4 sm:text-xl lg:text-2xl text-white/80">
            Your window to the world's finest real estate
          </p>
        </div>
      </div>
      <LiquidGlassSearchBar />
    </section>
  );
}

