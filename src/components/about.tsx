import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { IconCloud } from './ui/icon-cloud'
import { MagicCard } from './ui/magic-card'
import { AnimatedSpan, Terminal, TypingAnimation } from './ui/terminal'
import { TextAnimate } from './ui/text-animate'

const cloudSlugs = [
	'typescript',
	'javascript',
	'html5',
	'css3',
	'prisma',
	'aws',
	'next',
	'react',
	'nodejs',
	'postgresql',
	'mysql',
	'firebase',
	'vercel',
	'docker',
	'git',
	'github',
	'visualstudiocode',
	'tailwindcss',
]

export function About() {
	const images = cloudSlugs.map(
		(slug) => `https://cdn.simpleicons.org/${slug}/white`,
	)

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
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6 min-w-110 mx-auto">
						Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
						que fazem a diferença.
					</p>
				</BlurFade>
			</div>

			<div className="flex flex-wrap justify-center gap-10 mt-10 px-4">
				<BlurFade delay={0.2} inView>
					<div className="flex flex-col gap-3">
						<h3 className="font-mono text-sm text-foreground/50 uppercase tracking-widest pl-1">
							Meu Setup
						</h3>
						<MagicCard
							className="rounded-2xl max-w-xl w-full h-full"
							gradientFrom="#EBB800"
							gradientTo="#9c40ff"
							gradientColor="#1a1a1a"
						>
							<Terminal className="w-full h-full border-none bg-transparent shadow-none text-left overflow-hidden">
								<TypingAnimation className="text-lg">
									&gt; whoami
								</TypingAnimation>

								<AnimatedSpan className="text-foreground/80 text-base">
									<span className="border border-foreground/20 rounded-lg px-3 py-2 inline-block mt-1">
										<span className="block font-semibold">Pedro Henrique Andrade</span>
										<span className="block text-foreground/50 text-sm">Full Stack Developer</span>
									</span>
								</AnimatedSpan>

								<TypingAnimation className="text-lg mt-2">
									&gt; stack --list
								</TypingAnimation>

								<AnimatedSpan className="text-foreground/90 text-base">
									<span className="text-yellow-500">📦 Frontend</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-500 text-base">
									{'  '}✔ react, next, typescript, tailwindcss
								</AnimatedSpan>

								<AnimatedSpan className="text-foreground/90 text-base">
									<span className="text-yellow-500">🛠 Backend</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-500 text-base">
									{'  '}✔ express, prisma, postgresql, firebase
								</AnimatedSpan>

								<AnimatedSpan className="text-foreground/90 text-base">
									<span className="text-yellow-500">☁ Infra</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-500 text-base">
									{'  '}✔ docker, vercel, aws
								</AnimatedSpan>

								<AnimatedSpan className="text-blue-500 text-base mt-1">
									✔ 3 categorias carregadas.
								</AnimatedSpan>
							</Terminal>
						</MagicCard>
					</div>
				</BlurFade>

				<BlurFade delay={0.4} inView>
					<div className="flex flex-col gap-3">
						<h3 className="font-mono text-sm text-foreground/50 uppercase tracking-widest pl-1">
							Tecnologias
						</h3>
						<MagicCard
							className="rounded-2xl max-w-xl w-full h-full flex items-center justify-center"
							gradientFrom="#EBB800"
							gradientTo="#9c40ff"
							gradientColor="#1a1a1a"
						>
							<div className="flex flex-col items-center justify-center w-full">
								<div className="relative flex items-center justify-center overflow-hidden w-full">
									<IconCloud images={images} />
								</div>
							</div>
						</MagicCard>
					</div>
				</BlurFade>
			</div>
		</div>
	)
}
