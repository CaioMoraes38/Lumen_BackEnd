import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateRoomDtos } from "./dto/createRoomsDtos";
import { StorageService } from '../storage/storage.service';

@Injectable()
export class RoomsService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly storageService: StorageService
    ) { }

    async createRoom(roomDto: CreateRoomDtos, userId: string, file?: Express.Multer.File) {

        let urlCapa = null;

        if (file) {
            const { url } = await this.storageService.uploadFile(file, 'covers');
            let urlCapa = url;
        }

        return this.prisma.rooms.create({
            data: {
                name: roomDto.name,
                description: roomDto.description,
                coverUrl: urlCapa,

                room_members: {
                    create: {
                        userId: userId,
                        role: 'OWNER'
                    }
                }
            },
            include: {
                room_members: true
            }
        });
    }

    async getMyRooms(userId: string) {
        return this.prisma.rooms.findMany({
            where: {
                room_members: {
                    some: {
                        userId: userId
                    }
                }
            },
            include: {
                room_members: true,
                _count: {
                    select: {
                        room_members: true,
                        photos: true
                    }
                }
            },
        });
    }
    async deleteRoom(roomId: string, userId: string) {
        const room = await this.prisma.rooms.findUnique({
            where: { id: roomId },
            include: { room_members: true }
        });

        if (!room) {
            throw new NotFoundException('Sala não encontrada.');
        }

        const isOwner = room.room_members.some(
            (member) => member.userId === userId && member.role === 'OWNER'
        );

        if (!isOwner) {
            throw new ForbiddenException('Apenas o dono da sala pode deletá-la.');
        }

        await this.prisma.rooms.delete({
            where: { id: roomId }
        });

        return { message: "Sala deletada com sucesso!" };
    }

}