'use client'

import { Clock, ShieldCheck, Users, Zap } from 'lucide-react'
import { BlurFade } from './ui/blur-fade'

const stats = [
	{
		value: '+770',
		label: 'Usuários ativos',
		detail: 'Sistemas rodando em produção',
		icon: Users,
	},
	{
		value: '95+',
		label: 'Google Lighthouse',
		detail: 'SEO, performance e acessibilidade',
		icon: Zap,
	},
	{
		value: '100%',
		label: 'Código tipado',
		detail: 'TypeScript estrito e boas práticas',
		icon: ShieldCheck,
	},
	{
		value: '1 a 3 sem',
		label: 'Prazo médio de MVP',
		detail: 'Desenvolvimento ágil e entregas rápidas',
		icon: Clock,
	},
]

export function StatsStrip() {
	return (
		<section className="relative z-10 px-4 sm:px-6 py-12 border-y border-white/5 bg-zinc-950/40 backdrop-blur-xs">
			<div className="max-w-6xl mx-auto w-full">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
					{stats.map((stat, idx) => (
						<BlurFade key={stat.label} delay={0.06 * (idx + 1)} inView>
							<div className="flex flex-col">
								<div className="flex items-center gap-2 mb-2">
									<div className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
										<stat.icon className="w-3.5 h-3.5" />
									</div>
									<span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
										{stat.label}
									</span>
								</div>

								<div className="font-sentient text-2xl sm:text-3xl font-bold text-white tracking-tight">
									{stat.value}
								</div>

								<p className="font-mono text-[11px] text-zinc-400 mt-1 leading-normal">
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
