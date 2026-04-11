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
		answer: 'O prazo varia conforme a complexidade. Uma Landing Page pode ser entregue em 5 a 10 dias, enquanto sistemas SaaS ou plataformas personalizadas podem levar de 4 a 12 semanas. Definimos um cronograma claro na fase de planejamento.'
	},
	{
		question: 'Quais tecnologias você utiliza nos projetos?',
		answer: 'Utilizamos as stacks mais modernas e performáticas do mercado, como Next.js, React, Node.js, TypeScript e bancos de dados como PostgreSQL e MongoDB. Isso garante que seu produto seja rápido, seguro e escalável.'
	},
	{
		question: 'Você oferece suporte após o lançamento?',
		answer: 'Sim, oferecemos diferentes modalidades de suporte e manutenção evolutiva. Garantimos que o sistema continue funcionando perfeitamente e possa receber novas funcionalidades conforme o seu negócio cresce.'
	},
	{
		question: 'Como funciona o processo de pagamento?',
		answer: 'Trabalhamos geralmente com um modelo de entrada + parcelas durante o desenvolvimento, ou por marcos de entrega (milestones). Aceitamos pagamentos via PIX, transferência bancária ou boleto.'
	},
	{
		question: 'Eu terei acesso ao código-fonte do projeto?',
		answer: 'Com certeza. Ao final do projeto, todo o código-fonte, documentação e acessos às plataformas de infraestrutura (como AWS ou Vercel) são transferidos integralmente para você.'
	}
]

export function FAQ() {
	return (
		<section className="py-24 px-4 relative z-10" id="faq">
			<div className="max-w-3xl mx-auto">
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
							Tire suas dúvidas sobre como trabalhamos e o que esperar da nossa parceria.
						</p>
					</BlurFade>
				</div>

				<BlurFade delay={0.4} inView>
					<Accordion type="single" collapsible className="w-full space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem 
								key={index} 
								value={`item-${index}`}
								className="border border-foreground/15 bg-zinc-950 rounded-2xl px-6 transition-all hover:border-foreground/25"
							>
								<AccordionTrigger className="text-base md:text-lg font-sentient py-6 hover:no-underline text-left">
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
		</section>
	)
}
