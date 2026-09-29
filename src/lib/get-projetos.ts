import { prisma } from './prisma'
import { curatedProjects, type ProjectData } from './projects-data'

export { curatedProjects, type ProjectData }

export async function getProjects(): Promise<ProjectData[]> {
	try {
		const dbProjects = await prisma.project.findMany({
			select: {
				id: true,
				title: true,
				slug: true,
				shortDescription: true,
				image: true,
				images: true,
				link: true,
				stack: true,
				content: true,
			},
		})

		const dbMap = new Map(dbProjects.map((p) => [p.slug, p]))

		return curatedProjects.map((curated) => {
			const dbItem = dbMap.get(curated.slug)
			if (!dbItem) return curated
			return {
				...curated,
				title: curated.title,
				shortDescription: dbItem.shortDescription || curated.shortDescription,
				image: dbItem.image || curated.image,
				images: dbItem.images?.length ? dbItem.images : curated.images,
				link: dbItem.link !== undefined ? dbItem.link : curated.link,
				stack: dbItem.stack?.length ? dbItem.stack : curated.stack,
				content: dbItem.content || curated.content,
			}
		})
	} catch (err) {
		console.error('Error fetching projects from database, using curated list:', err)
		return curatedProjects
	}
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
	const curated = curatedProjects.find((p) => p.slug === slug)
	if (!curated) return null

	try {
		const dbItem = await prisma.project.findUnique({
			where: { slug },
		})

		if (dbItem) {
			return {
				...curated,
				shortDescription: dbItem.shortDescription || curated.shortDescription,
				image: dbItem.image || curated.image,
				images: dbItem.images?.length ? dbItem.images : curated.images,
				link: dbItem.link !== undefined ? dbItem.link : curated.link,
				stack: dbItem.stack?.length ? dbItem.stack : curated.stack,
				content: dbItem.content || curated.content,
			}
		}
	} catch (err) {
		console.error('Error fetching project by slug from database:', err)
	}

	return curated
}
