'use client'

import { Check, ChevronDown, ChevronUp, Copy, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const PROMPT_TEMPLATE = `Você é um assistente que extrai informações de projetos de desenvolvimento de software.

A partir da descrição abaixo, extraia os dados e retorne SOMENTE um JSON válido.

Descrição do projeto:
"""
[COLE AQUI A DESCRIÇÃO DO SEU PROJETO]
"""

Retorne o JSON em uma ÚNICA LINHA (sem quebras de linha dentro das strings - use \\n para quebras):
{"title":"Nome do projeto","slug":"nome-do-projeto","shortDescription":"Descrição curta","content":"Descrição completa em Markdown (use **negrito**, listas, \\n para quebras)","stack":"Tech1, Tech2, Tech3","link":"https://..."}

Regras importantes:
1. O JSON deve ser retornado em uma única linha
2. Dentro das strings, use \\n para indicar quebras de linha
3. NÃO use Markdown para envolver o JSON (não use \`\`\`json ... \`\`\`)
4. O campo "content" DEVE conter Markdown (negrito, listas, etc)
5. Responda APENAS com o JSON, nenhuma explicação
6. Retorne um arquivo por favor`

interface AiPromptHelperProps {
	onApply: (data: {
		title: string
		slug: string
		shortDescription: string
		content: string
		stack: string
		link: string
	}) => void
}

export function AiPromptHelper({ onApply }: AiPromptHelperProps) {
	const [open, setOpen] = useState(false)
	const [copied, setCopied] = useState(false)
	const [jsonInput, setJsonInput] = useState('')
	const [error, setError] = useState('')

	const handleCopy = async () => {
		await navigator.clipboard.writeText(PROMPT_TEMPLATE)
		setCopied(true)
		toast.success('Prompt copiado!')
		setTimeout(() => setCopied(false), 2000)
	}

	const handleApply = () => {
		setError('')
		try {
			// Extrai o bloco JSON mesmo que venha envolto em markdown ```json ... ```
			// ou com texto extra antes/depois
			let raw = jsonInput.trim()

			// Remove blocos de markdown ```json ... ``` ou ``` ... ```
			raw = raw
				.replace(/^```(?:json)?\s*/i, '')
				.replace(/\s*```$/, '')
				.trim()

			// Tenta encontrar o primeiro { ... } balanceado no texto
			const start = raw.indexOf('{')
			const end = raw.lastIndexOf('}')
			if (start !== -1 && end !== -1 && end > start) {
				raw = raw.slice(start, end + 1)
			}

			const parsed = JSON.parse(raw)
			const required = ['title', 'slug', 'shortDescription', 'content', 'stack']
			const missing = required.filter((k) => !parsed[k])
			if (missing.length > 0) {
				setError(`Campos faltando no JSON: ${missing.join(', ')}`)
				return
			}
			onApply({
				title: parsed.title || '',
				slug: parsed.slug || '',
				shortDescription: parsed.shortDescription || '',
				content: parsed.content || '',
				stack: parsed.stack || '',
				link: parsed.link || '',
			})
			setJsonInput('')
			setOpen(false)
			toast.success('Campos preenchidos com sucesso!')
		} catch {
			setError(
				'Não foi possível ler o JSON. Verifique se copiou o retorno completo da LLM.',
			)
		}
	}

	return (
		<div className="rounded-lg border border-primary/20 bg-primary/5 overflow-hidden">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/10 transition-colors"
			>
				<div className="flex items-center gap-2">
					<Sparkles className="h-4 w-4 text-primary" />
					<span className="text-sm font-medium text-primary">
						Preencher com IA
					</span>
					<span className="text-xs text-muted-foreground">
						— copie o prompt, cole numa LLM e traga o JSON de volta
					</span>
				</div>
				{open ? (
					<ChevronUp className="h-4 w-4 text-muted-foreground" />
				) : (
					<ChevronDown className="h-4 w-4 text-muted-foreground" />
				)}
			</button>

			{open && (
				<div className="px-4 pb-4 space-y-3 border-t border-primary/10">
					{/* Step 1 */}
					<div className="space-y-2 pt-3">
						<p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
							Passo 1 — Copie o prompt e leve para o ChatGPT, Claude, etc.
						</p>
						<div className="relative">
							<pre className="text-xs bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap text-muted-foreground leading-relaxed max-h-48 overflow-y-auto">
								{PROMPT_TEMPLATE}
							</pre>
							<button
								type="button"
								onClick={handleCopy}
								className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/20 hover:bg-primary/30 text-primary text-xs transition-colors"
							>
								{copied ? (
									<Check className="h-3 w-3" />
								) : (
									<Copy className="h-3 w-3" />
								)}
								{copied ? 'Copiado!' : 'Copiar'}
							</button>
						</div>
					</div>

					{/* Step 2 */}
					<div className="space-y-2">
						<p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
							Passo 2 — Cole o JSON retornado pela LLM aqui
						</p>
						<p className="text-xs text-muted-foreground/70">
							O retorno pode vir com Markdown (```json ... ```) — o sistema já trata automaticamente.
						</p>
						<textarea
							value={jsonInput}
							onChange={(e) => {
								setJsonInput(e.target.value)
								setError('')
							}}
							placeholder={'{\n  "title": "...",\n  "slug": "...",\n  ...\n}'}
							className="w-full h-32 text-xs bg-black/40 rounded-lg p-3 text-muted-foreground placeholder:text-muted-foreground/40 border border-white/10 focus:border-primary/40 focus:outline-none resize-none font-mono"
						/>
						{error && <p className="text-xs text-red-400">{error}</p>}
						<button
							type="button"
							onClick={handleApply}
							disabled={!jsonInput.trim()}
							className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/20 hover:bg-primary/30 text-primary text-sm font-mono transition-colors disabled:opacity-40 disabled:pointer-events-none"
						>
							<Sparkles className="h-4 w-4" />
							Aplicar nos campos
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
