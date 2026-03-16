import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { DeleteMessageButton } from './components/delete-message-button'

export default async function MessagesPage() {
	const messages = await prisma.message.findMany({
		orderBy: { createdAt: 'desc' },
	})

	return (
		<div className="flex flex-col gap-4">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Mensagens</h2>
				<p className="text-muted-foreground">
					Visualize e gerencie as mensagens enviadas através do formulário de
					contato.
				</p>
			</div>

			<div className="rounded-md border bg-card">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Data</TableHead>
							<TableHead>Nome</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Ramo/Cidade</TableHead>
							<TableHead className="text-right">Ações</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{messages.length === 0 ? (
							<TableRow>
								<TableCell colSpan={5} className="h-24 text-center">
									Nenhuma mensagem encontrada.
								</TableCell>
							</TableRow>
						) : (
							messages.map((message) => (
								<TableRow key={message.id}>
									<TableCell className="whitespace-nowrap">
										{new Date(message.createdAt).toLocaleDateString('pt-BR')}
									</TableCell>
									<TableCell className="font-medium">{message.name}</TableCell>
									<TableCell>{message.email}</TableCell>
									<TableCell>
										<span className="text-xs text-muted-foreground">
											{message.industry || '-'} / {message.city || '-'}
										</span>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<Dialog>
												<DialogTrigger asChild>
													<Button>
														<Eye className="h-4 w-4" />
													</Button>
												</DialogTrigger>
												<DialogContent className="max-w-lg">
													<DialogHeader>
														<DialogTitle>Detalhes da Mensagem</DialogTitle>
														<DialogDescription>
															Enviada em{' '}
															{new Date(message.createdAt).toLocaleString(
																'pt-BR',
															)}
														</DialogDescription>
													</DialogHeader>
													<div className="space-y-4 py-4">
														<div className="grid grid-cols-2 gap-4 text-sm">
															<div>
																<p className="font-semibold">Nome</p>
																<p>{message.name}</p>
															</div>
															<div>
																<p className="font-semibold">Email</p>
																<p>{message.email}</p>
															</div>
															<div>
																<p className="font-semibold">Telefone</p>
																<p>{message.phone || '-'}</p>
															</div>
															<div>
																<p className="font-semibold">Cidade</p>
																<p>{message.city || '-'}</p>
															</div>
															<div className="col-span-2">
																<p className="font-semibold">Ramo de Atuação</p>
																<p>{message.industry || '-'}</p>
															</div>
														</div>
														<div className="space-y-2">
															<p className="font-semibold text-sm">Mensagem</p>
															<div className="rounded-md bg-muted p-4 text-sm whitespace-pre-wrap">
																{message.content}
															</div>
														</div>
													</div>
												</DialogContent>
											</Dialog>
											<DeleteMessageButton id={message.id} />
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
