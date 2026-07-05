import Reveal from './Reveal';

interface PhotoFrameProps {
  src: string;
  /** Texto alternativo descriptivo (obligatorio por accesibilidad). */
  alt: string;
  /** Etiqueta del universo fotográfico, mostrada sobre la imagen. */
  caption: string;
  /** Relación de aspecto CSS. */
  ratio?: string;
  index?: number;
}

/**
 * Marco editorial para fotografía real de producto: baja exposición, esquina
 * con etiqueta del universo, sombra suave. Reemplaza a AssetPlaceholder cuando
 * hay un asset definitivo.
 */
export default function PhotoFrame({ src, alt, caption, ratio = '4/5', index = 0 }: PhotoFrameProps) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.24)} className="h-full">
      <figure className="relative isolate h-full overflow-hidden rounded-md shadow-lift" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-carbon/75 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <span className="font-display text-lg leading-tight font-medium text-ivory">{caption}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
