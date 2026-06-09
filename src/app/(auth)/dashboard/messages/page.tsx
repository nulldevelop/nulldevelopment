import { Eye, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { prisma } from '@/lib/prisma'
import { DeleteMessageButton } from './components/delete-message-button'

export default async function MessagesPage() {
	const messages = await prisma.message.findMany({
		orderBy: { createdAt: 'desc' },
	})

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="font-sentient text-3xl font-bold text-white">Mensagens</h1>
					<p className="font-mono text-sm text-foreground/40 mt-1">
						{messages.length} mensagem{messages.length !== 1 ? 's' : ''} recebida{messages.length !== 1 ? 's' : ''}
					</p>
				</div>
				<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5">
					<Mail className="size-3 text-green-400" />
					<span className="font-mono text-xs text-green-400">{messages.length} no{messages.length !== 1 ? 'vas' : 'va'}</span>
				</div>
			</div>

			<div className="rounded-2xl border border-white/10 bg-zinc-900/80 overflow-hidden">
				{messages.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-16 gap-3">
						<p className="font-mono text-sm text-foreground/30">Nenhuma mensagem recebida.</p>
					</div>
				) : (
					<div className="overflow-x-auto">
					<table className="w-full min-w-[680px]">
						<thead>
							<tr className="border-b border-white/5">
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Data</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Nome</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Email</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-left px-6 py-4">Ramo / Cidade</th>
								<th className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-right px-6 py-4">Ações</th>
							</tr>
						</thead>
						<tbody>
							{messages.map((message, i) => (
								<tr
									key={message.id}
									className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${i % 2 === 0 ? '' : 'bg-white/2'}`}
								>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="font-mono text-xs text-foreground/50">
											{new Date(message.createdAt).toLocaleDateString('pt-BR')}
										</span>
									</td>
									<td className="px-6 py-4">
										<span className="font-medium text-foreground">{message.name}</span>
									</td>
									<td className="px-6 py-4">
										<span className="font-mono text-sm text-foreground/60">{message.email}</span>
									</td>
									<td className="px-6 py-4">
										<span className="font-mono text-xs text-foreground/40">
											{message.industry || '—'} / {message.city || '—'}
										</span>
									</td>
									<td className="px-6 py-4">
										<div className="flex justify-end gap-2">
											<Dialog>
												<DialogTrigger asChild>
													<Button size="icon" variant="ghost" className="hover:bg-white/5">
														<Eye className="h-4 w-4" />
													</Button>
												</DialogTrigger>
												<DialogContent className="max-w-lg bg-zinc-900 border-white/10">
													<DialogHeader>
														<DialogTitle className="font-sentient text-xl">Mensagem de {message.name}</DialogTitle>
														<DialogDescription className="font-mono text-xs text-foreground/40">
															Enviada em {new Date(message.createdAt).toLocaleString('pt-BR')}
														</DialogDescription>
													</DialogHeader>
													<div className="flex flex-col gap-4 py-2">
														<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
															{[
																{ label: 'Nome', value: message.name },
																{ label: 'Email', value: message.email },
																{ label: 'Telefone', value: message.phone || '—' },
																{ label: 'Cidade', value: message.city || '—' },
															].map(({ label, value }) => (
																<div key={label} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
																	<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-1">{label}</p>
																	<p className="text-sm text-foreground">{value}</p>
																</div>
															))}
															<div className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
																<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-1">Ramo de Atuação</p>
																<p className="text-sm text-foreground">{message.industry || '—'}</p>
															</div>
														</div>
														<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
															<p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">Mensagem</p>
															<p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{message.content}</p>
														</div>
													</div>
												</DialogContent>
											</Dialog>
											<DeleteMessageButton id={message.id} />
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
