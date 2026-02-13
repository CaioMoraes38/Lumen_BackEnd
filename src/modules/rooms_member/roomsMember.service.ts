import { Injectable,ConflictException } from "@nestjs/common";
import {PrismaService  } from "../../database/prisma/prisma.service";
import { CreateRoomMemberDto } from "./dto/roomMember.dto";
import { UpdateRoomMemberDto } from "./dto/updateMember.dto";

@Injectable()
export class RoomsMemberService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomMemberDto: CreateRoomMemberDto) {
    try{
        const roomMember = await this.prisma.room_members.create({
            data: {
                ...createRoomMemberDto
            }
        });
        return roomMember;
    }catch(error){
        if (error instanceof Error && 'code' in error && error.code === 'P2002') {
           throw new ConflictException('O usuário já é membro desta sala');
        }
        throw error;
    }
}
    async findAll() {        return await this.prisma.room_members.findMany();
    }
    async update(id: string, updateRoomMemberDto: UpdateRoomMemberDto) {
        return await this.prisma.room_members.update({
            where: { id },
            data: {
                ...updateRoomMemberDto
            }
        });
    }
}