import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service'; 
import { StorageService } from '../../storage/storage.service'; 
import { randomUUID } from 'node:crypto';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class RegisterService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService 
  ) {}

  async registerUser(data: any, file?: Express.Multer.File) {
    const userExists = await this.prisma.users.findUnique({
      where: { email: data.email }
    });

    if (userExists) throw new ConflictException('Email já cadastrado');

    let avatarUrl: string | null = null;
    
    if (file) {
      try {
        const upload = await this.storageService.uploadFile(file, 'avatars');
        avatarUrl = upload.url;
      } catch (error) {
        throw new BadRequestException('Erro ao fazer upload da imagem');
      }
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    return this.prisma.users.create({
      data: {
        id: randomUUID(),
        name: data.name,
        email: data.email,
        age: data.age, 
        password: hashedPassword,
        avatarUrl: avatarUrl, 
        updatedAt: new Date(),
      },
    });
  }
}