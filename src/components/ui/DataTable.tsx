import type { Table } from '../../data/types';
import Reveal from './Reveal';

interface DataTableProps {
  table: Table;
  /** Oculta visualmente la caption si el contexto ya la anuncia. */
  hideCaption?: boolean;
}

/**
 * Tabla semántica y responsive: en pantallas estrechas el contenedor
 * desplaza horizontalmente con scrollbar sobria, sin romper el layout.
 */
export default function DataTable({ table, hideCaption = false }: DataTableProps) {
  return (
    <Reveal>
      <div className="scroll-elegant overflow-x-auto rounded-md border border-sand/70 bg-parchment shadow-soft">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption
            className={
              hideCaption
                ? 'sr-only'
                : 'border-b border-sand/70 px-5 py-3.5 text-left font-sans text-[0.8rem] font-medium tracking-wide text-taupe'
            }
          >
            {table.caption}
          </caption>
          <thead>
            <tr className="border-b border-sand bg-ivory/70">
              {table.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-5 py-3 align-bottom font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-chocolate uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-sand/50 align-top transition-colors last:border-b-0 hover:bg-ivory/60"
              >
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th
                      key={j}
                      scope="row"
                      className="px-5 py-3.5 font-sans text-[0.85rem] font-semibold text-chocolate"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="px-5 py-3.5 leading-relaxed text-carbon/85">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {table.note && (
          <p className="border-t border-sand/70 px-5 py-3 text-xs leading-relaxed text-taupe">{table.note}</p>
        )}
      </div>
    </Reveal>
  );
}
