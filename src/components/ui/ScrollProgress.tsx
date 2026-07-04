import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/** Barra fina de progreso de lectura, fija bajo la navegación. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-camel"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  );
}
