'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'
import { ShimmerButton } from './ui/shimmer-button'

export function Hero() {
	return (
		<div className="flex flex-col min-h-svh justify-center relative z-10 lg:pl-20">
			<div className="py-5 md:mt-15 text-center relative">
				<div className="inline-block mb-4">
					<h1 className="text-5xl sm:text-3xl md:text-6xl font-sentient font-bold text-white tracking-tight">
						Null Development
					</h1>
					<div className="h-0.75 bg-linear-to-r from-yellow-700 via-yellow-400 to-yellow-700 mt-2 rounded-full" />
					<p className="font-mono text-sm sm:text-xs md:text-sm text-yellow-400 mt-2 flex items-center justify-center gap-2 tracking-widest uppercase">
						<span>◆</span>
						<span>Full Stack Developer</span>
						<span>◆</span>
					</p>
				</div>

				<BlurFade delay={0.3} inView>
					<h2 className="text-5xl sm:text-3xl md:text-6xl font-sentient leading-tight">
						Software que faz o seu negócio{' '}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
							escalar
						</span>
					</h2>
				</BlurFade>

				<BlurFade delay={0.6} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/50 text-balance mt-5 mx-auto max-w-lg">
						Do conceito ao produto — entregamos{' '}
						<span className="text-foreground/80">velocidade</span>,{' '}
						<span className="text-foreground/80">qualidade</span> e{' '}
						<span className="text-foreground/80">resultados reais</span>.
					</p>
				</BlurFade>

				<BlurFade delay={1} inView>
					<Link className="contents max-sm:hidden" href="/#contato">
						<ShimmerButton
							className="mt-14 mx-auto font-mono uppercase text-base h-16 px-8"
							shimmerColor="#EBB800"
						>
							[Entre em contato]
						</ShimmerButton>
					</Link>
					<Link className="contents sm:hidden" href="/#contato">
						<ShimmerButton
							className="mt-14 mx-auto font-mono uppercase text-sm h-14 px-6"
							shimmerColor="#EBB800"
							background="rgba(0, 0, 0, 0.8)"
						>
							[Entre em contato]
						</ShimmerButton>
					</Link>
				</BlurFade>
			</div>
		</div>
	)
}
