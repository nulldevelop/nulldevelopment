import { getProjects } from '@/lib/get-projetos'
import { PortfolioSection, type ProjectItem } from './portfolio-section'

export async function Portfolio() {
	let dbProjects: ProjectItem[] = []
	try {
		const fetched = await getProjects()
		dbProjects = fetched.map((p) => ({
			id: p.id,
			title: p.title,
			slug: p.slug,
			shortDescription: p.shortDescription,
			image: p.image,
			link: p.link,
			stack: p.stack,
		}))
	} catch (err) {
		console.error('Failed to fetch projects from database:', err)
	}

	return <PortfolioSection dbProjects={dbProjects} />
}
