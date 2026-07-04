import type { Fase } from '../../data/roadmap';
import Timeline from './Timeline';

interface RoadmapProps {
  fases: Fase[];
}

/** Roadmap de lanzamiento: cada fase con sus 7 dimensiones completas. */
export default function Roadmap({ fases }: RoadmapProps) {
  return (
    <Timeline
      entries={fases.map((fase) => ({
        marker: `Fase ${fase.numero}`,
        title: fase.nombre,
        content: (
          <div className="rounded-md border border-sand/70 bg-parchment p-5 shadow-soft">
            <dl className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                  Qué ocurre
                </dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{fase.queOcurre}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                  Por qué ahora
                </dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{fase.porQueAhora}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                  Qué debe estar listo
                </dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{fase.queDebeEstarListo}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                  Métricas
                </dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{fase.metricas}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.66rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                  Decisión siguiente
                </dt>
                <dd className="mt-1 text-[0.9rem] leading-relaxed text-carbon/85">{fase.decisionSiguiente}</dd>
              </div>
            </dl>
            <p className="mt-4 inline-flex rounded-sm bg-chocolate px-3 py-1.5 font-sans text-[0.72rem] font-semibold tracking-wide text-ivory">
              Inversión aprox. {fase.inversion}
            </p>
          </div>
        ),
      }))}
    />
  );
}
