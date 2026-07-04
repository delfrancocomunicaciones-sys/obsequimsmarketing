import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Retardo en segundos para escalonar entradas. */
  delay?: number;
  className?: string;
}

/**
 * Entrada editorial: fade + leve desplazamiento vertical (Brief §7.3,
 * "Fade in 400-700 ms, ease-out suave"). Respeta prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px 0px' }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
