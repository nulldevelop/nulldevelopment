import Image from 'next/image'
import Link from 'next/link'
import { MagicCard } from './magic-card'

interface ProjectCardProps {
	title: string
	shortDescription: string
	image: string
	slug: string
	link?: string | null
	stack: string[]
}

export function ProjectCard({ title, shortDescription, image, slug, link, stack }: ProjectCardProps) {
	const isLive = !!link

	return (
		<Link
			href={`/projects/${slug}`}
			className="group flex flex-col flex-1"
		>
			<MagicCard
				className="p-8 h-full flex flex-col justify-between rounded-3xl bg-zinc-950 border border-foreground/15 hover:border-foreground/25 transition-colors"
				gradientColor="#1a1a1a"
			>
				<div className="flex flex-col gap-5">
					<div className="relative rounded-2xl overflow-hidden">
						<Image
							src={image}
							alt={title}
							width={385}
							height={220}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-500"
							quality={100}
						/>
						{isLive && (
							<span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border text-green-400 bg-black/60 border-green-400/40 backdrop-blur-sm">
								Ao vivo
							</span>
						)}
					</div>

					<div>
						<h4 className="font-sentient text-xl text-foreground/90 mb-2">{title}</h4>
						<p className="font-mono text-sm text-foreground/55 leading-relaxed line-clamp-2">
							{shortDescription}
						</p>
					</div>

					{stack.length > 0 && (
						<div className="flex flex-wrap gap-1.5">
							{stack.slice(0, 4).map((tech) => (
								<span
									key={tech}
									className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-foreground/10 bg-foreground/5 text-foreground/50"
								>
									{tech}
								</span>
							))}
							{stack.length > 4 && (
								<span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-foreground/10 bg-foreground/5 text-foreground/30">
									+{stack.length - 4}
								</span>
							)}
						</div>
					)}
				</div>

				<div className="mt-6 pt-5 border-t border-foreground/10 flex items-center justify-end">
					<span className="font-mono text-xs text-yellow-500 group-hover:text-yellow-400 transition-colors">
						Ver projeto →
					</span>
				</div>
			</MagicCard>
		</Link>
	)
}
