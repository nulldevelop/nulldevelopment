import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { TextAnimate } from './ui/text-animate'

const skills = [
	'React',
	'Next.js',
	'TypeScript',
	'Node.js',
	'Tailwind CSS',
	'AWS',
	'Docker',
	'Prisma ORM',
]

export function About() {
	return (
		<div
			className="flex flex-col justify-center relative py-5 mt-3 z-10"
			id="sobre"
		>
			<div className="text-center relative mx-2">
				<BlurFade inView>
					<Pill className="w-full md:w-75">Sobre Mim</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-2"
					once
				>
					Pedro Henrique Andrade
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6 max-w-110 mx-auto">
						Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
						que fazem a diferença.
					</p>
				</BlurFade>
			</div>

			<div className="flex flex-wrap justify-center gap-10 mt-10 px-4 ">
				{[
					{
						title: 'Minha Filosofia',
						heading: 'Código limpo',
						text: 'Acredito que a tecnologia deve ser uma ferramenta para resolver problemas reais. Minha filosofia é criar soluções de software que não sejam apenas funcionalmente robustas, mas também elegantes em seu design e fáceis de usar.',
						delay: 0.2,
					},
					{
						title: 'Minhas Habilidades',
						heading: 'Stack Completo',
						delay: 0.4,
						showSkills: true,
					},
				].map((card, idx) => (
					<BlurFade key={idx} delay={card.delay} inView>
						<MagicCard
							className="rounded-2xl max-w-md h-full"
							gradientFrom="#EBB800"
							gradientTo="#9c40ff"
							gradientColor="#1a1a1a"
						>
							<div className="text-center relative p-8">
								<Pill>{card.title}</Pill>
								<TextAnimate
									as="h3"
									by="word"
									animation="blurIn"
									className="text-3xl sm:text-4xl md:text-5xl font-sentient mt-6"
									once
								>
									{card.heading}
								</TextAnimate>
								{card.showSkills ? (
									<div className="flex justify-center flex-wrap gap-4 mt-8">
										{skills.map((skill, i) => (
											<BlurFade key={skill} delay={0.5 + i * 0.1} inView>
												<Pill className="bg-gray-800 text-white py-2 px-4 rounded-lg font-mono text-sm [&>span.bg-primary]:bg-green-500 [&>span.bg-primary]:shadow-green-500/50">
													{skill}
												</Pill>
											</BlurFade>
										))}
									</div>
								) : (
									<BlurFade delay={0.4} inView>
										<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4">
											{card.text}
										</p>
									</BlurFade>
								)}
							</div>
						</MagicCard>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
