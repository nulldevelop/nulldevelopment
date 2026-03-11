import { prisma } from './prisma'

export async function getProjects() {
	return await prisma.project.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})
}

export async function getProjectBySlug(slug: string) {
	return await prisma.project.findUnique({
		where: {
			slug,
		},
	})
}
