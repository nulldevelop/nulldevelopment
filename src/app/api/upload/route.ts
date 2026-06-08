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

	const ALLOWED_FOLDERS = ['projects', 'companies', 'avatars', 'general']

	try {
		const formData = await request.formData()
		const file = formData.get('file') as File
		const rawFolder = (formData.get('folder') as string) || 'general'

		if (!ALLOWED_FOLDERS.includes(rawFolder)) {
			return NextResponse.json({ error: 'Pasta inválida' }, { status: 400 })
		}
		const folder = rawFolder

		if (!file) {
			return NextResponse.json(
				{ error: 'Nenhum arquivo enviado' },
				{ status: 400 },
			)
		}

		if (!file.type.startsWith('image/')) {
			return NextResponse.json(
				{ error: 'Tipo de arquivo não suportado' },
				{ status: 400 },
			)
		}

		const baseDir = path.join(process.cwd(), 'public', 'uploads')
		const targetDir = path.join(baseDir, folder)

		// Garante que o caminho resolvido não escape de public/uploads
		if (!targetDir.startsWith(baseDir)) {
			return NextResponse.json({ error: 'Pasta inválida' }, { status: 400 })
		}
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
