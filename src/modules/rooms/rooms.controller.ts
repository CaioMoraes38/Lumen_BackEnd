import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { CreateRoomDtos } from "./dto/createRoomsDtos";
import { RoomsService } from "./rooms.service";
import { CurrentUser } from "../../utils/Decorator/current-user.decorator";
import { AuthGuard } from '@nestjs/passport';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) { }
    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createRoom(
        @Body() createRoomDtos: CreateRoomDtos,
        @CurrentUser() user: any
    ) {
        console.log("Usuário que está criando a sala:", user.id);
        return await this.roomsService.createRoom(createRoomDtos, user.id);
    }
    @Get('my-rooms')
    @UseGuards(AuthGuard('jwt'))
    async listUserRooms(@CurrentUser() user: any) {
        return await this.roomsService.getMyRooms(user.id);
    }
};