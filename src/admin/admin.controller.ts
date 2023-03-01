import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AuthService } from "../auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { isPublicRoute } from "../auth/roles/roles.decorator";
import { ObjectId } from 'mongoose';


@Controller({ path: "admin" })
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService,
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
}



 
