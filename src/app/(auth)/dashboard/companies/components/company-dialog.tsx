'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Plus, Pencil, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FileUpload } from '@/components/ui/file-upload'
import { createCompany, updateCompany } from '../actions'

const CompanySchema = z.object({
	name: z.string().min(1, 'Nome é obrigatório'),
	logo: z.string().min(1, 'URL da logo é obrigatória'),
})

interface CompanyDialogProps {
	company?: any
	isEdit?: boolean
}

export function CompanyDialog({
	company,
	isEdit = false,
}: CompanyDialogProps) {
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof CompanySchema>>({
		resolver: zodResolver(CompanySchema),
		defaultValues: {
			name: company?.name || '',
			logo: company?.logo || '',
		},
	})

	async function onSubmit(data: z.infer<typeof CompanySchema>) {
		setIsLoading(true)
		try {
			if (isEdit && company) {
				await updateCompany(company.id, data)
				toast.success('Empresa atualizada com sucesso!')
			} else {
				await createCompany(data)
				toast.success('Empresa criada com sucesso!')
			}
			setOpen(false)
			form.reset()
		} catch (error) {
			console.error(error)
			toast.error('Ocorreu um erro ao salvar a empresa.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{isEdit ? (
					<Button variant="ghost" size="icon">
						<Pencil className="h-4 w-4" />
					</Button>
				) : (
					<Button>
						<Plus className="mr-2 h-4 w-4" /> Nova Empresa
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{isEdit ? 'Editar Empresa' : 'Nova Empresa'}
					</DialogTitle>
					<DialogDescription>
						Preencha as informações da empresa abaixo.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome da Empresa</FormLabel>
									<FormControl>
										<Input placeholder="Minha Empresa" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="logo"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Logo da Empresa</FormLabel>
									<FormControl>
										<FileUpload
											value={field.value}
											onChange={field.onChange}
											folder="companies"
											label="Clique para enviar a logo"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button type="submit" disabled={isLoading}>
								{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								{isEdit ? 'Salvar Alterações' : 'Criar Empresa'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
