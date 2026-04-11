import { 
	Layout, 
	Cpu, 
	Rocket, 
	Globe,
	Zap,
} from 'lucide-react'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { MagicCard } from './ui/magic-card'
import { TextAnimate } from './ui/text-animate'

const specialties = [
	{
		title: 'Sistemas & SaaS',
		description: 'Desenvolvimento de plataformas complexas, escaláveis e prontas para o mercado.',
		icon: Cpu,
		className: 'md:col-span-2'
	},
	{
		title: 'Landing Pages',
		description: 'Páginas de alta conversão com foco em performance e SEO.',
		icon: Globe,
		className: 'md:col-span-1'
	},
	{
		title: 'E-commerce & Dashboards',
		description: 'Soluções robustas para vendas e gestão de dados em tempo real.',
		icon: Layout,
		className: 'md:col-span-1'
	},
	{
		title: 'Consultoria Estratégica',
		description: 'Apoio técnico para tirar seu produto do papel da forma correta.',
		icon: Rocket,
		className: 'md:col-span-1'
	},
	{
		title: 'Alta Performance',
		description: 'Código limpo e otimizado para garantir a melhor experiência do usuário.',
		icon: Zap,
		className: 'md:col-span-1'
	}
]

export function About() {
	return (
		<div
			className="flex flex-col justify-center relative py-20 z-10"
			id="sobre"
		>
			{/* Header */}
			<div className="text-center relative mx-2 mb-24">
				<BlurFade inView>
					<Pill className="w-full md:w-75">Sobre Mim</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-6"
					once
				>
					Pedro Henrique Andrade
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-4 max-w-xl mx-auto">
						Desenvolvedor Full Stack especializado em transformar desafios de negócios em software de alta qualidade. 
						Não apenas escrevo código, construo soluções que geram valor real para o seu projeto.
					</p>
				</BlurFade>
				<BlurFade delay={0.5} inView>
					<div className="flex flex-wrap justify-center gap-4 mt-12">
						{[
							{ value: '3+', label: 'anos de experiência' },
							{ value: '20+', label: 'projetos entregues' },
							{ value: '10+', label: 'tecnologias dominadas' },
						].map(({ value, label }) => (
							<div
								key={label}
								className="flex flex-col items-center px-6 py-4 rounded-2xl border border-foreground/15 bg-zinc-950"
							>
								<span className="font-sentient text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
									{value}
								</span>
								<span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] mt-1">
									{label}
								</span>
							</div>
						))}
					</div>
				</BlurFade>
			</div>

			{/* Specialties Section */}
			<div className="max-w-6xl mx-auto px-4 w-full">
				<div className="text-center mb-16">
					<BlurFade inView>
						<div className="flex justify-center mb-6">
							<Pill className="w-full md:w-36">Especialidades</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h3"
						by="word"
						animation="blurInUp"
						className="text-3xl md:text-5xl font-sentient mb-6"
						once
					>
						O Que Entregamos
					</TextAnimate>
					<BlurFade delay={0.3} inView>
						<p className="font-mono text-sm text-foreground/50 max-w-xl mx-auto">
							Soluções completas e personalizadas para cada etapa do seu negócio digital.
						</p>
					</BlurFade>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{specialties.map((item, index) => (
						<BlurFade key={item.title} delay={0.1 * (index + 1)} inView className={item.className}>
							<MagicCard
								className="p-8 h-full flex flex-col justify-between rounded-3xl bg-zinc-950 border border-foreground/15 hover:border-foreground/25 transition-colors"
								gradientColor="#1a1a1a"
							>
								<div className="flex flex-col gap-6">
									<div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20 shadow-2xl shadow-yellow-500/5">
										<item.icon size={28} />
									</div>
									<div>
										<h4 className="font-sentient text-2xl mb-3 text-foreground/90">{item.title}</h4>
										<p className="font-mono text-sm text-foreground/60 leading-relaxed max-w-md">
											{item.description}
										</p>
									</div>
								</div>
							</MagicCard>
						</BlurFade>
					))}
				</div>
			</div>
		</div>
	)
}
