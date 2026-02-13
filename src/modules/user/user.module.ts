import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { PrismaService } from 'src/database/prisma/prisma.service'; 
import { StorageModule } from '../storage/stora.module';

@Module({
  imports: [
    StorageModule 
  ], 
  controllers: [UsersController],
  providers: [
    UsersService, 
    PrismaService 
  ],
  exports: [UsersService],
})
export class UsersModule {}