import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateRoomDtos{
    @IsString()
    name!: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    coverUrl?: string;
}

/*id           String         @id
  name         String
  description  String?
  coverUrl     String?
  invites      invites[]
  photos       photos[]
  room_members room_members[] */