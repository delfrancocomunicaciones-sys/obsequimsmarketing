import type { ReactNode } from 'react';
import Reveal from './Reveal';
import AssetPlaceholder from './AssetPlaceholder';

interface EditorialBlockProps {
  kicker?: string;
  title: string;
  children: ReactNode;
  /** Visual del bloque; por defecto, un placeholder premium etiquetado. */
  visual?: {
    label: string;
    kind?: 'foto' | 'video' | 'escena';
    tone?: 'camel' | 'moss' | 'smoke' | 'chocolate' | 'sand';
    ratio?: string;
  };
  /** Invierte el orden texto/visual en desktop. */
  reverse?: boolean;
}

/** Bloque editorial texto + visual, alternable, con mucho aire. */
export default function EditorialBlock({ kicker, title, children, visual, reverse = false }: EditorialBlockProps) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <Reveal>
        <div className="measure">
          {kicker && <p className="kicker mb-3 text-camel">{kicker}</p>}
          <h3 className="font-display text-2xl leading-snug font-medium text-chocolate md:text-3xl">{title}</h3>
          <div className="mt-4 space-y-4 text-[0.97rem] leading-relaxed text-carbon/85">{children}</div>
        </div>
      </Reveal>
      {visual && (
        <Reveal delay={0.12}>
          <AssetPlaceholder
            label={visual.label}
            kind={visual.kind}
            tone={visual.tone}
            ratio={visual.ratio ?? '4/3'}
          />
        </Reveal>
      )}
    </div>
  );
}
