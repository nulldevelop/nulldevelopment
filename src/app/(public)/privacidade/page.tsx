import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { company, companyAddress } from '@/lib/company'

export const metadata: Metadata = {
	title: 'Política de Privacidade | Pedro Henrique Andrade',
	description: 'Como os dados pessoais são coletados, usados e protegidos neste site, conforme a LGPD.',
}

export default function PrivacidadePage() {
	return (
		<LegalPage title="Política de Privacidade" updatedAt="26/10/2026">
			<section>
				<h2>1. Quem somos</h2>
				<p>
					Este site é operado por <strong>{company.legalName}</strong>, {company.legalStatus}, inscrita no CNPJ
					nº {company.cnpj}, com sede em {companyAddress}. Para fins da Lei Geral de Proteção de Dados (Lei nº
					13.709/2018 – LGPD), somos o <strong>controlador</strong> dos dados pessoais tratados aqui.
				</p>
			</section>

			<section>
				<h2>2. Dados que coletamos</h2>
				<ul>
					<li>
						<strong>Formulário de contato:</strong> nome, telefone/WhatsApp e o conteúdo da mensagem que você
						enviar.
					</li>
					<li>
						<strong>Contato direto:</strong> dados que você nos fornecer por WhatsApp ou e-mail.
					</li>
					<li>
						<strong>Dados de navegação:</strong> informações técnicas e estatísticas de acesso (páginas
						visitadas, dispositivo, navegador, país), coletadas de forma agregada pela Vercel Analytics.
					</li>
				</ul>
			</section>

			<section>
				<h2>3. Finalidades e bases legais</h2>
				<ul>
					<li>Responder solicitações, dúvidas e pedidos de orçamento (procedimentos preliminares a contrato).</li>
					<li>Prestar os serviços contratados e emitir documentos fiscais (execução de contrato e obrigação legal).</li>
					<li>Medir e melhorar o desempenho do site (legítimo interesse).</li>
				</ul>
			</section>

			<section>
				<h2>4. Compartilhamento</h2>
				<p>
					Não vendemos dados pessoais. Podemos compartilhá-los apenas com provedores que viabilizam a operação do
					site (hospedagem, banco de dados e analytics) e quando exigido por lei ou autoridade competente.
				</p>
			</section>

			<section>
				<h2>5. Armazenamento e segurança</h2>
				<p>
					Os dados são mantidos pelo tempo necessário para cumprir as finalidades acima e eventuais obrigações
					legais. Adotamos medidas técnicas razoáveis para protegê-los contra acesso não autorizado, perda ou
					alteração.
				</p>
			</section>

			<section>
				<h2>6. Seus direitos</h2>
				<p>
					Nos termos do art. 18 da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
					anonimização, portabilidade, eliminação dos dados, informações sobre compartilhamento e revogação de
					consentimento. Envie sua solicitação para <a href={`mailto:${company.email}`}>{company.email}</a>.
				</p>
			</section>

			<section>
				<h2>7. Cookies</h2>
				<p>
					Utilizamos apenas recursos técnicos necessários ao funcionamento do site e ferramentas de análise
					agregada. Você pode bloquear ou apagar cookies nas configurações do seu navegador.
				</p>
			</section>

			<section>
				<h2>8. Alterações</h2>
				<p>Esta política pode ser atualizada a qualquer momento; a data da última revisão consta no topo da página.</p>
			</section>

			<section>
				<h2>9. Contato</h2>
				<p>
					{company.ownerName} – <a href={`mailto:${company.email}`}>{company.email}</a> – {company.phone}
				</p>
			</section>
		</LegalPage>
	)
}
