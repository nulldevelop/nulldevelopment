'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { whatsappUrl } from '@/i18n/format'
import { useI18n } from '@/i18n/provider'
import { company } from '@/lib/company'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { Check, Copy, Mail, MessageCircle, Send, Sparkles } from 'lucide-react'
import { saveMessage } from '@/app/actions/contact'
import type { Dictionary } from '@/i18n/dictionaries/types'
import { BlurFade } from './ui/blur-fade'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const createContactSchema = (t: Dictionary['contact']) =>
	z.object({
		name: z.string().min(2, t.errName),
		phone: z.string().min(8, t.errPhone),
		message: z.string().min(10, t.errMessage),
	})

type ContactValues = z.infer<ReturnType<typeof createContactSchema>>

export function Contact() {
	const { t } = useI18n()
	const tc = t.contact
	const [isLoading, setIsLoading] = useState(false)
	const [copied, setCopied] = useState(false)

	const form = useForm<ContactValues>({
		resolver: zodResolver(createContactSchema(tc)),
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
				email: company.email,
				phone: data.phone,
				message: data.message,
			})

			if (result.success) {
				toast.success(tc.success)
				form.reset()
			} else {
				toast.error(tc.errorSend)
			}
		} catch {
			toast.error(tc.errorConnection)
		} finally {
			setIsLoading(false)
		}
	}

	const copyEmail = () => {
		navigator.clipboard.writeText(company.email)
		setCopied(true)
		toast.success(tc.emailCopied)
		setTimeout(() => setCopied(false), 2500)
	}

	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="contato">
			<div className="max-w-4xl mx-auto w-full">
				{/* Section Header */}
				<div className="text-center mb-14">
					<span className="text-xs sm:text-sm uppercase tracking-widest text-yellow-400 font-semibold">
						{tc.eyebrow}
					</span>
					<h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
						{tc.title}
					</h2>
					<p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mt-3 leading-relaxed">
						{tc.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
					{/* Fast Direct Channels (Left) */}
					<div className="md:col-span-5 space-y-4">
						{/* WhatsApp Card */}
						<a
							href={whatsappUrl(company.whatsapp, t.whatsapp.budget)}
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
										{tc.whatsappTitle}
									</h3>
									<p className="text-sm sm:text-base font-semibold text-emerald-400">
										(41) 99179-8306
									</p>
								</div>
							</div>
							<p className="text-xs sm:text-sm text-emerald-300/80 mt-1">
								{tc.whatsappNote}
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
											{tc.emailTitle}
										</h3>
										<p className="text-sm text-zinc-300 font-medium">
											{company.email}
										</p>
									</div>
								</div>
								<span className="text-xs sm:text-sm text-yellow-400 font-medium flex items-center gap-1">
									{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
									{copied ? tc.copied : tc.copy}
								</span>
							</div>
						</button>

						{/* Small Trust Note */}
						<div className="p-4 rounded-xl border border-white/10 bg-zinc-900/40 text-xs sm:text-sm text-zinc-300 space-y-1.5">
							<p className="flex items-center gap-2">
								<span>⚡</span> {tc.reply}
							</p>
							<p className="flex items-center gap-2">
								<span>📄</span> {tc.invoice}
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
									{tc.name}
								</Label>
								<Input
									id="name"
									placeholder={tc.namePlaceholder}
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
									{tc.phone}
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
									{tc.message}
								</Label>
								<Textarea
									id="message"
									placeholder={tc.messagePlaceholder}
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
								<span>{isLoading ? tc.sending : tc.submit}</span>
								<Send className="w-4 h-4" />
							</button>
							<p className="text-xs text-zinc-400 text-center">
								{tc.consentBefore}{' '}
								<Link href="/privacidade" className="text-yellow-400 hover:underline">
									{t.footer.privacy}
								</Link>{' '}
								{tc.consentMiddle}{' '}
								<Link href="/termos" className="text-yellow-400 hover:underline">
									{t.footer.terms}
								</Link>
								{tc.consentAfter}
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
