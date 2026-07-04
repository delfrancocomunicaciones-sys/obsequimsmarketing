import {
  mensajesIntro,
  arquitecturaMensajes,
  deseoIntro,
  secuenciaDeseo,
  circleIntro,
  dinamicasCircle,
  presenciaConstante,
  tensionesCulturales,
  contenidoIntro,
  pilaresEditoriales,
  hooks,
  volumenContenido,
  reutilizacionSesion,
  canalesIntro,
  ecosistemaCanales,
  distribucionEditorial,
  planningSemanal,
  activacionesIntro,
  obsequiumsTable,
  ciudadesActivacion,
  colaboraciones,
  iaIntro,
  iaProcesos,
  arquitecturaHerramientas,
  departamentoIntro,
  reglaInterna,
  nucleosDepartamento,
  semanaTipo,
  planificacionMensual,
  europaIntro,
  mercadosPrioritarios,
  consistenteVsLocalizado,
  modeloTesteoEuropa,
} from '../data/marketing360';
import { campaignsIntro, campaigns } from '../data/campaigns';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import DataTable from '../components/ui/DataTable';
import Timeline from '../components/ui/Timeline';
import QuoteBlock from '../components/ui/QuoteBlock';
import CampaignGrid from '../components/ui/CampaignGrid';
import Tabs from '../components/ui/Tabs';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'mensajes', label: 'Mensajes' },
  { id: 'deseo', label: 'Deseo y pertenencia' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'canales', label: 'Canales 360' },
  { id: 'planning', label: 'Planning' },
  { id: 'campanas', label: 'Campañas' },
  { id: 'activaciones', label: 'Pop-ups' },
  { id: 'ia', label: 'IA y procesos' },
  { id: 'departamento', label: 'Departamento' },
  { id: 'europa', label: 'Europa' },
];

export default function Marketing360() {
  return (
    <>
      <PageHero
        index="07"
        kicker="Estrategia de marketing 360"
        title="Un sistema de deseo, no una lista de canales."
        intro="Arquitectura de mensajes, secuencia de deseo, contenido sensorial, ecosistema de canales, campañas del primer año, activaciones físicas, IA operativa, equipo y expansión europea."
        source="Fuente: Plan Marketing 360 §9-§11, §14-§18, §21-§23, §27"
      />
      <SectionNav items={SECTIONS} />

      <Section id="mensajes" tone="ivory">
        <SectionHeader
          kicker="Arquitectura completa de mensajes"
          title="Un mensaje madre, dieciocho variaciones con intención."
          intro={mensajesIntro}
        />
        <DataTable table={arquitecturaMensajes} />
      </Section>

      <Section id="deseo" tone="parchment">
        <SectionHeader
          kicker="Deseo, pertenencia y presencia"
          title="El deseo se construye antes de pedir la compra."
          intro={deseoIntro}
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <h3 className="mb-6 font-display text-2xl font-medium text-chocolate">Secuencia de deseo</h3>
            </Reveal>
            <Timeline
              entries={secuenciaDeseo.map((paso, i) => ({
                marker: `Paso ${i + 1}`,
                title: paso.term,
                content: <p className="max-w-[60ch] text-[0.92rem] leading-relaxed text-carbon/85">{paso.detail}</p>,
              }))}
            />
          </div>
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-md border border-sand/70 bg-ivory p-7 shadow-soft">
                <p className="kicker text-camel">Pertenencia · The Obsequiums Circle</p>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-carbon/85">{circleIntro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {dinamicasCircle.map((d) => (
                    <li
                      key={d}
                      className="rounded-sm border border-sand bg-parchment px-3 py-1.5 font-display text-[0.92rem] text-chocolate italic"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-md border border-sand/70 bg-ivory p-7 shadow-soft">
                <p className="kicker text-camel">Tensiones culturales a activar</p>
                <ul className="mt-4 space-y-3">
                  {tensionesCulturales.map((t) => (
                    <li key={t.slice(0, 24)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-12">
          <DataTable table={presenciaConstante} />
        </div>
      </Section>

      <Section id="contenido" tone="ivory">
        <SectionHeader
          kicker="Contenido sensorial, viral y evergreen"
          title="Un producto, doce meses de narrativas."
          intro={contenidoIntro}
        />
        <Tabs
          label="Sistema editorial"
          items={[
            { id: 'pilares', label: 'Pilares editoriales', content: <DataTable table={pilaresEditoriales} hideCaption /> },
            {
              id: 'hooks',
              label: 'Hooks',
              content: (
                <ul className="grid gap-3 md:grid-cols-2">
                  {hooks.map((hook, i) => (
                    <li
                      key={hook}
                      className="flex gap-4 rounded-md border border-sand/70 bg-parchment p-4 shadow-soft"
                    >
                      <span className="font-display text-lg font-semibold text-brass">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-[1.05rem] leading-snug text-chocolate italic">{hook}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            { id: 'volumen', label: 'Volumen mensual', content: <DataTable table={volumenContenido} hideCaption /> },
            {
              id: 'reutilizacion',
              label: 'Reutilización de sesión',
              content: (
                <div className="rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
                  <p className="max-w-[70ch] text-[0.95rem] leading-relaxed text-carbon/85">{reutilizacionSesion.intro}</p>
                  <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                    {reutilizacionSesion.piezas.map((pieza) => (
                      <li key={pieza} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                        {pieza}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
            { id: 'distribucion', label: 'Distribución editorial', content: <DataTable table={distribucionEditorial} hideCaption /> },
          ]}
        />
      </Section>

      <Section id="canales" tone="parchment">
        <SectionHeader
          kicker="Ecosistema de canales 360"
          title="Cada canal cumple una función en el embudo."
          intro={canalesIntro}
        />
        <DataTable table={ecosistemaCanales} />
      </Section>

      <Section id="planning" tone="ivory">
        <SectionHeader
          kicker="Planning semanal tipo"
          title="Siete días con objetivo editorial."
        />
        <DataTable table={planningSemanal} />
      </Section>

      <Section id="campanas" tone="parchment">
        <SectionHeader
          kicker="Campañas clave del primer año"
          title="Trece campañas, del teaser al test europeo."
          intro={campaignsIntro}
        />
        <CampaignGrid campaigns={campaigns} />
      </Section>

      <Section id="activaciones" tone="ivory">
        <SectionHeader
          kicker="Pop-ups y activaciones físicas"
          title="The Obsequiums Table: tocar lo que la pantalla promete."
          intro={activacionesIntro}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-md border border-sand/70 bg-parchment p-7 shadow-soft">
              <p className="kicker text-camel">Concepto de activación</p>
              <ul className="mt-4 space-y-2.5">
                {obsequiumsTable.map((item) => (
                  <li key={item.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-md border border-sand/70 bg-parchment p-7 shadow-soft">
              <p className="kicker text-camel">Colaboraciones coherentes</p>
              <ul className="mt-4 space-y-2.5">
                {colaboraciones.map((item) => (
                  <li key={item.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-8">
          <DataTable table={ciudadesActivacion} />
        </div>
      </Section>

      <Section id="ia" tone="dark">
        <SectionHeader
          kicker="Sistema operativo con IA"
          title="La IA al servicio del criterio, nunca al revés."
          intro={iaIntro}
          onDark
        />
        <DataTable table={iaProcesos} />
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-md border border-chocolate bg-chocolate/60 p-7">
            <p className="kicker text-brass">Arquitectura de herramientas</p>
            <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
              {arquitecturaHerramientas.map((tool) => (
                <li key={tool.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-sand">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section id="departamento" tone="ivory">
        <SectionHeader
          kicker="El departamento de marketing"
          title="Crecimiento de marca y demanda, no 'hacer publicaciones'."
          intro={departamentoIntro}
        />
        <QuoteBlock quote={reglaInterna} source="Regla interna del departamento (§22)" />
        <div className="mt-10 space-y-8">
          <DataTable table={nucleosDepartamento} />
          <DataTable table={semanaTipo} />
          <DataTable table={planificacionMensual} />
        </div>
      </Section>

      <Section id="europa" tone="parchment">
        <SectionHeader
          kicker="European Expansion · Year 1 Extension"
          title="Validación controlada, no salto ciego."
          intro={europaIntro}
        />
        <DataTable table={mercadosPrioritarios} />
        <div className="mt-8">
          <DataTable table={consistenteVsLocalizado} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-md border border-sand/70 bg-ivory p-7 shadow-soft">
              <p className="kicker text-camel">Modelo de testeo por mercado</p>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-carbon/85">{modeloTesteoEuropa.intro}</p>
              <ul className="mt-5 space-y-2.5">
                {modeloTesteoEuropa.focos.map((foco) => (
                  <li key={foco.slice(0, 24)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                    {foco}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-sm border-l-2 border-moss bg-moss/10 px-4 py-3 text-[0.9rem] leading-relaxed text-carbon/90">
                {modeloTesteoEuropa.condicionEscala}
              </p>
            </div>
          </Reveal>
          <QuoteBlock quote={modeloTesteoEuropa.mensajeCore} source="Mensaje core EN / EU" tone="dark" />
        </div>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="El calendario que ordena todo el sistema."
        primary={{ label: 'Ver el roadmap de 12 meses', to: '/roadmap' }}
        secondary={{ label: 'Ver KPIs y presupuesto', to: '/kpis-presupuesto' }}
      />
    </>
  );
}
