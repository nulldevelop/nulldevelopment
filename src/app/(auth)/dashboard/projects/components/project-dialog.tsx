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
import { Textarea } from '@/components/ui/textarea'
import { FileUpload } from '@/components/ui/file-upload'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { createProject, updateProject } from '../actions'

const ProjectSchema = z.object({
	title: z.string().min(1, 'Título é obrigatório'),
	slug: z.string().min(1, 'Slug é obrigatório'),
	shortDescription: z.string().min(1, 'Descrição curta é obrigatória'),
	content: z.string().min(1, 'Conteúdo é obrigatório'),
	image: z.string().min(1, 'Imagem principal é obrigatória'),
	images: z.string().transform((val) => val.split(',').map((s) => s.trim()).filter(Boolean)),
	stack: z.string().transform((val) => val.split(',').map((s) => s.trim()).filter(Boolean)),
	link: z.string().optional(),
	companyId: z.string().optional().nullable(),
})

type FormData = z.infer<typeof ProjectSchema>

interface ProjectDialogProps {
	project?: any
	companies: any[]
	isEdit?: boolean
}

export function ProjectDialog({
	project,
	companies,
	isEdit = false,
}: ProjectDialogProps) {
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<any>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			title: project?.title || '',
			slug: project?.slug || '',
			shortDescription: project?.shortDescription || '',
			content: project?.content || '',
			image: project?.image || '',
			images: project?.images?.join(', ') || '',
			stack: project?.stack?.join(', ') || '',
			link: project?.link || '',
			companyId: project?.companyId || '',
		},
	})

	async function onSubmit(data: any) {
		setIsLoading(true)
		try {
			if (isEdit && project) {
				await updateProject(project.id, data)
				toast.success('Projeto atualizado com sucesso!')
			} else {
				await createProject(data)
				toast.success('Projeto criado com sucesso!')
			}
			setOpen(false)
			form.reset()
		} catch (error) {
			console.error(error)
			toast.error('Ocorreu um erro ao salvar o projeto.')
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
						<Plus className="mr-2 h-4 w-4" /> Novo Projeto
					</Button>
				)}
			</DialogTrigger>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{isEdit ? 'Editar Projeto' : 'Novo Projeto'}
					</DialogTitle>
					<DialogDescription>
						Preencha as informações do projeto abaixo.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Título</FormLabel>
										<FormControl>
											<Input placeholder="Meu Projeto" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="slug"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Slug</FormLabel>
										<FormControl>
											<Input placeholder="meu-projeto" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="shortDescription"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descrição Curta</FormLabel>
									<FormControl>
										<Input placeholder="Uma breve descrição..." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Conteúdo (Markdown)</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Conteúdo detalhado do projeto..."
											className="min-h-32"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Imagem Principal</FormLabel>
										<FormControl>
											<FileUpload
												value={field.value}
												onChange={field.onChange}
												folder="projects"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="space-y-4">
								<FormField
									control={form.control}
									name="link"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Link Externo (Opcional)</FormLabel>
											<FormControl>
												<Input placeholder="https://..." {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="companyId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Empresa / Cliente</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value || undefined}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Selecione uma empresa" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="none">Nenhuma</SelectItem>
													{companies.map((company) => (
														<SelectItem key={company.id} value={company.id}>
															{company.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<FormField
							control={form.control}
							name="images"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Outras Imagens (separadas por vírgula)</FormLabel>
									<FormControl>
										<Input placeholder="/img1.png, /img2.png" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="stack"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tecnologias (separadas por vírgula)</FormLabel>
									<FormControl>
										<Input placeholder="React, Next.js, Tailwind" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<Button type="submit" disabled={isLoading}>
								{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								{isEdit ? 'Salvar Alterações' : 'Criar Projeto'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
