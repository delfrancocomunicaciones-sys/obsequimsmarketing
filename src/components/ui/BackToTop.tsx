import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/** Botón discreto para volver arriba, visible tras un scroll significativo. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          aria-label="Volver al inicio de la página"
          className="fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-sand/60 bg-carbon/90 text-ivory shadow-lift backdrop-blur transition-colors hover:bg-chocolate md:right-8 md:bottom-8"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 12V2M7 2L2.5 6.5M7 2l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
