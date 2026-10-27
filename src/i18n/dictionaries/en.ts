import type { Dictionary } from './types'

export const en: Dictionary = {
	meta: {
		title: 'Pedro Henrique | Full Stack Developer & Software Engineer',
		description:
			'Portfolio and Full Stack development services by Pedro Henrique Andrade. Specialist in Next.js, React, Node.js, TypeScript and scalable software architecture. Available for projects and freelance work.',
	},
	language: {
		label: 'Language',
	},
	nav: {
		projects: 'Projects',
		career: 'Experience',
		services: 'Services',
		faq: 'FAQ',
		contact: 'Contact',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		navigation: 'Navigation',
		whatsappDirect: 'Direct WhatsApp',
	},
	whatsapp: {
		budget: "Hi Pedro! I saw your portfolio and I'd like a quote for a project.",
		question: 'Hi Pedro! I have a question about hiring you for a project.',
		quote: "Hi Pedro! I'd like a quote for a project.",
		similar:
			"Hi Pedro! I saw the {title} case study in your portfolio and I'd like a similar project for my business.",
	},
	hero: {
		available: 'Available for new freelance projects',
		role: 'Full Stack Engineer • Next.js & TypeScript',
		value:
			'I build high-performance web applications, scalable SaaS platforms and conversion-focused landing pages, from the database to the final deploy.',
		cta: 'Chat on WhatsApp',
		projects: 'View Projects',
	},
	stats: [
		{ value: '+770', label: 'Active users', detail: 'Systems running in production' },
		{ value: '95+', label: 'Google Lighthouse', detail: 'SEO, performance and accessibility' },
		{ value: '100%', label: 'Typed code', detail: 'Strict TypeScript and best practices' },
		{
			value: '1 to 3 wk',
			label: 'Average MVP time',
			detail: 'Agile development and fast deliveries',
		},
	],
	portfolio: {
		eyebrow: 'Selected Case Studies',
		title: 'Featured Projects',
		all: 'All',
		saas: 'SaaS & Web Apps',
		public: 'Public Sector',
		landing: 'Landing Pages',
		live: 'Live',
		viewCase: 'View Case',
		viewFullCase: 'View Full Case Study',
		caseBadge: 'Case',
	},
	badges: {
		'Ao Vivo': 'Live',
		'Em Produção': 'In Production',
		'Em Uso': 'In Use',
	},
	projects: {
		scopeflow: {
			shortDescription:
				'Complete SaaS for generating commercial proposals and digital contracts for freelance developers and software houses.',
			content: `
## ScopeFlow

**ScopeFlow** is a SaaS platform for freelance developers and software houses who need to create quotes, professional commercial proposals and digital contracts quickly and in an organized way.

### Key Features:
- **Feature catalog**: register reusable modules and features with estimated hours, complexity and category to build quotes in seconds.
- **Hourly rate calculator**: smart calculator based on income goals, fixed costs, taxes and profit margin.
- **Quote Editor**: catalog items, discounts, urgency surcharges and installment terms.
- **Professional Proposals**: shareable through an exclusive public link or exportable as a custom PDF.
- **Digital Contracts**: created and signed digitally by the client straight from the link, with no friction.
- **Metrics & CRM**: track conversion rate, average ticket and per-client history with interactive charts.

### Architecture & Technologies:
- Built with **Next.js (App Router)**, **TypeScript**, **PostgreSQL** and **Prisma ORM**.
- Enterprise authentication and sessions with **Better Auth**.
- Analytical charts with **Recharts** and UI with **Tailwind CSS** and **Shadcn UI**.
- Payments integration with automated webhooks via **AbacatePay**.
			`.trim(),
		},
		autosystem: {
			shortDescription:
				'Complete SaaS management system for auto repair shops: quotes, work orders, inventory, finance and CRM.',
			content: `
## AutoSystem

**AutoSystem** is a robust SaaS solution designed for automotive centers and auto repair shops that need to centralize their operations in a single secure, cloud-based system.

### Key Features:
- **Work Orders**: Opening, technical diagnosis, parts used and automatic labor calculation.
- **Finance & Billing**: Accounts payable/receivable, reconciliation and profitability reports per service.
- **Smart Inventory Control**: Automatic parts deduction and alerts to restock critical supplies.
- **PDF Quotes**: Instant receipts and detailed quotes ready to be sent to customers via WhatsApp.
- **Customer CRM Panel**: Vehicle history by license plate and scheduling of periodic preventive maintenance.

### Architecture & Technologies:
- Built with **Next.js**, **React**, **TypeScript** and **Prisma ORM**.
- **PostgreSQL** relational database with multi-tenant support.
- PDF reports and invoices generated with **React PDF**.
- Access control with multiple permission levels (managers, mechanics and receptionists).
			`.trim(),
		},
		'rancho-capivari': {
			shortDescription:
				'Institutional website and booking for exclusive rural cabins 45 minutes from Curitiba, focused on privacy and high conversion.',
			content: `
## Rancho Capivari

The **Rancho Capivari** project was built to offer an immersive, elegant and intuitive digital experience for booking chalets and cabins surrounded by nature.

### Features & Highlights:
- **Immersive Visual Experience**: High-resolution photo galleries with fluid carousels optimized for mobile devices.
- **Date Picker & Calendar**: Availability check and an intuitive flow to inquire about nightly rates.
- **WhatsApp Integration**: Direct lead conversion with pre-filled messages containing the chosen dates and cabins.
- **Loading Performance**: Advanced image optimization and top scores on Google Core Web Vitals.

### Technologies Used:
- Built with **Next.js**, **React 19**, **TypeScript** and **Tailwind CSS**.
- Refined animations with **Motion** and accessible components with **Radix UI**.
- Traffic and visitor metrics with **Vercel Analytics**.
			`.trim(),
		},
		'narrativa-blog': {
			shortDescription:
				'Editorial portal and blog focused on analytical depth, editorial rigor, flawless typography and fast reading speed.',
			content: `
## Narrativa Blog

**Narrativa Blog** is an editorial and news platform designed around readability, content performance and organic indexing (SEO).

### Key Features:
- **Rich Content Editor**: Panel with a Notion/Medium-style visual editor to publish articles with refined typography.
- **Content Management System (CMS)**: Admin panel with drafts, revisions, authors and categories.
- **Automated On-Page SEO**: Dynamic metadata, Open Graph for social networks, JSON-LD structured data and RSS feeds.
- **Extreme Speed**: Static rendering with Server Components so articles open instantly.

### Architecture & Technologies:
- **Next.js**, **React**, **TypeScript** and **Prisma ORM**.
- **MariaDB** relational database.
- Writer and administrator authentication with **Better Auth**.
			`.trim(),
		},
		footeasy: {
			shortDescription:
				'Corporate web system for managing municipal sports competitions, with 772 members, 24 teams and 693 registered athletes.',
			content: `
## FootEasy: Sports Championship Management

**FootEasy** is a complete corporate system built to modernize and manage the municipal sports competitions and championships of the City Hall of Campina Grande do Sul.

### Numbers in Production:
- **772** registered members
- **24** active clubs and teams
- **693** registered athletes with documentation and history

### Key Features:
- **Automated Standings**: Points, tiebreak criteria, goal difference and brackets calculated in real time.
- **Digital Match Sheets**: Online recording of goals, line-ups, yellow and red cards and top scorers during each round.
- **Registration & Compliance**: Complete athlete records, document control and automatic suspensions for accumulated cautions.
- **Official Reports**: Round closing with export of approved reports for the municipal department.

### Architecture & Technologies:
- Built with **Next.js**, **TypeScript**, **Prisma ORM** and a **MySQL** database.
- High-integrity data modeling to guarantee consistency of simultaneous results.
			`.trim(),
		},
		sira: {
			shortDescription:
				'Public contract oversight with digitally signed PDF reports, QR Code and Azure AD SSO authentication.',
			content: `
## SIRA: Integrated Administrative Reporting System

**SIRA** is a corporate platform built for the municipal public sector, focused on compliance and oversight of public administrative contracts.

### Key Features:
- **Contract Oversight**: Complete management of inspections and measurements of works and services contracted by the city.
- **Technical PDF Reports**: Automated report generation with an official layout and inspection photos.
- **Digital Signature & QR Code Validation**: Every issued document carries a verification hash and a QR Code for public validation on the Transparency Portal.
- **Azure AD Integration**: Corporate Single Sign-On (SSO) with role-based access permissions (RBAC).

### Impact and Results:
- Days of bureaucracy removed from issuing technical inspections, which are now filed immediately.
- 100% transparency and per-employee action auditing.

### Architecture:
- **Next.js 15**, **React 19**, **TypeScript**, **Prisma ORM**, **MySQL 8** and **Azure AD** integration.
			`.trim(),
		},
	},
	titles: {
		footeasy: 'FootEasy: Sports Management',
		sira: 'SIRA: Administrative Reports',
	},
	experience: {
		eyebrow: 'Career',
		title: 'Experience & Background',
		items: [
			{
				company: 'City Hall of Campina Grande do Sul',
				role: 'Full Stack Developer & Software Architect',
				period: '2025 / Present',
				badge: 'Public Sector',
				description:
					'Technical leadership and end-to-end development of government corporate systems running in production:',
				highlights: [
					'FootEasy: Complete tournament management with 770+ members, 24 teams and 693 registered athletes.',
					'SIRA: Public contract oversight with digitally signed PDF reports, QR Code and Azure AD SSO.',
					'BookEase: Municipal library platform with DDC classification, loan control and analytical reports.',
				],
			},
			{
				company: 'Freelance Web Engineering & Consulting',
				role: 'Independent Full Stack Developer',
				period: '2023 / Present',
				badge: 'Freelance',
				description:
					'End-to-end development of custom digital solutions for companies and entrepreneurs:',
				highlights: [
					'High-conversion landing pages with Lighthouse 95+ and instant WhatsApp integration.',
					'SaaS applications and admin dashboards with secure authentication and dynamic reports.',
					'Payment gateway integrations (Stripe, Mercado Pago and automated PIX).',
				],
			},
		],
	},
	services: {
		eyebrow: 'Solutions & Technologies',
		title: 'How I can help your project',
		requestQuote: 'Request a custom quote',
		included: "What's included:",
		startProject: 'Start this project',
		items: [
			{
				title: 'SaaS & Web Applications',
				description:
					'Digital products from scratch: database modeling, secure authentication, business rules and a fluid interface.',
				deliverables: [
					'Postgres & Prisma ORM modeling',
					'Authentication and permission control (RBAC)',
					'Admin panel and checkout flow',
					'Automated deploy on scalable infrastructure',
				],
			},
			{
				title: 'Conversion Landing Pages',
				description:
					'Fast, accessible pages focused on sales or lead capture, with direct WhatsApp integration.',
				deliverables: [
					'Responsive mobile-first design',
					'Google Lighthouse score of 95+',
					'Direct WhatsApp and form integration',
					'Technical SEO and Open Graph tags for social networks',
				],
			},
			{
				title: 'Dashboards & Management',
				description:
					'Corporate dashboards with real-time metrics, PDF reports with QR Code and access control.',
				deliverables: [
					'Real-time interactive charts',
					'PDF and Excel report export',
					'Digital signature and QR Code validation',
					'Corporate authentication (SSO / Azure AD)',
				],
			},
		],
		techTitle: 'Technologies I master',
		techSubtitle: 'A modern stack for high speed and easy maintenance.',
		ownCode: '100% your code',
		warranty: 'Warranty included',
	},
	faq: {
		eyebrow: 'Get your questions answered',
		title: 'Frequently Asked Questions',
		otherQuestion: 'Another question? Chat on WhatsApp',
		items: [
			{
				question: 'Do you issue invoices (business-to-business) and sign contracts?',
				answer:
					'Absolutely! Every project comes with a formal contract detailing scope, schedule, delivery milestones and full transfer of copyright. I issue a service invoice (Nota Fiscal de Serviços) as a registered Brazilian business, for companies of any size.',
			},
			{
				question: 'What is the average delivery time for a project?',
				answer:
					'High-conversion landing pages and institutional websites are usually delivered in 1 to 2 weeks. For web systems, admin panels and complete SaaS platforms (MVPs), the usual timeframe is 3 to 6 weeks, always with partial deliveries so you can follow and test progress.',
			},
			{
				question: 'How does payment work?',
				answer:
					'I work with an initial deposit and installments tied to the delivery milestones agreed in the contract, which keeps both sides secure. I accept PIX, bank transfer and Brazilian bank slip (boleto).',
			},
			{
				question: 'How do post-launch support and warranty work?',
				answer:
					'Every project includes a 30-day warranty and free post-deploy support to fix any adjustments or answer technical questions. For those who need continuous improvements and new modules, I also offer support and on-demand evolution packages.',
			},
			{
				question: 'Will the source code and the project be 100% owned by my company?',
				answer:
					'Yes, 100% yours. After delivery and full payment, all intellectual property rights, the GitHub repository, hosting access and the database are transferred entirely to you, with no lock-in or technology dependency.',
			},
			{
				question: "I don't have a design or wireframe. Can you help with that?",
				answer:
					'Yes! I can handle the entire process: from the visual design of the interface (clean, modern, conversion-focused UI/UX) to full development, database structuring and cloud deployment.',
			},
		],
	},
	contact: {
		eyebrow: 'Direct Contact',
		title: "Let's bring your idea to life?",
		subtitle:
			'Message me directly on WhatsApp for a reply within minutes, or send your project details below.',
		whatsappTitle: 'Direct WhatsApp',
		whatsappNote: 'Fastest channel for quotes and questions.',
		emailTitle: 'Email',
		copy: 'Copy',
		copied: 'Copied',
		emailCopied: 'Email copied!',
		reply: 'I reply within 24 business hours',
		invoice: 'Service invoice issued (business-to-business)',
		name: 'Your Name',
		namePlaceholder: 'E.g. John Smith',
		phone: 'WhatsApp or Phone',
		message: 'How can I help you?',
		messagePlaceholder: 'Briefly tell me about the project or system you need...',
		submit: 'Send Message',
		sending: 'Sending...',
		errName: 'Please enter your name.',
		errPhone: 'Please enter your WhatsApp or phone number.',
		errMessage: 'Please briefly describe what you need.',
		success: "Message sent! I'll reply soon.",
		errorSend: 'Could not send. Message me directly on WhatsApp!',
		errorConnection: 'Connection error. Reach me on WhatsApp!',
		consentBefore: 'By submitting, you agree to the',
		consentMiddle: 'and the',
		consentAfter: '.',
	},
	floatingWhatsapp: {
		aria: 'Quick support',
		title: 'Chat on WhatsApp now',
		label: 'Online • Quick quote',
	},
	footer: {
		role: 'Full Stack Engineer',
		top: 'Top',
		privacy: 'Privacy Policy',
		terms: 'Terms of Use',
		rights: 'All rights reserved.',
	},
	company: {
		legalStatus: 'Individual Microentrepreneur (MEI, Brazil)',
	},
	projectPage: {
		backToPortfolio: 'Back to Portfolio',
		cases: 'Cases',
		liveBadge: 'Live',
		caseStudy: 'Case Study',
		viewLive: 'View Live Project',
		similar: 'Similar Project',
		myRole: 'My Role',
		myRoleValue: 'Full Stack & Architect',
		solutionType: 'Solution Type',
		saas: 'SaaS Platform',
		public: 'Public Sector',
		landing: 'Landing Page & Web',
		status: 'Status',
		access: 'Code & Access',
		online: 'Online',
		private: 'Private / Corporate',
		stack: 'Technologies Used:',
		screens: 'Project Screens',
		screensHint: 'Click any screenshot to enlarge it in high resolution:',
		needSimilar: 'Need something similar?',
		needSimilarText: 'I can build a solution of this same quality for your company.',
		whatsapp: 'Chat on WhatsApp',
		requestQuote: 'Request a Quote',
	},
	legal: {
		lastUpdated: 'Last updated',
		updatedAt: 'October 26, 2026',
		back: 'Back to site',
		privacyLinkText: 'Privacy Policy',
		privacy: {
			metaTitle: 'Privacy Policy | Pedro Henrique Andrade',
			metaDescription:
				'How personal data is collected, used and protected on this website, in line with Brazil\'s LGPD.',
			title: 'Privacy Policy',
			sections: [
				{
					h: '1. Who we are',
					p: [
						"This website is operated by **{legalName}**, {legalStatus}, registered under CNPJ (Brazilian company tax ID) no. {cnpj}, headquartered at {address}. For the purposes of Brazil's General Data Protection Law (Law no. 13,709/2018 – LGPD), we are the **controller** of the personal data processed here.",
					],
				},
				{
					h: '2. Data we collect',
					ul: [
						'**Contact form:** name, phone/WhatsApp number and the content of the message you send.',
						'**Direct contact:** data you provide to us through WhatsApp or email.',
						'**Browsing data:** technical information and access statistics (pages visited, device, browser, country), collected in aggregate by Vercel Analytics.',
						'**Language preference:** a technical cookie that only stores the language you chose on the site.',
					],
				},
				{
					h: '3. Purposes and legal bases',
					ul: [
						'Answering requests, questions and quote inquiries (preliminary steps to a contract).',
						'Providing the contracted services and issuing tax documents (contract performance and legal obligation).',
						"Measuring and improving the site's performance (legitimate interest).",
					],
				},
				{
					h: '4. Sharing',
					p: [
						'We do not sell personal data. We may share it only with providers that make the site work (hosting, database and analytics) and when required by law or a competent authority.',
					],
				},
				{
					h: '5. Storage and security',
					p: [
						'Data is kept for as long as necessary to fulfil the purposes above and any legal obligations. We adopt reasonable technical measures to protect it against unauthorized access, loss or alteration.',
					],
				},
				{
					h: '6. Your rights',
					p: [
						'Under article 18 of the LGPD, you may request confirmation of processing, access, correction, anonymization, portability, deletion of your data, information about sharing and withdrawal of consent. Visitors located outside Brazil may also send their requests, which we will handle according to the law applicable to them. Send your request to {email}.',
					],
				},
				{
					h: '7. Cookies',
					p: [
						'We only use technical features required for the site to work (such as the language preference) and aggregate analytics tools. You can block or delete cookies in your browser settings.',
					],
				},
				{
					h: '8. Changes',
					p: [
						'This policy may be updated at any time; the date of the latest revision is shown at the top of the page.',
					],
				},
				{
					h: '9. Contact',
					p: ['{owner} – {email} – {phone}'],
				},
			],
		},
		terms: {
			metaTitle: 'Terms of Use | Pedro Henrique Andrade',
			metaDescription: 'General conditions for using the website and hiring the services.',
			title: 'Terms of Use',
			sections: [
				{
					h: '1. Identification',
					p: [
						'This website belongs to **{legalName}**, {legalStatus}, CNPJ (Brazilian company tax ID) no. {cnpj}, headquartered at {address}. By using it, you agree to these Terms.',
					],
				},
				{
					h: '2. Purpose',
					p: [
						'The website presents the portfolio and the software and technology development services offered by {owner}, and allows you to send contact and quote requests.',
					],
				},
				{
					h: '3. Hiring services',
					ul: [
						'Deadlines, scope, prices and payment terms are defined in a proposal or contract specific to each project.',
						'Sending a message or quote request creates no obligation to hire for either party.',
						'We issue service invoices in accordance with the applicable legislation.',
					],
				},
				{
					h: '4. Intellectual property',
					p: [
						"The website's texts, images, trademarks, layouts and code are protected by copyright and may not be copied or reused without authorization. Projects shown in the portfolio belong to their respective owners and are displayed for illustrative purposes.",
					],
				},
				{
					h: '5. Proper use',
					p: [
						'It is forbidden to use the website for unlawful purposes, try to access restricted areas, compromise its security or submit offensive or false content or content that violates third-party rights.',
					],
				},
				{
					h: '6. Limitation of liability',
					p: [
						'We strive to keep the information accurate and the site available, but we do not guarantee uninterrupted operation or the absence of errors. Links to third-party websites are provided for convenience, and we take no responsibility for their content.',
					],
				},
				{
					h: '7. Privacy',
					p: ['The processing of personal data is described in the {privacyLink}.'],
				},
				{
					h: '8. Changes and jurisdiction',
					p: [
						'These Terms may be changed at any time. The courts of the district of Campina Grande do Sul, Paraná, Brazil are elected to settle any disputes, without prejudice to the consumer\'s own jurisdiction where applicable.',
					],
				},
				{
					h: '9. Contact',
					p: ['{email} – {phone}'],
				},
			],
		},
	},
}
