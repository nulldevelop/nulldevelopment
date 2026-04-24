import { ChevronLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { HomeClient } from '@/components/home-client'
import { Pill } from '@/components/pill'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { GalleryLightbox } from '@/components/ui/gallery-lightbox'

async function getApiProject(slug: string) {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	const res = await fetch(`${baseUrl}/api/projects?slug=${slug}`, {
		cache: 'no-store',
	}).catch((err) => {
		console.error('Failed to fetch project:', err)
		return null
	})
	if (!res || !res.ok) {
		return null
	}
	return res.json()
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const project = await getApiProject(slug)

	if (!project) {
		notFound()
	}

	return (
		<HomeClient>
			<main className="min-h-screen w-full relative z-10 p-4 lg:p-8 pt-20 lg:pt-24 flex flex-col gap-6 max-w-7xl mx-auto">
				{/* Header */}
				<BlurFade>
					<div className="flex items-center justify-between">
						<Link href="/#portfolio">
							<Button
								variant="ghost"
								className="group hover:bg-white/5 text-foreground/50 hover:text-foreground"
							>
								<ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
								Voltar ao Portfólio
							</Button>
						</Link>
						<Pill className="bg-primary/10 border-primary/20 text-primary uppercase text-[10px] tracking-widest font-mono hidden sm:flex">
							Case Study
						</Pill>
					</div>
				</BlurFade>

				{/* Hero Image */}
				<BlurFade delay={0.1}>
					<div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 group">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
							priority
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
						<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
							<h1 className="font-sentient font-bold text-3xl lg:text-5xl text-white leading-tight max-w-2xl">
								{project.title}
							</h1>
							{project.link && (
								<Link href={project.link} target="_blank" rel="noopener noreferrer">
									<Button className="rounded-2xl h-11 bg-white text-black hover:bg-white/90 font-mono shrink-0">
										Ver Live <ExternalLink className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							)}
						</div>
					</div>
				</BlurFade>

				{/* Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:items-stretch">
					{/* Coluna Esquerda: Sobre + Galeria */}
					<div className="lg:col-span-5 flex flex-col gap-4 lg:h-full">
						<BlurFade delay={0.2}>
							<div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-white/10 p-6 lg:p-8 flex flex-col gap-6">
								<div>
									<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
										Sobre o Projeto
									</p>
									<p className="text-sm lg:text-base text-foreground/70 font-mono leading-relaxed">
										{project.shortDescription}
									</p>
								</div>
								{project.stack.length > 0 && (
									<div>
										<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
											Stack
										</p>
										<div className="flex flex-wrap gap-2">
											{project.stack.map((tech) => (
												<span
													key={tech}
													className="text-xs uppercase tracking-wide font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-foreground/70"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</BlurFade>

						{project.images.length > 0 && (
							<BlurFade delay={0.35} className="flex-1 flex flex-col min-h-0">
								<div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-white/10 p-6 lg:p-8 flex-1 flex flex-col min-h-0">
									<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4 shrink-0">
										Galeria
									</p>
									<GalleryLightbox images={project.images} title={project.title} />
								</div>
							</BlurFade>
						)}
					</div>

					{/* Coluna Direita: Detalhes */}
					<BlurFade delay={0.3} className="lg:col-span-7">
						<div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-white/10 p-6 lg:p-8 h-full flex flex-col gap-4">
							<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
								Detalhes
							</p>
							<ReactMarkdown
								components={{
									h2: ({ children }) => (
										<h2 className="text-base font-semibold text-white/90 font-sentient mt-5 mb-2 first:mt-0">
											{children}
										</h2>
									),
									p: ({ children }) => (
										<p className="font-mono text-sm text-foreground/60 leading-relaxed mb-3">
											{children}
										</p>
									),
									strong: ({ children }) => (
										<strong className="text-white/80 font-semibold">
											{children}
										</strong>
									),
									ul: ({ children }) => (
										<ul className="font-mono text-sm text-foreground/60 leading-relaxed mb-3 space-y-1 pl-4">
											{children}
										</ul>
									),
									li: ({ children }) => (
										<li className="before:content-['—'] before:mr-2 before:text-yellow-500/60">
											{children}
										</li>
									),
									code: ({ children }) => (
										<code className="bg-white/5 text-yellow-400/80 px-1.5 py-0.5 rounded text-xs font-mono">
											{children}
										</code>
									),
								}}
							>
								{project.content}
							</ReactMarkdown>
						</div>
					</BlurFade>
				</div>
			</main>
		</HomeClient>
	)
}
