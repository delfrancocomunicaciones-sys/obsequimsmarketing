import {
  claims,
  decisionEstrategica,
  tesisNarrativa,
  categoriaMental,
  queVende,
  queNoDebeSer,
  plataformaMarca,
  personalidadIntro,
  tonoDeVoz,
  codigosVisuales,
  codigosVerbales,
  posicionamiento,
  contraQueCompite,
  prometerDemostrarRepetir,
  traduccionPosicionamiento,
  norteCreativo,
  referenciasEsteticas,
  supuestosEstrategicos,
  matrizDireccion,
  personalidadVisual,
  preguntasTransversales,
} from '../data/brand';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import QuoteBlock from '../components/ui/QuoteBlock';
import StrategyCard from '../components/ui/StrategyCard';
import DataTable from '../components/ui/DataTable';
import Accordion from '../components/ui/Accordion';
import Tabs from '../components/ui/Tabs';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'tesis', label: 'Tesis CMO' },
  { id: 'norte', label: 'Norte creativo' },
  { id: 'plataforma', label: 'Plataforma de marca' },
  { id: 'tono', label: 'Tono de voz' },
  { id: 'codigos', label: 'Códigos' },
  { id: 'posicionamiento', label: 'Posicionamiento' },
  { id: 'referencias', label: 'Referencias' },
  { id: 'supuestos', label: 'Supuestos' },
  { id: 'matriz', label: 'Matriz de dirección' },
];

export default function Universo() {
  return (
    <>
      <PageHero
        index="02"
        kicker="Universo de marca"
        title="De watch box a categoría emocional."
        intro="La esencia, la promesa, los códigos y el posicionamiento que convierten un estuche de piel en un territorio propio: el ritual de cuidar las piezas que importan."
        source="Fuente: Plan Marketing 360 §1-§5 · Brief Técnico §1-§3"
      />
      <SectionNav items={SECTIONS} />

      <Section id="tesis" tone="ivory">
        <SectionHeader
          kicker="La tesis CMO"
          title="Obsequiums no lanza una watch box. Lanza una categoría."
          intro={decisionEstrategica}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-[0.98rem] leading-relaxed text-carbon/85">
              {tesisNarrativa.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="divide-y divide-sand/70 rounded-md border border-sand/70 bg-parchment shadow-soft">
              {categoriaMental.map((item) => (
                <div key={item.term} className="px-5 py-4">
                  <dt className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-camel uppercase">
                    {item.term}
                  </dt>
                  <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-medium text-chocolate">Qué vende realmente Obsequiums</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {queVende.map((item, i) => (
                <StrategyCard key={item.title} title={item.title} detail={item.detail} index={i} />
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-medium text-chocolate">Lo que no debe ser</h3>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-6 space-y-3 rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
                {queNoDebeSer.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-carbon/85">
                    <span aria-hidden="true" className="mt-1 font-sans text-xs text-camel">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section id="norte" tone="dark">
        <SectionHeader
          kicker="Norte creativo"
          title="La calma de cuidar lo que importa."
          intro={norteCreativo.ideaRectora}
          onDark
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-md border border-chocolate bg-chocolate/60 p-7">
              <p className="kicker text-brass">Concepto visual</p>
              <p className="mt-3 font-display text-2xl leading-snug font-medium text-ivory italic">
                Objects of Intimacy — La intimidad de lo que eliges guardar.
              </p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-sand">{norteCreativo.conceptoVisual}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-md border border-chocolate bg-chocolate/60 p-7">
              <p className="kicker text-brass">Frases rectoras del sistema visual</p>
              <ul className="mt-4 space-y-3">
                {norteCreativo.frasesRectoras.map((frase) => (
                  <li key={frase} className="border-l-2 border-brass/60 pl-4 font-display text-lg leading-snug text-ivory">
                    {frase}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {personalidadVisual.map((dim, i) => (
            <Reveal key={dim.term} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-md border border-chocolate bg-carbon/60 p-5">
                <p className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-brass uppercase">{dim.term}</p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-sand">{dim.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="plataforma" tone="ivory">
        <SectionHeader
          kicker="Plataforma de marca"
          title="Esencia, promesa, territorio y razones para volver."
          intro="Los once elementos de la plataforma estratégica, tal como los define el plan (§4.1)."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {plataformaMarca.map((item, i) => (
            <StrategyCard key={item.term} title={item.term} detail={item.detail} index={i} />
          ))}
        </div>
        <div className="mt-12">
          <QuoteBlock quote={claims.emotional} source="Claim emocional" tone="dark" />
        </div>
      </Section>

      <Section id="tono" tone="parchment">
        <SectionHeader
          kicker="Personalidad y tono de voz"
          title="Emoción + claridad funcional."
          intro={personalidadIntro}
        />
        <div className="grid gap-4">
          {tonoDeVoz.map((par, i) => (
            <Reveal key={par.si} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid overflow-hidden rounded-md border border-sand/70 shadow-soft md:grid-cols-2">
                <div className="border-b border-sand/60 bg-ivory p-5 md:border-r md:border-b-0">
                  <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-moss uppercase">Sí debe sonar a</p>
                  <p className="mt-2 font-display text-lg leading-snug text-chocolate italic">{par.si}</p>
                </div>
                <div className="bg-sand/25 p-5">
                  <p className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-camel uppercase">No debe sonar a</p>
                  <p className="mt-2 font-display text-lg leading-snug text-taupe italic line-through decoration-camel/40">
                    {par.no}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="codigos" tone="ivory">
        <SectionHeader
          kicker="Códigos de marca"
          title="Cómo se ve y cómo habla Obsequiums."
          intro="Los códigos visuales y verbales que sostienen la coherencia en cada punto de contacto (§4.3-§4.4)."
        />
        <Tabs
          label="Códigos visuales y verbales"
          items={[
            {
              id: 'visuales',
              label: 'Códigos visuales',
              content: (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {codigosVisuales.map((item, i) => (
                    <StrategyCard key={item.title} title={item.title} detail={item.detail} index={i} />
                  ))}
                </div>
              ),
            },
            {
              id: 'verbales',
              label: 'Códigos verbales',
              content: (
                <div className="grid gap-4 md:grid-cols-2">
                  {codigosVerbales.map((item, i) => (
                    <StrategyCard key={item.title} title={item.title} detail={item.detail} index={i} />
                  ))}
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section id="posicionamiento" tone="parchment">
        <SectionHeader
          kicker="Posicionamiento ideal para España"
          title="Un lugar muy concreto en la mente."
          intro={posicionamiento.lugarEnLaMente}
        />
        <QuoteBlock quote={posicionamiento.statement} source="Posicionamiento recomendado (§5)" />
        <div className="mt-10 space-y-10">
          <DataTable table={contraQueCompite} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prometerDemostrarRepetir.map((item, i) => (
              <StrategyCard key={item.term} title={item.term} detail={item.detail} index={i} />
            ))}
          </div>
          <DataTable table={traduccionPosicionamiento} />
        </div>
      </Section>

      <Section id="referencias" tone="ivory">
        <SectionHeader
          kicker="Referencias estéticas"
          title="Brújula de criterio, no de copia."
          intro="Ocho marcas que enseñan a construir deseo desde la calma, el vacío, la textura, la precisión y la materialidad — y el uso correcto de cada una."
        />
        <DataTable table={referenciasEsteticas} />
      </Section>

      <Section id="supuestos" tone="parchment">
        <SectionHeader
          kicker="Supuestos y no negociables"
          title="Desde dónde parte el plan."
          intro="Los doce supuestos estratégicos que condicionan todas las decisiones (§1.2)."
        />
        <Reveal>
          <Accordion
            size="md"
            items={supuestosEstrategicos.map((s, i) => ({
              id: `supuesto-${i}`,
              meta: String(i + 1).padStart(2, '0'),
              title: s.split(':')[0].split('.')[0],
              content: <p className="max-w-[70ch] text-[0.93rem] leading-relaxed text-carbon/85">{s}</p>,
            }))}
          />
        </Reveal>
      </Section>

      <Section id="matriz" tone="ivory">
        <SectionHeader
          kicker="Matriz de dirección"
          title="Qué, quién, cómo, cuándo y cuánto — todo el plan en una vista."
          intro={preguntasTransversales}
        />
        <DataTable table={matrizDireccion} />
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="Del territorio al objeto: el producto icono."
        primary={{ label: 'Explorar el producto', to: '/producto' }}
        secondary={{ label: 'Ver identidad visual', to: '/identidad-visual' }}
      />
    </>
  );
}
