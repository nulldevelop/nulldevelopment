'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { ProjectCard } from './ui/project-card'

interface Project {
	id: string
	title: string
	slug: string
	shortDescription: string
	image: string
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
			<CarouselContent>
				{projects.map((project) => (
					<CarouselItem
						key={project.id}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-4">
							<ProjectCard {...project} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
