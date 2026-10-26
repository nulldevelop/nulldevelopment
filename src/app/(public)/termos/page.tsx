import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { company, companyAddress } from '@/lib/company'

export const metadata: Metadata = {
	title: 'Termos de Uso | Pedro Henrique Andrade',
	description: 'Condições gerais de uso do site e de contratação dos serviços.',
}

export default function TermosPage() {
	return (
		<LegalPage title="Termos de Uso" updatedAt="26/10/2026">
			<section>
				<h2>1. Identificação</h2>
				<p>
					Este site pertence a <strong>{company.legalName}</strong>, {company.legalStatus}, CNPJ nº {company.cnpj},
					com sede em {companyAddress}. Ao utilizá-lo, você concorda com estes Termos.
				</p>
			</section>

			<section>
				<h2>2. Objeto</h2>
				<p>
					O site apresenta o portfólio e os serviços de desenvolvimento de software e tecnologia oferecidos por{' '}
					{company.ownerName}, e permite o envio de solicitações de contato e orçamento.
				</p>
			</section>

			<section>
				<h2>3. Contratação de serviços</h2>
				<ul>
					<li>Prazos, escopo, valores e forma de pagamento são definidos em proposta ou contrato específico para cada projeto.</li>
					<li>O envio de uma mensagem ou pedido de orçamento não gera obrigação de contratação para nenhuma das partes.</li>
					<li>Emitimos nota fiscal de serviços conforme a legislação aplicável.</li>
				</ul>
			</section>

			<section>
				<h2>4. Propriedade intelectual</h2>
				<p>
					Textos, imagens, marcas, layouts e códigos do site são protegidos por direitos autorais e não podem ser
					copiados ou reutilizados sem autorização. Projetos exibidos no portfólio pertencem a seus respectivos
					titulares e são mostrados com finalidade ilustrativa.
				</p>
			</section>

			<section>
				<h2>5. Uso adequado</h2>
				<p>
					É proibido utilizar o site para fins ilícitos, tentar acessar áreas restritas, comprometer sua segurança
					ou enviar conteúdo ofensivo, falso ou que viole direitos de terceiros.
				</p>
			</section>

			<section>
				<h2>6. Limitação de responsabilidade</h2>
				<p>
					Empenhamos esforços para manter as informações corretas e o site disponível, mas não garantimos
					funcionamento ininterrupto nem ausência de erros. Links para sites de terceiros são fornecidos por
					conveniência, sem responsabilidade pelo seu conteúdo.
				</p>
			</section>

			<section>
				<h2>7. Privacidade</h2>
				<p>
					O tratamento de dados pessoais é descrito na <Link href="/privacidade">Política de Privacidade</Link>.
				</p>
			</section>

			<section>
				<h2>8. Alterações e foro</h2>
				<p>
					Estes Termos podem ser alterados a qualquer momento. Fica eleito o foro da comarca de Campina Grande do
					Sul/PR para dirimir quaisquer controvérsias, ressalvado o foro do consumidor quando aplicável.
				</p>
			</section>

			<section>
				<h2>9. Contato</h2>
				<p>
					<a href={`mailto:${company.email}`}>{company.email}</a> – {company.phone}
				</p>
			</section>
		</LegalPage>
	)
}
