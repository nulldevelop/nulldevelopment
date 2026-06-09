import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { CompanyDialog } from './components/company-dialog'
import { DeleteCompanyButton } from './components/delete-company-button'

export default async function CompaniesPage() {
	const companies = await prisma.company.findMany({
		include: { _count: { select: { projects: true } } },
		orderBy: { createdAt: 'desc' },
	})

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="font-sentient text-3xl font-bold text-white">Empresas</h1>
					<p className="font-mono text-sm text-foreground/40 mt-1">
						{companies.length} cliente{companies.length !== 1 ? 's' : ''} cadastrado{companies.length !== 1 ? 's' : ''}
					</p>
				</div>
				<CompanyDialog />
			</div>

			<div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
				{companies.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-16 gap-3">
						<p className="font-mono text-sm text-foreground/30">Nenhuma empresa cadastrada.</p>
					</div>
				) : (
					<div className="overflow-x-auto">
					<table className="w-full min-w-[480px]">
						<thead>
							<tr className="border-b border-white/5">
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Logo</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Nome</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Projetos</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-right px-6 py-4">Ações</th>
							</tr>
						</thead>
						<tbody>
							{companies.map((company, i) => (
								<tr
									key={company.id}
									className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${i % 2 === 0 ? '' : 'bg-white/2'}`}
								>
									<td className="px-6 py-4">
										<div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white/5 border border-white/10 p-1">
											<Image src={company.logo} alt={company.name} fill sizes="40px" className="object-contain" />
										</div>
									</td>
									<td className="px-6 py-4">
										<span className="font-medium text-foreground">{company.name}</span>
									</td>
									<td className="px-6 py-4">
										<span className="font-mono text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
											{company._count.projects} projeto{company._count.projects !== 1 ? 's' : ''}
										</span>
									</td>
									<td className="px-6 py-4">
										<div className="flex justify-end gap-2">
											<CompanyDialog company={company} isEdit />
											<DeleteCompanyButton id={company.id} />
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
