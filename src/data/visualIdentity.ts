import type { Table, Definition } from './types';

/** Identidad visual y dirección de arte — Brief Técnico §2, §4-§7, §22, §23. */

/** §4.1 Sistema cromático (HEX exactos del brief). */
export interface BrandColor {
  nombre: string;
  hex: string;
  uso: string;
}

export const direccionCromatica =
  'La paleta debe ser cálida, neutra, desaturada, táctil y atemporal. El color acompaña al cuero y a la vida íntima del cliente; no compite con el producto. La web debe evitar blancos clínicos, negros excesivamente duros y colores saturados que rompan la sensación de lujo accesible y calma.';

export const paleta: BrandColor[] = [
  { nombre: 'Hueso / marfil cálido', hex: '#F4F0E8', uso: 'Fondos principales, bloques amplios, sensación de calma.' },
  { nombre: 'Arena', hex: '#D8CBBB', uso: 'Fondos secundarios, separadores suaves, tarjetas editoriales.' },
  { nombre: 'Greige', hex: '#B8AEA0', uso: 'Fondos de producto, módulos de confianza, hover sutil.' },
  { nombre: 'Taupe', hex: '#8B7B6A', uso: 'Texto secundario, líneas, etiquetas, captions.' },
  { nombre: 'Carbón suave', hex: '#2E2924', uso: 'Texto principal, botones oscuros, contraste premium.' },
  { nombre: 'Camel cuero', hex: '#B7794C', uso: 'Acento vinculado al producto, CTAs secundarios, storytelling de piel.' },
  { nombre: 'Chocolate', hex: '#4A3328', uso: 'Profundidad, titulares, fondos de lujo silencioso.' },
  { nombre: 'Verde musgo', hex: '#596153', uso: 'Acento para colecciones verdes, escenas de viaje y naturaleza.' },
  { nombre: 'Azul humo', hex: '#637383', uso: 'Acento para producto azul, calma y precisión.' },
  { nombre: 'Latón suave', hex: '#A48658', uso: 'Detalles de personalización, iconos premium, acentos muy controlados.' },
];

/** §4.2 Reglas de uso cromático. */
export const reglasCromaticas: string[] = [
  'Usar fondos cálidos y ligeramente texturados en la home para evitar sensación de catálogo frío.',
  'Reservar el carbón para texto y CTAs de alto contraste; no usarlo como fondo dominante en toda la web.',
  'Usar los colores del producto como acentos editoriales, no como bloques saturados.',
  'Evitar gradients llamativos. Si hay degradados, deben ser casi imperceptibles, cálidos y atmosféricos.',
  'Mantener alto contraste en texto y botones para accesibilidad, especialmente en mobile.',
];

/** §5 Sistema tipográfico. */
export const direccionTipografica =
  'La tipografía debe equilibrar alma y precisión. Una serif refinada debe aportar dimensión editorial, tiempo y sensibilidad. Una sans serif limpia debe aportar claridad ecommerce, legibilidad mobile y eficiencia funcional. La combinación debe decir: somos emocionales, pero comprarnos es simple.';

export const nivelesTipograficos: Table = {
  caption: 'Niveles tipográficos (Brief §5.1)',
  columns: ['Nivel', 'Dirección', 'Uso'],
  rows: [
    ['Display / titulares', 'Serif refinada tipo editorial: Georgia, Cormorant Garamond, Canela-like, Freight-like o similar licenciable.', 'Hero, claims, titulares de secciones, mensajes emocionales.'],
    ['Texto funcional', 'Sans serif limpia: Aptos, Inter, Neue Haas Grotesk-like, Söhne-like o similar licenciable.', 'Menús, fichas, precios, botones, FAQ, checkout, microcopy.'],
    ['Detalles / captions', 'Sans serif en tamaño pequeño, tracking suave, color taupe.', 'Captions, etiquetas, notas de producto, tiempos de envío.'],
    ['Números / datos', 'Sans serif clara con buena lectura de cifras.', 'Precios, medidas, unidades, fechas límite de gifting.'],
  ],
};

export const jerarquiaWeb: Table = {
  caption: 'Jerarquía tipográfica recomendada en web (Brief §5.2)',
  columns: ['Elemento', 'Especificación', 'Regla'],
  rows: [
    ['H1 hero desktop', '56-72 px, serif, line-height 0.95-1.05', 'Frases cortas, nunca párrafos largos.'],
    ['H1 hero mobile', '36-44 px, serif, line-height 1.05', 'Debe entrar bien en 2-4 líneas.'],
    ['H2 secciones', '32-44 px desktop / 28-34 mobile', 'Editorial, con mucho aire arriba y abajo.'],
    ['Body', '16-18 px, sans, line-height 1.55-1.7', 'Legible, claro, sin bloques densos.'],
    ['Microcopy', '12-14 px, sans, line-height 1.35', 'Envíos, personalización, avisos, FAQ.'],
    ['CTA', '13-15 px, sans, semibold, tracking leve', 'Directo, nunca críptico.'],
  ],
};

/** §6 Sistema fotográfico. */
export const principioFotografico =
  'La fotografía es el principal vendedor sensorial de Obsequiums. Debe compensar la imposibilidad de tocar el producto online. Cada imagen debe responder a una de estas funciones: hacer sentir el cuero, mostrar escala, demostrar uso real, explicar personalización, resolver confianza o construir deseo de regalo.';

export const universosFotograficos: Table = {
  caption: 'Universos fotográficos obligatorios (Brief §6.2)',
  columns: ['Universo', 'Cómo se ve', 'Dónde se usa'],
  rows: [
    ['Producto hero', 'Estuche cerrado/abierto en fondo neutro cálido, sombras suaves, composición limpia.', 'Ecommerce, home, PDP, paid, PR.'],
    ['Macro tactilidad', 'Cuero, costura, interior, borde, cierre, grabado, mano tocando.', 'PDP, reels, stories, anuncios de consideración.'],
    ['Uso real íntimo', 'Tocador, mesilla, escritorio, ritual de mañana/noche, pulseras y relojes.', 'Home, social, journal, email.'],
    ['Viaje', 'Maleta, hotel, fin de semana, bolso de viaje, pasaporte, esenciales.', 'Campañas travel, Pinterest, PDP, ads.'],
    ['Gifting', 'Packaging, tarjeta, iniciales, manos entregando, caja abierta.', 'Gift guide, fechas comerciales, CRM, ads.'],
    ['Personalización', 'Proceso y resultado del grabado, iniciales en detalle, vista previa.', 'PDP, landing personalización, paid conversión.'],
    ['B2B premium', 'Mesa de obsequios, packs, iniciales corporativas sutiles, evento.', 'Private gifting, PDF comercial, LinkedIn.'],
  ],
};

export const parametrosImagen: Definition[] = [
  { term: 'Exposición', detail: 'Baja a media-baja, con producto siempre legible. La sombra debe dar intimidad, no ocultar información.' },
  { term: 'Luz', detail: 'Lateral, natural filtrada o softbox muy difuso. Temperatura cálida-neutra. Evitar flash frontal.' },
  { term: 'Foco', detail: 'Profundidad de campo corta para macros; foco total en producto para PDP técnico.' },
  { term: 'Composición', detail: 'Aire, equilibrio, no saturar de props. El producto manda.' },
  { term: 'Color grading', detail: 'Desaturado, cálido, contraste suave, negros no empastados.' },
  { term: 'Formato', detail: 'Capturar en horizontal, vertical y cuadrado desde la misma escena para reutilizar.' },
  { term: 'Resolución', detail: 'Mínimo 3000 px lado largo para web/PR; compresión optimizada para performance.' },
  { term: 'Recortes', detail: '1:1, 4:5, 9:16, 16:9 y 3:2. Cada producción debe cubrir todos.' },
];

/** §6.4 Props aprobados y prohibidos. */
export const props = {
  aprobados:
    'Relojes, pulseras, brazaletes, anillos, perfume discreto, lino, seda, blazer, libreta, libro, café, pasaporte, llaves, maleta, piedra, madera, bandeja, tarjeta manuscrita, flor sutil.',
  conCuidado:
    'Velas, copas, maquillaje, tecnología, joyas muy llamativas, bolsos de marca reconocible. Solo si no roban foco.',
  prohibidos:
    'Fondos de ecommerce blanco clínico como lenguaje dominante, decoración gratuita, props saturados, logotipos ajenos evidentes, estética de escritorio corporativo frío, joyería excesivamente ostentosa.',
};

/** §7 Sistema de video, motion y ASMR. */
export const principioVideo =
  'El video debe ser central porque el producto tiene gestos: abrir, cerrar, tocar, guardar, personalizar, regalar y viajar. El video debe transmitir calma, textura y precisión. Debe haber piezas editoriales lentas y piezas de performance más directas, pero ambas deben mantener la misma dignidad visual.';

export const formatosVideo: Table = {
  caption: 'Formatos de video (Brief §7.1)',
  columns: ['Formato', 'Duración', 'Contenido', 'Uso'],
  rows: [
    ['Macro sensorial', '5-12 s', 'Cuero, costura, cierre, iniciales, interior.', 'Home loops, reels, PDP, ads consideración.'],
    ['Ritual de uso', '15-30 s', 'Persona guardando reloj o pulsera antes/después de salir.', 'Social, PDP, campaña marca.'],
    ['Travel ritual', '15-30 s', 'Preparación de maleta, hotel, estuche viajando.', 'Travel campaign, Pinterest, TikTok.'],
    ['Personalización', '10-20 s', 'Proceso de iniciales y resultado final.', 'PDP, paid conversión, stories.'],
    ['Unboxing', '20-45 s', 'Packaging, papel, tarjeta, revelación, producto.', 'Gifting, UGC, postcompra.'],
    ['UGC guiado', '15-45 s', 'Creator cuenta qué pieza guarda y por qué.', 'Social proof, ads, PDP reviews.'],
  ],
};

export const guiaASMR: Definition[] = [
  { term: 'Sonidos principales', detail: 'Roce del cuero, cierre, apertura, reloj apoyándose, pulsera entrando, papel grueso, cinta, caja abriéndose, maleta cerrando.' },
  { term: 'Mezcla', detail: 'Sonido cercano, limpio, sin saturación. Música opcional muy tenue. Momentos de silencio intencional.' },
  { term: 'No hacer', detail: 'ASMR exagerado, artificial, sonidos demasiado altos, música viral incompatible, efectos de transición agresivos.' },
  { term: 'Uso web', detail: 'Loops sin sonido por defecto; opción de video en PDP; sonido principalmente en redes y landing de campaña.' },
];

export const asmrIntro =
  'El ASMR debe ser elegante, no caricaturesco. El sonido debe amplificar materialidad y calma. Debe capturarse en producción, no inventarse completamente en edición.';

export const motionWeb: Table = {
  caption: 'Motion y animaciones web (Brief §7.3)',
  columns: ['Animación', 'Especificación', 'Aplicación'],
  rows: [
    ['Fade in', '400-700 ms, ease-out suave.', 'Entrada de bloques, titulares y módulos editoriales.'],
    ['Parallax sutil', 'Muy leve; no debe marear ni parecer plantilla.', 'Hero y storytelling si mejora inmersión.'],
    ['Hover producto', 'Cambio suave de imagen: cerrado/abierto o color/detalle.', 'PLP, PDP thumbnails.'],
    ['Microinteracción personalización', 'Vista previa de iniciales en tiempo real, transición limpia.', 'PDP y módulo de personalización.'],
    ['Sticky CTA mobile', 'Aparece sin tapar contenido crítico.', 'PDP, carrito, gift guide.'],
    ['Scroll narrativo', 'Secciones con ritmo editorial, no exceso de efectos.', 'Home, campaña, journal.'],
  ],
};

/** §22 Guía de copy web. */
export const tonoCopy =
  'El tono debe ser claro, elegante y sensorial. La web no debe sobrepoetizar al punto de ocultar qué vende. Cada claim emocional debe ir acompañado de una aclaración funcional cercana.';

export const guiaCopy: Table = {
  caption: 'Guía de copy web (Brief §22.1)',
  columns: ['Uso', 'Copy recomendado', 'Aplicación'],
  rows: [
    ['Marca', 'Para las piezas que no se guardan en cualquier lugar.', 'Home, hero, campañas.'],
    ['Funcional', 'Estuches de piel personalizables para relojes, pulseras y piezas personales con valor.', 'Subhero, metadata, PDP.'],
    ['Personalización', 'Hazlo tuyo. Hazlo suyo.', 'Módulo de iniciales.'],
    ['Regalo', 'Un regalo personal sin caer en lo obvio.', 'Gift guide, paid, email.'],
    ['Viaje', 'Tus piezas favoritas también viajan protegidas.', 'Travel landing.'],
    ['Pulseras', 'No todo lo que usas para sentirte tú debería terminar en un cajón.', 'Landing pulseras.'],
    ['Relojes', 'El lugar que merece tu reloj cuando no lo llevas puesto.', 'Landing relojes.'],
    ['Cierre', 'Dale un lugar a lo que importa.', 'CTA final.'],
  ],
};

/** §23 Do / Don't creativo y técnico. */
export const doDont: Table = {
  caption: "Do / Don't creativo y técnico (Brief §23)",
  columns: ['Área', 'Do', "Don't"],
  rows: [
    ['Fotografía', 'Primeros planos, luz baja pero legible, textura, manos, vida real, composición con aire.', 'Foto plana de catálogo, blanco clínico dominante, props gratuitos, saturación.'],
    ['Video', 'Ritmo lento, ASMR sutil, gestos reales, loops elegantes.', 'Transiciones agresivas, música viral incompatible, velocidad caótica.'],
    ['Web', 'Editorial, modular, mobile-first, clara, rápida, emocional y confiable.', 'Plantilla genérica, banners agresivos, exceso de apps, checkout confuso.'],
    ['Copy', 'Breve, sensorial y claro.', 'Frases vacías, lujo grandilocuente, poesía que oculta producto.'],
    ['Personalización', 'Discreta, deseable, visible y fácil.', 'Formulario escondido, grabado visualmente tosco, falta de tiempos.'],
    ['Gifting', 'Central en navegación y PDP.', 'Tratarlo como opción secundaria al final del checkout.'],
    ['Marca', 'Lujo accesible, íntimo, transversal.', 'Marca masculina rígida o femenina decorativa.'],
  ],
};

/** Brief §2.1 Traducción emocional por punto de contacto. */
export const traduccionEmocional: Table = {
  caption: 'Traducción emocional por punto de contacto (Brief §2.1)',
  columns: ['Punto de contacto', 'Rol sensorial y comercial'],
  rows: [
    ['Home', 'Debe generar deseo e instalar el universo: no empieza vendiendo producto, empieza haciendo sentir el ritual.'],
    ['Página de producto', 'Debe resolver la compra premium sin tocar: textura, escala, medidas, uso real, personalización, regalo y confianza.'],
    ['Personalización', 'Debe convertir el producto en gesto propio: iniciales, grabado, detalle, vista previa y packaging.'],
    ['Gifting', 'Debe funcionar como concierge visual: para él, para ella, para parejas, para empresa, para viaje, para fechas clave.'],
    ['Journal', 'Debe sostener autoridad y SEO: cuidado de piezas, rituales, guías de regalo, viajes, estilo y objetos con historia.'],
    ['Email/CRM', 'Debe sentirse como continuidad de la marca: breve, elegante, útil, no promocional de forma vulgar.'],
    ['Paid media', 'Debe ser claro sin romper premium: hooks fuertes, visual sensorial y CTA concreto.'],
  ],
};

/** Brief §26 Resumen ejecutivo para el equipo. */
export const resumenEjecutivoVisual = [
  'Obsequiums debe verse como una marca de lujo accesible, táctil, íntima y contemporánea. Su web debe hacer sentir el producto antes de tocarlo, explicar claramente que sirve para relojes, pulseras y piezas personales, y convertir la personalización y el gifting en motores centrales de deseo y conversión.',
  'La dirección visual debe ser de baja exposición controlada, primeros planos, ASMR, textura, manos, personalización visible, escenas reales de viaje y vida íntima, paleta cálida desaturada, tipografía editorial precisa y UX extremadamente clara. El ecommerce debe ser editorial, pero no críptico; sensorial, pero rápido; aspiracional, pero comprensible; premium, pero cercano.',
  'La web no debe vender una caja. Debe vender el gesto de guardar bien algo que importa.',
];
