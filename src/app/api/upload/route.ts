import fs from 'node:fs/promises'
import path from 'node:path'
import { headers } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function POST(request: NextRequest) {
	// Proteção por autenticação
	const session = await auth.api.getSession({
		headers: await headers(),
	})

	if (!session) {
		return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
	}

	try {
		const formData = await request.formData()
		const file = formData.get('file') as File
		const folder = (formData.get('folder') as string) || 'general'

		if (!file) {
			return NextResponse.json(
				{ error: 'Nenhum arquivo enviado' },
				{ status: 400 },
			)
		}

		// Validação simples de tipo (apenas imagens)
		if (!file.type.startsWith('image/')) {
			return NextResponse.json(
				{ error: 'Tipo de arquivo não suportado' },
				{ status: 400 },
			)
		}

		// Garante que a pasta de destino exista
		const targetDir = path.join(process.cwd(), 'public', 'uploads', folder)
		await fs.mkdir(targetDir, { recursive: true })

		// Gera um nome de arquivo único para evitar conflitos
		const timestamp = Date.now()
		const safeFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_')
		const fileName = `${timestamp}-${safeFileName}`
		const filePath = path.join(targetDir, fileName)

		// Salva o arquivo no disco
		const bytes = await file.arrayBuffer()
		const buffer = Buffer.from(bytes)
		await fs.writeFile(filePath, buffer)

		// Retorna o caminho relativo que será servido pelo Next.js
		return NextResponse.json({
			url: `/uploads/${folder}/${fileName}`,
			name: fileName,
		})
	} catch (error) {
		console.error('Erro no upload:', error)
		return NextResponse.json(
			{ error: 'Falha ao processar upload' },
			{ status: 500 },
		)
	}
}
