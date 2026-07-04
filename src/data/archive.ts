/**
 * Archivo Estratégico: los documentos fuente completos, palabra por palabra.
 *
 * `archive.generated.json` se produce automáticamente con
 * `scripts/build-archive.mjs` a partir de las fuentes íntegras en
 * `docs/sources/*.md` (extraídas de los .docx originales). Esto garantiza que
 * el 100% del contenido de los documentos está disponible dentro del sitio,
 * sin transcripción manual ni riesgo de omisión.
 */
import generated from './archive.generated.json';

export interface ArchiveSection {
  id: string;
  heading: string;
  /** Markdown íntegro de la sección (párrafos, listas y tablas). */
  body: string;
}

export interface ArchiveDocument {
  id: string;
  title: string;
  subtitle: string;
  origin: string;
  intro: string;
  sections: ArchiveSection[];
}

export const archiveDocuments: ArchiveDocument[] = generated.documents;

export const archiveStats = {
  documentos: archiveDocuments.length,
  secciones: archiveDocuments.reduce((n, d) => n + d.sections.length, 0),
  caracteres: archiveDocuments.reduce(
    (n, d) => n + d.intro.length + d.sections.reduce((m, s) => m + s.body.length, 0),
    0,
  ),
};
