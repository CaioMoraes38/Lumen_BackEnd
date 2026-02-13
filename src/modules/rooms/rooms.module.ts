import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { StorageModule } from '../storage/stora.module'; 

@Module({
  imports: [
    StorageModule 
  ],
  controllers: [RoomsController],
  providers: [
    RoomsService, 
    PrismaService 
  ],
})
export class RoomsModule {}