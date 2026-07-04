import type { ReactNode } from 'react';
import Reveal from './Reveal';

export interface TimelineEntry {
  /** Marcador breve: fase, trimestre o semana. */
  marker: string;
  title: string;
  content: ReactNode;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

/** Línea de tiempo vertical editorial con revelado progresivo. */
export default function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative ml-3 border-l border-greige/70 md:ml-4">
      {entries.map((entry, i) => (
        <li key={entry.marker + entry.title} className="relative pb-10 pl-8 last:pb-0 md:pl-10">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-camel bg-ivory"
          />
          <Reveal delay={Math.min(i * 0.05, 0.25)}>
            <p className="kicker text-brass">{entry.marker}</p>
            <h3 className="mt-1.5 font-display text-xl leading-snug font-medium text-chocolate md:text-2xl">
              {entry.title}
            </h3>
            <div className="mt-3">{entry.content}</div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
