import type { Metadata } from 'next'
import { Geist_Mono, Merriweather } from 'next/font/google'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'

const merriweather = Merriweather({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-sans',
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://pedrodev.com.br'),
	title: 'Pedro Henrique | Full Stack Developer & Software Engineer',
	description:
		'Portfólio e serviços de desenvolvimento Full Stack de Pedro Henrique Andrade. Especialista em Next.js, React, Node.js, TypeScript e arquitetura de software escalável. Disponível para projetos e freelance.',
	keywords: [
		'Pedro Henrique Andrade',
		'Desenvolvedor Full Stack',
		'Full Stack Developer',
		'Next.js Developer',
		'Freelancer React',
		'Desenvolvedor Web',
		'Portfólio Programador',
		'Software Engineer',
	],
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
		apple: '/logo.svg',
		shortcut: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="pt-BR"
			className={cn('dark font-sans scroll-smooth', merriweather.variable)}
			suppressHydrationWarning
		>
			<body
				className={`${geistMono.variable} antialiased bg-background text-foreground`}
			>
				{children}
				<Toaster duration={2000} richColors closeButton={true} />
				<Analytics />
			</body>
		</html>
	)
}
