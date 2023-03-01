import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AdminModule } from "../admin/admin.module";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin, AdminSchema } from "../admin/entities/admin.entity";
import { User, UserSchema } from "../users/entities/user.entity";
import { UsersModule } from "../users/users.module";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AdminModule),
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "36000s" },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
