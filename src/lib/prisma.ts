import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const rawUrl = process.env.DATABASE_URL as string
let connectionString = rawUrl

if (rawUrl) {
	if (rawUrl.includes('sslmode=')) {
		// Substitui modos ambíguos pelo recomendado para silenciar o aviso
		connectionString = rawUrl.replace(
			/sslmode=(require|prefer|verify-ca)/,
			'sslmode=verify-full'
		)
	} else {
		connectionString += rawUrl.includes('?')
			? '&sslmode=verify-full'
			: '?sslmode=verify-full'
	}
}

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
