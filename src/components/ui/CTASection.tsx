import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface CTASectionProps {
  kicker: string;
  title: string;
  text?: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}

/** Cierre de página: invitación a seguir explorando el sistema estratégico. */
export default function CTASection({ kicker, title, text, primary, secondary }: CTASectionProps) {
  return (
    <section className="bg-carbon bg-grain">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="kicker text-brass">{kicker}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-[1.1] font-medium text-ivory md:text-5xl">
            {title}
          </h2>
          {text && <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-sand">{text}</p>}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primary.to}
              className="rounded-sm bg-camel px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-brass"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="rounded-sm border border-greige/50 px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-sand uppercase transition-colors hover:border-sand hover:text-ivory"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
