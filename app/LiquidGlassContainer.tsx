import { ReactNode } from "react";
import styles from "./LiquidGlassSearchBar.module.css";

type LiquidGlassContainerProps = {
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
};

export function LiquidGlassContainer({
  children,
  outerClassName = "",
  innerClassName = "",
}: LiquidGlassContainerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] ${outerClassName}`}
    >
      <div className={styles.inputEffect} />
      <div className={styles.inputTint} />
      <div className={styles.inputShine} />
      <div className={`relative z-10 ${innerClassName}`}>{children}</div>
    </div>
  );
}

