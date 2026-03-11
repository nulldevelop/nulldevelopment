import { prisma } from '@/lib/prisma'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { CompanyDialog } from './components/company-dialog'
import { DeleteCompanyButton } from './components/delete-company-button'
import Image from 'next/image'

export default async function CompaniesPage() {
	const companies = await prisma.company.findMany({
		include: { _count: { select: { projects: true } } },
		orderBy: { createdAt: 'desc' },
	})

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Empresas</h2>
					<p className="text-muted-foreground">
						Gerencie as empresas e clientes que confiam em seu trabalho.
					</p>
				</div>
				<CompanyDialog />
			</div>

			<div className="rounded-md border bg-card">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Logo</TableHead>
							<TableHead>Nome</TableHead>
							<TableHead>Projetos</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{companies.length === 0 ? (
							<TableRow>
								<TableCell colSpan={4} className="h-24 text-center">
									Nenhuma empresa encontrada.
								</TableCell>
							</TableRow>
						) : (
							companies.map((company) => (
								<TableRow key={company.id}>
									<TableCell>
										<div className="relative h-10 w-10 overflow-hidden rounded-md bg-muted p-1">
											<Image
												src={company.logo}
												alt={company.name}
												fill
												className="object-contain"
											/>
										</div>
									</TableCell>
									<TableCell className="font-medium">
										{company.name}
									</TableCell>
									<TableCell>{company._count.projects}</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<CompanyDialog company={company} isEdit />
											<DeleteCompanyButton id={company.id} />
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
