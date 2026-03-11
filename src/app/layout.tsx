import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'NullPHR Development',
	description:
		'Desbloqueie o crescimento do seu negócio com soluções de software escaláveis.',
	icons: {
		icon: '/logo.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={cn('dark font-sans', geist.variable)} suppressHydrationWarning>
			<body
				className={`${geistMono.variable} antialiased bg-background text-foreground`}
			>
				{children}
				<Toaster duration={2000} richColors closeButton={true} />
			</body>
		</html>
	)
}
