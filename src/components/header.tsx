'use client'

import { Code2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n/provider'
import { whatsappUrl } from '@/i18n/format'
import { company } from '@/lib/company'
import { LanguageSwitcher } from './language-switcher'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
	const { t } = useI18n()
	const navItems = [
		{ name: t.nav.projects, href: '/#portfolio' },
		{ name: t.nav.career, href: '/#experiencia' },
		{ name: t.nav.services, href: '/#servicos' },
		{ name: t.nav.faq, href: '/#faq' },
		{ name: t.nav.contact, href: '/#contato' },
	]
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40)
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className="fixed z-50 top-0 left-0 w-full flex items-center justify-center p-3 sm:p-4 pointer-events-none">
			<header
				className={`w-full max-w-5xl mx-auto flex items-center justify-between py-2.5 px-4 sm:px-6 rounded-2xl transition-all duration-300 pointer-events-auto ${
					scrolled
						? 'bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-xl'
						: 'bg-transparent border border-transparent'
				}`}
			>
				{/* Logo */}
				<Link href="/" className="group flex items-center gap-2.5">
					<div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400 group-hover:scale-105 transition-transform">
						<Code2 className="w-4 h-4" />
					</div>
					<span className="font-bold text-lg text-white tracking-tight">
						pedro<span className="text-yellow-400">.dev</span>
					</span>
				</Link>

				{/* Center Navigation Links (Desktop) */}
				<nav className="hidden md:flex items-center gap-7">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Right CTA */}
				<div className="flex items-center gap-2 sm:gap-3">
					<LanguageSwitcher />
					<a
						href={whatsappUrl(company.whatsapp, t.whatsapp.budget)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase px-3 sm:px-4 py-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all font-semibold"
					>
						<MessageCircle className="w-4 h-4" />
						<span className="hidden sm:inline">WhatsApp</span>
					</a>

					<div className="md:hidden">
						<MobileMenu />
					</div>
				</div>
			</header>
		</div>
	)
}
