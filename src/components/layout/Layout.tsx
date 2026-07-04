import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import BackToTop from '../ui/BackToTop';

/** Restaura el scroll al cambiar de ruta (conservando anchors). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-sm focus:bg-chocolate focus:px-4 focus:py-2.5 focus:font-sans focus:text-sm focus:text-ivory"
      >
        Saltar al contenido
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="contenido" className="grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
