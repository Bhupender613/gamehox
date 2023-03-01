import { ConsoleLogger, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AdminService } from "../../admin/admin.service";
import { UsersService } from "../../users/users.service";
import { jwtConstants } from "../constants";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CURRENT_PATH } from "../../constant";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true
    });
  }

  async validate(request: any, payload: any) {
    let currentUser;
    let resourceUser;
    const jwt = request.headers['authorization'].split(' ')[1];
    const currentPath= request?.route?.path.split("/")[1];

    if(currentPath== CURRENT_PATH.ADMIN)
    {
      currentUser = await this.adminService.findone(payload.userId);
    }
   
    if(jwt===currentUser?.data?.accessToken)
    {
      return { userId: payload.userId, email: payload.email };
    }
   
  }
}
