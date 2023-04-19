import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Customer, CustomerSchema } from "./entities/customer.entity";
import { AdminModule } from "src/admin/admin.module";
import { Tag, TagSchema } from "src/admin/entities/tag.entity";
import { Game, GameSchema } from "src/admin/entities/game.entity";
import { Setting, SettingSchema } from "src/admin/entities/setting.entity";
import { HomeTag, HomeTagSchema } from "src/admin/entities/homeTag.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
    MongooseModule.forFeature([{ name: Setting.name, schema: SettingSchema }]),
    MongooseModule.forFeature([{ name: HomeTag.name, schema: HomeTagSchema }]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
