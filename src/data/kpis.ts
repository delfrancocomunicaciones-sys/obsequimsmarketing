import type { Table } from './types';

/** KPIs, funnel, unit economics y crecimiento — Plan §18, §19, §24. */

/** §19 Modelo ecommerce, embudo, ventas y unit economics. */
export const modeloIntro =
  'El modelo ecommerce debe conectar comunidad con negocio. No basta con decir "comunidad genera ventas". Hay que medir alcance, visitas, leads, carritos, compras, ticket medio, CAC, margen, recompra y referidos. Además, el marketing necesita conocer el CAC máximo tolerable según margen.';

export const funnelEscenarios: Table = {
  caption: 'Embudo anual por escenarios (§19)',
  columns: ['Métrica', 'Escenario conservador', 'Escenario recomendado', 'Comentario'],
  rows: [
    ['Seguidores año 1', '120k', '200k', 'Calidad importa más que volumen.'],
    ['Alcance anual', '6M-10M', '12M-25M', 'Depende de orgánico + paid + creators.'],
    ['Visitas ecommerce', '80k-140k', '180k-320k', 'Tráfico cualificado, no solo clicks baratos.'],
    ['Registros email/waitlist', '8k-16k', '25k-45k', 'Activo propio para lanzamiento y gifting.'],
    ['Conversión ecommerce', '0,8%-1,2%', '1,4%-2,2%', 'Premium nuevo puede iniciar bajo y mejorar con CRO.'],
    ['Compras', '700-1.500', '2.500-5.500', 'Condicionado por stock y precio.'],
    ['Ticket medio', '160€-190€', '175€-220€', 'Sube con personalización/gift packs.'],
    ['Ventas potenciales', '112k-285k €', '437k-1,21M €', 'Hipótesis, no promesa.'],
    ['Carritos abandonados', '65%-78%', '60%-75%', 'Normal ecommerce; recuperar con CRM.'],
    ['Recuperación carrito', '8%-15%', '12%-22%', 'Depende de email/SMS, oferta y fricción.'],
    ['Recompra/regalo', '5%-10%', '10%-18%', 'Gifting y referidos pueden elevarla.'],
  ],
};

/** §19.1 Unit economics hipotéticos que el CEO pedirá. */
export interface UnitEconomic {
  elemento: string;
  hipotesis: string;
  implicacion: string;
  /** Valor destacado para visualización en dashboard. */
  destacado?: string;
}

export const unitEconomics: UnitEconomic[] = [
  { elemento: 'Precio producto', hipotesis: '179 €', implicacion: 'Punto de entrada premium accesible.', destacado: '179 €' },
  { elemento: 'Coste producto + packaging', hipotesis: '48 €', implicacion: 'Debe validarse con proveedor; incluye estuche y packaging estándar.', destacado: '48 €' },
  { elemento: 'Envío / logística', hipotesis: '9 €', implicacion: 'Puede variar por país y velocidad.', destacado: '9 €' },
  { elemento: 'Pasarela / devoluciones estimadas', hipotesis: '8 €', implicacion: 'Coste financiero y riesgo operativo.', destacado: '8 €' },
  { elemento: 'Margen bruto operativo', hipotesis: '114 €', implicacion: 'Antes de CAC y estructura.', destacado: '114 €' },
  { elemento: 'CAC máximo saludable', hipotesis: '35 € - 45 €', implicacion: 'Si supera este rango, depende de AOV/recompra/B2B.', destacado: '35-45 €' },
  { elemento: 'CAC ideal', hipotesis: '20 € - 30 €', implicacion: 'Permite escalar con más seguridad.', destacado: '20-30 €' },
  { elemento: 'AOV con personalización', hipotesis: '205 €', implicacion: 'La personalización mejora margen si no aumenta demasiado coste/plazo.', destacado: '205 €' },
  { elemento: 'Margen incremental personalización', hipotesis: '+15 € a +25 €', implicacion: 'Debe ser palanca de rentabilidad y vínculo.', destacado: '+15-25 €' },
];

/** §19.2 Validaciones de los primeros 90 días. */
export const validaciones90Dias: string[] = [
  'CTR de redes a web por mensaje: relojes, pulseras, regalo, viaje, piezas personales.',
  'Tasa de registro de waitlist/lead por landing.',
  'Tasa de add to cart en PDP.',
  'Tasa de conversión checkout.',
  'Preguntas frecuentes en chat/DM y objeciones reales.',
  'Color más elegido, color más comprado y color con mayor abandono.',
  'Elasticidad de precio y aceptación de personalización pagada.',
  'Conversión por segmento: mujer self-gift, mujer gifting, hombre reloj, B2B.',
  'Tasa de compra con packaging regalo.',
  'Tasa de reviews y UGC postcompra.',
  'Capacidad operativa de personalización por día.',
  'Devoluciones, incidencias y NPS.',
];

/** §24 Dashboard semanal. */
export const dashboardIntro =
  'Un dashboard de negocio, marca y aprendizaje. La pregunta fija del reporting debe ser: "¿Qué aprendimos esta semana que cambia una decisión?".';

export const dashboardSemanal: string[] = [
  'Inversión total semanal y acumulada.',
  'Ventas y margen.',
  'CAC y CAC por canal.',
  'ROAS si hay campañas de conversión.',
  'AOV y attach rate de personalización.',
  'Tasa de conversión ecommerce.',
  'Leads nuevos y CPL.',
  'Crecimiento de comunidad por canal.',
  'Tráfico web por fuente.',
  'Add to cart y checkout completion.',
  'Carritos abandonados y recuperación.',
  'Top creatividades y top mensajes.',
  'Top objeciones en chat/DM.',
  'Stock por color y capacidad de personalización.',
  'Tiempo de entrega e incidencias.',
  'Reviews, UGC y NPS.',
  'Decisiones tomadas: escalar, pausar, corregir, producir, reponer.',
];

/** §24.2 Umbrales orientativos. */
export interface Umbral {
  kpi: string;
  bueno: string;
  corregirSi: string;
  decision: string;
}

export const umbrales: Umbral[] = [
  { kpi: 'Engagement IG', bueno: '3%-6%', corregirSi: '<1,5%', decision: 'Revisar contenido, público, estética o frecuencia.' },
  { kpi: 'Saves/carrusel', bueno: '>3% del alcance', corregirSi: '<1%', decision: 'Reformular valor educativo/guía.' },
  { kpi: 'Share rate vídeo', bueno: '>1% del alcance', corregirSi: '<0,3%', decision: 'Revisar tensión cultural/hook.' },
  { kpi: 'CTR social a web', bueno: '0,8%-1,8%', corregirSi: '<0,5%', decision: 'Ajustar CTA, landing o intención.' },
  { kpi: 'Conversión ecommerce', bueno: '1,2%-2,2%', corregirSi: '<0,8%', decision: 'No escalar paid; hacer CRO.' },
  { kpi: 'Add to cart', bueno: '4%-8%', corregirSi: '<3%', decision: 'Revisar PDP, precio, valor, fotos.' },
  { kpi: 'Abandono checkout', bueno: '<70%', corregirSi: '>80%', decision: 'Revisar pagos, envío, costes, confianza.' },
  { kpi: 'Email signup', bueno: '5%-12%', corregirSi: '<3%', decision: 'Mejorar oferta de waitlist/lead magnet.' },
  { kpi: 'CPL waitlist', bueno: '0,80€-3,50€', corregirSi: '>5€', decision: 'Revisar mensaje/creatividad/segmento.' },
  { kpi: 'Recovery carrito', bueno: '12%-22%', corregirSi: '<8%', decision: 'Optimizar flujo, timing y objeciones.' },
  { kpi: 'UGC mensual', bueno: '20-80 piezas', corregirSi: '<10', decision: 'Revisar postcompra, packaging y creators.' },
  { kpi: 'DMs intención', bueno: 'Creciente y cualitativo', corregirSi: 'Estancado', decision: 'Revisar conversación y contenido de uso.' },
];

/** §18 Modelo de crecimiento hacia 200.000 seguidores cualificados. */
export const crecimientoIntro =
  'El objetivo de 200.000 seguidores debe ser tratado con seriedad. No es garantía ni métrica de vanidad. Es una meta de alcance, comunidad, prueba social y activo propio si se conecta con CRM, ecommerce, UGC y ventas. Un CEO exigente preguntaría por qué 200.000, qué pasa si hay menos pero venden mejor y qué pasa si se logra la cifra pero no convierte. La respuesta: los seguidores solo importan si son cualificados y accionables.';

export const objetivoPorCanal: Table = {
  caption: 'Objetivo de seguidores año 1 por canal (§18)',
  columns: ['Canal', 'Objetivo año 1', 'Función'],
  rows: [
    ['Instagram', '90.000', 'Deseo, comunidad, UGC, social proof, retargeting.'],
    ['TikTok', '65.000', 'Descubrimiento, viralidad, educación, tensión cultural.'],
    ['Pinterest', '25.000', 'Tráfico visual evergreen y gifting.'],
    ['YouTube Shorts', '10.000', 'Reutilización y alcance adicional.'],
    ['LinkedIn / otros', '10.000', 'B2B, founder, PR, private gifting.'],
    ['Total', '200.000', 'Comunidad acumulada cualificada.'],
  ],
};

export const crecimientoTrimestral: Table = {
  caption: 'Crecimiento trimestral de comunidad (§18)',
  columns: ['Trimestre', 'Seguidores objetivo', 'Palanca principal', 'Condición de cumplimiento'],
  rows: [
    ['Q1', '25.000', 'Teaser, waitlist, contenido sensorial, paid lead pequeño.', 'Mensaje claro y contenido con retención.'],
    ['Q2', '70.000', 'Lanzamiento, creators, paid testing, PR inicial.', 'PDP convierte y se puede amplificar.'],
    ['Q3', '125.000', 'UGC, pop-ups, PR, colaboraciones, retargeting.', 'Prueba social y activación física funcionan.'],
    ['Q4', '200.000', 'Gifting, paid scale, B2B, creators, test Europa.', 'Stock, packaging y logística soportan demanda.'],
  ],
};

export const fuentesCrecimiento: Table = {
  caption: 'Fuentes de crecimiento y peso estimado (§18)',
  columns: ['Fuente de crecimiento', 'Peso estimado', 'Comentario'],
  rows: [
    ['Orgánico propio', '25%-35%', 'Depende de retención, hooks, consistencia y calidad visual.'],
    ['Paid social', '25%-40%', 'Necesario para acelerar, pero solo con creatividad validada.'],
    ['Creators/influencers', '15%-25%', 'Debe priorizar contexto real, no solo alcance.'],
    ['PR', '5%-10%', 'Más autoridad que volumen directo.'],
    ['UGC', '5%-10%', 'Aumenta confianza y alimenta ads/PDP.'],
    ['Pop-ups/colaboraciones', '3%-7%', 'Menos volumen, mayor calidad y prueba táctil.'],
    ['Sorteos premium', '0%-5%', 'Solo si son selectivos y no atraen audiencia oportunista.'],
  ],
};

/** §18.1 Coste por seguidor y condiciones. */
export const costePorSeguidor =
  'Coste por seguidor cualificado estimado: 0,35 € a 1,80 € según canal, país, creatividad, calidad y momento. Para lujo accesible, el escenario recomendado debe usar un rango conservador de 0,70 € a 1,30 €. Eso implica entre 100.000 € y 220.000 € solo en amplificación y crecimiento social si se busca sostener calidad. En escenario mínimo, no sería realista prometer 200.000 seguidores: puede validar marca y ventas iniciales, pero no crecimiento masivo.';

export const kpisCalidadComunidad =
  'KPIs de calidad de comunidad: engagement rate, saves, shares, comentarios cualitativos, DMs, clics, registros, menciones orgánicas, UGC, tasa de conversión a base de datos y tasa de conversión ecommerce.';

export const senalesComunidad: string[] = [
  'Si hay followers pero no clics, se está creando entretenimiento sin intención.',
  'Si hay clics pero no registros ni carritos, la web o el valor percibido fallan.',
  'Si hay compras pero no UGC, la experiencia de recepción no es suficientemente memorable.',
  'Si hay 60.000 seguidores muy cualificados y ventas fuertes, eso vale más que 200.000 seguidores pasivos.',
];
