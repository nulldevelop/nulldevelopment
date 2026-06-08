import { unstable_noStore as noStore } from 'next/cache'
import { prisma } from './prisma'

export async function getProjects() {
	noStore()
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
