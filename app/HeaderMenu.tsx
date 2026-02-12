/* eslint-disable jsx-a11y/anchor-is-valid */
 "use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./HeaderMenu.module.css";

type HeaderMenuProps = {
  scrolled?: boolean;
};

export function HeaderMenu({ scrolled = false }: HeaderMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const headerBgClass = scrolled
    ? "bg-white/97 shadow-sm rounded-b-2xl"
    : isOpen
      ? "bg-black/80 shadow-sm"
      : "bg-transparent";
  const textColorClass = scrolled ? "text-black" : "text-white";
  const buttonBgClass = scrolled
    ? "border-black/40 bg-black text-white hover:bg-black/80"
    : "border-white/30 bg-white/10 text-white hover:bg-white/25";
  const headerHeightClass = "h-[50px] sm:h-[80px]";

  const linkBaseClasses = "font-medium tracking-wide transition-colors";
  const linkColorClasses = scrolled
    ? "text-black hover:text-black/70"
    : "text-white/60 hover:text-white";

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <>
      <header
        className="pointer-events-none fixed top-0 left-0 z-30 flex w-full justify-center"
      >
        <div
          className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between px-6 ${headerHeightClass} transition-all duration-500 ${headerBgClass}`}
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

          {/* Desktop navigation */}
          <nav
            className={`${styles.shimmerText} hidden items-center gap-6 text-sm sm:flex sm:gap-8 sm:text-base`}
          >
            <a
              href="#"
              className={`${linkBaseClasses} ${linkColorClasses}`}
            >
              Buy
            </a>
            <a
              href="#"
              className={`${linkBaseClasses} ${linkColorClasses}`}
            >
              Rent
            </a>
            <a
              href="#"
              className={`${linkBaseClasses} ${linkColorClasses}`}
            >
              Sell
            </a>
            <a
              href="#"
              className={`${linkBaseClasses} ${linkColorClasses}`}
            >
              Agents
            </a>
            <button
              type="button"
              onClick={scrollToContact}
              className={`cursor-pointer rounded-full border px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-md transition ${buttonBgClass}`}
            >
              Book a tour
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleOpen}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition sm:hidden ${
              scrolled
                ? "border-black/20 bg-black/5 text-black hover:bg-black/10"
                : "border-white/40 bg-black/40 text-white hover:bg-black/60"
            }`}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed left-0 right-0 top-[50px] z-20 flex w-full justify-center sm:top-[80px] sm:hidden"
          >
            <div
              className={`w-full max-w-[1400px] px-6 pb-4 pt-3 ${
                scrolled ? "rounded-b-2xl bg-white/97 shadow-sm" : "rounded-b-2xl bg-black/80"
              }`}
            >
              <div className="flex flex-col items-start gap-3 text-base">
                <a
                  href="#"
                  onClick={closeMenu}
                  className={`${linkBaseClasses} ${
                    scrolled ? "text-black hover:text-black/70" : "text-white/80 hover:text-white"
                  }`}
                >
                  Buy
                </a>
                <a
                  href="#"
                  onClick={closeMenu}
                  className={`${linkBaseClasses} ${
                    scrolled ? "text-black hover:text-black/70" : "text-white/80 hover:text-white"
                  }`}
                >
                  Rent
                </a>
                <a
                  href="#"
                  onClick={closeMenu}
                  className={`${linkBaseClasses} ${
                    scrolled ? "text-black hover:text-black/70" : "text-white/80 hover:text-white"
                  }`}
                >
                  Sell
                </a>
                <a
                  href="#"
                  onClick={closeMenu}
                  className={`${linkBaseClasses} ${
                    scrolled ? "text-black hover:text-black/70" : "text-white/80 hover:text-white"
                  }`}
                >
                  Agents
                </a>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`mt-2 cursor-pointer rounded-full border px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-md transition ${
                    scrolled
                      ? "border-black/40 bg-black text-white hover:bg-black/80"
                      : "border-white/40 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Book a tour
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

