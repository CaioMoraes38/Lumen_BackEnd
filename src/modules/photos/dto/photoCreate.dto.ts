import { IsString, IsNotEmpty, IsInt, IsUrl, IsUUID, IsPositive } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  @IsUrl({}, { message: 'A URL da foto deve ser um link válido' })
  @IsNotEmpty()
  url!: string;

  @IsString()
  @IsNotEmpty()
  storagePath!: string; 

  @IsString()
  @IsUUID('4', { message: 'O ID da sala deve ser um UUID válido' })
  @IsNotEmpty()
  roomId!: string;

  @IsInt()
  @IsPositive()
  width!: number;

  @IsInt()
  @IsPositive()
  height!: number;

  @IsInt()
  @IsPositive()
  size!: number; 
}