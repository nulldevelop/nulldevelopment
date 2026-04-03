import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { AnimatedSpan, Terminal, TypingAnimation } from './ui/terminal'
import { TextAnimate } from './ui/text-animate'


export function About() {
	return (
		<div
			className="flex flex-col min-h-svh justify-center relative py-5 z-10"
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
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6 max-w-xl mx-auto">
						Desenvolvedor Full Stack especializado em construir produtos digitais
						do zero — do backend ao deploy. Trabalho com startups e empresas para
						transformar ideias em software{' '}
						<span className="text-foreground/90">escalável</span>,{' '}
						<span className="text-foreground/90">rápido</span> e{' '}
						<span className="text-foreground/90">pronto para crescer</span>.
					</p>
				</BlurFade>
				<BlurFade delay={0.5} inView>
					<div className="flex flex-wrap justify-center gap-4 mt-8">
						{[
							{ value: '3+', label: 'anos de experiência' },
							{ value: '20+', label: 'projetos entregues' },
							{ value: '10+', label: 'tecnologias dominadas' },
						].map(({ value, label }) => (
							<div
								key={label}
								className="flex flex-col items-center px-6 py-3 rounded-xl border border-foreground/15 bg-zinc-900"
							>
								<span className="font-sentient text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
									{value}
								</span>
								<span className="font-mono text-xs text-foreground/50 uppercase tracking-wider mt-0.5">
									{label}
								</span>
							</div>
						))}
					</div>
				</BlurFade>
			</div>

			<div className="flex justify-center mt-10 px-4">
				<BlurFade delay={0.2} inView className="flex w-full max-w-2xl">
					<div className="flex flex-col gap-2 w-full h-full">
						<div className="flex items-center justify-between pl-1">
							<h3 className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
								Meu Setup
							</h3>
							<span className="font-mono text-xs text-green-500 flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
								disponível
							</span>
						</div>
						<MagicCard
							className="rounded-2xl w-full flex-1"
							gradientFrom="#EBB800"
							gradientTo="#9c40ff"
							gradientColor="#1a1a1a"
						>
							<Terminal className="w-full h-full border-none bg-transparent shadow-none text-left overflow-hidden">
								<TypingAnimation className="text-base text-foreground/60">
									&gt; whoami
								</TypingAnimation>

								<AnimatedSpan className="text-foreground/80 text-sm">
									<span className="border border-foreground/15 rounded-lg px-3 py-2 inline-block mt-1 space-y-0.5">
										<span className="block font-semibold text-foreground">
											Pedro Henrique Andrade
										</span>
										<span className="block text-foreground/50 text-xs">
											Full Stack Developer · Brasil 📍
										</span>
										<span className="block text-green-500 text-xs">
											● Aberto a novos projetos
										</span>
									</span>
								</AnimatedSpan>

								<TypingAnimation className="text-base text-foreground/60 mt-3">
									&gt; stack --list
								</TypingAnimation>

								<AnimatedSpan className="text-foreground/80 text-sm">
									<span className="text-yellow-400">📦 Frontend</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-400 text-sm">
									{'  '}✔ react · next.js · typescript · tailwindcss
								</AnimatedSpan>

								<AnimatedSpan className="text-foreground/80 text-sm">
									<span className="text-yellow-400">🛠 Backend</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-400 text-sm">
									{'  '}✔ node · express · prisma · postgresql
								</AnimatedSpan>

								<AnimatedSpan className="text-foreground/80 text-sm">
									<span className="text-yellow-400">☁ Infra</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-400 text-sm">
									{'  '}✔ docker · vercel · aws
								</AnimatedSpan>

								<AnimatedSpan className="text-foreground/80 text-sm">
									<span className="text-yellow-400">🤖 IA</span>
								</AnimatedSpan>
								<AnimatedSpan className="text-green-400 text-sm">
									{'  '}✔ claude · gemini · cursor
								</AnimatedSpan>

								<AnimatedSpan className="text-blue-400 text-xs mt-2">
									✔ 4 categorias · 20+ tecnologias carregadas.
								</AnimatedSpan>
							</Terminal>
						</MagicCard>
					</div>
				</BlurFade>

			</div>
		</div>
	)
}
