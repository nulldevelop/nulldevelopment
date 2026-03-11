import { prisma } from "@/lib/prisma"

async function main() {
	await prisma.project.upsert({
		where: { slug: 'project-alpha' },
		update: {},
		create: {
			title: 'Project Alpha',
			slug: 'project-alpha',
			shortDescription: 'Uma plataforma escalável para gerenciamento de dados.',
			content: `
# Project Alpha

Este projeto foi desenvolvido para resolver problemas complexos de gerenciamento de dados em larga escala.
Utilizamos tecnologias de ponta para garantir performance e confiabilidade.

## Características Principais:
- Dashboard em tempo real
- Integração com APIs externas
- Segurança avançada com criptografia de ponta a ponta

O desenvolvimento durou cerca de 4 meses e envolveu uma equipe de 3 especialistas.
			`.trim(),
			image: '/rafa.jpg',
			images: ['/rci.png', '/sira.png'],
			stack: ['Next.js', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
			link: 'https://example.com',
		},
	})

	console.log('Seed completed successfully.')
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
