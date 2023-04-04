import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from "@nestjs/common";
import { AdminService } from "src/admin/admin.service";
import { GetGameType, GetSettingType, GetTagType } from "src/admin/types";
import { isPublicRoute } from "src/auth/roles/roles.decorator";
import { CustomerService } from "./customer.service";

@Controller("customer")
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly adminService: AdminService
  ) {}

  //Get all Tags
  @isPublicRoute()
  @Get("/get-tags")
  getTag(@Query() getTagType: GetTagType) {
    return this.adminService.getTag(getTagType);
  }

  //Get Single Tag
  @isPublicRoute()
  @Get("/get-tags/:id")
  getSingleTag(@Param("id") id: any) {
    return this.adminService.getSingleTag(id);
  }

  //Get all Games
  @isPublicRoute()
  @Get("/get-games")
  getGame(@Query() getGameType: GetGameType) {
    return this.adminService.getGame(getGameType);
  }

  //Get Single Game
  @isPublicRoute()
  @Get("/get-games/:id")
  getSingleGame(@Param("id") id: any) {
    return this.adminService.getSingleGame(id);
  }

  //Get game by tag
  @isPublicRoute()
  @Get("/get-games-by-tag/:id")
  getGameByTag(@Param("id") id: any) {
    return this.adminService.getGameByTag(id);
  }

  //Get all settings
  @isPublicRoute()
  @Get("/get-settings")
  getSetting(@Query() getSettingType: GetSettingType) {
    return this.adminService.getSetting(getSettingType);
  }
}
