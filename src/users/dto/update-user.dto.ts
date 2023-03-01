import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  companyName: string;

  @ApiProperty()
  @IsString()
  UEN: string;

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
  logo: string;

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
  address: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  lastLogin: string;

  @ApiProperty()
  isBlocked: boolean;

  @ApiProperty()
  statusChange: boolean;
}
