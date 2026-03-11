'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteMessage(id: string) {
	await prisma.message.delete({
		where: { id },
	})
	revalidatePath('/dashboard/messages')
}
