import type { Umbral } from '../../data/kpis';
import Reveal from './Reveal';

interface KpiDashboardProps {
  umbrales: Umbral[];
}

/**
 * Dashboard de umbrales KPI (§24.2): cada indicador muestra su rango sano,
 * el punto de corrección y la decisión que habilita. El estado se comunica
 * con texto además de color (accesibilidad).
 */
export default function KpiDashboard({ umbrales }: KpiDashboardProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {umbrales.map((u, i) => (
        <Reveal key={u.kpi} delay={Math.min((i % 3) * 0.05, 0.2)} className="h-full">
          <article className="flex h-full flex-col rounded-md border border-sand/70 bg-parchment p-5 shadow-soft">
            <h3 className="font-sans text-[0.8rem] font-semibold tracking-[0.1em] text-chocolate uppercase">
              {u.kpi}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-sm bg-moss/10 px-3 py-2.5">
                <p className="font-sans text-[0.62rem] font-semibold tracking-[0.16em] text-moss uppercase">Bueno</p>
                <p className="mt-1 font-display text-lg leading-tight font-semibold text-chocolate">{u.bueno}</p>
              </div>
              <div className="rounded-sm bg-camel/10 px-3 py-2.5">
                <p className="font-sans text-[0.62rem] font-semibold tracking-[0.16em] text-camel uppercase">
                  Corregir si
                </p>
                <p className="mt-1 font-display text-lg leading-tight font-semibold text-chocolate">{u.corregirSi}</p>
              </div>
            </div>
            <p className="mt-3 text-[0.83rem] leading-relaxed text-carbon/75">
              <span className="font-semibold text-taupe">Decisión que habilita: </span>
              {u.decision}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
