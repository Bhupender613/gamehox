import { Module } from "@nestjs/common";
import { AdminService } from "src/admin/admin.service";
import { AdminController } from "src/admin/admin.controller";
import { Admin, AdminSchema } from "src/admin/entities/admin.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "src/auth/auth.module";
import { Tag, TagSchema } from "src/admin//entities/tag.entity";
import { Game, GameSchema } from "src/admin//entities/game.entity";
import { Setting, SettingSchema } from "src/admin//entities/setting.entity";
import { Hometag, HometagSchema } from "src/admin/entities/homeTag.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    MongooseModule.forFeature([{ name: Setting.name, schema: SettingSchema }]),
    MongooseModule.forFeature([{ name: Hometag.name, schema: HometagSchema }]),
    UsersModule,
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
