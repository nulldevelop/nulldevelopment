import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Insights } from '@/components/insights'
import { Portfolio } from '@/components/portfolio'
import { HomeClient } from '@/components/home-client'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
	return (
		<HomeClient>
			<Hero />
			<About />
			<Portfolio />
			<Insights />
			<FAQ />
			<Contact />
			<Footer />
		</HomeClient>
	)
}
