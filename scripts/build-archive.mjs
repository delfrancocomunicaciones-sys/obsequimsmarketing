/**
 * Genera src/data/archive.generated.json a partir de las fuentes íntegras
 * en docs/sources/*.md. Cada documento se divide por encabezados de nivel 1
 * (capítulos) conservando el texto completo de cada sección, de modo que el
 * Archivo Estratégico del sitio contiene el 100% del contenido original.
 *
 * Se ejecuta automáticamente antes de `dev` y `build` (pre-scripts de npm).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcesDir = join(root, 'docs', 'sources');
const outFile = join(root, 'src', 'data', 'archive.generated.json');

const DOCS = [
  {
    file: 'plan-marketing-360.md',
    id: 'plan-marketing-360',
    title: 'Plan de Marketing 360 CMO Integral',
    subtitle:
      'Documento maestro ejecutable: marca, posicionamiento, producto, buyer personas, contenido, ecommerce, lanzamiento, canales, campañas, crecimiento, unit economics, presupuesto, IA, equipo, KPIs, riesgos, crítica de CEO y expansión europea.',
    origin: 'Obsequiums_Plan_Marketing_360_CMO_Integral.docx · Google Drive · extraído íntegro el 2026-07-04',
  },
  {
    file: 'brief-identidad-visual-web.md',
    id: 'brief-identidad-visual',
    title: 'Brief Técnico de Identidad Visual y Web',
    subtitle:
      'Dirección creativa integral para ecommerce-first: norte creativo, sistema cromático, tipografía, fotografía, video/ASMR, sitemap, home, PDP, personalización, gifting, componentes UI, SEO, accesibilidad, tracking, CMS, assets, copy y plan de trabajo.',
    origin: 'Obsequiums_Brief_Tecnico_Identidad_Visual_Web.docx · Google Drive · extraído íntegro el 2026-07-04',
  },
];

/** Limpia escapes de la conversión docx→markdown sin alterar el contenido. */
function unescape(text) {
  return text.replace(/\\([.\-<>\[\]()#*_|])/g, '$1');
}

function splitSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let current = null;
  let intro = [];
  for (const line of lines) {
    const h1 = line.match(/^# (.+)$/);
    if (h1) {
      if (current) sections.push(current);
      current = { heading: unescape(h1[1].trim()), body: [] };
    } else if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }
  if (current) sections.push(current);
  return { intro: intro.join('\n').trim(), sections };
}

mkdirSync(dirname(outFile), { recursive: true });

const available = readdirSync(sourcesDir);
const documents = DOCS.filter((d) => available.includes(d.file)).map((doc) => {
  const raw = readFileSync(join(sourcesDir, doc.file), 'utf8');
  // Quita el título repetido y la nota de fuente que añadimos al extraer.
  const withoutHeader = raw.replace(/^# .+\n\n> Fuente:.+\n\n/, '');
  const { intro, sections } = splitSections(withoutHeader);
  return {
    id: doc.id,
    title: doc.title,
    subtitle: doc.subtitle,
    origin: doc.origin,
    intro: unescape(intro),
    sections: sections.map((s, i) => ({
      id: `${doc.id}-s${i}`,
      heading: s.heading,
      body: unescape(s.body.join('\n').trim()),
    })),
  };
});

writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), documents }, null, 2));

// Estadísticas ligeras para páginas que no necesitan el contenido completo
// (evita arrastrar el JSON íntegro al bundle inicial).
const stats = {
  documentos: documents.length,
  secciones: documents.reduce((n, d) => n + d.sections.length, 0),
  caracteres: documents.reduce(
    (n, d) => n + d.intro.length + d.sections.reduce((m, s) => m + s.body.length, 0),
    0,
  ),
};
writeFileSync(join(root, 'src', 'data', 'archive.stats.json'), JSON.stringify(stats, null, 2));

console.log(
  `archive.generated.json → ${documents.length} documentos, ${documents.reduce((n, d) => n + d.sections.length, 0)} secciones, ${documents.reduce((n, d) => n + d.intro.length + d.sections.reduce((m, s) => m + s.body.length, 0), 0)} caracteres.`,
);
