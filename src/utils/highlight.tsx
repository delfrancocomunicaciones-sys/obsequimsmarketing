import type { ReactNode } from 'react';
import { normalize } from './markdown';

/**
 * Normaliza conservando un mapa de cada índice normalizado → índice original.
 * Necesario porque `normalize` descompone en NFD y elimina diacríticos, lo que
 * cambia la longitud de la cadena: sin el mapa no se puede resaltar el texto
 * original con precisión.
 */
function normalizeWithMap(text: string): { norm: string; map: number[] } {
  let norm = '';
  const map: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const decomposed = text[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const c of decomposed) {
      norm += c;
      map.push(i);
    }
  }
  return { norm, map };
}

/** Nº de coincidencias del término (mín. 2 caracteres) en un texto. */
export function countMatches(text: string, query: string): number {
  const q = normalize(query.trim());
  if (q.length < 2) return 0;
  const norm = normalize(text);
  let count = 0;
  let i = 0;
  while ((i = norm.indexOf(q, i)) !== -1) {
    count += 1;
    i += q.length;
  }
  return count;
}

/** Limpia marcas de tabla/markdown para que los extractos se lean bien. */
function cleanForSnippet(text: string): string {
  return text
    .split('\n')
    // Descarta filas de alineación/separación de tablas (| :-: | :-: | …).
    .filter((line) => !/^\s*\|?[\s:|-]*-+[\s:|-]*\|?\s*$/.test(line))
    .map((line) => line.replace(/^#+\s*/, '').replace(/\|/g, ' '))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracto de ~radius caracteres centrado en la primera coincidencia,
 * conservando tildes y mayúsculas del original.
 */
export function snippetAround(text: string, query: string, radius = 130): string {
  const clean = cleanForSnippet(text);
  const q = normalize(query.trim());
  const { norm, map } = normalizeWithMap(clean);
  const idx = norm.indexOf(q);
  if (idx === -1) return clean.slice(0, radius * 2);
  const origStart = map[idx];
  const start = Math.max(0, origStart - radius);
  const end = Math.min(clean.length, origStart + q.length + radius);
  const body = clean.slice(start, end).trim();
  return (start > 0 ? '… ' : '') + body + (end < clean.length ? ' …' : '');
}

/**
 * Devuelve el texto con las coincidencias envueltas en <mark>.
 * Mapea índices normalizados a originales para no romper acentos.
 */
export function highlight(text: string, query: string): ReactNode {
  const q = normalize(query.trim());
  if (q.length < 2) return text;
  const { norm, map } = normalizeWithMap(text);
  if (!norm.includes(q)) return text;

  const parts: ReactNode[] = [];
  let last = 0;
  let from = 0;
  let match;
  let key = 0;
  while ((match = norm.indexOf(q, from)) !== -1) {
    const origStart = map[match];
    const origEnd = map[match + q.length - 1] + 1;
    if (origStart > last) parts.push(text.slice(last, origStart));
    parts.push(
      <mark key={key++} className="rounded-[2px] bg-camel/25 px-0.5 text-chocolate">
        {text.slice(origStart, origEnd)}
      </mark>,
    );
    last = origEnd;
    from = match + q.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
