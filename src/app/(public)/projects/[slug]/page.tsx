import {
	ArrowLeft,
	ArrowUpRight,
	Calendar,
	CheckCircle2,
	ExternalLink,
	Globe,
	Layers,
	MessageCircle,
	ShieldCheck,
	Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { HomeClient } from '@/components/home-client'
import { BlurFade } from '@/components/ui/blur-fade'
import { GalleryLightbox } from '@/components/ui/gallery-lightbox'
import { getProjectBySlug, curatedProjects } from '@/lib/get-projetos'

export async function generateStaticParams() {
	return curatedProjects.map((p) => ({
		slug: p.slug,
	}))
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const project = await getProjectBySlug(slug)

	if (!project) {
		notFound()
	}

	const isLive = !!project.link
	const badge = project.statusBadge || (isLive ? 'Ao Vivo' : 'Case Study')

	const whatsappMessage = encodeURIComponent(
		`Olá Pedro! Vi o case do ${project.title} no seu portfólio e gostaria de um projeto similar para o meu negócio.`
	)

	return (
		<HomeClient>
			<main className="min-h-screen w-full relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				{/* Top Navigation & Breadcrumbs */}
				<BlurFade delay={0.05}>
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
						<Link
							href="/#portfolio"
							className="inline-flex items-center gap-2 font-mono text-xs uppercase text-zinc-400 hover:text-white transition-colors group"
						>
							<ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
							<span>Voltar ao Portfólio</span>
						</Link>

						<div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
							<span>Cases</span>
							<span>/</span>
							<span className="text-zinc-300 font-medium">{project.title}</span>
						</div>
					</div>
				</BlurFade>

				{/* Title & Quick Actions Header */}
				<BlurFade delay={0.1}>
					<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
						<div className="max-w-3xl">
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-mono text-xs uppercase mb-3">
								<span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
								<span>{badge}</span>
							</div>

							<h1 className="text-3xl sm:text-5xl lg:text-6xl font-sentient font-bold text-white tracking-tight leading-[1.1]">
								{project.title}
							</h1>
							<p className="font-mono text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed max-w-2xl">
								{project.shortDescription}
							</p>
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3 shrink-0">
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-mono text-xs uppercase px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold transition-all shadow-md"
								>
									<span>Ver Projeto Ao Vivo</span>
									<ExternalLink className="w-3.5 h-3.5" />
								</a>
							)}

							<a
								href={`https://wa.me/5541991798306?text=${whatsappMessage}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 font-mono text-xs uppercase px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
							>
								<MessageCircle className="w-4 h-4" />
								<span className="hidden sm:inline">Projeto Similar</span>
							</a>
						</div>
					</div>
				</BlurFade>

				{/* Big Hero Banner Image */}
				<BlurFade delay={0.15}>
					<div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 mb-10 group shadow-2xl">
						<Image
							src={project.image}
							alt={project.title}
							fill
							priority
							sizes="(max-width: 1200px) 100vw, 1200px"
							className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-40 pointer-events-none" />
					</div>
				</BlurFade>

				{/* Meta Strip Bar */}
				<BlurFade delay={0.2}>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xs mb-10 font-mono text-xs">
						<div>
							<span className="text-zinc-500 uppercase text-[10px] tracking-wider block mb-1">
								Minha Atuação
							</span>
							<span className="text-zinc-200 font-medium">Full Stack & Arquiteto</span>
						</div>

						<div>
							<span className="text-zinc-500 uppercase text-[10px] tracking-wider block mb-1">
								Tipo de Solução
							</span>
							<span className="text-zinc-200 font-medium">
								{project.category === 'saas'
									? 'Plataforma SaaS'
									: project.category === 'governamental'
									? 'Setor Público'
									: 'Landing Page & Web'}
							</span>
						</div>

						<div>
							<span className="text-zinc-500 uppercase text-[10px] tracking-wider block mb-1">
								Status
							</span>
							<span className="text-emerald-400 font-medium flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
								{badge}
							</span>
						</div>

						<div>
							<span className="text-zinc-500 uppercase text-[10px] tracking-wider block mb-1">
								Código & Acesso
							</span>
							<span className="text-zinc-300">
								{project.link ? (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-yellow-400 hover:underline flex items-center gap-1"
									>
										<span>Online</span>
										<ArrowUpRight className="w-3 h-3" />
									</a>
								) : (
									'Privado / Corporativo'
								)}
							</span>
						</div>
					</div>
				</BlurFade>

				{/* Content Grid: Case Study Markdown + Gallery */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
					{/* Left / Main Column: Markdown Content */}
					<div className={project.images.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}>
						<BlurFade delay={0.25}>
							<div className="rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xs p-6 sm:p-8 space-y-6">
								{/* Tech Stack Chips inside Content */}
								{project.stack.length > 0 && (
									<div>
										<h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
											Tecnologias Utilizadas:
										</h3>
										<div className="flex flex-wrap gap-2">
											{project.stack.map((tech) => (
												<span
													key={tech}
													className="font-mono text-xs px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-zinc-300"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}

								<div className="h-px bg-white/10" />

								{/* Formatted Markdown Body */}
								<div className="prose prose-invert max-w-none">
									<ReactMarkdown
										components={{
											h2: ({ children }) => (
												<h2 className="text-xl sm:text-2xl font-sentient font-bold text-white mt-8 mb-3 first:mt-0">
													{children}
												</h2>
											),
											h3: ({ children }) => (
												<h3 className="text-lg sm:text-xl font-sentient font-semibold text-yellow-400 mt-6 mb-2">
													{children}
												</h3>
											),
											p: ({ children }) => (
												<p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
													{children}
												</p>
											),
											strong: ({ children }) => (
												<strong className="text-white font-semibold">{children}</strong>
											),
											ul: ({ children }) => (
												<ul className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 space-y-2 pl-4">
													{children}
												</ul>
											),
											li: ({ children }) => (
												<li className="before:content-['•'] before:mr-2 before:text-yellow-400 flex items-start">
													<span>{children}</span>
												</li>
											),
											code: ({ children }) => (
												<code className="bg-white/10 text-yellow-300 px-1.5 py-0.5 rounded text-xs font-mono">
													{children}
												</code>
											),
										}}
									>
										{project.content}
									</ReactMarkdown>
								</div>
							</div>
						</BlurFade>
					</div>

					{/* Right Column: Visual Gallery Lightbox (if any) */}
					{project.images.length > 0 && (
						<div className="lg:col-span-4 space-y-6">
							<BlurFade delay={0.3}>
								<div className="rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xs p-6">
									<h3 className="font-sentient text-base font-semibold text-white mb-2">
										Telas do Projeto
									</h3>
									<p className="font-mono text-xs text-zinc-400 mb-4">
										Clique em qualquer captura para ampliar em alta resolução:
									</p>
									<GalleryLightbox images={project.images} title={project.title} />
								</div>
							</BlurFade>

							{/* Direct Hire Box on Sidebar */}
							<BlurFade delay={0.35}>
								<div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
									<h4 className="font-sentient text-base font-semibold text-emerald-200 mb-1.5">
										Precisa de algo semelhante?
									</h4>
									<p className="font-mono text-xs text-emerald-300/80 mb-4">
										Posso desenvolver uma solução com essa mesma qualidade para sua empresa.
									</p>
									<a
										href={`https://wa.me/5541991798306?text=${whatsappMessage}`}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs uppercase px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors"
									>
										<MessageCircle className="w-4 h-4" />
										<span>Falar no WhatsApp</span>
									</a>
								</div>
							</BlurFade>
						</div>
					)}
				</div>

				{/* Bottom Bar: Back & Next Project Navigation */}
				<div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
					<Link
						href="/#portfolio"
						className="hover:text-white transition-colors flex items-center gap-1.5"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Voltar ao Portfólio</span>
					</Link>

					<a
						href={`https://wa.me/5541991798306?text=${whatsappMessage}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1.5 font-medium"
					>
						<span>Solicitar Orçamento</span>
						<ArrowUpRight className="w-4 h-4" />
					</a>
				</div>
			</main>
		</HomeClient>
	)
}
