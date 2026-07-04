import type { Table, Definition } from './types';

/**
 * Ecommerce experience — Plan Marketing 360 §12 y Brief Técnico §8-§21, §25.
 */

export const principioEcommerce =
  'El ecommerce no puede ser una tienda online más. Debe ser el principal espacio de marca, asesoramiento, prueba sensorial y conversión. Debe vender por intención, no solo por SKU. Una persona puede entrar pensando en regalar, en viajar, en guardar pulseras, en proteger un reloj o en personalizar algo. Si la web obliga a pensar como catálogo, baja conversión.';

/** Brief §8.1 Navegación principal recomendada. */
export const navegacionPrincipal: Definition[] = [
  { term: 'Colección', detail: 'Landing de producto principal y variantes.' },
  { term: 'Para relojes', detail: 'Uso, protección, escala, autoridad funcional.' },
  { term: 'Para pulseras', detail: 'Tocador, brazaletes, joyas rígidas, uso femenino sin cliché.' },
  { term: 'Para regalar', detail: 'Gift guide por ocasión, destinatario y presupuesto.' },
  { term: 'Personalización', detail: 'Iniciales, proceso, ejemplos, tiempos, cuidado.' },
  { term: 'Journal', detail: 'Rituales, guías, viaje, cuidado, regalos, objetos con historia.' },
  { term: 'Private Gifting', detail: 'B2B premium, bodas, empresas, hoteles, eventos.' },
];

/** Brief §8.2 Sitemap funcional. */
export const sitemap: Table = {
  caption: 'Sitemap funcional del ecommerce (Brief §8.2)',
  columns: ['Página', 'Objetivo funcional'],
  rows: [
    ['Home', 'Universo de marca, producto, usos, personalización, gifting, confianza, CTA.'],
    ['PLP / Colección', 'Listado de productos/colores, filtros por uso, quick view, personalización.'],
    ['PDP / Producto', 'Galería inmersiva, información, personalización, medidas, usos, reviews, FAQ, CTA.'],
    ['Landing Para relojes', 'Beneficios funcionales, escenas de viaje/escritorio, guía de tamaño.'],
    ['Landing Para pulseras', 'Uso femenino, tocador, brazaletes, cuidado, viaje, regalo para ella.'],
    ['Landing Para regalar', 'Compra por destinatario, ocasión, personalización, packaging, fechas límite.'],
    ['Landing Personalización', 'Proceso, ejemplos, vista previa, reglas de caracteres, tiempos.'],
    ['Private Gifting', 'Formulario B2B, casos de uso, packs, mínimos, contacto.'],
    ['Journal', 'SEO y marca: guías de regalo, cuidado, viaje, rituales, historias.'],
    ['FAQ / Ayuda', 'Envíos, devoluciones, materiales, personalización, cuidado, pagos.'],
    ['Carrito / Checkout', 'Simple, confiable, gift options, coste visible, sticky summary.'],
  ],
};

/** Brief §9 Home: wireframe narrado. */
export const homeWireframe: Table = {
  caption: 'Home: wireframe narrado y especificación por sección (Brief §9)',
  columns: ['Sección', 'Visual', 'Copy guía', 'CTA', 'Función'],
  rows: [
    ['1. Hero sensorial', 'Video o imagen macro: manos abriendo estuche / pieza entrando. Baja exposición, luz suave.', 'Para las piezas que no se guardan en cualquier lugar.', 'Descubrir la colección / Personalizar', 'Instalar universo y dirigir al producto.'],
    ['2. Qué es', 'Producto cerrado/abierto y copy claro.', 'Estuches de piel personalizables para relojes, pulseras y piezas personales con valor.', 'Ver usos', 'Claridad inmediata.'],
    ['3. Los tres momentos', 'Tres cards visuales: Para relojes / Para pulseras / Para regalar.', 'Elige por el momento, no solo por el objeto.', 'Explorar', 'Segmentar intención.'],
    ['4. Detalle material', 'Macros de piel, costura, interior, cierre.', 'La diferencia se siente en los detalles.', 'Ver materiales', 'Justificar premium.'],
    ['5. Personalización', 'Iniciales en close-up y proceso.', 'Hazlo tuyo. Hazlo suyo.', 'Personalizar', 'Aumentar deseo y AOV.'],
    ['6. Vida real', 'Tocador, maleta, escritorio, hotel.', 'Diseñado para acompañar una vida cuidada.', 'Ver escenas', 'Hacerlo imaginable.'],
    ['7. Gifting', 'Packaging, tarjeta, manos, caja.', 'Un regalo personal sin caer en lo obvio.', 'Ver guía de regalos', 'Activar compra para terceros.'],
    ['8. Confianza', 'Iconos sutiles, textos claros.', 'Envíos, devoluciones, personalización, asistencia.', 'FAQ', 'Reducir fricción.'],
    ['9. Journal', 'Editorial cards.', 'Rituales, viajes y piezas con historia.', 'Leer más', 'SEO, autoridad, permanencia.'],
    ['10. CTA final', 'Producto hero + frase madre.', 'Dale un lugar a lo que importa.', 'Comprar / Unirse a waitlist', 'Conversión final.'],
  ],
};

/** Plan §12.1 Home recomendada. */
export const homeRecomendada: string[] = [
  'Hero: "Para las piezas que no se guardan en cualquier lugar."',
  'Subcopy: "Estuches de piel personalizables para relojes, pulseras y objetos personales con valor emocional. Diseñados para viajar, regalar y cuidar lo que importa."',
  'Bloques de entrada: Para relojes / Para pulseras / Para regalar / Para viajar / Personalización / Primera serie.',
  'Vídeo corto de apertura y uso, visible arriba del fold o inmediatamente después.',
  'Módulo sensorial: piel, interior, cierre, costuras, escala, colores.',
  'Módulo "Compra por momento": regalo, viaje, tocador, logro, aniversario, boda, graduación.',
  'Personalización: iniciales, tarjeta, packaging, vista previa si es posible.',
  'Prueba social: reviews, UGC, creators y menciones cuando existan.',
  'Journal/guías: regalos, cuidado, viaje, pulseras, relojes.',
  'CTA persistente mobile: Ver la primera serie / Personalizar.',
];

/** Plan §12.2 Página de producto perfecta. */
export const pdpPerfecta: Table = {
  caption: 'Página de producto perfecta (Plan §12.2)',
  columns: ['Elemento PDP', 'Detalle obligatorio', 'Objetivo'],
  rows: [
    ['Galería', 'Cerrado, abierto, con reloj, con pulseras, con brazalete, en maleta, en tocador, en escritorio, en mano, packaging.', 'Resolver visualmente usos y escala.'],
    ['Vídeo', '10-20 segundos de apertura, cierre, pieza entrando, textura e iniciales.', 'Hacer sentir producto.'],
    ['Selector de intención', '"Lo quiero para: relojes / pulseras / regalo / viaje".', 'Personalizar argumentos sin crear fricción.'],
    ['Medidas', 'Dimensiones, fotos con objetos reales, capacidad por tipo de pieza.', 'Resolver duda funcional.'],
    ['Materiales', 'Piel, interior, cierre, costura, cuidados.', 'Justificar precio.'],
    ['Personalización', 'Iniciales/monograma/tarjeta, tiempo extra, vista previa.', 'Subir AOV y vínculo.'],
    ['Packaging', 'Fotos de caja, tarjeta, opción regalo, sin precio.', 'Capturar gifting.'],
    ['Envíos/devoluciones', 'Plazos claros, personalización, fecha garantizada si aplica.', 'Confianza.'],
    ['FAQ', '¿Sirve para pulseras? ¿Qué tamaño? ¿Se puede regalar? ¿Cuánto tarda? ¿Cómo se cuida?', 'Reducir tickets y abandono.'],
    ['Reviews/UGC', 'Fotos reales, creators, testimonios.', 'Prueba social.'],
    ['CTA', 'Fijo en mobile, copy claro: Personalizar / Añadir al carrito.', 'Conversión.'],
  ],
};

/** Brief §10.1 Módulos PDP. */
export const modulosPDP: Table = {
  caption: 'Módulos de la PDP (Brief §10.1)',
  columns: ['Módulo PDP', 'Contenido', 'Objetivo'],
  rows: [
    ['Galería inicial', '12-16 assets mínimos: cerrado, abierto, reloj, pulseras, macro, mano, escala, maleta, tocador, iniciales, packaging, video.', 'Hacer sentir y entender.'],
    ['Nombre + promesa', 'Nombre del producto + frase emocional funcional.', 'Dar identidad.'],
    ['Selector de color', 'Swatches reales con nombre elegante, foto al cambiar.', 'Facilitar elección.'],
    ['Personalización', 'Campo iniciales, previsualización, coste/tiempo visible.', 'Aumentar pertenencia y AOV.'],
    ['CTA sticky', 'Añadir al carrito / Personalizar el mío.', 'No perder intención en mobile.'],
    ['Beneficios rápidos', 'Piel, interior protector, ideal viaje, regalo, personalizable.', 'Claridad en 5 segundos.'],
    ['Descripción editorial', 'Párrafo emocional + párrafo funcional.', 'Conectar deseo y uso.'],
    ['Medidas visuales', 'Fotos con mano, reloj, pulsera, maleta.', 'Resolver escala.'],
    ['Usos', 'Para relojes, pulseras, viaje, tocador, regalo.', 'Ampliar mercado.'],
    ['Materiales y cuidado', 'Detalles técnicos claros.', 'Justificar precio y reducir dudas.'],
    ['FAQ contextual', 'Sirve para pulseras, cuántas piezas, entrega, personalización, devoluciones.', 'Reducir contacto y abandono.'],
    ['Reviews / UGC', 'Fotos reales, testimonios breves, rating si aplica.', 'Confianza.'],
    ['Cross-sell editorial', 'Gift guide, journal, productos relacionados.', 'Aumentar navegación.'],
  ],
};

export const principioPDP =
  'La PDP debe resolver la pregunta emocional y racional de comprar un producto premium sin tocarlo. La persona debe entender: qué es, para qué sirve, cómo se siente, qué cabe dentro, cómo se personaliza, cómo llega, cómo se devuelve y por qué vale lo que cuesta.';

/** Brief §10.2 Microcopy recomendado en PDP. */
export const microcopyPDP: Definition[] = [
  { term: 'Selector personalización', detail: 'Añade iniciales discretas para convertirlo en una pieza propia.' },
  { term: 'Aviso de tiempo', detail: 'La personalización puede sumar 24-72 h al tiempo de preparación.' },
  { term: 'Gift option', detail: '¿Es un regalo? Podemos prepararlo sin precio y con tarjeta.' },
  { term: 'Medidas', detail: 'Comprueba las medidas y el tipo de pieza antes de personalizar.' },
  { term: 'Asistencia', detail: '¿Dudas sobre si tu reloj o pulsera entra? Escríbenos y te ayudamos.' },
  { term: 'Carrito', detail: 'Tu pieza personalizada se preparará especialmente para ti.' },
];

/** Brief §11 Personalización: UX y experiencia visual. */
export const personalizacionIntro =
  'La personalización debe ser un momento de deseo, no un formulario. El usuario debe sentir que está convirtiendo el producto en algo propio o en un regalo con intención.';

export const personalizacionUX: Definition[] = [
  { term: 'Entrada', detail: 'Módulo visible en PDP y landing específica. No esconderlo en checkout.' },
  { term: 'Vista previa', detail: 'Mockup en tiempo real de iniciales sobre el producto o aproximación visual elegante.' },
  { term: 'Reglas', detail: 'Mostrar límite de caracteres, ubicación, estilo, tiempo y si admite devolución.' },
  { term: 'Ejemplos', detail: 'Galería de iniciales reales sobre distintos colores.' },
  { term: 'Emoción', detail: 'Copy que explique por qué personalizar: no es adorno, es pertenencia.' },
  { term: 'Conversión', detail: 'Ofrecer "personalización incluida" en preventa o campañas, no como descuento permanente.' },
  { term: 'B2B', detail: 'Formulario específico para iniciales múltiples, logos discretos o proyectos privados.' },
];

/** Brief §12 Gifting experience. */
export const giftingIntro =
  'Obsequiums tiene potencial de gifting muy superior al de una simple caja de relojes. El diseño web debe tratar el regalo como una ruta de compra central. Esto incluye navegación, landings, filtros, copy, packaging, fechas límite, email y paid media.';

export const rutasGifting: Table = {
  caption: 'Rutas de gifting (Brief §12.1)',
  columns: ['Ruta', 'Contexto visual', 'Mensaje guía'],
  rows: [
    ['Para ella', 'Pulseras, brazaletes, tocador, viaje, auto-recompensa, piezas personales.', 'Regalos para mujeres que cuidan los detalles.'],
    ['Para él', 'Reloj, viaje, escritorio, objeto funcional elevado.', 'Regalos para hombres difíciles de regalar.'],
    ['Para pareja', 'Aniversario, San Valentín, Navidad, cumpleaños.', 'Un regalo personal sin caer en lo obvio.'],
    ['Para madre/padre', 'Piezas heredadas, relojes, joyas con historia.', 'Para guardar una pieza con memoria.'],
    ['Para bodas', 'Padrinos, madrinas, pareja, invitados VIP.', 'Obsequios personalizados para momentos irrepetibles.'],
    ['Para empresa', 'Directivos, clientes VIP, equipos, eventos.', 'Private gifting con intención y criterio.'],
  ],
};

export const packagingUnboxing: string[] = [
  'Incluir una sección visible de packaging en PDP y Gift Guide, no solo en FAQ.',
  'Mostrar caja, papel, tarjeta, textura y objeto final con personalización.',
  'Explicar qué incluye la opción regalo: tarjeta, sin precio, mensaje, fecha límite, packaging.',
  'Crear video corto de unboxing para la home, PDP y email postcompra.',
  'El packaging debe ser una razón de compra y una razón de contenido UGC.',
];

/** Brief §13 Landings por intención. */
export const landingsIntencion: Table = {
  caption: 'Landings por intención (Brief §13)',
  columns: ['Landing', 'Público', 'Contenido visual', 'CTA'],
  rows: [
    ['Para relojes', 'Hombre/mujer con reloj importante, viaje, colección inicial.', 'Protección, escala, interior, viaje, autoridad.', 'Comprar para reloj / Consultar medidas.'],
    ['Para pulseras', 'Mujer con pulseras, brazaletes y joyas rígidas.', 'Tocador, rutina íntima, viaje, cuidado, belleza funcional.', 'Ver cómo queda con pulseras.'],
    ['Para viajar', 'Personas que llevan piezas en escapadas o trabajo.', 'Maleta, hotel, orden, seguridad, ritual.', 'Preparar mi travel case.'],
    ['Para regalar', 'Persona que busca regalo premium y personal.', 'Packaging, iniciales, guía por destinatario, fechas.', 'Encontrar mi regalo.'],
    ['Personalización', 'Comprador emocional o B2B.', 'Iniciales, proceso, ejemplos, significado.', 'Personalizar ahora.'],
    ['Private Gifting', 'Empresas, bodas, hoteles, eventos.', 'Mesa de obsequios, packs, discreción, contacto.', 'Solicitar propuesta.'],
  ],
};

/** Plan §12.3 Navegación por intención. */
export const navegacionIntencion: string[] = [
  'Comprar para mí',
  'Comprar para regalar',
  'Para relojes',
  'Para pulseras',
  'Para joyas de viaje',
  'Para viajar',
  'Para él',
  'Para ella',
  'Personalizable',
  'Guía de regalos',
  'Private Gifting / Empresas y eventos',
];

/** Plan §12.4 Checkout, postcompra y atención. */
export const checkoutPostcompra: string[] = [
  'Checkout de máximo tres pasos, mobile-first y con métodos de pago rápidos: tarjeta, Apple Pay, Google Pay, PayPal y pago fraccionado si encaja con marca.',
  'Costes de envío y plazo visibles antes de pagar. No esconder costes que luego dañen confianza.',
  'Opción regalo: mensaje, tarjeta, no incluir precio, fecha objetivo, packaging.',
  'Carrito abandonado con tono elegante: "Tu pieza personalizada sigue reservada por unas horas."',
  'Chat/WhatsApp para venta asistida: especialmente para medidas, regalos, personalización y B2B.',
  'Email postcompra: cuidado del producto, cómo usarlo, cómo compartir, cómo recomendar.',
  'Pedido de review y UGC después de la recepción, no inmediatamente después de la compra.',
  'Seguimiento de pedido claro, con lenguaje premium y humano.',
];

/** Plan §12.5 CRO mensual. */
export const croIntro =
  'La web no se lanza y se abandona. CRO debe operar semanalmente. Se deben analizar clicks, scroll, add to cart, abandono, preguntas, búsquedas internas, tasa de personalización, uso de gift option, conversión por canal y cohortes de compra. Cada semana debe haber al menos dos mejoras y un test activo.';

export const croDiagnostico: Table = {
  caption: 'CRO: diagnóstico y acción (Plan §12.5)',
  columns: ['Si pasa esto', 'Diagnóstico probable', 'Acción'],
  rows: [
    ['Hay alcance social pero pocos clics', 'Contenido entretiene pero no conecta con intención comercial.', 'Agregar CTAs, mostrar usos, crear landing por intención.'],
    ['Hay clics pero poco add to cart', 'PDP no convence o precio/valor no está claro.', 'Mejorar fotos, FAQ, reviews, medidas, argumentos de valor.'],
    ['Hay add to cart pero no compra', 'Fricción de checkout, envío, plazo, personalización o confianza.', 'Simplificar checkout, mostrar plazos, activar chat, reforzar garantías.'],
    ['Hay compra pero poco UGC', 'Packaging o postcompra no emociona lo suficiente.', 'Rediseñar unboxing y pedir UGC con mejor timing.'],
    ['Muchos chats preguntan lo mismo', 'FAQ insuficiente.', 'Convertir preguntas en módulos PDP y emails.'],
  ],
};

/** Brief §14 Componentes UI requeridos. */
export const componentesUI: Table = {
  caption: 'Componentes UI requeridos (Brief §14)',
  columns: ['Componente', 'Especificación funcional', 'Dónde aparece'],
  rows: [
    ['Hero video/image', 'Full width, texto superpuesto o bloque lateral, fallback imagen mobile, carga optimizada.', 'Home, campañas, landings.'],
    ['Product card', 'Imagen hover abierto/cerrado, swatches, precio, tag personalizable, quick add si aplica.', 'PLP, home modules.'],
    ['Swatches', 'Color real + nombre; activo claro; accesible por teclado.', 'PDP, PLP.'],
    ['Personalization preview', 'Campo, preview, validación, tooltip de tiempo/coste.', 'PDP.'],
    ['Gift selector', 'Compra para mí / para regalar; activa opciones de packaging y mensaje.', 'PDP, carrito.'],
    ['Editorial card', 'Imagen + título + extracto + CTA suave.', 'Journal, home.'],
    ['Trust strip', 'Envíos, devolución, asistencia, personalización.', 'PDP, carrito, home.'],
    ['UGC carousel', 'Fotos reales, creator, texto breve, enlace a producto.', 'PDP, home, campañas.'],
    ['FAQ accordion', 'Preguntas agrupadas por producto, personalización, envío, devolución.', 'PDP, ayuda.'],
    ['Sticky mobile CTA', 'Visible tras scroll, incluye precio y CTA.', 'PDP.'],
    ['B2B lead form', 'Campos mínimos + adjuntar cantidad/fecha/motivo.', 'Private Gifting.'],
  ],
};

/** Brief §15 Requisitos mobile-first. */
export const mobileFirstIntro =
  'La mayoría del tráfico vendrá desde redes y paid social; por lo tanto, mobile no es una adaptación, es el punto de partida. La web debe sentirse rápida, visual, táctil y clara en pantallas pequeñas.';

export const mobileFirst: string[] = [
  'Hero mobile con video corto o imagen potente que no pese excesivamente.',
  'CTA visible sin invadir; sticky en PDP después de la primera sección.',
  'Galería mobile con swipe natural y thumbnails claros.',
  'Texto emocional breve; información técnica en accordions.',
  'Personalización usable con una sola mano: campo claro, preview y validación inmediata.',
  'Checkout con Apple Pay, Google Pay, PayPal u opciones rápidas si el stack lo permite.',
  'Carga prioritaria de imagen hero y primera imagen de producto; lazy load para el resto.',
  'No depender de hover en mobile; todas las funciones deben tener equivalente táctil.',
];

/** Brief §16 SEO. */
export const seoIntro =
  'SEO no debe ser un blog periférico. Debe integrarse con gifting, uso y educación. La marca puede capturar búsquedas de regalos, joyas de viaje, organización de pulseras, watch roll, estuche de piel personalizado y regalo premium personalizado.';

export const clustersSEO: Definition[] = [
  { term: 'Guías de regalo', detail: 'Regalos personalizados para hombres, regalos elegantes para mujeres, regalos de aniversario, regalos premium personalizados.' },
  { term: 'Uso y cuidado', detail: 'Cómo guardar pulseras, cómo viajar con relojes, cómo cuidar joyas en viaje, cómo proteger brazaletes.' },
  { term: 'Producto', detail: 'Watch roll de piel, estuche para relojes, estuche para pulseras, joyero de viaje de piel.' },
  { term: 'Lifestyle', detail: 'Quiet luxury accessories, objetos de lujo accesible, ritual de viaje, tocador elegante.' },
  { term: 'B2B', detail: 'Regalos corporativos premium, regalos personalizados para directivos, regalos para bodas premium.' },
];

export const metadata: Definition[] = [
  { term: 'Home title', detail: 'Obsequiums | Estuches de piel personalizables para relojes y pulseras' },
  { term: 'Home description', detail: 'Estuches de piel personalizables para relojes, pulseras y piezas personales con valor. Diseñados para viajar, regalar y cuidar lo que importa.' },
  { term: 'PDP title', detail: '[Nombre producto] | Estuche de piel personalizable para relojes y pulseras' },
  { term: 'Gift guide title', detail: 'Regalos personalizados premium para relojes, pulseras y piezas personales' },
  { term: 'Alt text patrón', detail: 'Estuche de piel Obsequiums color [color] con [reloj/pulsera/iniciales] en [contexto].' },
];

/** Brief §17.1 Accesibilidad. */
export const accesibilidad: string[] = [
  'Contraste suficiente entre texto y fondo, especialmente sobre imágenes de baja exposición.',
  'No usar texto pequeño en imágenes como única fuente de información.',
  'Todos los videos deben tener alternativa visual clara y no depender de sonido para entenderse.',
  'Alt text descriptivo en imágenes de producto, uso, personalización y packaging.',
  'Navegación por teclado en menús, accordions, swatches, formularios y checkout.',
  'Estados focus visibles, refinados y coherentes con marca.',
  'Formularios con labels reales, mensajes de error claros y validación accesible.',
  'Evitar animaciones que no respeten reduced motion.',
];

/** Brief §17.2 Performance. */
export const performance: Table = {
  caption: 'Objetivos de performance (Brief §17.2)',
  columns: ['Métrica / área', 'Objetivo', 'Regla'],
  rows: [
    ['LCP', '< 2,5 s en páginas clave.', 'Optimizar hero, usar imagen/video responsive y preload controlado.'],
    ['INP', '< 200 ms ideal.', 'Minimizar JS innecesario, componentes ligeros.'],
    ['CLS', '< 0,1.', 'Reservar espacio para imágenes, banners y sticky elements.'],
    ['Imágenes', 'WebP/AVIF, srcset, lazy loading, compresión sin perder tactilidad.', 'No subir imágenes gigantes sin optimizar.'],
    ['Video', 'Loops cortos, muted, poster image, carga diferida.', 'Evitar autoplay pesado en mobile si afecta carga.'],
    ['Apps/plugins', 'Mínimos necesarios.', 'No destruir velocidad con apps de marketing superpuestas.'],
  ],
};

/** Brief §18 Tracking, analítica y eventos ecommerce. */
export const trackingIntro =
  'El desarrollo debe dejar preparado un sistema de medición desde el lanzamiento. La identidad visual sirve a la marca, pero la web debe permitir aprender qué deseo convierte mejor: relojes, pulseras, regalo, viaje, personalización o B2B.';

export const eventosTracking: Table = {
  caption: 'Eventos de tracking ecommerce (Brief §18)',
  columns: ['Evento', 'Cuándo dispara', 'Para qué sirve'],
  rows: [
    ['view_item', 'Vista de PDP con producto/color seleccionado.', 'Medir interés por producto y color.'],
    ['select_color', 'Click en swatch.', 'Detectar demanda cromática.'],
    ['start_personalization', 'Usuario abre módulo o escribe iniciales.', 'Medir deseo de personalización.'],
    ['complete_personalization', 'Iniciales validadas.', 'Medir intención alta.'],
    ['select_gift_option', 'Activa opción regalo.', 'Medir peso de gifting.'],
    ['add_to_cart', 'Añade producto.', 'Medir fuerza PDP.'],
    ['begin_checkout', 'Inicia checkout.', 'Detectar fricción carrito.'],
    ['purchase', 'Compra.', 'Ventas y atribución.'],
    ['newsletter_signup', 'Registro email.', 'Crecimiento CRM.'],
    ['b2b_form_submit', 'Solicitud Private Gifting.', 'Pipeline B2B.'],
    ['faq_open', 'Abre preguntas específicas.', 'Detectar dudas recurrentes.'],
    ['ugc_interaction', 'Click en UGC/review.', 'Medir prueba social.'],
  ],
};

/** Brief §19 CMS y requisitos para desarrollo. */
export const cmsEditable: string[] = [
  'Hero: imagen/video, título, subtítulo, CTA.',
  'Módulos editoriales: imagen, título, texto, CTA, orden.',
  'Productos: fotos, video, color, materiales, medidas, usos, FAQ, personalización.',
  'Gift guides: destinatario, ocasión, producto recomendado, copy, fechas límite.',
  'Journal: artículos, categorías, autor, productos relacionados.',
  'UGC/reviews: contenido, autor, producto vinculado, permiso de uso.',
  'Private Gifting: casos, formulario, mensajes, imágenes, FAQs.',
  'Banners de campañas: activar/desactivar sin tocar código.',
  'Mensajes de stock, preventa y fechas límite de personalización.',
];

export const requisitosTecnicos: string[] = [
  'Arquitectura modular para que marketing pueda crear landings sin rediseñar desde cero.',
  'Sistema de componentes coherente con tokens de color, tipografía y espaciado.',
  'Soporte para video optimizado en home, PDP y landings.',
  'Integración de email/CRM para waitlist, popups elegantes, lead magnets y flows.',
  'Integración con analítica, pixel de Meta, Google Ads, GA4/server-side si aplica, y eventos personalizados.',
  'Soporte para personalización de producto con reglas claras de validación y preparación de pedido.',
  'Soporte para gift message, gift packaging y ocultar precio en albarán si aplica.',
  'Página B2B con formulario y tracking específico.',
  'Sistema de reviews/UGC integrable en PDP sin romper estética premium.',
  'Optimización SEO: schema product, breadcrumb, article, FAQ, organization.',
];

/** Brief §20 Producción de assets: lista mínima para lanzar. */
export const assetsMinimos: Table = {
  caption: 'Producción de assets: lista mínima para lanzar (Brief §20)',
  columns: ['Categoría', 'Cantidad mínima', 'Detalle'],
  rows: [
    ['Producto hero', '30-50 fotos', 'Todos los colores, cerrado/abierto, frontal, lateral, interior, escala.'],
    ['Macro detalle', '40-60 fotos/clips', 'Cuero, costura, grabado, cierre, interior, manos.'],
    ['Uso con relojes', '20-30 assets', 'Escritorio, viaje, elección antes de salir, reloj dentro.'],
    ['Uso con pulseras', '20-30 assets', 'Tocador, brazaletes, rutina noche, viaje, pulseras dentro.'],
    ['Gifting', '25-40 assets', 'Packaging, tarjeta, manos, personalización, unboxing.'],
    ['Travel', '20-30 assets', 'Maleta, hotel, pasaporte, fin de semana.'],
    ['Video loops web', '6-10 loops', 'Hero, macro, personalización, viaje, gifting.'],
    ['Reels/TikTok base', '25-40 piezas', 'ASMR, ritual, what fits, regalo, viaje, before/after.'],
    ['PDP videos', '3-5 videos', 'Producto 360, uso, medidas, personalización.'],
    ['UGC inicial', '10-20 piezas', 'Creators con brief de pieza personal e historia.'],
  ],
};

/** Brief §21 Guía de contenido para redes conectado con web. */
export const redesWebIntro =
  'La web debe ser el centro de conversión y el contenido debe alimentar sus módulos. Cada pieza producida debe tener uso cruzado: social, PDP, landing, email, ads y PR.';

export const pilaresRedesWeb: Table = {
  caption: 'Guía de contenido para redes conectado con web (Brief §21)',
  columns: ['Pilar', 'Contenido', 'Dónde alimenta'],
  rows: [
    ['Tacto', 'Macros, cuero, cierre, ASMR.', 'PDP, reels, paid consideración.'],
    ['Ritual', 'Abrir, guardar, cerrar, preparar.', 'Home, social, journal.'],
    ['Vida real', 'Tocador, maleta, escritorio, hotel.', 'Landings por intención.'],
    ['Personalización', 'Iniciales, proceso, resultado.', 'PDP, paid conversión, email.'],
    ['Gifting', 'Packaging, manos, tarjeta, entrega.', 'Gift guide, CRM, campañas.'],
    ['Historia de pieza', 'Qué reloj/pulsera guardarías y por qué.', 'UGC, comunidad, journal.'],
    ['Educación', 'Cómo guardar, cómo viajar, cómo regalar.', 'SEO, Pinterest, email.'],
  ],
};

/** Brief §25 Criterios de aprobación antes de publicar. */
export const criteriosAprobacion: string[] = [
  'La home comunica en menos de 5 segundos qué vende Obsequiums y qué emoción propone.',
  'La PDP permite entender textura, escala, uso, personalización, precio, envío y devolución sin esfuerzo.',
  'La marca no parece una tienda genérica ni una marca de cajas masculinas de relojería.',
  'Pulseras, relojes, viaje y regalo aparecen integrados desde el inicio.',
  'La personalización es visible, deseable y usable.',
  'Mobile funciona mejor que desktop, no al revés.',
  'Los videos y fotos hacen sentir el producto, no solo lo muestran.',
  'El sitio carga rápido y no sacrifica performance por estética.',
  'Todos los eventos clave están trackeados.',
  'El equipo de marketing puede editar campañas, landings y contenidos sin depender siempre de desarrollo.',
  'CEO/dirección puede ver claramente cómo la identidad visual conecta con deseo, confianza y conversión.',
];

/** Brief §24 Plan de trabajo recomendado para diseño y desarrollo. */
export const planTrabajoWeb: Table = {
  caption: 'Plan de trabajo recomendado para diseño y desarrollo (Brief §24)',
  columns: ['Tiempo', 'Trabajo', 'Entregable'],
  rows: [
    ['Semana 1', 'Kickoff, auditoría de marca, sitemap, moodboard final, arquitectura de componentes.', 'Mapa web aprobado + dirección visual aprobada.'],
    ['Semana 2', 'Wireframes mobile-first: home, PDP, colección, gifting, personalización.', 'Wireframes funcionales validados.'],
    ['Semana 3', 'UI desktop/mobile de páginas clave y design system inicial.', 'Figma con componentes principales.'],
    ['Semana 4', 'Producción/selección de assets, prototipo clickable, ajustes CRO.', 'Prototipo aprobado para desarrollo.'],
    ['Semana 5-6', 'Desarrollo front-end, CMS, PDP, personalización, analítica.', 'Staging funcional.'],
    ['Semana 7', 'Carga de contenido, QA visual, performance, mobile, eventos, SEO.', 'Prelaunch QA.'],
    ['Semana 8', 'Correcciones finales, soft launch, medición, optimización inicial.', 'Web publicada + backlog CRO.'],
  ],
};
