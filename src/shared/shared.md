# 📦 Pasta `shared`

A pasta `shared` contém recursos reutilizáveis e genéricos utilizados em diferentes partes da aplicação NestJS. Tudo aqui deve ser independente de domínio e servir como suporte comum entre os módulos.

## Estrutura comum

```bash
shared/
├── constants/       # Constantes globais (ex: mensagens, status codes, configs)
├── decorators/      # Decoradores customizados (ex: @Public(), @Roles())
├── dtos/            # DTOs reutilizáveis (ex: Paginação, Filtros globais)
├── exceptions/      # Exceções customizadas (ex: ValidationException)
├── guards/          # Guards reutilizáveis (ex: RolesGuard, JwtAuthGuard)
├── interceptors/    # Interceptadores (ex: LoggingInterceptor)
├── interfaces/      # Interfaces e tipos globais
├── middlewares/     # Middlewares genéricos (se tiver)
├── pipes/           # Pipes customizados (ex: ParseUUIDPipe)
├── utils/           # Funções utilitárias genéricas (ex: formatar data, gerar token)
└── enums/           # Enums compartilhados (ex: UserRole, StatusEnum)
```

## Regras de uso
- Nada aqui deve depender de regra de negócio específica.
- Qualquer módulo pode importar as coisas do shared sem criar acoplamento indevido.
- Se algo começa a ficar complexo ou específico demais, talvez não devesse estar aqui.
- Não deve conter modulo e nem controller.

Quando criar algo no shared?
- Vai ser usado em vários módulos
- É genérico o suficiente
- Ajuda a manter o código limpo e DRY