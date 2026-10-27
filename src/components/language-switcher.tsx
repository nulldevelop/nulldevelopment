'use client'

import { Check, Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { setLocale } from '@/i18n/actions'
import { type Locale, localeMeta, locales } from '@/i18n/config'
import { useI18n } from '@/i18n/provider'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LanguageSwitcher() {
	const { locale, t } = useI18n()
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const change = (next: Locale) => {
		if (next === locale) return
		startTransition(async () => {
			await setLocale(next)
			router.refresh()
		})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					aria-label={t.language.label}
					disabled={isPending}
					className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-200 transition-colors cursor-pointer disabled:opacity-60"
				>
					<Globe className="w-4 h-4" />
					<span>{localeMeta[locale].short}</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-48 z-[60]">
				{locales.map((code) => (
					<DropdownMenuItem
						key={code}
						onSelect={() => change(code)}
						className="cursor-pointer justify-between gap-3"
					>
						<span>{localeMeta[code].name}</span>
						{code === locale && <Check className="w-4 h-4 text-emerald-400" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
