// Controllers
export { AuthGetController } from './controllers/auth.get.controller';
export { AuthPostController } from './controllers/auth.post.controller';

// Services
export { LoginService } from './services/login/auth.login.service';
export { TokenService } from './services/token/auth.token.service';

/**
 * Recomendação! Importar e exportar aqui os metodos do modulo. Fica mais limpo os arquivos de imports no futuro.
 *
 * Exemplo:
 *
 * AuthModule antes:
 * import { Module } from '@nestjs/common';
 * import { AuthPostController } from './controllers/auth.post.controller';
 * import { AuthGetController } from './controllers/auth.get.controller';
 * import { TokenService } from './services/token/auth.token.service';
 * import { LoginService } from './services/login/auth.login.service';
 *
 * AuthModule depois:
 * import { Module } from '@nestjs/common';
 * import {
 *   TokenService,
 *   AuthGetController,
 *   AuthPostController,
 *   LoginService,
 * } from './auth.index';
 */
