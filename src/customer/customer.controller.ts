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
import { AllTagType, GameByTag, GetAllGameType } from "./types";

@Controller("customer")
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService //  private readonly adminService: AdminService
  ) {}

  //Get all Tags
  @isPublicRoute()
  @Get("/get-tags")
  getTag(@Query() allTagType: AllTagType) {
    return this.customerService.getTag(allTagType);
  }

  //Get Single Tag
  @isPublicRoute()
  @Get("/get-tags/:id")
  getSingleTag(@Param("id") id: any) {
    return this.customerService.getSingleTag(id);
  }

  //Get all Games
  @isPublicRoute()
  @Get("/get-games")
  getGame(@Query() getGameType: GetAllGameType) {
    return this.customerService.getGame(getGameType);
  }

  //Get Single Game
  @isPublicRoute()
  @Get("/get-games/:id")
  getSingleGame(@Param("id") id: any) {
    return this.customerService.getSingleGame(id);
  }

  //Get game by tag
  @isPublicRoute()
  @Get("/get-games-by-tag/:id")
  getGameByTag(@Query() gameByTag: GameByTag) {
    return this.customerService.getGameByTag(gameByTag);
  }

  //Get all settings
  @isPublicRoute()
  @Get("/get-settings")
  getSetting() {
    return this.customerService.getSetting();
  }

  //Get all home tags
  @isPublicRoute()
  @Get("/get-home-tags")
  getHomeTags() {
    return this.customerService.getHomeTags();
  }
}
