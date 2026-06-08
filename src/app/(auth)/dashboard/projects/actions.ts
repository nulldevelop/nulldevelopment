'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const ProjectSchema = z.object({
	title: z.string().min(1),
	slug: z.string().min(1),
	shortDescription: z.string().min(1),
	content: z.string().min(1),
	image: z.string().min(1),
	images: z.array(z.string()),
	stack: z.array(z.string()),
	link: z.string().optional().nullable(),
	companyId: z.string().optional().nullable(),
})

async function requireAuth() {
	const session = await auth.api.getSession({ headers: await headers() })
	if (!session) throw new Error('Unauthorized')
}

export async function createProject(data: z.infer<typeof ProjectSchema>) {
	await requireAuth()
	const project = await prisma.project.create({
		data: {
			...data,
			link: data.link || null,
			companyId: data.companyId || null,
		},
	})
	revalidatePath('/dashboard/projects')
	revalidatePath('/')
	return project
}

export async function updateProject(id: string, data: z.infer<typeof ProjectSchema>) {
	await requireAuth()
	const project = await prisma.project.update({
		where: { id },
		data: {
			...data,
			link: data.link || null,
			companyId: data.companyId || null,
		},
	})
	revalidatePath('/dashboard/projects')
	revalidatePath('/')
	revalidatePath(`/projects/${project.slug}`)
	return project
}

export async function deleteProject(id: string) {
	await requireAuth()
	const existing = await prisma.project.findUnique({ where: { id }, select: { slug: true } })
	await prisma.project.delete({ where: { id } })
	revalidatePath('/dashboard/projects')
	revalidatePath('/')
	if (existing?.slug) revalidatePath(`/projects/${existing.slug}`)
}
