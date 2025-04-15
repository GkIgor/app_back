# ⚙️ Pasta `config`

A pasta `config` concentra todas as configurações externas e de bibliotecas utilizadas na aplicação. Cada serviço, biblioteca ou integração deve ter sua configuração isolada aqui.

## Objetivo

Centralizar as configurações da aplicação em um único lugar, facilitando a manutenção, reutilização e desacoplamento entre os módulos.

## Estrutura comum

```bash
config/
├── app.config.ts       # Configurações gerais da aplicação (porta, ambiente, etc)
├── cors.config.ts      # Configuração do CORS
├── email.config.ts     # Configuração do serviço de e-mail (ex: SMTP, SendGrid)
├── auth.config.ts      # Chaves JWT, tempo de expiração, etc
├── database.config.ts  # Pode importar/usar o da pasta database
├── redis.config.ts     # Se estiver usando cache
├── queue.config.ts     # Ex: Bull, RabbitMQ
└── index.ts            # Exporta tudo junto se quiser usar `import { ... } from './config'`
```

## Regras de uso

- Nada aqui deve conter lógica de negócio.
- Sempre usar variáveis de ambiente via `process.env`.
- Mantenha cada arquivo focado em um serviço/lib.
- Evite valores hardcoded, mesmo que "só em dev".

## Exemplo de uso

```ts
// auth.config.ts
export default () => ({
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: '1h',
});
```

Depois, usa isso no módulo:

```ts
JwtModule.registerAsync({
  useFactory: authConfig,
})
```
