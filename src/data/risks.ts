/** Riesgos, dependencias, mitigaciones y respuestas ejecutivas — Plan §25, §26. */

export interface Riesgo {
  riesgo: string;
  porQue: string;
  senalTemprana: string;
  impacto: string;
  prevencion: string;
}

export const riesgos: Riesgo[] = [
  { riesgo: 'Posicionamiento genérico', porQue: 'Hablar solo de piel, calidad y elegancia.', senalTemprana: 'Baja recordación y comentarios planos.', impacto: 'Competir por precio.', prevencion: 'Apropiarse de piezas personales/ritual/cuidado.' },
  { riesgo: 'Producto demasiado nicho', porQue: 'Watch box sola limita público.', senalTemprana: 'Interés concentrado en pocos segmentos.', impacto: 'Crecimiento bajo.', prevencion: 'Abrir pulseras, joyas, viaje, gifting y B2B.' },
  { riesgo: 'Precio débil', porQue: 'Valor percibido insuficiente.', senalTemprana: 'Add to cart bajo, comentarios de caro.', impacto: 'CAC insostenible.', prevencion: 'Mejorar PDP, packaging, personalización y RTBs.' },
  { riesgo: 'Contenido bonito pero frío', porQue: 'Estética sin tensión ni uso real.', senalTemprana: 'Muchos likes, pocos saves/clics.', impacto: 'No convierte.', prevencion: 'Momentos íntimos, problemas reales, UGC.' },
  { riesgo: 'Paid caro', porQue: 'Creatividades débiles o audiencia equivocada.', senalTemprana: 'CPC/CPL/CAC altos.', impacto: 'Burn.', prevencion: 'Testing semanal de hooks y segmentos.' },
  { riesgo: 'Influencers no convierten', porQue: 'Se eligen por alcance, no contexto.', senalTemprana: 'Views sin clics ni ventas.', impacto: 'Coste inútil.', prevencion: 'Microcreators con uso real y brief emocional.' },
  { riesgo: 'PR sin ángulo', porQue: 'Pitch "nueva marca de accesorios".', senalTemprana: 'Pocas respuestas.', impacto: 'Sin legitimidad.', prevencion: 'Ángulo: ritual de lujo accesible para piezas personales.' },
  { riesgo: 'Ecommerce no convierte', porQue: 'PDP incompleta, dudas, falta de confianza.', senalTemprana: 'CVR <0,8%.', impacto: 'Se quema tráfico.', prevencion: 'CRO, FAQ, reviews, chat, fotos, política clara.' },
  { riesgo: 'Packaging decepciona', porQue: 'No se diseña como regalo.', senalTemprana: 'Bajo UGC postcompra.', impacto: 'Pérdida de recomendación.', prevencion: 'Packaging como obsequio, tarjeta, unboxing.' },
  { riesgo: 'Logística falla', porQue: 'Personalización o stock mal planificado.', senalTemprana: 'Retrasos y tickets.', impacto: 'Daño reputacional.', prevencion: 'Forecast, SLA, stock seguridad, comunicación proactiva.' },
  { riesgo: 'Marca se abarata', porQue: 'Descuentos o estética agresiva.', senalTemprana: 'Comentarios de "IG brand barata".', impacto: 'Daño premium.', prevencion: 'Reglas estrictas de tono, visual y promociones.' },
  { riesgo: 'B2B diluye', porQue: 'Volumen sin selección.', senalTemprana: 'Pedidos tipo merchandising.', impacto: 'Pérdida de valor.', prevencion: 'Private gifting selectivo, diseño y mínimos.' },
  { riesgo: 'Europa prematura', porQue: 'España no validó.', senalTemprana: 'CAC alto, baja conversión país.', impacto: 'Gasto perdido.', prevencion: 'Test pequeño solo después de validar España.' },
];

export interface CriticaCEO {
  critica: string;
  queCuestiona: string;
  respuesta: string;
  queHacer: string;
}

export const criticasIntro =
  'Un CEO híper exigente atacaría la falta de evidencia, números, responsables, reglas de decisión, margen y plan B. Esta sección anticipa las críticas más duras y las respuestas que convierten la estrategia en dirección de negocio.';

export const criticasCEO: CriticaCEO[] = [
  {
    critica: '"200.000 seguidores suena arbitrario."',
    queCuestiona: 'Vanity metric vs negocio.',
    respuesta:
      '200k es meta de activo social, pero se evalúa por comunidad accionable: visitas, leads, compras, UGC, referidos, menciones y conversión. 60k cualificados pueden valer más que 200k pasivos.',
    queHacer: 'Definir KPIs de calidad y no escalar por followers si no hay intención.',
  },
  {
    critica: '"No me has demostrado que haya mercado suficiente."',
    queCuestiona: 'Tamaño de mercado y demanda real.',
    respuesta:
      'Antes de invertir fuerte se validan búsquedas, tendencias, competidores, landing tests, ads, encuestas, entrevistas y preorders/waitlist.',
    queHacer: 'Hacer market validation sprint de 30 días.',
  },
  {
    critica: '"El producto puede ser demasiado nicho."',
    queCuestiona: 'Escalabilidad de una watch box.',
    respuesta:
      'Por eso no se comunica como watch box sola: se abre a relojes, pulseras, brazaletes, joyas de viaje, regalos, tocador, ritual y B2B.',
    queHacer: 'Testar mensajes por uso y construir contenido por momentos.',
  },
  {
    critica: '"El posicionamiento es demasiado poético."',
    queCuestiona: 'Claridad comercial.',
    respuesta:
      'La fórmula debe ser doble: emocional "Para las piezas que no se guardan en cualquier lugar" + funcional "Estuches de piel personalizables para relojes, pulseras y joyas de viaje".',
    queHacer: 'Usar siempre emoción + claridad.',
  },
  {
    critica: '"No veo margen."',
    queCuestiona: 'Unit economics.',
    respuesta:
      'Marketing necesita CAC máximo por producto y margen real. Sin coste unitario, envío, packaging y devoluciones no se escala.',
    queHacer: 'Construir business case con precio, coste, CAC máximo y break-even.',
  },
  {
    critica: '"No hay razón urgente para comprar ahora."',
    queCuestiona: 'Conversión y timing.',
    respuesta:
      'Crear urgencia legítima: primera serie limitada, colores por temporada, personalización incluida en preventa, fechas de regalo, stock real. No descuentos agresivos.',
    queHacer: 'Diseñar calendario de drops y fechas límite.',
  },
  {
    critica: '"Puede ser marca de Navidad y nada más."',
    queCuestiona: 'Estacionalidad.',
    respuesta:
      'El calendario emocional cubre todo el año: orden enero, San Valentín, Día del Padre/Madre, bodas, graduaciones, verano/viajes, back to work, corporate gifting, Navidad/Reyes.',
    queHacer: 'Construir calendario anual por ocasiones.',
  },
  {
    critica: '"¿Cómo protegemos percepción premium?"',
    queCuestiona: 'Riesgo de abaratar marca.',
    respuesta:
      'Reglas: no descuentos permanentes, no estética barata, no creators incoherentes, no fotos sin dirección, no urgencia falsa, no atención lenta.',
    queHacer: 'Playbook de marca y revisión CMO.',
  },
  {
    critica: '"Marketing no está conectado a operaciones."',
    queCuestiona: 'Promesa vs entrega.',
    respuesta:
      'Marketing y ops deben revisar forecast, stock, capacidad de personalización, plazos, calidad, packaging y mensajes de disponibilidad semanalmente.',
    queHacer: 'Comité lunes con operaciones.',
  },
  {
    critica: '"Mañana alguien copia la caja."',
    queCuestiona: 'Diferenciación defendible.',
    respuesta:
      'Lo defendible no es solo producto: marca, personalización, packaging, comunidad, CRM, guías, B2B, colaboraciones, pop-ups, data y experiencia.',
    queHacer: 'Construir sistema de marca, no solo SKU.',
  },
  {
    critica: '"¿Qué pasa si no funciona?"',
    queCuestiona: 'Plan B y criterios de corte.',
    respuesta:
      'Si CPL, CVR, CAC, add to cart o sell-through no cumplen umbrales, se cambia mensaje, precio, PDP, segmento, stock o se frena escala.',
    queHacer: 'Definir stop/go rules antes de invertir.',
  },
];

/** §26.1 Anexos que un CEO pediría. */
export const anexosCEO: string[] = [
  'Business case: precio, costes, margen, CAC máximo, break-even, forecast ventas.',
  'Arquitectura de producto: icono, variantes, packs, personalización, packaging, roadmap.',
  'Funnel completo: awareness, consideración, lead, compra, postcompra, UGC, recompra, referido.',
  'Plan de equipo: roles, responsables, dedicación, coste y momento de incorporación.',
  'Calendario comercial: campañas por mes, fechas clave, producción, emails, paid, PR, stock.',
  'Dashboard CEO: máximo 15-20 métricas con semáforo verde/amarillo/rojo y decisión asociada.',
  'Playbook de marca: tono, visuales, claims, "no hacer", creators, packaging, atención cliente.',
  'Risk map: riesgos, señales tempranas, responsable y plan de mitigación.',
];
