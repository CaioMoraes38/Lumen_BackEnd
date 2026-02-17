import { IsDate, IsNotEmpty, IsString } from 'class-validator';

import { IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreateInviteDto {
  @IsUUID('4')
  roomId!: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: Date; 
}





