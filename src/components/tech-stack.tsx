'use client'

import {
	Code,
	Database,
	Globe,
	Layout,
	Server,
	Settings,
	Terminal,
	Zap,
} from 'lucide-react'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { TextAnimate } from './ui/text-animate'

const categories = [
	{
		title: 'Frontend & UI Engineering',
		icon: Layout,
		description: 'Interfaces modernas, ultra responsivas e fluidas com foco em acessibilidade e máxima velocidade de renderização.',
		skills: [
			{ name: 'Next.js 16 (App Router)', level: 'Avançado' },
			{ name: 'React 19 & Hooks', level: 'Avançado' },
			{ name: 'TypeScript', level: 'Avançado' },
			{ name: 'Tailwind CSS 4', level: 'Avançado' },
			{ name: 'Motion (Framer)', level: 'Intermediário' },
			{ name: 'Radix UI & Shadcn', level: 'Avançado' },
		],
	},
	{
		title: 'Backend & Arquitetura',
		icon: Server,
		description: 'APIs robustas, regras de negócio seguras e arquitetura pensada para não virar débito técnico.',
		skills: [
			{ name: 'Node.js & Server Actions', level: 'Avançado' },
			{ name: 'APIs RESTful & Microserviços', level: 'Avançado' },
			{ name: 'Better Auth & RBAC', level: 'Avançado' },
			{ name: 'SSO Azure AD & OAuth', level: 'Intermediário' },
			{ name: 'Validação com Zod', level: 'Avançado' },
			{ name: 'Geração de PDFs & Relatórios', level: 'Avançado' },
		],
	},
	{
		title: 'Bancos de Dados & Armazenamento',
		icon: Database,
		description: 'Modelagem relacional otimizada, queries eficientes e proteção total da integridade dos dados.',
		skills: [
			{ name: 'PostgreSQL & Neon DB', level: 'Avançado' },
			{ name: 'Prisma ORM', level: 'Avançado' },
			{ name: 'MySQL & MariaDB', level: 'Avançado' },
			{ name: 'Migrations & Seeders', level: 'Avançado' },
			{ name: 'Modelagem Multi-Tenant', level: 'Avançado' },
			{ name: 'Redis (Cache)', level: 'Intermediário' },
		],
	},
	{
		title: 'DevOps, SEO & Qualidade',
		icon: Settings,
		description: 'Infraestrutura automatizada, deploy contínuo e páginas preparadas para rankear no topo do Google.',
		skills: [
			{ name: 'Docker & Containers', level: 'Intermediário' },
			{ name: 'Vercel & Railway Cloud', level: 'Avançado' },
			{ name: 'Git & GitHub Workflow', level: 'Avançado' },
			{ name: 'Core Web Vitals & SEO', level: 'Avançado' },
			{ name: 'Vitest & Testes Unitários', level: 'Intermediário' },
			{ name: 'Biome & Linting', level: 'Avançado' },
		],
	},
]

export function TechStack() {
	return (
		<section
			className="flex flex-col justify-center relative py-20 z-10"
			id="skills"
		>
			<div className="max-w-6xl mx-auto px-4 w-full">
				<div className="text-center relative mb-16">
					<BlurFade inView>
						<div className="flex justify-center mb-4">
							<Pill className="w-full md:w-48">Tecnologias & Skills</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h2"
						by="word"
						animation="blurInUp"
						className="text-3xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance"
						once
					>
						Stack moderna para produtos de ponta
					</TextAnimate>
					<BlurFade delay={0.2} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-2xl mx-auto">
							Trabalho com ferramentas líderes de mercado para garantir que seu projeto seja rápido hoje e fácil de evoluir amanhã.
						</p>
					</BlurFade>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{categories.map((cat, index) => (
						<BlurFade key={cat.title} delay={0.15 * (index + 1)} inView>
							<MagicCard
								className="p-6 sm:p-8 h-full rounded-3xl bg-zinc-950 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
								gradientColor="#1a1a1a"
							>
								<div className="flex flex-col h-full justify-between gap-6">
									<div>
										<div className="flex items-center gap-3.5 mb-3">
											<div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
												<cat.icon size={22} />
											</div>
											<h3 className="font-sentient text-xl font-medium text-foreground">
												{cat.title}
											</h3>
										</div>
										<p className="font-mono text-xs text-foreground/60 leading-relaxed mb-6">
											{cat.description}
										</p>
									</div>

									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{cat.skills.map((skill) => (
											<div
												key={skill.name}
												className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/60 border border-white/5 font-mono text-xs text-foreground/80 hover:border-yellow-500/20 transition-colors"
											>
												<span className="truncate">{skill.name}</span>
												<span className="text-[10px] text-yellow-500/80 font-mono shrink-0 ml-2">
													{skill.level}
												</span>
											</div>
										))}
									</div>
								</div>
							</MagicCard>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	)
}
