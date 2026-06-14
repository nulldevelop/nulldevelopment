import { getProjects } from '@/lib/get-projetos'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { ProjectCard } from './ui/project-card'
import { TextAnimate } from './ui/text-animate'

type Project = {
	id: string
	title: string
	slug: string
	shortDescription: string
	image: string
	link: string | null
	stack: string[]
}

export async function Portfolio() {
	let projects: Project[] = []
	try {
		projects = await getProjects()
	} catch (err) {
		console.error('Failed to fetch projects:', err)
	}

	if (projects.length === 0) return null

	return (
		<div
			className="flex flex-col justify-center relative py-20 z-10"
			id="portfolio"
		>
			<div className="text-center relative mx-2 mb-16">
				<BlurFade inView>
					<Pill className="w-full md:w-75">Portfólio</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-6"
					once
				>
					Projetos que construí
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-lg mx-auto">
						Cada projeto aqui foi ao ar de verdade — construído com{' '}
						<span className="text-foreground/90">atenção aos detalhes</span>,{' '}
						performance e comprometimento com a{' '}
						<span className="text-foreground/90">qualidade final</span>.
					</p>
				</BlurFade>
			</div>

			<div className="max-w-6xl mx-auto px-4 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<BlurFade key={project.id} delay={0.1 * (index + 1)} inView>
							<ProjectCard {...project} />
						</BlurFade>
					))}
				</div>
			</div>
		</div>
	)
}
