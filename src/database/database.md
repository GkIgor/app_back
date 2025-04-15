# 🛠️ Pasta `database`

A pasta `database` centraliza toda a configuração do TypeORM usada pela aplicação. Ela isola a lógica de conexão, entidades e migrações, deixando o restante do projeto mais limpo e desacoplado.

## Estrutura comum

```bash
database/
├── config.service.ts      # Serviço que monta a configuração do TypeORM (dinâmico)
├── ormconfig.ts           # Exporta a configuração final para o TypeORMModule
├── migrations/            # Migrações organizadas (opcional)
└── seeds/                 # Scripts de seed (se houver)
```
## Detalhes dos arquivos
### config.service.ts
- Contém a classe responsável por gerar dinamicamente a configuração do TypeORM com base nas variáveis de ambiente (.env), tipo:

```ts
// Exemplo
{
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  ...
}
```
### ormconfig.ts
- Exporta o resultado final da config (geralmente usado no TypeOrmModule.forRoot() ou forRootAsync()).

### migrations/
- Contém os arquivos de migração criados com typeorm migration:create. Geralmente configurado pra rodar via CLI ou automaticamente.

### seeds/
-Scripts opcionais para popular o banco com dados fake/teste.

## Regras de uso
-Não misturar lógica de negócio aqui.
-Tudo aqui é voltado pra infraestrutura de banco.
-Evitar hardcoded: use .env.,