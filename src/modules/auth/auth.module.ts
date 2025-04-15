import { Module } from '@nestjs/common';
import { AuthGetController, AuthPostController, LoginService, TokenService } from './auth.index';

@Module({
  controllers: [AuthGetController, AuthPostController],
  providers: [TokenService, LoginService],
  imports: [],
})
export class AuthModule {}
