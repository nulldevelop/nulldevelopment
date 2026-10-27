import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getDictionary } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
	const { legal } = await getDictionary()
	return { title: legal.terms.metaTitle, description: legal.terms.metaDescription }
}

export default function TermosPage() {
	return <LegalPage kind="terms" />
}
