import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="kicker text-camel">Error 404</p>
        <h1 className="mt-4 font-display text-4xl leading-tight font-medium text-chocolate md:text-5xl">
          Esta página no se guarda en ningún lugar.
        </h1>
        <p className="mt-5 text-[1rem] leading-relaxed text-taupe">
          La ruta que buscas no existe. Vuelve al manifiesto o abre el índice para explorar los once capítulos.
        </p>
        <Link
          to="/"
          className="mt-9 inline-block rounded-sm bg-camel px-7 py-3.5 font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-brass"
        >
          Volver al manifiesto
        </Link>
      </div>
    </section>
  );
}
