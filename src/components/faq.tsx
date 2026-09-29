'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Pill } from './pill'
import { BlurFade } from './ui/blur-fade'
import { TextAnimate } from './ui/text-animate'

const faqs = [
	{
		question: 'Quanto tempo leva para desenvolver um projeto ou SaaS?',
		answer:
			'O prazo varia de acordo com o escopo: uma Landing Page de alta conversão costuma levar entre 5 e 10 dias úteis. Projetos de SaaS, dashboards ou plataformas completas variam de 3 a 8 semanas. No primeiro contato, apresento um cronograma claro com datas de entrega definidas.',
	},
	{
		question: 'Como funciona o pagamento para contratações freelance?',
		answer:
			'Geralmente trabalhamos com o modelo tradicional de mercado: 50% de entrada para início do desenvolvimento e 50% na aprovação final antes do deploy definitivo (ou dividido em marcos/milestones para projetos maiores). Aceito PIX e transferência, com emissão de Nota Fiscal.',
	},
	{
		question: 'O código-fonte será 100% de minha propriedade?',
		answer:
			'Sim, com certeza. Você é o dono exclusivo do produto. Ao final do projeto, todo o repositório no GitHub, credenciais de bancos de dados, chaves de API e arquivos de documentação são transferidos integralmente para você ou sua empresa.',
	},
	{
		question: 'Você oferece suporte e garantia após a entrega?',
		answer:
			'Sim! Todo projeto inclui 30 dias de garantia técnica pós-lançamento para correção de eventuais inconsistências ou ajustes finos. Além disso, disponibilizo planos de manutenção contínua e evolução de funcionalidades caso deseje um parceiro de longo prazo.',
	},
	{
		question: 'Você emite Nota Fiscal e faz contrato formal?',
		answer:
			'Sim, atuo com emissão regular de Nota Fiscal de Serviços (prestação de serviços de software) e firmamos contrato formal especificando escopo, prazos, obrigações de ambas as partes e cláusula de confidencialidade (NDA).',
	},
	{
		question: 'Como acompanho o andamento do projeto durante a criação?',
		answer:
			'Sem burocracia e com total transparência: disponibilizo um link privado de homologação (staging) onde você pode testar a aplicação em tempo real conforme as telas e regras de negócio forem sendo implementadas. Realizamos alinhamentos semanais rápidos.',
	},
	{
		question: 'Quais tecnologias você mais recomenda para o meu produto?',
		answer:
			'Trabalho primordialmente com a stack Next.js (App Router), React 19, TypeScript, Tailwind CSS e bancos PostgreSQL / MySQL com Prisma ORM. Essa é a mesma stack utilizada pelas maiores startups do Vale do Silício, garantindo velocidade, segurança e fácil contratação de novos desenvolvedores no futuro.',
	},
	{
		question: 'E se eu já tiver um sistema pronto e precisar apenas de melhorias?',
		answer:
			'Também realizo consultorias pontuais, refatoração de código legado, otimização de performance (Core Web Vitals para carregamento instantâneo) e implementação de novas features ou integrações de APIs em sistemas já existentes.',
	},
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
							<Pill className="w-full md:w-44">Dúvidas Frequentes</Pill>
						</div>
					</BlurFade>
					<TextAnimate
						as="h2"
						by="word"
						animation="blurInUp"
						className="text-3xl sm:text-5xl md:text-6xl font-sentient mb-4 text-balance"
						once
					>
						Perguntas Frequentes
					</TextAnimate>
					<BlurFade delay={0.2} inView>
						<p className="font-mono text-sm sm:text-base text-foreground/60 max-w-xl mx-auto">
							Respostas diretas sobre prazos, contratação freelance, garantias e processo de entrega.
						</p>
					</BlurFade>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
					<BlurFade delay={0.3} inView>
						<Accordion type="single" collapsible className="w-full space-y-4">
							{leftCol.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`left-${index}`}
									className="border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-2xl px-6 transition-all hover:border-yellow-500/30"
								>
									<AccordionTrigger className="text-base font-sentient py-6 hover:no-underline text-left leading-snug text-foreground">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-mono text-xs sm:text-sm text-foreground/70 leading-relaxed pb-6 border-t border-white/5 pt-4">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</BlurFade>

					<BlurFade delay={0.4} inView>
						<Accordion type="single" collapsible className="w-full space-y-4">
							{rightCol.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`right-${index}`}
									className="border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-2xl px-6 transition-all hover:border-yellow-500/30"
								>
									<AccordionTrigger className="text-base font-sentient py-6 hover:no-underline text-left leading-snug text-foreground">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-mono text-xs sm:text-sm text-foreground/70 leading-relaxed pb-6 border-t border-white/5 pt-4">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</BlurFade>
				</div>
			</div>
		</section>
	)
}
