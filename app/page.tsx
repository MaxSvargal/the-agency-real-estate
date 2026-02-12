import { StackedHeaderVideo } from "./StackedHeaderVideo";
import { TextReveal } from "./TextReveal";
import { StatsBar } from "./StatsBar";
import { ArchitectureGrid } from "./ArchitectureGrid";
import { AboutSection } from "./AboutSection";
import { SurfaceOptions } from "./SurfaceOptions";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className=" min-h-screen justify-center bg-zinc-100 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-start">
        <StackedHeaderVideo />
        <StatsBar />
        <section className="relative w-full flex justify-center px-4">
          <div className="w-full flex items-start justify-center pt-14 pb-20">
            <TextReveal
              text="A design home that combines contemporary aesthetics and energy performance. Built with eco-friendly materials, it minimizes carbon footprint while offering optimal comfort."
            />
          </div>
        </section>
        <ArchitectureGrid />
        <AboutSection />
        <SurfaceOptions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

