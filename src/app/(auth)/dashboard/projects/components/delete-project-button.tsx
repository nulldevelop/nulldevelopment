'use client'

import { useState } from 'react'
import { Trash2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { deleteProject } from '../actions'

export function DeleteProjectButton({ id }: { id: string }) {
	const [isLoading, setIsLoading] = useState(false)

	async function onDelete() {
		setIsLoading(true)
		try {
			await deleteProject(id)
			toast.success('Projeto excluído com sucesso!')
		} catch (error) {
			console.error(error)
			toast.error('Ocorreu um erro ao excluir o projeto.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
					<Trash2 className="h-4 w-4" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
					<AlertDialogDescription>
						Esta ação não pode ser desfeita. Isso excluirá permanentemente o
						projeto do banco de dados.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction
						onClick={(e) => {
							e.preventDefault()
							onDelete()
						}}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
						disabled={isLoading}
					>
						{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Excluir
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
