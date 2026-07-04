import {
  roadmapIntro,
  fases,
  planTrimestral,
  recomendacionFinal,
  recomendacionNarrativa,
  queHariaPrimero,
  queNoHariaTodavia,
  decisionMasCritica,
  condicionesEscalar,
  tresObsesiones,
  checklistLanzamiento,
  matrizDecisionRapida,
  cierreDocumento,
} from '../data/roadmap';
import { planTrabajoWeb } from '../data/ecommerce';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Roadmap from '../components/ui/Roadmap';
import DataTable from '../components/ui/DataTable';
import QuoteBlock from '../components/ui/QuoteBlock';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'fases', label: 'Las 8 fases' },
  { id: 'trimestres', label: 'Trimestres' },
  { id: 'web', label: 'Plan web 8 semanas' },
  { id: 'recomendacion', label: 'Recomendación CMO' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'decision', label: 'Decisión rápida' },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        index="08"
        kicker="Roadmap y plan de lanzamiento"
        title="Doce meses: de la precisión estratégica a la expansión controlada."
        intro={roadmapIntro}
        source="Fuente: Plan Marketing 360 §13, §23.3, §28 · Brief Técnico §24"
      />
      <SectionNav items={SECTIONS} />

      <Section id="fases" tone="ivory">
        <SectionHeader
          kicker="Plan de lanzamiento de 12 meses"
          title="Ocho fases con inversión, métricas y decisión siguiente."
          intro="Cada fase responde qué ocurre, por qué ahora, qué debe estar listo, cuánto invertir, qué medir y qué decidir después (§13)."
        />
        <Roadmap fases={fases} />
      </Section>

      <Section id="trimestres" tone="parchment">
        <SectionHeader
          kicker="Plan trimestral del departamento"
          title="Cuatro trimestres, cuatro decisiones críticas."
        />
        <DataTable table={planTrimestral} />
      </Section>

      <Section id="web" tone="ivory">
        <SectionHeader
          kicker="Plan de trabajo web"
          title="Ocho semanas de diseño y desarrollo."
          intro="El calendario recomendado por el brief para llevar la identidad visual a una web publicada con backlog CRO (Brief §24)."
        />
        <DataTable table={planTrabajoWeb} />
      </Section>

      <Section id="recomendacion" tone="dark">
        <SectionHeader
          kicker="Recomendación final CMO"
          title={recomendacionFinal}
          intro={recomendacionNarrativa}
          onDark
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-md border border-chocolate bg-chocolate/60 p-7">
              <p className="kicker text-brass">Qué haría primero</p>
              <ol className="mt-4 space-y-3">
                {queHariaPrimero.map((item, i) => (
                  <li key={item.slice(0, 32)} className="flex gap-3.5 text-[0.92rem] leading-relaxed text-sand">
                    <span className="font-display text-lg leading-none font-semibold text-brass">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-md border border-chocolate bg-carbon/60 p-7">
              <p className="kicker text-brass">Qué no haría todavía</p>
              <ul className="mt-4 space-y-3">
                {queNoHariaTodavia.map((item) => (
                  <li key={item.slice(0, 32)} className="flex gap-3 text-[0.92rem] leading-relaxed text-sand">
                    <span aria-hidden="true" className="mt-1 font-sans text-xs text-camel">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-10">
          <QuoteBlock quote={decisionMasCritica} source="La decisión más crítica (§28.3)" tone="dark" />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-md border border-chocolate bg-chocolate/60 p-7">
              <p className="kicker text-brass">Condiciones para escalar inversión</p>
              <ul className="mt-4 grid gap-2.5">
                {condicionesEscalar.map((c) => (
                  <li key={c.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-sand">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-md border border-chocolate bg-carbon/60 p-7">
              <p className="kicker text-brass">Tres obsesiones del primer año</p>
              <ol className="mt-4 space-y-4">
                {tresObsesiones.map((o, i) => (
                  <li key={o.slice(0, 24)} className="flex gap-4">
                    <span className="font-display text-3xl leading-none font-semibold text-brass">{i + 1}</span>
                    <span className="font-display text-lg leading-snug text-ivory">{o}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="checklist" tone="ivory">
        <SectionHeader
          kicker="Anexo A"
          title="Checklist mínimo antes de abrir el ecommerce."
        />
        <DataTable table={checklistLanzamiento} />
      </Section>

      <Section id="decision" tone="parchment">
        <SectionHeader
          kicker="Anexo B"
          title="Matriz de decisión rápida: señal, interpretación, decisión."
        />
        <DataTable table={matrizDecisionRapida} />
        <div className="mt-10">
          <QuoteBlock quote={cierreDocumento} source="Cierre del documento maestro" />
        </div>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="Los números que sostienen el plan."
        primary={{ label: 'Ver KPIs y presupuesto', to: '/kpis-presupuesto' }}
        secondary={{ label: 'Ver riesgos', to: '/riesgos' }}
      />
    </>
  );
}
