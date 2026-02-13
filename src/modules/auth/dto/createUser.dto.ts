import { IsEmail, IsInt, IsOptional, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsInt()
  @Type(() => Number) 
  age!: number;

  @IsString()
  @IsOptional() 
  avatarUrl?: string;
}