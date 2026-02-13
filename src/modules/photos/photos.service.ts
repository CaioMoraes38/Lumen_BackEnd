import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { StorageService } from '../storage/storage.service'; 


@Injectable()
export class PhotosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService
  ) {}

  async uploadAndCreate(file: Express.Multer.File, roomId: string, uploaderId: string) {
    const { url, path } = await this.storageService.uploadFile(file, 'posts');

    return this.prisma.photos.create({
      data: {
        url: url,
        storagePath: path,
        roomId: roomId,
        uploaderId: uploaderId,
        size: file.size,
        width: 0,  
        height: 0, 
      },
    });
  }

   async getPhotosByRoomId(roomId: string) {
    const photos = await this.prisma.photos.findMany({
        where: { roomId },
        orderBy: { createdAt: 'desc' },
        include: {
            users: { 
                select: {
                    id: true,
                    name: true,
                    avatarUrl: true 
                }
            }
        }
    });
    return photos;
}
};


/*
  model photos {
  id          String    @id @default(uuid())
  url         String
  storagePath String
  width       Int
  height      Int
  size        Int
  createdAt   DateTime @default(now())
  roomId      String
  uploaderId  String
  rooms       rooms    @relation(fields: [roomId], references: [id], onDelete: Cascade)
  users       users    @relation(fields: [uploaderId], references: [id])

  @@index([roomId])
}
 */