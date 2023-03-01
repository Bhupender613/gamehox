import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminDto {
    @ApiProperty()
    @IsString()
    name:string;

    @ApiProperty()
    @IsEmail()
    email:string;
    
    @ApiProperty()
    @IsNotEmpty()
    password:string;

    @ApiProperty()
    @IsString()
    phoneNumber:string;
}
