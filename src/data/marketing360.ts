import type { Table, Definition } from './types';

/**
 * Estrategia de Marketing 360 — Plan §9, §10, §11, §14, §15, §17, §18,
 * §21, §22, §23 y §27.
 */

/** §9 Arquitectura completa de mensajes. */
export const mensajesIntro =
  'La arquitectura de mensajes debe permitir hablar a distintos públicos sin fragmentar la marca. El mensaje madre mantiene coherencia; los mensajes de performance, ecommerce, PR, influencers, pop-ups y CRM adaptan intención y objeción.';

export const arquitecturaMensajes: Table = {
  caption: 'Arquitectura completa de mensajes (§9)',
  columns: ['Mensaje', 'Qué dice', 'A quién', 'Deseo que activa', 'Objeción que resuelve', 'Canal', 'Acción buscada'],
  rows: [
    ['Madre de marca', 'Para las piezas que no se guardan en cualquier lugar.', 'Todos', 'Cuidado, significado, pertenencia.', 'No es "solo una caja".', 'Web, bio, PR, packaging', 'Recordación y posicionamiento.'],
    ['Producto', 'Estuches de piel personalizables para relojes, pulseras y joyas de viaje.', 'Tráfico nuevo', 'Claridad y utilidad.', '¿Qué venden exactamente?', 'Home, PDP, ads', 'Comprensión rápida.'],
    ['Emocional', 'Un lugar para lo que llevas contigo, incluso cuando no lo llevas puesto.', 'Mujer/hombre con piezas personales', 'Identidad y vínculo.', '¿Por qué me importa?', 'Reels, email, manifiesto', 'Guardar, compartir, seguir.'],
    ['Racional', 'Piel, interior protector, cierre, medidas, personalización y packaging regalo.', 'Comprador en consideración', 'Confianza.', '¿Vale lo que cuesta?', 'PDP, FAQ, ads retargeting', 'Add to cart.'],
    ['Sensorial', 'Textura mate, costura precisa, apertura lenta, interior suave.', 'Audiencia visual', 'Deseo táctil.', 'No puedo tocarlo.', 'TikTok, Reels, PDP video', 'Retención y deseo.'],
    ['Awareness', 'No todo lo que usas para sentirte tú debería terminar en un cajón.', 'Mujeres, lifestyle', 'Identificación.', 'No veo la necesidad.', 'TikTok, IG, Pinterest', 'Atención + follow.'],
    ['Comunidad', '¿Qué pieza tuya merece un lugar especial?', 'Seguidores y prospects', 'Participación e historia.', 'Marca fría.', 'Stories, comments, UGC', 'Comentarios, DMs, UGC.'],
    ['Performance', 'Personaliza la primera serie antes del lanzamiento.', 'Prospects calientes', 'Acceso y propiedad.', '¿Por qué ahora?', 'Meta, TikTok, landing', 'Lead/compra.'],
    ['PR', 'La marca española que convierte el cuidado de relojes, pulseras y piezas personales en ritual de lujo accesible.', 'Medios y prescriptores', 'Novedad cultural.', '¿Cuál es el ángulo?', 'Press kit, pitch', 'Menciones y autoridad.'],
    ['Influencers', 'Cuéntanos cuál es la pieza que guardarías aquí y por qué.', 'Creators', 'Historia personal.', 'Contenido publicitario plano.', 'Creator briefs', 'UGC emocional.'],
    ['Pop-up', 'Ven a tocar la primera serie y encuentra el lugar para tu pieza.', 'Audiencia local', 'Prueba táctil.', 'No puedo evaluar online.', 'Eventos, QR, invitación', 'Leads, venta, contenido.'],
    ['Colaboraciones', 'Una pieza Obsequiums para completar el ritual de tu marca/comunidad.', 'Joyerías, relojerías, hoteles, floristerías, lifestyle', 'Coherencia y audiencia compartida.', '¿Por qué colaborar?', 'Partnerships', 'Acceso a públicos y legitimidad.'],
    ['Ecommerce', 'Elige color, iniciales y momento de entrega.', 'Comprador activo', 'Control y personalización.', '¿Cómo compro?', 'PDP/checkout', 'Conversión.'],
    ['Ficha producto', 'Diseñado para proteger, viajar y regalar relojes, pulseras y piezas personales.', 'Usuario en PDP', 'Uso real.', '¿Sirve para mi caso?', 'PDP', 'Add to cart.'],
    ['Carrito abandonado', 'Tu pieza personalizada sigue reservada por unas horas.', 'Carritos', 'Urgencia elegante.', 'Duda final.', 'Email/SMS', 'Recuperación.'],
    ['Waitlist', 'Acceso anticipado a la primera serie y prioridad de personalización.', 'Prospects previos', 'Exclusividad útil.', '¿Para qué dejo mi email?', 'Landing, social', 'Lead.'],
    ['Postcompra', 'Tu Obsequiums ya tiene una historia. Cuéntanos cuál.', 'Compradores', 'Orgullo y pertenencia.', '¿Qué hago ahora?', 'Email postcompra', 'Review, UGC, referido.'],
    ['Expansión europea', 'For watches, bracelets and personal pieces that carry more than time.', 'Mercados EU', 'Ritual internacional.', 'Marca española desconocida.', 'EU landing/ads/PR', 'Test de país.'],
  ],
};

/** §10.1 Secuencia de deseo. */
export const secuenciaDeseo: Definition[] = [
  { term: 'Misterio', detail: 'Antes de mostrar todo, enseñar fragmentos de piel, iniciales, cierre, interior, sombra cilíndrica, reloj/pulsera entrando, caja abriéndose.' },
  { term: 'Identificación', detail: 'Mostrar piezas personales reales y preguntar qué pieza merece un lugar. Abrir conversación, no catálogo.' },
  { term: 'Acceso', detail: 'Waitlist con beneficio claro: early access, personalización prioritaria, color elegido, packaging o descuento de bienvenida de primera serie si la marca decide usarlo.' },
  { term: 'Demostración', detail: 'Enseñar usos concretos para reloj, pulsera, brazalete, tocador, viaje, regalo, mesa de noche, escritorio y maleta.' },
  { term: 'Prueba social', detail: 'Activar creators y compradores reales. Pasar de "la marca dice" a "personas lo usan".' },
  { term: 'Ritual', detail: 'Packaging, unboxing, cuidado, postcompra, UGC y referidos convierten compra en historia compartible.' },
  { term: 'Escala', detail: 'Paid, PR, pop-ups, SEO, Pinterest, gifting y B2B convierten el deseo en crecimiento sostenido.' },
];

export const deseoIntro =
  'La marca debe construir deseo antes de pedir conversión. Para un producto táctil premium vendido online, el deseo no nace solo de "ver el producto". Nace de entender cuándo entra en la vida de la persona, qué problema estético/emocional resuelve, qué historia permite contar y cómo eleva un gesto cotidiano.';

/** §10.2 Pertenencia: The Obsequiums Circle. */
export const circleIntro =
  'La comunidad no debe ser "gente que sigue una marca de cajas". Debe ser una comunidad de personas que cuidan los detalles y conectan con objetos que tienen historia. El nombre interno o externo puede ser The Obsequiums Circle, sin sonar pretencioso. Más que club exclusivo, debe ser un círculo de intención: personas que compran, regalan y conservan con criterio.';

export const dinamicasCircle: string[] = [
  '"The piece I never travel without."',
  '"My first important watch."',
  '"The bracelet I wear when I need confidence."',
  '"The gift I still remember."',
  '"What I keep close."',
  '"Objects that mark a chapter."',
  '"La pieza que no dejaría en cualquier lugar."',
  '"El regalo que todavía guardo."',
  '"La pulsera que me acompaña cuando necesito sentirme yo."',
];

/** §10.3 Presencia constante sin ser invasiva. */
export const presenciaConstante: Table = {
  caption: 'Presencia constante sin ser invasiva (§10.3)',
  columns: ['Momento / canal', 'Presencia correcta', 'Objetivo'],
  rows: [
    ['Feed IG', 'Estética, producto, ritual, manifiesto, piezas con historia.', 'Deseo y consistencia.'],
    ['Stories', 'Encuestas, backstage, dudas, colores, waitlist, respuestas, UGC.', 'Cercanía y datos cualitativos.'],
    ['TikTok', 'Hooks de tensión, ASMR, uso real, antes/después, gifting, POV.', 'Descubrimiento.'],
    ['Pinterest', 'Guías visuales de regalos, organización, viaje, lujo silencioso, tocador.', 'Tráfico evergreen.'],
    ['Email', 'Educación, acceso, guías, historias, lanzamientos, postcompra.', 'Base propia y conversión.'],
    ['Retargeting', 'Resolver dudas: medidas, piel, personalización, envío, regalo, reviews.', 'Conversión.'],
    ['Google', 'Capturar intención explícita de búsqueda.', 'Tráfico cualificado.'],
    ['Pop-ups', 'Tocar, probar, fotografiar, personalizar, registrar.', 'Confianza y contenido.'],
    ['PR', 'Autoridad externa y deseo cultural.', 'Legitimidad.'],
    ['Creators', 'Contextos reales: maleta, tocador, reloj, pulsera, regalo.', 'Prueba social.'],
    ['Postcompra', 'Cuidado, UGC, referidos, review.', 'Recomendación y recompra.'],
  ],
};

/** §11.1 Tensiones culturales a activar. */
export const tensionesCulturales: string[] = [
  'Gastamos en relojes, pulseras o joyas y luego los dejamos en un cajón, sueltos en la maleta o mezclados con objetos que los dañan.',
  'La elegancia no está solo en lo que se ve, sino en cómo cuidamos lo que no se está usando.',
  'El lujo contemporáneo no siempre grita; a veces se reconoce en un detalle privado.',
  'Regalar algo personalizado sigue siendo más poderoso que regalar algo caro pero genérico.',
  'Ordenar no es solo organizar; puede ser un ritual de calma y pertenencia.',
  'Una pieza pequeña puede marcar una etapa: un ascenso, un viaje, una boda, una mudanza, una promesa, una herencia.',
  'La auto-recompensa no tiene por qué ser impulsiva; puede ser un gesto de cuidado hacia lo que ya forma parte de una identidad.',
];

export const contenidoIntro =
  'No se debe "hacer contenido viral" como consigna vacía. Se debe crear un sistema editorial capaz de transformar un único producto en múltiples narrativas durante 12 meses. El producto es la puerta; el territorio de contenido es más amplio: piezas personales, rituales, viaje, regalo, auto-recompensa, orden, tocador, relojes, pulseras, lujo silencioso, objetos con historia y cuidado.';

/** §11.2 Pilares editoriales. */
export const pilaresEditoriales: Table = {
  caption: 'Pilares editoriales (§11.2)',
  columns: ['Pilar', 'Formatos', 'Qué activa', 'CTA'],
  rows: [
    ['La pieza que importa', 'Historias, carruseles, reels, UGC.', 'Emoción, comentarios, shares.', '"Cuéntanos cuál guardarías."'],
    ['No lo dejes en cualquier lugar', 'Antes/después, TikTok, ads, reels.', 'Problema y necesidad.', '"Dale un lugar."'],
    ['Ritual de viaje', 'Maleta, hotel, escapada, packing.', 'Uso real, Pinterest, conversión.', '"Ver estuche de viaje."'],
    ['Tocador y orden premium', 'Organización estética, reels, pines.', 'Mujeres, saves, lifestyle.', '"Ver usos para pulseras."'],
    ['Relojes con historia', 'Watch care, primeros relojes, regalos.', 'Hombres, autoridad, regalos.', '"Ver para relojes."'],
    ['Pulseras y brazaletes', 'Cómo guardar, cómo elegir, looks.', 'Mercado femenino, educación.', '"Ver para pulseras."'],
    ['Gifting emocional', 'Guías, ocasiones, personalización.', 'Compra por regalo.', '"Personalizar."'],
    ['Personalización', 'Iniciales, monograma, tarjetas, unboxing.', 'Propiedad, AOV.', '"Hazlo tuyo/suyo."'],
    ['Behind the scenes', 'Materiales, producción, decisiones, packaging.', 'Confianza y marca.', '"Únete a la waitlist."'],
    ['Prueba social', 'Reviews, UGC, creators, pop-ups.', 'Confianza.', '"Comprar ahora."'],
  ],
};

/** §11.3 Hooks. */
export const hooks: string[] = [
  '"El error más común al viajar con relojes o brazaletes."',
  '"Cosas que hacen que tu tocador se vea más elegante."',
  '"El regalo personalizado más original."',
  '"POV: ya no dejas tus piezas importantes en cualquier lado."',
  '"La diferencia entre tener objetos y tener rituales."',
  '"Tres piezas que llevaría a una escapada de fin de semana."',
  '"Qué guardarías aquí: reloj, pulsera o recuerdo."',
  '"El detalle que hace que un regalo parezca pensado de verdad."',
  '"Tu primera pieza importante también merece su lugar."',
  '"Cómo elevar una maleta sin llevar más cosas."',
  '"El lujo silencioso empieza en cómo cuidas tus cosas."',
];

/** §11.4 Volumen recomendado de contenido. */
export const volumenContenido: Table = {
  caption: 'Volumen mensual recomendado de contenido (§11.4)',
  columns: ['Tipo de contenido', 'Volumen mensual', 'Función'],
  rows: [
    ['Reels/TikToks originales', '25-40', 'Descubrimiento, hooks, viralidad, prueba de mensajes.'],
    ['Stories', '120-180', 'Cercanía, encuesta, comunidad, waitlist, dudas, UGC.'],
    ['Carruseles IG', '6-10', 'Saves, educación, guías de regalo, comparativas, cuidados.'],
    ['Pines Pinterest', '120-250', 'Tráfico evergreen por intención visual y gifting.'],
    ['YouTube Shorts', '12-20', 'Reutilizar ganadores y ampliar alcance.'],
    ['Newsletters', '4-8', 'Relación, educación, lanzamiento, regalos, conversión.'],
    ['UGC/creator pieces', '10-25', 'Prueba social, ads, PDP, stories.'],
    ['Variaciones de ads', '30-60', 'Testing de públicos, hooks y objeciones.'],
    ['Blog/journal', '2-4', 'SEO, autoridad, gifting, guías de cuidado.'],
  ],
};

/** §11.5 Reutilización de una sesión de producción. */
export const reutilizacionSesion = {
  intro:
    'Una sesión bien planificada debe alimentar varias semanas. No se produce "para Instagram"; se produce una biblioteca de activos para todo el embudo.',
  piezas: [
    '1 hero video de campaña.',
    '5-8 reels/TikToks de uso real.',
    '15-30 clips cortos de textura, cierre, apertura, interior, ASMR y detalles.',
    '30-60 fotos: producto, lifestyle, macro, mano, packaging, escala, tocador, viaje, escritorio.',
    '10-20 pines verticales.',
    '5-10 stories de backstage, encuestas y preguntas.',
    '3-8 anuncios por intención: regalo, viaje, pulsera, reloj, personalización, retargeting.',
    '1 email visual.',
    'Assets para PDP, FAQ, landing de gifting y retargeting.',
  ],
};

/** §14 Ecosistema de canales 360. */
export const canalesIntro =
  'Cada canal debe tener una función dentro del ecosistema. No se activa un canal porque "hay que estar". Se activa porque cumple una función específica en el funnel: descubrimiento, deseo, confianza, tráfico, lead, conversión, retención, prueba social, PR o venta asistida.';

export const ecosistemaCanales: Table = {
  caption: 'Ecosistema de canales 360 (§14)',
  columns: ['Canal', 'Prioridad', 'Función', 'Contenido / frecuencia', 'KPI', 'Dependencia', 'Conexión con ecommerce'],
  rows: [
    ['Instagram', 'Alta', 'Deseo, comunidad, UGC, prueba social, estética de marca.', '5-7 piezas/semana + stories diarias.', 'Engagement, saves, shares, clics.', 'Assets y calendario.', 'Links a PDP, guías, waitlist, drops.'],
    ['TikTok', 'Alta', 'Descubrimiento, hooks, tensión cultural, viralidad, educación.', '5-10 vídeos/semana.', 'Retención, shares, followers, CTR.', 'Producción ágil.', 'Link en bio, códigos, retargeting.'],
    ['Pinterest', 'Alta', 'Tráfico evergreen, gifting, inspiración visual, SEO visual.', '30-60 pines/semana o 120-250/mes.', 'Guardados, clics, tráfico.', 'Fotos verticales y keywords.', 'Landing por guía/uso.'],
    ['YouTube Shorts', 'Media', 'Reutilizar vídeos ganadores y ampliar alcance.', '3-5/semana.', 'Retención, views, tráfico.', 'Clips TikTok/Reels.', 'Links descripción/canal.'],
    ['LinkedIn', 'Selectiva', 'Founder story, B2B gifting, marca empleadora, negocio.', '1-2/semana si hay narrativa.', 'Leads B2B, PR, conexiones.', 'CEO/founder voice.', 'Private gifting.'],
    ['Ecommerce', 'Crítica', 'Conversión, educación, experiencia y datos.', 'Always-on; optimización semanal.', 'CVR, AOV, add to cart.', 'UX, stock, assets.', 'Núcleo transaccional.'],
    ['SEO/Journal', 'Media', 'Capturar intención y construir autoridad.', '2-4 artículos/mes.', 'Tráfico orgánico, ranking, leads.', 'Keyword research.', 'Guías a PDP.'],
    ['Email/CRM', 'Crítica', 'Convertir audiencia en activo propio.', '1-2 newsletters/semana + flows.', 'Revenue/email, CTR, recovery.', 'Base de datos.', 'Venta y recompra.'],
    ['WhatsApp/chat', 'Media', 'Venta asistida y confianza.', 'Según demanda; SLA rápido.', 'Conversión asistida, tiempo respuesta.', 'Equipo atención.', 'Dudas a compra.'],
    ['Paid Social', 'Alta', 'Testing, alcance, leads, retargeting, conversión.', 'Always-on por fase.', 'CPL, CAC, ROAS.', 'Creatividades y tracking.', 'Tráfico segmentado.'],
    ['Google Ads', 'Media/Alta', 'Capturar demanda activa.', 'Desde lanzamiento.', 'ROAS, CPC, CVR.', 'Keywords y landing.', 'Intención a compra.'],
    ['PR', 'Media', 'Autoridad, legitimidad, gift guides.', 'Oleadas.', 'Menciones, tráfico referido.', 'Press kit y ángulo.', 'Confianza y búsqueda.'],
    ['Influencers/creators', 'Alta', 'Uso real, UGC, credibilidad.', '20-50 creators/año mínimo.', 'UGC, ventas, CPA, engagement.', 'Brief y producto.', 'PDP, ads whitelisting.'],
    ['Pop-ups/eventos', 'Media', 'Prueba táctil y contenido.', '2-4/año.', 'Leads, ventas post, UGC.', 'Operaciones y partners.', 'QR + CRM + retarget.'],
    ['Concept stores', 'Selectiva', 'Legitimidad y prueba física.', 'Pilotos.', 'Sell-through, leads.', 'Selección premium.', 'Discovery + web.'],
    ['Partnerships', 'Alta selectiva', 'Acceso a comunidades coherentes.', 'Calendario por campaña.', 'Leads, ventas, PR.', 'Afinidad real.', 'Landing colaboración.'],
  ],
};

/** §15.1 Distribución editorial recomendada. */
export const distribucionEditorial: Table = {
  caption: 'Distribución editorial recomendada (§15.1)',
  columns: ['Tipo de contenido', 'Peso mensual', 'Objetivo', 'Ejemplos'],
  rows: [
    ['Deseo/sensorial', '40%', 'Hacer sentir el producto y elevar percepción.', 'Textura, cierre, piel, iniciales, unboxing, macro, ASMR.'],
    ['Uso real', '20%', 'Demostrar función y momentos de vida.', 'Maleta, tocador, escritorio, hotel, cena, viaje, trabajo.'],
    ['Educación/regalo', '15%', 'Resolver dudas y activar intención.', 'Cómo guardar pulseras, regalos para él/ella, medidas, cuidado.'],
    ['Founder/backstage', '10%', 'Humanizar y construir confianza.', 'Decisiones de color, producción, packaging, primeros samples.'],
    ['Prueba social', '10%', 'Reducir riesgo de marca nueva.', 'UGC, reviews, creators, pop-up reactions.'],
    ['Venta directa', '5% base / 15-20% en gifting', 'Convertir sin saturar.', 'Lanzamiento, personalización, fechas límite, stock por color.'],
  ],
};

/** §15.2 Planning semanal tipo. */
export const planningSemanal: Table = {
  caption: 'Planning semanal tipo (§15.2)',
  columns: ['Día', 'IG', 'TikTok', 'Pinterest', 'Stories', 'Email/CRM', 'Objetivo'],
  rows: [
    ['Lunes', 'Carrusel educativo: cómo cuidar piezas personales.', 'Hook tensión: "No guardes tus pulseras así".', 'Pines de guía de orden/tocador.', 'Encuesta de pieza favorita.', '—', 'Educación y saves.'],
    ['Martes', 'Reel sensorial de apertura/cierre.', 'ASMR piel + pieza entrando.', 'Pines macro/producto.', 'Backstage de producción.', '—', 'Deseo táctil.'],
    ['Miércoles', 'Post de gifting por ocasión.', 'POV regalo no obvio.', 'Gift guide pins.', 'Caja de preguntas de regalos.', 'Newsletter guía regalo.', 'Captura intención.'],
    ['Jueves', 'UGC/creator con uso real.', 'Creator travel case.', 'Pines lifestyle.', 'Repost UGC.', 'Flow segmentado si aplica.', 'Prueba social.'],
    ['Viernes', 'Reel de viaje/escapada.', 'Packing de fin de semana.', 'Travel pins.', 'CTA a landing viaje.', '—', 'Tráfico ecommerce.'],
    ['Sábado', 'Lifestyle aspiracional tocador/cena.', 'Transición look + guardar pieza.', 'Aesthetic pins.', 'Encuesta color.', '—', 'Deseo y comunidad.'],
    ['Domingo', 'Manifiesto corto/ritual de noche.', 'Orden premium domingo.', 'Pines evergreen.', 'Pregunta "qué pieza cuidarías".', 'Email suave/brand story.', 'Relación y marca.'],
  ],
};

/** §17 Pop-ups, colaboraciones y activaciones físicas. */
export const activacionesIntro =
  'La marca es ecommerce-first, pero necesita experiencias físicas selectivas porque el producto se toca, se abre, se mide, se prueba y se regala. El objetivo de las activaciones no es depender del retail físico, sino resolver una barrera de conversión digital: permitir que el público toque la piel, vea tamaños, compare colores, imagine piezas dentro, fotografíe y deje datos.';

export const obsequiumsTable: string[] = [
  'Mesa íntima con todos los colores y versiones del estuche.',
  'Zona de reloj: escritorio, reloj, libreta, camisa, objeto profesional.',
  'Zona de pulseras/brazaletes: tocador, espejo, perfume, seda, luz cálida.',
  'Zona de viaje: maleta abierta, pasaporte, hotel, piezas seleccionadas.',
  'Zona de regalo: packaging, tarjetas, iniciales, mensajes, fechas.',
  'Personalización en vivo o simulada si la producción no permite hacerlo on-site.',
  'Set de contenido para creators y visitantes.',
  'QR por intención: para relojes, para pulseras, para regalo, para viaje.',
  'Captura de datos obligatoria: email/WhatsApp con consentimiento, preferencia de uso, color favorito, intención de compra.',
  'Post-event email en 24 horas con piezas vistas, beneficio y recordatorio de personalización.',
];

export const ciudadesActivacion: Table = {
  caption: 'Ciudades y zonas de activación (§17.2)',
  columns: ['Ciudad', 'Zonas / contextos', 'Por qué'],
  rows: [
    ['Madrid', 'Salesas, Justicia, Salamanca, Chamberí, Las Letras.', 'Público premium, regalos, lifestyle, concept stores, PR, creators.'],
    ['Barcelona', 'Eixample, Born, Galvany, Sarrià.', 'Diseño, moda, turismo, estética, concept stores y público internacional.'],
    ['Valencia', 'Ruzafa, Ensanche, espacios de diseño.', 'Lifestyle, diseño, crecimiento de marca y activación eficiente.'],
    ['Marbella', 'Hoteles boutique, lujo vacacional, concept stores.', 'Gifting, turismo premium y clientes internacionales.'],
    ['Bilbao / San Sebastián', 'Concept stores, hoteles, diseño, gastronomía.', 'Lujo discreto, regalos, poder adquisitivo y afinidad estética.'],
  ],
};

export const colaboraciones: string[] = [
  'Marcas de joyería accesible premium: pulsera + estuche, contenido cruzado, guía de regalo.',
  'Relojerías boutique o relojeros independientes: reloj + Obsequiums como ritual de cuidado.',
  'Floristerías premium: regalo completo, estética de obsequio, fechas especiales.',
  'Hoteles boutique: welcome gifts, pop-ups de fin de semana, travel ritual.',
  'Perfumería nicho: ritual de tocador, regalo sensorial.',
  'Marcas de seda, pijamas, lencería elegante o camisería: noche, mañana, viaje, cuidado personal.',
  'Wedding planners y marcas de novias: regalos para padrinos/madrinas, novias, aniversarios.',
  'Concept stores y galerías: legitimidad estética.',
  'Clubes de mujeres profesionales: auto-recompensa, logro y regalo.',
  'Empresas y despachos: private gifting, aniversarios laborales, ascensos, clientes VIP.',
];

/** §21 Sistema operativo con IA. */
export const iaIntro =
  'La IA debe estar al servicio del criterio, no reemplazarlo. En una marca premium, automatizar sin dirección puede abaratar percepción. La IA puede acelerar investigación, listening, ideas, variaciones, reporting, segmentación y análisis, pero la dirección creativa, el posicionamiento y la sensibilidad de marca deben seguir en manos humanas.';

export const iaProcesos: Table = {
  caption: 'Sistema operativo con IA por proceso (§21)',
  columns: ['Proceso', 'Qué puede hacer IA', 'Qué supervisa humano', 'Qué no conviene delegar'],
  rows: [
    ['Investigación de mercado', 'Agrupar competidores, precios, keywords, tendencias.', 'CMO valida fuentes y relevancia.', 'Decidir posicionamiento final solo por outputs.'],
    ['Social listening', 'Clasificar comentarios, dudas, objeciones, sentimientos.', 'Social/CMO interpreta patrones.', 'Responder crisis sin criterio humano.'],
    ['Ideas de contenido', 'Generar hooks, guiones, versiones por canal.', 'Content lead adapta al tono.', 'Dirección estética y narrativa madre.'],
    ['Paid media', 'Crear variantes, analizar fatiga, sugerir tests.', 'Paid specialist decide inversión.', 'Escalar campañas sin leer marca/margen.'],
    ['CRM', 'Segmentar, personalizar asuntos, automatizar flujos.', 'CRM manager revisa tono y timing.', 'Mensajes sensibles o premium sin revisión.'],
    ['Ecommerce', 'Detectar fricción, sugerir FAQ, optimizar copies.', 'Ecommerce/CRO prioriza tests.', 'Cambiar promesas, precio o políticas sin dirección.'],
    ['Customer care', 'Asistir respuestas frecuentes y clasificar tickets.', 'Equipo humano resuelve casos premium.', 'Atención de quejas complejas o personalización delicada.'],
    ['Reporting', 'Crear dashboard, alertas, insights semanales.', 'CMO decide acciones.', 'Convertir datos en decisión estratégica sin criterio.'],
    ['B2B', 'Crear propuestas base y segmentar leads.', 'Partnerships personaliza.', 'Negociación y relación premium.'],
  ],
};

export const arquitecturaHerramientas: string[] = [
  'Ecommerce CMS + checkout robusto.',
  'CRM/email marketing con segmentación, flows y revenue tracking.',
  'Analytics web + píxeles + server-side tracking si escala.',
  'Dashboard BI sencillo para CEO y marketing.',
  'Social listening y gestión de comunidad.',
  'Gestor de contenidos/calendario editorial.',
  'DAM o biblioteca de assets con etiquetado por uso, canal, campaña, color, segmento.',
  'Herramientas de IA generativa para guiones, copies, variaciones, análisis y localización.',
  'Automatización de flujos entre ecommerce, CRM, atención y reporting.',
  'Atención al cliente asistida con base de conocimiento, pero escalado humano.',
];

/** §22 Planificación del departamento de marketing. */
export const departamentoIntro =
  'El departamento no debe funcionar como un área de "hacer publicaciones". Debe ser el departamento de crecimiento de marca y demanda. Su misión: construir deseo, confianza y conversión rentable para convertir Obsequiums en una marca reconocible de piezas personales premium, con ecommerce propio como canal principal y gifting como acelerador comercial.';

export const reglaInterna =
  'Cada acción de marketing debe crear deseo, capturar un dato, habilitar una venta o producir un aprendizaje. Si no hace ninguna de esas cuatro cosas, no se hace.';

export const nucleosDepartamento: Table = {
  caption: 'Estructura del departamento por núcleos (§22.1)',
  columns: ['Núcleo', 'Responsables', 'Qué hace', 'Objetivo'],
  rows: [
    ['Dirección estratégica', 'CMO / Head of Marketing', 'Posicionamiento, presupuesto, prioridades, mensajes, coordinación CEO-operaciones-ecommerce, decisiones de escala.', 'Que todo responda a negocio y marca.'],
    ['Brand & Content', 'Brand strategist/copy, social, content creator, diseñador, foto/vídeo.', 'Narrativa, calendario, campañas, assets, UGC, dirección estética.', 'Ser reconocible, deseable y consistente.'],
    ['Growth & Performance', 'Paid media, data/analytics, CRO/UX.', 'Paid social, Google, retargeting, testing, medición, funnel, CAC, ROAS.', 'Convertir atención en leads y ventas.'],
    ['Ecommerce & CRM', 'Ecommerce manager, CRM/email, customer care.', 'Web, PDP, guías, flows, carrito, postcompra, atención, reviews.', 'Convertir tráfico en compra y relación.'],
    ['PR, Creators & Partnerships', 'PR, influencer manager, partnerships/B2B.', 'Medios, creators, colaboraciones, pop-ups, gift guides, private gifting.', 'Legitimidad, comunidad, ocasiones de compra.'],
    ['Operaciones conectadas', 'Ops/logística/calidad + marketing.', 'Stock, personalización, packaging, plazos, forecast.', 'Cumplir promesa premium.'],
  ],
};

/** §23 Cadencia operativa. */
export const semanaTipo: Table = {
  caption: 'Semana tipo del departamento (§23.1)',
  columns: ['Día', 'Reunión', 'Participan', 'Se revisa', 'Salida obligatoria'],
  rows: [
    ['Lunes', 'Comité de performance y negocio', 'CEO, CMO, ecommerce, paid, data, operaciones.', 'Ventas, margen, CAC, ROAS, conversión, stock, incidencias, campañas.', '3 decisiones de la semana: escalar, pausar, corregir.'],
    ['Martes', 'Contenido y comunidad', 'CMO, social, content, diseño, creators.', 'Contenidos ganadores, hooks, comentarios, UGC, tendencias, producción.', 'Calendario semanal + brief de nuevas piezas.'],
    ['Miércoles', 'Ecommerce y CRO', 'Ecommerce, CRO, CRM, customer care, CMO.', 'PDP, add to cart, checkout, dudas, FAQ, heatmaps, emails.', '2 mejoras web + 1 test.'],
    ['Jueves', 'Paid, CRM y growth', 'Paid, CRM, data, CMO.', 'Creatividades, audiencias, CPL, CAC, retargeting, email revenue.', 'Redistribución de presupuesto.'],
    ['Viernes', 'Marca, PR y partnerships', 'CMO, PR, partnerships, creator manager.', 'Medios, creators, pop-ups, B2B, gift guides, colaboraciones.', 'Pipeline actualizado + próximos contactos.'],
  ],
};

export const planificacionMensual: Table = {
  caption: 'Planificación mensual por área (§23.2)',
  columns: ['Área', 'Qué entrega cada mes'],
  rows: [
    ['Marca', 'Mensaje del mes, campaña madre, claims, tono, revisión visual.'],
    ['Contenido', 'Calendario, producción, hooks, formatos, assets reutilizables.'],
    ['Ecommerce', 'Mejoras PDP, landings, bundles, FAQs, checkout, guías.'],
    ['CRM', 'Flows, newsletters, segmentos, calendario comercial, postcompra.'],
    ['Paid', 'Tests, escalado, retargeting, reporting por creatividad y audiencia.'],
    ['PR', 'Pitch, medios, gift guides, novedades, press kit actualizado.'],
    ['Creators', 'Selección, envíos, briefs, UGC, permisos, códigos.'],
    ['Partnerships', 'Colaboraciones, B2B, hoteles, joyerías, floristerías, eventos.'],
    ['Data', 'Dashboard, aprendizajes, alertas, cohortes, atribución.'],
    ['Operaciones', 'Stock, tiempos, incidencias, forecast, calidad, packaging.'],
  ],
  note: 'Cada mes debe cerrar con una pregunta obligatoria: "¿Qué aprendimos del mercado que no sabíamos hace 30 días?". Si no hay una respuesta concreta, el mes produjo actividad pero no aprendizaje.',
};

/** §27 European Expansion Strategy — Year 1 Extension. */
export const europaIntro =
  'La extensión europea no debe tratarse como una expansión completa en el año uno. Debe ser una capa de validación controlada después de que España haya demostrado deseabilidad, conversión ecommerce, fiabilidad operativa, calidad de packaging y storytelling liderado por creators. La marca no debe "traducir y lanzar"; debe localizar mensajes, proof points y experiencia ecommerce mercado a mercado.';

export const mercadosPrioritarios: Table = {
  caption: 'Mercados prioritarios de expansión europea (§27.1)',
  columns: ['Mercado', 'Por qué priorizarlo', 'Énfasis de mensaje', 'Canales principales', 'Validación necesaria'],
  rows: [
    ['Portugal', 'Proximidad cultural y logística desde España; primer test eficiente.', 'Regalo, lifestyle, viaje, premium accesible.', 'Instagram, Meta, creators, Google.', 'CPL, CVR, satisfacción de envío.'],
    ['Francia', 'Fuerte cultura de marroquinería, regalos, quiet luxury y gusto editorial.', 'Ritual sobrio, piezas personales, gifting refinado.', 'Instagram, Pinterest, PR, creators.', 'Credibilidad visual, interés PR, conversión.'],
    ['Italia', 'Piel, diseño, color, viaje y expresión personal resuenan.', 'Diseño, piel, color, viaje, pulseras.', 'Instagram, TikTok, creators, PR.', 'Performance de contenido creator, preferencias de color.'],
    ['Alemania', 'Madurez ecommerce, cultura relojera, expectativas de calidad funcional.', 'Protección, precisión, dimensiones, confianza, fiabilidad de envío.', 'Google, YouTube Shorts, Meta, creators de relojes/lifestyle.', 'Claridad de PDP, logística, atención al cliente.'],
  ],
};

export const consistenteVsLocalizado: Table = {
  caption: 'Qué se mantiene consistente y qué se localiza (§27.2)',
  columns: ['Consistente', 'Localizado'],
  rows: [
    ['Promesa central: estuches de piel personalizables para relojes, pulseras y piezas personales que merecen cuidado.', 'Idioma, ocasiones de regalo, referencias culturales, perfiles de creators, expectativas de atención al cliente.'],
    ['Códigos visuales: piel, tacto, ritual, viaje, packaging, personalización.', 'Énfasis: Francia editorial, Italia diseño/color, Alemania función/confianza, Portugal proximidad/regalo.'],
    ['Tono premium accesible sin descuentos agresivos.', 'Métodos de pago, promesa de entrega, presentación de política de devolución, ángulos de PR.'],
    ['Experiencia ecommerce-first y captura CRM.', 'PDPs localizadas, keywords SEO, guías de regalo y fechas límite de envío.'],
  ],
};

export const modeloTesteoEuropa = {
  intro:
    'Paid media debe comenzar con tests pequeños de 3.000 € - 8.000 € por país durante 4-6 semanas, enfocados en validación creativa, generación de leads, tráfico a PDP y retargeting. La marca no debe escalar hasta ver evidencia a nivel país de CTR, CPL, add-to-cart, conversión, coste de envío y fricción de atención al cliente. El presupuesto de test europeo recomendado es de 40.000 € - 120.000 € según número de países, creators, traducción, paid tests, PR y setup logístico.',
  mensajeCore: 'For watches, bracelets and personal pieces that carry more than time.',
  focos: [
    'Francia: apoyarse en quiet luxury, editorial de regalo, rituales personales y estética sobria.',
    'Italia: apoyarse en piel, color, viaje, diseño y styling expresivo.',
    'Alemania: apoyarse en protección, dimensiones, material, calidad, envío y confianza.',
    'Portugal: apoyarse en regalo, lifestyle, proximidad, premium accesible y afinidad con marca española.',
  ],
  condicionEscala:
    'Antes de escalar: validar CVR por encima del 1%, CPL dentro del 30%-50% de España, coste de envío aceptable, baja fricción de soporte y mensaje ganador repetible.',
};
