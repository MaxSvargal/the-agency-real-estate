import Image from "next/image";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 md:px-16 lg:px-20 py-8"
    >
      <div className="mx-auto flex w-full flex-col gap-10 md:flex-row md:items-stretch">
        {/* Left: brand & message */}
        <aside className="relative md:w-5/12 lg:w-1/2 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900/80 p-8 text-white">
          <Image
            src="/form-img.webp"
            alt="Agents discussing real estate plans"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="pointer-events-none select-none object-cover opacity-70"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/70 via-black/30 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <h2 className="mt-6 text-3xl font-light leading-tight text-white md:text-4xl">
                Real estate isn&apos;t
                <br />
                just business.
                <br />
                <span className="mt-2 inline-block text-3xl font-medium italic text-white md:text-4xl">
                  It&apos;s personal.
                </span>
              </h2>
            </div>
            <p className="mt-8 text-sm text-zinc-200">
              Share a few details about yourself and what you&apos;re looking
              for, and an agent will reach out with tailored opportunities.
            </p>
          </div>
        </aside>

        {/* Right: form */}
        <aside className="md:w-7/12 lg:w-1/2">
          <form className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-zinc-800"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-800"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-zinc-800"
                >
                  Phone Number{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    (optional)
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="timeToCall"
                  className="text-sm font-medium text-zinc-800"
                >
                  Best Time to Call{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    (optional)
                  </span>
                </label>
                <select
                  id="timeToCall"
                  name="timeToCall"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Best time to call
                  </option>
                  <option value="any">Any time</option>
                  <option value="morning">In the morning</option>
                  <option value="afternoon">In the afternoon</option>
                  <option value="evening">In the evening</option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-zinc-800"
                >
                  Address{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    (optional)
                  </span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="17 E 79th St #4E"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us a bit about your plans, timing, and what you’re looking for."
                className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 text-xs text-zinc-600">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-0"
                  required
                />
                <span>
                  I agree to be contacted by The Agency via email, phone, and
                  text to receive real estate services and information. Message
                  and data rates may apply. Message frequency may vary. You can
                  unsubscribe at any time or reply STOP to opt out.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium tracking-[0.18em] uppercase text-white transition hover:bg-zinc-800"
              >
                Let&apos;s connect
              </button>
            </div>
          </form>
        </aside>
      </div>
    </section>
  );
}

