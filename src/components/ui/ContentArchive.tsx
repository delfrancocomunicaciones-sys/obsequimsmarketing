import { useMemo, useState } from 'react';
import type { ArchiveDocument } from '../../data/archive';
import { normalize } from '../../utils/markdown';
import Markdown from './Markdown';
import Reveal from './Reveal';

interface ContentArchiveProps {
  document: ArchiveDocument;
  /** Término de búsqueda global (ya normalizado o crudo). */
  query: string;
}

/**
 * Documento completo del Archivo Estratégico: secciones expandibles con
 * modo "ver todo" y filtrado por búsqueda. Usa <details> nativo para máxima
 * accesibilidad y rendimiento con documentos largos; el cuerpo solo se monta
 * cuando la sección está abierta.
 */
export default function ContentArchive({ document, query }: ContentArchiveProps) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [allOpen, setAllOpen] = useState(false);

  const q = normalize(query.trim());
  const searching = q.length >= 2;

  const visibleSections = useMemo(() => {
    if (!searching) return document.sections;
    return document.sections.filter(
      (s) => normalize(s.heading).includes(q) || normalize(s.body).includes(q),
    );
  }, [document.sections, q, searching]);

  const isOpen = (id: string) => searching || allOpen || open.has(id);

  const toggle = (id: string, next: boolean) => {
    setOpen((prev) => {
      const set = new Set(prev);
      if (next) set.add(id);
      else set.delete(id);
      return set;
    });
    if (!next && allOpen) {
      // Salir de "ver todo" conservando abiertas las demás secciones.
      setAllOpen(false);
      setOpen(new Set(document.sections.map((s) => s.id).filter((sid) => sid !== id)));
    }
  };

  return (
    <Reveal>
      <section aria-label={document.title} className="rounded-md border border-sand/70 bg-parchment shadow-soft">
        <header className="flex flex-col gap-4 border-b border-sand/70 px-6 py-6 md:flex-row md:items-start md:justify-between md:px-8">
          <div className="max-w-2xl">
            <p className="kicker text-brass">Documento fuente · íntegro</p>
            <h3 className="mt-2 font-display text-2xl leading-snug font-medium text-chocolate md:text-3xl">
              {document.title}
            </h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-taupe">{document.subtitle}</p>
            <p className="mt-3 font-sans text-[0.68rem] tracking-[0.14em] text-greige uppercase">{document.origin}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {searching ? (
              <p className="font-sans text-[0.75rem] font-medium text-taupe" role="status">
                {visibleSections.length} de {document.sections.length} secciones coinciden
              </p>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setAllOpen((v) => !v);
                  setOpen(new Set());
                }}
                className="rounded-sm border border-camel/50 px-4 py-2 font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-camel uppercase transition-colors hover:bg-camel hover:text-ivory"
              >
                {allOpen ? 'Cerrar todo' : 'Ver todo'}
              </button>
            )}
          </div>
        </header>

        {document.intro && (
          <div className="border-b border-sand/60 px-6 py-5 md:px-8">
            <Markdown content={document.intro} />
          </div>
        )}

        {visibleSections.length === 0 ? (
          <p className="px-6 py-8 text-[0.95rem] text-taupe md:px-8">
            Ninguna sección de este documento coincide con la búsqueda.
          </p>
        ) : (
          <div className="divide-y divide-sand/60">
            {visibleSections.map((section, i) => {
              const opened = isOpen(section.id);
              return (
                <details
                  key={section.id}
                  open={opened}
                  onToggle={(e) => {
                    const next = (e.target as HTMLDetailsElement).open;
                    if (next !== opened) toggle(section.id, next);
                  }}
                  className="group"
                >
                  <summary className="flex cursor-pointer items-baseline justify-between gap-4 px-6 py-4 transition-colors hover:bg-ivory/60 md:px-8 [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="shrink-0 font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-brass uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-lg leading-snug font-medium text-chocolate md:text-xl">
                        {section.heading}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-sans text-lg leading-none text-camel transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  {opened && (
                    <div className="px-6 pt-1 pb-8 md:px-8">
                      <Markdown content={section.body} />
                    </div>
                  )}
                </details>
              );
            })}
          </div>
        )}
      </section>
    </Reveal>
  );
}
