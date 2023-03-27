import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AuthService } from "../auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { isPublicRoute } from "../auth/roles/roles.decorator";
import { ObjectId } from "mongoose";
import { CreateTagDto } from "./dto/create-tag.dto";
import {
  DownloadTagCSV,
  GetGameType,
  GetSettingType,
  GetTagType,
} from "./types";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";

@Controller({ path: "admin" })
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService
  ) {}

  //Admin signup function
  @isPublicRoute()
  @Post("/register")
  signUp(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.signUp(createAdminDto);
  }

  //Admin login  function
  @isPublicRoute()
  @Post("/login")
  login(@Body() adminLoginDto: AdminLoginDto) {
    return this.authService.login(adminLoginDto, "admin");
  }

  //Get all Tags in Admin
  //@isPublicRoute()
  @Get("/get-tags")
  getTag(@Query() getTagType: GetTagType) {
    return this.adminService.getTag(getTagType);
  }

  //Get all Settings in Admin
  //@isPublicRoute()
  @Get("/get-settings")
  getSetting(@Query() getSettingType: GetSettingType) {
    return this.adminService.getSetting(getSettingType);
  }

  @Get("/get-tags/:id")
  getSingleTag(@Param("id") id: any) {
    return this.adminService.getSingleTag(id);
  }

  //Get all Tags in Admin
  //@isPublicRoute()
  @Get("/get-games")
  getGame(@Query() getGameType: GetGameType) {
    return this.adminService.getGame(getGameType);
  }

  @Get("/get-games/:id")
  getSingleGame(@Param("id") id: any) {
    return this.adminService.getSingleGame(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get("/:id")
  findone(@Param("id") id: any) {
    return this.adminService.findone(id);
  }

  @Patch("/:id")
  update(@Param("id") id: ObjectId, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @Patch("/update-password/:id")
  updatePassword(
    @Param("id") id: ObjectId,
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.adminService.updatePassword(id, updatePasswordDto);
  }

  //add Tag in Admin
  //@isPublicRoute()
  @Post("/add-tag")
  addTag(@Body() createTagDto: CreateTagDto) {
    return this.adminService.addTag(createTagDto);
  }

  // update Tags in Admin
  @Patch("/update-tag/:id")
  tagUpdate(@Param("id") id: ObjectId, @Body() updateTagDto: UpdateTagDto) {
    return this.adminService.tagUpdate(id, updateTagDto);
  }

  // Delete Tag in Admin
  //@isPublicRoute()
  @Patch("/delete-tag/:id")
  deleteTag(@Param("id") id: ObjectId, @Body() deleteValue: any) {
    const { isDeleted } = deleteValue;
    return this.adminService.deleteTag(id, isDeleted);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //add Game in Admin
  //@isPublicRoute()
  @Post("/add-game")
  addGame(@Body() creategameDto: CreateGameDto) {
    return this.adminService.addGame(creategameDto);
  }

  // update Tags in Admin
  @Patch("/update-game/:id")
  gameUpdate(@Param("id") id: ObjectId, @Body() updateGameDto: UpdateGameDto) {
    return this.adminService.gameUpdate(id, updateGameDto);
  }

  // Delete Tag in Admin
  //@isPublicRoute()
  @Patch("/delete-game/:id")
  deleteGame(@Param("id") id: ObjectId, @Body() deleteValue: any) {
    const { isDeleted } = deleteValue;
    return this.adminService.deleteGame(id, isDeleted);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////

  //add Setting in Admin
  //@isPublicRoute()
  @Post("/add-setting")
  addSetting(@Body() createsettingDto: CreateSettingDto) {
    return this.adminService.addSetting(createsettingDto);
  }

  // update Setting in Admin
  @Patch("/update-setting/:id")
  settingUpdate(
    @Param("id") id: ObjectId,
    @Body() updateSettingDto: UpdateSettingDto
  ) {
    return this.adminService.settingUpdate(id, updateSettingDto);
  }

  // Download CSV for games
  @Post("/download-games-csv")
  downloadGames() {
    return this.adminService.downloadGames();
  }

  // Download CSV for Tags
  @Post("/download-tags-csv")
  downloadTags(@Query() downloadTagCSV: DownloadTagCSV) {
    return this.adminService.downloadTags(downloadTagCSV);
  }
}
