import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { parseMarkdown } from '../../utils/markdown';
import { highlight } from '../../utils/highlight';

interface MarkdownProps {
  content: string;
  /** Término a resaltar dentro del texto renderizado. */
  query?: string;
}

/** Render editorial del markdown íntegro del Archivo Estratégico. */
export default function Markdown({ content, query = '' }: MarkdownProps) {
  const blocks = useMemo(() => parseMarkdown(content), [content]);
  const hl = (text: string): ReactNode => (query ? highlight(text, query) : text);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h4 key={i} className="pt-3 font-display text-xl leading-snug font-medium text-chocolate">
                {hl(block.text)}
              </h4>
            );
          case 'h3':
            return (
              <h5 key={i} className="pt-2 font-sans text-[0.8rem] font-semibold tracking-[0.12em] text-taupe uppercase">
                {hl(block.text)}
              </h5>
            );
          case 'p':
            return (
              <p key={i} className="max-w-[75ch] text-[0.93rem] leading-relaxed text-carbon/85">
                {hl(block.text)}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="max-w-[75ch] space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li key={j} className="list-disc text-[0.93rem] leading-relaxed text-carbon/85 marker:text-camel">
                    {hl(item)}
                  </li>
                ))}
              </ul>
            );
          case 'callout':
            return (
              <div key={i} className="max-w-[75ch] rounded-sm border-l-2 border-camel bg-sand/25 px-5 py-4">
                {block.lines.map((line, j) => (
                  <p key={j} className="font-display text-[1.05rem] leading-snug text-chocolate italic">
                    {hl(line)}
                  </p>
                ))}
              </div>
            );
          case 'table':
            return (
              <div key={i} className="scroll-elegant overflow-x-auto rounded-md border border-sand/70 bg-ivory/60">
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-sand bg-sand/30">
                      {block.columns.map((col, j) => (
                        <th
                          key={j}
                          scope="col"
                          className="px-4 py-2.5 align-bottom font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-chocolate uppercase"
                        >
                          {hl(col)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-sand/50 align-top last:border-b-0">
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-2.5 leading-relaxed text-carbon/85">
                            {hl(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
