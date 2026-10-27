'use client'

import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { whatsappUrl } from '@/i18n/format'
import { useI18n } from '@/i18n/provider'
import { company } from '@/lib/company'
import { BlurFade } from './ui/blur-fade'

export function Hero() {
	const { t } = useI18n()

	return (
		<section className="flex flex-col justify-center min-h-svh lg:min-h-screen relative z-10 pt-28 pb-16 sm:py-24 lg:py-28 px-4 sm:px-6">
			<div className="max-w-3xl mx-auto w-full text-center">
				{/* Availability Badge */}
				<BlurFade delay={0.05} inView>
					<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm">
						<span className="relative flex h-2.5 w-2.5">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
						</span>
						<span>{t.hero.available}</span>
					</div>
				</BlurFade>

				{/* Name & Title */}
				<BlurFade delay={0.1} inView>
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
						Pedro Henrique Andrade
					</h1>
					<p className="text-base sm:text-xl text-yellow-400 font-semibold mt-4 tracking-normal">
						{t.hero.role}
					</p>
				</BlurFade>

				{/* Value Statement */}
				<BlurFade delay={0.2} inView>
					<p className="text-base sm:text-lg text-zinc-300 text-balance mt-6 max-w-2xl mx-auto leading-relaxed">
						{t.hero.value}
					</p>
				</BlurFade>

				{/* Primary CTAs */}
				<BlurFade delay={0.3} inView>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
						<a
							href={whatsappUrl(company.whatsapp, t.whatsapp.budget)}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:scale-[1.02]"
						>
							<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
							<span>{t.hero.cta}</span>
						</a>

						<Link
							href="#portfolio"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-medium transition-all duration-200"
						>
							<span>{t.hero.projects}</span>
							<ArrowDown className="w-4 h-4 text-zinc-300" />
						</Link>
					</div>
				</BlurFade>

				{/* Quick Social & Contact Row */}
				<BlurFade delay={0.35} inView>
					<div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-zinc-400 text-sm">
						<a
							href="https://github.com/nulldevelop"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Github className="w-4 h-4" />
							<span>GitHub</span>
						</a>
						<span className="text-zinc-600">•</span>
						<a
							href="https://www.linkedin.com/in/pedrodevfull/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Linkedin className="w-4 h-4" />
							<span>LinkedIn</span>
						</a>
						<span className="text-zinc-600">•</span>
						<a
							href={`mailto:${company.email}`}
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Mail className="w-4 h-4" />
							<span>{company.email}</span>
						</a>
					</div>
				</BlurFade>
			</div>
		</section>
	)
}
