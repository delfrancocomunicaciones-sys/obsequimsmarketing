import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { NAV_ITEMS } from '../data/navigation';
import { claims, tesisMadre, norteCreativo } from '../data/brand';
import heroCollection from '../assets/hero-collection.webp';
import fotoRelojes from '../assets/foto-momento-relojes.webp';
import fotoPulseras from '../assets/foto-momento-pulseras.webp';
import fotoRegalo from '../assets/foto-momento-regalo.webp';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import QuoteBlock from '../components/ui/QuoteBlock';
import CTASection from '../components/ui/CTASection';
import MetricCard from '../components/ui/MetricCard';

const MOMENTOS = [
  {
    title: 'Para relojes',
    text: 'El lugar que merece tu reloj cuando no lo llevas puesto. Protección, escala, viaje y autoridad funcional.',
    img: fotoRelojes,
    alt: 'Un hombre con traje coloca un reloj de pulsera en un estuche de piel camel abierto sobre una consola de madera, junto a un frasco de perfume.',
    to: '/producto',
  },
  {
    title: 'Para pulseras',
    text: 'No todo lo que usas para sentirte tú debería terminar en un cajón. Tocador, brazaletes y joyas rígidas.',
    img: fotoPulseras,
    alt: 'Manos de mujer guardan pulseras y brazaletes de oro en un estuche de piel marrón sobre un tocador de mármol, junto a un frasco de perfume y un espejo.',
    to: '/buyer-personas',
  },
  {
    title: 'Para regalar',
    text: 'Un regalo personal sin caer en lo obvio. Packaging, iniciales y una experiencia de apertura que se recuerda.',
    img: fotoRegalo,
    alt: 'Una persona entrega a otra un estuche de piel envuelto con lazo y tarjeta de marca Obsequiums, en un salón de ambiente cálido.',
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
      {/* Hero editorial claro: producto sobre fondo marfil, titular a dos tonos */}
      <section className="relative isolate overflow-hidden bg-ivory bg-grain">
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-28 md:pb-20">
          <motion.div {...enter(0)} className="flex items-center justify-between border-b border-sand/60 pb-4">
            <p className="kicker text-taupe">Marroquinería de lujo accesible</p>
            <p className="kicker flex items-center gap-2 text-taupe">
              Lanzamiento 2026 <span aria-hidden="true">·</span> <span lang="es">ES</span>
            </p>
          </motion.div>

          <div className="mt-10 grid items-center gap-10 md:mt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
            <div>
              <motion.h1
                {...enter(0.06)}
                className="font-display text-[3rem] leading-[0.98] font-semibold tracking-[-0.01em] text-carbon sm:text-[3.8rem] md:text-[5rem]"
              >
                <span className="block">El tiempo,</span>
                <span className="block font-medium text-brass italic">elegido con calma.</span>
              </motion.h1>
              <motion.p {...enter(0.16)} className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-carbon/75">
                Una colección breve y deliberada. Construida en torno a las piezas que merecen la espera — y los
                rituales que las hacen tuyas.
              </motion.p>
              <motion.p {...enter(0.22)} className="mt-4 max-w-md text-[0.9rem] leading-relaxed text-taupe">
                Estuches de piel personalizables para relojes, pulseras y piezas personales con valor.
              </motion.p>
              <motion.div {...enter(0.3)} className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/universo"
                  className="rounded-sm bg-carbon px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-chocolate"
                >
                  Entrar al universo
                </Link>
                <Link
                  to="/archivo-estrategico"
                  className="rounded-sm border border-greige/60 px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-chocolate uppercase transition-colors hover:border-carbon hover:text-carbon"
                >
                  Abrir el archivo estratégico
                </Link>
              </motion.div>
            </div>

            <motion.figure {...enter(0.2)} className="lg:-mr-6">
              <img
                src={heroCollection}
                alt="La colección Obsequiums: cinco estuches cilíndricos de piel abiertos —marrón, gris, camel, azul humo y verde musgo— sobre pedestales de tono arena."
                width={1920}
                height={1080}
                fetchPriority="high"
                className="h-auto w-full object-contain"
              />
            </motion.figure>
          </div>
        </div>
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
                <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={momento.img}
                    alt={momento.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
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

      {/* Cifras estratégicas del plan */}
      <Section tone="sand">
        <Reveal>
          <p className="kicker text-camel">El negocio, en cifras</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] font-medium text-chocolate md:text-4xl">
            Una hipótesis de marca con ambición y disciplina.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard value="170–210 €" label="Ticket medio objetivo" detail="Producto base 120–240 €, con personalización de 15–35 € como palanca de margen." index={0} />
          <MetricCard value="200.000" label="Comunidad cualificada · año 1" detail="Seguidores tratados como activo de negocio, no como métrica de vanidad." index={1} tone="accent" />
          <MetricCard value="12 meses" label="Roadmap de lanzamiento" detail="De la estrategia y el pre-lanzamiento a la expansión europea controlada." index={2} />
          <MetricCard value="13" label="Campañas del primer año" detail="Del teaser a la validación europea, cada una con su criterio de decisión." index={3} />
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
