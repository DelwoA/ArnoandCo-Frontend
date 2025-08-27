import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal
 * Small, accessible on-scroll entrance animation wrapper.
 * - direction: "up" | "down" | "left" | "right" | "none"
 * - delay: seconds (optional)
 * Respects prefers-reduced-motion.
 * No styling or className changes — wraps children only.
 */
const Reveal = ({ children, direction = "up", delay = 0, className }) => {
  const reduce = useReducedMotion();
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

  const initial = reduce ? { opacity: 1 } : { opacity: 0, ...axis };
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
