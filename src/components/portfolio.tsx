import { getProjects } from '@/lib/get-projetos'
import type { ProjectData } from '@/lib/projects-data'
import { PortfolioSection } from './portfolio-section'

export async function Portfolio() {
	let dbProjects: ProjectData[] = []
	try {
		dbProjects = await getProjects()
	} catch (err) {
		console.error('Failed to fetch projects from database:', err)
	}

	return <PortfolioSection dbProjects={dbProjects} />
}
