import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { PhotosModule } from './modules/photos/photos.module';
import { RoomsMemberModule } from './modules/rooms_member/roomsMember.module';
import { InvitesModule } from './modules/invites/invites.module';
import { UsersModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { StorageModule } from './modules/storage/stora.module';
 


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),AuthModule, RoomsModule, PhotosModule, 
    RoomsMemberModule, InvitesModule, UsersModule, 
    StorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
