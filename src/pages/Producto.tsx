import {
  diagnostico,
  referenciaVisual,
  rolIcono,
  barrerasAdopcion,
  sentirSinTocarIntro,
  sentirSinTocar,
  productoIcono,
  arquitecturaIntro,
  arquitecturaProducto,
  estrategiaColores,
  coloresConRelato,
  pricing,
  mapaCompetitivoIntro,
  mapaCompetitivo,
  investigacionPreEscala,
} from '../data/product';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import DataTable from '../components/ui/DataTable';
import StrategyCard from '../components/ui/StrategyCard';
import AssetPlaceholder from '../components/ui/AssetPlaceholder';
import EditorialBlock from '../components/ui/EditorialBlock';
import Accordion from '../components/ui/Accordion';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'icono', label: 'El icono' },
  { id: 'barreras', label: 'Barreras' },
  { id: 'sensorial', label: 'Sentir sin tocar' },
  { id: 'arquitectura', label: 'Arquitectura' },
  { id: 'colores', label: 'Colores' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'competencia', label: 'Competencia' },
];

export default function Producto() {
  return (
    <>
      <PageHero
        index="03"
        kicker="Producto y categoría"
        title="El primer icono: un estuche que compite por ritual, no por outfit."
        intro="Diagnóstico del producto, su rol como símbolo inaugural, las barreras de adopción con sus respuestas, la arquitectura de líneas, el pricing y el mapa competitivo."
        source="Fuente: Plan Marketing 360 §3, §6 y §8"
      />
      <SectionNav items={SECTIONS} />

      <Section id="diagnostico" tone="ivory">
        <SectionHeader
          kicker="Diagnóstico estratégico"
          title="No es masivo, pero sí simbólico."
        />
        <EditorialBlock
          kicker="La lectura del producto"
          title="Viaje, orden, cuidado, logro, regalo y memoria."
          visual={{
            label: 'Familia de estuches cilíndricos sobre pedestales — marrón, camel, gris, azul, verde',
            kind: 'foto',
            tone: 'camel',
            ratio: '4/3',
          }}
        >
          {diagnostico.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </EditorialBlock>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
              <p className="kicker text-camel">Referencia visual · producto cerrado</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-carbon/85">{referenciaVisual.cerrado}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
              <p className="kicker text-camel">Referencia visual · producto abierto</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-carbon/85">{referenciaVisual.abierto}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="icono" tone="parchment">
        <SectionHeader
          kicker="Rol como primer icono"
          title="Un objeto, siete roles estratégicos."
          intro="El producto de lanzamiento debe trabajar para negocio, marca, contenido, comunidad, ecommerce, PR y B2B a la vez (§3.2)."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rolIcono.map((item, i) => (
            <StrategyCard key={item.term} title={item.term} detail={item.detail} index={i} />
          ))}
        </div>
        <div className="mt-14">
          <SectionHeader
            kicker="Ficha del icono de lanzamiento"
            title="The Signature Roll · La Primera Serie"
            intro="La definición completa del producto icono: naming, relato, argumentos y motivos (§6.1)."
          />
          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-md border border-sand/70 bg-sand/50 shadow-soft md:grid-cols-2 xl:grid-cols-3">
              {productoIcono.map((item) => (
                <div key={item.term} className="bg-parchment px-5 py-4">
                  <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-camel uppercase">{item.term}</dt>
                  <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-carbon/85">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section id="barreras" tone="ivory">
        <SectionHeader
          kicker="Barreras de adopción"
          title="Cada objeción tiene una respuesta diseñada."
          intro="Las siete barreras reales de compra y cómo las resuelven marca, ecommerce y contenido (§3.3)."
        />
        <DataTable table={barrerasAdopcion} />
      </Section>

      <Section id="sensorial" tone="dark">
        <SectionHeader
          kicker="Lectura sensorial"
          title="Cómo hacer sentir el producto sin tocarlo."
          intro={sentirSinTocarIntro}
          onDark
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sentirSinTocar.map((item, i) => (
            <Reveal key={item.term} delay={Math.min((i % 4) * 0.06, 0.2)} className="h-full">
              <div className="h-full rounded-md border border-chocolate bg-chocolate/60 p-5">
                <p className="font-display text-xl font-medium text-brass">{item.term}</p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-sand">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <AssetPlaceholder label="Macro: grano de la piel y costura" kind="foto" tone="chocolate" ratio="1/1" />
          <AssetPlaceholder label="Secuencia: apertura lenta de la tapa" kind="video" tone="camel" ratio="1/1" />
          <AssetPlaceholder label="ASMR: pulsera apoyándose en el interior" kind="video" tone="moss" ratio="1/1" />
        </div>
      </Section>

      <Section id="arquitectura" tone="ivory">
        <SectionHeader
          kicker="Arquitectura de producto"
          title="Ampliar usos sin dispersar la marca."
          intro={arquitecturaIntro}
        />
        <DataTable table={arquitecturaProducto} />
      </Section>

      <Section id="colores" tone="parchment">
        <SectionHeader
          kicker="Estrategia de colores y ediciones"
          title="Cada color debe tener relato."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <ul className="space-y-4">
              {estrategiaColores.map((regla) => (
                <li key={regla.slice(0, 24)} className="flex gap-3 text-[0.95rem] leading-relaxed text-carbon/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                  {regla}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
              {coloresConRelato.map((color) => (
                <li key={color.nombre} className="text-center">
                  <span
                    aria-hidden="true"
                    className="mx-auto block aspect-square w-full max-w-24 rounded-full border border-carbon/10 shadow-soft"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="mt-3 font-sans text-[0.72rem] font-semibold tracking-wide text-chocolate">{color.nombre}</p>
                  <p className="font-sans text-[0.68rem] text-taupe">{color.relato}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="pricing" tone="ivory">
        <SectionHeader
          kicker="Pricing y packaging"
          title="La arquitectura del margen."
          intro="Hipótesis de precio por elemento y la función de cada palanca (§6.4). El detalle de unit economics vive en el capítulo de KPIs."
        />
        <DataTable table={pricing} />
      </Section>

      <Section id="competencia" tone="parchment">
        <SectionHeader
          kicker="Mapa competitivo"
          title="Crecer sin competir por precio."
          intro={mapaCompetitivoIntro}
        />
        <DataTable table={mapaCompetitivo} />
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-chocolate">
              Investigación que debe hacerse antes de escalar
            </h3>
          </Reveal>
          <div className="mt-6">
            <Accordion
              items={investigacionPreEscala.map((item, i) => ({
                id: `inv-${i}`,
                meta: String(i + 1).padStart(2, '0'),
                title: item.term,
                content: <p className="max-w-[70ch] text-[0.93rem] leading-relaxed text-carbon/85">{item.detail}</p>,
              }))}
            />
          </div>
        </div>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="El sistema visual que hace deseable al objeto."
        primary={{ label: 'Ver identidad visual', to: '/identidad-visual' }}
        secondary={{ label: 'Conocer a las personas', to: '/buyer-personas' }}
      />
    </>
  );
}
