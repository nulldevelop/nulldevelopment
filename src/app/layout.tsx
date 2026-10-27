import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { localeMeta } from '@/i18n/config'
import { I18nProvider } from '@/i18n/provider'
import { getDictionary, getLocale } from '@/i18n/server'
import { cn } from '@/lib/utils'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale()
	const t = await getDictionary()

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://pedrodev.com.br'),
		title: t.meta.title,
		description: t.meta.description,
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
		openGraph: {
			title: t.meta.title,
			description: t.meta.description,
			locale: localeMeta[locale].ogLocale,
		},
		icons: {
			icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
			apple: '/logo.svg',
			shortcut: '/favicon.svg',
		},
	}
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const dictionary = await getDictionary()

	return (
		<html
			lang={localeMeta[locale].htmlLang}
			className={cn('dark font-sans scroll-smooth', inter.variable, geistMono.variable)}
			suppressHydrationWarning
		>
			<body
				className="font-sans antialiased bg-background text-foreground text-zinc-100"
			>
				<I18nProvider locale={locale} dictionary={dictionary}>
					{children}
				</I18nProvider>
				<Toaster duration={2000} richColors closeButton={true} />
				<Analytics />
			</body>
		</html>
	)
}
