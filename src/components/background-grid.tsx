'use client'

import { useEffect, useState } from 'react'

export function BackgroundGrid() {
	const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove, { passive: true })
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
			{/* Subtle Linear/Vercel-style SVG Grid Pattern */}
			<div
				className="absolute inset-0 opacity-[0.4]"
				style={{
					backgroundImage: `
						linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
						linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
					`,
					backgroundSize: '48px 48px',
					maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
					WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
				}}
			/>

			{/* Interactive Subtle Mouse Spotlight */}
			<div
				className="absolute inset-0 transition-opacity duration-300"
				style={{
					background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(235, 184, 0, 0.06), transparent 80%)`,
				}}
			/>

			{/* Top Hero Ambient Glow */}
			<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] rounded-full bg-linear-to-b from-yellow-500/12 to-amber-600/5 blur-[130px] opacity-75 animate-pulse duration-[6000ms]" />

			{/* Middle Ambient Aura */}
			<div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/6 blur-[150px]" />

			{/* Bottom Ambient Aura (Contact section) */}
			<div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-yellow-600/8 blur-[160px]" />

			{/* Vignette Overlay for smooth depth */}
			<div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black pointer-events-none" />
		</div>
	)
}
