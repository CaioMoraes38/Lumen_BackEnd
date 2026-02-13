<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

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
