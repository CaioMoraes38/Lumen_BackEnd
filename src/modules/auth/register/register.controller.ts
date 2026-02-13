import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterService } from './register.service';

@Controller('auth/register') 
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file')) // 1. Intercepta o campo 'file'
  async create(
    @Body() body: { name: string; email: string; age: string; password: string },
    @UploadedFile() file: Express.Multer.File // 2. Recebe o arquivo (pode ser undefined)
  ) {
    const data = {
      ...body,
      age: Number(body.age),
    };

    return this.registerService.registerUser(data, file);
  }
}