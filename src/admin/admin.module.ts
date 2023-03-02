import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { Admin, AdminSchema } from "./entities/admin.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { Tag, TagSchema } from "./entities/tag.entity";
import { Game, GameSchema } from "./entities/game.entity";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    UsersModule,
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
