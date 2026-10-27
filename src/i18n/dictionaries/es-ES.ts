import type { Dictionary } from './types'

export const esES: Dictionary = {
	meta: {
		title: 'Pedro Henrique | Full Stack Developer & Software Engineer',
		description:
			'Portfolio y servicios de desarrollo Full Stack de Pedro Henrique Andrade. Especialista en Next.js, React, Node.js, TypeScript y arquitectura de software escalable. Disponible para proyectos y trabajo freelance.',
	},
	language: {
		label: 'Idioma',
	},
	nav: {
		projects: 'Proyectos',
		career: 'Trayectoria',
		services: 'Servicios',
		faq: 'FAQ',
		contact: 'Contacto',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		navigation: 'Navegación',
		whatsappDirect: 'WhatsApp directo',
	},
	whatsapp: {
		budget: 'Hola Pedro, he visto tu portfolio y me gustaría pedirte un presupuesto para un proyecto.',
		question: 'Hola Pedro, tengo una duda sobre la contratación de un proyecto.',
		quote: 'Hola Pedro, me gustaría pedirte un presupuesto para un proyecto.',
		similar:
			'Hola Pedro, he visto el caso de {title} en tu portfolio y me gustaría un proyecto similar para mi negocio.',
	},
	hero: {
		available: 'Disponible para nuevos proyectos freelance',
		role: 'Full Stack Engineer • Next.js & TypeScript',
		value:
			'Desarrollo aplicaciones web de alto rendimiento, plataformas SaaS escalables y landing pages enfocadas en la conversión, desde la base de datos hasta el despliegue final.',
		cta: 'Hablar por WhatsApp',
		projects: 'Ver proyectos',
	},
	stats: [
		{ value: '+770', label: 'Usuarios activos', detail: 'Sistemas funcionando en producción' },
		{ value: '95+', label: 'Google Lighthouse', detail: 'SEO, rendimiento y accesibilidad' },
		{ value: '100%', label: 'Código tipado', detail: 'TypeScript estricto y buenas prácticas' },
		{
			value: '1 a 3 sem',
			label: 'Plazo medio de MVP',
			detail: 'Desarrollo ágil y entregas rápidas',
		},
	],
	portfolio: {
		eyebrow: 'Casos seleccionados',
		title: 'Proyectos destacados',
		all: 'Todos',
		saas: 'SaaS y Web Apps',
		public: 'Sector público',
		landing: 'Landing Pages',
		live: 'En vivo',
		viewCase: 'Ver caso',
		viewFullCase: 'Ver caso completo',
		caseBadge: 'Caso',
	},
	badges: {
		'Ao Vivo': 'En vivo',
		'Em Produção': 'En producción',
		'Em Uso': 'En uso',
	},
	projects: {
		scopeflow: {
			shortDescription:
				'SaaS completo para generar propuestas comerciales y contratos digitales dirigido a desarrolladores freelance y software houses.',
			content: `
## ScopeFlow

**ScopeFlow** es una plataforma SaaS dirigida a desarrolladores freelance y software houses que necesitan crear presupuestos, propuestas comerciales profesionales y contratos digitales de forma rápida y ordenada.

### Funcionalidades principales:
- **Catálogo de funcionalidades**: registra módulos y features reutilizables con horas estimadas, complejidad y categoría para montar presupuestos en segundos.
- **Calculadora de precio/hora**: calculadora inteligente basada en objetivos de ingresos, costes fijos, impuestos y margen de beneficio.
- **Editor de presupuestos**: elementos del catálogo, descuentos, recargos por urgencia y condiciones de pago a plazos.
- **Propuestas profesionales**: se comparten mediante un enlace público exclusivo o se exportan en un PDF personalizado.
- **Contratos digitales**: creación y firma digital por parte del cliente directamente desde el enlace, sin fricciones.
- **Métricas y CRM**: sigue la tasa de conversión, el ticket medio y el historial por cliente con gráficos interactivos.

### Arquitectura y tecnologías:
- Desarrollado con **Next.js (App Router)**, **TypeScript**, **PostgreSQL** y **Prisma ORM**.
- Autenticación y sesiones corporativas con **Better Auth**.
- Gráficos analíticos con **Recharts** e interfaz con **Tailwind CSS** y **Shadcn UI**.
- Integración de pagos con webhooks automatizados mediante **AbacatePay**.
			`.trim(),
		},
		autosystem: {
			shortDescription:
				'Sistema SaaS completo de gestión para talleres mecánicos: presupuestos, órdenes de trabajo, stock, finanzas y CRM.',
			content: `
## AutoSystem

**AutoSystem** es una solución SaaS robusta diseñada para centros de automoción y talleres mecánicos que necesitan centralizar la operativa del negocio en un único sistema seguro y en la nube.

### Funcionalidades principales:
- **Órdenes de trabajo**: apertura, diagnóstico técnico, registro de piezas utilizadas y cálculo automático de la mano de obra.
- **Gestión financiera y cobros**: control de cuentas por pagar y por cobrar, conciliación e informes de rentabilidad por servicio.
- **Control de stock inteligente**: descuento automático de piezas y alertas para reponer los suministros críticos.
- **Emisión de presupuestos en PDF**: generación instantánea de justificantes y presupuestos detallados para enviar a los clientes por WhatsApp.
- **Panel CRM del cliente**: historial del vehículo por matrícula y programación de revisiones preventivas periódicas.

### Arquitectura y tecnologías:
- Desarrollado con **Next.js**, **React**, **TypeScript** y **Prisma ORM**.
- Base de datos relacional **PostgreSQL** con soporte multi-tenant.
- Generación de informes y facturas en PDF con **React PDF**.
- Control de acceso con varios niveles de permisos (gerentes, mecánicos y recepcionistas).
			`.trim(),
		},
		'rancho-capivari': {
			shortDescription:
				'Web corporativa y reservas de cabañas rurales exclusivas a 45 minutos de Curitiba, centrada en la privacidad y en una alta conversión.',
			content: `
## Rancho Capivari

El proyecto **Rancho Capivari** se desarrolló para ofrecer una experiencia digital inmersiva, elegante e intuitiva para reservar chalés y cabañas en plena naturaleza.

### Funcionalidades y puntos destacados:
- **Experiencia visual inmersiva**: galerías de fotos en alta resolución con carruseles fluidos optimizados para dispositivos móviles.
- **Selector de fechas y calendario**: comprobación de disponibilidad y un flujo intuitivo para consultar las tarifas por noche.
- **Integración con WhatsApp**: conversión directa de leads con mensajes preconfigurados que incluyen las fechas y las cabañas elegidas.
- **Rendimiento de carga**: optimización avanzada de imágenes y puntuación máxima en Google Core Web Vitals.

### Tecnologías utilizadas:
- Construido con **Next.js**, **React 19**, **TypeScript** y **Tailwind CSS**.
- Animaciones cuidadas con **Motion** y componentes accesibles con **Radix UI**.
- Monitorización del tráfico y métricas de visitantes con **Vercel Analytics**.
			`.trim(),
		},
		'narrativa-blog': {
			shortDescription:
				'Portal y blog editorial centrado en la profundidad analítica, el rigor editorial, una tipografía impecable y una alta velocidad de lectura.',
			content: `
## Narrativa Blog

**Narrativa Blog** es una plataforma editorial y de noticias diseñada con foco en la legibilidad, el rendimiento del contenido y el posicionamiento orgánico (SEO).

### Funcionalidades principales:
- **Editor de contenido enriquecido**: panel con editor visual al estilo Notion/Medium para publicar artículos con una tipografía cuidada.
- **Sistema de gestión de contenidos (CMS)**: panel de administración con control de borradores, revisiones, autores y categorías.
- **SEO on-page automatizado**: metadatos dinámicos, Open Graph para redes sociales, datos estructurados JSON-LD y feeds RSS.
- **Velocidad extrema**: renderizado estático con Server Components para que los artículos se abran al instante.

### Arquitectura y tecnologías:
- **Next.js**, **React**, **TypeScript** y **Prisma ORM**.
- Base de datos relacional **MariaDB**.
- Autenticación de redactores y administradores con **Better Auth**.
			`.trim(),
		},
		footeasy: {
			shortDescription:
				'Sistema corporativo web para gestionar competiciones deportivas municipales, con 772 socios, 24 equipos y 693 deportistas registrados.',
			content: `
## FootEasy: gestión de campeonatos deportivos

**FootEasy** es un sistema corporativo completo desarrollado para modernizar y gestionar las competiciones y campeonatos deportivos municipales del Ayuntamiento de Campina Grande do Sul.

### Cifras en producción:
- **772** socios registrados
- **24** clubes y equipos activos
- **693** deportistas registrados con documentación e historial

### Funcionalidades principales:
- **Clasificaciones automatizadas**: puntuación, criterios de desempate, diferencia de goles y cuadros calculados en tiempo real.
- **Actas digitales**: registro online de goles, alineaciones, tarjetas amarillas y rojas y máximos goleadores durante cada jornada.
- **Inscripción y regularización**: fichas completas de deportistas, control de documentación y sanciones automáticas por acumulación de amonestaciones.
- **Informes oficiales**: cierre de jornadas con exportación de informes homologados para la concejalía.

### Arquitectura y tecnologías:
- Desarrollado con **Next.js**, **TypeScript**, **Prisma ORM** y base de datos **MySQL**.
- Modelado de datos de alta integridad para garantizar la coherencia de los resultados simultáneos.
			`.trim(),
		},
		sira: {
			shortDescription:
				'Fiscalización de contratos públicos con informes en PDF firmados digitalmente, código QR y autenticación SSO con Azure AD.',
			content: `
## SIRA: Sistema Integrado de Informes Administrativos

**SIRA** es una plataforma corporativa desarrollada para el sector público municipal, centrada en el cumplimiento normativo y la fiscalización de contratos públicos administrativos.

### Funcionalidades principales:
- **Fiscalización contractual**: gestión completa de inspecciones y mediciones de obras y servicios contratados por el ayuntamiento.
- **Informes técnicos en PDF**: generación automatizada de informes con formato oficial y fotos de la inspección.
- **Firma digital y validación por código QR**: cada documento emitido incluye un hash de verificación y un código QR para su validación pública en el Portal de Transparencia.
- **Integración con Azure AD**: inicio de sesión único (SSO) corporativo con permisos de acceso basados en perfiles (RBAC).

### Impacto y resultados:
- Reducción de días de burocracia en la emisión de inspecciones técnicas, que se archivan de inmediato.
- 100 % de transparencia y auditoría de las acciones de cada empleado.

### Arquitectura:
- **Next.js 15**, **React 19**, **TypeScript**, **Prisma ORM**, **MySQL 8** e integración con **Azure AD**.
			`.trim(),
		},
	},
	titles: {
		footeasy: 'FootEasy: Gestión deportiva',
		sira: 'SIRA: Informes administrativos',
	},
	experience: {
		eyebrow: 'Carrera',
		title: 'Trayectoria y experiencia',
		items: [
			{
				company: 'Ayuntamiento de Campina Grande do Sul',
				role: 'Desarrollador Full Stack y Arquitecto de Software',
				period: '2025 / Actualidad',
				badge: 'Sector público',
				description:
					'Liderazgo técnico y desarrollo integral de sistemas corporativos gubernamentales en producción:',
				highlights: [
					'FootEasy: gestión completa de torneos con más de 770 socios, 24 equipos y 693 deportistas registrados.',
					'SIRA: fiscalización de contratos públicos con informes PDF firmados digitalmente, código QR y SSO con Azure AD.',
					'BookEase: plataforma municipal de fondos bibliográficos con clasificación CDD, control de préstamos e informes analíticos.',
				],
			},
			{
				company: 'Ingeniería Web Freelance y Consultoría',
				role: 'Desarrollador Full Stack independiente',
				period: '2023 / Actualidad',
				badge: 'Freelance',
				description:
					'Desarrollo de principio a fin de soluciones digitales a medida para empresas y emprendedores:',
				highlights: [
					'Landing pages de alta conversión con Lighthouse 95+ e integración inmediata con WhatsApp.',
					'Aplicaciones SaaS y paneles de administración con autenticación segura e informes dinámicos.',
					'Integraciones con pasarelas de pago (Stripe, Mercado Pago y PIX automatizado).',
				],
			},
		],
	},
	services: {
		eyebrow: 'Soluciones y tecnologías',
		title: 'Cómo puedo ayudar a tu proyecto',
		requestQuote: 'Pedir un presupuesto personalizado',
		included: 'Qué incluye:',
		startProject: 'Empezar este proyecto',
		items: [
			{
				title: 'SaaS y aplicaciones web',
				description:
					'Productos digitales desde cero: modelado de base de datos, autenticación segura, reglas de negocio e interfaz fluida.',
				deliverables: [
					'Modelado con Postgres y Prisma ORM',
					'Autenticación y control de permisos (RBAC)',
					'Panel de administración y flujo de compra',
					'Despliegue automatizado en infraestructura escalable',
				],
			},
			{
				title: 'Landing pages de conversión',
				description:
					'Páginas rápidas, accesibles y orientadas a las ventas o a la captación de leads, con integración directa con WhatsApp.',
				deliverables: [
					'Diseño responsive mobile-first',
					'Puntuación de Google Lighthouse 95+',
					'Integración directa con WhatsApp y formularios',
					'SEO técnico y etiquetas Open Graph para redes sociales',
				],
			},
			{
				title: 'Dashboards y gestión',
				description:
					'Paneles corporativos con métricas en tiempo real, informes en PDF con código QR y control de accesos.',
				deliverables: [
					'Gráficos interactivos en tiempo real',
					'Exportación de informes en PDF y Excel',
					'Firma digital y validación por código QR',
					'Autenticación corporativa (SSO / Azure AD)',
				],
			},
		],
		techTitle: 'Tecnologías que domino',
		techSubtitle: 'Un stack moderno que garantiza gran velocidad y facilidad de mantenimiento.',
		ownCode: 'Código 100 % tuyo',
		warranty: 'Garantía incluida',
	},
	faq: {
		eyebrow: 'Resuelve tus dudas',
		title: 'Preguntas frecuentes',
		otherQuestion: '¿Otra duda? Escríbeme por WhatsApp',
		items: [
			{
				question: '¿Emites factura (para empresas) y firmas contrato?',
				answer:
					'¡Por supuesto! Todos los proyectos cuentan con un contrato formal que detalla el alcance, el calendario, los hitos de entrega y la cesión íntegra de los derechos de autor. Emito factura de servicios (Nota Fiscal) como empresa registrada en Brasil, para compañías de cualquier tamaño.',
			},
			{
				question: '¿Cuál es el plazo medio de entrega de un proyecto?',
				answer:
					'Las landing pages de alta conversión y las webs corporativas suelen entregarse en 1 o 2 semanas. En el caso de sistemas web, paneles de administración y plataformas SaaS completas (MVP), el plazo habitual es de 3 a 6 semanas, siempre con entregas parciales para que puedas seguir y probar la evolución.',
			},
			{
				question: '¿Cómo funciona la forma de pago?',
				answer:
					'Trabajo con una entrada inicial y pagos fraccionados vinculados a los hitos de entrega acordados en el contrato, lo que da seguridad a ambas partes. Acepto PIX, transferencia bancaria y boleto bancario brasileño.',
			},
			{
				question: '¿Cómo funcionan el soporte posterior al lanzamiento y la garantía?',
				answer:
					'Todos los proyectos incluyen 30 días de garantía y soporte gratuito tras el despliegue para corregir posibles ajustes o resolver dudas técnicas. Para quienes necesiten mejoras continuas y nuevos módulos, también ofrezco paquetes de soporte y evolución bajo demanda.',
			},
			{
				question: '¿El código fuente y el proyecto serán 100 % propiedad de mi empresa?',
				answer:
					'Sí, 100 % tuyo. Tras la entrega y el pago íntegro, todos los derechos de propiedad intelectual, el repositorio de GitHub, los accesos al alojamiento y la base de datos se transfieren por completo a ti, sin permanencia ni dependencia tecnológica.',
			},
			{
				question: 'No tengo diseño ni wireframe, ¿me ayudas con eso?',
				answer:
					'¡Sí! Puedo encargarme de todo el proceso: desde el diseño visual de la interfaz (UI/UX limpio, moderno y enfocado en la conversión) hasta la programación completa, la estructuración de la base de datos y el despliegue en la nube.',
			},
		],
	},
	contact: {
		eyebrow: 'Contacto directo',
		title: '¿Sacamos tu idea adelante?',
		subtitle:
			'Escríbeme directamente por WhatsApp para recibir respuesta en pocos minutos o envía los detalles de tu proyecto aquí abajo.',
		whatsappTitle: 'WhatsApp directo',
		whatsappNote: 'El canal más rápido para presupuestos y dudas.',
		emailTitle: 'Correo electrónico',
		copy: 'Copiar',
		copied: 'Copiado',
		emailCopied: '¡Correo copiado!',
		reply: 'Respondo en un máximo de 24 horas laborables',
		invoice: 'Emisión de factura de servicios (para empresas)',
		name: 'Tu nombre',
		namePlaceholder: 'Ej.: Carlos Oliveira',
		phone: 'WhatsApp o teléfono',
		message: '¿Cómo puedo ayudarte?',
		messagePlaceholder: 'Cuéntame brevemente qué proyecto o sistema necesitas...',
		submit: 'Enviar mensaje',
		sending: 'Enviando...',
		errName: 'Indica tu nombre.',
		errPhone: 'Indica tu WhatsApp o teléfono.',
		errMessage: 'Describe brevemente lo que necesitas.',
		success: '¡Mensaje enviado! Te responderé en breve.',
		errorSend: 'Error al enviar. ¡Escríbeme directamente por WhatsApp!',
		errorConnection: 'Error de conexión. ¡Háblame por WhatsApp!',
		consentBefore: 'Al enviar, aceptas la',
		consentMiddle: 'y los',
		consentAfter: '.',
	},
	floatingWhatsapp: {
		aria: 'Atención rápida',
		title: 'Chatear ahora por WhatsApp',
		label: 'En línea • Presupuesto rápido',
	},
	footer: {
		role: 'Full Stack Engineer',
		top: 'Arriba',
		privacy: 'Política de privacidad',
		terms: 'Términos de uso',
		rights: 'Todos los derechos reservados.',
	},
	company: {
		legalStatus: 'Microemprendedor Individual (MEI, Brasil)',
	},
	projectPage: {
		backToPortfolio: 'Volver al portfolio',
		cases: 'Casos',
		liveBadge: 'En vivo',
		caseStudy: 'Caso de estudio',
		viewLive: 'Ver proyecto en vivo',
		similar: 'Proyecto similar',
		myRole: 'Mi función',
		myRoleValue: 'Full Stack y Arquitecto',
		solutionType: 'Tipo de solución',
		saas: 'Plataforma SaaS',
		public: 'Sector público',
		landing: 'Landing Page y Web',
		status: 'Estado',
		access: 'Código y acceso',
		online: 'Online',
		private: 'Privado / Corporativo',
		stack: 'Tecnologías utilizadas:',
		screens: 'Pantallas del proyecto',
		screensHint: 'Haz clic en cualquier captura para ampliarla en alta resolución:',
		needSimilar: '¿Necesitas algo parecido?',
		needSimilarText: 'Puedo desarrollar una solución con esta misma calidad para tu empresa.',
		whatsapp: 'Hablar por WhatsApp',
		requestQuote: 'Solicitar presupuesto',
	},
	legal: {
		lastUpdated: 'Última actualización',
		updatedAt: '26 de octubre de 2026',
		back: 'Volver al sitio',
		privacyLinkText: 'Política de privacidad',
		privacy: {
			metaTitle: 'Política de privacidad | Pedro Henrique Andrade',
			metaDescription:
				'Cómo se recogen, utilizan y protegen los datos personales en este sitio web, conforme a la LGPD brasileña.',
			title: 'Política de privacidad',
			sections: [
				{
					h: '1. Quiénes somos',
					p: [
						'Este sitio web está gestionado por **{legalName}**, {legalStatus}, con CNPJ (identificación fiscal de empresas en Brasil) n.º {cnpj} y sede en {address}. A efectos de la Ley General de Protección de Datos de Brasil (Ley n.º 13.709/2018 – LGPD), somos el **responsable del tratamiento** de los datos personales tratados aquí.',
					],
				},
				{
					h: '2. Datos que recogemos',
					ul: [
						'**Formulario de contacto:** nombre, teléfono/WhatsApp y el contenido del mensaje que envíes.',
						'**Contacto directo:** los datos que nos facilites por WhatsApp o correo electrónico.',
						'**Datos de navegación:** información técnica y estadísticas de acceso (páginas visitadas, dispositivo, navegador, país), recogidas de forma agregada por Vercel Analytics.',
						'**Preferencia de idioma:** una cookie técnica que solo guarda el idioma que has elegido en el sitio.',
					],
				},
				{
					h: '3. Finalidades y bases jurídicas',
					ul: [
						'Atender solicitudes, dudas y peticiones de presupuesto (medidas precontractuales).',
						'Prestar los servicios contratados y emitir documentos fiscales (ejecución del contrato y obligación legal).',
						'Medir y mejorar el rendimiento del sitio (interés legítimo).',
					],
				},
				{
					h: '4. Comunicación de datos',
					p: [
						'No vendemos datos personales. Solo podemos compartirlos con proveedores que hacen posible el funcionamiento del sitio (alojamiento, base de datos y analítica) y cuando lo exijan la ley o una autoridad competente.',
					],
				},
				{
					h: '5. Conservación y seguridad',
					p: [
						'Los datos se conservan durante el tiempo necesario para cumplir las finalidades anteriores y las posibles obligaciones legales. Adoptamos medidas técnicas razonables para protegerlos frente al acceso no autorizado, la pérdida o la alteración.',
					],
				},
				{
					h: '6. Tus derechos',
					p: [
						'Conforme al art. 18 de la LGPD, puedes solicitar la confirmación del tratamiento, el acceso, la rectificación, la anonimización, la portabilidad, la supresión de tus datos, información sobre su comunicación y la revocación del consentimiento. Los visitantes ubicados fuera de Brasil, incluidos los del Espacio Económico Europeo, también pueden enviar sus solicitudes, que atenderemos conforme a la normativa que les resulte aplicable. Envía tu solicitud a {email}.',
					],
				},
				{
					h: '7. Cookies',
					p: [
						'Solo utilizamos recursos técnicos necesarios para el funcionamiento del sitio (como la preferencia de idioma) y herramientas de analítica agregada. Puedes bloquear o eliminar las cookies en la configuración de tu navegador.',
					],
				},
				{
					h: '8. Cambios',
					p: [
						'Esta política puede actualizarse en cualquier momento; la fecha de la última revisión figura al principio de la página.',
					],
				},
				{
					h: '9. Contacto',
					p: ['{owner} – {email} – {phone}'],
				},
			],
		},
		terms: {
			metaTitle: 'Términos de uso | Pedro Henrique Andrade',
			metaDescription: 'Condiciones generales de uso del sitio web y de contratación de los servicios.',
			title: 'Términos de uso',
			sections: [
				{
					h: '1. Identificación',
					p: [
						'Este sitio web pertenece a **{legalName}**, {legalStatus}, CNPJ (identificación fiscal de empresas en Brasil) n.º {cnpj}, con sede en {address}. Al utilizarlo, aceptas estos Términos.',
					],
				},
				{
					h: '2. Objeto',
					p: [
						'El sitio presenta el portfolio y los servicios de desarrollo de software y tecnología que ofrece {owner}, y permite enviar solicitudes de contacto y de presupuesto.',
					],
				},
				{
					h: '3. Contratación de servicios',
					ul: [
						'Los plazos, el alcance, los precios y la forma de pago se definen en una propuesta o contrato específico para cada proyecto.',
						'El envío de un mensaje o de una solicitud de presupuesto no genera obligación de contratar para ninguna de las partes.',
						'Emitimos factura de servicios conforme a la legislación aplicable.',
					],
				},
				{
					h: '4. Propiedad intelectual',
					p: [
						'Los textos, imágenes, marcas, diseños y códigos del sitio están protegidos por derechos de autor y no pueden copiarse ni reutilizarse sin autorización. Los proyectos mostrados en el portfolio pertenecen a sus respectivos titulares y se muestran con fines ilustrativos.',
					],
				},
				{
					h: '5. Uso adecuado',
					p: [
						'Está prohibido utilizar el sitio con fines ilícitos, intentar acceder a áreas restringidas, comprometer su seguridad o enviar contenido ofensivo, falso o que vulnere derechos de terceros.',
					],
				},
				{
					h: '6. Limitación de responsabilidad',
					p: [
						'Nos esforzamos por mantener la información correcta y el sitio disponible, pero no garantizamos un funcionamiento ininterrumpido ni la ausencia de errores. Los enlaces a sitios de terceros se ofrecen por comodidad, sin responsabilidad por su contenido.',
					],
				},
				{
					h: '7. Privacidad',
					p: ['El tratamiento de los datos personales se describe en la {privacyLink}.'],
				},
				{
					h: '8. Modificaciones y jurisdicción',
					p: [
						'Estos Términos pueden modificarse en cualquier momento. Para resolver cualquier controversia se elige el fuero de la comarca de Campina Grande do Sul (Paraná, Brasil), sin perjuicio del fuero que corresponda al consumidor cuando sea aplicable.',
					],
				},
				{
					h: '9. Contacto',
					p: ['{email} – {phone}'],
				},
			],
		},
	},
}
