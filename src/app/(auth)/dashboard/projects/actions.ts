'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

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

export async function createProject(data: z.infer<typeof ProjectSchema>) {
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
	return project
}

export async function deleteProject(id: string) {
	await prisma.project.delete({
		where: { id },
	})
	revalidatePath('/dashboard/projects')
	revalidatePath('/')
}
