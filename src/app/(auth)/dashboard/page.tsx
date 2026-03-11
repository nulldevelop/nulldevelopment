import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Building2, MessageSquare } from 'lucide-react'

export default async function DashboardPage() {
	const [projectsCount, companiesCount, messagesCount] = await Promise.all([
		prisma.project.count(),
		prisma.company.count(),
		prisma.message.count(),
	])

	const stats = [
		{
			title: 'Total de Projetos',
			value: projectsCount,
			icon: Briefcase,
			description: 'Projetos cadastrados no portfólio',
		},
		{
			title: 'Total de Empresas',
			value: companiesCount,
			icon: Building2,
			description: 'Empresas parceiras/clientes',
		},
		{
			title: 'Total de Mensagens',
			value: messagesCount,
			icon: MessageSquare,
			description: 'Mensagens recebidas via contato',
		},
	]

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold tracking-tight">Visão Geral</h2>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => (
					<Card key={stat.title}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{stat.title}
							</CardTitle>
							<stat.icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<p className="text-xs text-muted-foreground">
								{stat.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
