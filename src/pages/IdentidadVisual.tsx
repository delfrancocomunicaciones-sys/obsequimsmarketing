import {
  direccionCromatica,
  paleta,
  reglasCromaticas,
  direccionTipografica,
  nivelesTipograficos,
  jerarquiaWeb,
  principioFotografico,
  universosFotograficos,
  parametrosImagen,
  props,
  principioVideo,
  formatosVideo,
  asmrIntro,
  guiaASMR,
  motionWeb,
  tonoCopy,
  guiaCopy,
  doDont,
  traduccionEmocional,
  resumenEjecutivoVisual,
} from '../data/visualIdentity';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionNav from '../components/ui/SectionNav';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import DataTable from '../components/ui/DataTable';
import Tabs from '../components/ui/Tabs';
import AssetPlaceholder from '../components/ui/AssetPlaceholder';
import CTASection from '../components/ui/CTASection';

const SECTIONS = [
  { id: 'paleta', label: 'Paleta' },
  { id: 'tipografia', label: 'Tipografía' },
  { id: 'fotografia', label: 'Fotografía' },
  { id: 'video', label: 'Video y ASMR' },
  { id: 'motion', label: 'Motion' },
  { id: 'copy', label: 'Copy' },
  { id: 'dodont', label: "Do / Don't" },
  { id: 'resumen', label: 'Resumen' },
];

/** Decide el color de texto legible sobre un swatch. */
function textOn(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#2E2924' : '#F4F0E8';
}

export default function IdentidadVisual() {
  return (
    <>
      <PageHero
        index="04"
        kicker="Identidad visual y dirección de arte"
        title="Un sistema visual que se siente antes de leerse."
        intro="Paleta cromática, tipografía, sistema fotográfico, video, ASMR y motion: la dirección de arte completa que traduce la calma de cuidar lo que importa."
        source="Fuente: Brief Técnico de Identidad Visual y Web §2, §4-§7, §22-§23"
      />
      <SectionNav items={SECTIONS} />

      <Section id="paleta" tone="ivory">
        <SectionHeader
          kicker="Sistema cromático"
          title="Diez colores cálidos, desaturados y táctiles."
          intro={direccionCromatica}
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {paleta.map((color, i) => (
            <Reveal key={color.hex} delay={Math.min((i % 5) * 0.05, 0.2)} className="h-full">
              <li className="h-full overflow-hidden rounded-md border border-sand/70 bg-parchment shadow-soft">
                <div
                  className="flex aspect-[4/3] items-end p-3"
                  style={{ backgroundColor: color.hex, color: textOn(color.hex) }}
                >
                  <span className="font-sans text-[0.7rem] font-semibold tracking-[0.12em] uppercase">{color.hex}</span>
                </div>
                <div className="p-4">
                  <p className="font-display text-[1.05rem] leading-tight font-medium text-chocolate">{color.nombre}</p>
                  <p className="mt-1.5 text-[0.78rem] leading-relaxed text-carbon/75">{color.uso}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-md border border-sand/70 bg-parchment p-6 shadow-soft">
            <p className="kicker text-camel">Reglas de uso cromático</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {reglasCromaticas.map((regla) => (
                <li key={regla.slice(0, 24)} className="flex gap-3 text-[0.9rem] leading-relaxed text-carbon/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-camel" />
                  {regla}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section id="tipografia" tone="parchment">
        <SectionHeader
          kicker="Sistema tipográfico"
          title="Alma serif, precisión sans."
          intro={direccionTipografica}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-md border border-sand/70 bg-ivory p-8 shadow-soft">
              <p className="kicker text-camel">Especimen display · serif</p>
              <p className="mt-4 font-display text-4xl leading-[1.05] font-medium text-chocolate md:text-5xl">
                Guardar lo que importa con intención.
              </p>
              <p className="kicker mt-8 text-camel">Especimen funcional · sans</p>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-carbon/85">
                Estuches de piel personalizables. Envío en 24-72 h. Personalización con iniciales desde 15 €.
                Devolución sencilla en 30 días.
              </p>
            </div>
          </Reveal>
          <div className="space-y-6">
            <DataTable table={nivelesTipograficos} />
          </div>
        </div>
        <div className="mt-8">
          <DataTable table={jerarquiaWeb} />
        </div>
      </Section>

      <Section id="fotografia" tone="ivory">
        <SectionHeader
          kicker="Sistema fotográfico"
          title="La fotografía es el principal vendedor sensorial."
          intro={principioFotografico}
        />
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AssetPlaceholder label="Producto hero: estuche cerrado, fondo cálido" kind="foto" tone="sand" ratio="4/5" />
          <AssetPlaceholder label="Macro tactilidad: mano tocando el cuero" kind="foto" tone="camel" ratio="4/5" />
          <AssetPlaceholder label="Uso real: mesilla de noche, ritual nocturno" kind="escena" tone="chocolate" ratio="4/5" />
          <AssetPlaceholder label="Viaje: maleta abierta, pasaporte y estuche" kind="escena" tone="smoke" ratio="4/5" />
        </div>
        <Tabs
          label="Sistema fotográfico"
          items={[
            {
              id: 'universos',
              label: 'Universos obligatorios',
              content: <DataTable table={universosFotograficos} hideCaption />,
            },
            {
              id: 'parametros',
              label: 'Parámetros técnicos',
              content: (
                <dl className="grid gap-4 md:grid-cols-2">
                  {parametrosImagen.map((p) => (
                    <div key={p.term} className="rounded-md border border-sand/70 bg-parchment p-5 shadow-soft">
                      <dt className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-camel uppercase">{p.term}</dt>
                      <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-carbon/85">{p.detail}</dd>
                    </div>
                  ))}
                </dl>
              ),
            },
            {
              id: 'props',
              label: 'Props',
              content: (
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-md border-l-2 border-moss bg-moss/10 p-5">
                    <p className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-moss uppercase">Aprobados</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-carbon/85">{props.aprobados}</p>
                  </div>
                  <div className="rounded-md border-l-2 border-brass bg-brass/10 p-5">
                    <p className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-brass uppercase">Usar con cuidado</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-carbon/85">{props.conCuidado}</p>
                  </div>
                  <div className="rounded-md border-l-2 border-camel bg-camel/10 p-5">
                    <p className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-camel uppercase">Prohibidos</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-carbon/85">{props.prohibidos}</p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section id="video" tone="dark">
        <SectionHeader
          kicker="Video, motion y ASMR"
          title="El producto tiene gestos: abrir, cerrar, guardar, regalar."
          intro={principioVideo}
          onDark
        />
        <DataTable table={formatosVideo} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-md border border-chocolate bg-chocolate/60 p-7">
              <p className="kicker text-brass">ASMR · guía de sonido</p>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-sand">{asmrIntro}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {guiaASMR.map((item) => (
                <div key={item.term} className="rounded-md border border-chocolate bg-carbon/60 p-5">
                  <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-brass uppercase">{item.term}</dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-relaxed text-sand">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section id="motion" tone="ivory">
        <SectionHeader
          kicker="Motion y animaciones web"
          title="Cada movimiento refuerza claridad, deseo o navegación."
          intro="Las especificaciones de animación del brief (§7.3) — las mismas que aplica este sitio: fades de 400-700 ms, parallax sutil y scroll narrativo con respeto por reduced motion."
        />
        <DataTable table={motionWeb} />
        <div className="mt-8">
          <DataTable table={traduccionEmocional} />
        </div>
      </Section>

      <Section id="copy" tone="parchment">
        <SectionHeader kicker="Guía de copy web" title="Claro, elegante y sensorial." intro={tonoCopy} />
        <DataTable table={guiaCopy} />
      </Section>

      <Section id="dodont" tone="ivory">
        <SectionHeader
          kicker="Do / Don't creativo y técnico"
          title="Las reglas que protegen la percepción premium."
        />
        <DataTable table={doDont} />
      </Section>

      <Section id="resumen" tone="dark">
        <SectionHeader kicker="Resumen ejecutivo para el equipo" title="La web no debe vender una caja." onDark />
        <div className="max-w-3xl space-y-5">
          {resumenEjecutivoVisual.map((p, i) => (
            <Reveal key={p.slice(0, 24)} delay={i * 0.07}>
              <p className={i === 2 ? 'font-display text-2xl leading-snug text-brass italic' : 'text-[1rem] leading-relaxed text-sand'}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        kicker="Siguiente capítulo"
        title="Del sistema visual a la máquina de conversión."
        primary={{ label: 'Explorar el ecommerce', to: '/ecommerce' }}
        secondary={{ label: 'Volver al universo', to: '/universo' }}
      />
    </>
  );
}
