'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { Check, Copy, Mail, MessageCircle, Send, Sparkles } from 'lucide-react'
import { saveMessage } from '@/app/actions/contact'
import { BlurFade } from './ui/blur-fade'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const contactSchema = z.object({
	name: z.string().min(2, 'Informe seu nome.'),
	phone: z.string().min(8, 'Informe seu WhatsApp ou telefone.'),
	message: z.string().min(10, 'Descreva brevemente o que você precisa.'),
})

type ContactValues = z.infer<typeof contactSchema>

export function Contact() {
	const [isLoading, setIsLoading] = useState(false)
	const [copied, setCopied] = useState(false)

	const form = useForm<ContactValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			phone: '',
			message: '',
		},
	})

	const onSubmit = async (data: ContactValues) => {
		setIsLoading(true)
		try {
			const result = await saveMessage({
				name: data.name,
				email: 'via-formulario@nulldev.com.br',
				phone: data.phone,
				message: data.message,
			})

			if (result.success) {
				toast.success('Mensagem enviada! Responderei em breve.')
				form.reset()
			} else {
				toast.error('Erro ao enviar. Chame diretamente no WhatsApp!')
			}
		} catch {
			toast.error('Erro de conexão. Fale comigo pelo WhatsApp!')
		} finally {
			setIsLoading(false)
		}
	}

	const copyEmail = () => {
		navigator.clipboard.writeText('contato@nulldev.com.br')
		setCopied(true)
		toast.success('Email copiado!')
		setTimeout(() => setCopied(false), 2500)
	}

	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="contato">
			<div className="max-w-4xl mx-auto w-full">
				{/* Section Header */}
				<div className="text-center mb-14">
					<span className="text-xs sm:text-sm uppercase tracking-widest text-yellow-400 font-semibold">
						Contato Direto
					</span>
					<h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
						Vamos tirar sua ideia do papel?
					</h2>
					<p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mt-3 leading-relaxed">
						Chame direto no WhatsApp para uma resposta em poucos minutos ou envie os detalhes do seu projeto abaixo.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
					{/* Fast Direct Channels (Left) */}
					<div className="md:col-span-5 space-y-4">
						{/* WhatsApp Card */}
						<a
							href="https://wa.me/5541991798306?text=Ol%C3%A1%20Pedro!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20projeto."
							target="_blank"
							rel="noopener noreferrer"
							className="block p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 transition-all group"
						>
							<div className="flex items-center gap-3.5 mb-2">
								<div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
									<MessageCircle className="w-5 h-5" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-emerald-200">
										WhatsApp Direto
									</h3>
									<p className="text-sm sm:text-base font-semibold text-emerald-400">
										(41) 99179-8306
									</p>
								</div>
							</div>
							<p className="text-xs sm:text-sm text-emerald-300/80 mt-1">
								Canal mais rápido para orçamentos e dúvidas.
							</p>
						</a>

						{/* Email Copy Card */}
						<button
							type="button"
							onClick={copyEmail}
							className="w-full text-left p-5 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all cursor-pointer"
						>
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-3.5">
									<div className="w-11 h-11 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center shrink-0">
										<Mail className="w-5 h-5" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-white">
											Email
										</h3>
										<p className="text-sm text-zinc-300 font-medium">
											contato@nulldev.com.br
										</p>
									</div>
								</div>
								<span className="text-xs sm:text-sm text-yellow-400 font-medium flex items-center gap-1">
									{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
									{copied ? 'Copiado' : 'Copiar'}
								</span>
							</div>
						</button>

						{/* Small Trust Note */}
						<div className="p-4 rounded-xl border border-white/10 bg-zinc-900/40 text-xs sm:text-sm text-zinc-300 space-y-1.5">
							<p className="flex items-center gap-2">
								<span>⚡</span> Respondo em até 24 horas úteis
							</p>
							<p className="flex items-center gap-2">
								<span>📄</span> Emissão de Nota Fiscal de Serviços (PJ)
							</p>
						</div>
					</div>

					{/* Fast Form (Right) */}
					<div className="md:col-span-7">
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xs space-y-4"
						>
							<div className="grid gap-1.5">
								<Label htmlFor="name" className="text-sm font-semibold text-zinc-200">
									Seu Nome
								</Label>
								<Input
									id="name"
									placeholder="Ex: Carlos Oliveira"
									className="h-11 bg-zinc-950/60 border-white/15 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500"
									{...form.register('name')}
								/>
								{form.formState.errors.name && (
									<p className="text-red-400 text-xs sm:text-sm">
										{form.formState.errors.name.message}
									</p>
								)}
							</div>

							<div className="grid gap-1.5">
								<Label htmlFor="phone" className="text-sm font-semibold text-zinc-200">
									WhatsApp ou Telefone
								</Label>
								<Input
									id="phone"
									placeholder="(00) 00000-0000"
									className="h-11 bg-zinc-950/60 border-white/15 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500"
									{...form.register('phone')}
								/>
								{form.formState.errors.phone && (
									<p className="text-red-400 text-xs sm:text-sm">
										{form.formState.errors.phone.message}
									</p>
								)}
							</div>

							<div className="grid gap-1.5">
								<Label htmlFor="message" className="text-sm font-semibold text-zinc-200">
									Como posso te ajudar?
								</Label>
								<Textarea
									id="message"
									placeholder="Conte brevemente sobre o projeto ou sistema que você precisa..."
									className="min-h-28 bg-zinc-950/60 border-white/15 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 resize-none leading-relaxed"
									{...form.register('message')}
								/>
								{form.formState.errors.message && (
									<p className="text-red-400 text-xs sm:text-sm">
										{form.formState.errors.message.message}
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="w-full inline-flex items-center justify-center gap-2 text-sm sm:text-base uppercase h-12 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold transition-all cursor-pointer disabled:opacity-50 shadow-md"
							>
								<span>{isLoading ? 'Enviando...' : 'Enviar Mensagem'}</span>
								<Send className="w-4 h-4" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
