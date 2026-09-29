'use client'

import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'

export function Hero() {
	return (
		<section className="flex flex-col justify-center min-h-svh lg:min-h-screen relative z-10 pt-28 pb-16 sm:py-24 lg:py-28 px-4 sm:px-6">
			<div className="max-w-3xl mx-auto w-full text-center">
				{/* Availability Badge */}
				<BlurFade delay={0.05} inView>
					<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-8 backdrop-blur-sm">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
						</span>
						<span>Disponível para novos projetos freelance</span>
					</div>
				</BlurFade>

				{/* Name & Title */}
				<BlurFade delay={0.1} inView>
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-sentient font-bold text-white tracking-tight leading-[1.1]">
						Pedro Henrique Andrade
					</h1>
					<p className="font-mono text-sm sm:text-base text-yellow-400/90 font-medium mt-3 tracking-wide">
						Full Stack Engineer • Next.js & TypeScript
					</p>
				</BlurFade>

				{/* Minimal Value Statement */}
				<BlurFade delay={0.2} inView>
					<p className="font-mono text-sm sm:text-base text-zinc-400 text-balance mt-6 max-w-xl mx-auto leading-relaxed">
						Construo aplicações web de alta performance, plataformas SaaS e landing pages focadas em conversão, do banco de dados ao deploy final.
					</p>
				</BlurFade>

				{/* Primary CTAs */}
				<BlurFade delay={0.3} inView>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-9">
						<a
							href="https://wa.me/5541991798306?text=Ol%C3%A1%20Pedro!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20projeto."
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-sm uppercase px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
						>
							<MessageCircle className="w-4 h-4" />
							<span>Falar no WhatsApp</span>
						</a>

						<Link
							href="#portfolio"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-sm uppercase px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-200"
						>
							<span>Ver Projetos</span>
							<ArrowDown className="w-4 h-4 text-zinc-400" />
						</Link>
					</div>
				</BlurFade>

				{/* Quick Social & Contact Row */}
				<BlurFade delay={0.35} inView>
					<div className="flex items-center justify-center gap-5 mt-10 text-zinc-500 text-xs font-mono">
						<a
							href="https://github.com/nulldevelop"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Github className="w-4 h-4" />
							<span>GitHub</span>
						</a>
						<span>•</span>
						<a
							href="https://www.linkedin.com/in/pedrodevfull/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Linkedin className="w-4 h-4" />
							<span>LinkedIn</span>
						</a>
						<span>•</span>
						<a
							href="mailto:contato@nulldev.com.br"
							className="flex items-center gap-1.5 hover:text-white transition-colors"
						>
							<Mail className="w-4 h-4" />
							<span>contato@nulldev.com.br</span>
						</a>
					</div>
				</BlurFade>
			</div>
		</section>
	)
}
