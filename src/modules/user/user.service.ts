import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { StorageService } from '../storage/storage.service'; // Importe o seu service genérico
import { UpdateUserDto } from './dto/userDto'; 

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService // Injeção do serviço de upload
  ) {}

  // --- UPLOAD DE AVATAR (NOVO) ---
  async updateAvatar(userId: string, file: Express.Multer.File) {
    // 1. Usa o serviço genérico para subir a imagem na pasta 'avatars'
    // O StorageService devolve a URL pública
    const { url } = await this.storageService.uploadFile(file, 'avatars');

    // 2. Atualiza o banco de dados com a nova URL
    return this.prisma.users.update({
      where: { id: userId },
      data: { avatarUrl: url },
      select: {
        id: true,
        name: true,
        avatarUrl: true, // Retorna o avatar novo para o Front atualizar na hora
      },
    });
  }

  // --- BUSCAR MEU PERFIL (Privado) ---
  async findById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true, // Email é retornado aqui pois é o próprio dono
        age: true,
        avatarUrl: true,
        createdAt: true,
        // Senha e RefreshToken JAMAIS devem ser retornados
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return user;
  }

  // --- BUSCAR PERFIL DE OUTRO (Público) ---
  async findPublicProfile(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        avatarUrl: true,
        // Não retornamos email nem idade por privacidade
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return user;
  }

  // --- ATUALIZAR DADOS TEXTUAIS ---
  async update(id: string, updateUserDto: UpdateUserDto) {
    // Verifica se o usuário existe antes de tentar atualizar
    await this.findById(id);

    return this.prisma.users.update({
      where: { id },
      data: {
        ...updateUserDto,
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        avatarUrl: true,
      },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.users.delete({
      where: { id },
    });
  }
}