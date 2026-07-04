import { useState } from 'react';
import { archiveDocuments, archiveStats } from '../data/archive';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import ContentArchive from '../components/ui/ContentArchive';
import MetricCard from '../components/ui/MetricCard';
import Reveal from '../components/ui/Reveal';
import CTASection from '../components/ui/CTASection';

export default function ArchivoEstrategico() {
  const [query, setQuery] = useState('');

  return (
    <>
      <PageHero
        index="11"
        kicker="Archivo estratégico"
        title="Los documentos completos, sin resumir."
        intro="Aquí vive el 100% del contenido original: el Plan de Marketing 360 CMO Integral y el Brief Técnico de Identidad Visual y Web, sección por sección, con todas sus tablas y matrices. Busca, expande o léelo todo."
        source="Generado automáticamente desde las fuentes íntegras en docs/sources/"
      />

      <Section tone="ivory">
        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard value={String(archiveStats.documentos)} label="Documentos" detail="Plan 360 y Brief de identidad visual y web." index={0} />
          <MetricCard value={String(archiveStats.secciones)} label="Secciones íntegras" detail="Cada capítulo original, completo." index={1} />
          <MetricCard
            value={`${Math.round(archiveStats.caracteres / 1000)}k`}
            label="Caracteres conservados"
            detail="Texto, tablas y matrices palabra por palabra."
            index={2}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <label htmlFor="buscador-archivo" className="kicker text-camel">
              Buscar en los documentos
            </label>
            <div className="relative mt-3 max-w-xl">
              <input
                id="buscador-archivo"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej.: personalización, CAC, packaging, pop-up, Pinterest…"
                className="w-full rounded-md border border-sand bg-parchment py-3.5 pr-24 pl-5 font-sans text-[0.95rem] text-carbon shadow-soft placeholder:text-greige focus:border-camel [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-sm px-2 py-1 font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-taupe uppercase hover:text-chocolate"
                >
                  Limpiar
                </button>
              )}
            </div>
            <p className="mt-2.5 text-[0.8rem] text-taupe">
              La búsqueda abre automáticamente las secciones que contienen el término (mínimo 2 caracteres).
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-12">
          {archiveDocuments.map((doc) => (
            <ContentArchive key={doc.id} document={doc} query={query} />
          ))}
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
