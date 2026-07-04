import {
  modeloIntro,
  funnelEscenarios,
  unitEconomics,
  validaciones90Dias,
  dashboardIntro,
  dashboardSemanal,
  umbrales,
  crecimientoIntro,
  objetivoPorCanal,
  crecimientoTrimestral,
  fuentesCrecimiento,
  costePorSeguidor,
  kpisCalidadComunidad,
  senalesComunidad,
} from '../data/kpis';
import { presupuestoIntro, escenarios, partidasPresupuesto, recortarVsNo } from '../data/budget';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import DataTable from '../components/ui/DataTable';
import MetricCard from '../components/ui/MetricCard';
import KpiDashboard from '../components/ui/KpiDashboard';
import BudgetScenarioCards from '../components/ui/BudgetScenarioCards';
import QuoteBlock from '../components/ui/QuoteBlock';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'unit-economics', label: 'Unit economics' },
  { id: 'funnel', label: 'Embudo' },
  { id: 'crecimiento', label: 'Crecimiento 200k' },
  { id: 'presupuesto', label: 'Presupuesto' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'umbrales', label: 'Umbrales' },
  { id: 'validaciones', label: 'Validaciones 90 días' },
];

export default function KpisPresupuesto() {
  return (
    <>
      <PageHero
        index="09"
        kicker="KPIs, presupuesto y unit economics"
        title="Conectar comunidad con negocio, número a número."
        intro={modeloIntro}
        source="Fuente: Plan Marketing 360 §18-§20, §24"
      />
      <SectionNav items={SECTIONS} />

      <Section id="unit-economics" tone="ivory">
        <SectionHeader
          kicker="Unit economics"
          title="Los números que un CEO pedirá primero."
          intro="Hipótesis de trabajo por unidad vendida (§19.1). Deben validarse con proveedor real antes de escalar."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unitEconomics.map((ue, i) => (
            <MetricCard
              key={ue.elemento}
              value={ue.destacado ?? ue.hipotesis}
              label={ue.elemento}
              detail={ue.implicacion}
              index={i}
              tone={ue.elemento.startsWith('Margen bruto') ? 'accent' : 'default'}
            />
          ))}
        </div>
      </Section>

      <Section id="funnel" tone="parchment">
        <SectionHeader
          kicker="Embudo anual"
          title="Escenario conservador vs recomendado."
          intro="Las once métricas del embudo completo, con el comentario de dirección de cada una (§19)."
        />
        <DataTable table={funnelEscenarios} />
      </Section>

      <Section id="crecimiento" tone="ivory">
        <SectionHeader
          kicker="Modelo de crecimiento"
          title="200.000 seguidores cualificados: activo, no vanidad."
          intro={crecimientoIntro}
        />
        <div className="space-y-8">
          <DataTable table={objetivoPorCanal} />
          <DataTable table={crecimientoTrimestral} />
          <DataTable table={fuentesCrecimiento} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-md border border-sand/70 bg-parchment p-7 shadow-soft">
              <p className="kicker text-camel">Coste por seguidor y condiciones (§18.1)</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-carbon/85">{costePorSeguidor}</p>
              <p className="mt-4 rounded-sm border-l-2 border-camel bg-sand/25 px-4 py-3 text-[0.9rem] leading-relaxed text-carbon/90">
                {kpisCalidadComunidad}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-md border border-sand/70 bg-parchment p-7 shadow-soft">
              <p className="kicker text-camel">Señales de lectura</p>
              <ul className="mt-4 space-y-3">
                {senalesComunidad.map((s) => (
                  <li key={s.slice(0, 32)} className="flex gap-3 text-[0.92rem] leading-relaxed text-carbon/85">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="presupuesto" tone="dark">
        <SectionHeader
          kicker="Presupuesto por escenarios"
          title="La ambición se paga; la validación se diseña."
          intro={presupuestoIntro}
          onDark
        />
        <BudgetScenarioCards escenarios={escenarios} />
        <div className="mt-12">
          <DataTable table={partidasPresupuesto} />
        </div>
        <div className="mt-10">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-medium text-ivory">Qué recortar y qué no recortar</h3>
          </Reveal>
          <div className="grid gap-4">
            {recortarVsNo.map((par, i) => (
              <Reveal key={par.recortar.slice(0, 24)} delay={Math.min(i * 0.05, 0.2)}>
                <div className="grid overflow-hidden rounded-md border border-chocolate md:grid-cols-2">
                  <div className="border-b border-chocolate bg-carbon/60 p-5 md:border-r md:border-b-0">
                    <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-brass uppercase">
                      Si el presupuesto baja, recortar
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-sand">{par.recortar}</p>
                  </div>
                  <div className="bg-chocolate/60 p-5">
                    <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-camel uppercase">
                      No recortar bajo ningún concepto
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ivory">{par.noRecortar}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="dashboard" tone="ivory">
        <SectionHeader
          kicker="Reporting"
          title="El dashboard semanal completo."
          intro={dashboardIntro}
        />
        <Reveal>
          <ol className="grid gap-2.5 rounded-md border border-sand/70 bg-parchment p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-3">
            {dashboardSemanal.map((item, i) => (
              <li key={item.slice(0, 32)} className="flex gap-3 text-[0.88rem] leading-relaxed text-carbon/85">
                <span className="font-display text-[0.95rem] font-semibold text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section id="umbrales" tone="parchment">
        <SectionHeader
          kicker="Umbrales orientativos"
          title="Cuándo está bien, cuándo corregir, qué decidir."
          intro="Los doce KPIs con sus rangos sanos y la decisión que habilita cada umbral (§24.2)."
        />
        <KpiDashboard umbrales={umbrales} />
      </Section>

      <Section id="validaciones" tone="ivory">
        <SectionHeader
          kicker="Primeros 90 días"
          title="Doce validaciones antes de escalar."
        />
        <Reveal>
          <ol className="grid gap-2.5 rounded-md border border-sand/70 bg-parchment p-6 shadow-soft md:grid-cols-2">
            {validaciones90Dias.map((item, i) => (
              <li key={item.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                <span className="font-display text-[0.95rem] font-semibold text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="mt-10">
          <QuoteBlock
            quote="¿Qué aprendimos esta semana que cambia una decisión?"
            source="La pregunta fija del reporting (§24)"
            tone="dark"
          />
        </div>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="Lo que puede salir mal — y cómo responder."
        primary={{ label: 'Ver riesgos y respuestas', to: '/riesgos' }}
        secondary={{ label: 'Abrir el archivo estratégico', to: '/archivo-estrategico' }}
      />
    </>
  );
}
