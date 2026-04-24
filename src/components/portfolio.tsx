import { Pill } from './pill'
import { PortfolioCarousel } from './portfolio-carousel'
import { BlurFade } from './ui/blur-fade'
import { TextAnimate } from './ui/text-animate'

interface DbProject {
	id: string
	title: string
	slug: string
	shortDescription: string
	image: string
	link: string | null
}

async function getApiProjects(): Promise<DbProject[]> {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	const res = await fetch(`${baseUrl}/api/projects`, {
		cache: 'no-store',
	}).catch((err) => {
		console.error('Failed to fetch projects:', err)
		return null
	})
	if (!res || !res.ok) {
		return []
	}
	return res.json()
}

export async function Portfolio() {
	const projects = await getApiProjects()

	const projectsWithoutLink = projects.map(({ link: _link, ...p }) => p)

	if (projectsWithoutLink.length === 0) return null

	return (
		<div
			className="flex flex-col min-h-svh justify-center relative py-5 z-10"
			id="portfolio"
		>
			<div>
				<div className="text-center relative mx-2">
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
						Do conceito ao produto final
					</TextAnimate>
					<BlurFade delay={0.3} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-lg mx-auto">
							Cada projeto é uma solução real — construída com{' '}
							<span className="text-foreground/90">atenção aos detalhes</span>,{' '}
							performance e foco em{' '}
							<span className="text-foreground/90">resultado</span>.
						</p>
					</BlurFade>
				</div>
				<BlurFade delay={0.5} inView>
					<div className="w-full max-w-6xl mx-auto mt-12 px-4">
						<PortfolioCarousel projects={projectsWithoutLink} />
					</div>
				</BlurFade>
			</div>
		</div>
	)
}
