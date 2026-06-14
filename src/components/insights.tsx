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
					<Pill className="w-full md:w-75">Clientes</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-6"
					once
				>
					Empresas com quem já trabalhei
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-lg mx-auto">
						Cada cliente representa um projeto real — entregue com{' '}
						<span className="text-foreground/90">comprometimento</span> e atenção
						a cada detalhe que importa para o{' '}
						<span className="text-foreground/90">resultado final</span>.
					</p>
				</BlurFade>
				<BlurFade delay={0.45} inView>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
						{[
							{ value: `${clients.length}+`, label: 'clientes' },
							{ value: '100%', label: 'dedicação' },
							{ value: '3+', label: 'anos de experiência' },
						].map(({ value, label }) => (
							<div
								key={label}
								className="flex flex-col items-center justify-center w-full md:w-48 px-6 py-4 rounded-2xl border border-foreground/15 bg-zinc-950"
							>
								<span className="font-sentient text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
									{value}
								</span>
								<span className="font-mono text-[10px] text-foreground/40 text-center uppercase tracking-[0.2em] mt-1">
									{label}
								</span>
							</div>
						))}
					</div>
				</BlurFade>
			</div>

			<BlurFade delay={0.6} inView>
				<div className="relative w-full mt-12">
					<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
					<Marquee
						pauseOnHover
						className="[--duration:30s] [--gap:3rem]"
						repeat={7}
					>
						{clients.map((client) => (
							<div
								key={client.name}
								className="group flex items-center justify-center h-36 w-60 bg-foreground/5 backdrop-blur-sm rounded-2xl border border-foreground/10 p-6 hover:border-yellow-500/30 hover:bg-foreground/10 transition-all duration-300"
							>
								<Image
									src={client.logo}
									alt={client.name}
									width={160}
									height={160}
									className="object-contain max-h-28 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
									quality={100}
								/>
							</div>
						))}
					</Marquee>
				</div>
			</BlurFade>

			<BlurFade delay={0.8} inView>
				<div className="text-center mt-12 mx-2">
					<p className="font-mono text-sm text-foreground/40 max-w-md mx-auto">
						Tem interesse em trabalhar junto?{' '}
						<a
							href="/#contato"
							className="text-yellow-500 hover:text-yellow-400 transition-colors underline underline-offset-4"
						>
							Entre em contato →
						</a>
					</p>
				</div>
			</BlurFade>
		</div>
	)
}
