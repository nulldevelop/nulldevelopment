'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'
import { ShimmerButton } from './ui/shimmer-button'
import { TextAnimate } from './ui/text-animate'

export function Hero() {
	return (
		<div className="flex flex-col min-h-svh justify-center relative z-10 lg:pl-20">
			<div className="py-5 md:mt-15 text-center relative">
				<BlurFade delay={0.1} inView>
					<Image
						className="text-center relative mx-auto mb-8"
						src="/logo.png"
						alt="Skal Ventures Logo"
						width={200}
						height={200}
					/>
				</BlurFade>

				<TextAnimate
					as="h1"
					by="word"
					animation="blurInUp"
					className="text-5xl sm:text-3xl md:text-6xl font-sentient"
					delay={0.3}
					once
				>
					Desbloqueie o crescimento do seu negócio
				</TextAnimate>

				<BlurFade delay={0.6} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4  mx-auto">
						Por meio de soluções de software escaláveis que impulsionam inovação
						e performance
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
