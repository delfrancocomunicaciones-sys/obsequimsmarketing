import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  /** Texto secundario junto al título (p. ej. numeración o etiqueta). */
  meta?: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** IDs abiertos inicialmente. */
  defaultOpen?: string[];
  /** Tamaño del título. */
  size?: 'md' | 'lg';
}

/** Accordion accesible con animación de altura elegante. */
export default function Accordion({ items, defaultOpen = [], size = 'md' }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="divide-y divide-sand/70 rounded-md border border-sand/70 bg-parchment shadow-soft">
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const headerId = `${baseId}-h-${item.id}`;
        const panelId = `${baseId}-p-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-baseline justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ivory/60 md:px-6"
              >
                <span className="flex min-w-0 items-baseline gap-3">
                  {item.meta && (
                    <span className="shrink-0 font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-brass uppercase">
                      {item.meta}
                    </span>
                  )}
                  <span
                    className={`font-display font-medium text-chocolate ${
                      size === 'lg' ? 'text-xl md:text-2xl' : 'text-lg'
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 font-sans text-lg leading-none text-camel transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pt-1 pb-6 md:px-6">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
