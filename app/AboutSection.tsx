import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-background">
      <div className="relative w-full">
        {/* Maintain cinematic feel on desktop but avoid overly tall hero on small screens */}
        <div className="relative aspect-4/5 sm:aspect-3/4 md:aspect-video">
          <Image
            alt="Modern corten steel architecture in natural landscape"
            src="/testimonial-house.png"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="pointer-events-auto mx-auto flex w-full max-w-6xl px-6 pb-12 text-center sm:px-8 sm:pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-28">
            <p className="mx-auto max-w-4xl text-balance text-lg leading-relaxed text-white sm:text-xl sm:leading-relaxed md:text-3xl md:leading-snug lg:text-[2.5rem] lg:leading-snug">
              A passive house that combines contemporary design with
              environmental respect — built for those who refuse to choose
              between modern comfort and ecological responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

