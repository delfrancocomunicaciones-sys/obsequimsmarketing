export interface SectionNavItem {
  id: string;
  label: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  /** Etiqueta accesible del índice de la página. */
  label?: string;
}

/**
 * Índice de secciones de la página: sticky bajo la navegación principal,
 * con scroll horizontal elegante en pantallas estrechas.
 */
export default function SectionNav({ items, label = 'Secciones de esta página' }: SectionNavProps) {
  return (
    <nav
      aria-label={label}
      className="sticky top-14 z-30 border-b border-sand/70 bg-ivory/90 backdrop-blur-sm md:top-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ul className="scroll-elegant flex gap-1 overflow-x-auto py-2">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="block rounded-sm px-3 py-1.5 font-sans text-[0.72rem] font-medium tracking-[0.08em] whitespace-nowrap text-taupe uppercase transition-colors hover:bg-sand/40 hover:text-chocolate"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
