/** Buyer personas y momentos íntimos de conexión — Plan Marketing 360 §7. */

export interface Persona {
  id: string;
  segmento: string;
  tipo: 'principal' | 'secundario';
  quienEs: string;
  aspiracionTension: string;
  queNecesitaEscuchar: string;
  queLoHaceComprar: string;
}

export const personasIntro =
  'La segmentación no debe partir solo de edad, género o ingresos. Debe partir de la relación con las piezas personales, la intención de compra y el momento mental. Obsequiums puede hablar a mujeres, hombres, compradores de regalo, viajeros, profesionales, coleccionistas emergentes y compradores B2B, siempre que cada entrada se traduzca en mensaje, contenido y ecommerce.';

export const personas: Persona[] = [
  {
    id: 'mujer-identidad',
    segmento: 'Mujer con piezas que forman parte de su identidad',
    tipo: 'principal',
    quienEs:
      'Tiene pulseras, brazaletes, relojes, joyas heredadas, piezas de noche o regalos especiales. Compra estética, orden, emoción y uso real.',
    aspiracionTension:
      'Quiere sentirse cuidada, elegante, preparada y dueña de su mundo personal. No quiere que lo que ama termine mezclado en un cajón.',
    queNecesitaEscuchar: '"No todo lo que usas para sentirte tú debería terminar en cualquier lugar."',
    queLoHaceComprar:
      'Visuales de tocador, viaje, pulseras reales, personalización, packaging, guía de usos, contenido emocional.',
  },
  {
    id: 'mujer-regalo',
    segmento: 'Mujer que compra regalo',
    tipo: 'principal',
    quienEs: 'Pareja, amiga, hija, madre, socia. Busca algo personal, premium, útil y no obvio.',
    aspiracionTension: 'Quiere acertar, emocionar y evitar regalos impersonales o de último minuto.',
    queNecesitaEscuchar: '"Un regalo personal sin caer en lo obvio."',
    queLoHaceComprar: 'Guía de regalos, personalización, entrega garantizada, packaging, mensajes por ocasión.',
  },
  {
    id: 'hombre-reloj',
    segmento: 'Hombre con reloj o pulseras premium',
    tipo: 'principal',
    quienEs: 'Valora protección, diseño, piel, viaje, discreción y funcionalidad. Puede comprar para sí o regalar.',
    aspiracionTension: 'Quiere cuidar sus relojes/piezas sin ostentación.',
    queNecesitaEscuchar: '"Tu reloj importante merece algo mejor que una bandeja cualquiera."',
    queLoHaceComprar: 'Medidas, calidad, protección, interior, fotos de escritorio/maleta, reseñas y claridad técnica.',
  },
  {
    id: 'aspiracional',
    segmento: 'Persona aspiracional / nuevo coleccionista',
    tipo: 'secundario',
    quienEs:
      'Compró su primer reloj bueno, pulsera especial o pieza de etapa. Consume TikTok, IG, guías y comparativas.',
    aspiracionTension: 'Quiere entrar al mundo premium sin sentirse intimidado/a.',
    queNecesitaEscuchar: '"Tu primera pieza importante también merece su lugar."',
    queLoHaceComprar: 'Educación, precio claro, comunidad, UGC, contenido de "primeros objetos importantes".',
  },
  {
    id: 'auto-recompensa',
    segmento: 'Comprador/a de auto-recompensa',
    tipo: 'secundario',
    quienEs: 'Se compra algo por logro, nuevo trabajo, mudanza, viaje, cambio de etapa.',
    aspiracionTension: 'Quiere marcar un capítulo personal con un objeto pequeño pero significativo.',
    queNecesitaEscuchar: '"Para esa pieza que compraste cuando algo en ti cambió."',
    queLoHaceComprar: 'Campañas de logro, mensajes de etapa, personalización y contenido de ritual personal.',
  },
  {
    id: 'b2b',
    segmento: 'B2B / private gifting',
    tipo: 'secundario',
    quienEs:
      'Empresas, hoteles, wedding planners, joyerías, relojerías, eventos, real estate premium, despachos.',
    aspiracionTension: 'Quiere regalar algo elegante, útil, personalizable y con percepción alta.',
    queNecesitaEscuchar: '"Obsequios privados con intención."',
    queLoHaceComprar: 'Catálogo B2B, propuesta visual, condiciones claras, personalización, plazos y volumen.',
  },
];

export interface MomentoIntimo {
  momento: string;
  deseoTension: string;
  mensaje: string;
  contenidoCanal: string;
  conexionEcommerce: string;
}

/** §7.2 Momentos íntimos de conexión — los 14 momentos completos. */
export const momentosIntimos: MomentoIntimo[] = [
  { momento: 'Prepararse para trabajar', deseoTension: 'Querer sentirse elegante, lista y en control.', mensaje: '"La pieza que eliges antes de una buena decisión."', contenidoCanal: 'Reel: blazer, reloj/pulsera, estuche en escritorio o tocador.', conexionEcommerce: 'CTA a "Para mí / Back to work".' },
  { momento: 'Elegir qué llevar antes de salir', deseoTension: 'Decidir qué pieza acompaña el día.', mensaje: '"No eliges accesorios. Eliges cómo quieres sentirte."', contenidoCanal: 'Stories con encuesta: reloj, pulsera, brazalete.', conexionEcommerce: 'Link a usos por pieza.' },
  { momento: 'Reunión importante', deseoTension: 'Seguridad, presencia y detalle.', mensaje: '"El detalle que ordena antes de salir."', contenidoCanal: 'TikTok/IG: preparación previa.', conexionEcommerce: 'PDP con uso profesional.' },
  { momento: 'Viajar', deseoTension: 'Proteger piezas favoritas fuera de casa.', mensaje: '"Tus piezas favoritas también viajan protegidas."', contenidoCanal: 'Maleta, hotel, pasaporte, estuche.', conexionEcommerce: 'Landing "Para viajar".' },
  { momento: 'Escapada de fin de semana', deseoTension: 'Pocas piezas, bien elegidas.', mensaje: '"Tres piezas, dos días, un lugar."', contenidoCanal: 'Pinterest, Reels, Shorts.', conexionEcommerce: 'Bundle Travel Ritual Case.' },
  { momento: 'Cena / evento', deseoTension: 'Elegir pieza de noche y guardarla después.', mensaje: '"Lo que brilla también descansa."', contenidoCanal: 'Reel transición look + guardar pulsera.', conexionEcommerce: 'Filtro "Para pulseras/brazaletes".' },
  { momento: 'Auto-recompensa por logro', deseoTension: 'Marcar una etapa.', mensaje: '"Para la pieza que compraste cuando algo cambió."', contenidoCanal: 'Founder/customer story.', conexionEcommerce: 'Personalización + tarjeta.' },
  { momento: 'Buscar regalo', deseoTension: 'Miedo a regalar algo obvio.', mensaje: '"Un regalo personal sin ser predecible."', contenidoCanal: 'Guía de regalos, ads, email.', conexionEcommerce: 'Gift guide por relación y ocasión.' },
  { momento: 'Ordenar el tocador', deseoTension: 'Deseo de calma visual.', mensaje: '"Tu tocador también merece intención."', contenidoCanal: 'Contenido de organización estética.', conexionEcommerce: 'Colección para pulseras/joyas.' },
  { momento: 'Cambiar de etapa profesional o personal', deseoTension: 'Necesidad de símbolo.', mensaje: '"Un objeto para acompañar tu próximo capítulo."', contenidoCanal: 'Email/UGC emocional.', conexionEcommerce: 'Landing self-gift.' },
  { momento: 'Recibir el paquete', deseoTension: 'Momento de verdad ecommerce.', mensaje: '"Tu Obsequium empieza antes de abrirlo."', contenidoCanal: 'Unboxing, packaging ASMR.', conexionEcommerce: 'Postcompra + UGC.' },
  { momento: 'Probarlo frente al espejo', deseoTension: 'Validar identidad visual.', mensaje: '"Lo guardas porque habla de ti."', contenidoCanal: 'Creator lifestyle.', conexionEcommerce: 'Reviews + contenido social.' },
  { momento: 'Compartir con una amiga', deseoTension: 'Confirmación social.', mensaje: '"¿A quién se lo regalarías?"', contenidoCanal: 'Stories, DM prompts.', conexionEcommerce: 'Referidos y wishlist.' },
  { momento: 'Boda / aniversario / graduación', deseoTension: 'Regalo con memoria.', mensaje: '"Para guardar una fecha."', contenidoCanal: 'Campañas gifting.', conexionEcommerce: 'Checkout regalo + fecha entrega.' },
];
