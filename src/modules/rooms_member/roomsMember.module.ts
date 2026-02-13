import {Module} from "@nestjs/common";
import {RoomsMemberService} from "./roomsMember.service";
import {RoomsMemberController} from "./roomsMember.controller";
import {PrismaService} from "../../database/prisma/prisma.service";

@Module({
    controllers: [RoomsMemberController],
    providers: [RoomsMemberService, PrismaService]
})
export class RoomsMemberModule {}