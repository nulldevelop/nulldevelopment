import type { Metadata } from 'next'
import { Geist_Mono, Merriweather } from 'next/font/google'
import '@/styles/globals.css'
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
	title: 'Null Development',
	description:
		'Desbloqueie o crescimento do seu negócio com soluções de software escaláveis.',
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
		],
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
			className={cn('dark font-sans', merriweather.variable)}
			suppressHydrationWarning
		>
			<body
				className={`${geistMono.variable} antialiased bg-background text-foreground`}
			>
				{children}
				<Toaster duration={2000} richColors closeButton={true} />
			</body>
		</html>
	)
}
