import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Fondo de la sección para crear ritmo editorial. */
  tone?: 'ivory' | 'parchment' | 'sand' | 'dark';
  className?: string;
}

const TONES = {
  ivory: 'bg-ivory',
  parchment: 'bg-parchment',
  sand: 'bg-sand/30',
  dark: 'bg-carbon bg-grain text-ivory',
};

/** Contenedor de sección con aire editorial y ancla navegable. */
export default function Section({ id, children, tone = 'ivory', className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${TONES[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}
