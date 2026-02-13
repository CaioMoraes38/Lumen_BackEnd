import { Controller, Post, Body, Get, Patch, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'; 
import { RoomsMemberService } from "./roomsMember.service";
import { CreateRoomMemberDto } from "./dto/roomMember.dto";
import { UpdateRoomMemberDto } from "./dto/updateMember.dto";
import { CurrentUser } from "../../utils/Decorator/current-user.decorator"; 

@Controller('rooms-member')
@UseGuards(AuthGuard('jwt')) 
export class RoomsMemberController {
  constructor(private readonly roomsMemberService: RoomsMemberService) {}

  @Post()
  async create(@Body() createRoomMemberDto: CreateRoomMemberDto) {
    return await this.roomsMemberService.create(createRoomMemberDto);
  }

  @Get()
  async findAll() {
    return await this.roomsMemberService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateRoomMemberDto: UpdateRoomMemberDto,
    @CurrentUser() user: any 
  ) {
    return await this.roomsMemberService.update(id, updateRoomMemberDto);
  }
}