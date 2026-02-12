import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-background">
      <div className="relative aspect-[16/9] w-full">
        <Image
          alt="Modern corten steel architecture in natural landscape"
          src="/testimonial-house.png"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <p className="mx-auto max-w-5xl text-center text-2xl leading-relaxed text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
            A passive house that combines contemporary design with environmental
            respect — built for those who refuse to choose between modern
            comfort and ecological responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}

