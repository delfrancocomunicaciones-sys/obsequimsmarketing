import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Campaign } from '../../data/campaigns';
import Reveal from './Reveal';

interface CampaignGridProps {
  campaigns: Campaign[];
}

const DETAIL_FIELDS: { key: keyof Campaign; label: string }[] = [
  { key: 'publico', label: 'Público' },
  { key: 'canales', label: 'Canales' },
  { key: 'kpi', label: 'KPI' },
  { key: 'riesgo', label: 'Riesgo' },
  { key: 'criterioDecision', label: 'Criterio de decisión' },
  { key: 'conexionEcommerce', label: 'Conexión ecommerce' },
];

/**
 * Grid de campañas del primer año (§16). Cada card es expandible y conserva
 * los 11 campos del documento: concepto, objetivo, público, canales, timing,
 * presupuesto, KPI, riesgo, criterio de decisión y conexión ecommerce.
 */
export default function CampaignGrid({ campaigns }: CampaignGridProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {campaigns.map((c, i) => {
        const open = openId === c.id;
        const panelId = `${baseId}-${c.id}`;
        return (
          <Reveal key={c.id} delay={Math.min((i % 3) * 0.06, 0.2)} className="h-full">
            <article
              className={`flex h-full flex-col rounded-md border bg-parchment shadow-soft transition-shadow duration-300 ${
                open ? 'border-camel/50 shadow-lift' : 'border-sand/70 hover:shadow-lift'
              }`}
            >
              <div className="grow px-5 pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="kicker text-brass">{c.timing}</p>
                  <p className="font-sans text-[0.72rem] font-semibold whitespace-nowrap text-taupe">
                    {c.presupuesto}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-xl leading-snug font-medium text-chocolate">{c.nombre}</h3>
                <p className="mt-1.5 font-display text-[0.98rem] leading-snug text-carbon/80 italic">{c.concepto}</p>
                <p className="mt-3 text-[0.87rem] leading-relaxed text-carbon/85">
                  <span className="font-semibold text-taupe">Objetivo: </span>
                  {c.objetivo}
                </p>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={panelId}
                    initial={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <dl className="grid gap-3 border-t border-sand/60 px-5 pt-4 pb-2 text-[0.85rem] leading-relaxed">
                      {DETAIL_FIELDS.map(({ key, label }) => (
                        <div key={key}>
                          <dt className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] text-taupe uppercase">
                            {label}
                          </dt>
                          <dd className="mt-0.5 text-carbon/85">{c[key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : c.id)}
                className="mt-3 flex items-center gap-2 border-t border-sand/60 px-5 py-3.5 text-left font-sans text-[0.72rem] font-semibold tracking-[0.16em] text-camel uppercase transition-colors hover:bg-ivory/60 hover:text-chocolate"
              >
                {open ? 'Cerrar detalle' : 'Ver detalle completo'}
                <span aria-hidden="true" className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
