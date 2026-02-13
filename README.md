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
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="ESLint" width="80" height="80" />
<img src="https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png" alt="Prettier" width="80" height="80" />

</div>

<br>

| Tecnologia | Descrição |
|:---:|---|
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) | Framework Node.js para aplicações server-side |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) | ORM para banco de dados |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Superset tipado do JavaScript |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | Runtime JavaScript |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) | Linting de código |
| ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) | Formatação de código |

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

   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

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
