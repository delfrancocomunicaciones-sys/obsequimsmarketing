import type { Table } from './types';

/** Roadmap y plan de lanzamiento — Plan Marketing 360 §13, §23.3, §28. */

export interface Fase {
  numero: string;
  nombre: string;
  queOcurre: string;
  porQueAhora: string;
  queDebeEstarListo: string;
  inversion: string;
  metricas: string;
  decisionSiguiente: string;
}

export const roadmapIntro =
  'El primer año debe pasar de precisión estratégica a validación, luego a lanzamiento, prueba social, activaciones físicas, gifting y expansión controlada. No se debe escalar tráfico antes de tener producto, web, medición, contenido, packaging y logística listos.';

export const fases: Fase[] = [
  {
    numero: '0',
    nombre: 'Estrategia / setup',
    queOcurre: 'Posicionamiento, arquitectura de producto, pricing, ecommerce, packaging, CRM, analytics, producción de assets.',
    porQueAhora: 'Sin base clara, todo el crecimiento compra confusión.',
    queDebeEstarListo: 'Producto, proveedor, costes, mensajes, web, píxeles, fotos.',
    inversion: '25k-55k €',
    metricas: 'Calidad de setup, readiness, tests iniciales.',
    decisionSiguiente: 'Aprobar lanzamiento de waitlist.',
  },
  {
    numero: '1',
    nombre: 'Pre-lanzamiento',
    queOcurre: 'Teaser, manifiesto, waitlist, primeros tests de mensajes.',
    porQueAhora: 'Crear anticipación y medir interés antes de stock grande.',
    queDebeEstarListo: 'Landing, social, CRM, samples visuales.',
    inversion: '8k-18k €',
    metricas: 'CPL, registros, engagement, comentarios.',
    decisionSiguiente: 'Elegir mensaje ganador.',
  },
  {
    numero: '2',
    nombre: 'Comunidad inicial',
    queOcurre: 'Creators seed, contenido sensorial, educación reloj/pulsera/viaje/regalo.',
    porQueAhora: 'Necesita deseo y prueba antes de abrir venta.',
    queDebeEstarListo: 'Producto samples, briefs, calendario.',
    inversion: '12k-25k €',
    metricas: 'Saves, shares, DMs, leads, CTR.',
    decisionSiguiente: 'Abrir ecommerce.',
  },
  {
    numero: '3',
    nombre: 'Lanzamiento oficial',
    queOcurre: 'Ecommerce abre, primera serie, paid, email, PR, creators, retargeting.',
    porQueAhora: 'Momento de convertir demanda acumulada.',
    queDebeEstarListo: 'Stock, envíos, customer care, checkout.',
    inversion: '25k-60k €',
    metricas: 'CVR, CAC, ventas, AOV, add to cart.',
    decisionSiguiente: 'Optimizar o pausar escala.',
  },
  {
    numero: '4',
    nombre: 'Consolidación / CRO',
    queOcurre: 'Reviews, UGC, retargeting, mejoras PDP, flujos CRM, pruebas de precio/packaging.',
    porQueAhora: 'Aprender de compras reales.',
    queDebeEstarListo: 'Datos, reviews, piezas UGC.',
    inversion: '20k-45k €',
    metricas: 'Recovery, ROAS, reviews, devolución.',
    decisionSiguiente: 'Preparar activación física.',
  },
  {
    numero: '5',
    nombre: 'Pop-ups / PR',
    queOcurre: 'The Obsequiums Table en Madrid/Barcelona, colaboraciones, PR, creators locales.',
    porQueAhora: 'Resolver barrera táctil y generar contenido.',
    queDebeEstarListo: 'Stock, display, QR, RSVP, prensa.',
    inversion: '30k-80k €',
    metricas: 'Asistencia, leads, ventas post, UGC, PR.',
    decisionSiguiente: 'Decidir repetir/ampliar.',
  },
  {
    numero: '6',
    nombre: 'Paid growth / CRM / gifting',
    queOcurre: 'Escalado paid, guías regalo, B2B, Navidad/Reyes, email intensivo.',
    porQueAhora: 'Capturar temporada alta.',
    queDebeEstarListo: 'Stock, plazos, packaging, gift concierge.',
    inversion: '40k-120k €',
    metricas: 'Revenue, CAC, margen, sell-through.',
    decisionSiguiente: 'Decidir reposición y Europa.',
  },
  {
    numero: '7',
    nombre: 'Europa inicial',
    queOcurre: 'Test Portugal, Francia, Italia, Alemania con localización y paid pequeño.',
    porQueAhora: 'Solo si España valida.',
    queDebeEstarListo: 'Logística, traducción, customer care, landings.',
    inversion: '20k-70k €',
    metricas: 'CPL/CVR por país, feedback, coste logístico.',
    decisionSiguiente: 'Escalar 1-2 mercados o esperar.',
  },
];

/** §23.3 Plan trimestral del departamento. */
export const planTrimestral: Table = {
  caption: 'Plan trimestral del departamento (§23.3)',
  columns: ['Trimestre', 'Objetivo', 'Prioridades', 'Decisión crítica'],
  rows: [
    ['Q1', 'Fundamento y validación.', 'Posicionamiento, producto, pricing, ecommerce, packaging, CRM, analytics, waitlist, primeros tests.', 'Qué territorio convierte mejor: relojes, pulseras, regalo, viaje o piezas personales.'],
    ['Q2', 'Lanzamiento y primeras ventas.', 'Ecommerce abierto, paid testing, creators, reviews, UGC, CRO, PR inicial.', 'Si el producto convierte con precio y narrativa elegidos.'],
    ['Q3', 'Confianza, contenido y experiencia física.', 'Pop-ups, UGC, reviews, colaboraciones, B2B, mejoras de packaging y PDP.', 'Qué segmentos tienen mayor potencial rentable.'],
    ['Q4', 'Gifting, escala y Europa.', 'Navidad/Reyes, guías, paid scale, email, B2B, test europeo si aplica.', 'Si la marca puede escalar sin perder margen ni experiencia.'],
  ],
};

/** §28 Recomendación final CMO. */
export const recomendacionFinal =
  'Obsequiums debe ser una marca de lujo accesible para guardar piezas personales, no una marca de cajas para relojes.';

export const recomendacionNarrativa =
  'El reloj debe seguir porque da estatus, precisión y mundo masculino. Las pulseras, brazaletes y joyas abren el deseo femenino, el gifting, el tocador, el viaje, la auto-recompensa y una narrativa mucho más amplia. La marca tiene más potencial si deja de vender "dónde guardar relojes" y empieza a vender "cómo cuidar las piezas que forman parte de una vida".';

export const queHariaPrimero: string[] = [
  'Cerraría el posicionamiento ampliado: relojes + pulseras + joyas de viaje + piezas personales con valor emocional.',
  'Definiría el producto icono, sus usos, colores, medidas, interior, personalización y packaging.',
  'Construiría business case con coste unitario, margen, CAC máximo y break-even.',
  'Crearía una landing/waitlist por intención: para relojes, para pulseras, para regalar, para viajar.',
  'Produciría una biblioteca visual sensorial de alto nivel antes de invertir fuerte en paid.',
  'Instalaría CRM, analytics, píxeles, dashboards y flujos básicos desde el día uno.',
  'Testearía mensajes con paid pequeño y contenido orgánico antes de producción grande.',
  'Prepararía operaciones para cumplir promesa: stock, personalización, plazos, packaging, customer care.',
];

export const queNoHariaTodavia: string[] = [
  'No abriría demasiadas categorías antes de validar el icono.',
  'No haría descuentos agresivos ni promociones permanentes.',
  'No dependería de marketplaces desde el inicio.',
  'No contrataría un equipo grande sin product-market fit.',
  'No escalaría paid si la conversión ecommerce está por debajo de umbral.',
  'No lanzaría Europa si España no validó mensaje, producto, logística y CAC.',
  'No comunicaría solo "calidad, piel y elegancia". Eso no diferencia.',
  'No dejaría operaciones fuera de marketing: la entrega es parte de la marca.',
];

export const decisionMasCritica =
  'La decisión más crítica es elegir si Obsequiums quiere ser una marca de "cajas bonitas de piel" o una marca propietaria de un territorio emocional: el ritual de cuidar las piezas que importan. La segunda opción construye marca. La primera compite por precio.';

export const condicionesEscalar: string[] = [
  'Contenido con señales orgánicas reales: retención, saves, shares, comentarios cualitativos y DMs.',
  'CPL razonable y leads cualificados.',
  'CVR ecommerce cercana o superior a 1% en fase inicial y mejorando con CRO.',
  'Add to cart saludable y checkout sin fricción crítica.',
  'Comentarios positivos sobre producto, packaging y personalización.',
  'Operación capaz de entregar sin romper plazos ni percepción premium.',
  'Margen suficiente para sostener CAC o indicios fuertes de AOV/recompra/B2B.',
  'Prueba social inicial: reviews, UGC y creators coherentes.',
];

export const tresObsesiones: string[] = [
  'Hacer que el producto se sienta desde la pantalla.',
  'Convertir comunidad en base de datos, confianza y ventas.',
  'Convertir cada compra en una historia que otra persona quiera regalar, guardar o compartir.',
];

/** §28.6 Anexo A: checklist de lanzamiento. */
export const checklistLanzamiento: Table = {
  caption: 'Anexo A · Checklist mínimo antes de abrir ecommerce (§28.6)',
  columns: ['Área', 'Checklist mínimo'],
  rows: [
    ['Marca', 'Posicionamiento, claims, tono, visuales, guía de no hacer.'],
    ['Producto', 'SKU, colores, medidas, interior, personalización, fotos, control de calidad.'],
    ['Packaging', 'Caja, protección, tarjeta, opción regalo, unboxing, sin precio.'],
    ['Ecommerce', 'Home, PDP, guías, FAQ, checkout, pagos, envíos, devoluciones, chat.'],
    ['CRM', 'Waitlist, bienvenida, lanzamiento, abandono, postcompra, review, UGC.'],
    ['Analytics', 'GA/analytics, píxeles, eventos, dashboard, UTMs.'],
    ['Contenido', '30-60 assets iniciales, 15-30 vídeos, fotos PDP, ads, stories.'],
    ['Paid', 'Audiencias, campañas, creatividades, presupuesto test, retargeting.'],
    ['Creators', 'Lista, briefs, envíos, permisos de uso, calendario.'],
    ['PR', 'Press kit, pitch, fotos, ángulo, media list.'],
    ['Operaciones', 'Stock, SLA, personalización, envíos, soporte, plan de incidencias.'],
  ],
};

/** §28.7 Anexo B: matriz de decisión rápida. */
export const matrizDecisionRapida: Table = {
  caption: 'Anexo B · Matriz de decisión rápida (§28.7)',
  columns: ['Señal', 'Interpretación', 'Decisión'],
  rows: [
    ['CPL alto + bajo engagement', 'Mensaje o visual no conecta.', 'Rehacer creatividad y propuesta.'],
    ['Engagement alto + pocos clics', 'Contenido inspira pero no genera intención.', 'Agregar uso/producto/CTA.'],
    ['Clics altos + add to cart bajo', 'PDP o precio falla.', 'CRO inmediato.'],
    ['Add to cart alto + checkout bajo', 'Fricción compra.', 'Revisar pagos, envío, confianza.'],
    ['Ventas altas + retrasos', 'Marketing superó operaciones.', 'Frenar escala y ajustar forecast.'],
    ['Bajo UGC postcompra', 'Unboxing no memorable.', 'Mejorar packaging y solicitud UGC.'],
    ['Un segmento convierte 2x', 'Señal de foco.', 'Reasignar presupuesto y contenido.'],
    ['Un color no rota en 60 días', 'Problema de producto/visual.', 'No reponer; usar bundle o contenido específico.'],
  ],
};

export const cierreDocumento =
  'Este documento debe tratarse como base maestra viva. La dirección no debe ejecutarlo como lista fija, sino como sistema: hipótesis, activación, medición, aprendizaje y decisión. La marca será tan fuerte como su capacidad de sostener una promesa simple en todos los puntos de contacto: para las piezas que no se guardan en cualquier lugar.';
