import Reveal from './Reveal';

interface MetricCardProps {
  /** Valor destacado, p. ej. "179 €" o "1,4%-2,2%". */
  value: string;
  label: string;
  detail?: string;
  index?: number;
  tone?: 'default' | 'accent';
}

/** Métrica destacada con aparición suave. */
export default function MetricCard({ value, label, detail, index = 0, tone = 'default' }: MetricCardProps) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="h-full">
      <article
        className={`flex h-full flex-col rounded-md border p-5 shadow-soft ${
          tone === 'accent' ? 'border-camel/40 bg-chocolate text-ivory' : 'border-sand/70 bg-parchment'
        }`}
      >
        <p
          className={`font-display text-[1.9rem] leading-none font-semibold tracking-tight ${
            tone === 'accent' ? 'text-brass' : 'text-chocolate'
          }`}
        >
          {value}
        </p>
        <p
          className={`mt-2.5 font-sans text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${
            tone === 'accent' ? 'text-sand' : 'text-taupe'
          }`}
        >
          {label}
        </p>
        {detail && (
          <p className={`mt-2 text-[0.83rem] leading-relaxed ${tone === 'accent' ? 'text-ivory/75' : 'text-carbon/75'}`}>
            {detail}
          </p>
        )}
      </article>
    </Reveal>
  );
}
