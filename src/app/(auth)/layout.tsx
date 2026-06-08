import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AppSidebar } from '@/components/app-sidebar'
import { auth } from '@/lib/auth'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth.api.getSession({ headers: await headers() })
	if (!session) redirect('/login')

	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full min-h-screen bg-muted/5">
				<div className="flex items-center h-16 px-4 border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
					<SidebarTrigger className="hover:bg-white/5" />
					<div className="ml-4 h-4 w-px bg-white/10" />
					<h1 className="ml-4 font-sentient text-lg tracking-tight">
						Painel Administrativo
					</h1>
				</div>
				<div className="p-4 lg:p-8">{children}</div>
			</main>
		</SidebarProvider>
	)
}
