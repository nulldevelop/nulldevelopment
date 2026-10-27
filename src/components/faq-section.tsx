'use client'

import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { whatsappUrl } from '@/i18n/format'
import { useI18n } from '@/i18n/provider'
import { company } from '@/lib/company'
import { BlurFade } from './ui/blur-fade'

export function FAQSection() {
	const { t } = useI18n()
	const faqs = t.faq.items
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	const toggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx)
	}

	return (
		<section className="min-h-screen flex flex-col justify-center py-24 lg:py-28 relative z-10 px-4 sm:px-6 scroll-mt-16 sm:scroll-mt-20" id="faq">
			<div className="max-w-4xl mx-auto w-full">
				{/* Section Header */}
				<div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
					<div>
						<span className="text-xs sm:text-sm uppercase tracking-widest text-yellow-400 font-semibold">
							{t.faq.eyebrow}
						</span>
						<h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
							{t.faq.title}
						</h2>
					</div>
					<a
						href={whatsappUrl(company.whatsapp, t.whatsapp.question)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase text-emerald-400 hover:text-emerald-300 transition-colors"
					>
						<MessageCircle className="w-4 h-4" />
						<span>{t.faq.otherQuestion}</span>
					</a>
				</div>

				{/* Accordion List */}
				<div className="space-y-4">
					{faqs.map((faq, idx) => {
						const isOpen = openIndex === idx
						return (
							<BlurFade key={faq.question} delay={0.05 * (idx + 1)} inView>
								<div
									className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
										isOpen
											? 'border-yellow-400/40 bg-zinc-900/80 shadow-lg'
											: 'border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-white/20'
									}`}
								>
									<button
										onClick={() => toggle(idx)}
										type="button"
										className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
										aria-expanded={isOpen}
									>
										<span className="text-base sm:text-lg font-semibold text-white">
											{faq.question}
										</span>
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
												isOpen
													? 'bg-yellow-400/20 text-yellow-400 rotate-180'
													: 'bg-white/5 text-zinc-300'
											}`}
										>
											<ChevronDown className="w-4 h-4" />
										</div>
									</button>

									{isOpen && (
										<div className="px-5 sm:px-6 pb-6 pt-1">
											<p className="text-sm sm:text-base text-zinc-200 leading-relaxed border-t border-white/10 pt-4">
												{faq.answer}
											</p>
										</div>
									)}
								</div>
							</BlurFade>
						)
					})}
				</div>
			</div>
		</section>
	)
}
