import { cookies, headers } from 'next/headers'
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale, matchLocale } from './config'
import { en } from './dictionaries/en'
import { esES } from './dictionaries/es-ES'
import { esPY } from './dictionaries/es-PY'
import { pt } from './dictionaries/pt'
import type { Dictionary } from './dictionaries/types'

const dictionaries: Record<Locale, Dictionary> = {
	pt,
	en,
	'es-PY': esPY,
	'es-ES': esES,
}

export function getDictionaryFor(locale: Locale): Dictionary {
	return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export async function getLocale(): Promise<Locale> {
	const stored = (await cookies()).get(LOCALE_COOKIE)?.value
	if (isLocale(stored)) return stored
	return matchLocale((await headers()).get('accept-language'))
}

export async function getDictionary(): Promise<Dictionary> {
	return getDictionaryFor(await getLocale())
}
