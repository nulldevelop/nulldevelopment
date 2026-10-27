'use client'

import { Clock, ShieldCheck, Users, Zap } from 'lucide-react'
import { useI18n } from '@/i18n/provider'
import { BlurFade } from './ui/blur-fade'

const icons = [Users, Zap, ShieldCheck, Clock]

export function StatsStrip() {
	const { t } = useI18n()
	const stats = t.stats.map((stat, i) => ({ ...stat, icon: icons[i] }))

	return (
		<section className="relative z-10 px-4 sm:px-6 py-12 border-y border-white/5 bg-zinc-950/40 backdrop-blur-xs">
			<div className="max-w-6xl mx-auto w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
					{stats.map((stat, idx) => (
						<BlurFade key={stat.label} delay={0.06 * (idx + 1)} inView>
							<div className="flex flex-col">
								<div className="flex items-center gap-2.5 mb-2.5">
									<div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400 shrink-0">
										<stat.icon className="w-4 h-4" />
									</div>
									<span className="text-xs sm:text-sm uppercase tracking-wider text-zinc-300 font-medium">
										{stat.label}
									</span>
								</div>

								<div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
									{stat.value}
								</div>

								<p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed">
									{stat.detail}
								</p>
							</div>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	)
}
