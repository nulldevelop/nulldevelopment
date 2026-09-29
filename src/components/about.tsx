import {
	Code2,
	Cpu,
	Layers,
	ShieldCheck,
	Sparkles,
	Zap,
	CheckCircle2,
	Clock,
	Users,
} from 'lucide-react'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { TextAnimate } from './ui/text-animate'

const differentiators = [
	{
		title: 'Full Stack End-to-End',
		description:
			'Domínio completo do fluxo: arquitetura de banco de dados, regras de negócio no back-end e interfaces ricas no front-end.',
		icon: Layers,
		badge: 'Arquitetura',
	},
	{
		title: 'Performance & SEO Real',
		description:
			'Aplicações ultrarrápidas construídas com Server Components, imagens otimizadas e pontuação alta no Core Web Vitals do Google.',
		icon: Zap,
		badge: 'Velocidade',
	},
	{
		title: 'Código 100% Seu',
		description:
			'Nada de ferramentas proprietárias ou lock-in. Ao final da entrega, todo o repositório, infraestrutura e documentação são transferidos.',
		icon: ShieldCheck,
		badge: 'Transparência',
	},
	{
		title: 'Comunicação Direta & Ágil',
		description:
			'Sem gerentes intermediários. Você fala direto comigo com alinhamentos rápidos, previews em tempo real e foco na resolução.',
		icon: Users,
		badge: 'Atendimento',
	},
]

const stackHighlights = [
	'Next.js 16 (App Router & Server Actions)',
	'TypeScript com tipagem estrita',
	'React 19 & Ecossistema Moderno',
	'PostgreSQL, MySQL & MariaDB',
	'Prisma ORM & Modelagem de Dados',
	'Tailwind CSS 4 & Motion UI',
	'Autenticação Segura (Better Auth, SSO Azure)',
	'Deploy & Cloud (Vercel, Docker, Neon)',
]

export function About() {
	return (
		<section
			className="flex flex-col justify-center relative py-24 z-10"
			id="sobre"
		>
			<div className="max-w-6xl mx-auto px-4 w-full">
				{/* Section Header */}
				<div className="text-center relative mb-16">
					<BlurFade inView>
						<div className="flex justify-center mb-4">
							<Pill className="w-full md:w-44">Sobre Mim</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h2"
						by="word"
						animation="blurInUp"
						className="text-3xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance"
						once
					>
						Engenharia de software focada em resultado
					</TextAnimate>
					<BlurFade delay={0.2} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-2xl mx-auto">
							Conheça minha trajetória, visão técnica e por que empresas e empreendedores confiam no meu trabalho para tirar ideias do papel.
						</p>
					</BlurFade>
				</div>

				{/* Bio & Story Card */}
				<BlurFade delay={0.3} inView>
					<div className="rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-md p-6 sm:p-10 md:p-12 mb-12 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-7 flex flex-col gap-5">
								<div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs uppercase tracking-widest">
									<Code2 className="w-4 h-4" />
									<span>Desenvolvedor Full Stack & Arquiteto</span>
								</div>

								<h3 className="font-sentient text-2xl sm:text-3xl text-foreground/95 leading-snug">
									Construo soluções completas, do primeiro commit até o produto em produção.
								</h3>

								<p className="font-mono text-sm text-foreground/70 leading-relaxed">
									Sou Pedro Henrique Andrade, desenvolvedor Full Stack com sólida experiência tanto no setor público (desenvolvendo sistemas governamentais críticos para centenas de servidores e atletas na Prefeitura de Campina Grande do Sul) quanto no mercado privado e freelance (criando SaaS, e-commerces e landing pages de alta conversão).
								</p>

								<p className="font-mono text-sm text-foreground/70 leading-relaxed">
									Minha abordagem combina <strong className="text-foreground">rigor técnico</strong> com <strong className="text-foreground">visão de produto</strong>: cada linha de código é escrita pensando em facilidade de manutenção, velocidade de carregamento e, acima de tudo, na experiência do usuário final e no ROI do seu investimento.
								</p>

								<div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-foreground/60">
									<div className="flex items-center gap-1.5">
										<Clock className="w-4 h-4 text-yellow-400" />
										<span>Entregas ágeis & pontuais</span>
									</div>
									<div className="flex items-center gap-1.5">
										<ShieldCheck className="w-4 h-4 text-yellow-400" />
										<span>Garantia pós-lançamento</span>
									</div>
									<div className="flex items-center gap-1.5">
										<CheckCircle2 className="w-4 h-4 text-yellow-400" />
										<span>Contrato & Nota Fiscal</span>
									</div>
								</div>
							</div>

							<div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
								<h4 className="font-sentient text-sm uppercase tracking-widest text-foreground/50 flex items-center justify-between">
									<span>Stack em Destaque</span>
									<Sparkles className="w-4 h-4 text-yellow-400" />
								</h4>

								<div className="space-y-2.5">
									{stackHighlights.map((tech) => (
										<div
											key={tech}
											className="flex items-center gap-2.5 font-mono text-xs text-foreground/80 bg-zinc-900/60 border border-white/5 rounded-xl px-3 py-2"
										>
											<div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
											<span>{tech}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</BlurFade>

				{/* Differentiators Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{differentiators.map((item, index) => (
						<BlurFade key={item.title} delay={0.1 * (index + 1)} inView>
							<MagicCard
								className="p-6 h-full flex flex-col justify-between rounded-3xl bg-zinc-950 border border-foreground/15 hover:border-yellow-500/30 transition-all duration-300"
								gradientColor="#1a1a1a"
							>
								<div className="flex flex-col gap-4">
									<div className="flex items-center justify-between">
										<div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
											<item.icon size={22} />
										</div>
										<span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/40">
											{item.badge}
										</span>
									</div>
									<div>
										<h4 className="font-sentient text-lg mb-2 text-foreground/95">
											{item.title}
										</h4>
										<p className="font-mono text-xs text-foreground/60 leading-relaxed">
											{item.description}
										</p>
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
