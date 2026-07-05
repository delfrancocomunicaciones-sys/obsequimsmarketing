import { useState } from 'react';
import type { ArchiveDocument } from '../../data/archive';
import Markdown from './Markdown';
import Reveal from './Reveal';

interface ContentArchiveProps {
  document: ArchiveDocument;
}

/**
 * Navegación de un documento del Archivo Estratégico: secciones expandibles
 * con modo "ver todo". Usa <details> nativo por accesibilidad y rendimiento;
 * el cuerpo solo se monta cuando la sección está abierta.
 */
export default function ContentArchive({ document }: ContentArchiveProps) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [allOpen, setAllOpen] = useState(false);

  const isOpen = (id: string) => allOpen || open.has(id);

  const toggle = (id: string, next: boolean) => {
    setOpen((prev) => {
      const set = new Set(prev);
      if (next) set.add(id);
      else set.delete(id);
      return set;
    });
    if (!next && allOpen) {
      setAllOpen(false);
      setOpen(new Set(document.sections.map((s) => s.id).filter((sid) => sid !== id)));
    }
  };

  return (
    <Reveal>
      <section aria-label={document.title} className="rounded-md border border-sand/70 bg-parchment shadow-soft">
        <header className="flex flex-col gap-4 border-b border-sand/70 px-6 py-6 md:flex-row md:items-start md:justify-between md:px-8">
          <div className="max-w-2xl">
            <p className="kicker text-brass">Documento maestro</p>
            <h3 className="mt-2 font-display text-2xl leading-snug font-medium text-chocolate md:text-3xl">
              {document.title}
            </h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-taupe">{document.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setAllOpen((v) => !v);
              setOpen(new Set());
            }}
            className="shrink-0 rounded-sm border border-camel/50 px-4 py-2 font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-camel uppercase transition-colors hover:bg-camel hover:text-ivory"
          >
            {allOpen ? 'Cerrar todo' : 'Ver todo'}
          </button>
        </header>

        {document.intro && (
          <div className="border-b border-sand/60 px-6 py-5 md:px-8">
            <Markdown content={document.intro} />
          </div>
        )}

        <div className="divide-y divide-sand/60">
          {document.sections.map((section, i) => {
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
      </section>
    </Reveal>
  );
}
