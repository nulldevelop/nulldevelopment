'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const CompanySchema = z.object({
	name: z.string().min(1),
	logo: z.string().min(1),
})

async function requireAuth() {
	const session = await auth.api.getSession({ headers: await headers() })
	if (!session) throw new Error('Unauthorized')
}

export async function createCompany(data: z.infer<typeof CompanySchema>) {
	await requireAuth()
	const company = await prisma.company.create({ data })
	revalidatePath('/dashboard/companies')
	revalidatePath('/')
	return company
}

export async function updateCompany(id: string, data: z.infer<typeof CompanySchema>) {
	await requireAuth()
	const company = await prisma.company.update({ where: { id }, data })
	revalidatePath('/dashboard/companies')
	revalidatePath('/')
	return company
}

export async function deleteCompany(id: string) {
	await requireAuth()
	await prisma.company.delete({ where: { id } })
	revalidatePath('/dashboard/companies')
	revalidatePath('/')
}
