interface AssetPlaceholderProps {
  /** Descripción del asset final, p. ej. "Macro de cuero y costura". */
  label: string;
  /** Tipo de pieza a producir. */
  kind?: 'foto' | 'video' | 'escena';
  /** Relación de aspecto CSS, p. ej. '4/5'. */
  ratio?: string;
  /** Paleta atmosférica del placeholder. */
  tone?: 'camel' | 'moss' | 'smoke' | 'chocolate' | 'sand';
  className?: string;
}

const TONES: Record<NonNullable<AssetPlaceholderProps['tone']>, string> = {
  camel: 'from-[#c9905f] via-camel to-chocolate',
  moss: 'from-[#77816f] via-moss to-[#3b4136]',
  smoke: 'from-[#8595a5] via-smoke to-[#3f4a56]',
  chocolate: 'from-[#6b4c3a] via-chocolate to-carbon',
  sand: 'from-[#e7ddcf] via-sand to-greige',
};

/**
 * Placeholder premium para assets pendientes de producción. Identifica
 * claramente qué pieza real debe reemplazarlo (regla del proyecto: sin
 * imágenes externas; placeholders bien etiquetados).
 */
export default function AssetPlaceholder({
  label,
  kind = 'foto',
  ratio = '4/5',
  tone = 'camel',
  className = '',
}: AssetPlaceholderProps) {
  return (
    <figure
      className={`relative isolate overflow-hidden rounded-md shadow-lift ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${TONES[tone]}`} aria-hidden="true" />
      {/* Veladura y grano sutil para atmósfera de baja exposición */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 20%, rgb(255 253 248 / 0.28), transparent 55%), radial-gradient(rgb(0 0 0 / 0.16) 1px, transparent 1.5px)',
          backgroundSize: 'auto, 5px 5px',
        }}
      />
      <div className="absolute inset-3 rounded-[3px] border border-ivory/25" aria-hidden="true" />
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <span className="font-sans text-[0.62rem] font-semibold tracking-[0.22em] text-ivory/75 uppercase">
          Placeholder · {kind}
        </span>
        <span className="font-display text-lg leading-tight font-medium text-ivory">{label}</span>
      </figcaption>
    </figure>
  );
}
