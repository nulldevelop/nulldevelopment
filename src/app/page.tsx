import { About } from '@/components/about'
import { ClientWrapper } from '@/components/client-wrapper'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Insights } from '@/components/insights'
import { Portfolio } from '@/components/portfolio'

export default async function Home() {
	return (
		<ClientWrapper>
			<Hero />
			<About />
			<Portfolio />
			<Insights />
			<Contact />
		</ClientWrapper>
	)
}
