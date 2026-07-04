import Reveal from './Reveal';

interface SectionHeaderProps {
  /** Etiqueta corta en mayúsculas sobre el título. */
  kicker: string;
  title: string;
  /** Párrafo introductorio opcional. */
  intro?: string;
  /** Ancla para navegación interna. */
  id?: string;
  /** Tono claro para secciones sobre fondo oscuro. */
  onDark?: boolean;
}

export default function SectionHeader({ kicker, title, intro, id, onDark = false }: SectionHeaderProps) {
  return (
    <Reveal>
      <header id={id} className="mb-10 max-w-3xl scroll-mt-28 md:mb-14">
        <p className={`kicker mb-4 ${onDark ? 'text-brass' : 'text-camel'}`}>{kicker}</p>
        <h2
          className={`font-display text-3xl leading-[1.08] font-medium md:text-[2.65rem] ${
            onDark ? 'text-ivory' : 'text-chocolate'
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-5 text-[1.02rem] leading-relaxed ${onDark ? 'text-sand' : 'text-taupe'}`}>
            {intro}
          </p>
        )}
      </header>
    </Reveal>
  );
}
