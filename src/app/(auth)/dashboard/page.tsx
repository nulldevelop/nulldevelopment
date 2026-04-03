import { prisma } from '@/lib/prisma'
import { Briefcase, Building2, MessageSquare, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
	const [projectsCount, companiesCount, messagesCount] = await Promise.all([
		prisma.project.count(),
		prisma.company.count(),
		prisma.message.count(),
	])

	const stats = [
		{
			title: 'Projetos',
			value: projectsCount,
			icon: Briefcase,
			description: 'no portfólio',
			color: 'text-yellow-400',
			bg: 'bg-yellow-500/10',
		},
		{
			title: 'Empresas',
			value: companiesCount,
			icon: Building2,
			description: 'parceiras / clientes',
			color: 'text-blue-400',
			bg: 'bg-blue-500/10',
		},
		{
			title: 'Mensagens',
			value: messagesCount,
			icon: MessageSquare,
			description: 'recebidas',
			color: 'text-green-400',
			bg: 'bg-green-500/10',
		},
	]

	return (
		<div className="flex flex-col gap-8">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="font-sentient text-3xl font-bold text-white">
						Visão Geral
					</h1>
					<p className="font-mono text-sm text-foreground/40 mt-1">
						Bem-vindo ao painel de controle
					</p>
				</div>
				<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5">
					<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
					<span className="font-mono text-xs text-green-400">online</span>
				</div>
			</div>

			{/* Stats */}
			<div className="grid gap-4 sm:grid-cols-3">
				{stats.map((stat) => (
					<div
						key={stat.title}
						className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 flex flex-col gap-4"
					>
						<div className="flex items-center justify-between">
							<span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
								{stat.title}
							</span>
							<div className={`p-2 rounded-lg ${stat.bg}`}>
								<stat.icon className={`size-4 ${stat.color}`} />
							</div>
						</div>
						<div>
							<p className={`font-sentient text-4xl font-bold ${stat.color}`}>
								{stat.value}
							</p>
							<p className="font-mono text-xs text-foreground/40 mt-1">
								{stat.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Quick info */}
			<div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 flex items-center gap-4">
				<div className="p-3 rounded-xl bg-yellow-500/10">
					<TrendingUp className="size-5 text-yellow-400" />
				</div>
				<div>
					<p className="font-mono text-sm text-foreground/80">
						{projectsCount} projeto{projectsCount !== 1 ? 's' : ''} publicado{projectsCount !== 1 ? 's' : ''} •{' '}
						{companiesCount} cliente{companiesCount !== 1 ? 's' : ''} •{' '}
						{messagesCount} mensagem{messagesCount !== 1 ? 's' : ''} pendente{messagesCount !== 1 ? 's' : ''}
					</p>
					<p className="font-mono text-xs text-foreground/30 mt-0.5">
						Última atualização: agora
					</p>
				</div>
			</div>
		</div>
	)
}
