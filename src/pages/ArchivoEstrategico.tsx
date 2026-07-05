import { useState } from 'react';
import { archiveDocuments } from '../data/archive';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import ContentArchive from '../components/ui/ContentArchive';
import ArchiveSearch from '../components/ui/ArchiveSearch';
import Reveal from '../components/ui/Reveal';
import CTASection from '../components/ui/CTASection';

const SUGGESTIONS = ['personalización', 'CAC', 'packaging', 'gifting', 'pop-up', 'Pinterest', 'ticket medio'];

export default function ArchivoEstrategico() {
  const [query, setQuery] = useState('');
  const searching = query.trim().length >= 2;

  return (
    <>
      <PageHero
        index="11"
        kicker="Archivo estratégico"
        title="Los documentos completos, sin resumir."
        intro="El Plan de Marketing 360 CMO Integral y el Brief Técnico de Identidad Visual y Web, íntegros: cada capítulo, cada tabla y cada matriz. Busca un término o léelos completos."
        source="Plan de Marketing 360 CMO Integral · Brief Técnico de Identidad Visual y Web"
      />

      <Section tone="ivory">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <label htmlFor="buscador-archivo" className="kicker text-camel">
              Buscar en los documentos
            </label>
            <div className="relative mt-4">
              <span aria-hidden="true" className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-taupe">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12.5 12.5 16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <input
                id="buscador-archivo"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej.: personalización, CAC, packaging, viaje…"
                className="w-full rounded-full border border-sand bg-parchment py-3.5 pr-24 pl-12 font-sans text-[0.95rem] text-carbon shadow-soft placeholder:text-greige focus:border-camel [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded-sm px-2 py-1 font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-taupe uppercase hover:text-chocolate"
                >
                  Limpiar
                </button>
              )}
            </div>
            {!searching && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="font-sans text-[0.72rem] text-taupe">Sugerencias:</span>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="rounded-full border border-sand bg-ivory px-3 py-1 font-sans text-[0.75rem] text-chocolate transition-colors hover:border-camel hover:text-camel"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <div className="mt-12">
          {searching ? (
            <ArchiveSearch documents={archiveDocuments} query={query} />
          ) : (
            <div className="space-y-12">
              {archiveDocuments.map((doc) => (
                <ContentArchive key={doc.id} document={doc} />
              ))}
            </div>
          )}
        </div>
      </Section>

      <CTASection
        kicker="Fin del recorrido"
        title="Dale un lugar a lo que importa."
        text="Has llegado a la capa más profunda del sistema. Desde aquí puedes volver a cualquier capítulo o empezar de nuevo por el manifiesto."
        primary={{ label: 'Volver al manifiesto', to: '/' }}
        secondary={{ label: 'Revisar el roadmap', to: '/roadmap' }}
      />
    </>
  );
}
