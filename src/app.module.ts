import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get("EMAIL_HOST"),
          secure: false,
          auth: {
            user: config.get("EMAIL_USER"),
            pass: config.get("EMAIL_PASSWORD"),
          },
        },
        defaults: {
          from: config.get("EMAIL_FROM"),
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    AdminModule,
    AuthModule,
    CustomerModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
