'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { BlurFade } from './ui/blur-fade'
import { TextAnimate } from './ui/text-animate'
import { Pill } from './pill'

const faqs = [
	{
		question: 'Quanto tempo leva para desenvolver um projeto?',
		answer: 'O prazo varia conforme a complexidade. Uma Landing Page pode ser entregue em 5 a 10 dias, enquanto sistemas SaaS ou plataformas completas podem levar de 4 a 12 semanas. Defino um cronograma claro na fase de planejamento.'
	},
	{
		question: 'Quais tecnologias você utiliza nos projetos?',
		answer: 'Trabalho principalmente com Next.js, React, Node.js e TypeScript, usando PostgreSQL ou MySQL como banco de dados. A stack é escolhida de acordo com o que faz mais sentido para cada projeto.'
	},
	{
		question: 'Você oferece suporte após o lançamento?',
		answer: 'Sim, ofereço suporte e manutenção após a entrega. Podemos definir um modelo que funcione para o seu caso — seja suporte pontual ou acompanhamento contínuo.'
	},
	{
		question: 'Como funciona o processo de pagamento?',
		answer: 'Trabalho geralmente com um modelo de entrada + parcelas durante o desenvolvimento, ou por marcos de entrega (milestones). Aceito pagamentos via PIX ou transferência bancária.'
	},
	{
		question: 'Como funciona o orçamento?',
		answer: 'Analiso cada projeto de forma individual. Após o primeiro contato, envio uma proposta detalhada em até 24h, com escopo, prazo e valor — sem surpresas no meio do caminho.'
	},
	{
		question: 'O projeto vai ter custos recorrentes depois da entrega?',
		answer: 'Depende da infraestrutura escolhida. Hospedagem em servidores como Vercel, Railway ou AWS tem custos mensais — eu ajudo a escolher a opção mais adequada ao porte do projeto e explico tudo antes de decidirmos.'
	},
	{
		question: 'O projeto será otimizado para SEO e dispositivos móveis?',
		answer: 'Sim, todos os projetos que desenvolvo seguem a metodologia "Mobile First" e as melhores práticas de SEO — performance, acessibilidade e indexação fazem parte do processo, não são adicionados no final.'
	},
	{
		question: 'Você entrega o código-fonte?',
		answer: 'Com certeza. O código é seu. Ao final do projeto, todo o código-fonte, documentação e acessos às plataformas de infraestrutura são transferidos integralmente para você.'
	}
]

export function FAQ() {
	const half = Math.ceil(faqs.length / 2)
	const leftCol = faqs.slice(0, half)
	const rightCol = faqs.slice(half)

	return (
		<section className="py-24 px-4 relative z-10" id="faq">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<BlurFade inView>
						<div className="flex justify-center mb-4">
							<Pill className="w-full md:w-32">FAQ</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h2"
						by="word"
						animation="blurInUp"
						className="text-4xl md:text-5xl font-sentient mb-4"
						once
					>
						Perguntas Frequentes
					</TextAnimate>
					<BlurFade delay={0.3} inView>
						<p className="font-mono text-sm text-foreground/50 max-w-xl mx-auto">
							Respostas para as dúvidas mais comuns sobre como trabalho.
						</p>
					</BlurFade>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
					<BlurFade delay={0.4} inView>
						<Accordion type="single" collapsible className="w-full space-y-4">
							{leftCol.map((faq, index) => (
								<AccordionItem 
									key={index} 
									value={`left-${index}`}
									className="border border-foreground/15 bg-zinc-950 rounded-2xl px-6 transition-all hover:border-foreground/25"
								>
									<AccordionTrigger className="text-base font-sentient py-6 hover:no-underline text-left leading-snug">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-mono text-sm text-foreground/70 leading-relaxed pb-6 border-t border-foreground/5 pt-4">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</BlurFade>

					<BlurFade delay={0.5} inView>
						<Accordion type="single" collapsible className="w-full space-y-4">
							{rightCol.map((faq, index) => (
								<AccordionItem 
									key={index} 
									value={`right-${index}`}
									className="border border-foreground/15 bg-zinc-950 rounded-2xl px-6 transition-all hover:border-foreground/25"
								>
									<AccordionTrigger className="text-base font-sentient py-6 hover:no-underline text-left leading-snug">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-mono text-sm text-foreground/70 leading-relaxed pb-6 border-t border-foreground/5 pt-4">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</BlurFade>
				</div>

				<BlurFade delay={0.6} inView>
					<div className="mt-16 p-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 text-center max-w-2xl mx-auto">
						<h4 className="font-sentient text-xl mb-2">Tem um projeto em mente?</h4>
						<p className="font-mono text-sm text-foreground/60 mb-8 max-w-md mx-auto">
							Me conta o que você precisa — respondo em até 24h com uma proposta clara e sem enrolação.
						</p>
						<a 
							href="https://wa.me/5541991798306?text=Olá! Vim através do site e gostaria de solicitar um orçamento para um projeto personalizado."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-sentient px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
						>
							Solicitar Orçamento via WhatsApp
						</a>
					</div>
				</BlurFade>
			</div>
		</section>
	)
}
