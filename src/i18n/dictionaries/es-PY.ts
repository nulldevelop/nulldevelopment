import { esES } from './es-ES'
import type { Dictionary } from './types'

/**
 * Paraguayan Spanish is derived from the Spain edition and adapted:
 * voseo (vos), Latin American vocabulary and simple past instead of present perfect.
 * Blocks that differ in structure are overridden explicitly below.
 */
const replacements: [RegExp, string][] = [
	// Vocabulary
	[/del Ayuntamiento/g, 'de la Municipalidad'],
	[/el ayuntamiento/g, 'la municipalidad'],
	[/Ayuntamiento/g, 'Municipalidad'],
	[/ayuntamiento/g, 'municipalidad'],
	[/concejalía/g, 'secretaría'],
	[/matrícula/g, 'chapa'],
	[/costes/g, 'costos'],
	[/justificantes/g, 'comprobantes'],
	[/beneficio/g, 'ganancia'],
	[/ticket medio/g, 'ticket promedio'],
	[/Plazo medio/g, 'Plazo promedio'],
	[/plazo medio/g, 'plazo promedio'],
	[/pagos fraccionados/g, 'pagos en cuotas'],
	[/pago a plazos/g, 'pago en cuotas'],
	[/laborables/g, 'hábiles'],
	[/100 %/g, '100%'],
	// Voseo
	[/Haz clic/g, 'Hacé clic'],
	[/Escríbeme/g, 'Escribime'],
	[/Cuéntame/g, 'Contame'],
	[/Háblame/g, 'Hablame'],
	[/Resuelve/g, 'Resolvé'],
	[/Indica /g, 'Indicá '],
	[/Describe /g, 'Describí '],
	[/envía /g, 'enviá '],
	[/registra /g, 'registrá '],
	[/sigue /g, 'seguí '],
	[/Necesitas/g, 'Necesitás'],
	[/necesitas/g, 'necesitás'],
	[/puedes/g, 'podés'],
	[/aceptas/g, 'aceptás'],
	[/¿Emites/g, '¿Emitís'],
	[/firmas contrato/g, 'firmás contrato'],
	[/¿me ayudas/g, '¿me ayudás'],
	// Present perfect -> simple past
	[/he visto/g, 'vi'],
]

function adapt<T>(value: T): T {
	if (typeof value === 'string') {
		return replacements.reduce((text, [pattern, to]) => text.replace(pattern, to), value as string) as T
	}
	if (Array.isArray(value)) return value.map(adapt) as T
	if (value && typeof value === 'object') {
		return Object.fromEntries(
			Object.entries(value).map(([key, val]) => [key, adapt(val)]),
		) as T
	}
	return value
}

const base = adapt(esES)

export const esPY: Dictionary = {
	...base,
	whatsapp: {
		...base.whatsapp,
		budget: 'Hola Pedro, vi tu portfolio y me gustaría solicitar un presupuesto para un proyecto.',
		quote: 'Hola Pedro, me gustaría solicitar un presupuesto para un proyecto.',
	},
	contact: {
		...base.contact,
		subtitle:
			'Escribime directamente por WhatsApp para recibir respuesta en pocos minutos o enviame los detalles de tu proyecto acá abajo.',
		phone: 'WhatsApp o celular',
		messagePlaceholder: 'Contame brevemente qué proyecto o sistema necesitás...',
		errName: 'Ingresá tu nombre.',
		errPhone: 'Ingresá tu WhatsApp o celular.',
		errMessage: 'Describí brevemente lo que necesitás.',
		success: '¡Mensaje enviado! Te respondo pronto.',
		errorSend: 'Error al enviar. ¡Escribime directamente por WhatsApp!',
		errorConnection: 'Error de conexión. ¡Hablame por WhatsApp!',
	},
	faq: {
		...base.faq,
		otherQuestion: '¿Otra duda? Escribime por WhatsApp',
	},
	services: {
		...base.services,
		requestQuote: 'Pedir un presupuesto a medida',
	},
}
