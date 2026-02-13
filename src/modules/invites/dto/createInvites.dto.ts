import { IsDate, IsNotEmpty, IsString } from 'class-validator';

import { IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreateInviteDto {
  @IsUUID('4')
  roomId!: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: Date; 
}





/**
 * model invites {
  id        String       @id @default(uuid())
  code      String       @unique
  status    InviteStatus @default(PENDING)
  expiresAt DateTime
  roomId    String
  inviterId String
  createdAt DateTime     @default(now())
  users     users        @relation(fields: [inviterId], references: [id])
  rooms     rooms        @relation(fields: [roomId], references: [id], onDelete: Cascade)

  @@index([code])
}
 */