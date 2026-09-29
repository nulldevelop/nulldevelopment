'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingWhatsApp() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			// Show floating button after scrolling down 150px
			setVisible(window.scrollY > 150)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	if (!visible) return null

	return (
		<aside
			aria-label="Atendimento rápido"
			className="fixed bottom-6 right-6 z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
		>
			<a
				href="https://wa.me/5541991798306?text=Ol%C3%A1%20Pedro!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20projeto."
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-2.5 p-2 sm:px-4 sm:py-2.5 rounded-full border border-emerald-500/40 bg-zinc-950/90 hover:bg-emerald-950/40 text-emerald-400 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 hover:border-emerald-400"
				title="Conversar no WhatsApp agora"
			>
				{/* Glowing Ping Status */}
				<span className="relative flex h-2.5 w-2.5 shrink-0 ml-1 sm:ml-0">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
					<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
				</span>

				<MessageCircle className="w-5 h-5 shrink-0 text-emerald-400 group-hover:rotate-12 transition-transform" />

				{/* Text visible on desktop / tablet */}
				<span className="hidden sm:inline font-mono text-xs font-semibold tracking-wide text-zinc-100 group-hover:text-emerald-300">
					Online • Orçamento rápido
				</span>
			</a>
		</aside>
	)
}
