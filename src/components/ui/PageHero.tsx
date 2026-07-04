import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  /** Número de capítulo, p. ej. "02". */
  index: string;
  kicker: string;
  title: string;
  intro: string;
  /** Nota de fuente documental. */
  source?: string;
}

/** Cabecera editorial de páginas interiores. */
export default function PageHero({ index, kicker, title, intro, source }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <header className="relative isolate overflow-hidden bg-chocolate bg-grain">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_-10%,rgb(183_121_76/0.35),transparent_58%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <motion.p {...enter(0)} className="kicker text-brass">
          Capítulo {index} · {kicker}
        </motion.p>
        <motion.h1
          {...enter(0.08)}
          className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-medium text-ivory md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p {...enter(0.16)} className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-sand">
          {intro}
        </motion.p>
        {source && (
          <motion.p {...enter(0.22)} className="mt-6 font-sans text-[0.68rem] tracking-[0.16em] text-greige uppercase">
            {source}
          </motion.p>
        )}
      </div>
    </header>
  );
}
