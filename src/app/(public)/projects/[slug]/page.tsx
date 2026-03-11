import { getProjectBySlug } from '@/lib/get-projetos'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Pill } from '@/components/pill'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HomeClient } from '@/components/home-client'

export default async function ProjectPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = await getProjectBySlug(slug)

	if (!project) {
		notFound()
	}

	return (
		<HomeClient>
			<main className="h-screen w-full overflow-hidden relative z-10 p-4 lg:p-8 pt-20 lg:pt-24 flex flex-col gap-4">
				{/* Header/Back - Linha 0 */}
				<div className="flex items-center justify-between h-12">
					<BlurFade>
						<Link href="/#portfolio">
							<Button variant="ghost" className="group hover:bg-white/5 text-foreground/50 hover:text-foreground">
								<ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
								Voltar ao Portfólio
							</Button>
						</Link>
					</BlurFade>
					<BlurFade delay={0.1}>
						<Pill className="bg-primary/10 border-primary/20 text-primary uppercase text-[10px] tracking-widest font-mono">
							Case Study: {project.title}
						</Pill>
					</BlurFade>
				</div>

				{/* Grid Principal - Ocupa o resto da tela */}
				<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 grid-rows-6 lg:grid-rows-4 gap-4 overflow-hidden">
					
					{/* INFO PRINCIPAL - Top Left (4 col, 2 row) */}
					<div className="lg:col-span-4 lg:row-span-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 lg:p-10 flex flex-col justify-between">
						<div className="space-y-4">
							<TextAnimate
								as="h1"
								by="word"
								animation="blurInUp"
								className="text-4xl lg:text-5xl font-sentient leading-tight"
								once
							>
								{project.title}
							</TextAnimate>
							<p className="text-sm lg:text-base text-foreground/60 font-mono leading-relaxed line-clamp-4 lg:line-clamp-6">
								{project.shortDescription}
							</p>
						</div>
						
						<div className="space-y-4 pt-4">
							<div className="flex flex-wrap gap-2">
								{project.stack.slice(0, 4).map((tech) => (
									<span key={tech} className="text-[9px] uppercase tracking-tighter font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-md">
										{tech}
									</span>
								))}
							</div>
							{project.link && (
								<Link href={project.link} target="_blank" className="block">
									<Button className="w-full rounded-2xl h-12 bg-white text-black hover:bg-white/90 font-mono transition-transform hover:scale-[1.02]">
										Visualizar Live <ExternalLink className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							)}
						</div>
					</div>

					{/* HERO IMAGE - Top Right (8 col, 2 row) */}
					<div className="lg:col-span-8 lg:row-span-2 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden group">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						<div className="absolute bottom-6 left-6 font-mono text-[10px] opacity-40 uppercase tracking-[0.3em]">
							Primary Interface View
						</div>
					</div>

					{/* ABOUT CONTENT - Bottom Left (7 col, 2 row) */}
					<div className="lg:col-span-7 lg:row-span-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 lg:p-8 overflow-hidden flex flex-col">
						<h3 className="text-xl font-sentient mb-4 flex items-center gap-2">
							<span className="h-1 w-1 bg-primary rounded-full" />
							Sobre o Projeto
						</h3>
						<div className="flex-1 overflow-y-auto custom-scrollbar font-mono text-xs lg:text-sm text-foreground/50 leading-relaxed pr-2">
							{project.content}
						</div>
					</div>

					{/* GALLERY - Bottom Right (5 col, 2 row) */}
					<div className="lg:col-span-5 lg:row-span-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col gap-4">
						<h3 className="text-lg font-sentient flex items-center gap-2">
							<span className="h-1 w-1 bg-primary rounded-full" />
							Galeria
						</h3>
						<div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
							{project.images.slice(0, 2).map((img, index) => (
								<div key={index} className="relative h-full w-full rounded-2xl border border-white/5 overflow-hidden group">
									<Image
										src={img}
										alt="gallery"
										fill
										className="object-cover transition-transform group-hover:scale-110"
									/>
								</div>
							))}
							{project.images.length === 0 && (
								<div className="col-span-2 flex items-center justify-center border border-dashed border-white/10 rounded-2xl opacity-20 font-mono text-[10px] uppercase">
									Nenhuma imagem adicional
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</HomeClient>
	)
}
