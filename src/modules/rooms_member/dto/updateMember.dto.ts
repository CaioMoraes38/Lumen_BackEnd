import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateRoomMemberDto {
  @IsEnum(['ADMIN', 'MEMBER'], { message: 'Cargo inválido' })
  @IsNotEmpty()
  role!: 'ADMIN' | 'MEMBER';
}