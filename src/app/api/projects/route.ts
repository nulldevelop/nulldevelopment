import { type NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const slug = searchParams.get('slug')

		if (slug) {
			const project = await prisma.project.findUnique({
				where: { slug },
			})
			if (!project) {
				return NextResponse.json(
					{ error: 'Projeto não encontrado' },
					{ status: 404 },
				)
			}
			return NextResponse.json(project)
		}

		const projects = await prisma.project.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(projects)
	} catch (error) {
		console.error('Erro ao buscar projetos:', error)
		return NextResponse.json(
			{ error: 'Erro interno do servidor' },
			{ status: 500 },
		)
	}
}
