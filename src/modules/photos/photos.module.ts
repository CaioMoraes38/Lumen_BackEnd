import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { StorageModule } from '../storage/stora.module';

@Module({
  imports: [
    StorageModule 
  ],
  controllers: [PhotosController],
  providers: [PhotosService, PrismaService],
})
export class PhotosModule {}