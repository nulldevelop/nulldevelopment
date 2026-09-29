'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { BlurFade } from './ui/blur-fade'
import { curatedProjects, type ProjectData } from '@/lib/projects-data'

interface PortfolioSectionProps {
	dbProjects: ProjectData[]
}

export function PortfolioSection({ dbProjects }: PortfolioSectionProps) {
	const [activeCategory, setActiveCategory] = useState<string>('all')

	const projectsToDisplay = dbProjects.length > 0 ? dbProjects : curatedProjects

	const filteredProjects = projectsToDisplay.filter((item) => {
		if (activeCategory === 'all') return true
		if (activeCategory === 'saas') return item.category === 'saas'
		if (activeCategory === 'governamental') return item.category === 'governamental'
		if (activeCategory === 'landing') return item.category === 'landing'
		return true
	})

	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="portfolio">
			<div className="max-w-6xl mx-auto w-full">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
					<div>
						<span className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">
							Cases Selecionados
						</span>
						<h2 className="text-3xl sm:text-4xl font-sentient font-bold text-white mt-1.5">
							Projetos em Destaque
						</h2>
					</div>

					{/* Category Filter Pills */}
					<div className="flex items-center gap-1.5 flex-wrap">
						{[
							{ id: 'all', label: 'Todos (6)' },
							{ id: 'saas', label: 'SaaS & Web Apps' },
							{ id: 'governamental', label: 'Setor Público' },
							{ id: 'landing', label: 'Landing Pages' },
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveCategory(tab.id)}
								className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
									activeCategory === tab.id
										? 'bg-white text-black font-semibold shadow-sm'
										: 'text-zinc-400 hover:text-white hover:bg-white/5'
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>

				{/* Clean Grid of 6 Projects */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project, index) => {
						const isLive = !!project.link
						const badge = project.statusBadge || (isLive ? 'Ao Vivo' : 'Case')

						return (
							<BlurFade key={project.id} delay={0.07 * (index + 1)} inView>
								<div className="group rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-yellow-500/30 transition-all duration-300 p-5 flex flex-col justify-between h-full backdrop-blur-xs">
									<div>
										{/* Preview Image with Link */}
										<Link
											href={`/projects/${project.slug}`}
											className="block relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-white/5 mb-4 cursor-pointer"
										>
											<Image
												src={project.image}
												alt={project.title}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover group-hover:scale-105 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

											<span className="absolute top-2.5 right-2.5 font-mono text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/15 bg-black/80 backdrop-blur-md text-zinc-300">
												{badge}
											</span>
										</Link>

										{/* Title & One-Liner */}
										<Link href={`/projects/${project.slug}`} className="block group/title">
											<h3 className="font-sentient text-lg font-medium text-white group-hover/title:text-yellow-400 transition-colors">
												{project.title}
											</h3>
										</Link>
										<p className="font-mono text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-2">
											{project.shortDescription}
										</p>

										{/* Tech Stack Tags */}
										<div className="flex flex-wrap items-center gap-1.5 mt-4">
											{project.stack.slice(0, 4).map((tech) => (
												<span
													key={tech}
													className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Dedicated Card Action Buttons */}
									<div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2.5">
										{project.link ? (
											<>
												<a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-mono text-xs font-medium transition-all"
												>
													<span>Ao Vivo</span>
													<ExternalLink className="w-3.5 h-3.5" />
												</a>
												<Link
													href={`/projects/${project.slug}`}
													className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/15 bg-white/10 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 text-white font-mono text-xs font-medium transition-all group/btn"
												>
													<span>Ver Case</span>
													<ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
												</Link>
											</>
										) : (
											<Link
												href={`/projects/${project.slug}`}
												className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-white/15 bg-white/10 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 text-white font-mono text-xs font-medium transition-all group/btn"
											>
												<span>Ver Case Completo</span>
												<ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
											</Link>
										)}
									</div>
								</div>
							</BlurFade>
						)
					})}
				</div>
			</div>
		</section>
	)
}
