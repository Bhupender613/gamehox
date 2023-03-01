import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  companyName: string;

  @ApiProperty()
  @IsString()
  UEN: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  phoneCode: string;

  @ApiProperty()
  @IsString()
  contactPerson: string;

  @ApiProperty()
  @IsNumber()
  outlets: number;

  @ApiProperty()
  @IsString()
  industryType: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  isBlocked: boolean;
}
