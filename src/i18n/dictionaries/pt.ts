export const pt = {
	meta: {
		title: 'Pedro Henrique | Full Stack Developer & Software Engineer',
		description:
			'Portfólio e serviços de desenvolvimento Full Stack de Pedro Henrique Andrade. Especialista em Next.js, React, Node.js, TypeScript e arquitetura de software escalável. Disponível para projetos e freelance.',
	},
	language: {
		label: 'Idioma',
	},
	nav: {
		projects: 'Projetos',
		career: 'Trajetória',
		services: 'Serviços',
		faq: 'FAQ',
		contact: 'Contato',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		navigation: 'Navegação',
		whatsappDirect: 'WhatsApp Direto',
	},
	whatsapp: {
		budget: 'Olá Pedro! Vi seu portfólio e gostaria de um orçamento para um projeto.',
		question: 'Olá Pedro! Tenho uma dúvida sobre contratação de projeto.',
		quote: 'Olá Pedro! Gostaria de um orçamento para um projeto.',
		similar:
			'Olá Pedro! Vi o case do {title} no seu portfólio e gostaria de um projeto similar para o meu negócio.',
	},
	hero: {
		available: 'Disponível para novos projetos freelance',
		role: 'Full Stack Engineer • Next.js & TypeScript',
		value:
			'Construo aplicações web de alta performance, plataformas SaaS escaláveis e landing pages focadas em conversão, do banco de dados ao deploy final.',
		cta: 'Falar no WhatsApp',
		projects: 'Ver Projetos',
	},
	stats: [
		{ value: '+770', label: 'Usuários ativos', detail: 'Sistemas rodando em produção' },
		{ value: '95+', label: 'Google Lighthouse', detail: 'SEO, performance e acessibilidade' },
		{ value: '100%', label: 'Código tipado', detail: 'TypeScript estrito e boas práticas' },
		{
			value: '1 a 3 sem',
			label: 'Prazo médio de MVP',
			detail: 'Desenvolvimento ágil e entregas rápidas',
		},
	],
	portfolio: {
		eyebrow: 'Cases Selecionados',
		title: 'Projetos em Destaque',
		all: 'Todos',
		saas: 'SaaS & Web Apps',
		public: 'Setor Público',
		landing: 'Landing Pages',
		live: 'Ao Vivo',
		viewCase: 'Ver Case',
		viewFullCase: 'Ver Case Completo',
		caseBadge: 'Case',
	},
	badges: {
		'Ao Vivo': 'Ao Vivo',
		'Em Produção': 'Em Produção',
		'Em Uso': 'Em Uso',
	} as Record<string, string>,
	projects: {
		scopeflow: {
			shortDescription:
				'SaaS completo de geração de propostas comerciais e contratos digitais para desenvolvedores freelancers e software houses.',
			content: `
## ScopeFlow

O **ScopeFlow** é uma plataforma SaaS voltada para desenvolvedores freelancers e software houses que precisam criar orçamentos, propostas comerciais profissionais e contratos digitais de forma rápida e organizada.

### Funcionalidades Principais:
- **Catálogo de funcionalidades**: cadastre módulos e features reutilizáveis com horas estimadas, complexidade e categoria para montar orçamentos em segundos.
- **Calculadora de valor/hora**: calculadora inteligente baseada em metas de renda, custos fixos, impostos e margem de lucro.
- **Editor de Orçamentos**: itens de catálogo, descontos, acréscimos por urgência e condições de parcelamento.
- **Propostas Profissionais**: compartilháveis via link público exclusivo ou exportáveis em PDF personalizado.
- **Contratos Digitais**: criação e assinatura digital pelo cliente diretamente pelo link, sem fricção.
- **Métricas & CRM**: acompanhe taxa de conversão, ticket médio e histórico por cliente com gráficos interativos.

### Arquitetura & Tecnologias:
- Desenvolvido com **Next.js (App Router)**, **TypeScript**, **PostgreSQL** e **Prisma ORM**.
- Autenticação e sessões corporativas com **Better Auth**.
- Gráficos analíticos com **Recharts** e interface com **Tailwind CSS** e **Shadcn UI**.
- Integração de pagamentos com webhooks automatizados via **AbacatePay**.
			`.trim(),
		},
		autosystem: {
			shortDescription:
				'Sistema SaaS completo de gestão para oficinas mecânicas: orçamentos, ordens de serviço, estoque, financeiro e CRM.',
			content: `
## AutoSystem

O **AutoSystem** é uma solução SaaS robusta desenhada para centros automotivos e oficinas mecânicas que necessitam centralizar a operação do negócio em um único sistema seguro e em nuvem.

### Funcionalidades Principais:
- **Ordens de Serviço (OS)**: Abertura, diagnóstico técnico, registro de peças utilizadas e cálculo automático de mão de obra.
- **Gestão Financeira & Cobranças**: Controle de contas a pagar/receber, conciliação e relatórios de lucratividade por serviço.
- **Controle de Estoque Inteligente**: Baixa automática de peças e alertas para reposição de insumos críticos.
- **Emissão de Orçamentos em PDF**: Geração instantânea de comprovantes e orçamentos detalhados para envio via WhatsApp aos clientes.
- **Painel CRM do Cliente**: Histórico veicular por placa e agendamento de revisões preventivas periódicas.

### Arquitetura & Tecnologias:
- Desenvolvido em **Next.js**, **React**, **TypeScript** e **Prisma ORM**.
- Banco de dados relacional **PostgreSQL** com suporte multi-tenant.
- Geração de relatórios e faturas em PDF via **React PDF**.
- Controle de acesso com múltiplos níveis de permissão (gerentes, mecânicos e atendentes).
			`.trim(),
		},
		'rancho-capivari': {
			shortDescription:
				'Site institucional e reservas de cabanas rurais exclusivas a 45 minutos de Curitiba, com foco em privacidade e alta conversão.',
			content: `
## Rancho Capivari

O projeto **Rancho Capivari** foi desenvolvido para oferecer uma experiência digital imersiva, elegante e intuitiva para reserva de chalés e cabanas em meio à natureza.

### Funcionalidades & Destaques:
- **Experiência Visual Imersiva**: Galerias fotográficas em alta resolução com carrosséis fluidos otimizados para dispositivos móveis.
- **Seletor de Datas & Calendário**: Verificação de disponibilidade e fluxo intuitivo de consulta de diárias.
- **Integração com WhatsApp**: Conversão direta de leads com mensagens pré-configuradas contendo as datas e cabanas escolhidas.
- **Performance de Carregamento**: Otimização avançada de imagens e pontuação máxima no Google Core Web Vitals.

### Tecnologias Utilizadas:
- Construído com **Next.js**, **React 19**, **TypeScript** e **Tailwind CSS**.
- Animações refinadas com **Motion** e componentes acessíveis com **Radix UI**.
- Monitoramento de tráfego e métricas de visitantes com **Vercel Analytics**.
			`.trim(),
		},
		'narrativa-blog': {
			shortDescription:
				'Portal e blog editorial focado em profundidade analítica, rigor editorial, tipografia impecável e alta velocidade de leitura.',
			content: `
## Narrativa Blog

O **Narrativa Blog** é uma plataforma editorial e de notícias projetada com foco em legibilidade, performance de conteúdo e indexação orgânica (SEO).

### Funcionalidades Principais:
- **Editor de Conteúdo Rico**: Painel com editor visual tipo Notion/Medium para publicação de artigos com suporte a tipografia refinada.
- **Sistema de Gestão de Conteúdo (CMS)**: Painel administrativo com controle de rascunhos, revisões, autores e categorias.
- **SEO On-Page Automatizado**: Metadados dinâmicos, Open Graph para redes sociais, dados estruturados JSON-LD e feeds RSS.
- **Velocidade Extrema**: Renderização estática com Server Components para abertura instantânea dos artigos.

### Arquitetura & Tecnologias:
- **Next.js**, **React**, **TypeScript** e **Prisma ORM**.
- Banco de dados relacional **MariaDB**.
- Autenticação de redatores e administradores com **Better Auth**.
			`.trim(),
		},
		footeasy: {
			shortDescription:
				'Sistema corporativo web para gerenciamento de competições esportivas municipais com 772 associados, 24 times e 693 atletas cadastrados.',
			content: `
## FootEasy: Gestão de Campeonatos Esportivos

O **FootEasy** é um sistema corporativo completo desenvolvido para modernizar e gerenciar as competições e campeonatos esportivos municipais da Prefeitura de Campina Grande do Sul.

### Números em Produção:
- **772** associados cadastrados
- **24** clubes e equipes ativas
- **693** atletas cadastrados com documentação e histórico

### Funcionalidades Principais:
- **Tabelas de Classificação Automatizadas**: Pontuação, critérios de desempate, saldo de gols e chaveamentos calculados em tempo real.
- **Súmulas Digitais**: Registro online de gols, escalações, cartões amarelos e vermelhos e artilharia durante as rodadas.
- **Inscrição & Regularização**: Fichas completas de atletas, controle de documentação e suspensões automáticas por advertências.
- **Relatórios Oficiais**: Fechamento de rodadas com exportação de relatórios homologados para a secretaria.

### Arquitetura & Tecnologias:
- Desenvolvido com **Next.js**, **TypeScript**, **Prisma ORM** e banco **MySQL**.
- Modelagem de dados de alta integridade para garantir consistência de resultados simultâneos.
			`.trim(),
		},
		sira: {
			shortDescription:
				'Fiscalização de contratos públicos com relatórios em PDF assinados digitalmente, QR Code e autenticação via SSO Azure AD.',
			content: `
## SIRA: Sistema Integrado de Relatórios Administrativos

O **SIRA** é uma plataforma corporativa desenvolvida para o setor público municipal com foco em conformidade e fiscalização de contratos públicos administrativos.

### Funcionalidades Principais:
- **Fiscalização Contratual**: Gestão completa de vistorias, medições de obras e serviços contratados pela prefeitura.
- **Relatórios Técnicos em PDF**: Geração automatizada de relatórios com layout oficial e fotos de vistoria.
- **Assinatura Digital & Validação por QR Code**: Cada documento emitido contém hash de verificação e QR Code para validação pública no Portal da Transparência.
- **Integração com Azure AD**: Single Sign-On (SSO) corporativo com permissões de acesso baseadas em perfis (RBAC).

### Impacto e Resultados:
- Redução de dias de burocracia para emissão e arquivamento imediato de vistorias técnicas.
- 100% de transparência e auditoria de ações por servidor.

### Arquitetura:
- **Next.js 15**, **React 19**, **TypeScript**, **Prisma ORM**, **MySQL 8** e integração com **Azure AD**.
			`.trim(),
		},
	} as Record<string, { shortDescription: string; content: string }>,
	titles: {
		footeasy: 'FootEasy: Gestão Esportiva',
		sira: 'SIRA: Relatórios Administrativos',
	} as Record<string, string>,
	experience: {
		eyebrow: 'Carreira',
		title: 'Trajetória & Experiência',
		items: [
			{
				company: 'Prefeitura Municipal de Campina Grande do Sul',
				role: 'Desenvolvedor Full Stack & Arquiteto de Software',
				period: '2025 / Presente',
				badge: 'Setor Público',
				description:
					'Liderança técnica e desenvolvimento integral de sistemas corporativos governamentais em produção:',
				highlights: [
					'FootEasy: Gestão completa de torneios com 770+ associados, 24 times e 693 atletas cadastrados.',
					'SIRA: Fiscalização de contratos públicos com relatórios PDF assinados digitalmente, QR Code e SSO Azure AD.',
					'BookEase: Plataforma municipal de acervo com classificação DDC, controle de empréstimos e relatórios analíticos.',
				],
			},
			{
				company: 'Engenharia Web Freelance & Consultoria',
				role: 'Desenvolvedor Full Stack Independente',
				period: '2023 / Presente',
				badge: 'Freelance',
				description:
					'Desenvolvimento ponta a ponta de soluções digitais sob medida para empresas e empreendedores:',
				highlights: [
					'Landing pages de alta conversão com Lighthouse 95+ e integração instantânea ao WhatsApp.',
					'Aplicações SaaS e painéis administrativos com autenticação segura e relatórios dinâmicos.',
					'Integrações com gateways de pagamento (Stripe, Mercado Pago e PIX automatizado).',
				],
			},
		],
	},
	services: {
		eyebrow: 'Soluções & Tecnologias',
		title: 'Como posso ajudar seu projeto',
		requestQuote: 'Pedir orçamento personalizado',
		included: 'O que está incluso:',
		startProject: 'Iniciar este projeto',
		items: [
			{
				title: 'SaaS & Aplicações Web',
				description:
					'Produtos digitais do zero: modelagem de banco, autenticação segura, regras de negócio e interface fluida.',
				deliverables: [
					'Modelagem Postgres & Prisma ORM',
					'Autenticação e controle de permissões (RBAC)',
					'Painel administrativo e fluxo de checkout',
					'Deploy automatizado em infraestrutura escalável',
				],
			},
			{
				title: 'Landing Pages de Conversão',
				description:
					'Páginas rápidas, acessíveis e focadas em vendas ou captação de leads, com integração direta ao WhatsApp.',
				deliverables: [
					'Design responsivo mobile-first',
					'Pontuação Google Lighthouse 95+',
					'Integração direta com WhatsApp e formulários',
					'SEO técnico e tags Open Graph para redes',
				],
			},
			{
				title: 'Dashboards & Gestão',
				description:
					'Painéis corporativos com métricas em tempo real, relatórios em PDF com QR Code e controle de acessos.',
				deliverables: [
					'Gráficos interativos em tempo real',
					'Exportação de relatórios em PDF e Excel',
					'Assinatura digital e validação por QR Code',
					'Autenticação corporativa (SSO / Azure AD)',
				],
			},
		],
		techTitle: 'Tecnologias que domino',
		techSubtitle: 'Stack moderna para garantir alta velocidade e facilidade de manutenção.',
		ownCode: 'Código 100% seu',
		warranty: 'Garantia inclusa',
	},
	faq: {
		eyebrow: 'Tire suas dúvidas',
		title: 'Perguntas Frequentes',
		otherQuestion: 'Outra dúvida? Fale no WhatsApp',
		items: [
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
		],
	},
	contact: {
		eyebrow: 'Contato Direto',
		title: 'Vamos tirar sua ideia do papel?',
		subtitle:
			'Chame direto no WhatsApp para uma resposta em poucos minutos ou envie os detalhes do seu projeto abaixo.',
		whatsappTitle: 'WhatsApp Direto',
		whatsappNote: 'Canal mais rápido para orçamentos e dúvidas.',
		emailTitle: 'Email',
		copy: 'Copiar',
		copied: 'Copiado',
		emailCopied: 'Email copiado!',
		reply: 'Respondo em até 24 horas úteis',
		invoice: 'Emissão de Nota Fiscal de Serviços (PJ)',
		name: 'Seu Nome',
		namePlaceholder: 'Ex: Carlos Oliveira',
		phone: 'WhatsApp ou Telefone',
		message: 'Como posso te ajudar?',
		messagePlaceholder: 'Conte brevemente sobre o projeto ou sistema que você precisa...',
		submit: 'Enviar Mensagem',
		sending: 'Enviando...',
		errName: 'Informe seu nome.',
		errPhone: 'Informe seu WhatsApp ou telefone.',
		errMessage: 'Descreva brevemente o que você precisa.',
		success: 'Mensagem enviada! Responderei em breve.',
		errorSend: 'Erro ao enviar. Chame diretamente no WhatsApp!',
		errorConnection: 'Erro de conexão. Fale comigo pelo WhatsApp!',
		consentBefore: 'Ao enviar, você concorda com a',
		consentMiddle: 'e os',
		consentAfter: '.',
	},
	floatingWhatsapp: {
		aria: 'Atendimento rápido',
		title: 'Conversar no WhatsApp agora',
		label: 'Online • Orçamento rápido',
	},
	footer: {
		role: 'Full Stack Engineer',
		top: 'Topo',
		privacy: 'Política de Privacidade',
		terms: 'Termos de Uso',
		rights: 'Todos os direitos reservados.',
	},
	company: {
		legalStatus: 'Microempreendedor Individual (MEI)',
	},
	projectPage: {
		backToPortfolio: 'Voltar ao Portfólio',
		cases: 'Cases',
		liveBadge: 'Ao Vivo',
		caseStudy: 'Case Study',
		viewLive: 'Ver Projeto Ao Vivo',
		similar: 'Projeto Similar',
		myRole: 'Minha Atuação',
		myRoleValue: 'Full Stack & Arquiteto',
		solutionType: 'Tipo de Solução',
		saas: 'Plataforma SaaS',
		public: 'Setor Público',
		landing: 'Landing Page & Web',
		status: 'Status',
		access: 'Código & Acesso',
		online: 'Online',
		private: 'Privado / Corporativo',
		stack: 'Tecnologias Utilizadas:',
		screens: 'Telas do Projeto',
		screensHint: 'Clique em qualquer captura para ampliar em alta resolução:',
		needSimilar: 'Precisa de algo semelhante?',
		needSimilarText: 'Posso desenvolver uma solução com essa mesma qualidade para sua empresa.',
		whatsapp: 'Falar no WhatsApp',
		requestQuote: 'Solicitar Orçamento',
	},
	legal: {
		lastUpdated: 'Última atualização',
		updatedAt: '26/10/2026',
		back: 'Voltar ao site',
		privacyLinkText: 'Política de Privacidade',
		privacy: {
			metaTitle: 'Política de Privacidade | Pedro Henrique Andrade',
			metaDescription:
				'Como os dados pessoais são coletados, usados e protegidos neste site, conforme a LGPD.',
			title: 'Política de Privacidade',
			sections: [
				{
					h: '1. Quem somos',
					p: [
						'Este site é operado por **{legalName}**, {legalStatus}, inscrita no CNPJ nº {cnpj}, com sede em {address}. Para fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), somos o **controlador** dos dados pessoais tratados aqui.',
					],
				},
				{
					h: '2. Dados que coletamos',
					ul: [
						'**Formulário de contato:** nome, telefone/WhatsApp e o conteúdo da mensagem que você enviar.',
						'**Contato direto:** dados que você nos fornecer por WhatsApp ou e-mail.',
						'**Dados de navegação:** informações técnicas e estatísticas de acesso (páginas visitadas, dispositivo, navegador, país), coletadas de forma agregada pela Vercel Analytics.',
						'**Preferência de idioma:** um cookie técnico que apenas guarda o idioma escolhido no site.',
					],
				},
				{
					h: '3. Finalidades e bases legais',
					ul: [
						'Responder solicitações, dúvidas e pedidos de orçamento (procedimentos preliminares a contrato).',
						'Prestar os serviços contratados e emitir documentos fiscais (execução de contrato e obrigação legal).',
						'Medir e melhorar o desempenho do site (legítimo interesse).',
					],
				},
				{
					h: '4. Compartilhamento',
					p: [
						'Não vendemos dados pessoais. Podemos compartilhá-los apenas com provedores que viabilizam a operação do site (hospedagem, banco de dados e analytics) e quando exigido por lei ou autoridade competente.',
					],
				},
				{
					h: '5. Armazenamento e segurança',
					p: [
						'Os dados são mantidos pelo tempo necessário para cumprir as finalidades acima e eventuais obrigações legais. Adotamos medidas técnicas razoáveis para protegê-los contra acesso não autorizado, perda ou alteração.',
					],
				},
				{
					h: '6. Seus direitos',
					p: [
						'Nos termos do art. 18 da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados, informações sobre compartilhamento e revogação de consentimento. Envie sua solicitação para {email}.',
					],
				},
				{
					h: '7. Cookies',
					p: [
						'Utilizamos apenas recursos técnicos necessários ao funcionamento do site (como a preferência de idioma) e ferramentas de análise agregada. Você pode bloquear ou apagar cookies nas configurações do seu navegador.',
					],
				},
				{
					h: '8. Alterações',
					p: [
						'Esta política pode ser atualizada a qualquer momento; a data da última revisão consta no topo da página.',
					],
				},
				{
					h: '9. Contato',
					p: ['{owner} – {email} – {phone}'],
				},
			],
		},
		terms: {
			metaTitle: 'Termos de Uso | Pedro Henrique Andrade',
			metaDescription: 'Condições gerais de uso do site e de contratação dos serviços.',
			title: 'Termos de Uso',
			sections: [
				{
					h: '1. Identificação',
					p: [
						'Este site pertence a **{legalName}**, {legalStatus}, CNPJ nº {cnpj}, com sede em {address}. Ao utilizá-lo, você concorda com estes Termos.',
					],
				},
				{
					h: '2. Objeto',
					p: [
						'O site apresenta o portfólio e os serviços de desenvolvimento de software e tecnologia oferecidos por {owner}, e permite o envio de solicitações de contato e orçamento.',
					],
				},
				{
					h: '3. Contratação de serviços',
					ul: [
						'Prazos, escopo, valores e forma de pagamento são definidos em proposta ou contrato específico para cada projeto.',
						'O envio de uma mensagem ou pedido de orçamento não gera obrigação de contratação para nenhuma das partes.',
						'Emitimos nota fiscal de serviços conforme a legislação aplicável.',
					],
				},
				{
					h: '4. Propriedade intelectual',
					p: [
						'Textos, imagens, marcas, layouts e códigos do site são protegidos por direitos autorais e não podem ser copiados ou reutilizados sem autorização. Projetos exibidos no portfólio pertencem a seus respectivos titulares e são mostrados com finalidade ilustrativa.',
					],
				},
				{
					h: '5. Uso adequado',
					p: [
						'É proibido utilizar o site para fins ilícitos, tentar acessar áreas restritas, comprometer sua segurança ou enviar conteúdo ofensivo, falso ou que viole direitos de terceiros.',
					],
				},
				{
					h: '6. Limitação de responsabilidade',
					p: [
						'Empenhamos esforços para manter as informações corretas e o site disponível, mas não garantimos funcionamento ininterrupto nem ausência de erros. Links para sites de terceiros são fornecidos por conveniência, sem responsabilidade pelo seu conteúdo.',
					],
				},
				{
					h: '7. Privacidade',
					p: ['O tratamento de dados pessoais é descrito na {privacyLink}.'],
				},
				{
					h: '8. Alterações e foro',
					p: [
						'Estes Termos podem ser alterados a qualquer momento. Fica eleito o foro da comarca de Campina Grande do Sul/PR para dirimir quaisquer controvérsias, ressalvado o foro do consumidor quando aplicável.',
					],
				},
				{
					h: '9. Contato',
					p: ['{email} – {phone}'],
				},
			],
		},
	},
}
