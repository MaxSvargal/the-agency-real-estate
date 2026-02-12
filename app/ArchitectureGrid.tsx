import Image from "next/image";

export function ArchitectureGrid() {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-20 p-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full auto-rows-[180px] md:auto-rows-[220px]">
          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-2 row-span-2 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 1"
                src="/4312e1bb-e030-4528-b6df-8a6ea69fe384.png"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 2"
                src="/b2401fa5-4eac-465f-b1f9-014aadc182ee.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 3"
                src="/dd1b32a8-3722-4ea2-8808-10d53532809d.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-2 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 4"
                src="/61af06cc-84d0-4031-a0ed-76fc43b1c1e1.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 5"
                src="/249083d2-c49c-4c06-a125-376284d90c42.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-2 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 6"
                src="/7638f650-8586-4403-8c13-141921a04f9d.png"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 7"
                src="/5b3bdb95-fac7-4d22-aa97-98b5d547b2db.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-2 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 8"
                src="/634f7bae-77a5-49d0-a0ab-5271a6194e66.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-2 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 9"
                src="/09ffa8fd-cdd1-453f-9aa2-d6c702a1f4b5.png"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-zinc-300 col-span-1 row-span-1 bg-zinc-100">
            <div className="relative h-full w-full">
              <Image
                alt="Architecture sketch 10"
                src="/040e36b1-d16f-474b-a712-a9979e6ab479.png"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

