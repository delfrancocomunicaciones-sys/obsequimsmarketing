/**
 * Mini-parser de markdown para el Archivo Estratégico. Cubre exactamente lo
 * que producen las fuentes extraídas de los .docx: encabezados, párrafos,
 * listas y tablas con pipes (incluidas las filas de cabecera vacías y filas
 * de alineación que genera la conversión de Word).
 */

export type Block =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; lines: string[] }
  | { type: 'table'; columns: string[]; rows: string[][] };

function splitCells(line: string): string[] {
  let inner = line.trim();
  if (inner.startsWith('|')) inner = inner.slice(1);
  if (inner.endsWith('|')) inner = inner.slice(0, -1);
  return inner.split('|').map((c) => c.trim());
}

function isSkippableRow(cells: string[]): boolean {
  // Fila de alineación (| :-: |) o fila totalmente vacía (| | |).
  return cells.every((c) => c === '' || /^:?-+:?$/.test(c));
}

export function parseMarkdown(markdown: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] = [];
  let table: string[][] = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: 'p', text: para.join(' ') });
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: 'ul', items: list });
      list = [];
    }
  };
  const flushTable = () => {
    if (!table.length) return;
    const rows = table.filter((r) => r.some((c) => c !== ''));
    table = [];
    if (!rows.length) return;
    // Tablas de una sola columna del documento = destacados/callouts.
    if (rows.every((r) => r.length <= 1)) {
      blocks.push({ type: 'callout', lines: rows.map((r) => r[0]) });
      return;
    }
    blocks.push({ type: 'table', columns: rows[0], rows: rows.slice(1) });
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushTable();
  };

  for (const raw of markdown.split('\n')) {
    const line = raw.trim();

    if (line.startsWith('|')) {
      flushPara();
      flushList();
      const cells = splitCells(line);
      if (!isSkippableRow(cells)) table.push(cells);
      continue;
    }
    flushTable();

    if (line === '') {
      flushPara();
      flushList();
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flushAll();
      blocks.push({ type: 'h3', text: h3[1] });
      continue;
    }
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flushAll();
      blocks.push({ type: 'h2', text: h2[1] });
      continue;
    }
    const li = line.match(/^[-*]\s+(.+)$/);
    if (li) {
      flushPara();
      list.push(li[1]);
      continue;
    }
    flushList();
    para.push(line);
  }
  flushAll();
  return blocks;
}

/** Normaliza texto para búsqueda sin distinción de tildes ni mayúsculas. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
