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
		question: 'Como funciona o orçamento e o tempo de resposta?',
		answer: 'Analisamos cada desafio de forma única. Após o primeiro contato, enviamos um orçamento detalhado em até 24h. Nossos projetos personalizados possuem investimento inicial a partir de R$ 2.000, garantindo a qualidade e o suporte que seu negócio merece.'
	},
	{
		question: 'Por que são cobradas mensalidades após a entrega?',
		answer: 'As mensalidades são fundamentais para manter seu projeto online e seguro. Elas cobrem os custos de hospedagem em servidores de alta performance (AWS/Vercel), manutenção preventiva, atualizações de segurança e suporte técnico especializado, garantindo que sua plataforma esteja sempre disponível e otimizada.'
	},
	{
		question: 'O site será otimizado para SEO e dispositivos móveis?',
		answer: 'Sim, todos os nossos projetos são desenvolvidos com a metodologia "Mobile First" e seguem as melhores práticas de SEO. Isso garante que seu site carregue rápido, funcione perfeitamente em qualquer tela (celulares, tablets e desktops) e seja encontrado facilmente pelos motores de busca como o Google.'
	},
	{
		question: 'Eu terei acesso ao código-fonte do projeto?',
		answer: 'Com certeza. Ao final do projeto, todo o código-fonte, documentação e acessos às plataformas de infraestrutura (como AWS ou Vercel) são transferidos integralmente para você.'
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
							Tire suas dúvidas sobre como trabalhamos e o que esperar da nossa parceria.
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
						<h4 className="font-sentient text-xl mb-2">Pronto para tirar sua ideia do papel?</h4>
						<p className="font-mono text-sm text-foreground/60 mb-8 max-w-md mx-auto">
							Receba um orçamento personalizado em até 24h e comece a transformar seu negócio hoje mesmo.
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
