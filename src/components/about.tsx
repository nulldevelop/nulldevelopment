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

const terminalPackages = [
	'typescript',
	'express',
	'prisma',
	'tailwindcss',
	'firebase',
	'docker',
	'next',
	'biome',
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
					<MagicCard
						className="rounded-2xl max-w-xl w-full h-full"
						gradientFrom="#EBB800"
						gradientTo="#9c40ff"
						gradientColor="#1a1a1a"
					>
						<Terminal className="w-full h-full border-none bg-transparent shadow-none text-left overflow-hidden">
							<TypingAnimation className="text-lg">
								&gt; npx stack --install
							</TypingAnimation>

							{terminalPackages.map((pkg) => (
								<AnimatedSpan key={pkg} className="text-green-500 text-base">
									✔ Instalando {pkg}...
								</AnimatedSpan>
							))}

							<AnimatedSpan className="text-blue-500 text-base">
								<span>ℹ Status:</span>
								<span className="pl-2">
									{terminalPackages.length} pacotes instalados com sucesso.
								</span>
							</AnimatedSpan>
						</Terminal>
					</MagicCard>
				</BlurFade>

				<BlurFade delay={0.4} inView>
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
				</BlurFade>
			</div>
		</div>
	)
}
