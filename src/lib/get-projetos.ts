import { prisma } from './prisma'

export async function getProjects() {
	return await prisma.project.findMany({
		orderBy: { createdAt: 'desc' },
		select: {
			id: true,
			title: true,
			slug: true,
			shortDescription: true,
			image: true,
			link: true,
			stack: true,
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
