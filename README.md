# Obsequiums — Strategic Experience

Experiencia web premium que convierte los documentos estratégicos de **Obsequiums** —marca de marroquinería de lujo accesible: estuches de piel personalizables para relojes, pulseras, brazaletes, joyas de viaje y piezas personales con valor emocional— en un sitio editorial, navegable y completo.

> *Para las piezas que no se guardan en cualquier lugar.*

El sitio presenta el **Plan de Marketing 360 CMO Integral** (28 capítulos) y el **Brief Técnico de Identidad Visual y Web** (27 secciones) en dos capas:

1. **Capa curada** — once capítulos navegables con componentes de exploración (tablas, matrices, timelines, dashboards, cards expandibles).
2. **Capa íntegra** — el *Archivo Estratégico* (`/archivo-estrategico`): los dos documentos completos, palabra por palabra, con buscador y modo "ver todo". Se genera automáticamente desde las fuentes; nada del contenido original se pierde.

## Stack

- [Vite](https://vitejs.dev) + [React 18](https://react.dev) + TypeScript (estricto)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de la paleta del brief en `src/styles/index.css`)
- [Framer Motion](https://www.framer.com/motion/) (animaciones con respeto de `prefers-reduced-motion`)
- React Router (rutas internas + índices de sección con anchors)
- Fuentes self-hosted vía Fontsource: Cormorant Garamond (display) e Inter (funcional)
- Sin backend: frontend estático listo para desplegar en cualquier hosting

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo local (http://localhost:5173)
npm run build    # build de producción → dist/ (incluye typecheck)
npm run preview  # previsualizar el build (http://localhost:4173)
```

`dev` y `build` ejecutan antes `scripts/build-archive.mjs`, que regenera el Archivo Estratégico desde las fuentes.

## Estructura

```
docs/
  content-audit.md         ← auditoría de contenido obligatoria (fuentes, clasificación, mapeo, checklist)
  sources/                 ← texto ÍNTEGRO extraído de los .docx originales (fuente de verdad)
    plan-marketing-360.md
    brief-identidad-visual-web.md
scripts/
  build-archive.mjs        ← genera src/data/archive.generated.json + archive.stats.json
src/
  components/
    layout/                ← Layout, Navbar, MobileNav, Footer
    ui/                    ← Hero de página, SectionHeader, EditorialBlock, StrategyCard,
                             MetricCard, PersonaCard, Timeline, Roadmap, Accordion, Tabs,
                             DataTable, RiskMatrix, KpiDashboard, BudgetScenarioCards,
                             CampaignGrid, ContentArchive, AssetPlaceholder, QuoteBlock,
                             CTASection, ScrollProgress, BackToTop, SectionNav, Reveal, Markdown
  data/                    ← data layer tipado, separado del layout
    brand.ts · product.ts · personas.ts · visualIdentity.ts · ecommerce.ts
    marketing360.ts · campaigns.ts · roadmap.ts · kpis.ts · budget.ts
    risks.ts · navigation.ts · archive.ts (+ archive.generated.json, generado)
  pages/                   ← una página por capítulo (11 rutas + 404)
  styles/index.css         ← tokens de diseño (paleta HEX del brief, tipografía, utilidades)
  utils/markdown.ts        ← mini-parser markdown del archivo (tablas de Word incluidas)
```

## Rutas

`/` Manifiesto · `/universo` · `/producto` · `/identidad-visual` · `/ecommerce` · `/buyer-personas` · `/marketing-360` · `/roadmap` · `/kpis-presupuesto` · `/riesgos` · `/archivo-estrategico`

> El sitio es una SPA: si lo sirves fuera de `vite preview`, configura el fallback de historial (todas las rutas → `index.html`).

## Dónde está cada cosa

- **Auditoría de contenido**: `docs/content-audit.md` — qué documentos existen, cómo se clasificaron, índice completo detectado, mapeo sección→sitio y checklist de incorporación.
- **Data layer**: `src/data/` — todo el contenido curado está tipado y separado de los componentes. Para corregir un dato (un precio, un KPI), edita el archivo de datos correspondiente; ninguna cifra está hardcodeada en el layout.
- **Contenido íntegro**: `docs/sources/*.md`. No edites `archive.generated.json` a mano; cambia la fuente y regenera (automático en `dev`/`build`).

## Assets y placeholders

No existían assets visuales en el proyecto. Todos los visuales del sitio son **placeholders premium claramente etiquetados** (componente `AssetPlaceholder`: gradiente cálido + marco + etiqueta "Placeholder · foto/video/escena" + descripción de la pieza a producir).

Para reemplazar uno: localiza el `<AssetPlaceholder label="…">` correspondiente y sustitúyelo por `<img>` o `<video>` (mismo `aspect-ratio`, `loading="lazy"`, `alt` descriptivo siguiendo el patrón del Brief §16.2). La lista completa de assets a producir está en `/ecommerce#assets` y en `docs/content-audit.md` §7.

## Accesibilidad y performance

- HTML semántico, headings ordenados, tablas con `caption`/`scope`, labels reales, focus visible, navegación completa por teclado (tabs con flechas, accordions y menú con Escape).
- `prefers-reduced-motion` desactiva todas las animaciones de entrada y suavizados.
- Code-splitting por ruta: el bundle inicial es ~16 KB gzip de JS propio + vendors; el JSON del archivo (139k caracteres) solo se carga al entrar en `/archivo-estrategico`.
- Fuentes locales (woff2, subset latino), sin peticiones a terceros.

## Checklist de QA

- [x] `npm run build` compila sin errores ni warnings críticos
- [x] Las 11 rutas cargan sin errores de consola (verificado con Playwright, desktop 1440px y mobile 390px)
- [x] Navegación: navbar, menú índice móvil (con Escape y bloqueo de scroll), índices de sección sticky, footer, back-to-top, scroll progress
- [x] Archivo Estratégico: 2 documentos, 56 secciones íntegras; buscador (insensible a tildes) abre las secciones coincidentes; modo "ver todo"
- [x] Tablas anchas con scroll horizontal elegante en mobile (sin desbordar el layout)
- [x] Campañas: 13 cards expandibles con los 11 campos del documento
- [x] Animaciones sobrias (fade + y, 400-700 ms) y desactivables con reduced motion
- [x] Contraste AA en texto principal sobre todos los fondos de la paleta
- [x] Sin lorem ipsum; los únicos placeholders son visuales y están etiquetados
- [x] Todo el contenido de los documentos disponible en el sitio (curado + archivo íntegro)

## Próximos pasos técnicos sugeridos

1. Producir la biblioteca de assets (Brief §20) y reemplazar los `AssetPlaceholder`.
2. Añadir metadatos OG/Twitter e imágenes sociales cuando exista fotografía real.
3. Si se despliega en Netlify/Vercel/Cloudflare, añadir la regla SPA de rewrites.
4. Opcional: prerender (SSG) de las 11 rutas para SEO si el sitio se hace público.
