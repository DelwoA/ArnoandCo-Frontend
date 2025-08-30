import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Reveal
 * Small, accessible entrance animation wrapper.
 * Props:
 * - direction: "up" | "down" | "left" | "right" | "none"
 * - delay: seconds (optional)
 * - trigger: "auto" | "mount" | "scroll" (default: "auto")
 * - nearFoldPx: number (default: 280) — band below fold to auto-fire
 * - headerOffsetPx: number (default: 72) — sticky header height
 * Respects prefers-reduced-motion and is SSR-safe.
 */
const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className,
  trigger = "auto",
  nearFoldPx = 280,
  headerOffsetPx = 72,
}) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [animateOnMount, setAnimateOnMount] = useState(trigger === "mount");
  const isBrowser = typeof window !== "undefined";

  const distance = 20;
  const axis =
    direction === "left"
      ? { x: -distance }
      : direction === "right"
      ? { x: distance }
      : direction === "down"
      ? { y: distance }
      : direction === "up"
      ? { y: -distance }
      : {};

  if (!isBrowser || reduce) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, ...axis };
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay };
  const viewport = {
    once: true,
    amount: 0.01,
    margin: `-${headerOffsetPx}px 0px -20% 0px`,
  };

  // Synchronous mount check + microtask re-check for "auto" trigger
  useEffect(() => {
    if (trigger === "mount") {
      setAnimateOnMount(true);
      return;
    }
    if (trigger === "scroll") {
      setAnimateOnMount(false);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const withinTopFold = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const visibleBand = viewportHeight - headerOffsetPx + nearFoldPx;
      return rect.top <= visibleBand;
    };

    if (withinTopFold()) {
      setAnimateOnMount(true);
    } else {
      setAnimateOnMount(false);
    }

    const recheck = () => {
      if (!ref.current) return;
      if (withinTopFold()) setAnimateOnMount(true);
    };

    const rafId = requestAnimationFrame(recheck);
    const t0 = setTimeout(recheck, 0);
    const onLoad = () => recheck();
    const onResize = () => recheck();
    window.addEventListener("load", onLoad, { once: true });
    window.addEventListener("resize", onResize);
    const t1 = setTimeout(recheck, 1000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t0);
      clearTimeout(t1);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
    };
  }, [trigger, nearFoldPx, headerOffsetPx]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      {...(animateOnMount ? { animate } : { whileInView: animate, viewport })}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
