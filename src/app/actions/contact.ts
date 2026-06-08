'use server'

import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const MessageSchema = z.object({
	name: z.string().min(2).max(200),
	email: z.string().email().max(200),
	phone: z.string().max(20).optional(),
	city: z.string().max(100).optional(),
	industry: z.string().max(200).optional(),
	message: z.string().min(10).max(5000),
})

export async function saveMessage(data: z.infer<typeof MessageSchema>) {
	const parsed = MessageSchema.safeParse(data)
	if (!parsed.success) {
		return { success: false, error: 'Dados inválidos' }
	}

	try {
		await prisma.message.create({
			data: {
				name: parsed.data.name,
				email: parsed.data.email,
				phone: parsed.data.phone,
				city: parsed.data.city,
				industry: parsed.data.industry,
				content: parsed.data.message,
			},
		})
		return { success: true }
	} catch (error) {
		console.error('Error saving message:', error)
		return { success: false, error: 'Falha ao salvar a mensagem' }
	}
}
