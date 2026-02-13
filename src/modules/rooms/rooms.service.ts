import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateRoomDtos } from "./dto/createRoomsDtos";

@Injectable()
export class RoomsService {
    constructor(private readonly prisma: PrismaService) { }

    async createRoom(roomDto: CreateRoomDtos, userId: string) {

        return this.prisma.rooms.create({
            data: {
                name: roomDto.name,
                description: roomDto.description,
                coverUrl: roomDto.coverUrl,

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
        return this.prisma.room_members.findMany({
            where: {
                userId: userId,
            },
            include: {
                rooms: true,
            },
        });
    }
}