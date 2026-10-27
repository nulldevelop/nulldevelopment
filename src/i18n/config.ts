export const locales = ['pt', 'en', 'es-PY', 'es-ES'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

export const LOCALE_COOKIE = 'locale'

export const localeMeta: Record<
	Locale,
	{ short: string; name: string; htmlLang: string; ogLocale: string }
> = {
	pt: { short: 'PT', name: 'Português (Brasil)', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
	en: { short: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_US' },
	'es-PY': { short: 'ES-PY', name: 'Español (Paraguay)', htmlLang: 'es-PY', ogLocale: 'es_PY' },
	'es-ES': { short: 'ES-ES', name: 'Español (España)', htmlLang: 'es-ES', ogLocale: 'es_ES' },
}

export function isLocale(value: string | undefined | null): value is Locale {
	return !!value && (locales as readonly string[]).includes(value)
}

/** Picks the best locale from an Accept-Language header. */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
	if (!acceptLanguage) return defaultLocale
	const tags = acceptLanguage
		.split(',')
		.map((part) => part.split(';')[0].trim().toLowerCase())
		.filter(Boolean)

	for (const tag of tags) {
		if (tag === 'es-py') return 'es-PY'
		if (tag === 'es-es') return 'es-ES'
		if (tag.startsWith('es')) return 'es-ES'
		if (tag.startsWith('en')) return 'en'
		if (tag.startsWith('pt')) return 'pt'
	}
	return defaultLocale
}
