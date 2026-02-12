/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { StackedHeaderVideo } from "./StackedHeaderVideo";
import { TextReveal } from "./TextReveal";
import { StatsBar } from "./StatsBar";
import { ArchitectureGrid } from "./ArchitectureGrid";
import { AboutSection } from "./AboutSection";
import { SurfaceOptions } from "./SurfaceOptions";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { HeaderMenu } from "./HeaderMenu";

export default function Home() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const viewportHeight = window.innerHeight || 0;
      const y = window.scrollY || window.pageYOffset || 0;
      setScrolledPastHero(y >= viewportHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100 font-sans">
      <HeaderMenu scrolled={scrolledPastHero} />
      <main className="flex min-h-screen w-full flex-col items-center justify-start">
        <StackedHeaderVideo />
        <StatsBar />
        <section className="relative flex w-full justify-center px-4">
          <div className="flex w-full items-start justify-center pt-14 pb-20">
            <TextReveal
              text="A design home that combines contemporary aesthetics and energy performance. Built with eco-friendly materials, it minimizes carbon footprint while offering optimal comfort."
            />
          </div>
        </section>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <ArchitectureGrid />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <AboutSection />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <SurfaceOptions />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

