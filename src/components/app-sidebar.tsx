import { LayoutDashboard, FileText, Send, LogOut, Home } from 'lucide-react'
import Link from 'next/link'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
} from '@/components/ui/sidebar'
import Image from 'next/image'

const menuItems = [
	{ title: 'Dashboard', icon: LayoutDashboard, url: '/dashboard' },
	{ title: 'Projetos', icon: FileText, url: '/dashboard/projects' },
	{ title: 'Mensagens', icon: Send, url: '/dashboard/messages' },
]

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon" className="border-r border-white/5 bg-black/40 backdrop-blur-xl">
			<SidebarHeader className="h-16 flex items-center justify-center border-b border-white/5">
				<div className="flex items-center gap-2 px-2">
					<div className="size-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
						<Image src="/logo.png" alt="Logo" width={32} height={32} />
					</div>
					<span className="font-sentient text-lg truncate group-data-[collapsible=icon]:hidden">NullPHR</span>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest px-4 py-2">Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild tooltip={item.title}>
										<Link href={item.url} className="flex items-center gap-3 px-4 py-6 hover:bg-white/5 transition-colors group">
											<item.icon className="size-5 text-foreground/60 group-hover:text-primary" />
											<span className="font-mono text-sm">{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="border-t border-white/5">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href="/" className="flex items-center gap-3 px-4 py-6 hover:bg-white/5 transition-colors">
								<Home className="size-5 text-foreground/60" />
								<span className="font-mono text-sm">Ver Site</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton className="flex items-center gap-3 px-4 py-6 hover:bg-red-500/10 text-red-500 transition-colors">
							<LogOut className="size-5" />
							<span className="font-mono text-sm">Sair</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
