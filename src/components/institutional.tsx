import { Lock, Shield } from 'lucide-react'
import Image from 'next/image'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { TextAnimate } from './ui/text-animate'

type InstitutionalProject = {
	name: string
	description: string
	role: string
	stack: string[]
	status: 'Concluído' | 'Em uso' | 'Em desenvolvimento'
	period: string
	institution: string
}

const projects: InstitutionalProject[] = [
	{
		name: 'FootEasy: Gestão de Campeonatos',
		description:
			'Sistema web para gerenciamento de competições esportivas, em produção com 772 associados, 24 times e 693 atletas cadastrados.',
		role: 'Desenvolvedor Full Stack',
		stack: ['Next.js', 'TypeScript', 'Prisma ORM', 'MySQL', 'Tailwind CSS'],
		status: 'Em uso',
		period: 'Jan 2026 / presente',
		institution: 'Prefeitura de Campina Grande do Sul',
	},
	{
		name: 'SIRA: Sistema Integrado de Relatórios Administrativos',
		description:
			'Fiscalização de contratos públicos com geração de relatórios em PDF assinados digitalmente, QR Code para verificação pública e integração com o Portal da Transparência via SSO Azure AD.',
		role: 'Desenvolvedor Full Stack',
		stack: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'MySQL 8', 'React 19', 'Tailwind CSS 4'],
		status: 'Em uso',
		period: 'Nov 2025 / presente',
		institution: 'Prefeitura de Campina Grande do Sul',
	},
	{
		name: 'BookEase: Sistema de Gestão de Bibliotecas',
		description:
			'Plataforma SaaS multi-tenant para gestão de bibliotecas com controle de acervo, empréstimos, classificação DDC e relatórios em PDF. Autenticação via Azure AD.',
		role: 'Desenvolvedor Full Stack',
		stack: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'MySQL 8', 'Better Auth', 'Chart.js', 'Vitest'],
		status: 'Em uso',
		period: 'Jul 2025 / Nov 2025',
		institution: 'Prefeitura de Campina Grande do Sul',
	},
]

const statusColor = {
	'Em uso': 'text-green-400 bg-green-400/10 border-green-400/20',
	'Concluído': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
	'Em desenvolvimento': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
}

export function Institutional() {
	return (
		<div
			className="flex flex-col justify-center relative py-20 z-10"
			id="institucional"
		>
			<div className="text-center relative mx-2 mb-16">
				<BlurFade inView>
					<Pill className="w-full md:w-80">
						Experiência Institucional
					</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-6"
					once
				>
					Sistemas desenvolvidos para o setor público
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-lg mx-auto">
						Projetos criados durante minha atuação como servidor na prefeitura,
						soluções que otimizaram processos internos e melhoraram a{' '}
						<span className="text-foreground/90">eficiência operacional</span> da
						instituição.
					</p>
				</BlurFade>

				<BlurFade delay={0.45} inView>
					<div className="inline-flex items-start gap-2.5 mt-8 px-4 py-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 max-w-xl mx-auto text-left">
						<Shield className="size-4 text-yellow-500/70 mt-0.5 shrink-0" />
						<p className="font-mono text-xs text-foreground/50 leading-relaxed">
							Os sistemas listados foram desenvolvidos no exercício do cargo público
							e são de{' '}
							<span className="text-foreground/70">
								propriedade intelectual da instituição
							</span>
							. Nenhum código-fonte, dado ou acesso é compartilhado: apenas
							a descrição da experiência técnica adquirida.
						</p>
					</div>
				</BlurFade>
			</div>

			<div className="max-w-6xl mx-auto px-4 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<BlurFade
							key={project.name}
							delay={0.1 * (index + 1)}
							inView
						>
							<MagicCard
								className="p-8 h-full flex flex-col justify-between rounded-3xl bg-zinc-950 border border-foreground/15 hover:border-foreground/25 transition-colors"
								gradientColor="#1a1a1a"
							>
								<div className="flex flex-col gap-6">
									<div className="flex items-center justify-between">
										<span
											className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${statusColor[project.status]}`}
										>
											{project.status}
										</span>
										<span className="font-mono text-xs text-foreground/30 flex items-center gap-1.5">
											<Lock size={11} />
											Código restrito
										</span>
									</div>

									<div>
										<h4 className="font-sentient text-2xl text-foreground/90 mb-1 leading-snug">
											{project.name}
										</h4>
										<p className="font-mono text-xs text-yellow-500/70 mb-3">
											{project.institution}
										</p>
										<p className="font-mono text-sm text-foreground/60 leading-relaxed">
											{project.description}
										</p>
									</div>

									<div className="flex flex-wrap gap-1.5">
										{project.stack.map((tech) => (
											<span
												key={tech}
												className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-foreground/10 bg-foreground/5 text-foreground/50"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="mt-8 pt-6 border-t border-foreground/10 flex items-center justify-between font-mono text-xs text-foreground/40">
									<span>{project.role}</span>
									<span>{project.period}</span>
								</div>
							</MagicCard>
						</BlurFade>
					))}
				</div>
			</div>
		</div>
	)
}
