import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Stagger
 * Light parent/child stagger for groups of items.
 * Props:
 * - trigger: "auto" | "mount" | "scroll" (default: "auto")
 * - nearFoldPx: number (default: 280)
 * - headerOffsetPx: number (default: 72)
 * Respects prefers-reduced-motion. No structural changes.
 */
const Stagger = ({
  children,
  trigger = "auto",
  nearFoldPx = 280,
  headerOffsetPx = 72,
}) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [animateOnMount, setAnimateOnMount] = useState(trigger === "mount");
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser || reduce) return <>{children}</>;

  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, when: "beforeChildren" },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const arrayChildren = Array.isArray(children) ? children : [children];

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
      variants={parent}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "show" }
        : { whileInView: "show", viewport })}
    >
      {arrayChildren.map((node, i) => (
        <motion.div key={i} variants={child}>
          {node}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stagger;
