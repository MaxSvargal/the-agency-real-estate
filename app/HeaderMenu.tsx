 "use client";

import styles from "./HeaderMenu.module.css";

export function HeaderMenu() {
  return (
    <header className="pointer-events-none absolute top-0 left-6 right-6 z-30 flex items-center justify-between">
      <div className="pointer-events-auto flex items-center">
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 opacity-50"
        >
          <path
            d="M50.168 41.895V64.06h1.977V41.895a4.454 4.454 0 0 0-4.45-4.449 4.428 4.428 0 0 0-3.16 1.318l-1.076 1.12-12.517 13.275H14.56l-.566-.034h-.059a5.408 5.408 0 0 0-5.403 5.4v10.057a4.454 4.454 0 0 0 4.45 4.45 4.43 4.43 0 0 0 3.162-1.322l2.454-2.578 13.197-13.997h10.884V53.16h-9.023l11.231-11.912 1.058-1.101a2.454 2.454 0 0 1 1.747-.723 2.476 2.476 0 0 1 2.473 2.474l.003-.002Z"
            fill="#fff"
          />
        </svg>
      </div>

      <nav
        className={`${styles.shimmerText} pointer-events-auto hidden items-center gap-8 text-sm sm:flex`}
      >
        <a href="#" className="font-medium tracking-wide transition-colors hover:text-white">
          Buy
        </a>
        <a href="#" className="font-medium tracking-wide transition-colors hover:text-white">
          Rent
        </a>
        <a href="#" className="font-medium tracking-wide transition-colors hover:text-white">
          Sell
        </a>
        <a href="#" className="font-medium tracking-wide transition-colors hover:text-white">
          Agents
        </a>
        <button className="cursor-pointer rounded-full border border-white/40 bg-white/15 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md transition hover:bg-white/25">
          Contact agent
        </button>
      </nav>
    </header>
  );
}

