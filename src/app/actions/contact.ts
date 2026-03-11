'use server'

import { prisma } from '@/lib/prisma'

export async function saveMessage(data: {
	name: string
	email: string
	phone?: string
	city?: string
	industry?: string
	message: string
}) {
	try {
		await prisma.message.create({
			data: {
				name: data.name,
				email: data.email,
				phone: data.phone,
				city: data.city,
				industry: data.industry,
				content: data.message,
			},
		})
		return { success: true }
	} catch (error) {
		console.error('Error saving message:', error)
		return { success: false, error: 'Falha ao salvar a mensagem' }
	}
}
