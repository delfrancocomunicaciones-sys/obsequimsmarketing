import {
  principioEcommerce,
  navegacionPrincipal,
  sitemap,
  homeWireframe,
  homeRecomendada,
  principioPDP,
  pdpPerfecta,
  modulosPDP,
  microcopyPDP,
  personalizacionIntro,
  personalizacionUX,
  giftingIntro,
  rutasGifting,
  packagingUnboxing,
  landingsIntencion,
  navegacionIntencion,
  checkoutPostcompra,
  croIntro,
  croDiagnostico,
  componentesUI,
  mobileFirstIntro,
  mobileFirst,
  seoIntro,
  clustersSEO,
  metadata,
  accesibilidad,
  performance,
  trackingIntro,
  eventosTracking,
  cmsEditable,
  requisitosTecnicos,
  assetsMinimos,
  redesWebIntro,
  pilaresRedesWeb,
  criteriosAprobacion,
  planTrabajoWeb,
} from '../data/ecommerce';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import DataTable from '../components/ui/DataTable';
import StrategyCard from '../components/ui/StrategyCard';
import Tabs from '../components/ui/Tabs';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'arquitectura', label: 'Arquitectura' },
  { id: 'home', label: 'Home' },
  { id: 'pdp', label: 'PDP' },
  { id: 'personalizacion', label: 'Personalización' },
  { id: 'gifting', label: 'Gifting' },
  { id: 'landings', label: 'Landings' },
  { id: 'componentes', label: 'Componentes UI' },
  { id: 'mobile', label: 'Mobile-first' },
  { id: 'seo', label: 'SEO' },
  { id: 'performance', label: 'Performance y a11y' },
  { id: 'tracking', label: 'Tracking' },
  { id: 'cms', label: 'CMS y desarrollo' },
  { id: 'assets', label: 'Assets' },
  { id: 'aprobacion', label: 'Aprobación' },
];

function ChecklistCard({ items, kicker }: { items: string[]; kicker: string }) {
  return (
    <Reveal>
      <div className="rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
        <p className="kicker text-camel">{kicker}</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.slice(0, 32)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Ecommerce() {
  return (
    <>
      <PageHero
        index="05"
        kicker="Ecommerce experience"
        title="Una web que vende por intención, no por catálogo."
        intro={principioEcommerce}
        source="Fuente: Plan Marketing 360 §12 · Brief Técnico §8-§21, §24-§25"
      />
      <SectionNav items={SECTIONS} />

      <Section id="arquitectura" tone="ivory">
        <SectionHeader
          kicker="Arquitectura web"
          title="Navegación por intención de compra."
          intro="El menú responde a lo que la persona busca — reloj, pulseras, regalo, viaje, personalización — no solo a categorías de producto (Brief §8)."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {navegacionPrincipal.map((item, i) => (
            <StrategyCard key={item.term} title={item.term} detail={item.detail} index={i} />
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <DataTable table={sitemap} />
          <Reveal delay={0.08}>
            <div className="h-full rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
              <p className="kicker text-camel">Navegación por intención (Plan §12.3)</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {navegacionIntencion.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-sand bg-ivory px-3 py-1.5 font-sans text-[0.78rem] font-medium text-chocolate"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="home" tone="parchment">
        <SectionHeader
          kicker="La home"
          title="De emoción a claridad, de deseo a confianza, de confianza a acción."
          intro="El wireframe narrado completo de la home (Brief §9) y los módulos recomendados por el plan (§12.1)."
        />
        <DataTable table={homeWireframe} />
        <div className="mt-8">
          <ChecklistCard kicker="Home recomendada · Plan §12.1" items={homeRecomendada} />
        </div>
      </Section>

      <Section id="pdp" tone="ivory">
        <SectionHeader kicker="Página de producto" title="Comprar premium sin tocar." intro={principioPDP} />
        <Tabs
          label="Especificación de PDP"
          items={[
            { id: 'plan', label: 'PDP perfecta (Plan §12.2)', content: <DataTable table={pdpPerfecta} hideCaption /> },
            { id: 'brief', label: 'Módulos PDP (Brief §10.1)', content: <DataTable table={modulosPDP} hideCaption /> },
            {
              id: 'microcopy',
              label: 'Microcopy (Brief §10.2)',
              content: (
                <dl className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {microcopyPDP.map((m) => (
                    <div key={m.term} className="rounded-md border border-sand/70 bg-parchment p-5 shadow-soft">
                      <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">{m.term}</dt>
                      <dd className="mt-2 font-display text-[1.05rem] leading-snug text-chocolate italic">«{m.detail}»</dd>
                    </div>
                  ))}
                </dl>
              ),
            },
          ]}
        />
        <div className="mt-10">
          <ChecklistCard kicker="Checkout, postcompra y atención · Plan §12.4" items={checkoutPostcompra} />
        </div>
        <div className="mt-10">
          <SectionHeader
            kicker="CRO mensual"
            title="La web no se lanza y se abandona."
            intro={croIntro}
          />
          <DataTable table={croDiagnostico} />
        </div>
      </Section>

      <Section id="personalizacion" tone="dark">
        <SectionHeader
          kicker="Personalización"
          title="Un momento de deseo, no un formulario."
          intro={personalizacionIntro}
          onDark
        />
        <dl className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {personalizacionUX.map((item, i) => (
            <Reveal key={item.term} delay={Math.min((i % 3) * 0.06, 0.2)} className="h-full">
              <div className="h-full rounded-md border border-chocolate bg-chocolate/60 p-5">
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-brass uppercase">{item.term}</dt>
                <dd className="mt-2 text-[0.9rem] leading-relaxed text-sand">{item.detail}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section id="gifting" tone="ivory">
        <SectionHeader
          kicker="Gifting experience"
          title="El regalo como ruta de compra central."
          intro={giftingIntro}
        />
        <DataTable table={rutasGifting} />
        <div className="mt-8">
          <ChecklistCard kicker="Packaging y unboxing en web · Brief §12.2" items={packagingUnboxing} />
        </div>
      </Section>

      <Section id="landings" tone="parchment">
        <SectionHeader
          kicker="Landings por intención"
          title="Seis puertas de entrada, seis conversaciones."
        />
        <DataTable table={landingsIntencion} />
      </Section>

      <Section id="componentes" tone="ivory">
        <SectionHeader
          kicker="Componentes UI requeridos"
          title="El design system funcional del ecommerce."
        />
        <DataTable table={componentesUI} />
      </Section>

      <Section id="mobile" tone="parchment">
        <SectionHeader
          kicker="Requisitos mobile-first"
          title="Mobile no es una adaptación: es el punto de partida."
          intro={mobileFirstIntro}
        />
        <ChecklistCard kicker="Requisitos" items={mobileFirst} />
      </Section>

      <Section id="seo" tone="ivory">
        <SectionHeader
          kicker="SEO y contenido editorial"
          title="Capturar la intención, no decorar un blog."
          intro={seoIntro}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clustersSEO.map((c, i) => (
            <StrategyCard key={c.term} title={c.term} detail={c.detail} index={i} eyebrow="Cluster" />
          ))}
        </div>
        <Reveal delay={0.08}>
          <dl className="mt-8 divide-y divide-sand/60 rounded-md border border-sand/70 bg-parchment shadow-soft">
            {metadata.map((m) => (
              <div key={m.term} className="grid gap-1 px-5 py-4 md:grid-cols-[180px_1fr] md:gap-6">
                <dt className="font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-taupe uppercase">{m.term}</dt>
                <dd className="font-mono text-[0.83rem] leading-relaxed text-carbon/85">{m.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section id="performance" tone="parchment">
        <SectionHeader
          kicker="Accesibilidad y performance"
          title="Rápida, legible y usable para todas las personas."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ChecklistCard kicker="Accesibilidad · Brief §17.1" items={accesibilidad} />
          <DataTable table={performance} />
        </div>
      </Section>

      <Section id="tracking" tone="ivory">
        <SectionHeader
          kicker="Tracking y analítica"
          title="Aprender qué deseo convierte mejor."
          intro={trackingIntro}
        />
        <DataTable table={eventosTracking} />
      </Section>

      <Section id="cms" tone="parchment">
        <SectionHeader
          kicker="CMS y requisitos para desarrollo"
          title="Marketing edita; desarrollo escala."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <ChecklistCard kicker="Contenido editable por marca · Brief §19.1" items={cmsEditable} />
          <ChecklistCard kicker="Requisitos técnicos · Brief §19.2" items={requisitosTecnicos} />
        </div>
        <div className="mt-10">
          <SectionHeader
            kicker="Plan de trabajo diseño + desarrollo"
            title="Ocho semanas hasta el soft launch."
          />
          <DataTable table={planTrabajoWeb} />
        </div>
      </Section>

      <Section id="assets" tone="ivory">
        <SectionHeader
          kicker="Producción de assets"
          title="La lista mínima para lanzar."
          intro="Sin esta biblioteca visual, la web y los canales no pueden sostener la promesa sensorial (Brief §20-§21)."
        />
        <DataTable table={assetsMinimos} />
        <div className="mt-8">
          <SectionHeader kicker="Redes conectadas con la web" title="Cada pieza alimenta el embudo." intro={redesWebIntro} />
          <DataTable table={pilaresRedesWeb} />
        </div>
      </Section>

      <Section id="aprobacion" tone="dark">
        <SectionHeader
          kicker="Criterios de aprobación"
          title="Antes de publicar, once verificaciones."
          onDark
        />
        <Reveal>
          <ol className="grid gap-3 md:grid-cols-2">
            {criteriosAprobacion.map((criterio, i) => (
              <li key={criterio.slice(0, 32)} className="flex gap-4 rounded-md border border-chocolate bg-chocolate/60 p-4">
                <span className="font-display text-xl font-semibold text-brass">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[0.9rem] leading-relaxed text-sand">{criterio}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="¿Para quién es todo esto? Las personas."
        primary={{ label: 'Conocer a las buyer personas', to: '/buyer-personas' }}
        secondary={{ label: 'Ver la estrategia 360', to: '/marketing-360' }}
      />
    </>
  );
}
