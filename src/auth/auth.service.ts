import { Injectable, HttpStatus, NotFoundException } from "@nestjs/common";
// import { AdminService } from "../admin/admin.service";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { AdminDocument, Admin } from "../admin/entities/admin.entity";
import * as bcrypt from "bcrypt";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, User } from "../users/entities/user.entity";
import { UserLoginType } from "./types";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<AdminDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,

    private readonly jwtService: JwtService
  ) {}

  async login(userLoginType:UserLoginType, type: String) {
    const { email, password } = userLoginType;
    let loginSuccess:any = {};
    let adminDetails= [];
    let userAccountName;
    if (type == "admin") {
      adminDetails = await this.adminModel.find({ email }).exec();
    }
     else {
      adminDetails = await this.userModel
        .find({ email })
        .exec();
    }
   
    if (adminDetails.length) {

        if(adminDetails?.[0]?.isBlocked){
          throw new NotFoundException({
            status: HttpStatus.FORBIDDEN,
            error: "You are Inactive. Please contact to administrator.",
          });
        }
    }
    else
    {
          throw new NotFoundException({
            status: HttpStatus.FORBIDDEN,
            error: "Email Not Found.",
          });
    }

    const isMatch = await bcrypt.compare(password, adminDetails?.[0].password);
    if (isMatch) {
      const payload = { username: adminDetails?.[0].email, userId: adminDetails?.[0]._id };
      const accessToken = await this.jwtService.sign(payload);
      if (accessToken) {
        const filter = { _id: adminDetails?.[0]._id };
        const update = { accessToken: accessToken };
        if (type == "admin") {
          loginSuccess = await this.adminModel
            .findOneAndUpdate(filter, update)
            .exec();
        } 
        else {
          loginSuccess = await this.userModel
            .findOneAndUpdate(filter, update)
            .exec();
        }
      }


      let responseObject = {
        _id: loginSuccess?._id,
        email: loginSuccess?.email,
        name: type == "user" ? loginSuccess?.companyName : loginSuccess?.name,
        accessToken: accessToken,
      };

      return responseObject;
    } else {
      throw new NotFoundException({
        status: HttpStatus.FORBIDDEN,
        error: "Invalid Password.",
      });
    }
  }
}
