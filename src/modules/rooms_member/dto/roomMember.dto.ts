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


