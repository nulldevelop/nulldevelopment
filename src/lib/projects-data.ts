export interface ProjectData {
	id: string
	title: string
	slug: string
	shortDescription: string
	content: string
	image: string
	images: string[]
	stack: string[]
	link: string | null
	category: 'saas' | 'governamental' | 'landing'
	statusBadge?: string
}

export const curatedProjects: ProjectData[] = [
	{
		id: 'scopeflow',
		title: 'ScopeFlow',
		slug: 'scopeflow',
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
		image: '/uploads/projects/1780965131163-screenshot_2026_06_08_21_31_29.png',
		images: [
			'/uploads/projects/1780965133404-screenshot_2026_06_08_21_32_06.png',
			'/uploads/projects/1780965133680-screenshot_2026_06_08_21_31_58.png',
			'/uploads/projects/1780965133941-screenshot_2026_06_08_21_31_50.png',
		],
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'Prisma',
			'PostgreSQL',
			'TailwindCSS',
			'Shadcn UI',
			'Better Auth',
			'Recharts',
		],
		link: 'https://www.scopeflow.dev.br',
		category: 'saas',
		statusBadge: 'Ao Vivo',
	},
	{
		id: 'autosystem',
		title: 'AutoSystem',
		slug: 'autosystem',
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
		image: '/uploads/projects/1780964944554-screenshot_2026_06_08_21_28_32.png',
		images: [
			'/uploads/projects/1780964948143-screenshot_2026_06_08_21_29_00.png',
			'/uploads/projects/1780964948459-screenshot_2026_06_08_21_28_49.png',
			'/uploads/projects/1780964948775-screenshot_2026_06_08_21_28_42.png',
		],
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'Prisma',
			'PostgreSQL',
			'TailwindCSS',
			'Better Auth',
			'React PDF',
		],
		link: 'https://autosystem.nulldev.com.br',
		category: 'saas',
		statusBadge: 'Ao Vivo',
	},
	{
		id: 'rancho-capivari',
		title: 'Rancho Capivari',
		slug: 'rancho-capivari',
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
		image: '/uploads/projects/1780964829149-Home_Ranchoi.png',
		images: [
			'/uploads/projects/1780964831604-dedicada.png',
			'/uploads/projects/1780964831893-home1.png',
		],
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'TailwindCSS',
			'Motion',
			'Shadcn UI',
			'Embla Carousel',
		],
		link: 'https://ranchocapivari.com.br',
		category: 'landing',
		statusBadge: 'Ao Vivo',
	},
	{
		id: 'narrativa-blog',
		title: 'Narrativa Blog',
		slug: 'narrativa-blog',
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
		image: '/uploads/projects/1780964590076-home.png',
		images: [
			'/uploads/projects/1780964592596-dashboard.png',
			'/uploads/projects/1780964592861-noticia.png',
		],
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'Prisma',
			'MariaDB',
			'TailwindCSS',
			'Better Auth',
			'Tiptap',
		],
		link: 'https://narrativa.blog',
		category: 'saas',
		statusBadge: 'Ao Vivo',
	},
	{
		id: 'footeasy',
		title: 'FootEasy: Gestão Esportiva',
		slug: 'footeasy',
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
		image: '/fut11x.png',
		images: ['/fut11x.png'],
		stack: [
			'Next.js 16',
			'React 19',
			'TypeScript',
			'Prisma ORM',
			'MySQL',
			'Tailwind CSS',
		],
		link: null,
		category: 'governamental',
		statusBadge: 'Em Produção',
	},
	{
		id: 'sira',
		title: 'SIRA: Relatórios Administrativos',
		slug: 'sira',
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
		image: '/sira.png',
		images: [
			'/sira.png',
			'/uploads/projects/1773531426943-screencapture_sira_pmcgs_pr_gov_br_2026_03_14_20_28_03__1_.png',
		],
		stack: [
			'Next.js 15',
			'TypeScript',
			'Prisma ORM',
			'MySQL 8',
			'React 19',
			'Tailwind CSS 4',
			'Azure AD',
		],
		link: null,
		category: 'governamental',
		statusBadge: 'Em Uso',
	},
]
