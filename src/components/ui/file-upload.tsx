'use client'

import { useState } from 'react'
import { Upload, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Image from 'next/image'

interface FileUploadProps {
	value?: string
	onChange: (url: string) => void
	folder: 'projects' | 'companies' | 'avatars' | 'general'
	label?: string
}

export function FileUpload({
	value,
	onChange,
	folder,
	label = 'Enviar Imagem',
}: FileUploadProps) {
	const [isUploading, setIsUploading] = useState(false)

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		setIsUploading(true)
		const formData = new FormData()
		formData.append('file', file)
		formData.append('folder', folder)

		try {
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			if (!res.ok) throw new Error('Falha no upload')

			const data = await res.json()
			onChange(data.url)
			toast.success('Upload realizado com sucesso!')
		} catch (error) {
			console.error(error)
			toast.error('Erro ao enviar o arquivo.')
		} finally {
			setIsUploading(false)
		}
	}

	return (
		<div className="space-y-4 w-full">
			<div className="flex flex-col items-center justify-center gap-4">
				{value ? (
					<div className="relative h-40 w-full group overflow-hidden rounded-lg border">
						<Image
							src={value}
							alt="Preview"
							fill
							className="object-contain bg-muted/20"
						/>
						<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
							<Button
								type="button"
								variant="default"
								size="sm"
								onClick={() => onChange('')}
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					</div>
				) : (
					<label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/5 transition-colors">
						<div className="flex flex-col items-center justify-center pt-5 pb-6">
							{isUploading ? (
								<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
							) : (
								<Upload className="h-8 w-8 text-muted-foreground mb-2" />
							)}
							<p className="mb-2 text-sm text-muted-foreground">
								<span className="font-semibold">{label}</span>
							</p>
							<p className="text-xs text-muted-foreground/60">
								PNG, JPG ou WEBP
							</p>
						</div>
						<input
							type="file"
							className="hidden"
							accept="image/*"
							onChange={handleUpload}
							disabled={isUploading}
						/>
					</label>
				)}
			</div>
		</div>
	)
}
