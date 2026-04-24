'use client'

import { ImagePlus, Loader2, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

interface MultiFileUploadProps {
	value: string[]
	onChange: (urls: string[]) => void
	folder: 'projects' | 'companies' | 'avatars' | 'general'
	label?: string
}

export function MultiFileUpload({
	value = [],
	onChange,
	folder,
	label = 'Adicionar Imagens',
}: MultiFileUploadProps) {
	const [isUploading, setIsUploading] = useState(false)

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files || files.length === 0) return

		setIsUploading(true)
		const uploaded: string[] = []

		try {
			for (const file of Array.from(files)) {
				const formData = new FormData()
				formData.append('file', file)
				formData.append('folder', folder)

				const res = await fetch('/api/upload', {
					method: 'POST',
					body: formData,
				}).catch((err) => {
					console.error('Upload failed:', err)
					return null
				})

				if (!res || !res.ok) {
					throw new Error(`Falha no upload de ${file.name}`)
				}

				const data = await res.json()
				uploaded.push(data.url)
			}

			onChange([...value, ...uploaded])
			toast.success(`${uploaded.length} imagem(ns) enviada(s) com sucesso!`)
		} finally {
			setIsUploading(false)
			// reset input so same files can be re-selected if needed
			e.target.value = ''
		}
	}

	const removeImage = (index: number) => {
		const updated = value.filter((_, i) => i !== index)
		onChange(updated)
	}

	return (
		<div className="space-y-3 w-full">
			{value.length > 0 && (
				<div className="grid grid-cols-3 gap-2">
					{value.map((url, index) => (
						<div
							key={url + index}
							className="relative h-24 group overflow-hidden rounded-lg border border-white/10"
						>
							<Image
								src={url}
								alt={`Imagem ${index + 1}`}
								fill
								className="object-cover bg-muted/20"
							/>
							<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
								<button
									type="button"
									className="h-7 w-7 rounded-md bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
									onClick={() => removeImage(index)}
								>
									<X className="h-3 w-3" />
								</button>
							</div>
							<span className="absolute bottom-1 left-1 text-[10px] text-white/70 bg-black/50 px-1 rounded">
								{index + 1}
							</span>
						</div>
					))}
				</div>
			)}

			<label className="flex items-center justify-center gap-2 w-full h-14 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/5 transition-colors">
				{isUploading ? (
					<>
						<Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
						<span className="text-sm text-muted-foreground">Enviando...</span>
					</>
				) : (
					<>
						<ImagePlus className="h-5 w-5 text-muted-foreground" />
						<span className="text-sm text-muted-foreground">
							{label}{' '}
							<span className="text-xs text-muted-foreground/50">
								(múltiplas)
							</span>
						</span>
					</>
				)}
				<input
					type="file"
					className="hidden"
					accept="image/*"
					multiple
					onChange={handleUpload}
					disabled={isUploading}
				/>
			</label>
		</div>
	)
}
