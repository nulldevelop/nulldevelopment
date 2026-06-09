import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { DeleteProjectButton } from './components/delete-project-button'
import { ProjectDialog } from './components/project-dialog'

export default async function ProjectsPage() {
	const [projects, companies] = await Promise.all([
		prisma.project.findMany({
			include: { company: true },
			orderBy: { createdAt: 'desc' },
		}),
		prisma.company.findMany(),
	])

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="font-sentient text-3xl font-bold text-white">Projetos</h1>
					<p className="font-mono text-sm text-foreground/40 mt-1">
						{projects.length} projeto{projects.length !== 1 ? 's' : ''} no portfólio
					</p>
				</div>
				<ProjectDialog companies={companies} />
			</div>

			<div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
				{projects.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-16 gap-3">
						<p className="font-mono text-sm text-foreground/30">Nenhum projeto cadastrado.</p>
					</div>
				) : (
					<div className="overflow-x-auto">
					<table className="w-full min-w-[640px]">
						<thead>
							<tr className="border-b border-white/5">
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Título</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Empresa</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Stack</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-right px-6 py-4">Ações</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project, i) => (
								<tr
									key={project.id}
									className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${i % 2 === 0 ? '' : 'bg-white/2'}`}
								>
									<td className="px-6 py-4">
										<span className="font-medium text-foreground">{project.title}</span>
									</td>
									<td className="px-6 py-4">
										{project.company ? (
											<span className="font-mono text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
												{project.company.name}
											</span>
										) : (
											<span className="font-mono text-xs text-foreground/30">—</span>
										)}
									</td>
									<td className="px-6 py-4">
										<div className="flex flex-wrap gap-1">
											{project.stack.slice(0, 3).map((s) => (
												<span
													key={s}
													className="font-mono text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-foreground/60"
												>
													{s}
												</span>
											))}
											{project.stack.length > 3 && (
												<span className="font-mono text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-foreground/30">
													+{project.stack.length - 3}
												</span>
											)}
										</div>
									</td>
									<td className="px-6 py-4">
										<div className="flex justify-end gap-2">
											<ProjectDialog project={project} companies={companies} isEdit />
											<DeleteProjectButton id={project.id} />
											{project.link && (
												<Button size="icon" variant="ghost" className="hover:bg-white/5" asChild>
													<Link href={project.link} target="_blank" rel="noopener noreferrer">
														<ExternalLink className="h-4 w-4" />
													</Link>
												</Button>
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					</div>
				)}
			</div>
		</div>
	)
}
