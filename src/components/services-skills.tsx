'use client'

import { ArrowRight, Check, Code2, Cpu, Globe, LineChart, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'

const services = [
	{
		title: 'SaaS & Aplicações Web',
		icon: Cpu,
		description: 'Produtos digitais do zero: modelagem de banco, autenticação segura, regras de negócio e interface fluida.',
		deliverables: [
			'Modelagem Postgres & Prisma ORM',
			'Autenticação e controle de permissões (RBAC)',
			'Painel administrativo e fluxo de checkout',
			'Deploy automatizado em infraestrutura escalável',
		],
	},
	{
		title: 'Landing Pages de Conversão',
		icon: Globe,
		description: 'Páginas rápidas, acessíveis e focadas em vendas ou captação de leads, com integração direta ao WhatsApp.',
		deliverables: [
			'Design responsivo mobile-first',
			'Pontuação Google Lighthouse 95+',
			'Integração direta com WhatsApp e formulários',
			'SEO técnico e tags Open Graph para redes',
		],
	},
	{
		title: 'Dashboards & Gestão',
		icon: LineChart,
		description: 'Painéis corporativos com métricas em tempo real, relatórios em PDF com QR Code e controle de acessos.',
		deliverables: [
			'Gráficos interativos em tempo real',
			'Exportação de relatórios em PDF e Excel',
			'Assinatura digital e validação por QR Code',
			'Autenticação corporativa (SSO / Azure AD)',
		],
	},
]

const technologies = [
	{ name: 'Next.js 16', category: 'Frontend', color: 'text-white bg-white/10 border-white/20' },
	{ name: 'React 19', category: 'Frontend', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
	{ name: 'TypeScript', category: 'Linguagem', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
	{ name: 'Tailwind CSS 4', category: 'Estilização', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
	{ name: 'Node.js', category: 'Backend', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
	{ name: 'PostgreSQL', category: 'Database', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
	{ name: 'Prisma ORM', category: 'Database', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
	{ name: 'MySQL', category: 'Database', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
	{ name: 'Docker', category: 'DevOps', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
	{ name: 'Better Auth', category: 'Segurança', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
]

export function ServicesSkills() {
	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="servicos">
			<div className="max-w-6xl mx-auto w-full">
				{/* Section Header */}
				<div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
					<div>
						<span className="text-xs sm:text-sm uppercase tracking-widest text-yellow-400 font-semibold">
							Soluções & Tecnologias
						</span>
						<h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
							Como posso ajudar seu projeto
						</h2>
					</div>
					<Link
						href="#contato"
						className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase text-yellow-400 hover:text-yellow-300 transition-colors"
					>
						<span>Pedir orçamento personalizado</span>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>

				{/* 3 Clean Service Pillars */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
					{services.map((item, idx) => (
						<BlurFade key={item.title} delay={0.08 * (idx + 1)} inView>
							<div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-yellow-500/40 transition-all duration-200 h-full flex flex-col justify-between">
								<div>
									<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 flex items-center justify-center mb-5">
										<item.icon className="w-6 h-6" />
									</div>
									<h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
										{item.title}
									</h3>
									<p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
										{item.description}
									</p>

									{/* Deliverables */}
									<div className="space-y-2 pt-4 border-t border-white/10">
										<span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold block mb-2">
											O que está incluso:
										</span>
										{item.deliverables.map((deliv) => (
											<div key={deliv} className="flex items-start gap-2.5">
												<Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
												<span className="text-xs sm:text-sm text-zinc-200">
													{deliv}
												</span>
											</div>
										))}
									</div>
								</div>

								<div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
									<Link
										href="#contato"
										className="text-xs sm:text-sm text-yellow-400 hover:text-yellow-300 font-semibold transition-colors flex items-center gap-1.5"
									>
										<span>Iniciar este projeto</span>
										<ArrowRight className="w-3.5 h-3.5" />
									</Link>
								</div>
							</div>
						</BlurFade>
					))}
				</div>

				{/* Tech Stack Chips Bar */}
				<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
						<div>
							<h4 className="text-xl font-bold text-white">
								Tecnologias que domino
							</h4>
							<p className="text-sm sm:text-base text-zinc-300 mt-1">
								Stack moderna para garantir alta velocidade e facilidade de manutenção.
							</p>
						</div>

						<div className="flex items-center gap-5 text-xs sm:text-sm text-zinc-300 font-medium">
							<span className="flex items-center gap-2">
								<Check className="w-4 h-4 text-emerald-400" />
								Código 100% seu
							</span>
							<span className="flex items-center gap-2">
								<Check className="w-4 h-4 text-emerald-400" />
								Garantia inclusa
							</span>
						</div>
					</div>

					<div className="flex flex-wrap gap-2.5">
						{technologies.map((tech) => (
							<span
								key={tech.name}
								className={`text-xs sm:text-sm px-4 py-2 rounded-xl border transition-colors font-medium ${tech.color}`}
							>
								{tech.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
