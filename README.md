## Commit lint

Ahh, saquei! Tu quer uma doczinha explicando como **seguir o padrão de commit** usando o Conventional Commits. Aqui vai a versão simplificada pra galera saber como mandar commits certinhos:

---

### 📚 **Guia de Commit Padrão: Conventional Commits**

Esta documentação serve para garantir que todos sigam um padrão de mensagens de commit claro e consistente, facilitando o entendimento do histórico de commits e a automação de versões.

---

### 🎯 **Objetivo do Padrão**

O padrão **Conventional Commits** ajuda a definir um formato consistente para as mensagens de commit. Isso facilita a automação de tarefas, como:

- Geração automática de changelogs
- Incremento de versão (SemVer)
- Identificação fácil de mudanças no código

---

### 📝 **Formato de Commit**

Cada mensagem de commit deve seguir o formato:

```
<tipo>(<escopo>): <descrição>
```

Onde:

- **`<tipo>`**: Descreve o tipo da mudança (como `feat`, `fix`, `chore`, etc.).
- **`<escopo>`** (opcional): Indica a parte do sistema que foi alterada (por exemplo, `auth`, `ui`, `api`).
- **`<descrição>`**: Uma breve descrição do que foi feito.

Exemplo:

```
feat(auth): adicionar login com Google
fix(ui): corrigir botão de envio
chore(tests): melhorar cobertura de testes de API
```

---

### 🔑 **Tipos Comuns de Commits**

- **`feat:`** — Usado para novas funcionalidades ou recursos.
  - Exemplo: `feat(auth): adicionar login com Google`
- **`fix:`** — Usado para corrigir bugs.
  - Exemplo: `fix(button): corrigir erro de clique duplo`
- **`chore:`** — Usado para tarefas de manutenção e ajustes no projeto.
  - Exemplo: `chore(tests): atualizar testes de integração`
- **`docs:`** — Mudanças relacionadas a documentação.
  - Exemplo: `docs: atualizar README com novas instruções de setup`
- **`style:`** — Mudanças no estilo do código (ex.: formatação, espaçamento, etc).
  - Exemplo: `style: corrigir indentação do arquivo main.ts`
- **`refactor:`** — Refatoração de código sem mudança de funcionalidade.
  - Exemplo: `refactor: refatorar lógica de autenticação`
- **`perf:`** — Mudanças que melhoram o desempenho.
  - Exemplo: `perf: otimizar consulta ao banco de dados`
- **`test:`** — Mudanças ou adições de testes.
  - Exemplo: `test(auth): adicionar teste de login com Google`

---

### 🚨 **Mensagens Erradas**

Evite mensagens vagas ou que não sigam o formato:

- **Errado:** `arrumei umas coisas`
- **Errado:** `corrigi o bug`

Essas mensagens não são claras o suficiente sobre o que foi feito e não seguem o formato necessário.

---

### 🏗️ **Exemplo de Workflow**

1. Antes de começar a programar, faça um `git pull` para garantir que você tem a versão mais recente do código.
2. Escreva seu código ou faça a correção.
3. Crie um commit com uma mensagem que siga o padrão. Exemplo:

```bash
git commit -m "feat(auth): adicionar login com Google"
```

4. Envie seu commit para o repositório remoto.

---

### 🛠️ **Dicas Extras**

- **Escopo:** Se você sabe exatamente qual parte do sistema foi modificada, adicione o **escopo** (como `ui`, `auth`, `api`, etc.).
- **Imperativo:** Sempre escreva a mensagem no **imperativo**, como se estivesse dando uma instrução. Por exemplo, `fix: corrigir bug` em vez de `fixed: corrigido bug`.

---

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
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
