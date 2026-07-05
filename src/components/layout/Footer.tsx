import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-chocolate bg-carbon bg-grain text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-medium tracking-tight lowercase">obsequiums</p>
            <p className="mt-4 max-w-xs font-display text-lg leading-snug text-sand italic">
              Para las piezas que no se guardan en cualquier lugar.
            </p>
            <p className="mt-3 max-w-sm text-[0.85rem] leading-relaxed text-greige">
              Estuches de piel personalizables para relojes, pulseras, brazaletes, joyas de viaje y piezas
              personales con valor emocional.
            </p>
          </div>

          <nav aria-label="Mapa del sitio">
            <p className="kicker text-brass">Explorar</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-sans text-[0.82rem] text-sand transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker text-brass">Sobre esta experiencia</p>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-greige">
              Este sitio convierte los documentos estratégicos de Obsequiums en una experiencia navegable:
              el Plan de Marketing 360 CMO Integral y el Brief Técnico de Identidad Visual y Web, íntegros,
              organizados y explorables.
            </p>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-greige">
              El contenido completo, palabra por palabra, vive en el{' '}
              <Link to="/archivo-estrategico" className="text-sand underline decoration-camel/60 underline-offset-4 transition-colors hover:text-ivory">
                Archivo estratégico
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-chocolate pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[0.7rem] tracking-[0.14em] text-greige uppercase">
            Obsequiums · Plan estratégico integral · España
          </p>
          <p className="font-sans text-[0.7rem] tracking-[0.14em] text-greige uppercase">
            Documento maestro vivo · hipótesis, activación, medición, aprendizaje y decisión
          </p>
        </div>
      </div>
    </footer>
  );
}
