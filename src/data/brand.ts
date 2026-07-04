import type { Table, Definition, Item } from './types';

/**
 * Universo de marca — Plan Marketing 360 §1, §2, §4, §5 y Brief §1, §3.
 * Contenido íntegro de los documentos, estructurado para el sitio.
 */

export const claims = {
  master: 'Para las piezas que no se guardan en cualquier lugar.',
  functional:
    'Estuches de piel personalizables para relojes, pulseras, brazaletes, joyas de viaje y piezas personales con valor emocional.',
  emotional: 'Un lugar para lo que llevas contigo, incluso cuando no lo llevas puesto.',
  product: 'Estuches de piel personalizables para relojes, pulseras y joyas que merecen cuidado.',
  closing: 'Dale un lugar a lo que importa.',
  europe: 'For watches, bracelets and personal pieces that carry more than time.',
};

export const tesisMadre =
  'Obsequiums no debe vender "cajas para relojes". Debe construir una categoría emocional: estuches de piel personalizables para guardar, proteger y regalar piezas personales con valor.';

export const decisionEstrategica =
  'Obsequiums no lanza una watch box. Lanza una nueva categoría emocional dentro del lujo accesible: estuches de piel personalizables para piezas personales con valor.';

export const tesisNarrativa = [
  'La dirección más potente no es vender "dónde guardar relojes", sino vender "cómo cuidar las piezas que forman parte de una vida". El reloj sigue siendo clave porque aporta estatus, precisión, regalo masculino, viaje y universo aspiracional. Pero si se deja todo anclado en relojes, la marca queda demasiado estrecha, más masculina, más funcional y más dependiente de un nicho. Al incorporar mujeres, pulseras, brazaletes, joyas rígidas, piezas personales, regalos, tocador y viaje, Obsequiums abre mercado, contenido, ocasiones de compra y comunidad.',
  'La marca debe ser capaz de vivir sobre un escritorio masculino y sobre un tocador femenino. No debe neutralizarse para gustarle a todos; debe volverse profundamente personal. Esa es la diferencia. Una marca neutral suele sentirse débil. Una marca íntima puede hablar a públicos distintos porque no vende género, vende significado.',
];

/** §2.1 La nueva categoría mental. */
export const categoriaMental: Definition[] = [
  { term: 'Categoría funcional', detail: 'Estuches de piel personalizables para relojes, pulseras, brazaletes, joyas de viaje y piezas personales.' },
  { term: 'Categoría emocional', detail: 'Momentos de custodia emocional: el lugar donde descansan las piezas que importan.' },
  { term: 'Categoría comercial', detail: 'Lujo accesible + gifting premium + marroquinería + organización estética + viaje + cuidado personal.' },
  { term: 'Categoría de contenido', detail: 'Rituales de uso, piezas con historia, preparación de maleta, tocador, regalos significativos, logro personal, objetos de etapa.' },
  { term: 'Categoría de comunidad', detail: 'Personas que cuidan los detalles, compran con intención y dan valor a los objetos que acompañan su identidad.' },
  { term: 'Frase interna de estrategia', detail: 'No vendemos contenedores. Vendemos un lugar digno para aquello que alguien eligió, recibió, heredó, logró o quiere conservar.' },
  { term: 'Frase de marca recomendada', detail: 'Para las piezas que no se guardan en cualquier lugar.' },
  { term: 'Frase de producto recomendada', detail: 'Estuches de piel personalizables para relojes, pulseras y joyas que merecen cuidado.' },
];

/** §2.2 Qué vende realmente Obsequiums. */
export const queVende: Item[] = [
  { title: 'Protección', detail: 'La pieza no se raya, no se pierde, no viaja suelta, no termina mezclada en un cajón ni expuesta sin cuidado.' },
  { title: 'Orden premium', detail: 'El tocador, la mesilla, la maleta, el escritorio o el armario se sienten más cuidados, pensados y propios.' },
  { title: 'Ritual', detail: 'Elegir, abrir, guardar, cerrar, personalizar, regalar, viajar, recibir y volver a usar se convierten en gestos de marca.' },
  { title: 'Significado', detail: 'El producto convierte una pieza pequeña en algo digno de ser cuidado. No es una caja; es el lugar de algo que importa.' },
  { title: 'Auto-recompensa', detail: 'Legitima comprar algo para cuidar las piezas que representan una etapa personal o profesional.' },
  { title: 'Gifting', detail: 'Permite regalar algo personal, útil, premium y no obvio, especialmente cuando la persona "ya tiene de todo".' },
  { title: 'Confianza ecommerce', detail: 'Resuelve digitalmente la barrera de no tocar la piel mediante contenido sensorial, detalles y prueba social.' },
];

/** §2.3 Lo que no debe ser. */
export const queNoDebeSer: string[] = [
  'No debe ser una marca de accesorios genéricos de piel.',
  'No debe ser una marca masculina tradicional de relojes caros.',
  'No debe ser un joyero clásico sin tensión cultural.',
  'No debe ser merchandising corporativo disfrazado de lujo.',
  'No debe ser una tienda de regalos sin alma.',
  'No debe sostenerse en descuentos, urgencias falsas o estética de dropshipping.',
  'No debe intentar contar demasiadas categorías desde el día uno; debe abrir usos sin perder el icono inicial.',
  'No debe sacrificar claridad funcional por poesía de marca: la emoción atrae, pero la claridad convierte.',
];

/** §4.1 Plataforma de marca. */
export const plataformaMarca: Definition[] = [
  { term: 'Esencia', detail: 'Guardar lo que importa con intención.' },
  { term: 'Promesa central', detail: 'Convertir el cuidado de relojes, pulseras y piezas personales en un ritual premium, íntimo y accesible.' },
  { term: 'Frase madre', detail: 'Para las piezas que no se guardan en cualquier lugar.' },
  { term: 'Claim emocional', detail: 'Un lugar para lo que llevas contigo, incluso cuando no lo llevas puesto.' },
  { term: 'Claim de producto', detail: 'Estuches de piel personalizables para relojes, pulseras y joyas que merecen cuidado.' },
  { term: 'Territorio competitivo', detail: 'Ritual personal + marroquinería + gifting premium + organización estética + viaje + lujo accesible.' },
  { term: 'Punto de vista cultural', detail: 'En un mundo que acelera, el lujo más contemporáneo es elegir mejor, cuidar más y dar lugar a lo que tiene significado.' },
  { term: 'Diferencia defendible', detail: 'No solo piel y personalización: una experiencia completa de producto, regalo, ecommerce, contenido, comunidad y custodia emocional.' },
  { term: 'Razón para seguir antes de comprar', detail: 'La marca enseña a mirar los objetos personales con más intención y belleza.' },
  { term: 'Razón para visitar el ecommerce antes de comprar', detail: 'Guías de regalo, usos, personalización, inspiración de viaje, rituales y educación sobre cuidado de piezas.' },
  { term: 'Razón para volver', detail: 'Nuevos colores, series limitadas, guías por ocasión, historias de clientes, contenido de cuidado, colaboraciones y gifting.' },
];

/** §4.2 Personalidad y tono de voz. */
export const personalidadIntro =
  'La personalidad debe ser serena, íntima, culta, precisa, cálida, ligeramente nostálgica y contemporánea. Debe sentirse más cerca de una boutique privada, una mesa de viaje y un tocador cuidado que de un escaparate ostentoso. La voz debe ser elegante, breve y sensorial, pero nunca críptica. La fórmula ideal es emoción + claridad funcional.';

export const tonoDeVoz: { si: string; no: string }[] = [
  { si: '"Hay piezas que no se dejan en cualquier lugar."', no: '"Producto premium de máxima calidad para tus accesorios."' },
  { si: '"Para el reloj, la pulsera o el recuerdo que merece cuidado."', no: '"Compra ahora antes de que se agote."' },
  { si: '"Un regalo personal sin caer en lo obvio."', no: '"El mejor estuche del mercado."' },
  { si: '"Personalizado, porque lo importante nunca es genérico."', no: '"Lujo exclusivo para personas exitosas."' },
  { si: '"La primera serie. Breve. Deliberada. Tuya."', no: '"Oferta especial por tiempo limitado" usado como muletilla.' },
];

/** §4.3 Códigos visuales. */
export const codigosVisuales: Item[] = [
  { title: 'Fondos cálidos', detail: 'Piedra, madera, lino, mármol suave, papel texturizado, cuero, sombras limpias.' },
  { title: 'Luz', detail: 'Mañana, lateral, suave, natural, con sensación de calma y materia.' },
  { title: 'Escenas', detail: 'Tocador, mesilla de noche, escritorio, hotel boutique, maleta abierta, mesa de regalo, armario, viaje de fin de semana.' },
  { title: 'Manos reales', detail: 'Abriendo, tocando, guardando, personalizando, envolviendo, entregando.' },
  { title: 'Objetos aliados', detail: 'Reloj, pulsera, brazalete, perfume, camisa, blazer, seda, lino, pasaporte, libro, flores, tarjeta, libreta.' },
  { title: 'Composición', detail: 'Aire, silencio visual, escala clara, detalle macro, color sobrio, producto como objeto de deseo cotidiano.' },
  { title: 'Evitar', detail: 'Fondos blancos demasiado fríos, estética marketplace, exceso de logos, sexualización, lujo ostentoso, filtros agresivos, imágenes sin escala.' },
];

/** §4.4 Códigos verbales. */
export const codigosVerbales: Item[] = [
  { title: 'Términos núcleo', detail: 'Piezas, tiempo, calma, elección, cuidado, piel, iniciales, viaje, memoria, gesto, ritual, primera serie, guardar, proteger, obsequio, etapa.' },
  { title: 'Verbos de marca', detail: 'Elegir, cuidar, guardar, llevar, regalar, proteger, personalizar, recordar, preparar, conservar.' },
  { title: 'Palabras a evitar como eje principal', detail: 'Lujo exclusivo, éxito, status, caro, tendencia, moda rápida, must-have, imprescindible sin argumento.' },
  { title: 'Sobre "lujo accesible"', detail: 'La marca puede usar "lujo accesible", pero debe demostrarlo con ejecución, no repetirlo como etiqueta.' },
];

/** §5 Posicionamiento ideal para España. */
export const posicionamiento = {
  statement:
    'Obsequiums es la marca española de estuches de piel personalizables para relojes, pulseras y piezas personales con valor emocional, pensada para viajar, regalar y cuidar lo que no se guarda en cualquier lugar.',
  lugarEnLaMente:
    'La marca debe ocupar un espacio muy concreto: el objeto premium, personalizable y regalable que resuelve cómo guardar con belleza las piezas que alguien lleva cerca de la piel y de su historia. Debe ser aspiracional sin parecer inaccesible, premium sin depender de logotipos, emocional sin perder funcionalidad y ecommerce-first sin sentirse impersonal.',
};

export const contraQueCompite: Table = {
  caption: 'Contra qué compite Obsequiums (§5.2)',
  columns: ['Alternativa', 'Cómo compite', 'Cómo debe responder Obsequiums'],
  rows: [
    ['Cajas de relojes tradicionales', 'Autoridad funcional, protección, estética masculina.', 'Ser más emocional, contemporánea, personalizable y abierta a pulseras/joyas/viaje.'],
    ['Joyeros clásicos', 'Funcionalidad para joyas y orden doméstico.', 'Ser más portátil, más premium, más de viaje, más regalo y menos mueble.'],
    ['Marroquinería de lujo', 'Prestigio, piel, artesanía.', 'Ofrecer entrada accesible a un ritual de lujo sin depender de grandes logos.'],
    ['Regalos premium', 'Ocasión, presentación, emoción.', 'Ser útil, personal, elegante y menos obvio que perfume, joya, cartera o experiencia.'],
    ['Organizadores baratos', 'Precio y funcionalidad.', 'No competir por precio: competir por significado, material, personalización, estética y packaging.'],
    ['Viajes, belleza, joyería, decoración', 'Compras de auto-recompensa y deseo.', 'Ofrecer un objeto pequeño que eleva varias rutinas: vestir, viajar, ordenar, regalar.'],
  ],
};

export const prometerDemostrarRepetir: Definition[] = [
  { term: 'Prometer', detail: 'Un lugar digno para piezas personales que merecen cuidado.' },
  { term: 'Demostrar', detail: 'Piel, acabado, interior, protección, personalización, packaging, uso real, testimonios y entrega impecable.' },
  { term: 'Repetir', detail: 'Para relojes. Para pulseras. Para joyas de viaje. Para regalos que no se olvidan. Para piezas que no se guardan en cualquier lugar.' },
  { term: 'Evitar', detail: 'Comunicación genérica de calidad/elegancia/diseño sin territorio propio.' },
  { term: 'Convertir en ecommerce', detail: 'Navegación por intención: para mí, para regalar, para relojes, para pulseras, para viajar, para él, para ella, personalizable.' },
  { term: 'Convertir en contenido', detail: 'Historias de piezas, rituales de noche, maletas, tocadores, regalos, logros, primeras veces, personalización.' },
];

export const traduccionPosicionamiento: Table = {
  caption: 'Traducción del posicionamiento por punto de contacto (§5.4)',
  columns: ['Punto de contacto', 'Traducción ejecutable'],
  rows: [
    ['Home', 'Hero emocional + claridad funcional: "Para las piezas que no se guardan en cualquier lugar. Estuches de piel personalizables para relojes, pulseras y joyas de viaje."'],
    ['PDP', 'Fotos cerradas, abiertas, con reloj, con pulseras, en maleta, en tocador, en escritorio, en mano, con iniciales y packaging.'],
    ['Ads', 'Creatividades por intención: regalo, viaje, pulseras, relojes, auto-recompensa, personalización.'],
    ['Email', 'Educación, historia, acceso anticipado, guías de regalo, personalización, carrito, postcompra.'],
    ['Packaging', 'No un envío: un obsequio. Papel, tarjeta, cuidado, frase, protección, momento de apertura.'],
    ['Postventa', 'Cuidado de piel, cómo usar, cómo guardar, invitación a compartir la pieza que guarda dentro.'],
    ['PR', 'Marca española que reinterpreta el cuidado de objetos personales como ritual de lujo accesible.'],
    ['Pop-up', 'Experiencia táctil con "The Obsequiums Table": trae/imagina tu reloj o pulsera y encuentra su lugar.'],
  ],
};

/** Brief §1 Norte creativo. */
export const norteCreativo = {
  ideaRectora:
    'La idea rectora visual de Obsequiums es la calma de cuidar lo que importa. Todo debe nacer desde ahí: luz, ritmo, copy, composición, interfaz, video, sonido, packaging, navegación y experiencia de compra. La marca no debe gritar lujo. Debe demostrar criterio. No debe explicar demasiado. Debe hacer sentir que el producto pertenece a una vida más cuidada.',
  conceptoVisual:
    'Objects of Intimacy / La intimidad de lo que eliges guardar. Este concepto permite unir relojes, pulseras, brazaletes, joyas, regalos, viajes y objetos de etapa sin fragmentar el relato. La marca debe mostrar aquello que se lleva sobre la piel y luego se guarda con intención.',
  frasesRectoras: [
    'Un lugar digno para las piezas personales con valor emocional.',
    'La belleza silenciosa de guardar bien.',
    'El lujo accesible como ritual, no como ostentación.',
    'La personalización como gesto íntimo, no como decoración.',
    'La web como experiencia sensorial, no como catálogo.',
  ],
};

/** Brief §3 Referencias estéticas y marcas de inspiración. */
export const referenciasEsteticas: Table = {
  caption: 'Referencias estéticas: brújula de criterio, no de copia (Brief §3)',
  columns: ['Referencia', 'Qué aporta', 'Uso correcto para Obsequiums'],
  rows: [
    ['Aesop', 'Calma, inteligencia estética, tactilidad, tienda como experiencia sensorial.', 'Tomar sobriedad y cuidado material; no copiar frialdad ni códigos de cosmética.'],
    ['Byredo', 'Minimalismo emocional, lujo contemporáneo, uso del blanco/negro con deseo.', 'Tomar claridad y atmósfera; evitar volverse demasiado abstracto.'],
    ['The Row', 'Lujo silencioso, austeridad elegante, deseo sin logos.', 'Tomar contención, proporción y sofisticación; no caer en distancia inaccesible.'],
    ['Polène', 'Objeto de cuero como forma escultórica, producto deseable y contemporáneo.', 'Tomar sensualidad del cuero y tratamiento objetual; no copiar dirección de moda.'],
    ['Smythson', 'Marroquinería, personalización, regalo, objeto personal.', 'Tomar tradición refinada; actualizarla con intimidad y lifestyle.'],
    ['Loewe', 'Cultura material, artesanía, objeto como pieza artística.', 'Tomar sensibilidad objetual; evitar preciosismo excesivo.'],
    ['Rimowa', 'Viaje, funcionalidad elevada, objeto aspiracional de desplazamiento.', 'Tomar ritual de viaje; no tomar dureza industrial.'],
    ['Cuyana', 'Elegancia práctica, vida real, fewer better things.', 'Tomar practicidad premium; elevar con más sensualidad y misterio.'],
  ],
};

/** §1.2 Supuestos estratégicos utilizados. */
export const supuestosEstrategicos: string[] = [
  'La marca parte desde cero: sin comunidad previa, sin notoriedad acumulada, sin histórico de ventas y con necesidad de validar product-market fit.',
  'El canal principal será ecommerce propio, mobile-first, con experiencia editorial y capacidad de conversión directa.',
  'El mercado inicial es España, con expansión europea como extensión controlada después de validar mensaje, producto, logística y conversión.',
  'La marca pertenece al territorio de marroquinería de lujo accesible, pero no debe competir por ser "otra marca de piel". Debe crear una categoría mental: cuidado premium de piezas personales.',
  'El objetivo de 200.000 seguidores cualificados en redes durante el primer año se trata como activo de negocio, no como vanity metric.',
  'Los seguidores deben transformarse en comunidad accionable, base de datos, tráfico cualificado, prueba social, ventas, UGC, referidos, PR, colaboraciones y valor de marca.',
  'El precio estimado de hipótesis se ubica entre 120 € y 240 € para producto base, con personalización entre 15 € y 35 €, y ticket medio objetivo de 170 € a 210 € en escenario recomendado.',
  'La personalización puede ser iniciales, monograma, mensaje breve, tarjeta, packaging regalo o servicio privado de gifting.',
  'La marca necesita generar deseo y confianza antes de pedir compra, porque el producto es premium, táctil y se venderá principalmente online.',
  'El contenido debe hacer sentir el producto sin tocarlo: textura, peso visual, apertura, cierre, interior, costura, capacidad, proporción, escala y ritual de uso.',
  'La experiencia operativa es parte del marketing: stock, personalización, entrega, packaging, postventa y atención al cliente definen percepción premium.',
  'IA debe usarse como sistema de productividad, listening, contenido, CRM, reporting y aprendizaje, pero no puede reemplazar criterio de marca ni dirección estética premium.',
];

/** §1.3 Matriz de dirección: la lógica transversal del plan completo. */
export const matrizDireccion: Table = {
  caption: 'Matriz de dirección del plan: qué, quién, cómo, dónde, por qué, para qué, cuándo, cuánto, dependencias y KPI (§1.3)',
  columns: ['Bloque', 'Qué', 'Quién', 'Cómo', 'Dónde', 'Por qué', 'Para qué', 'Cuándo', 'Cuánto', 'Dependencias', 'KPI'],
  rows: [
    ['Marca', 'Territorio, promesa, códigos y relato', 'CMO + brand strategist', 'Plataforma estratégica + playbook', 'Web, redes, PR, packaging', 'Sin una categoría clara la marca se vuelve genérica', 'Instalar deseo y memoria', 'Meses 1-2', '8k-25k', 'Producto, CEO, diseño', 'Recordación, coherencia, comentarios cualitativos'],
    ['Producto', 'Icono inicial multiuso', 'CEO + producto + CMO + operaciones', 'SKU, colores, personalización, packaging', 'Ecommerce, contenido, pop-ups', 'El producto debe sostener la primera comunidad', 'Convertir objeto en símbolo', 'Meses 1-3', 'Variable según producción', 'Proveedor, calidad, stock', 'Sell-through, margen, objeciones'],
    ['Ecommerce', 'Web mobile-first editorial y transaccional', 'Ecommerce manager + UX/CRO', 'Home, PDP, guías, checkout, CRM', 'obsequiums.com/es', 'Es el canal principal de venta', 'Convertir tráfico en compra y datos', 'Setup meses 1-3; optimización continua', '25k-60k', 'Assets, producto, pagos, logística', 'CVR, AOV, add to cart'],
    ['Contenido', 'Sistema sensorial y narrativo 12 meses', 'Social + content + diseño', 'Pilares, hooks, formatos, UGC', 'IG, TikTok, Pinterest, Shorts', 'El producto necesita sentirse en pantalla', 'Atención, deseo, prueba, tráfico', 'Desde mes 2', '35k-80k/año producción', 'Dirección visual, samples', 'Retención, saves, shares, CTR'],
    ['Paid', 'Amplificación y test de demanda', 'Paid specialist + CMO', 'Campañas por intención y funnel', 'Meta, TikTok, Google, Pinterest', 'Permite aprender rápido y escalar', 'Leads, tráfico, ventas, retargeting', 'Desde mes 3', '70k-140k recomendado', 'Creatividades, pixel, web', 'CPL, CAC, ROAS'],
    ['CRM', 'Base de datos y relación', 'CRM manager + ecommerce', 'Flows, segmentos, automatizaciones', 'Email, SMS/WhatsApp si aplica', 'La comunidad debe convertirse en activo propio', 'Waitlist, conversión, recompra', 'Desde mes 2', '8k-25k/año', 'Landing, consentimiento, contenido', 'List growth, revenue/email, recovery'],
    ['PR/Creators', 'Legitimidad y contexto de uso', 'PR + creator manager', 'Seeding, pitch, colaboraciones', 'Medios, creadores, eventos', 'Marca nueva necesita confianza externa', 'Autoridad, UGC, tráfico, contenido', 'Desde mes 4', '35k-105k/año', 'Samples, briefing, packaging', 'Menciones, UGC, ventas referidas'],
    ['Operaciones', 'Entrega de la promesa premium', 'Ops + ecommerce + CMO', 'SLA, stock, QC, packaging, envíos', 'Taller, almacén, transporte', 'Si falla la entrega, cae la marca', 'Satisfacción, reviews, recompra', 'Desde mes 1', 'Según volumen', 'Forecast, proveedores', 'NPS, retrasos, devoluciones'],
    ['B2B gifting', 'Volumen y legitimidad selectiva', 'Partnerships + CMO', 'Propuestas privadas, packs, acuerdos', 'Empresas, hoteles, bodas, eventos', 'Abre ingresos sin depender solo de ads', 'Cash flow, reputación, nuevos públicos', 'Desde mes 6', 'Variable', 'Packaging, capacidad, pricing', 'Leads B2B, conversión, margen'],
    ['Europa', 'Extensión testeada, no salto ciego', 'CMO + growth + ops', 'Tests por país y localización', 'Portugal, Francia, Italia, Alemania', 'España puede no bastar para escalar', 'Validar mercados y CAC', 'Mes 12 o después', '40k-120k test', 'España validada, logística', 'CPL/CVR país, retorno'],
  ],
  note: 'Presupuestos en euros. Cada bloque se desarrolla en detalle en su sección correspondiente del sitio.',
};

/** Brief §2 Personalidad visual y emocional. */
export const personalidadVisual: Definition[] = [
  { term: 'Cómo debe verse', detail: 'Sobria, cálida, táctil, editorial, íntima, precisa, contemporánea, armónica, con aire, con sombras suaves y ritmo lento.' },
  { term: 'Cómo debe sentirse', detail: 'Como una mañana tranquila, una habitación de hotel elegante, una maleta bien preparada, un tocador ordenado, una pieza que se abre despacio.' },
  { term: 'Qué debe producir', detail: 'Deseo por tacto, deseo por ritual, deseo por pertenencia, deseo por regalo, deseo por personalización y deseo por vida cuidada.' },
  { term: 'Qué debe evitar', detail: 'Catálogo frío, ecommerce genérico, lujo ostentoso, masculinidad relojera rígida, feminidad decorativa obvia, promociones agresivas y estética de plantilla.' },
];

export const preguntasTransversales =
  'Cada bloque del plan debe responder qué se construye, quién lo ejecuta, cómo se ejecuta, dónde se activa, por qué tiene sentido, para qué sirve, cuándo se hace, cuánto puede costar, qué depende de qué, qué se mide, qué se optimiza, qué debe evitarse y cómo se conecta con ecommerce.';
