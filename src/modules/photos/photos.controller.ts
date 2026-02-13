import { Controller, Post, Body, UseGuards, UseInterceptors, UploadedFile, BadRequestException, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotosService } from './photos.service';
import { CurrentUser } from 'src/utils/Decorator/current-user.decorator';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('upload')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('roomId') roomId: string, 
    @CurrentUser() user: any
  ) {
    if (!file) throw new BadRequestException('Arquivo é obrigatório.');
    if (!roomId) throw new BadRequestException('ID da sala é obrigatório.');

    return this.photosService.uploadAndCreate(file, roomId, user.id);
  }

  @Get('room/:roomId')
  @UseGuards(AuthGuard('jwt'))
  async getByRoom(@Param('roomId') roomId: string) {
    return this.photosService.getPhotosByRoomId(roomId);
  }
}