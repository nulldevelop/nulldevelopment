import Image from 'next/image'
import Link from 'next/link'
import { MagicCard } from './magic-card'

interface ProjectCardProps {
	title: string
	shortDescription: string
	image: string
	slug: string
	link?: string | null
}

export function ProjectCard({ title, shortDescription, image, slug, link }: ProjectCardProps) {
	const isExternal = !!link
	const href = isExternal ? link : `/projects/${slug}`

	return (
		<Link href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="group flex flex-col flex-1">
			<MagicCard
				className="w-full flex-1 rounded-2xl overflow-hidden flex flex-col"
				gradientFrom="#EBB800"
				gradientTo="#9c40ff"
				gradientColor="#1a1a1a"
			>
				<div className="relative overflow-hidden">
					<Image
						src={image}
						alt={title}
						width={385}
						height={300}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover w-full aspect-video transition-transform duration-500 group-hover:scale-105"
						quality={100}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
						<span className="font-mono text-xs text-yellow-400 uppercase tracking-widest">
							Ver projeto →
						</span>
					</div>
				</div>
				<div className="p-5 space-y-2 flex-1">
					<h3 className="font-sentient font-semibold text-lg text-foreground leading-snug">
						{title}
					</h3>
					{shortDescription && (
						<p className="font-mono text-xs text-foreground/50 line-clamp-2">
							{shortDescription}
						</p>
					)}
				</div>
			</MagicCard>
		</Link>
	)
}
