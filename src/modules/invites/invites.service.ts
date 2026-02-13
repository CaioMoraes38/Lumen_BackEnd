import { Injectable, BadRequestException, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { CreateInviteDto } from "./dto/createInvites.dto";
import { randomBytes } from "crypto";
import { InviteStatus } from "src/generated/prisma/enums"; 

@Injectable()
export class InvitesService {
  constructor(private readonly prisma: PrismaService) {}

  async createInvite(createInviteDto: CreateInviteDto, inviterId: string) {
    const code = randomBytes(4).toString("hex").toUpperCase();
    const expiresAt = createInviteDto.expiresAt ? new Date(createInviteDto.expiresAt) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    return this.prisma.invites.create({
      data: {
        roomId: createInviteDto.roomId,
        code,
        inviterId,
        expiresAt,
        status: InviteStatus.PENDING, 
      },
    });
  }

  async acceptInvite(code: string, userId: string) {
    const invite = await this.prisma.invites.findUnique({
      where: { code },
    });

    if (!invite) {
      throw new NotFoundException('Convite não encontrado.');
    }

    if (invite.status === InviteStatus.USED) {
      throw new BadRequestException('Este convite já foi utilizado.');
    }

    if (invite.status === InviteStatus.EXPIRED || new Date() > invite.expiresAt) {
      if (invite.status !== InviteStatus.EXPIRED) {
        await this.prisma.invites.update({ where: { id: invite.id }, data: { status: InviteStatus.EXPIRED } });
      }
      throw new BadRequestException('Este convite expirou.');
    }

    return this.prisma.$transaction(async (tx) => {
      const existingMember = await tx.room_members.findUnique({
        where: {
          userId_roomId: { userId, roomId: invite.roomId }
        }
      });

      if (existingMember) {
        throw new ConflictException('Você já faz parte desta sala.');
      }

      const member = await tx.room_members.create({
        data: {
          userId,
          roomId: invite.roomId,
          role: 'MEMBER',
        },
      });

      await tx.invites.update({
        where: { id: invite.id },
        data: { status: InviteStatus.USED }
      });

      return member;
    });
  }
}