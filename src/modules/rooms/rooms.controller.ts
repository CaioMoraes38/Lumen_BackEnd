import { Controller, Post, Body, Get, UseGuards, UseInterceptors,Param, UploadedFile, Delete} from "@nestjs/common";
import { CreateRoomDtos } from "./dto/createRoomsDtos";
import { RoomsService } from "./rooms.service";
import { CurrentUser } from "../../utils/Decorator/current-user.decorator";
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from "@nestjs/platform-express"; 

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(FileInterceptor('file')) 
    async createRoom(
        @UploadedFile() file: Express.Multer.File, 
        @Body() createRoomDtos: CreateRoomDtos,    
        @CurrentUser() user: any
    ) {
        console.log("Usuário que está criando a sala:", user.id);
        
        return await this.roomsService.createRoom(createRoomDtos, user.id, file);
    }

    @Get('my-rooms')
    @UseGuards(AuthGuard('jwt'))
    async listUserRooms(@CurrentUser() user: any) {
        return await this.roomsService.getMyRooms(user.id);
    }

    @Delete(':roomId')
    @UseGuards(AuthGuard('jwt'))
    async deleteRoom(
        @CurrentUser() user: any,
        @Param('roomId') roomId: string 
    ) {
        return await this.roomsService.deleteRoom(roomId, user.id);
    }
}