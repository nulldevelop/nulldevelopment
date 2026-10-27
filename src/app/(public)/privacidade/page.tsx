import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { getDictionary } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
	const { legal } = await getDictionary()
	return { title: legal.privacy.metaTitle, description: legal.privacy.metaDescription }
}

export default function PrivacidadePage() {
	return <LegalPage kind="privacy" />
}
