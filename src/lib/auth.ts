import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { username } from 'better-auth/plugins'
import { prisma } from './prisma'

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	emailAndPassword: {
		enabled: true,
	},
	usernameAndPassword: {
		enabled: true,
	},
	plugins: [username()],
	rateLimit: {
		window: 20,       // janela de 20 segundos
		max: 5,           // máximo 5 tentativas por janela
		storage: 'memory',
		customRules: {
			'/sign-in/username': {
				window: 60,
				max: 5,
			},
			'/sign-in/email': {
				window: 60,
				max: 5,
			},
		},
	},
})
