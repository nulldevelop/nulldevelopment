import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { Marquee } from './ui/marquee'
import { TextAnimate } from './ui/text-animate'

export async function Insights() {
	const clients = await prisma.company.findMany({
		orderBy: { createdAt: 'desc' },
	})

	if (clients.length === 0) return null

	return <InsightsClient clients={clients} />
}

function InsightsClient({
	clients,
}: {
	clients: { name: string; logo: string }[]
}) {
	return (
		<div
			className="flex flex-col min-h-svh justify-center relative py-5 md:mt-15 z-10"
			id="clientes"
		>
			<div className="text-center relative mx-2">
				<BlurFade inView>
					<Pill className="w-full md:w-75">Nossos Clientes</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-6"
					once
				>
					Empresas que confiam em nosso trabalho
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-110 mx-auto">
						Junte-se a um grupo de clientes satisfeitos que transformaram seus
						negócios com nossas soluções.
					</p>
				</BlurFade>
			</div>

			<BlurFade delay={0.5} inView>
				<div className="relative w-full mt-12">
					<Marquee
						pauseOnHover
						className="[--duration:30s] [--gap:3rem]"
						repeat={7}
					>
						{clients.map((client) => (
							<div
								key={client.name}
								className="flex items-center justify-center h-40 w-68 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-black/60 transition-colors"
							>
								<Image
									src={client.logo}
									alt={client.name}
									width={160}
									height={160}
									className="object-contain max-h-32"
									quality={100}
								/>
							</div>
						))}
					</Marquee>
				</div>
			</BlurFade>

			<BlurFade delay={0.7} inView>
				<div className="text-center relative mt-12 mx-2">
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance max-w-110 mx-auto">
						Interessado em fazer parte do nosso grupo de clientes de sucesso?
						Entre em contato e vamos conversar sobre seus projetos!
					</p>
				</div>
			</BlurFade>
		</div>
	)
}
