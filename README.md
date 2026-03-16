# NullPHR Empres

> Plataforma de portfólio e gestão de projetos para empresas de desenvolvimento de software.

## 📌 Descrição

**NullPHR Empres** é uma aplicação web full-stack que combina um **site público de portfólio** com um **painel administrativo** para gerenciar todo o conteúdo. A plataforma permite que empresas de desenvolvimento exibam seus projetos de forma profissional, gerenciem clientes e recebam contatos de potenciais clientes — tudo em um único sistema.

## 🚀 Funcionalidades

- **Portfólio público** — exibe projetos com descrição, imagens, stack de tecnologias e links externos
- **Painel administrativo** — CRUD completo de projetos, empresas e mensagens
- **Autenticação segura** — login e registro com e-mail/senha e usuário/senha via Better Auth
- **Formulário de contato** — captura nome, e-mail, telefone, cidade, setor e mensagem
- **Upload de imagens** — envio de imagens para projetos, com organização por pastas
- **Carrossel de projetos** — exibição dinâmica na página pública
- **Suporte a Markdown** — descrições ricas de projetos com renderização Markdown
- **Tema escuro** — interface moderna com modo escuro nativo
- **Efeitos 3D** — partículas animadas com Three.js no hero da página pública
- **Proteção de rotas** — middleware que restringe o dashboard a usuários autenticados

## 🛠️ Tecnologias e Stack

### Frontend
| Tecnologia | Uso |
|---|---|
| [Next.js 15](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Biblioteca de interface |
| [TypeScript 5](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | Componentes acessíveis |
| [Motion](https://motion.dev/) | Animações |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Formulários e validação |
| [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | Efeitos 3D/WebGL |
| [Embla Carousel](https://www.embla-carousel.com/) | Carrossel de projetos |
| [Lucide React](https://lucide.dev/) | Ícones |
| [Sonner](https://sonner.emilkowal.ski/) | Notificações toast |

### Backend
| Tecnologia | Uso |
|---|---|
| Next.js API Routes | Endpoints serverless |
| [Prisma 6](https://www.prisma.io/) | ORM e acesso ao banco |
| [PostgreSQL](https://www.postgresql.org/) via [Neon](https://neon.tech/) | Banco de dados |
| [Better Auth](https://www.better-auth.com/) | Autenticação |

### Ferramentas de Desenvolvimento
| Tecnologia | Uso |
|---|---|
| [Biome](https://biomejs.dev/) | Linter e formatador |
| [pnpm](https://pnpm.io/) | Gerenciador de pacotes |

## 📷 Demonstração

<!-- Adicione screenshots ou link para a demo aqui -->

> 📸 _Adicione screenshots da página pública e do dashboard aqui._

| Página Pública | Dashboard |
|---|---|
| ![Home](<!-- link da screenshot -->) | ![Dashboard](<!-- link da screenshot -->) |

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 8
- Banco de dados PostgreSQL (local ou via [Neon](https://neon.tech/))

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nullphr-empres.git
cd nullphr-empres

# 2. Instale as dependências
pnpm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no exemplo abaixo:

```env
# String de conexão do PostgreSQL (Neon ou local)
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"

# Chave secreta para criptografia de sessões (gere uma string aleatória segura)
BETTER_AUTH_SECRET="sua-chave-secreta-aqui"

# URL base da aplicação (localhost em desenvolvimento)
BETTER_AUTH_URL="http://localhost:3000"
```

> **Dica:** para gerar um secret seguro, use `openssl rand -hex 32`.

### Configuração do banco de dados

```bash
# Aplica o schema ao banco e gera o Prisma Client
pnpm prisma db push

# (Opcional) Popula o banco com dados iniciais
pnpm prisma db seed
```

### Execução

```bash
# Desenvolvimento (com hot reload)
pnpm dev

# Produção
pnpm build
pnpm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## 🧪 Testes

> _Testes automatizados ainda não foram implementados. Contribuições são bem-vindas!_

## 📦 Estrutura do projeto

```
.
├── prisma/
│   ├── schema.prisma       # Schema do banco de dados
│   ├── seed.ts             # Script de seed
│   └── migrations/         # Histórico de migrações
├── public/
│   └── uploads/            # Imagens enviadas via upload
│       ├── projects/
│       └── general/
├── src/
│   ├── app/
│   │   ├── (auth)/         # Rotas protegidas (dashboard)
│   │   │   └── dashboard/  # Gestão de projetos, empresas e mensagens
│   │   ├── (public)/       # Rotas públicas (home, login, projetos)
│   │   ├── actions/        # Server Actions (ex: envio de contato)
│   │   └── api/            # Endpoints de API (auth, upload)
│   ├── components/
│   │   ├── gl/             # Componentes WebGL/Three.js
│   │   └── ui/             # Componentes shadcn/ui
│   ├── lib/
│   │   ├── auth.ts         # Configuração do Better Auth
│   │   ├── prisma.ts       # Cliente Prisma singleton
│   │   └── utils.ts        # Utilitários
│   ├── hooks/              # Custom React Hooks
│   └── middleware.ts       # Proteção de rotas autenticadas
├── .env                    # Variáveis de ambiente (não versionar)
├── biome.json              # Configuração do Biome
├── next.config.ts          # Configuração do Next.js
└── package.json
```

### Rotas principais

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Home com portfólio, sobre, contato |
| `/projects/[slug]` | Pública | Detalhe de um projeto |
| `/login` | Pública | Página de login |
| `/register` | Pública | Página de registro |
| `/dashboard` | Protegida | Visão geral do painel |
| `/dashboard/projects` | Protegida | CRUD de projetos |
| `/dashboard/companies` | Protegida | CRUD de empresas |
| `/dashboard/messages` | Protegida | Visualização de mensagens |

## 📌 Roadmap

- [ ] Testes automatizados (unitários e e2e com Playwright)
- [ ] Suporte a múltiplos usuários com controle de permissões
- [ ] Dashboard com métricas e analytics
- [ ] Integração com CDN para armazenamento de imagens (ex: Cloudflare R2, S3)
- [ ] Internacionalização (i18n) — PT-BR / EN
- [ ] Preview de projetos antes de publicar
- [ ] Webhook para notificação de novos contatos (ex: Slack, e-mail)

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feat/minha-feature`
3. Faça commit das suas alterações seguindo [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: adiciona nova funcionalidade"`
4. Envie para o seu fork: `git push origin feat/minha-feature`
5. Abra um Pull Request

Certifique-se de que o código passa na verificação do Biome antes de enviar:

```bash
pnpm lint
pnpm format
```

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
