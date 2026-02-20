# 🌟 Lumen - Backend API

Backend da aplicação **Lumen**, uma API RESTful construída com [NestJS](https://nestjs.com/) e [Prisma ORM](https://www.prisma.io/).

## 📋 Descrição

Lumen é uma aplicação que gerencia **salas (rooms)**, **usuários**, **convites**, **fotos** e **armazenamento de arquivos**. A API oferece autenticação, gerenciamento de membros de salas e upload de fotos.

## 🛠️ Tecnologias

<div align="center">

<img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="80" height="80" />
<img src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.svg" alt="Prisma" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="Jest" width="80" height="80" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="ESLint" width="80" height="80" />
<img src="https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png" alt="Prettier" width="80" height="80" />

</div>

<br>

### 🔧 Core

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) | ^11.0.1 | Framework Node.js para aplicações server-side |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | ^5.7.3 | Superset tipado do JavaScript |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | LTS | Runtime JavaScript |
| ![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white) | ^7.8.1 | Programação reativa e assíncrona |

### 🗄️ Banco de Dados & ORM

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) | - | Banco de dados relacional |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) | ^7.3.0 | ORM para banco de dados |
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) | ^2.95.3 | Backend as a Service (PostgreSQL + Storage) |

### 🔐 Autenticação & Segurança

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) | ^11.0.2 | Autenticação via JSON Web Tokens |
| ![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white) | ^0.7.0 | Middleware de autenticação (estratégia JWT) |
| ![Bcrypt](https://img.shields.io/badge/Bcrypt-525252?style=for-the-badge&logo=letsencrypt&logoColor=white) | ^6.0.0 | Hash seguro de senhas |

### 🌐 Comunicação em Tempo Real

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white) | ^4.8.3 | WebSockets para comunicação em tempo real |

### ✅ Validação & Transformação

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![class-validator](https://img.shields.io/badge/class--validator-007396?style=for-the-badge&logo=npm&logoColor=white) | ^0.14.3 | Validação declarativa de DTOs |
| ![class-transformer](https://img.shields.io/badge/class--transformer-007396?style=for-the-badge&logo=npm&logoColor=white) | ^0.5.1 | Transformação e serialização de objetos |

### 🐳 Infraestrutura & DevOps

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) | - | Containerização da aplicação |

### 🧪 Testes & Qualidade de Código

| Tecnologia | Versão | Descrição |
|:---:|:---:|---|
| ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) | ^30.0.0 | Framework de testes unitários e e2e |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) | ^9.18.0 | Linting de código |
| ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) | ^3.4.2 | Formatação de código |

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

## 🚀 Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (opcional, para rodar via container)
- Conta no [Supabase](https://supabase.com/) (banco de dados PostgreSQL + storage)

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

   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

   ```env
   DATABASE_URL="sua-connection-string-postgresql"
   JWT_SECRET="seu-segredo-jwt"
   SUPABASE_URL="https://seu-projeto.supabase.co"
   SUPABASE_KEY="sua-chave-supabase"
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

### Executando com Docker

```bash
# build e start do container
docker compose up --build

# rodar em background
docker compose up -d
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