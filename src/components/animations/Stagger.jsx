import { motion, useReducedMotion } from "framer-motion";

/**
 * Stagger
 * Light parent/child stagger for groups of items.
 * Respects prefers-reduced-motion.
 * Does not change classes/structure — wraps children as-is.
 */
const Stagger = ({ children }) => {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

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

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
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
