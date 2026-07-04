import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { NAV_ITEMS } from '../data/navigation';
import { claims, tesisMadre, norteCreativo } from '../data/brand';
import archiveStats from '../data/archive.stats.json';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import QuoteBlock from '../components/ui/QuoteBlock';
import AssetPlaceholder from '../components/ui/AssetPlaceholder';
import CTASection from '../components/ui/CTASection';
import MetricCard from '../components/ui/MetricCard';

const MOMENTOS = [
  {
    title: 'Para relojes',
    text: 'El lugar que merece tu reloj cuando no lo llevas puesto. Protección, escala, viaje y autoridad funcional.',
    placeholder: 'Reloj entrando en el estuche, luz lateral',
    tone: 'chocolate' as const,
    to: '/producto',
  },
  {
    title: 'Para pulseras',
    text: 'No todo lo que usas para sentirte tú debería terminar en un cajón. Tocador, brazaletes y joyas rígidas.',
    placeholder: 'Escena de tocador con pulseras y estuche abierto',
    tone: 'camel' as const,
    to: '/buyer-personas',
  },
  {
    title: 'Para regalar',
    text: 'Un regalo personal sin caer en lo obvio. Packaging, iniciales y una experiencia de apertura que se recuerda.',
    placeholder: 'Manos entregando la caja regalo con tarjeta',
    tone: 'moss' as const,
    to: '/ecommerce',
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <>
      {/* Hero sensorial: instala el universo antes de explicar (Brief §9.1) */}
      <section className="relative isolate overflow-hidden bg-carbon bg-grain">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-20%,rgb(183_121_76/0.4),transparent_55%),radial-gradient(ellipse_at_95%_115%,rgb(89_97_83/0.35),transparent_50%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-32 pb-20 md:pt-44 md:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p {...enter(0)} className="kicker text-brass">
              Obsequiums · Marroquinería de lujo accesible · España
            </motion.p>
            <motion.h1
              {...enter(0.1)}
              className="mt-6 font-display text-[2.7rem] leading-[1.02] font-medium text-ivory md:text-[4.3rem]"
            >
              Para las piezas que no se guardan en cualquier lugar.
            </motion.h1>
            <motion.p {...enter(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-sand">
              {claims.functional}
            </motion.p>
            <motion.div {...enter(0.3)} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/universo"
                className="rounded-sm bg-camel px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-brass"
              >
                Entrar al universo
              </Link>
              <Link
                to="/archivo-estrategico"
                className="rounded-sm border border-greige/50 px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-sand uppercase transition-colors hover:border-sand hover:text-ivory"
              >
                Abrir el archivo estratégico
              </Link>
            </motion.div>
          </div>
          <motion.div {...enter(0.25)} className="hidden lg:block">
            <AssetPlaceholder
              label="Video hero: manos abriendo el estuche, pieza entrando"
              kind="video"
              tone="chocolate"
              ratio="4/5"
            />
          </motion.div>
        </div>
        <div aria-hidden="true" className="relative h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      </section>

      {/* Qué es: claridad inmediata tras la emoción */}
      <Section tone="ivory">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker text-camel">Qué es este sitio</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] font-medium text-chocolate md:text-4xl">
              El plan estratégico integral de una marca, convertido en experiencia navegable.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[1.02rem] leading-relaxed text-carbon/85">
              <p>
                Obsequiums es una marca de marroquinería de lujo accesible: estuches de piel personalizables
                para relojes, pulseras, brazaletes, joyas de viaje y piezas personales con valor emocional.
              </p>
              <p>
                Este sitio presenta su sistema estratégico completo — marca, producto, identidad visual,
                ecommerce, buyer personas, marketing 360, roadmap, KPIs, presupuesto y riesgos — sin resumir
                hasta perder profundidad. Cada capítulo es explorable; el contenido íntegro de los documentos
                vive en el Archivo estratégico.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-14">
          <QuoteBlock quote={tesisMadre} source="Tesis madre · Plan de Marketing 360" />
        </div>
      </Section>

      {/* Los tres momentos (Brief §9, sección 3) */}
      <Section tone="parchment" id="momentos">
        <Reveal>
          <p className="kicker text-camel">Los tres momentos</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] font-medium text-chocolate md:text-4xl">
            Elige por el momento, no solo por el objeto.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MOMENTOS.map((momento, i) => (
            <Reveal key={momento.title} delay={i * 0.08} className="h-full">
              <Link
                to={momento.to}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-sand/70 bg-ivory shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <AssetPlaceholder
                  label={momento.placeholder}
                  kind="escena"
                  tone={momento.tone}
                  ratio="4/3"
                  className="rounded-none shadow-none"
                />
                <div className="flex grow flex-col p-6">
                  <h3 className="font-display text-2xl font-medium text-chocolate">{momento.title}</h3>
                  <p className="mt-2.5 grow text-[0.92rem] leading-relaxed text-carbon/80">{momento.text}</p>
                  <p className="mt-4 font-sans text-[0.72rem] font-semibold tracking-[0.16em] text-camel uppercase transition-colors group-hover:text-chocolate">
                    Explorar →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Norte creativo como respiro editorial */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="kicker text-brass">La idea rectora</p>
            <p className="mt-6 font-display text-3xl leading-snug font-medium text-ivory italic md:text-4xl">
              «La calma de cuidar lo que importa.»
            </p>
            <p className="mt-6 text-[1rem] leading-relaxed text-sand">
              {norteCreativo.conceptoVisual}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Índice de capítulos */}
      <Section tone="ivory" id="capitulos">
        <Reveal>
          <p className="kicker text-camel">La experiencia</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] font-medium text-chocolate md:text-4xl">
            Once capítulos para explorar la marca, la estrategia y el negocio.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_ITEMS.filter((item) => item.path !== '/').map((item, i) => (
            <Reveal key={item.path} delay={Math.min((i % 3) * 0.06, 0.2)} className="h-full">
              <li className="h-full">
                <Link
                  to={item.path}
                  className="group flex h-full flex-col rounded-md border border-sand/70 bg-parchment p-6 shadow-soft transition-all duration-300 hover:border-camel/50 hover:shadow-lift"
                >
                  <p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-brass">
                    Capítulo {item.index}
                  </p>
                  <h3 className="mt-2 font-display text-[1.4rem] leading-snug font-medium text-chocolate transition-colors group-hover:text-camel">
                    {item.label}
                  </h3>
                  <p className="mt-2 grow text-[0.88rem] leading-relaxed text-carbon/75">{item.description}</p>
                  <p className="mt-4 h-px w-8 bg-camel/60 transition-all duration-300 group-hover:w-16" aria-hidden="true" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Profundidad documental en cifras */}
      <Section tone="sand">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard value="2" label="Documentos maestros" detail="Plan Marketing 360 CMO Integral y Brief Técnico de Identidad Visual y Web, íntegros." index={0} />
          <MetricCard value={String(archiveStats.secciones)} label="Secciones en el archivo" detail="Cada capítulo original conservado palabra por palabra." index={1} />
          <MetricCard value="13" label="Campañas del primer año" detail="De Teaser a European test, con presupuesto y criterio de decisión." index={2} />
          <MetricCard value="6+14" label="Personas y momentos" detail="Buyer personas y momentos íntimos de conexión completos." index={3} />
        </div>
      </Section>

      <CTASection
        kicker="El cierre del manifiesto"
        title={claims.closing}
        text="Explora el universo de marca o entra directamente a la profundidad del archivo. Todo el contenido está disponible; todo está cuidado."
        primary={{ label: 'Comenzar por el universo', to: '/universo' }}
        secondary={{ label: 'Ver el roadmap', to: '/roadmap' }}
      />
    </>
  );
}
