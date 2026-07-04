import { riesgos, criticasIntro, criticasCEO, anexosCEO } from '../data/risks';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import RiskMatrix from '../components/ui/RiskMatrix';
import Accordion from '../components/ui/Accordion';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'matriz', label: 'Matriz de riesgos' },
  { id: 'ceo', label: 'Crítica del CEO' },
  { id: 'anexos', label: 'Anexos ejecutivos' },
];

export default function Riesgos() {
  return (
    <>
      <PageHero
        index="10"
        kicker="Riesgos y respuestas ejecutivas"
        title="Trece riesgos con señal temprana. Once críticas con respuesta."
        intro="La matriz completa de riesgos, dependencias y mitigaciones, y el ejercicio más duro del plan: anticipar la crítica de un CEO híper exigente y responderla como dirección de negocio."
        source="Fuente: Plan Marketing 360 §25-§26"
      />
      <SectionNav items={SECTIONS} />

      <Section id="matriz" tone="ivory">
        <SectionHeader
          kicker="Matriz de riesgos"
          title="Riesgo, causa, señal temprana, impacto y prevención."
          intro="Los trece riesgos del plan, completos. Cada uno con su señal de alerta y su plan de corrección (§25)."
        />
        <RiskMatrix riesgos={riesgos} />
      </Section>

      <Section id="ceo" tone="dark">
        <SectionHeader
          kicker="Crítica de CEO híper exigente"
          title="Las once preguntas más duras — respondidas."
          intro={criticasIntro}
          onDark
        />
        <div className="space-y-4">
          {criticasCEO.map((c, i) => (
            <Reveal key={c.critica} delay={Math.min((i % 4) * 0.04, 0.16)}>
              <article className="overflow-hidden rounded-md border border-chocolate">
                <header className="flex flex-wrap items-baseline justify-between gap-3 bg-carbon/70 px-6 py-4">
                  <h3 className="font-display text-xl leading-snug font-medium text-ivory italic">{c.critica}</h3>
                  <p className="font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-brass uppercase">
                    Cuestiona: {c.queCuestiona.replace(/\.$/, '')}
                  </p>
                </header>
                <div className="grid gap-5 bg-chocolate/60 px-6 py-5 md:grid-cols-[1.3fr_0.7fr]">
                  <div>
                    <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-brass uppercase">
                      Respuesta ejecutiva
                    </p>
                    <p className="mt-1.5 text-[0.93rem] leading-relaxed text-sand">{c.respuesta}</p>
                  </div>
                  <div className="rounded-sm border-l-2 border-brass bg-carbon/50 px-4 py-3">
                    <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-brass uppercase">
                      Qué hay que hacer
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ivory">{c.queHacer}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="anexos" tone="parchment">
        <SectionHeader
          kicker="Anexos que un CEO pediría"
          title="Ocho entregables ejecutivos antes de aprobar inversión."
        />
        <Reveal>
          <Accordion
            items={anexosCEO.map((anexo, i) => {
              const [titulo, ...resto] = anexo.split(':');
              return {
                id: `anexo-${i}`,
                meta: String(i + 1).padStart(2, '0'),
                title: titulo,
                content: (
                  <p className="max-w-[70ch] text-[0.93rem] leading-relaxed text-carbon/85">
                    {resto.join(':').trim() || titulo}
                  </p>
                ),
              };
            })}
          />
        </Reveal>
      </Section>

      <CTASection
        kicker="El último capítulo"
        title="Todo el detalle, palabra por palabra."
        text="Los dos documentos maestros completos, navegables y buscables: nada quedó fuera."
        primary={{ label: 'Abrir el archivo estratégico', to: '/archivo-estrategico' }}
        secondary={{ label: 'Volver al manifiesto', to: '/' }}
      />
    </>
  );
}
