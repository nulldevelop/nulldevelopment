'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { saveMessage } from '@/app/actions/contact'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ShimmerButton } from './ui/shimmer-button'
import { ShineBorder } from './ui/shine-border'
import { TextAnimate } from './ui/text-animate'
import { Textarea } from './ui/textarea'

const contactFormSchema = z.object({
	name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
	email: z.string().email('Email inválido.'),
	phone: z.string().min(10, 'Número de telefone inválido.').optional(),
	city: z.string().optional(),
	industry: z.string().optional(),
	message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			city: '',
			industry: '',
			message: '',
		},
	})

	const onSubmit = async (data: ContactFormValues) => {
		setIsLoading(true)
		try {
			const result = await saveMessage(data)

			if (result.success) {
				toast.success('Mensagem enviada com sucesso!')
				form.reset()
			} else {
				toast.error(result.error || 'Ocorreu um erro ao enviar a mensagem.')
			}
		} catch {
			toast.error('Ocorreu um erro ao enviar a mensagem.')
		} finally {
			setIsLoading(false)
		}
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, '')
		if (value.length > 11) {
			value = value.substring(0, 11)
		}
		const formattedValue = value
			.replace(/^(\d{2})(\d)/g, '($1) $2')
			.replace(/(\d{5})(\d)/, '$1-$2')
		form.setValue('phone', formattedValue)
	}

	return (
		<div
			className="flex flex-col min-h-svh justify-center relative py-5 md:mt-5"
			id="contato"
		>
			<div className="text-center relative mx-2">
				<BlurFade inView>
					<Pill className="w-full md:w-75">Contato</Pill>
				</BlurFade>
				<TextAnimate
					as="h2"
					by="word"
					animation="blurInUp"
					className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-2"
					once
				>
					Vamos conversar
				</TextAnimate>
				<BlurFade delay={0.3} inView>
					<p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-2  mx-auto">
						Preencha o formulário abaixo ou me chame direto no WhatsApp.
					</p>
				</BlurFade>
			</div>
			<BlurFade delay={0.5} inView>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="relative max-w-2xl mx-auto mt-5 w-full px-4"
				>
					<div className="relative rounded-2xl border border-white/10 p-5 bg-background/50 backdrop-blur-sm">
						<div className="grid md:grid-cols-2 gap-4">
							<div className="grid gap-1.5">
								<Label htmlFor="name">Nome</Label>
								<Input
									id="name"
									placeholder="Seu nome"
									className="h-9"
									{...form.register('name')}
								/>
								{form.formState.errors.name && (
									<p className="text-red-500 text-xs">
										{form.formState.errors.name.message}
									</p>
								)}
							</div>
							<div className="grid gap-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="seu@email.com"
									className="h-9"
									{...form.register('email')}
								/>
								{form.formState.errors.email && (
									<p className="text-red-500 text-xs">
										{form.formState.errors.email.message}
									</p>
								)}
							</div>
							<div className="grid gap-1.5">
								<Label htmlFor="phone">Número</Label>
								<Input
									id="phone"
									type="tel"
									placeholder="(00) 00000-0000"
									className="h-9"
									{...form.register('phone')}
									onChange={handlePhoneChange}
								/>
							</div>
							<div className="grid gap-1.5">
								<Label htmlFor="city">Cidade</Label>
								<Input
									id="city"
									placeholder="Sua cidade"
									className="h-9"
									{...form.register('city')}
								/>
							</div>
							<div className="grid gap-1.5 md:col-span-2">
								<Label htmlFor="industry">Assunto</Label>
								<Input
									id="industry"
									placeholder="Sobre o que você quer conversar?"
									className="h-9"
									{...form.register('industry')}
								/>
							</div>
							<div className="grid gap-1.5 md:col-span-2">
								<Label htmlFor="message">Mensagem</Label>
								<Textarea
									id="message"
									placeholder="Sua mensagem"
									className="min-h-20 resize-none"
									{...form.register('message')}
								/>
								{form.formState.errors.message && (
									<p className="text-red-500 text-xs">
										{form.formState.errors.message.message}
									</p>
								)}
							</div>
							<ShimmerButton
								type="submit"
								className="w-full font-mono uppercase h-10 md:col-span-2 mt-2"
								shimmerColor="#EBB800"
								disabled={isLoading}
							>
								{isLoading ? 'Enviando...' : 'Enviar'}
							</ShimmerButton>
						</div>
					</div>
				</form>
			</BlurFade>
		</div>
	)
}
