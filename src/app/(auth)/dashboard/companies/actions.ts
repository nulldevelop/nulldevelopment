'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const CompanySchema = z.object({
	name: z.string().min(1),
	logo: z.string().min(1),
})

export async function createCompany(data: z.infer<typeof CompanySchema>) {
	const company = await prisma.company.create({
		data,
	})
	revalidatePath('/dashboard/companies')
	return company
}

export async function updateCompany(id: string, data: z.infer<typeof CompanySchema>) {
	const company = await prisma.company.update({
		where: { id },
		data,
	})
	revalidatePath('/dashboard/companies')
	return company
}

export async function deleteCompany(id: string) {
	await prisma.company.delete({
		where: { id },
	})
	revalidatePath('/dashboard/companies')
}
