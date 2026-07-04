import type { Table } from './types';

/** Presupuesto recomendado por escenarios — Plan Marketing 360 §20. */

export const presupuestoIntro =
  'El presupuesto debe responder a la ambición. No se puede pedir 200.000 seguidores cualificados, ecommerce premium, contenido sensorial, CRM, PR, creators, pop-ups y expansión europea con inversión mínima. Sí se puede validar con menos, pero no prometer el mismo resultado.';

export interface EscenarioPresupuesto {
  id: string;
  nombre: string;
  anual: string;
  mensual: string;
  quePermite: string;
  resultadoEsperable: string;
  riesgoPrincipal: string;
  queNoEsperar: string;
  recomendado?: boolean;
}

export const escenarios: EscenarioPresupuesto[] = [
  {
    id: 'minimo',
    nombre: 'Mínimo serio / viable',
    anual: '90k-130k €',
    mensual: '7,5k-11k €',
    quePermite:
      'Lanzar bien, validar producto, crear contenido base, paid testing, CRM simple, primeros creators.',
    resultadoEsperable: '40k-80k seguidores, primeras ventas, aprendizaje real.',
    riesgoPrincipal: 'No alcanzar 200k ni PR fuerte.',
    queNoEsperar: 'Escala masiva, pop-ups grandes, Europa seria.',
  },
  {
    id: 'recomendado',
    nombre: 'Recomendado',
    anual: '200k-320k €',
    mensual: '16k-27k €',
    quePermite:
      'Construir marca, ecommerce, contenido constante, creators, paid, PR, pop-ups selectivos, CRM robusto.',
    resultadoEsperable: '150k-220k seguidores, ecommerce validado, comunidad accionable.',
    riesgoPrincipal: 'Exige ejecución excelente y operaciones sólidas.',
    queNoEsperar: 'Resultados garantizados sin product-market fit.',
    recomendado: true,
  },
  {
    id: 'acelerado',
    nombre: 'Acelerado',
    anual: '450k-700k €',
    mensual: '37k-58k €',
    quePermite:
      'Buscar 200k+, PR fuerte, paid scale, creators premium, pop-ups, B2B, Europa test.',
    resultadoEsperable: '200k+ seguidores si creatividad/producto convierten; potencial venta alta.',
    riesgoPrincipal: 'Burn alto si la web/producto no convierten.',
    queNoEsperar: 'Rentabilidad inmediata si CAC o stock fallan.',
  },
];

export const partidasPresupuesto: Table = {
  caption: 'Partidas de presupuesto: rangos anuales recomendados (§20)',
  columns: ['Partida', 'Rango anual recomendado', 'Comentario'],
  rows: [
    ['Branding/diseño/copy', '15k-35k €', 'Plataforma de marca, mensajes, guías, campañas.'],
    ['Ecommerce/UX/CRO', '25k-60k €', 'Setup web, PDP, landings, analítica, CRO.'],
    ['Producción foto/vídeo', '35k-80k €', 'Producto táctil; no recortar.'],
    ['Paid media', '70k-140k €', 'Testing, leads, retargeting, conversión, escala.'],
    ['Creators/influencers', '25k-70k €', 'UGC, prueba social, contextos reales.'],
    ['PR', '10k-35k €', 'Ángulo, gift guides, autoridad.'],
    ['Pop-ups', '20k-70k €', 'Experiencia táctil y contenido.'],
    ['CRM/email/tools', '8k-25k €', 'Flujos, segmentación, automatización.'],
    ['IA/data/automatización', '5k-20k €', 'Listening, reporting, producción asistida, CRM.'],
    ['Customer care/venta asistida', '5k-25k €', 'Según volumen; clave en premium.'],
  ],
};

/** §20.1 Qué recortar y qué no recortar. */
export const recortarVsNo: { recortar: string; noRecortar: string }[] = [
  { recortar: 'Pop-ups grandes; hacer activaciones pequeñas en espacios aliados.', noRecortar: 'Fotografía y vídeo de producto.' },
  { recortar: 'PR full agency; usar freelance senior y pitch quirúrgico.', noRecortar: 'Ecommerce mobile, PDP y checkout.' },
  { recortar: 'Influencers grandes; priorizar microcreators con contexto real.', noRecortar: 'Packaging de entrega y regalo.' },
  { recortar: 'Producción excesiva; crear sesiones inteligentes reutilizables.', noRecortar: 'CRM básico y medición.' },
  { recortar: 'Europa; testear solo cuando España valide.', noRecortar: 'Atención al cliente y claridad de envíos/devoluciones.' },
];
