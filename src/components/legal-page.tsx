import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/i18n/server'
import { company, companyAddress } from '@/lib/company'

interface Section {
	h: string
	p?: string[]
	ul?: string[]
}

function Rich({ text, vars }: { text: string; vars: Record<string, string> }) {
	const renderVars = (chunk: string) =>
		chunk.split(/(\{\w+\})/g).map((part, i) => {
			const match = part.match(/^\{(\w+)\}$/)
			if (!match) return <Fragment key={i}>{part}</Fragment>
			const key = match[1]
			if (key === 'email')
				return (
					<a key={i} href={`mailto:${company.email}`}>
						{company.email}
					</a>
				)
			if (key === 'privacyLink')
				return (
					<Link key={i} href="/privacidade">
						{vars.privacyLinkText}
					</Link>
				)
			return <Fragment key={i}>{vars[key] ?? part}</Fragment>
		})

	return (
		<>
			{text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
				part.startsWith('**') ? (
					<strong key={i}>{renderVars(part.slice(2, -2))}</strong>
				) : (
					<Fragment key={i}>{renderVars(part)}</Fragment>
				),
			)}
		</>
	)
}

export async function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
	const t = await getDictionary()
	const doc = t.legal[kind]
	const vars = {
		legalName: company.legalName,
		legalStatus: t.company.legalStatus,
		cnpj: company.cnpj,
		address: companyAddress,
		owner: company.ownerName,
		phone: company.phone,
		privacyLinkText: t.legal.privacyLinkText,
	}

	return (
		<>
			<main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
				<Link
					href="/"
					className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					<span>{t.legal.back}</span>
				</Link>
				<h1 className="text-3xl sm:text-4xl font-bold text-white">{doc.title}</h1>
				<p className="text-sm text-zinc-400 mt-2">
					{t.legal.lastUpdated}: {t.legal.updatedAt}
				</p>
				<div className="mt-10 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-yellow-400 [&_a:hover]:underline">
					{(doc.sections as Section[]).map((section) => (
						<section key={section.h}>
							<h2>{section.h}</h2>
							{section.p?.map((paragraph) => (
								<p key={paragraph}>
									<Rich text={paragraph} vars={vars} />
								</p>
							))}
							{section.ul && (
								<ul>
									{section.ul.map((item) => (
										<li key={item}>
											<Rich text={item} vars={vars} />
										</li>
									))}
								</ul>
							)}
						</section>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}
