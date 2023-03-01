import { APP_FILTER } from "@nestjs/core";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose"

export class GetUserType {
    @ApiProperty()
    skip?:number; 
    @ApiProperty()
    limit?: number;
    @ApiProperty()
    search?: string; 
    @ApiProperty()
    searchKeyword?:string; 
}

export class ForgotPasswordType {
    @ApiProperty()
    email:string;
}
export class UserCsvFieldType {
    @ApiProperty()
    userId:ObjectId; 
}