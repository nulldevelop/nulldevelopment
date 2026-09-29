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
						<span className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">
							Soluções & Tecnologias
						</span>
						<h2 className="text-3xl sm:text-4xl font-sentient font-bold text-white mt-1.5">
							Como posso ajudar seu projeto
						</h2>
					</div>
					<Link
						href="#contato"
						className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-yellow-400 hover:text-yellow-300 transition-colors"
					>
						<span>Pedir orçamento personalizado</span>
						<ArrowRight className="w-3.5 h-3.5" />
					</Link>
				</div>

				{/* 3 Clean Service Pillars */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
					{services.map((item, idx) => (
						<BlurFade key={item.title} delay={0.08 * (idx + 1)} inView>
							<div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-yellow-500/30 transition-all duration-200 h-full flex flex-col justify-between">
								<div>
									<div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-4">
										<item.icon className="w-5 h-5" />
									</div>
									<h3 className="font-sentient text-lg font-semibold text-white mb-2">
										{item.title}
									</h3>
									<p className="font-mono text-xs text-zinc-400 leading-relaxed mb-4">
										{item.description}
									</p>

									{/* Deliverables */}
									<div className="space-y-1.5 pt-3 border-t border-white/5">
										<span className="font-mono text-[10px] uppercase tracking-wider text-yellow-400/90 font-medium block mb-1">
											O que está incluso:
										</span>
										{item.deliverables.map((deliv) => (
											<div key={deliv} className="flex items-start gap-2">
												<Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
												<span className="font-mono text-[11px] text-zinc-300">
													{deliv}
												</span>
											</div>
										))}
									</div>
								</div>

								<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
									<Link
										href="#contato"
										className="font-mono text-xs text-yellow-400 hover:text-yellow-300 font-medium transition-colors flex items-center gap-1.5"
									>
										<span>Iniciar este projeto</span>
										<ArrowRight className="w-3 h-3" />
									</Link>
								</div>
							</div>
						</BlurFade>
					))}
				</div>

				{/* Tech Stack Chips Bar */}
				<div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-6 sm:p-8">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
						<div>
							<h4 className="font-sentient text-lg font-medium text-white">
								Tecnologias que domino
							</h4>
							<p className="font-mono text-xs text-zinc-400 mt-0.5">
								Stack moderna para garantir alta velocidade e facilidade de manutenção.
							</p>
						</div>

						<div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
							<span className="flex items-center gap-1.5">
								<Check className="w-3.5 h-3.5 text-emerald-400" />
								Código 100% seu
							</span>
							<span className="flex items-center gap-1.5">
								<Check className="w-3.5 h-3.5 text-emerald-400" />
								Garantia inclusa
							</span>
						</div>
					</div>

					<div className="flex flex-wrap gap-2.5">
						{technologies.map((tech) => (
							<span
								key={tech.name}
								className={`font-mono text-xs px-3.5 py-1.5 rounded-xl border transition-colors ${tech.color}`}
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
