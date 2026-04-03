'use client'

import {
	Building2,
	FileText,
	Home,
	LayoutDashboard,
	LogOut,
	Send,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

const menuItems = [
	{ title: 'Dashboard', icon: LayoutDashboard, url: '/dashboard' },
	{ title: 'Empresas', icon: Building2, url: '/dashboard/companies' },
	{ title: 'Projetos', icon: FileText, url: '/dashboard/projects' },
	{ title: 'Mensagens', icon: Send, url: '/dashboard/messages' },
]

export function AppSidebar() {
	const pathname = usePathname()

	return (
		<Sidebar
			collapsible="icon"
			className="border-r border-white/5 bg-black/40 backdrop-blur-xl"
		>
			<SidebarHeader className="h-16 flex items-center justify-center border-b border-white/5">
				<div className="flex items-center gap-2 px-2">
					<div className="size-9 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20">
						<Image
							src="/logo.png"
							alt="Logo"
							width={32}
							height={32}
							className="object-contain"
						/>
					</div>
					<span className="font-sentient text-lg truncate group-data-[collapsible=icon]:hidden">
						Null Development
					</span>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 text-white/40">
						Menu Principal
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => {
								const isActive =
									pathname === item.url ||
									(item.url !== '/dashboard' && pathname.startsWith(item.url))
								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild tooltip={item.title}>
											<Link
												href={item.url}
												className={`flex items-center gap-3 px-4 py-5 transition-all duration-200 group ${isActive ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'hover:bg-white/5 text-white/60 hover:text-white'}`}
											>
												<item.icon
													className={`size-5 transition-colors ${isActive ? 'text-primary' : 'text-white/60 group-hover:text-primary'}`}
												/>
												<span
													className={`font-mono text-sm ${isActive ? 'text-white' : ''}`}
												>
													{item.title}
												</span>
												{isActive && (
													<div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
												)}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								)
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="border-t border-white/5">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								href="/"
								className="flex items-center gap-3 px-4 py-5 hover:bg-white/5 transition-colors text-white/60 hover:text-white"
							>
								<Home className="size-5" />
								<span className="font-mono text-sm">Ver Site</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<form action="/api/auth/signout" method="POST">
							<button
								type="submit"
								className="w-full flex items-center gap-3 px-4 py-5 hover:bg-red-500/10 text-red-500/70 hover:text-red-500 transition-colors rounded-md"
							>
								<LogOut className="size-5" />
								<span className="font-mono text-sm">Sair</span>
							</button>
						</form>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
