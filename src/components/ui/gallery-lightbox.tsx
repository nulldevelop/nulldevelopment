'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from './dialog'
import { ScrollArea } from './scroll-area'


interface GalleryLightboxProps {
	images: string[]
	title: string
}

export function GalleryLightbox({ images, title }: GalleryLightboxProps) {
	// wrapper precisa de flex-1 flex flex-col min-h-0 no pai para o scroll funcionar
	const [selected, setSelected] = useState<number | null>(null)

	const prev = () =>
		setSelected((i) => (i !== null ? (i - 1 + images.length) % images.length : 0))
	const next = () =>
		setSelected((i) => (i !== null ? (i + 1) % images.length : 0))

	return (
		<div className="flex flex-col flex-1 min-h-0">
			<ScrollArea className="flex-1 min-h-0">
				<div className="flex flex-col gap-3 pr-3">
					{images.map((img, i) => (
						<button
							key={img}
							type="button"
							onClick={() => setSelected(i)}
							className="relative aspect-video w-full rounded-2xl border border-white/5 overflow-hidden group cursor-zoom-in shrink-0"
						>
							<Image
								src={img}
								alt={`${title} screenshot`}
								fill
								sizes="(max-width: 768px) 100vw, 40vw"
								quality={100}
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
						</button>
					))}
				</div>
			</ScrollArea>

			<Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
				<DialogContent className="w-[75vw] max-w-[75vw] bg-black/90 border-white/10 p-0 overflow-hidden">
					<DialogTitle className="sr-only">{title} — Galeria</DialogTitle>
					<div className="relative w-full aspect-video">
						{selected !== null && (
							<Image
								src={images[selected]}
								alt={`${title} screenshot`}
								fill
								sizes="75vw"
								className="object-contain"
								quality={100}
							/>
						)}

						<button
							type="button"
							onClick={() => setSelected(null)}
							className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
						>
							<X className="size-4" />
						</button>

						{images.length > 1 && (
							<>
								<button
									type="button"
									onClick={prev}
									className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
								>
									<ChevronLeft className="size-5" />
								</button>
								<button
									type="button"
									onClick={next}
									className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
								>
									<ChevronRight className="size-5" />
								</button>

								<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
									{images.map((img, i) => (
										<button
											key={img}
											type="button"
											onClick={() => setSelected(i)}
											className={`w-1.5 h-1.5 rounded-full transition-colors ${i === selected ? 'bg-yellow-400' : 'bg-white/30'}`}
										/>
									))}
								</div>
							</>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
