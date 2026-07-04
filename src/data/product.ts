import type { Table, Definition } from './types';

/** Producto y categoría — Plan Marketing 360 §3, §6 y §8. */

export const diagnostico = [
  'El producto tiene una ventaja muy poco explotada en muchas marcas nuevas: no es masivo, pero sí simbólico. Un estuche cilíndrico de piel para relojes, pulseras y piezas personales habla de viaje, orden, cuidado, logro, regalo y memoria. En un mercado lleno de bolsos, carteras y accesorios, este producto permite entrar por un territorio más sofisticado: no compite por outfit, compite por ritual.',
  'El error sería venderlo como "un estuche bonito". El acierto es convertirlo en "el primer icono de Obsequiums": la pieza inaugural que representa cómo la marca mira los objetos personales. La primera serie debe presentarse como deliberada, breve, cuidada, personalizable y emocionalmente clara.',
];

export const referenciaVisual = {
  cerrado:
    'Estuches cilíndricos de piel en gama sobria — marrón, camel, gris, azul y verde — presentados sobre pedestales, con lectura premium, calma y colección.',
  abierto:
    'Uso potencial para relojes, pulseras rígidas, brazaletes y piezas personales que requieren protección, orden y presentación.',
};

/** §3.2 Rol del producto como primer icono. */
export const rolIcono: Definition[] = [
  { term: 'Rol de negocio', detail: 'Producto de lanzamiento para validar demanda, precio, canales, mensajes, colores, personalización, gifting y capacidad operativa.' },
  { term: 'Rol de marca', detail: 'Icono físico de la promesa: cuidar lo que importa con calma, precisión y belleza.' },
  { term: 'Rol de contenido', detail: 'Objeto repetible durante 12 meses a través de usos: reloj, pulsera, maleta, tocador, regalo, mesa de noche, escritorio, hotel, viaje, logro.' },
  { term: 'Rol de comunidad', detail: 'Disparador de historias: ¿qué pieza guardarías aquí y por qué?' },
  { term: 'Rol ecommerce', detail: 'SKU central que debe tener una PDP impecable, con visuales, videos, FAQs, guía de medidas, personalización y prueba social.' },
  { term: 'Rol PR', detail: 'Ángulo de novedad: marca española que convierte el cuidado de relojes, pulseras y piezas personales en ritual de lujo accesible.' },
  { term: 'Rol B2B', detail: 'Objeto ideal para regalos privados, empresas, bodas, hoteles, joyerías, relojerías, eventos y programas de fidelización premium.' },
];

/** §3.3 Barreras de adopción y respuesta. */
export const barrerasAdopcion: Table = {
  caption: 'Barreras de adopción y respuesta de marca (§3.3)',
  columns: ['Barrera', 'Por qué aparece', 'Respuesta de marca / ecommerce / contenido'],
  rows: [
    ['"No necesito una caja para eso"', 'El producto puede parecer accesorio prescindible si se comunica solo como contenedor.', 'Reencuadrar: no es necesidad básica, es cuidado, protección, orden, regalo y ritual. Mostrar antes/después: cajón/maleta vs estuche.'],
    ['"No sé si caben mis pulseras o relojes"', 'Producto táctil, medidas difíciles de imaginar online.', 'Guía visual de tamaños, fotos con piezas reales, vídeos de capacidad, medidas claras, FAQ por tipo de pieza.'],
    ['"No puedo tocar la piel"', 'La piel necesita textura, peso y calidad percibida.', 'Macro-vídeos, ASMR, zoom, close-ups, creators reales, pop-ups, reviews y política clara de devolución.'],
    ['"Es caro para un estuche"', 'El valor percibido puede quedar bajo si la narrativa es funcional.', 'Elevar percepción: piel, personalización, packaging regalo, durabilidad, protección, objeto personal y gifting significativo.'],
    ['"No sé si gustará como regalo"', 'Quien compra para regalar quiere certeza emocional.', 'Guías por ocasión, relación y estilo: para él, para ella, para pareja, para madre, para padre, para ascenso, para viaje, para boda.'],
    ['"No conozco la marca"', 'Marca nueva sin autoridad.', 'PR, creators, UGC, reviews, garantías, atención WhatsApp, web impecable, packaging premium y transparencia operativa.'],
    ['"Es demasiado masculino si parece solo para relojes"', 'La narrativa relojera puede excluir a mujeres.', 'Mostrar pulseras, brazaletes, tocador, viaje, self-gift, regalo entre mujeres y piezas con historia desde el día uno.'],
  ],
};

/** §3.4 Cómo hacer sentir el producto sin tocarlo. */
export const sentirSinTocarIntro =
  'La venta online de marroquinería premium necesita traducir materia en percepción. El producto debe sentirse digitalmente a través de planos, sonido, proporción y contexto. No basta con fotografía frontal. La marca debe diseñar una biblioteca visual que permita imaginar cómo se siente abrirlo, cerrarlo, sostenerlo, apoyarlo, poner una pieza dentro y recibirlo como regalo.';

export const sentirSinTocar: Definition[] = [
  { term: 'Textura', detail: 'Close-ups de piel mate, grano, costura y curva del cilindro con luz lateral suave.' },
  { term: 'Peso visual', detail: 'Manos sosteniéndolo, estuche junto a pasaporte, perfume, reloj, pulsera o libro para percibir escala.' },
  { term: 'Apertura', detail: 'Secuencias lentas de tapa abriéndose, interior visible y pieza entrando sin fricción.' },
  { term: 'Sonido', detail: 'ASMR del cierre, roce de piel, reloj o pulsera apoyándose, papel de packaging, tarjeta deslizándose.' },
  { term: 'Interior', detail: 'Mostrar acolchado, separadores, protección, capacidad, espacio entre piezas y limpieza del acabado.' },
  { term: 'Uso real', detail: 'Maleta, tocador, mesilla de noche, hotel, escritorio, bolso de viaje, armario, ritual de noche.' },
  { term: 'Personalización', detail: 'Iniciales antes/después, monograma en macro, decisión de color y elección de packaging.' },
  { term: 'Ritual de regalo', detail: 'Caja, papel, lazo, tarjeta, mensaje, apertura, reacción, pieza guardada por primera vez.' },
];

/** §6.1 Producto icono de lanzamiento. */
export const productoIcono: Definition[] = [
  { term: 'Nombre recomendado', detail: 'The Signature Roll / La Primera Serie / Obsequiums Roll Nº1. Para España puede convivir "La Primera Serie" en campaña y "Signature Roll" como nombre de producto si la marca quiere proyección europea.' },
  { term: 'Descripción', detail: 'Estuche cilíndrico de piel personalizable para relojes, pulseras rígidas, brazaletes y piezas personales de viaje.' },
  { term: 'Claim', detail: 'Para las piezas que no se guardan en cualquier lugar.' },
  { term: 'Relato', detail: 'Una pieza de piel diseñada para proteger y presentar aquello que llevas cerca de la piel: relojes, pulseras, brazaletes, recuerdos y regalos con historia.' },
  { term: 'Argumentos racionales', detail: 'Piel, interior protector, cierre, capacidad, medidas, colores, personalización, packaging, envío, política de devolución, atención.' },
  { term: 'Argumentos emocionales', detail: 'Cuidado, identidad, logro, memoria, regalo, viaje, orden, calma, pertenencia.' },
  { term: 'Motivos de deseo', detail: 'Textura, color, iniciales, ritual de apertura, objeto fotografiable, packaging, uso en tocador/maleta/escritorio.' },
  { term: 'Motivos de conversación', detail: '¿Qué pieza guardarías aquí? ¿Reloj o pulsera? ¿Qué iniciales pondrías? ¿Cuál es el regalo que aún recuerdas?' },
  { term: 'Motivos de compra online', detail: 'Personalización fácil, guía de medidas, visuales claros, opción regalo, envío cuidado, confianza, reviews y chat.' },
];

/** §6.2 Arquitectura ampliada. */
export const arquitecturaProducto: Table = {
  caption: 'Arquitectura de producto ampliada (§6.2)',
  columns: ['Producto / línea', 'Qué es', 'Rol estratégico', 'Cuándo'],
  rows: [
    ['The Signature Roll', 'Estuche cilíndrico multiuso para relojes, pulseras, brazaletes y piezas personales.', 'Icono inicial, foco de comunicación, validación de demanda.', 'Mes 5 · lanzamiento.'],
    ['The Bracelet Roll', 'Misma pieza o variante comunicada para pulseras, brazaletes y joyas rígidas.', 'Abrir mercado femenino sin cambiar esencia.', 'Desde pre-lanzamiento como uso; variante futura si datos lo justifican.'],
    ['The Travel Ritual Case', 'Pack de viaje: estuche + dust bag + tarjeta + guía de cuidado + iniciales.', 'Subir AOV, gifting, travel content.', 'Mes 6-8.'],
    ['The Obsequium Gift', 'Versión regalo con packaging superior, tarjeta personalizada, opción no incluir precio y fecha especial.', 'Capturar gifting, bodas, aniversarios, Navidad.', 'Mes 5 y reforzado Q4.'],
    ['Obsequiums Private Gifting', 'Línea B2B para empresas, bodas, hoteles, joyerías, relojerías y eventos.', 'Volumen, cash flow y legitimidad sin depender solo de paid.', 'Piloto mes 6; escala Q4.'],
    ['The Vanity Tray / Soft Pouch', 'Futuras extensiones: bandeja de tocador, pouch flexible, accesorios de viaje.', 'Roadmap para no agotar comunidad con un único producto.', 'No antes de validar el icono.'],
  ],
};

/** §6.3 Estrategia de colores y ediciones. */
export const estrategiaColores: string[] = [
  'Colores base permanentes: marrón oscuro, camel, gris y negro/azul profundo si existe. Deben cubrir masculino, femenino, regalo seguro y lujo silencioso.',
  'Color emocional/estacional: verde, azul, burdeos, crudo o edición limitada según campaña. Deben generar conversación y urgencia real.',
  'No producir demasiados colores sin datos. Primero testar interés con waitlist, ads, encuestas, stories y preorders.',
  'Cada color debe tener relato: camel para viaje, verde para piezas con carácter, gris para discreción, marrón para legado, azul para noche/trabajo.',
];

/** Relatos de color para visualización (derivados de §6.3). */
export const coloresConRelato = [
  { nombre: 'Marrón legado', hex: '#4A3328', relato: 'Para legado' },
  { nombre: 'Camel viaje', hex: '#B7794C', relato: 'Para viaje' },
  { nombre: 'Gris discreción', hex: '#8B8580', relato: 'Para discreción' },
  { nombre: 'Azul noche', hex: '#637383', relato: 'Para noche y trabajo' },
  { nombre: 'Verde carácter', hex: '#596153', relato: 'Para piezas con carácter' },
];

/** §6.4 Pricing y packaging como arquitectura de margen. */
export const pricing: Table = {
  caption: 'Pricing y packaging como arquitectura de margen (§6.4)',
  columns: ['Elemento', 'Hipótesis recomendada', 'Función'],
  rows: [
    ['Producto base', '120 € - 240 € según coste, acabado y competencia. Ticket objetivo 170 € - 210 €.', 'Permite lujo accesible sin parecer barato.'],
    ['Personalización', '15 € - 35 € o incluida en preventa.', 'Aumenta AOV, vínculo y percepción de regalo.'],
    ['Gift packaging', 'Incluido en versión estándar cuidada; upgrade 12 € - 25 € si hay packaging superior.', 'Sube AOV y transforma compra en obsequio.'],
    ['Pack viaje', 'Producto + dust bag + tarjeta + cuidado.', 'Bundle para incrementar ticket y storytelling.'],
    ['B2B', 'Precio por volumen con personalización, pero sin erosionar DTC.', 'Cash flow y relación con marcas/empresas.'],
    ['Ediciones limitadas', 'Precio igual o ligeramente superior si hay material/color especial.', 'Deseo y urgencia sin descuento agresivo.'],
  ],
};

export const arquitecturaIntro =
  'La arquitectura de producto debe ampliar usos sin dispersar la marca. El icono inicial puede ser un único producto físico multiuso, pero comunicado con entradas distintas. No se debe lanzar una familia demasiado grande antes de validar. Sí se debe diseñar desde el inicio una arquitectura que permita crecer.';

/** §8 Mapa competitivo y oportunidad de mercado. */
export const mapaCompetitivoIntro =
  'El mapa competitivo debe construirse con investigación externa antes de invertir fuerte, pero la conversación ya define la hipótesis central: Obsequiums debe crecer sin competir únicamente por precio. La oportunidad está en unir marroquinería, objeto personal, personalización, viaje, regalo y ritual. El benchmarking final debe verificar competidores de watch rolls, joyeros de viaje, marroquinería española, regalos personalizados, marcas de organización premium y productos sustitutivos de auto-recompensa.';

export const mapaCompetitivo: Table = {
  caption: 'Mapa competitivo por territorio (§8)',
  columns: ['Territorio', 'Qué suele ofrecer', 'Riesgo para Obsequiums', 'Oportunidad de posicionamiento'],
  rows: [
    ['Lujo tradicional', 'Herencia, precio, autoridad, logo o casa reconocida.', 'Parecer inferior si solo habla de calidad.', 'Ser más íntima, personalizable, accesible y contemporánea.'],
    ['Lujo silencioso', 'Sobriedad, materiales, discreción.', 'Quedar demasiado fría.', 'Agregar emoción, ritual y gifting sin gritar.'],
    ['Premium accesible', 'Diseño bonito y precio intermedio.', 'Ser una más en Instagram.', 'Construir categoría propia: piezas personales con valor.'],
    ['Artesanía local', 'Oficio, origen, producción cuidada.', 'Quedar solo en discurso artesanal.', 'Unir oficio + ecommerce + contenido + CRM + comunidad.'],
    ['Watch care', 'Protección funcional para relojes.', 'Verse demasiado masculina o técnica.', 'Abrir relojes + pulseras + joyas + viaje + regalo.'],
    ['Joyeros de viaje', 'Función y almacenamiento.', 'Ser percibido como joyero más caro.', 'Ser más premium, personal, portable y fotografiable.'],
    ['Regalos premium', 'Presentación y ocasión.', 'Competir con perfume, joya, cartera, experiencia.', 'Ser útil y personal sin caer en lo obvio.'],
    ['Sustitutos no directos', 'Viajes, belleza, decoración, tecnología aspiracional.', 'El consumidor puede elegir otro capricho.', 'Vender auto-recompensa pequeña, duradera y simbólica.'],
  ],
};

/** §8.1 Investigación que debe hacerse antes de escalar. */
export const investigacionPreEscala: Definition[] = [
  { term: 'Keyword research', detail: 'Watch roll, caja para relojes, estuche reloj viaje, joyero viaje, guardar pulseras, regalos personalizados premium, regalos para hombres difíciles, regalos de lujo accesible España.' },
  { term: 'Google Trends y demanda estacional', detail: 'Gifting, Navidad, Día del Padre, Día de la Madre, San Valentín, bodas, graduaciones, viajes.' },
  { term: 'Benchmark de precios', detail: 'Marcas internacionales de watch rolls, joyeros de viaje, marroquinería española, marketplaces premium y concept stores.' },
  { term: 'Social listening', detail: 'Comentarios sobre cómo la gente guarda relojes/pulseras/joyas, problemas de viaje, regalos fallidos, interés por personalización.' },
  { term: 'Test de landing', detail: 'Mensajes por uso — relojes, pulseras, piezas personales, regalo, viaje — midiendo CPL, scroll, click, registro y preguntas.' },
  { term: 'Entrevistas cualitativas', detail: '15-25 personas por segmento: mujeres con pulseras/joyas, hombres con relojes, compradoras de regalo, viajeros, B2B gifting.' },
];
