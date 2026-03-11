import { prisma } from '@/lib/prisma'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { ProjectDialog } from './components/project-dialog'
import { DeleteProjectButton } from './components/delete-project-button'

export default async function ProjectsPage() {
	const [projects, companies] = await Promise.all([
		prisma.project.findMany({
			include: { company: true },
			orderBy: { createdAt: 'desc' },
		}),
		prisma.company.findMany(),
	])

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Projetos</h2>
					<p className="text-muted-foreground">
						Gerencie os projetos exibidos no seu portfólio.
					</p>
				</div>
				<ProjectDialog companies={companies} />
			</div>

			<div className="rounded-md border bg-card">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Título</TableHead>
							<TableHead>Empresa</TableHead>
							<TableHead>Stack</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{projects.length === 0 ? (
							<TableRow>
								<TableCell colSpan={4} className="h-24 text-center">
									Nenhum projeto encontrado.
								</TableCell>
							</TableRow>
						) : (
							projects.map((project) => (
								<TableRow key={project.id}>
									<TableCell className="font-medium">
										{project.title}
									</TableCell>
									<TableCell>{project.company?.name || '-'}</TableCell>
									<TableCell>
										<div className="flex flex-wrap gap-1">
											{project.stack.map((s) => (
												<span
													key={s}
													className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium"
												>
													{s}
												</span>
											))}
										</div>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<ProjectDialog project={project} companies={companies} isEdit />
											<DeleteProjectButton id={project.id} />
											{project.link && (
												<Button variant="ghost" size="icon" asChild>
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="h-4 w-4" />
													</a>
												</Button>
											)}
										</div>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
