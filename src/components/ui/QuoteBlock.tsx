import Reveal from './Reveal';

interface QuoteBlockProps {
  quote: string;
  /** Atribución o contexto de la cita. */
  source?: string;
  /** Variante tonal. */
  tone?: 'light' | 'dark';
}

/** Cita editorial de gran formato para tesis y frases madre. */
export default function QuoteBlock({ quote, source, tone = 'light' }: QuoteBlockProps) {
  return (
    <Reveal>
      <figure
        className={`rounded-md border px-7 py-9 md:px-12 md:py-12 ${
          tone === 'dark'
            ? 'border-chocolate/60 bg-chocolate text-ivory'
            : 'border-sand/80 bg-sand/30 text-chocolate'
        }`}
      >
        <blockquote>
          <p className="font-display text-2xl leading-snug font-medium text-balance italic md:text-[1.85rem]">
            {quote}
          </p>
        </blockquote>
        {source && (
          <figcaption
            className={`mt-5 font-sans text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
              tone === 'dark' ? 'text-brass' : 'text-camel'
            }`}
          >
            {source}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
