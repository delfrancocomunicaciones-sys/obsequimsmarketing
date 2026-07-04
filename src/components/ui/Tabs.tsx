import { useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  /** aria-label del tablist. */
  label: string;
}

/** Tabs accesibles con navegación por flechas y paneles asociados. */
export default function Tabs({ items, label }: TabsProps) {
  const [active, setActive] = useState(items[0]?.id);
  const baseId = useId();
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    let next = -1;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    if (next >= 0) {
      event.preventDefault();
      const item = items[next];
      setActive(item.id);
      tabRefs.current.get(item.id)?.focus();
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="scroll-elegant -mx-1 flex gap-1 overflow-x-auto border-b border-sand px-1 pb-px"
      >
        {items.map((item, index) => {
          const selected = active === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el);
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`shrink-0 border-b-2 px-4 py-2.5 font-sans text-[0.82rem] font-medium tracking-wide whitespace-nowrap transition-colors ${
                selected
                  ? 'border-camel text-chocolate'
                  : 'border-transparent text-taupe hover:border-greige hover:text-carbon'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={active !== item.id}
          className="pt-6"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
