import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export function LegalPage({
	title,
	updatedAt,
	children,
}: {
	title: string
	updatedAt: string
	children: React.ReactNode
}) {
	return (
		<>
			<main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
				<Link
					href="/"
					className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					<span>Voltar ao site</span>
				</Link>
				<h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
				<p className="text-sm text-zinc-400 mt-2">Última atualização: {updatedAt}</p>
				<div className="mt-10 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-yellow-400 [&_a:hover]:underline">
					{children}
				</div>
			</main>
			<Footer />
		</>
	)
}
