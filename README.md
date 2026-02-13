# 🌟 Lumen - Backend API

Backend da aplicação **Lumen**, uma API RESTful construída com [NestJS](https://nestjs.com/) e [Prisma ORM](https://www.prisma.io/).

## 📋 Descrição

Lumen é uma aplicação que gerencia **salas (rooms)**, **usuários**, **convites**, **fotos** e **armazenamento de arquivos**. A API oferece autenticação, gerenciamento de membros de salas e upload de fotos.

## 🏗️ Arquitetura

O projeto segue a arquitetura modular do NestJS:

```
src/
├── modules/
│   ├── auth/            # Autenticação e autorização
│   ├── user/            # Gerenciamento de usuários
│   ├── rooms/           # Gerenciamento de salas
│   ├── rooms_member/    # Membros das salas
│   ├── invites/         # Sistema de convites
│   ├── photos/          # Gerenciamento de fotos
│   └── storage/         # Armazenamento de arquivos
├── database/
│   └── prisma/          # Configuração do Prisma
├── generated/
│   └── prisma/          # Client Prisma gerado
├── utils/               # Utilitários compartilhados
├── app.module.ts        # Módulo raiz
├── app.controller.ts    # Controller raiz
├── app.service.ts       # Service raiz
└── main.ts              # Ponto de entrada da aplicação
```

## 🛠️ Tecnologias

- **[NestJS](https://nestjs.com/)** — Framework Node.js para aplicações server-side
- **[Prisma](https://www.prisma.io/)** — ORM para banco de dados
- **[TypeScript](https://www.typescriptlang.org/)** — Superset tipado do JavaScript
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** — Linting e formatação de código

## 🚀 Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados compatível com Prisma (PostgreSQL, MySQL, etc.)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/lumen-back.git
   cd lumen-back
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias (use o `.env` existente como referência):

   ```env
   DATABASE_URL="sua-connection-string"
   ```

4. **Execute as migrations do banco de dados:**

   ```bash
   npx prisma migrate dev
   ```

5. **Gere o client do Prisma:**

   ```bash
   npx prisma generate
   ```

### Executando a aplicação

```bash
# modo desenvolvimento
npm run start

# modo watch (recarrega automaticamente)
npm run start:dev

# modo produção
npm run start:prod
```

## 🧪 Testes

```bash
# testes unitários
npm run test

# testes e2e
npm run test:e2e

# cobertura de testes
npm run test:cov
```

## 📦 Banco de Dados

O projeto utiliza **Prisma** como ORM. O schema está definido em [`prisma/schema.prisma`](prisma/schema.prisma).

### Comandos úteis do Prisma

```bash
# criar uma nova migration
npx prisma migrate dev --name nome_da_migration

# aplicar migrations em produção
npx prisma migrate deploy

# abrir o Prisma Studio (interface visual do banco)
npx prisma studio

# resetar o banco de dados
npx prisma migrate reset
```

## 📁 Principais Arquivos

| Arquivo | Descrição |
|---|---|
| [`src/main.ts`](src/main.ts) | Ponto de entrada da aplicação |
| [`src/app.module.ts`](src/app.module.ts) | Módulo raiz que importa todos os módulos |
| [`prisma/schema.prisma`](prisma/schema.prisma) | Schema do banco de dados |
| [`prisma.config.ts`](prisma.config.ts) | Configuração do Prisma |
| [`nest-cli.json`](nest-cli.json) | Configuração do CLI do NestJS |
| [`tsconfig.json`](tsconfig.json) | Configuração do TypeScript |

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
