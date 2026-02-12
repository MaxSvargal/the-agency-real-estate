/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import styles from "./HeaderMenu.module.css";

type HeaderMenuProps = {
  scrolled?: boolean;
};

export function HeaderMenu({ scrolled = false }: HeaderMenuProps) {
  const headerBgClass = scrolled ? "bg-white/90 shadow-sm" : "bg-transparent";
  const textColorClass = scrolled ? "text-black" : "text-white";
  const buttonBgClass = scrolled
    ? "border-black/20 bg-black text-white hover:bg-black/80"
    : "border-white/40 bg-white/15 text-white hover:bg-white/25";
  const headerHeightClass = "h-[80px]";

  return (
    <header
      className={`pointer-events-none fixed top-0 left-0 z-30 flex w-full justify-center transition-colors duration-500 ${headerBgClass}`}
    >
      <div
        className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between px-6 ${headerHeightClass} transition-all duration-500`}
      >
        <div className={`flex items-center ${textColorClass}`}>
          <svg
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 opacity-70 transition-all duration-500"
          >
            <path
              d="M50.168 41.895V64.06h1.977V41.895a4.454 4.454 0 0 0-4.45-4.449 4.428 4.428 0 0 0-3.16 1.318l-1.076 1.12-12.517 13.275H14.56l-.566-.034h-.059a5.408 5.408 0 0 0-5.403 5.4v10.057a4.454 4.454 0 0 0 4.45 4.45 4.43 4.43 0 0 0 3.162-1.322l2.454-2.578 13.197-13.997h10.884V53.16h-9.023l11.231-11.912 1.058-1.101a2.454 2.454 0 0 1 1.747-.723 2.476 2.476 0 0 1 2.473 2.474l.003-.002Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <nav
          className={`${styles.shimmerText} hidden items-center gap-8 text-sm sm:flex`}
        >
          <a
            href="#"
            className={`font-medium tracking-wide transition-colors ${
              scrolled
                ? "text-black hover:text-black/70"
                : "text-white/60 hover:text-white"
            }`}
          >
            Buy
          </a>
          <a
            href="#"
            className={`font-medium tracking-wide transition-colors ${
              scrolled
                ? "text-black hover:text-black/70"
                : "text-white/60 hover:text-white"
            }`}
          >
            Rent
          </a>
          <a
            href="#"
            className={`font-medium tracking-wide transition-colors ${
              scrolled
                ? "text-black hover:text-black/70"
                : "text-white/60 hover:text-white"
            }`}
          >
            Sell
          </a>
          <a
            href="#"
            className={`font-medium tracking-wide transition-colors ${
              scrolled
                ? "text-black hover:text-black/70"
                : "text-white/60 hover:text-white"
            }`}
          >
            Agents
          </a>
          <button
            className={`cursor-pointer rounded-full border px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-md transition ${buttonBgClass}`}
          >
            Book a tour
          </button>
        </nav>
      </div>
    </header>
  );
}

