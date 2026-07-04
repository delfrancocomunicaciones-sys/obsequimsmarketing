export interface NavItem {
  path: string;
  label: string;
  /** Etiqueta compacta para la barra de navegación desktop. */
  short: string;
  /** Descripción corta para menú móvil e índice del sitio. */
  description: string;
  /** Número de capítulo mostrado en navegación editorial. */
  index: string;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Manifiesto', short: 'Manifiesto', description: 'La entrada al universo Obsequiums', index: '01' },
  { path: '/universo', label: 'Universo de marca', short: 'Universo', description: 'Tesis, esencia, códigos y posicionamiento', index: '02' },
  { path: '/producto', label: 'Producto', short: 'Producto', description: 'El icono, sus usos, pricing y competencia', index: '03' },
  { path: '/identidad-visual', label: 'Identidad visual', short: 'Identidad', description: 'Paleta, tipografía, foto, video y motion', index: '04' },
  { path: '/ecommerce', label: 'Ecommerce', short: 'Ecommerce', description: 'Arquitectura web, PDP, personalización y gifting', index: '05' },
  { path: '/buyer-personas', label: 'Buyer personas', short: 'Personas', description: 'Segmentos y momentos íntimos de conexión', index: '06' },
  { path: '/marketing-360', label: 'Marketing 360', short: '360', description: 'Mensajes, contenido, canales, campañas y equipo', index: '07' },
  { path: '/roadmap', label: 'Roadmap', short: 'Roadmap', description: 'Plan de lanzamiento de 12 meses y decisiones', index: '08' },
  { path: '/kpis-presupuesto', label: 'KPIs y presupuesto', short: 'KPIs', description: 'Unit economics, escenarios y umbrales', index: '09' },
  { path: '/riesgos', label: 'Riesgos', short: 'Riesgos', description: 'Mitigaciones y respuestas ejecutivas al CEO', index: '10' },
  { path: '/archivo-estrategico', label: 'Archivo estratégico', short: 'Archivo', description: 'Los documentos completos, palabra por palabra', index: '11' },
];
