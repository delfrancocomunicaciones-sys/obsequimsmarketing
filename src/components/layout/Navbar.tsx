import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';
import MobileNav from './MobileNav';

/** Navegación principal sticky con wordmark editorial. */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-sand/60 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-4 md:h-16 md:px-6">
          <Link
            to="/"
            className="font-display text-2xl font-medium tracking-tight text-chocolate lowercase md:text-[1.7rem]"
          >
            obsequiums
          </Link>

          <nav aria-label="Navegación principal" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV_ITEMS.filter((item) => item.path !== '/').map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block rounded-sm px-2.5 py-2 font-sans text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors ${
                        isActive ? 'text-camel' : 'text-taupe hover:text-chocolate'
                      }`
                    }
                  >
                    {item.short}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="menu-indice"
            className="flex items-center gap-2.5 rounded-sm px-2 py-2 font-sans text-[0.72rem] font-semibold tracking-[0.18em] text-chocolate uppercase transition-colors hover:text-camel xl:hidden"
          >
            Índice
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
