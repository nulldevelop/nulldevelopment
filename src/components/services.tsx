'use client'

import {
	ArrowRight,
	Check,
	Clock,
	Code2,
	Compass,
	Cpu,
	Globe,
	Layers,
	LineChart,
	MessageCircle,
	Rocket,
	ShieldCheck,
	Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { ShimmerButton } from './ui/shimmer-button'
import { TextAnimate } from './ui/text-animate'

const services = [
	{
		title: 'SaaS & Aplicações Web Completas',
		badge: 'Mais Procurado',
		description:
			'Desenvolvimento integral do seu produto digital ou plataforma interna, da modelagem do banco à interface do usuário.',
		deliverables: [
			'Autenticação segura (Email, Google, Azure SSO)',
			'Painel administrativo multi-tenant com níveis de acesso (RBAC)',
			'Integração com meios de pagamento (Stripe, Mercado Pago, PIX)',
			'Banco de dados escalável (PostgreSQL / MySQL)',
			'Deploy automatizado e monitoramento de erros',
		],
		idealFor: 'Startups, empresas que precisam automatizar processos e fundadores criando MVPs.',
		icon: Cpu,
	},
	{
		title: 'Landing Pages de Alta Conversão',
		badge: 'Entrega Rápida',
		description:
			'Páginas modernas, ultra rápidas e responsivas, pensadas estrategicamente para transformar tráfego em vendas ou leads qualificados.',
		deliverables: [
			'Design exclusivo focado no seu público e nicho',
			'Pontuação máxima de velocidade (Lighthouse 95+)',
			'Otimização completa de SEO On-Page para o Google',
			'Integração direta com WhatsApp, CRM e Webhooks',
			'Copywriting e hierarquia visual persuasiva',
		],
		idealFor: 'Lançamentos, infoprodutos, consultorias, escritórios e prestadores de serviço.',
		icon: Globe,
	},
	{
		title: 'Dashboards & Painéis Administrativos',
		badge: 'Dados & Gestão',
		description:
			'Sistemas sob medida para visualizar métricas, gerenciar operações, emitir relatórios e tomar decisões baseadas em dados.',
		deliverables: [
			'Gráficos dinâmicos e filtros analíticos avançados',
			'Exportação de relatórios em PDF com assinatura e QR Code',
			'Planilhas e exportação em CSV/Excel',
			'Controle de permissões e log de auditoria',
			'Responsividade completa para celular e desktop',
		],
		idealFor: 'Empresas que desejam substituir planilhas manuais por sistemas corporativos seguros.',
		icon: LineChart,
	},
	{
		title: 'Consultoria Técnica & Otimização',
		badge: 'Performance',
		description:
			'Diagnóstico e solução para aplicações lentas, código desorganizado, migração para Next.js ou integração com APIs externas.',
		deliverables: [
			'Auditoria de performance e Core Web Vitals',
			'Refatoração para TypeScript e Next.js App Router',
			'Segurança de endpoints e prevenção contra vulnerabilidades',
			'Documentação técnica e boas práticas para seu time',
			'Redução de custos de servidores e cloud',
		],
		idealFor: 'Empresas com sistemas legados ou produtos que precisam de escala imediata.',
		icon: Rocket,
	},
]

const steps = [
	{
		step: '01',
		title: 'Briefing & Escopo',
		description:
			'Conversamos sobre seus objetivos, funcionalidades desejadas e prazos. Em até 24h você recebe uma proposta clara com escopo e valor fechado.',
	},
	{
		step: '02',
		title: 'Arquitetura & Design',
		description:
			'Definição da estrutura de dados, fluxo de telas e aprovação visual antes de codificar, garantindo que tudo atenda à sua expectativa.',
	},
	{
		step: '03',
		title: 'Desenvolvimento Ágil',
		description:
			'Desenvolvimento modular com link de teste privado. Você acompanha o progresso semana a semana e valida cada funcionalidade.',
	},
	{
		step: '04',
		title: 'Deploy & Garantia',
		description:
			'Colocamos tudo no ar no seu domínio, transferimos 100% do código no GitHub e ofereço 30 dias de suporte e garantia inclusos.',
	},
]

export function Services() {
	return (
		<section
			className="flex flex-col justify-center relative py-24 z-10"
			id="servicos"
		>
			<div className="max-w-6xl mx-auto px-4 w-full">
				{/* Section Header */}
				<div className="text-center relative mb-16">
					<BlurFade inView>
						<div className="flex justify-center mb-4">
							<Pill className="w-full md:w-56">Serviços Freelance</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h2"
						by="word"
						animation="blurInUp"
						className="text-3xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance"
						once
					>
						Como posso ajudar seu negócio
					</TextAnimate>
					<BlurFade delay={0.2} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-2xl mx-auto">
							Soluções sob medida para quem precisa de um desenvolvedor experiente, com comunicação ágil e compromisso de ponta a ponta.
						</p>
					</BlurFade>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
					{services.map((service, index) => (
						<BlurFade key={service.title} delay={0.15 * (index + 1)} inView>
							<MagicCard
								className="p-7 sm:p-9 h-full flex flex-col justify-between rounded-3xl bg-zinc-950 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
								gradientColor="#1a1a1a"
							>
								<div>
									<div className="flex items-center justify-between gap-3 mb-5">
										<div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
											<service.icon size={24} />
										</div>
										<span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 font-medium">
											{service.badge}
										</span>
									</div>

									<h3 className="font-sentient text-2xl font-semibold text-foreground mb-3">
										{service.title}
									</h3>
									<p className="font-mono text-sm text-foreground/60 leading-relaxed mb-6">
										{service.description}
									</p>

									<div className="space-y-2.5 mb-6">
										<p className="font-mono text-[11px] uppercase tracking-widest text-foreground/40 font-semibold">
											O que está incluso:
										</p>
										{service.deliverables.map((item) => (
											<div
												key={item}
												className="flex items-start gap-2.5 font-mono text-xs text-foreground/80"
											>
												<Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
												<span>{item}</span>
											</div>
										))}
									</div>
								</div>

								<div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
									<div className="font-mono text-[11px] text-foreground/50">
										<span className="text-yellow-400 font-semibold">Ideal para: </span>
										{service.idealFor}
									</div>

									<Link
										href="#contato"
										className="shrink-0 inline-flex items-center gap-1.5 font-mono text-xs uppercase text-yellow-400 hover:text-yellow-300 font-medium group"
									>
										<span>Contratar</span>
										<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
									</Link>
								</div>
							</MagicCard>
						</BlurFade>
					))}
				</div>

				{/* 4-Step Process Section */}
				<div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<span className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">
							Metodologia Transparente
						</span>
						<h3 className="font-sentient text-2xl sm:text-4xl text-foreground mt-2">
							Como funciona trabalhar comigo
						</h3>
						<p className="font-mono text-sm text-foreground/60 mt-3">
							Sem surpresas ou atrasos: um fluxo de trabalho estruturado para que você tenha controle do início ao fim.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{steps.map((st, i) => (
							<div
								key={st.step}
								className="relative p-6 rounded-2xl border border-white/5 bg-zinc-900/50 flex flex-col justify-between"
							>
								<div>
									<span className="font-sentient text-4xl font-bold text-yellow-500/30 block mb-4">
										{st.step}
									</span>
									<h4 className="font-sentient text-lg text-foreground font-semibold mb-2">
										{st.title}
									</h4>
									<p className="font-mono text-xs text-foreground/60 leading-relaxed">
										{st.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Banner CTA inside Services */}
					<div className="mt-12 p-6 sm:p-8 rounded-2xl border border-yellow-500/20 bg-linear-to-r from-yellow-500/10 via-amber-500/5 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
						<div>
							<h4 className="font-sentient text-xl sm:text-2xl text-foreground font-semibold">
								Tem uma ideia ou projeto em mente?
							</h4>
							<p className="font-mono text-xs sm:text-sm text-foreground/60 mt-1">
								Vamos conversar hoje mesmo e definir o melhor caminho para o seu produto.
							</p>
						</div>

						<div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
							<Link href="#contato" className="w-full sm:w-auto">
								<ShimmerButton
									className="w-full sm:w-auto font-mono uppercase text-xs sm:text-sm h-11 px-6"
									shimmerColor="#EBB800"
								>
									Solicitar Orçamento
								</ShimmerButton>
							</Link>
							<a
								href="https://wa.me/5541991798306?text=Ol%C3%A1%20Pedro!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20um%20projeto."
								target="_blank"
								rel="noopener noreferrer"
								className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/50 transition-colors"
								aria-label="Falar no WhatsApp"
							>
								<MessageCircle className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
