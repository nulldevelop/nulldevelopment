import { getProjects } from '@/lib/get-projetos'
import { Pill } from './pill'
import { PortfolioCarousel } from './portfolio-carousel'
import { BlurFade } from './ui/blur-fade'
import { TextAnimate } from './ui/text-animate'

export async function Portfolio() {
	const projects = await getProjects()

	if (projects.length === 0) return null

	return (
		<div
			className="flex flex-col justify-center relative py-5 md:mt-15 z-10"
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
						Projetos que desenvolvemos
					</TextAnimate>
					<BlurFade delay={0.3} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-110 mx-auto">
							Estes são alguns dos projetos que desenvolvemos.
						</p>
					</BlurFade>
				</div>
				<BlurFade delay={0.5} inView>
					<div className="w-full max-w-6xl mx-auto mt-12 px-4">
						<PortfolioCarousel projects={projects} />
					</div>
				</BlurFade>
			</div>
		</div>
	)
}
