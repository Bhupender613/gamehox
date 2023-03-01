import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateCustomerDto {
    @ApiProperty()
    @IsString()
    name:string

    @ApiProperty()
    @IsEmail()
    email:string;

    @ApiProperty()
    @IsString()
    phoneNumber:string;

    @ApiProperty()
    outlet:ObjectId

    @ApiProperty()
    user:ObjectId

    @ApiProperty()
    @IsString()
    remarks:string;

}
