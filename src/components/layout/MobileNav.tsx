import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/** Índice completo del sitio en overlay a pantalla completa. */
export default function MobileNav({ open, onClose }: MobileNavProps) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-indice"
          role="dialog"
          aria-modal="true"
          aria-label="Índice del sitio"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-carbon bg-grain"
        >
          <div className="mx-auto flex min-h-full max-w-3xl flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-2xl font-medium tracking-tight text-ivory lowercase">obsequiums</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="rounded-sm px-3 py-2 font-sans text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase transition-colors hover:text-ivory"
              >
                Cerrar ✕
              </button>
            </div>

            <nav aria-label="Índice completo" className="my-10 md:my-14">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.path}
                    initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.035 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-4 rounded-sm px-3 py-3 transition-colors hover:bg-chocolate/60 ${
                          isActive ? 'bg-chocolate/50' : ''
                        }`
                      }
                    >
                      <span className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-brass">
                        {item.index}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-2xl leading-tight font-medium text-ivory transition-colors group-hover:text-brass md:text-3xl">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block font-sans text-[0.78rem] text-greige">
                          {item.description}
                        </span>
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="mt-auto border-t border-chocolate pt-5 font-sans text-[0.7rem] leading-relaxed tracking-[0.12em] text-greige uppercase">
              Para las piezas que no se guardan en cualquier lugar
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
