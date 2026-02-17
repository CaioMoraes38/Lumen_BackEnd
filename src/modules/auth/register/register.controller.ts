import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterService } from './register.service';

@Controller('auth/register') 
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file')) 
  async create(
    @Body() body: { name: string; email: string; age: string; password: string },
    @UploadedFile() file: Express.Multer.File 
  ) {
    const data = {
      ...body,
      age: Number(body.age),
    };

    return this.registerService.registerUser(data, file);
  }
}