import type { Persona } from '../../data/personas';
import Reveal from './Reveal';

interface PersonaCardProps {
  persona: Persona;
  index?: number;
}

const FIELDS: { key: keyof Persona; label: string }[] = [
  { key: 'quienEs', label: 'Quién es' },
  { key: 'aspiracionTension', label: 'Aspiración / tensión' },
  { key: 'queLoHaceComprar', label: 'Qué le hace comprar' },
];

/** Ficha completa de buyer persona con su mensaje clave destacado. */
export default function PersonaCard({ persona, index = 0 }: PersonaCardProps) {
  return (
    <Reveal delay={Math.min(index * 0.07, 0.28)} className="h-full">
      <article className="flex h-full flex-col rounded-md border border-sand/70 bg-parchment shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <header className="border-b border-sand/60 px-6 pt-6 pb-5">
          <p className="kicker mb-2 text-brass">
            {persona.tipo === 'principal' ? 'Persona principal' : 'Persona secundaria'}
          </p>
          <h3 className="font-display text-[1.35rem] leading-snug font-medium text-chocolate">
            {persona.segmento}
          </h3>
        </header>
        <div className="flex grow flex-col gap-4 px-6 py-5">
          {FIELDS.map(({ key, label }) => (
            <div key={key}>
              <p className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                {label}
              </p>
              <p className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{persona[key]}</p>
            </div>
          ))}
          <div className="mt-auto rounded-sm border-l-2 border-camel bg-sand/25 px-4 py-3">
            <p className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-camel uppercase">
              Qué necesita escuchar
            </p>
            <p className="mt-1 font-display text-[1.02rem] leading-snug text-chocolate italic">
              {persona.queNecesitaEscuchar}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
