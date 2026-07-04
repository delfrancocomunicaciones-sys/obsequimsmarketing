import type { EscenarioPresupuesto } from '../../data/budget';
import Reveal from './Reveal';

interface BudgetScenarioCardsProps {
  escenarios: EscenarioPresupuesto[];
}

/** Escenarios de presupuesto (§20) con el recomendado destacado. */
export default function BudgetScenarioCards({ escenarios }: BudgetScenarioCardsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {escenarios.map((e, i) => (
        <Reveal key={e.id} delay={Math.min(i * 0.08, 0.24)} className="h-full">
          <article
            className={`relative flex h-full flex-col rounded-md border p-6 shadow-soft ${
              e.recomendado ? 'border-camel/50 bg-chocolate text-ivory shadow-lift' : 'border-sand/70 bg-parchment'
            }`}
          >
            {e.recomendado && (
              <p className="absolute -top-3 left-6 rounded-sm bg-camel px-2.5 py-1 font-sans text-[0.62rem] font-semibold tracking-[0.18em] text-ivory uppercase">
                Escenario recomendado
              </p>
            )}
            <h3 className={`font-display text-2xl font-medium ${e.recomendado ? 'text-ivory' : 'text-chocolate'}`}>
              {e.nombre}
            </h3>
            <p className={`mt-4 font-display text-[2.1rem] leading-none font-semibold ${e.recomendado ? 'text-brass' : 'text-chocolate'}`}>
              {e.anual}
            </p>
            <p className={`mt-1.5 font-sans text-[0.75rem] tracking-wide ${e.recomendado ? 'text-sand' : 'text-taupe'}`}>
              {e.mensual} mensuales aprox.
            </p>
            <dl className={`mt-6 grid gap-4 text-[0.87rem] leading-relaxed ${e.recomendado ? 'text-ivory/85' : 'text-carbon/85'}`}>
              {(
                [
                  ['Qué permite', e.quePermite],
                  ['Resultado esperable', e.resultadoEsperable],
                  ['Riesgo principal', e.riesgoPrincipal],
                  ['Qué no esperar', e.queNoEsperar],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <dt
                    className={`font-sans text-[0.64rem] font-semibold tracking-[0.18em] uppercase ${
                      e.recomendado ? 'text-brass' : 'text-taupe'
                    }`}
                  >
                    {label}
                  </dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
