import Reveal from './Reveal';

interface StrategyCardProps {
  title: string;
  detail: string;
  /** Índice para escalonar la animación dentro de un grid. */
  index?: number;
  /** Etiqueta pequeña superior opcional. */
  eyebrow?: string;
}

/** Card estratégica sobria para conceptos, definiciones y decisiones. */
export default function StrategyCard({ title, detail, index = 0, eyebrow }: StrategyCardProps) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="h-full">
      <article className="group h-full rounded-md border border-sand/70 bg-parchment p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
        {eyebrow && <p className="kicker mb-3 text-brass">{eyebrow}</p>}
        <h3 className="font-display text-xl leading-snug font-medium text-chocolate">{title}</h3>
        <div className="mt-3 h-px w-8 bg-camel/60 transition-all duration-300 group-hover:w-14" aria-hidden="true" />
        <p className="mt-3 text-[0.92rem] leading-relaxed text-carbon/80">{detail}</p>
      </article>
    </Reveal>
  );
}
