import { Controller, Get, Body, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { UpdateUserDto } from './dto/userDto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/utils/Decorator/current-user.decorator';

@Controller('users')
@UseGuards(AuthGuard('jwt')) 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  

  @Get('me')
  async getMe(@CurrentUser() user: any) {
    return this.usersService.findById(user.id);
  }

  @Patch()
  async update(@CurrentUser() user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }

  @Delete()
  async remove(@CurrentUser() user: any) {
    return this.usersService.remove(user.id);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.usersService.findPublicProfile(id);
  }
}