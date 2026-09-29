import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { FAQSection } from '@/components/faq-section'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HomeClient } from '@/components/home-client'
import { Portfolio } from '@/components/portfolio'
import { ServicesSkills } from '@/components/services-skills'
import { StatsStrip } from '@/components/stats-strip'

export default function Home() {
	return (
		<HomeClient>
			<Hero />
			<StatsStrip />
			<Portfolio />
			<Experience />
			<ServicesSkills />
			<FAQSection />
			<Contact />
			<Footer />
			<FloatingWhatsApp />
		</HomeClient>
	)
}
