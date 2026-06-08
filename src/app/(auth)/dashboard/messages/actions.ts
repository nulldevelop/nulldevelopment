'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function deleteMessage(id: string) {
	const session = await auth.api.getSession({ headers: await headers() })
	if (!session) throw new Error('Unauthorized')

	await prisma.message.delete({ where: { id } })
	revalidatePath('/dashboard/messages')
}
