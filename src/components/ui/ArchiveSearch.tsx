import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ArchiveDocument } from '../../data/archive';
import { countMatches, snippetAround, highlight } from '../../utils/highlight';
import Markdown from './Markdown';
import Reveal from './Reveal';

interface ArchiveSearchProps {
  documents: ArchiveDocument[];
  query: string;
}

interface Result {
  docId: string;
  docTitle: string;
  sectionId: string;
  heading: string;
  body: string;
  matches: number;
  snippet: string;
}

/**
 * Resultados de búsqueda del Archivo Estratégico: en vez de expandir decenas
 * de secciones, lista cada coincidencia con su extracto resaltado y nº de
 * apariciones, ordenadas por relevancia. Cada resultado se abre in situ con el
 * texto completo resaltado.
 */
export default function ArchiveSearch({ documents, query }: ArchiveSearchProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const results = useMemo<Result[]>(() => {
    const q = query.trim();
    const out: Result[] = [];
    for (const doc of documents) {
      for (const section of doc.sections) {
        const matches = countMatches(section.heading, q) + countMatches(section.body, q);
        if (matches > 0) {
          out.push({
            docId: doc.id,
            docTitle: doc.title,
            sectionId: section.id,
            heading: section.heading,
            body: section.body,
            matches,
            snippet: snippetAround(`${section.heading}. ${section.body}`, q),
          });
        }
      }
    }
    return out.sort((a, b) => b.matches - a.matches);
  }, [documents, query]);

  const totalMatches = results.reduce((n, r) => n + r.matches, 0);

  if (results.length === 0) {
    return (
      <Reveal>
        <div className="rounded-md border border-sand/70 bg-parchment px-6 py-10 text-center shadow-soft">
          <p className="font-display text-2xl text-chocolate">Sin coincidencias</p>
          <p className="mt-2 text-[0.95rem] text-taupe">
            No se encontró «{query.trim()}» en los documentos. Prueba con otro término.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <div>
      <Reveal>
        <p className="mb-6 font-sans text-[0.82rem] tracking-wide text-taupe" role="status" aria-live="polite">
          <span className="font-semibold text-chocolate">{totalMatches}</span>{' '}
          {totalMatches === 1 ? 'coincidencia' : 'coincidencias'} en{' '}
          <span className="font-semibold text-chocolate">{results.length}</span>{' '}
          {results.length === 1 ? 'sección' : 'secciones'} para «{query.trim()}».
        </p>
      </Reveal>

      <ol className="space-y-3">
        {results.map((r, i) => {
          const isOpen = openId === r.sectionId;
          const panelId = `result-${r.sectionId}`;
          return (
            <motion.li
              key={r.sectionId}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px 0px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: Math.min(i * 0.03, 0.18) }}
              className="overflow-hidden rounded-md border border-sand/70 bg-parchment shadow-soft"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : r.sectionId)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ivory/60 md:px-6"
              >
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-sans text-[0.62rem] font-semibold tracking-[0.16em] text-brass uppercase">
                      {r.docTitle}
                    </span>
                    <span className="font-display text-lg leading-snug font-medium text-chocolate">
                      {highlight(r.heading, query)}
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-[85ch] text-[0.88rem] leading-relaxed text-carbon/75">
                    {highlight(r.snippet, query)}
                  </span>
                </span>
                <span className="flex shrink-0 flex-col items-end gap-1.5">
                  <span className="rounded-sm bg-sand/60 px-2 py-0.5 font-sans text-[0.66rem] font-semibold text-chocolate tabular-nums">
                    {r.matches}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`font-sans text-lg leading-none text-camel transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-sand/60 px-5 pt-4 pb-6 md:px-6">
                      <Markdown content={r.body} query={query} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
