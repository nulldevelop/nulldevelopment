'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { ProjectCard } from './ui/project-card'

interface Project {
	id: string
	title: string
	slug: string
	shortDescription: string
	image: string
	link?: string | null
}

export function PortfolioCarousel({ projects }: { projects: Project[] }) {
	const autoplay = useRef(Autoplay({ delay: 3000 }))

	if (!projects || projects.length === 0) {
		return null
	}

	return (
		<Carousel
			plugins={[autoplay.current]}
			opts={{
				align: 'start',
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent className="items-stretch">
				{projects.map((project) => (
					<CarouselItem
						key={project.id}
						className="md:basis-1/2 lg:basis-1/3 flex flex-col"
					>
						<div className="p-4 flex flex-col flex-1">
							<ProjectCard {...project} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="hidden sm:flex -left-4 border-foreground/20 bg-background/80 hover:bg-foreground/10" />
			<CarouselNext className="hidden sm:flex -right-4 border-foreground/20 bg-background/80 hover:bg-foreground/10" />
		</Carousel>
	)
}
