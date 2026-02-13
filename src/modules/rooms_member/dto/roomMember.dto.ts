import { IsString, IsEnum, IsOptional, IsUUID } from 'class-validator';

enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  OWNER = 'OWNER'
}

export class CreateRoomMemberDto {
  @IsUUID('4', { message: 'ID do usuário inválido' })
  @IsString()
  userId!: string;

  @IsUUID('4', { message: 'ID da sala inválido' })
  @IsString()
  roomId!: string;

  @IsEnum(Role, { message: 'Cargo inválido. Use ADMIN ou MEMBER' })
  @IsOptional() 
  role?: Role;
}


/*
model room_members {
  id       String   @id @default(uuid())
  role     Role     @default(MEMBER)
  joinedAt DateTime @default(now())
  userId   String
  roomId   String
  rooms    rooms    @relation(fields: [roomId], references: [id], onDelete: Cascade)
  users    users    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, roomId])
  @@index([roomId])
  @@index([userId])
} */