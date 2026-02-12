"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const topVideoRef = useRef<HTMLVideoElement | null>(null);
  const bottomVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isTopTransparent, setIsTopTransparent] = useState(false);
  const [isBottomTransparent, setIsBottomTransparent] = useState(true);

  useEffect(() => {
    const topVid = topVideoRef.current;
    const bottomVid = bottomVideoRef.current;

    if (!topVid || !bottomVid) return;

    const transitionTime = 1; // seconds before end to start cross-fade
    const hasTopTransitionedRef = { current: false } as { current: boolean };
    const hasBottomTransitionedRef = {
      current: false,
    } as { current: boolean };

    const handleTopTimeUpdate = () => {
      if (!topVid.duration) return;

      if (
        topVid.currentTime > topVid.duration - transitionTime &&
        !hasTopTransitionedRef.current
      ) {
        hasTopTransitionedRef.current = true;

        // Start the bottom video slightly before the top one ends
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

        // Reset bottom transition flag for the next loop
        hasBottomTransitionedRef.current = false;
      }
    };

    const handleBottomTimeUpdate = () => {
      if (!bottomVid.duration) return;

      if (
        bottomVid.currentTime > bottomVid.duration - transitionTime &&
        !hasBottomTransitionedRef.current
      ) {
        hasBottomTransitionedRef.current = true;

        // Start the top video slightly before the bottom one ends
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

        // Reset top transition flag for the next loop
        hasTopTransitionedRef.current = false;
      }
    };

    const handleBottomCanPlayThrough = () => {
      // Underlying video is buffered and ready; helps avoid "black flash"
      // console.log("Underlying video ready!");
    };

    topVid.addEventListener("timeupdate", handleTopTimeUpdate);
    bottomVid.addEventListener("timeupdate", handleBottomTimeUpdate);
    bottomVid.addEventListener("canplaythrough", handleBottomCanPlayThrough);

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
      topVid.removeEventListener("timeupdate", handleTopTimeUpdate);
      bottomVid.removeEventListener("timeupdate", handleBottomTimeUpdate);
      bottomVid.removeEventListener(
        "canplaythrough",
        handleBottomCanPlayThrough,
      );
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center bg-white py-32 px-4 dark:bg-black sm:px-16">
        <div className="w-full max-w-[640px]">
          <div className="relative w-full overflow-hidden bg-black aspect-video">
            {/* Top video (forward) */}
            <video
              ref={topVideoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                isTopTransparent ? "opacity-0" : "opacity-100"
              }`}
              preload="auto"
              playsInline
              muted
            >
              <source src="/header.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Bottom video (reverse or restart) */}
            <video
              ref={bottomVideoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                isBottomTransparent ? "opacity-0" : "opacity-100"
              }`}
              preload="auto"
              playsInline
              muted
            >
              {/* 
                If you have a separate reversed file, change this to that file.
                For example: <source src="/header-reverse.mp4" type="video/mp4" />
              */}
              <source src="/header.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
