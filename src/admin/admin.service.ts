import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin, AdminDocument } from "./entities/admin.entity";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UpdateUserDto } from "../users/dto/update-user.dto";
import { AuthService } from "../auth/auth.service";
import { Industry, IndustryDocument } from "./entities/industry.entity";
import { CreateIndustryDto } from "./dto/create-industry.dto";
import { UpdateIndustryDto } from "./dto/update-industry.dto";
import { responseGetObj, responseObj } from "../helper";
import { GetUserType } from "../users/types";
import { generatePassword, matchPassword } from "../utils/encryption";
import {
  IDENTIFICATION_ALREADY_EXIST,
  INDUSTRY_ALREADY_EXIST,
  PASSWORD_NOT_MATCH,
  SUCCESS,
} from "../constant";
import { GetIndustryType } from "./types";
@Injectable()
export class AdminService {
  /**
   * constructor
   */
  public constructor(
    @InjectModel(Admin.name)
    @Inject(forwardRef(() => AuthService))
    private adminModel: Model<AdminDocument>,
  ) {}

  //////Admin Signup service ////
  async signUp(createAdminDto: CreateAdminDto) {
    try {
      const { password } = createAdminDto;
      const hashPassword = await generatePassword(password);
      const adminData = { ...createAdminDto, password: hashPassword };
      const adminSignup = await new this.adminModel(adminData).save();
      return responseObj(HttpStatus.OK, SUCCESS, adminSignup);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  //////Get single admin data ////
  async findone(id: ObjectId) {
    try {
      const singleAdminDetails = await this.adminModel.findOne({ _id: id });
      return responseObj(HttpStatus.OK, SUCCESS, singleAdminDetails);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // update particular Admin user
  async update(id: ObjectId, updateAdminDto: UpdateAdminDto) {
    try {
      const updateAdminData = await this.adminModel.findByIdAndUpdate(
        { _id: id },
        updateAdminDto,
        { new: true }
      );
      return responseObj(HttpStatus.OK, SUCCESS, updateAdminData);
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }

  // update Admin Password
  async updatePassword(id: ObjectId, updatePasswordDto: UpdatePasswordDto) {
    try {
      const { password, oldPassword } = updatePasswordDto;
      const singleAdmin = await this.adminModel.findOne({ _id: id });
      const isMatch = await matchPassword(oldPassword, singleAdmin?.password);
      if (isMatch) {
        const hashPassword = await generatePassword(password);
        const updateAdminPassword = await this.adminModel.findByIdAndUpdate(
          { _id: id },
          { password: hashPassword },
          { new: true }
        );
        return responseObj(HttpStatus.OK, SUCCESS, updateAdminPassword);
      } else {
        throw new NotFoundException({
          status: HttpStatus.BAD_REQUEST,
          message: PASSWORD_NOT_MATCH,
        });
      }
    } catch (error) {
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
