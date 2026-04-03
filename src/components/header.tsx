'use client'
import { Briefcase, Home, Mail, User, Users } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MobileMenu } from './mobile-menu'
import { Dock, DockIcon } from './ui/dock'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const navItems = [
	{ name: 'Home', href: '#', icon: Home },
	{ name: 'Sobre', href: '#sobre', icon: User },
	{ name: 'Portfolio', href: '#portfolio', icon: Briefcase },
	{ name: 'Clientes', href: '#clientes', icon: Users },
	{ name: 'Contato', href: '#contato', icon: Mail },
]

export const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100)
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div className="fixed z-50 top-0 left-0 w-full flex items-center">
				<header className="container mx-auto flex items-center justify-between py-4 px-6 relative">
					<Link
						href="/"
						className={`transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
					>
						<div className="flex flex-col leading-none">
							<span className="font-sentient font-bold text-2xl text-white tracking-tight">
								null<span className="text-yellow-500">.</span>dev
							</span>
							<div className="h-0.5 bg-linear-to-r from-yellow-700 via-yellow-400 to-yellow-700 rounded-full mt-0.5" />
						</div>
					</Link>
					<MobileMenu />
				</header>
			</div>
			<div
				className={`fixed z-50 max-lg:hidden transition-all duration-500 ${
					scrolled
						? 'left-4 top-1/2 -translate-y-1/2'
						: 'top-4 right-6'
				}`}
			>
				<Dock
					orientation={scrolled ? 'vertical' : 'horizontal'}
					iconSize={50}
					iconMagnification={60}
					iconDistance={140}
					className="border-white/10 bg-black/30 backdrop-blur-md"
				>
					{navItems.map((item) => (
						<DockIcon key={item.name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										className="text-foreground/60 hover:text-foreground duration-150 transition-colors ease-out"
									>
										<item.icon className="size-5" />
									</Link>
								</TooltipTrigger>
								<TooltipContent
									side={scrolled ? 'right' : 'bottom'}
									sideOffset={8}
								>
									{item.name}
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
				</Dock>
			</div>
		</>
	)
}
