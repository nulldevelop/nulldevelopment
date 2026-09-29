'use client'

import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { BlurFade } from './ui/blur-fade'

interface FAQItem {
	question: string
	answer: string
}

const faqs: FAQItem[] = [
	{
		question: 'Você emite Nota Fiscal (PJ) e faz contrato?',
		answer:
			'Sim, com certeza! Todos os projetos contam com contrato formal detalhando escopo, cronograma, marcos de entrega e transferência integral de direitos autorais. Emito Nota Fiscal de Prestação de Serviços (PJ) para empresas de qualquer porte em todo o Brasil.',
	},
	{
		question: 'Qual é o prazo médio de entrega de um projeto?',
		answer:
			'Landing pages de alta conversão e sites institucionais são entregues geralmente entre 1 a 2 semanas. Para sistemas web, painéis administrativos e plataformas SaaS completas (MVPs), o prazo habitual varia entre 3 a 6 semanas, sempre com entregas parciais para você acompanhar e testar a evolução.',
	},
	{
		question: 'Como funciona a forma de pagamento?',
		answer:
			'Trabalho com entrada inicial e parcelas vinculadas aos marcos de entrega (milestones) acordados em contrato, garantindo segurança para ambos os lados. Aceito PIX, transferência bancária e boleto bancário.',
	},
	{
		question: 'Como funciona o suporte pós-lançamento e garantia?',
		answer:
			'Todo projeto conta com 30 dias de garantia e suporte pós-deploy gratuito para correção de eventuais ajustes ou dúvidas técnicas. Para quem precisa de melhorias contínuas e novos módulos, também ofereço pacotes de suporte e evolução sob demanda.',
	},
	{
		question: 'O código-fonte e o projeto pertencerão 100% à minha empresa?',
		answer:
			'Sim, 100% seu. Após a entrega e quitação, todos os direitos intelectuais, repositório no GitHub, acessos de hospedagem e banco de dados são transferidos integralmente para você, sem nenhuma fidelidade ou aprisionamento tecnológico.',
	},
	{
		question: 'Não tenho design pronto nem wireframe, você me ajuda nisso?',
		answer:
			'Sim! Posso cuidar de todo o processo: desde a concepção visual da interface (UI/UX limpo, moderno e focado em conversão) até a programação completa, estruturação do banco de dados e deploy na nuvem.',
	},
]

export function FAQSection() {
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
						<span className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">
							Tire suas dúvidas
						</span>
						<h2 className="text-3xl sm:text-4xl font-sentient font-bold text-white mt-1.5">
							Perguntas Frequentes
						</h2>
					</div>
					<a
						href="https://wa.me/5541991798306?text=Ol%C3%A1%20Pedro!%20Tenho%20uma%20d%C3%BAvida%20sobre%20contrata%C3%A7%C3%A3o%20de%20projeto."
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-emerald-400 hover:text-emerald-300 transition-colors"
					>
						<MessageCircle className="w-3.5 h-3.5" />
						<span>Outra dúvida? Fale no WhatsApp</span>
					</a>
				</div>

				{/* Accordion List */}
				<div className="space-y-3">
					{faqs.map((faq, idx) => {
						const isOpen = openIndex === idx
						return (
							<BlurFade key={faq.question} delay={0.05 * (idx + 1)} inView>
								<div
									className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
										isOpen
											? 'border-yellow-400/40 bg-zinc-900/80 shadow-lg'
											: 'border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/20'
									}`}
								>
									<button
										onClick={() => toggle(idx)}
										type="button"
										className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
										aria-expanded={isOpen}
									>
										<span className="font-sentient text-base sm:text-lg font-medium text-white">
											{faq.question}
										</span>
										<div
											className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
												isOpen
													? 'bg-yellow-400/20 text-yellow-400 rotate-180'
													: 'bg-white/5 text-zinc-400'
											}`}
										>
											<ChevronDown className="w-4 h-4" />
										</div>
									</button>

									{isOpen && (
										<div className="px-5 sm:px-6 pb-6 pt-1">
											<p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
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
