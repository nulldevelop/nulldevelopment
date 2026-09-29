'use client'

import { Calendar, CheckCircle2 } from 'lucide-react'
import { BlurFade } from './ui/blur-fade'

const experiences = [
	{
		company: 'Prefeitura Municipal de Campina Grande do Sul',
		role: 'Desenvolvedor Full Stack & Arquiteto de Software',
		period: '2025 / Presente',
		badge: 'Setor Público',
		badgeColor: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10',
		description:
			'Liderança técnica e desenvolvimento integral de sistemas corporativos governamentais em produção:',
		highlights: [
			'FootEasy: Gestão completa de torneios com 770+ associados, 24 times e 693 atletas cadastrados.',
			'SIRA: Fiscalização de contratos públicos com relatórios PDF assinados digitalmente, QR Code e SSO Azure AD.',
			'BookEase: Plataforma municipal de acervo com classificação DDC, controle de empréstimos e relatórios analíticos.',
		],
		stack: ['Next.js 16', 'TypeScript', 'Prisma ORM', 'MySQL', 'Azure AD', 'Tailwind CSS'],
	},
	{
		company: 'Engenharia Web Freelance & Consultoria',
		role: 'Desenvolvedor Full Stack Independente',
		period: '2023 / Presente',
		badge: 'Freelance',
		badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
		description:
			'Desenvolvimento ponta a ponta de soluções digitais sob medida para empresas e empreendedores:',
		highlights: [
			'Landing pages de alta conversão com Lighthouse 95+ e integração instantânea ao WhatsApp.',
			'Aplicações SaaS e painéis administrativos com autenticação segura e relatórios dinâmicos.',
			'Integrações com gateways de pagamento (Stripe, Mercado Pago e PIX automatizado).',
		],
		stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Neon DB', 'Docker'],
	},
]

export function Experience() {
	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="experiencia">
			<div className="max-w-4xl mx-auto w-full">
				{/* Section Header */}
				<div className="mb-12 border-b border-white/10 pb-6">
					<span className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">
						Carreira
					</span>
					<h2 className="text-3xl sm:text-4xl font-sentient font-bold text-white mt-1.5">
						Trajetória & Experiência
					</h2>
				</div>

				{/* Minimal Linear Timeline */}
				<div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-px before:bg-white/10">
					{experiences.map((exp, index) => (
						<BlurFade key={exp.company} delay={0.1 * (index + 1)} inView>
							<div className="relative pl-9 sm:pl-12 group">
								{/* Timeline Dot */}
								<div className="absolute left-1.5 sm:left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-yellow-400 bg-black group-hover:scale-125 transition-transform" />

								{/* Header Info */}
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
									<div className="flex items-center gap-2.5 flex-wrap">
										<h3 className="font-sentient text-xl font-semibold text-white">
											{exp.role}
										</h3>
										<span className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${exp.badgeColor}`}>
											{exp.badge}
										</span>
									</div>
									<span className="font-mono text-xs text-zinc-500 shrink-0">
										{exp.period}
									</span>
								</div>

								<p className="font-mono text-xs text-yellow-400/90 font-medium mb-3">
									{exp.company}
								</p>

								<p className="font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
									{exp.description}
								</p>

								{/* Highlights List */}
								<ul className="space-y-2 mb-4">
									{exp.highlights.map((h) => (
										<li key={h} className="flex items-start gap-2 font-mono text-xs text-zinc-300">
											<span className="text-yellow-400 mt-0.5">•</span>
											<span>{h}</span>
										</li>
									))}
								</ul>

								{/* Tech Tags */}
								<div className="flex flex-wrap gap-1.5 pt-2">
									{exp.stack.map((t) => (
										<span
											key={t}
											className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	)
}
