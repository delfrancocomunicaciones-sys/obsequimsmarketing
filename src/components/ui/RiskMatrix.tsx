import type { Riesgo } from '../../data/risks';
import Reveal from './Reveal';

interface RiskMatrixProps {
  riesgos: Riesgo[];
}

/**
 * Matriz de riesgos completa: cards en mobile, lectura matricial en desktop.
 * Cada riesgo conserva sus cinco dimensiones del documento (§25).
 */
export default function RiskMatrix({ riesgos }: RiskMatrixProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {riesgos.map((r, i) => (
        <Reveal key={r.riesgo} delay={Math.min((i % 4) * 0.05, 0.2)} className="h-full">
          <article className="flex h-full flex-col rounded-md border border-sand/70 bg-parchment shadow-soft">
            <header className="flex items-start justify-between gap-3 border-b border-sand/60 px-5 py-4">
              <h3 className="font-display text-lg leading-snug font-medium text-chocolate">{r.riesgo}</h3>
              <span className="mt-0.5 shrink-0 rounded-sm bg-chocolate/90 px-2 py-1 font-sans text-[0.62rem] font-semibold tracking-[0.14em] text-ivory uppercase">
                Impacto: {r.impacto.replace(/\.$/, '')}
              </span>
            </header>
            <dl className="grid grow gap-3 px-5 py-4 text-[0.87rem] leading-relaxed">
              <div>
                <dt className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-taupe uppercase">Por qué puede ocurrir</dt>
                <dd className="mt-0.5 text-carbon/85">{r.porQue}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-taupe uppercase">Señal temprana</dt>
                <dd className="mt-0.5 text-carbon/85">{r.senalTemprana}</dd>
              </div>
              <div className="rounded-sm border-l-2 border-moss bg-moss/10 px-3 py-2">
                <dt className="font-sans text-[0.64rem] font-semibold tracking-[0.18em] text-moss uppercase">Prevención / corrección</dt>
                <dd className="mt-0.5 text-carbon/90">{r.prevencion}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
