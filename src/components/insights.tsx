import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { Marquee } from './ui/marquee'
import { TextAnimate } from './ui/text-animate'

const fallbackCompanies = [
	{ name: 'Prefeitura de Campina Grande do Sul', logo: '/Logo-Prefeitura-Vertical.png' },
	{ name: 'RCI Projetos & Soluções', logo: '/rci.png' },
	{ name: 'Rafael Consultoria', logo: '/rafa.jpg' },
	{ name: 'Flusxfy Tech', logo: '/flusxfy.png' },
	{ name: 'Fut11x Campeonatos', logo: '/fut11x.png' },
]

export async function Insights() {
	let clients: { name: string; logo: string }[] = []
	try {
		clients = await prisma.company.findMany({
			orderBy: { createdAt: 'desc' },
		})
	} catch (err) {
		console.error('Failed to fetch companies from database:', err)
	}

	if (clients.length === 0) {
		clients = fallbackCompanies
	}

	return <InsightsClient clients={clients} />
}

function InsightsClient({
	clients,
}: {
	clients: { name: string; logo: string }[]
}) {
	return (
		<section
			className="flex flex-col justify-center relative py-20 z-10"
			id="clientes"
		>
			<div className="text-center relative mx-2">
				<BlurFade inView>
					<div className="flex justify-center mb-4">
						<Pill className="w-full md:w-56">Credibilidade & Clientes</Pill>
					</div>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-3xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance"
					once
				>
					Empresas e órgãos que confiam
				</TextAnimate>
				<BlurFade delay={0.2} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-xl mx-auto">
						Projetos entregues com rigor técnico, pontualidade e compromisso com o resultado final.
					</p>
				</BlurFade>
			</div>

			<BlurFade delay={0.4} inView>
				<div className="relative w-full mt-14">
					<div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-background to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-background to-transparent z-10" />
					<Marquee
						pauseOnHover
						className="[--duration:28s] [--gap:2.5rem]"
						repeat={6}
					>
						{clients.map((client) => (
							<div
								key={client.name}
								className="group flex items-center justify-center h-28 w-56 bg-zinc-950/60 backdrop-blur-md rounded-2xl border border-white/10 p-5 hover:border-yellow-500/40 hover:bg-zinc-900/60 transition-all duration-300"
							>
								<Image
									src={client.logo}
									alt={client.name}
									width={140}
									height={80}
									className="object-contain max-h-16 opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
								/>
							</div>
						))}
					</Marquee>
				</div>
			</BlurFade>
		</section>
	)
}
