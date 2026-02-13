import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AuthController } from "./auth.controller";
import { JwtStrategy } from '../../utils/auth/jwt.strategy'; 
import { StorageModule } from '../storage/stora.module'; 

@Module({
  imports: [
    StorageModule, 
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'sua_chave_secreta_aqui', 
      signOptions: { expiresIn: '7d' }, 
    }),
  ],
  controllers: [RegisterController, AuthController],
  providers: [
    AuthService, 
    RegisterService, 
    PrismaService,
    JwtStrategy 
  ],
  exports: [AuthService, PassportModule, JwtStrategy], 
})
export class AuthModule {}