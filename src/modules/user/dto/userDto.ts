import { IsString, IsOptional, IsInt, IsUrl, Min } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(12, { message: 'Idade mínima permitida é 12 anos' })
  age?: number;

  @IsOptional()
  @IsString() 
  avatarUrl?: string;
}