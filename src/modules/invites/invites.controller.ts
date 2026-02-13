import { Controller, Post, Body, Param, UseGuards } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/utils/Decorator/current-user.decorator';

@Controller('invites')
@UseGuards(AuthGuard('jwt'))
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {}

  @Post() 
  async create(@Body('roomId') roomId: string, @CurrentUser() user: any) {
    return this.invitesService.createInvite({ roomId }, user.id);
  }

  @Post('join/:code') 
  async join(@Param('code') code: string, @CurrentUser() user: any) {
    return this.invitesService.acceptInvite(code, user.id);
  }
}