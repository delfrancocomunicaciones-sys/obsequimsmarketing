/** Tipos compartidos del data layer. */

/** Tabla genérica: conserva matrices y tablas completas de los documentos. */
export interface Table {
  caption: string;
  columns: string[];
  rows: string[][];
  /** Nota al pie opcional (fuente, aclaración). */
  note?: string;
}

/** Par término / definición usado en plataformas, specs y glosarios. */
export interface Definition {
  term: string;
  detail: string;
}

/** Ítem con título + descripción para cards y listas estratégicas. */
export interface Item {
  title: string;
  detail: string;
}
