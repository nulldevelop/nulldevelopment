import Image from 'next/image'
import Link from 'next/link'
import { Pill } from '../pill'
import { MagicCard } from './magic-card'

interface ProjectCardProps {
	title: string
	shortDescription: string
	image: string
	slug: string
}

export function ProjectCard({ title, image, slug }: ProjectCardProps) {
	return (
		<Link href={`/projects/${slug}`}>
			<MagicCard
				className="w-full max-w-sm rounded-2xl overflow-hidden"
				gradientFrom="#EBB800"
				gradientTo="#9c40ff"
				gradientColor="#1a1a1a"
			>
				<Image
					src={image}
					alt={title}
					width={384}
					height={300}
					className="object-cover w-full aspect-video"
					quality={100}
				/>
				<div className="p-4">
					<Pill className="w-full text-white py-2 px-4 rounded-lg font-mono text-sm [&>span.bg-primary]:bg-green-500 [&>span.bg-primary]:shadow-green-500/50">
						{title}
					</Pill>
				</div>
			</MagicCard>
		</Link>
	)
}
